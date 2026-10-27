import test from 'node:test';
import assert from 'node:assert/strict';
import { handlePortfolioChat, parseMessages } from '../lib/portfolioAI.js';
import { deliverInquiry, inquiryEmail, validateInquiry } from '../lib/portfolioInquiry.js';
import { allowedOrigin, rateLimited, readJson } from '../lib/requestGuards.js';

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
