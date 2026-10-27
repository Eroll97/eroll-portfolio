const buckets = new Map();

export function allowedOrigin(origin, host) {
  if (!origin) return true;
  try {
    const url = new URL(origin);
    return ['http:', 'https:'].includes(url.protocol) &&
      url.host.toLowerCase() === String(host || '').toLowerCase();
  } catch { return false; }
}

export function rateLimited(key, limit = 12, windowMs = 60_000) {
  const now = Date.now();
  for (const [id, bucket] of buckets) {
    if (bucket.until <= now) buckets.delete(id);
  }
  // Do not allow unbounded process memory under many unique clients.
  if (buckets.size >= 5000 && !buckets.has(key)) return true;
  const bucket = buckets.get(key) || { count: 0, until: now + windowMs };
  bucket.count++;
  buckets.set(key, bucket);
  return bucket.count > limit;
}

export async function readJson(request, maxBytes = 24000) {
  if (Number(request.headers.get('content-length') || 0) > maxBytes) {
    throw new Error('too-large');
  }
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid-json');
  const chunks = [];
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > maxBytes) {
      await reader.cancel();
      throw new Error('too-large');
    }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export const PRIVATE_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
};
