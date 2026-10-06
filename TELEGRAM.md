# Форма аризаларини Telegram'га олиш

Сайтдаги брон формаси тўлдирилиб юборилганда Telegram'га хабар келади:

```
🆕 Pavilion Pentagon — yangi ariza / новая заявка
👤 Исм
📞 Телефон
🎬 Съёмка тури
📅 Сана
💬 Изоҳ
🌐 Тил
```

## 1. Бот ва Chat ID олиш (2 дақиқа)
1. Telegram'да **@BotFather** га ёзинг → `/newbot` → ном беринг. У сизга **токен** беради (`123456:ABC...`). Уни ҳеч кимга кўрсатманг.
2. Ўз ботингизга кириб **Start** босинг (ёки ботни гуруҳга қўшинг, аризалар гуруҳга келиши учун).
3. **Chat ID** билиш: @userinfobot га ёзинг (шахсий чат учун) — у рақамингизни айтади.
   Гуруҳ учун: ботни гуруҳга қўшиб, гуруҳда бир хабар ёзинг, кейин браузерда
   `https://api.telegram.org/bot<ТОКЕН>/getUpdates` очинг — ичидан `"chat":{"id":-100...}` ни топинг.

## 2-0. Vercel'да (энг осон — сайт ҳам, форма ҳам бир жойда)
1. https://vercel.com/new → GitHub репосини (`pentagon`) танланг → **Deploy** (Framework: Other, build керак эмас).
2. Лойиҳа → **Settings → Environment Variables** да иккита ўзгарувчи қўшинг:
   - `BOT_TOKEN` — ботнинг токени
   - `CHAT_ID` — chat ID
3. **Deployments → Redeploy** босинг (ўзгарувчилар қайта юклансин).
Тайёр: `content.js` да `form.endpoint` аллақачон `/api/telegram` га қўйилган, `api/telegram.js` ишлайди.
⚠️ Токенни чатга, кодга ёки GitHub'га ёзманг — фақат Vercel'нинг Environment Variables қисмига.

## 2-а. Cloudflare усули (Vercel ишлатмасангиз) (тавсия этилади) — Cloudflare Worker, бепул
Токен сайт кодида кўринмайди.
1. https://dash.cloudflare.com → Workers & Pages → **Create Worker**.
2. `worker.js` ичидаги кодни Worker'га қўйинг, **Deploy** босинг.
3. Worker → Settings → Variables and Secrets: қўшинг
   - `BOT_TOKEN` (Secret) — ботнинг токени
   - `CHAT_ID` (Secret) — chat ID
   - `ALLOWED_ORIGIN` — сайтингиз манзили (масалан `https://pentagon.uz`), ихтиёрий
4. Worker манзилини (`https://....workers.dev`) нусхалаб, `content.js` да ёзинг:
   ```js
   form: { endpoint: `https://....workers.dev`, ... }
   ```

## 2-б. Тез усул (хавфсиз эмас)
`content.js` да `telegramToken` ва `telegramChatId` ни тўлдиринг.
⚠️ Токен сайт кодида очиқ бўлади — ҳар ким уни кўриб, ботингиздан спам юбориши мумкин.
Фақат синаш учун ишлатинг.

## Текшириш
Сайтда форма тўлдириб юборинг. Хабар келмаса, браузер консолида (F12) хато чиқади,
сайтда эса "Ариза юборилмади, қўнғироқ қилинг + телефон" деган матн кўринади.
