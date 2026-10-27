import { request } from 'node:https';

// Keep visitor prompts and inquiries out of framework fetch caches entirely.
// Both upstream services use HTTPS; IPv4 also avoids local IPv6 connection stalls.
export function postJson(url, options) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    if (target.protocol !== 'https:') return reject(new Error('https-required'));
    const body = options.body || '';
    const outgoing = request(target, {
      method: 'POST',
      family: 4,
      signal: options.signal,
      headers: { ...options.headers, 'Content-Length': Buffer.byteLength(body) },
    }, incoming => {
      const chunks = [];
      let size = 0;
      incoming.on('data', chunk => {
        size += chunk.length;
        if (size > 1_000_000) outgoing.destroy(new Error('upstream-response-too-large'));
        else chunks.push(chunk);
      });
      incoming.on('error', reject);
      incoming.on('end', () => {
        const status = incoming.statusCode || 502;
        const text = Buffer.concat(chunks).toString('utf8');
        resolve({ status, ok: status >= 200 && status < 300, json: async () => JSON.parse(text) });
      });
    });
    outgoing.on('error', reject);
    outgoing.setTimeout(20000, () => outgoing.destroy(new Error('upstream-timeout')));
    outgoing.end(body);
  });
}
