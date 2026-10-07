// Upstash Redis (Vercel Marketplace → Storage → Upstash Redis) REST helper.
// Env: UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN  (yoki KV_REST_API_URL + KV_REST_API_TOKEN)
const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

export const KEY = 'pentagon:booked';
export const enabled = Boolean(URL_ && TOKEN);

export async function redis(...cmd) {
  const r = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return (await r.json()).result;
}

export const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
