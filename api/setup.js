// Bir marta ochiladi: https://SAYT/api/setup?key=ADMIN_KEY
// Telegram webhook'ni ulaydi, shunda xabardagi "Bekor qilish" tugmasi va /bron buyrug‘i ishlaydi.
export default async function handler(req, res) {
  const { key } = req.query || {};
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) return res.status(401).send('Unauthorized');
  if (!process.env.BOT_TOKEN) return res.status(500).send('BOT_TOKEN yo‘q');
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const tg = (m, b) => fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/${m}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b),
  }).then((r) => r.json());
  const hook = await tg('setWebhook', {
    url: `https://${host}/api/tg-hook`, secret_token: process.env.ADMIN_KEY,
    allowed_updates: ['message', 'callback_query'], drop_pending_updates: true,
  });
  const cmds = await tg('setMyCommands', { commands: [{ command: 'bron', description: 'Band kunlar / Занятые дни' }] });
  return res.status(200).json({ webhook: hook.ok ? 'ulandi ✅' : hook, commands: cmds.ok ? 'ok' : cmds });
}
