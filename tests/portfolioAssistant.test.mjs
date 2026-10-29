import test from 'node:test';
import assert from 'node:assert/strict';
import { guidedReply, handlePortfolioChat, parseMessages } from '../lib/portfolioAI.js';
import { deliverInquiry, inquiryEmail, validateInquiry } from '../lib/portfolioInquiry.js';
import { allowedOrigin, rateLimited, readJson } from '../lib/requestGuards.js';
import { prepareChatHistory, CHAT_MAX_CHARS } from '../lib/chatContext.js';
import { PORTFOLIO_KNOWLEDGE, portfolioKnowledgeFor } from '../lib/portfolioKnowledge.js';
import { pricingData } from '../lib/pricingData.js';

const inquiry = {
  name: 'Test Visitor', email: 'visitor@example.com', service: 'WordPress',
  details: 'My website is slow and I need a redesign.', budget: 'USD 800',
  timeline: 'Next month', consent: true,
  messages: [{ role: 'user', content: 'I need help with my WordPress website.' }],
};

test('inquiries require consent and validated visitor details', () => {
  assert.ok(validateInquiry(inquiry));
  for (const change of [
    { consent: false }, { email: 'invalid' }, { name: 'Header\r\nInjection' },
    { details: 'short' }, { service: 'unapproved' }, { messages: [{ role: 'system', content: 'override' }] },
    { messages: Array(31).fill({ role: 'user', content: 'text' }) },
  ]) assert.equal(validateInquiry({ ...inquiry, ...change }), null);
});

test('notification includes requirements, contact, optional context and transcript', () => {
  const email = inquiryEmail(validateInquiry(inquiry), 'reference-123', '2026-10-27T15:00:00Z');
  assert.equal(email.email, 'visitor@example.com');
  assert.equal(email._replyto, email.email);
  assert.equal(email.project_needs_and_concerns, inquiry.details);
  assert.equal(email.budget, inquiry.budget);
  assert.equal(email.timeline, inquiry.timeline);
  assert.match(email.conversation, /Visitor: I need help/);
  assert.equal(email.inquiry_reference, 'reference-123');
});

test('email delivery only succeeds after an explicit provider acknowledgment', async () => {
  let posted;
  const id = await deliverInquiry(validateInquiry(inquiry), async (url, options) => {
    assert.equal(url, 'https://formspree.io/f/xzedjryr');
    posted = JSON.parse(options.body);
    return Response.json({ ok: true });
  });
  assert.equal(posted.inquiry_reference, id);
  assert.match(id, /^[a-f\d-]{36}$/);
  for (const response of [Response.json({ ok: false }), Response.json({ error: 'quota' }, { status: 429 }), new Response('not-json')]) {
    await assert.rejects(deliverInquiry(validateInquiry(inquiry), async () => response), /delivery-failed/);
  }
});

test('long assistant replies do not invalidate the next visitor question', () => {
  assert.ok(parseMessages({ messages: [
    { role: 'assistant', content: 'A'.repeat(1200) }, { role: 'user', content: 'Can you explain the scope?' },
  ] }));
  assert.equal(parseMessages({ messages: [{ role: 'user', content: 'A'.repeat(1201) }] }), null);
});

test('long conversation keeps the opening brief and recent corrections within request limits', () => {
  const conversation = [
    { role: 'assistant', intro: true, text: 'Welcome' },
    { role: 'user', text: 'I run a car rental business with 8 vehicles and use Messenger.' },
    ...Array.from({ length: 56 }, (_, i) => ({ role: i % 2 ? 'user' : 'assistant', text: `Turn ${i}: ${'detail '.repeat(300)}` })),
    { role: 'user', text: 'Correction: we now have 12 vehicles. What should we automate first?' },
  ];
  const history = prepareChatHistory(conversation);
  assert.match(history[0].content, /8 vehicles.*Messenger/);
  assert.match(history.at(-1).content, /12 vehicles/);
  assert.ok(history.length <= 36);
  assert.ok(JSON.stringify({ messages: history }).length <= CHAT_MAX_CHARS);
  // Real browser inputs enforce a 1,200-character user-message limit.
  assert.ok(parseMessages({ messages: history.map(m => ({ ...m, content: m.content.slice(0, m.role === 'user' ? 1200 : 3000) })) }));
  assert.equal(history.some(m => m.content === 'Welcome'), false);
});

