// For Next.js App Router. Copy this file only if using the /app folder.
import { handlePortfolioChat } from '../../../lib/portfolioAI.js';

export const runtime = 'nodejs';

export async function POST(request) {
  if (Number(request.headers.get('content-length') || 0) > 12000) {
    return Response.json({ error: 'Message is too large.' }, { status: 413 });
  }
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 12000) {
      return Response.json({ error: 'Message is too large.' }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
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
