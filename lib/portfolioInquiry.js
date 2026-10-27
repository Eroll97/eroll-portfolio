import { randomUUID } from 'node:crypto';
import { CONTACT_FORM_ENDPOINT, INQUIRY_SERVICES } from './inquiryConfig.js';
import { postJson } from './serverHttp.js';

function field(value, max) {
  return typeof value === 'string' && value.length <= max ? value.trim() : null;
}

export function validateInquiry(body) {
  if (!body || body.consent !== true) return null;
  const name = field(body.name, 100);
  const email = field(body.email, 254);
  const service = field(body.service, 80);
  const details = field(body.details, 3000);
  const budget = field(body.budget || '', 100);
  const timeline = field(body.timeline || '', 100);
  if (!name || /[\r\n\x00-\x1f]/.test(name) ||
      !email || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      !INQUIRY_SERVICES.includes(service) || !details || details.length < 10 ||
      budget === null || timeline === null) return null;

  const messages = body.messages ?? [];
  if (!Array.isArray(messages) || messages.length > 30 ||
      !messages.every(m => m && ['user', 'assistant'].includes(m.role) &&
        typeof m.content === 'string' && m.content.trim() && m.content.length <= 3000)) return null;
  const transcript = messages.map(m => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content.trim()}`).join('\n\n');
  if (transcript.length > 18000) return null;
  return { name, email, service, details, budget, timeline, transcript };
}

export function inquiryEmail(inquiry, id, submittedAt) {
  return {
    _subject: `Portfolio chatbot inquiry — ${inquiry.service}`,
    name: inquiry.name,
    email: inquiry.email,
    _replyto: inquiry.email,
    source: 'Portfolio chatbot',
    inquiry_reference: id,
    submitted_at_utc: submittedAt,
    service: inquiry.service,
    project_needs_and_concerns: inquiry.details,
    budget: inquiry.budget || 'Not specified',
    timeline: inquiry.timeline || 'Not specified',
    conversation: inquiry.transcript || 'Visitor used the project inquiry form directly.',
    consent: 'Visitor agreed to email these details and this conversation to Eroll for follow-up.',
  };
}

export async function deliverInquiry(inquiry, fetcher = postJson) {
  const id = randomUUID();
  const response = await fetcher(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(inquiryEmail(inquiry, id, new Date().toISOString())),
    signal: AbortSignal.timeout(20000),
  });
  const data = await response.json().catch(() => null);
  // Never report success for rejected, unactivated, or unreadable submissions.
  if (!response.ok || data?.ok !== true) {
    console.error('[Inquiry delivery] Rejected', response.status);
    throw new Error('delivery-failed');
  }
  return id;
}