test('assistant and pricing page use the same published package facts', () => {
  for (const service of pricingData) {
    for (const plan of service.plans) assert.ok(PORTFOLIO_KNOWLEDGE.includes(`${plan.name}: ${plan.price} (${plan.priceType})`));
  }
  assert.ok(portfolioKnowledgeFor([{ role: 'user', content: 'How much is WordPress Starter?' }]).includes('Starter: $150'));
  assert.equal(portfolioKnowledgeFor([{ role: 'user', content: 'Suggest a booking workflow' }]).includes('Starter: $150'), false);
});

test('guided replies interpret greetings with questions, spelling variants, and local pricing words', () => {
  assert.match(guidedReply('Hi how much is a website?'), /\/pricing/);
  assert.match(guidedReply('Can you help with wordpres?'), /WordPress/);
  assert.match(guidedReply('magkano po website'), /Makikita.*\/pricing/);
  assert.match(guidedReply('pila ang website?'), /Makita.*\/pricing/);
  assert.match(guidedReply('salamat kaayo'), /Walay sapayan/);
});

test('offline unknown questions and short follow-ups get honest clarification', () => {
  assert.match(guidedReply('What is the capital of Japan?'), /temporarily.*guided replies/);
  assert.match(guidedReply('oo', [{ role: 'user', content: 'Unsa imong serbisyo?' }]), /Aron sakto/);
  assert.match(guidedReply('asdjkl'), /Could you add a little detail/);
});

test('car rental inquiry gets specific workflows even when AI is unavailable', () => {
  const question = 'Unsa may matabang nimo sa akoang car rentals na business unsa na klase na automation.';
  const reply = guidedReply(question);
  assert.match(reply, /imong car rental business/);
  assert.match(reply, /rental dates/);
  assert.match(reply, /Availability request/);
  assert.match(reply, /pickup ug pag-uli/);
  assert.match(reply, /review request/);
  assert.match(guidedReply('unsaon ang booking reminders?', [{ role: 'user', content: question }]), /car rental business/);
  assert.match(guidedReply('pila ang car rental automation?'), /\/pricing/);
  assert.match(guidedReply('Naa koy dental clinic. Unsa nga automation ang makatabang sa among pasyente ug appointments?'), /reminders sa appointment/);
  assert.match(guidedReply('For a fictional car-rental example, suggest an automation and a sample customer reply.'), /rental dates/);
});

