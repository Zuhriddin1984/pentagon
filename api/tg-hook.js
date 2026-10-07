// Telegram webhook: "Bekor qilish" tugmasi va /bron buyrug‘i.
// Faqat CHAT_ID dagi egasi boshqara oladi. Webhook'ni bir marta /api/setup?key=ADMIN_KEY orqali ulang.
import { enabled, redis, KEY, isDate } from './_redis.js';

const api = (method, body) =>
  fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/${method}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  }).then((r) => r.json()).catch(() => ({}));

async function listView() {
  const dates = ((await redis('SMEMBERS', KEY)) || []).sort();
  if (!dates.length) return { text: '📋 Band kunlar yo‘q / Занятых дней нет', reply_markup: { inline_keyboard: [] } };
  return {
    text: `📋 Band kunlar / Занятые дни (${dates.length}):`,
    reply_markup: { inline_keyboard: dates.map((d) => [{ text: `↩️ ${d} — bekor qilish`, callback_data: 'free:' + d }]) },
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  if (!process.env.ADMIN_KEY || req.headers['x-telegram-bot-api-secret-token'] !== process.env.ADMIN_KEY) {
    return res.status(401).send('Unauthorized');
  }
  const owner = String(process.env.CHAT_ID);
  const u = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  try {
    if (u.callback_query) {
      const cq = u.callback_query, msg = cq.message;
      if (!msg || String(msg.chat.id) !== owner) return res.status(200).send('ignored');
      const [cmd, date] = String(cq.data || '').split(':');
      if (cmd === 'free' && isDate(date) && enabled) {
        await redis('SREM', KEY, date);
        await api('answerCallbackQuery', { callback_query_id: cq.id, text: '✅ Bo‘shatildi: ' + date });
        if ((msg.text || '').startsWith('📋')) {
          await api('editMessageText', { chat_id: msg.chat.id, message_id: msg.message_id, ...(await listView()) });
        } else {
          await api('editMessageText', {
            chat_id: msg.chat.id, message_id: msg.message_id,
            text: (msg.text || '') + `\n\n❌ Bekor qilindi / Отменено: ${date}`,
            reply_markup: { inline_keyboard: [] },
          });
        }
      } else {
        await api('answerCallbackQuery', { callback_query_id: cq.id });
      }
    } else if (u.message && String(u.message.chat.id) === owner) {
      const t = String(u.message.text || '');
      if (/^\/(bron|start)/.test(t) && enabled) {
        await api('sendMessage', { chat_id: owner, ...(await listView()) });
      }
    }
  } catch (e) { /* Telegram qayta yubormasligi uchun 200 qaytaramiz */ }
  return res.status(200).send('ok');
}
