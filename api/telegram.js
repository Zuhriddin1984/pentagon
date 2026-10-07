// Vercel Serverless Function: forma arizasini Telegram'ga yuboradi va tanlangan sanani "band" qiladi.
// Env: BOT_TOKEN, CHAT_ID (majburiy) · UPSTASH_REDIS_REST_URL/TOKEN (band kunlar uchun) · ADMIN_KEY (ixtiyoriy)
import { enabled, redis, KEY, isDate } from './_redis.js';

const cut = (v, n) => String(v ?? '').slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const d = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const name = cut(d.name, 80), phone = cut(d.phone, 40);
  if (!name || !phone) return res.status(400).send('Missing fields');

  if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) {
    return res.status(500).send('config error: BOT_TOKEN yoki CHAT_ID Vercel Environment Variables da yo‘q');
  }

  // 1) Sanani band qilish (agar tanlangan va saqlash ulangan bo‘lsa)
  const iso = cut(d.dateISO, 10);
  let reserved = false;
  if (iso) {
    if (!isDate(iso)) return res.status(400).send('Bad date');
    const today = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (iso < today) return res.status(400).send('Date in the past');
    if (enabled) {
      try {
        const added = await redis('SADD', KEY, iso);       // 1 = yangi, 0 = allaqachon band
        if (added === 0) return res.status(409).send('Date already booked');
        reserved = true;
      } catch (e) { /* saqlash ishlamasa ham arizani yuboramiz */ }
    }
  }

  // 2) Telegram
  const text = [
    '🆕 Pavilion Pentagon — yangi ariza / новая заявка', '',
    '👤 ' + name,
    '📞 ' + phone,
    '🎬 ' + cut(d.type, 60),
    '📅 ' + (cut(d.date, 40) || '—') + (reserved ? ' ✅ band qilindi' : ''),
    '💬 ' + (cut(d.comment, 800) || '—'),
    '🌐 ' + cut(d.lang, 5).toUpperCase(),
  ].join('\n');
  const reply_markup = reserved
    ? { inline_keyboard: [[{ text: '↩️ Bekor qilish / Отменить', callback_data: 'free:' + iso }]] }
    : undefined;

  const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: process.env.CHAT_ID, text, reply_markup }),
  });
  if (r.ok) return res.status(200).send('ok');

  if (reserved) { try { await redis('SREM', KEY, iso); } catch (e) {} }   // Telegram xato bo‘lsa sanani qaytaramiz
  const j = await r.json().catch(() => ({}));
  return res.status(502).send('telegram error: ' + (j.description || r.status));
}
