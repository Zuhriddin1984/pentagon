// GET  /api/bookings                     → { dates: ["2026-10-20", ...] }  (band kunlar)
// GET  /api/bookings?remove=DATE&key=ADMIN_KEY → band kunni bo‘shatish (admin)
import { enabled, redis, KEY, isDate } from './_redis.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!enabled) return res.status(200).json({ dates: [], storage: false, reason: 'not-configured: Upstash Redis ulanmagan (Vercel → Storage)' });

  try {
    const { remove, key } = req.query || {};
    if (remove) {
      if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) return res.status(401).send('Unauthorized');
      if (!isDate(remove)) return res.status(400).send('Bad date');
      await redis('SREM', KEY, remove);
      return res.status(200).send('Bo‘shatildi / Freed: ' + remove);
    }
    const dates = (await redis('SMEMBERS', KEY)) || [];
    return res.status(200).json({ dates: dates.sort(), storage: true });
  } catch (e) {
    return res.status(200).json({ dates: [], storage: false, reason: 'error: ' + e.message });
  }
}