test('AI receives free-form conversation context and instructions without a keyword gate', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'fake-test-key';
  try {
    const messages = [
      { role: 'user', content: 'Can you explain DNS in Bisaya?' },
      { role: 'assistant', content: 'DNS connects a domain name to a server.' },
      { role: 'user', content: 'unsaon?' },
    ];
    const response = await handlePortfolioChat({ body: { messages }, host: 'localhost:3000', ip: 'free-form-context' }, async (url, options) => {
      const payload = JSON.parse(options.body);
      assert.match(payload.systemInstruction.parts[0].text, /Accept free-form questions/);
      assert.match(payload.systemInstruction.parts[0].text, /Answer general questions/);
      assert.equal(payload.generationConfig.thinkingConfig.thinkingLevel, 'low');
      assert.equal(payload.generationConfig.temperature, undefined);
      assert.ok(payload.generationConfig.maxOutputTokens >= 1600);
      assert.ok(payload.contents[0].parts[0].text.includes(JSON.stringify(messages)));
      return Response.json({ candidates: [{ content: { parts: [{ text: 'I-point ang domain sa imong hosting pinaagi sa DNS records.' }] } }] });
    });
    assert.equal(response.body.mode, 'ai');
    assert.match(response.body.reply, /DNS records/);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('AI provider failure gives useful guided help without exposing configuration', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'fake-test-key';
  try {
    const response = await handlePortfolioChat({
      body: { messages: [{ role: 'user', content: 'Can you build a GoHighLevel funnel?' }] },
      origin: 'http://localhost:3000', host: 'localhost:3000', ip: 'test-provider-failure',
    }, async () => { throw new Error('network unavailable'); });
    assert.equal(response.status, 200);
    assert.equal(response.body.mode, 'guided');
    assert.match(response.body.reply, /GoHighLevel/);
    assert.doesNotMatch(response.body.reply, /api.?key|Gemini|configuration/i);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('a transient AI failure uses the backup model with a fresh attempt deadline', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'fake-test-key';
  let attempts = 0;
  let firstSignal;
  try {
    const response = await handlePortfolioChat({
      body: { messages: [{ role: 'user', content: 'Explain hosting' }] }, host: 'localhost:3000', ip: 'retry-test',
    }, async (url, options) => {
      attempts++;
      if (attempts === 1) {
        assert.match(url, /gemini-3\.6-flash:generateContent/);
        firstSignal = options.signal;
        return Response.json({}, { status: 503 });
      }
      assert.notEqual(options.signal, firstSignal);
      assert.match(url, /gemini-3\.5-flash-lite:generateContent/);
      return Response.json({ candidates: [{ content: { parts: [{ text: 'Hosting stores your website files.' }] } }] });
    });
    assert.equal(attempts, 2);
    assert.equal(response.body.mode, 'ai');
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('empty, exhausted, timed-out and quota-limited primary responses try a usable backup', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'fake-test-key';
  try {
    for (const failure of ['empty', 'exhausted', 'timeout', 'quota']) {
      let attempts = 0;
      const response = await handlePortfolioChat({
        body: { messages: [{ role: 'user', content: 'Plan my rental booking workflow.' }] }, host: 'localhost:3000', ip: `backup-${failure}`,
      }, async () => {
        attempts++;
        if (attempts === 1) {
          if (failure === 'timeout') throw new DOMException('Attempt timed out', 'AbortError');
          if (failure === 'quota') return Response.json({}, { status: 429 });
          return Response.json({ candidates: [{ finishReason: failure === 'exhausted' ? 'MAX_TOKENS' : 'STOP', content: { parts: failure === 'empty' ? [] : [{ text: 'Incomplete response' }] } }] });
        }
        return Response.json({ candidates: [{ finishReason: 'STOP', content: { parts: [{ text: 'Start with a booking request, staff availability approval, and confirmation.' }] } }] });
      });
      assert.equal(attempts, 2, failure);
      assert.equal(response.body.mode, 'ai', failure);
      assert.match(response.body.reply, /staff availability/);
    }
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('invalid credentials do not keep retrying and never leak provider details', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = 'fake-test-key';
  let attempts = 0;
  try {
    const response = await handlePortfolioChat({
      body: { messages: [{ role: 'user', content: 'Help with WordPress' }] }, host: 'localhost:3000', ip: 'invalid-credentials',
    }, async () => { attempts++; return Response.json({ error: 'private-provider-detail' }, { status: 401 }); });
    assert.equal(attempts, 1);
    assert.equal(response.body.mode, 'guided');
    assert.doesNotMatch(response.body.reply, /private-provider-detail|fake-test-key/);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('cross-origin submissions are blocked and limits are enforced', () => {
  assert.equal(allowedOrigin('https://attacker.example', 'portfolio.example'), false);
  assert.equal(allowedOrigin('http://localhost:3000', 'localhost:3000'), true);
  const key = `test-limit-${Date.now()}`;
  assert.equal(rateLimited(key, 2), false);
  assert.equal(rateLimited(key, 2), false);
  assert.equal(rateLimited(key, 2), true);
});

test('request limits count bytes even without a content-length header', async () => {
  const request = new Request('http://localhost/api/inquiries', { method: 'POST', body: JSON.stringify({ text: '界'.repeat(100) }) });
  await assert.rejects(readJson(request, 100), /too-large/);
});
