/* ============================================================
   PAVILION PENTAGON — SAYT MATNLARI  /  ТЕКСТЫ САЙТА  /  SITE TEXTS
   Barcha yozuvlarni shu faylda o‘zgartiring (index.html ga tegmang).
   Все тексты меняются в этом файле (index.html трогать не нужно).
   Edit every text in this file (no need to touch index.html).

   Har bir matn 3 tilda: uz (o‘zbekcha), ru (русский), en (English).
   • Faqat teskari tirnoq (`) ichidagi matnni o‘zgartiring.
   • <em>so‘z</em> — so‘zni ko‘k rangda ko‘rsatadi.  <br> — yangi qator.
   • Faylni saqlab, brauzerda sahifani yangilang (Cmd/Ctrl + R).
   ============================================================ */

window.CONTENT = {

  defaultLang: `uz`,   // saytning boshlang‘ich tili: uz / ru / en

  title: { uz: `Pavilion Pentagon — Foto va video studiya`, ru: `Pavilion Pentagon — Фото- и видеостудия`, en: `Pavilion Pentagon — Photo & video studio` },

  /* ── Aloqa / Контакты / Contacts (bo‘sh qoldirsangiz ko‘rinmaydi) ── */
  contacts: {
    phone:     `+998 95 120 85 55`,   // +998 90 123 45 67
    telegram:  ``,   // https://t.me/pentagon
    instagram: ``,   // https://instagram.com/pentagon
    email:     ``,   // info@pentagon.uz
    address:   ``    // Toshkent, ...
  },

  /* ── Forma → Telegram / Форма → Telegram / Form → Telegram ──
     Qo‘llanma: TELEGRAM.md faylini o‘qing.
     1-usul (tavsiya, xavfsiz): endpoint — worker.js ni joylagandan keyingi manzil.
     2-usul (tez, lekin xavfsiz emas): telegramToken + telegramChatId.            */
  form: {
    endpoint:       `/api/telegram`,   // Vercel funksiyasi (api/telegram.js). Cloudflare ishlatsangiz: https://....workers.dev
    telegramToken:  ``,   // faqat 2-usulda
    telegramChatId: ``    // faqat 2-usulda
  },

  /* ── Havolalar / Ссылки / Links ── */
  links: {
    spectre: `https://www.spectrerental.uz`   // SPECTRE RENT kartochkasi bosilganda ochiladigan sayt
  },

  /* ── Yuguruvchi lenta / Бегущая строка / Marquee ── */
  marquee: {
    uz: [`Siklorama`,`Foto`,`Video`,`Mashina bilan kirish`,`Grimyorxona`,`Yorug‘lik`,`Kontent`],
    ru: [`Циклорама`,`Фото`,`Видео`,`Заезд на машине`,`Гримёрная`,`Свет`,`Контент`],
    en: [`Cyclorama`,`Photo`,`Video`,`Drive-in access`,`Makeup room`,`Lighting`,`Content`]
  },

  /* ── Xonalar / Залы / Spaces: har biri [nom, tavsif] — 4 ta, rasmlar tartibida ── */
  spaces: {
    uz: [[`Siklorama`,`Uzluksiz oq fon — burchaksiz, chegarasiz. Katalog, portret va video uchun ideal.`],[`Pavilyon`,`Qora shiftli katta zal, ferma va chiroqlar, tepaga chiqish zinapoyasi. Yorug‘likni o‘zingiz xohlagandek o‘rnating.`],[`Grimyorxona`,`Ko‘zgu, ilgich, divan va parda — syomkadan oldin tayyorlanish uchun qulay xona.`],[`Kirish zonasi`,`Sariq devor, katta darvoza va kutish joyi. Festivallar va tadbirlar shu yerdan boshlanadi.`]],
    ru: [[`Циклорама`,`Бесшовный белый фон — без углов и границ. Идеально для каталогов, портретов и видео.`],[`Павильон`,`Большой зал с чёрным потолком, фермами и приборами света, лестница наверх. Выставляйте свет как нужно.`],[`Гримёрная`,`Зеркало, вешалки, диван и шторка — удобное место для подготовки перед съёмкой.`],[`Входная зона`,`Жёлтая стена, большие ворота и зона ожидания. Фестивали и мероприятия начинаются здесь.`]],
    en: [[`Cyclorama`,`A seamless white backdrop — no corners, no edges. Perfect for catalogues, portraits and video.`],[`Pavilion`,`A large hall with a black ceiling, trusses and lights, plus a ladder up. Set the lighting however you like.`],[`Makeup room`,`A mirror, clothes racks, a sofa and a curtain — a comfortable place to get ready before the shoot.`],[`Entrance zone`,`The yellow wall, the big gate and a waiting area. Festivals and events start here.`]]
  },

  /* ── Rang nomlari / Названия цветов / Colour names (7 ta, tartib bilan) ── */
  colors: {
    uz: [`Klassik oq`,`Pentagon sariq`,`Elektrik ko‘k`,`Mo‘rt pushti`,`Xromakey yashil`,`Neon binafsha`,`Quyosh tafti`],
    ru: [`Классический белый`,`Жёлтый Pentagon`,`Электрик синий`,`Нежно-розовый`,`Зелёный хромакей`,`Неоновый фиолетовый`,`Цвет заката`],
    en: [`Classic white`,`Pentagon yellow`,`Electric blue`,`Soft pink`,`Chroma green`,`Neon violet`,`Sunset orange`]
  },

  /* ── Kalendar / Календарь / Calendar (oylar va hafta kunlari) ── */
  calendar: {
    months: {
      uz: [`Yanvar`,`Fevral`,`Mart`,`Aprel`,`May`,`Iyun`,`Iyul`,`Avgust`,`Sentabr`,`Oktabr`,`Noyabr`,`Dekabr`],
      ru: [`Январь`,`Февраль`,`Март`,`Апрель`,`Май`,`Июнь`,`Июль`,`Август`,`Сентябрь`,`Октябрь`,`Ноябрь`,`Декабрь`],
      en: [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]
    },
    days: {
      uz: [`Du`,`Se`,`Ch`,`Pa`,`Ju`,`Sh`,`Ya`],
      ru: [`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],
      en: [`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`,`Su`]
    }
  },

  /* ── MATNLAR / ТЕКСТЫ / TEXTS ── */
  t: {

    /* ── Tepadagi menyu / Меню / Menu ── */
    "nav.1": { uz: `Studiya haqida`, ru: `О студии`, en: `About` },
    "nav.2": { uz: `O‘lchamlar`, ru: `Размеры`, en: `Dimensions` },
    "nav.7": { uz: `Jihozlar`, ru: `Оборудование`, en: `Equipment` },
    "nav.3": { uz: `Xonalar`, ru: `Залы`, en: `Spaces` },
    "nav.4": { uz: `Siklorama`, ru: `Циклорама`, en: `Cyclorama` },
    "nav.5": { uz: `Jarayon`, ru: `Процесс`, en: `Process` },
    "nav.6": { uz: `Bron qilish`, ru: `Забронировать`, en: `Book now` },

    /* ── Bosh ekran / Главный экран / Hero ── */
    "hero.1": `Pavilion`,
    "hero.2": `P`,
    "hero.3": `entagon`,
    "hero.4": { uz: `Pavilyonni band qilish →`, ru: `Забронировать павильон →`, en: `Book the pavilion →` },

    /* ── 01 · Studiya haqida ── */
    "about.1": { uz: `01 — Studiya haqida`, ru: `01 — О студии`, en: `01 — About the studio` },
    "about.2": { uz: `Bo‘sh maydon,<br><em>cheksiz</em> imkoniyat`, ru: `Пустое пространство,<br><em>безграничные</em> возможности`, en: `Empty space,<br><em>endless</em> possibilities` },
    "about.3": { uz: `Pentagon — umumiy maydoni 500 m², syomka pavilyoni 380 m², shifti 6 metr. Ichida eni 15 m, balandligi 6 m oq siklorama, katta grimyorxona va mashina kiradigan darvoza bor. Kino, reklama, klip, podkast va brendlar kontenti uchun — hammasi bir joyda.`, ru: `Pentagon — общая площадь 500 м², съёмочный павильон 380 м², потолки 6 метров. Внутри белая циклорама 15 × 6 метров, большая гримёрная и ворота для заезда автомобиля. Для кино, рекламы, клипов, подкастов и контента брендов — всё в одном месте.`, en: `Pentagon — 500 m² in total, with a 380 m² shooting pavilion and 6 m ceilings. Inside: a white 15 × 6 m cyclorama, a large makeup room and a gate wide enough to drive a car in. For film, ads, music videos, podcasts and brand content — all in one place.` },
    "about.4": `500`,
    "about.5": { uz: `m² umumiy maydon`, ru: `м² общая площадь`, en: `m² total area` },
    "about.6": `380`,
    "about.7": { uz: `m² syomka pavilyoni`, ru: `м² съёмочный павильон`, en: `m² shooting pavilion` },
    "about.8": `6`,
    "about.9": { uz: `m shift balandligi`, ru: `м высота потолков`, en: `m ceiling height` },

    /* ── 02 · O‘lchamlar ── */
    "size.1": { uz: `02 — O‘lchamlar`, ru: `02 — Размеры`, en: `02 — Dimensions` },
    "size.2": { uz: `380 m² pavilyon,<br><em>katta</em> g‘oyalar`, ru: `Павильон 380 м²,<br><em>большие</em> идеи`, en: `380 m² pavilion,<br><em>big</em> ideas` },
    "size.3": { uz: `Umumiy maydon — 500 m², syomka pavilyoni — 380 m². Siklorama eni 15 metr, balandligi 6 metr. Shift balandligi ham 6 metr: kamera, yorug‘lik va dekoratsiya uchun joy yetarli.`, ru: `Общая площадь — 500 м², съёмочный павильон — 380 м². Циклорама 15 метров в ширину и 6 в высоту. Потолки тоже 6 метров: места хватит для камеры, света и декораций.`, en: `Total area — 500 m², shooting pavilion — 380 m². The cyclorama is 15 metres wide and 6 metres high. Ceilings are 6 metres too — plenty of room for cameras, lighting and sets.` },
    "size.4": { uz: `15 m`, ru: `15 м`, en: `15 m` },
    "size.5": { uz: `6 m`, ru: `6 м`, en: `6 m` },
    "size.6": `01`,
    "size.7": { uz: `Katta kino`, ru: `Большое кино`, en: `Feature film` },
    "size.8": { uz: `Sahna, dekoratsiya va texnika uchun keng maydon.`, ru: `Просторно для сцены, декораций и техники.`, en: `Wide open space for sets, scenery and equipment.` },
    "size.9": `02`,
    "size.10": { uz: `Reklama`, ru: `Реклама`, en: `Advertising` },
    "size.11": { uz: `Toza fon va boshqariladigan yorug‘lik — brendlar uchun mos.`, ru: `Чистый фон и управляемый свет — идеально для брендов.`, en: `A clean backdrop and controlled light — ideal for brands.` },
    "size.12": `03`,
    "size.13": { uz: `Klip va rolik`, ru: `Клипы и ролики`, en: `Music videos & clips` },
    "size.14": { uz: `Harakat, raqs va katta jamoa uchun erkin joy.`, ru: `Свободное место для движения, танцев и большой команды.`, en: `Room for movement, dance and a large crew.` },
    "size.15": `04`,
    "size.16": { uz: `Podkastlar`, ru: `Подкасты`, en: `Podcasts` },
    "size.17": { uz: `Tinch, yorug‘ muhit — kontent yozish uchun qulay.`, ru: `Тихая светлая обстановка — удобно записывать контент.`, en: `A calm, bright setting — great for recording content.` },

    /* ── O‘lchamlar jadvali ── */
    "specs.1": { uz: `500 m²`, ru: `500 м²`, en: `500 m²` },
    "specs.2": { uz: `Umumiy maydon`, ru: `Общая площадь`, en: `Total area` },
    "specs.3": { uz: `380 m²`, ru: `380 м²`, en: `380 m²` },
    "specs.4": { uz: `Syomka pavilyoni`, ru: `Съёмочный павильон`, en: `Shooting pavilion` },
    "specs.5": { uz: `15 × 6 m`, ru: `15 × 6 м`, en: `15 × 6 m` },
    "specs.6": { uz: `Siklorama`, ru: `Циклорама`, en: `Cyclorama` },
    "specs.7": { uz: `6 m`, ru: `6 м`, en: `6 m` },
    "specs.8": { uz: `Shift balandligi`, ru: `Высота потолков`, en: `Ceiling height` },
    "specs.9": { uz: `4 × 4 m`, ru: `4 × 4 м`, en: `4 × 4 m` },
    "specs.10": { uz: `Darvoza`, ru: `Ворота`, en: `Gate` },
    "specs.11": { uz: `60 kVt`, ru: `60 кВт`, en: `60 kW` },
    "specs.12": { uz: `Elektr quvvati`, ru: `Мощность электричества`, en: `Electric power` },

    /* ── 03 · Mashina bilan kirish ── */
    "drive.1": { uz: `03 — Mashina bilan kirish`, ru: `03 — Заезд на машине`, en: `03 — Drive-in access` },
    "drive.2": { uz: `Darvoza<br><em>4 × 4</em> metr`, ru: `Ворота<br><em>4 × 4</em> метра`, en: `Gate<br><em>4 × 4</em> metres` },
    "drive.3": { uz: `Avtomobil hududga ham, syomka pavilyoni ichiga ham kira oladi. Katta darvoza evakuatorda ham mashina olib kirishga imkon beradi.`, ru: `Автомобиль может заехать не только на территорию, но и в съёмочный павильон. Огромные ворота позволяют завезти машину в том числе на эвакуаторе.`, en: `A car can drive onto the grounds and straight into the shooting pavilion. The huge gate lets you bring a vehicle in even on a tow truck.` },
    "drive.4": { uz: `Hududga kirish`, ru: `Заезд на территорию`, en: `Onto the grounds` },
    "drive.5": { uz: `Pavilyon ichiga kirish`, ru: `Заезд в павильон`, en: `Into the pavilion` },
    "drive.6": { uz: `Evakuator bilan`, ru: `На эвакуаторе`, en: `By tow truck` },
    "drive.7": { uz: `4 m`, ru: `4 м`, en: `4 m` },
    "drive.8": { uz: `4 m`, ru: `4 м`, en: `4 m` },

    /* ── Jihozlar va xizmatlar ── */
    "gear.1": { uz: `Jihozlar va xizmatlar`, ru: `Оснащение и услуги`, en: `Equipment & services` },
    "gear.2": { uz: `Syomkaga <em>tayyor</em><br>joy`, ru: `Площадка,<br><em>готовая</em> к съёмке`, en: `A space <em>ready</em><br>to shoot` },
    "gear.3": { uz: `Kerakli hamma narsa pavilyonning o‘zida yoki ijarada.`, ru: `Всё нужное — в самом павильоне или в аренде.`, en: `Everything you need — on site or for rent.` },
    "gear.4": `⚡`,
    "gear.5": { uz: `Elektr: 60 kVt`, ru: `Электричество: 60 кВт`, en: `Power: 60 kW` },
    "gear.6": { uz: `Kuchli rozetkalarning 3 xili: 32 va 63 amper.`, ru: `3 вида силовых розеток: 32 и 63 ампера.`, en: `3 types of heavy-duty sockets: 32 and 63 amps.` },
    "gear.7": `⇅`,
    "gear.8": { uz: `Motorli ferma`, ru: `Моторизированная ферма`, en: `Motorised truss` },
    "gear.9": { uz: `Motorlashtirilgan ferma — yorug‘likni oson o‘rnating.`, ru: `Моторизированная ферма — свет легко выставить.`, en: `A motorised truss makes rigging lights easy.` },
    "gear.10": `◧`,
    "gear.11": { uz: `Grimyorxona, dush, hojatxona`, ru: `Гримёрная, душ, туалет`, en: `Makeup room, shower, WC` },
    "gear.12": { uz: `Pavilyon ichida 4 o‘rinli katta grimyorxona, dush va hojatxona.`, ru: `В павильоне большая гримёрная на 4 места, душевая и туалет.`, en: `Inside the pavilion: a large 4-seat makeup room, a shower and a toilet.` },
    "gear.13": `▭`,
    "gear.14": { uz: `Muzokara stoli`, ru: `Стол для переговоров`, en: `Meeting table` },
    "gear.15": { uz: `Jamoa, mijozlar va brifinglar uchun katta stol.`, ru: `Большой стол для команды, клиентов и брифингов.`, en: `A large table for the crew, clients and briefings.` },
    "gear.16": `!`,
    "gear.17": { uz: `Tutun bilan syomka`, ru: `Съёмки с дымом`, en: `Shooting with smoke` },
    "gear.18": { uz: `Pavilyonda yong‘in signalizatsiyasi o‘rnatilgan, shuning uchun tutunli syomkalar oldindan kelishiladi.`, ru: `В павильоне установлена пожарная сигнализация, поэтому съёмки с дымом необходимо согласовывать заранее.`, en: `The pavilion has a fire alarm, so smoke shoots must be agreed in advance.` },
    "gear.19": `SPECTRE RENT`,
    "gear.20": `Cameras, Lenses, Accessories, Lighting, Grip`,
    "gear.21": { uz: `Kerakli jihozlarni bizning ijara xizmatimiz — SPECTRE RENT dan buyurtma qiling.`, ru: `Заказать всё необходимое можно в нашем прокате — SPECTRE RENT.`, en: `Order what you need from our rental service — SPECTRE RENT.` },
    "gear.22": `+`,
    "gear.23": { uz: `Yorug‘lik bo‘yicha assistent`, ru: `Ассистент по свету`, en: `Lighting assistant` },
    "gear.24": { uz: `Har xil murakkablikdagi syomkalarda yorug‘lik assistenti yordam beradi.`, ru: `Сопровождение съёмок разной сложности — услуги ассистента по свету.`, en: `A lighting assistant supports shoots of any complexity.` },

    /* ── 04 · Xonalar ── */
    "spaces.1": { uz: `04 — Xonalar`, ru: `04 — Залы`, en: `04 — Spaces` },
    "spaces.2": { uz: `Studiya<br>ichida <em>nima</em> bor`, ru: `Что<br>внутри <em>студии</em>`, en: `What’s <em>inside</em><br>the studio` },
    "spaces.3": { uz: `Tugmalarni bosing va har bir zonani aylanib chiqing.`, ru: `Нажимайте на кнопки и осмотрите каждую зону.`, en: `Tap the buttons and look around every zone.` },

    /* ── 05 · Rang laboratoriyasi ── */
    "lab.1": { uz: `05 — Rang laboratoriyasi`, ru: `05 — Цветовая лаборатория`, en: `05 — Colour lab` },
    "lab.2": { uz: `Fonni <em>o‘zingiz</em> tanlang`, ru: `Выберите <em>фон</em> сами`, en: `Pick the <em>backdrop</em> yourself` },
    "lab.3": { uz: `Oq siklorama istalgan rangga bo‘yaladi. Rangni tanlang va syomka kayfiyatini oldindan ko‘ring.`, ru: `Белая циклорама окрашивается в любой цвет. Выберите цвет и заранее почувствуйте настроение съёмки.`, en: `The white cyclorama can be painted any colour. Choose one and preview the mood of your shoot.` },

    /* ── 06 · Grimyorxona ── */
    "makeup.1": { uz: `06 — Syomkaga tayyorgarlik`, ru: `06 — Подготовка к съёмке`, en: `06 — Getting ready` },
    "makeup.2": { uz: `Grim<em>yorxona</em>`, ru: `Гри<em>мёрная</em>`, en: `Makeup <em>room</em>` },
    "makeup.3": { uz: `4 o‘rinli katta grimyorxona, lampochkali ko‘zgu, kiyim ilgichlari va parda. Shuningdek dush xonasi va hojatxona — modelga hamma narsa qo‘l ostida.`, ru: `Большая гримёрная на 4 места, зеркало с лампочками, вешалки для одежды и шторка. Также душевая и туалет — у модели всё под рукой.`, en: `A large 4-seat makeup room with a lightbulb mirror, clothes racks and a curtain. Plus a shower and a toilet — everything the model needs.` },
    "makeup.4": { uz: `4 o‘rinli grimyorxona, katta ko‘zgu`, ru: `Гримёрная на 4 места, большое зеркало`, en: `4-seat makeup room, large mirror` },
    "makeup.5": { uz: `Dush xonasi va hojatxona`, ru: `Душевая и туалет`, en: `Shower and toilet` },
    "makeup.6": { uz: `Katta muzokara stoli, divan, konditsioner`, ru: `Большой стол для переговоров, диван, кондиционер`, en: `Large meeting table, sofa, air conditioning` },

    /* ── 07 · Sariq devor ── */
    "wall.1": { uz: `07 — Hamjamiyat`, ru: `07 — Сообщество`, en: `07 — Community` },
    "wall.2": { uz: `Sariq <em>devor</em>`, ru: `Жёлтая <em>стена</em>`, en: `The yellow <em>wall</em>` },
    "wall.3": { uz: `Kirish qismidagi sariq devor — Pentagon mehmonlarining surat galereyasi. Bu yerda o‘tgan tadbirlar va festivallar izlari qolgan.`, ru: `Жёлтая стена при входе — галерея фотографий гостей Pentagon. Здесь остались следы прошедших мероприятий и фестивалей.`, en: `The yellow wall at the entrance is a photo gallery of Pentagon’s visitors, with traces of past events and festivals.` },
    "wall.4": { uz: `Siz ham surat qoldiring →`, ru: `Оставьте и своё фото →`, en: `Leave your photo too →` },

    /* ── 08 · Jarayon ── */
    "process.1": { uz: `08 — Jarayon`, ru: `08 — Процесс`, en: `08 — Process` },
    "process.2": { uz: `To‘rt <em>qadam</em><br>– natija tayyor`, ru: `Четыре <em>шага</em><br>– и результат готов`, en: `Four <em>steps</em><br>– and it’s done` },
    "process.3": `01`,
    "process.4": { uz: `Ariza`, ru: `Заявка`, en: `Request` },
    "process.5": { uz: `Sana, vaqt va syomka turini yozib qoldiring.`, ru: `Оставьте дату, время и тип съёмки.`, en: `Tell us the date, time and type of shoot.` },
    "process.6": `02`,
    "process.7": { uz: `Tasdiq`, ru: `Подтверждение`, en: `Confirmation` },
    "process.8": { uz: `Admin band qilishni va shartlarni tasdiqlaydi.`, ru: `Администратор подтверждает бронь и условия.`, en: `The admin confirms the booking and terms.` },
    "process.9": `03`,
    "process.10": { uz: `Syomka`, ru: `Съёмка`, en: `The shoot` },
    "process.11": { uz: `Siklorama, yorug‘lik va grimyorxona sizning ixtiyoringizda.`, ru: `Циклорама, свет и гримёрная в вашем распоряжении.`, en: `The cyclorama, lighting and makeup room are all yours.` },
    "process.12": `04`,
    "process.13": { uz: `Natija`, ru: `Результат`, en: `Result` },
    "process.14": { uz: `Tayyor kadrlar — kontentingizga ishga tushiring.`, ru: `Готовые кадры — запускайте их в работу.`, en: `Finished frames — put them to work in your content.` },

    /* ── 09 · Bron (forma) ── */
    "book.1": { uz: `09 — Bron`, ru: `09 — Бронь`, en: `09 — Booking` },
    "book.2": { uz: `Syomkani<br><em>bugunoq</em><br>rejalashtiring`, ru: `Запланируйте<br>съёмку <em>уже<br>сегодня</em>`, en: `Plan your<br>shoot <em>today</em>` },
    "book.3": { uz: `Foto syomka`, ru: `Фотосъёмка`, en: `Photo shoot` },
    "book.4": { uz: `Video / klip`, ru: `Видео / клип`, en: `Video / music video` },
    "book.5": { uz: `Reklama`, ru: `Реклама`, en: `Advertising` },
    "book.6": { uz: `Podkast / intervyu`, ru: `Подкаст / интервью`, en: `Podcast / interview` },
    "book.7": { uz: `Boshqa`, ru: `Другое`, en: `Other` },
    "book.8": { uz: `Ariza yuborish →`, ru: `Отправить заявку →`, en: `Send request →` },
    "book.9": { uz: `✓ Rahmat! Tez orada bog‘lanamiz.`, ru: `✓ Спасибо! Скоро свяжемся с вами.`, en: `✓ Thank you! We’ll be in touch soon.` },
    "book.10": { uz: `Ismingiz`, ru: `Ваше имя`, en: `Your name` },
    "book.11": { uz: `Telefon: +998 __ ___ __ __`, ru: `Телефон: +998 __ ___ __ __`, en: `Phone: +998 __ ___ __ __` },
    "book.12": { uz: `Loyiha haqida qisqacha`, ru: `Коротко о проекте`, en: `Briefly about your project` },
    "book.13": { uz: `Sanani tanlang`, ru: `Выберите дату`, en: `Pick a date` },
    "book.15": { uz: `Yuborilmoqda…`, ru: `Отправляем…`, en: `Sending…` },
    "book.16": { uz: `Ariza yuborilmadi. Iltimos, qo‘ng‘iroq qiling:`, ru: `Заявка не отправилась. Пожалуйста, позвоните:`, en: `The request wasn’t sent. Please call us:` },
    "book.17": { uz: `Band kunlar`, ru: `Занятые дни`, en: `Booked days` },
    "book.18": { uz: `Bu sana allaqachon band. Iltimos, boshqa kun tanlang.`, ru: `Эта дата уже занята. Пожалуйста, выберите другой день.`, en: `This date is already booked. Please pick another day.` },

    /* ── Pastki qism / Подвал / Footer ── */
    "footer.1": `Pentagon`,
    "footer.2": `© 2026 Pavilion Pentagon`,
    "footer.3": { uz: `Toshkent · Foto va video studiya`, ru: `Ташкент · Фото- и видеостудия`, en: `Tashkent · Photo & video studio` },
  }
};
