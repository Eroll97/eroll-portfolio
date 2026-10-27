import { allowedOrigin, PRIVATE_HEADERS, rateLimited, readJson } from '../../../lib/requestGuards.js';
import { deliverInquiry, validateInquiry } from '../../../lib/portfolioInquiry.js';

export const runtime = 'nodejs';

export async function POST(request) {
  const reply = (body, status) => Response.json(body, { status, headers: PRIVATE_HEADERS });
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (!allowedOrigin(request.headers.get('origin'), host)) return reply({ error: 'Request not allowed.' }, 403);
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  if (rateLimited(`inquiry:${ip}`, 4, 300000)) {
    return reply({ error: 'Please wait a few minutes before sending another inquiry.' }, 429);
  }
  let body;
  try { body = await readJson(request, 28000); }
  catch { return reply({ error: 'Please shorten your inquiry and try again.' }, 400); }
  if (body.website) return reply({ error: 'Unable to send this inquiry.' }, 400);
  const inquiry = validateInquiry(body);
  if (!inquiry) return reply({ error: 'Please check your name, email, project details, and consent.' }, 400);
  try {
    const reference = await deliverInquiry(inquiry);
    return reply({ ok: true, reference }, 200);
  } catch {
    return reply({ error: 'Your inquiry could not be sent yet. Please try again or email Eroll directly.' }, 502);
  }
}
