// Vercel Serverless Function: сайт формасидан келган аризани Telegram'га юборади.
// BOT_TOKEN ва CHAT_ID — Vercel → Settings → Environment Variables да сақланади (кодда йўқ).

const cut = (v, n) => String(v ?? '').slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const d = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const name = cut(d.name, 80), phone = cut(d.phone, 40);
  if (!name || !phone) return res.status(400).send('Missing fields');

  const text = [
    '🆕 Pavilion Pentagon — yangi ariza / новая заявка', '',
    '👤 ' + name,
    '📞 ' + phone,
    '🎬 ' + cut(d.type, 60),
    '📅 ' + (cut(d.date, 40) || '—'),
    '💬 ' + (cut(d.comment, 800) || '—'),
    '🌐 ' + cut(d.lang, 5).toUpperCase(),
  ].join('\n');

  const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: process.env.CHAT_ID, text }),
  });
  return res.status(r.ok ? 200 : 502).send(r.ok ? 'ok' : 'telegram error');
}
