// For Next.js App Router. Copy this file only if using the /app folder.
import { handlePortfolioChat } from '../../../lib/portfolioAI.js';
import { readJson, PRIVATE_HEADERS } from '../../../lib/requestGuards.js';
import { CHAT_MAX_BYTES } from '../../../lib/chatContext.js';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request) {
  let body;
  try {
    body = await readJson(request, CHAT_MAX_BYTES);
  } catch {
    return Response.json({ error: 'Please shorten your message and try again.' }, { status: 400, headers: PRIVATE_HEADERS });
  }

  const response = await handlePortfolioChat({
    body,
    origin: request.headers.get('origin'),
    host: request.headers.get('x-forwarded-host') || request.headers.get('host'),
    ip: String(request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim(),
  });
  return Response.json(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
