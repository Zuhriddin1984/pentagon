// Cloudflare Worker: сайт формасидан келган аризани Telegram'га юборади.
// BOT_TOKEN ва CHAT_ID — Worker "Secrets"да сақланади (сайтда кўринмайди).
// ALLOWED_ORIGIN (ихтиёрий) — сайтингиз манзили, масалан https://pentagon.uz

const cut = (v, n) => String(v ?? '').slice(0, n);

export default {
  async fetch(req, env) {
    const origin = env.ALLOWED_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors });

    let d;
    try { d = await req.json(); } catch { return new Response('Bad JSON', { status: 400, headers: cors }); }

    const name = cut(d.name, 80), phone = cut(d.phone, 40);
    if (!name || !phone) return new Response('Missing fields', { status: 400, headers: cors });

    const text = [
      '🆕 Pavilion Pentagon — yangi ariza / новая заявка', '',
      '👤 ' + name,
      '📞 ' + phone,
      '🎬 ' + cut(d.type, 60),
      '📅 ' + (cut(d.date, 40) || '—'),
      '💬 ' + (cut(d.comment, 800) || '—'),
      '🌐 ' + cut(d.lang, 5).toUpperCase(),
    ].join('\n');

    const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text }),
    });
    return new Response(r.ok ? 'ok' : 'telegram error', { status: r.ok ? 200 : 502, headers: cors });
  },
};
