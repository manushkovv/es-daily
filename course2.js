/* Недели 3–4. Формат тот же, что в course.js. */
window.COURSE.lessons.push(
  /* ───────── НЕДЕЛЯ 3: ЕДА И КАФЕ ───────── */
  {
    id: "w3d1", week: 3, day: 1, title: "gustar: что нравится",
    words: [
      ["el café", "кофе", "Me gusta el café con leche.", "Мне нравится кофе с молоком."],
      ["el té", "чай", "¿Te gusta el té?", "Тебе нравится чай?"],
      ["la cerveza", "пиво", "Una cerveza, por favor.", "Пиво, пожалуйста."],
      ["el vino", "вино", "Me gusta el vino tinto.", "Мне нравится красное вино."],
      ["la comida", "еда", "La comida española es muy rica.", "Испанская еда очень вкусная."],
      ["la fruta", "фрукты", "Me gusta mucho la fruta.", "Я очень люблю фрукты."],
      ["el pescado", "рыба (блюдо)", "No me gusta el pescado.", "Мне не нравится рыба."],
      ["rico / rica", "вкусный", "¡Está muy rico!", "Очень вкусно!"]
    ],
    rule: {
      title: "gustar — «нравиться»",
      html: `<p>Дословно: «мне <b>нравится</b> кофе». Подлежащее — то, что нравится, поэтому глагол смотрит на него:</p>
<table><tr><td>одно / действие</td><td><b>me gusta</b> el café · <b>me gusta</b> viajar</td></tr>
<tr><td>много</td><td><b>me gustan</b> las patatas</td></tr></table>
<p>Кому нравится — маленькое слово впереди:</p>
<table><tr><td><b>me</b> gusta</td><td>мне</td></tr><tr><td><b>te</b> gusta</td><td>тебе</td></tr>
<tr><td><b>le</b> gusta</td><td>ему / ей / Вам</td></tr><tr><td><b>nos</b> gusta</td><td>нам</td></tr>
<tr><td><b>os</b> gusta</td><td>вам (друзьям)</td></tr><tr><td><b>les</b> gusta</td><td>им</td></tr></table>
<p>💡 «Не нравится» — <b>no</b> впереди: <i>No me gusta el pescado.</i></p>
<p>В тесте ты выбрал <i>gusto</i>. Запомни: про себя всё равно <b>me gusta</b>, не «gusto».</p>`
    },
    exercises: [
      { type: "choice", q: "Me ___ el café.", tr: "Мне нравится кофе.", options: ["gusto", "gusta", "gustan", "gustas"], answer: 1 },
      { type: "choice", q: "Me ___ las frutas.", tr: "Мне нравятся фрукты.", options: ["gusta", "gustan", "gusto", "gustamos"], answer: 1 },
      { type: "choice", q: "¿___ gusta el té?", tr: "Тебе нравится чай?", options: ["Me", "Te", "Le", "Nos"], answer: 1 },
      { type: "choice", q: "A ella ___ gusta el vino.", tr: "Ей нравится вино.", options: ["me", "te", "le", "les"], answer: 2 },
      { type: "type", q: "Nos ___ viajar. (Нам нравится путешествовать)", answer: ["gusta"] },
      { type: "type", q: "No me ___ los lunes. (Мне не нравятся понедельники)", answer: ["gustan"] },
      { type: "order", tr: "Мне не нравится рыба.", answer: "No me gusta el pescado" },
      { type: "listen", say: "Está muy rico", options: ["Очень вкусно", "Очень дорого", "Очень богато", "Очень много"], answer: 0 }
    ],
    phrase: ["¡Está muy rico, gracias!", "Очень вкусно, спасибо!"]
  },
  {
    id: "w3d2", week: 3, day: 2, title: "querer: я хочу",
    words: [
      ["querer", "хотеть", "Quiero un café.", "Я хочу кофе."],
      ["la carta", "меню", "¿Me trae la carta, por favor?", "Принесите меню, пожалуйста."],
      ["el camarero / la camarera", "официант / официантка", "Perdón, camarero.", "Извините, официант!"],
      ["la mesa", "стол, столик", "Una mesa para dos, por favor.", "Столик на двоих, пожалуйста."],
      ["el plato", "блюдо, тарелка", "¿Cuál es el plato del día?", "Какое блюдо дня?"],
      ["el postre", "десерт", "De postre, un helado.", "На десерт — мороженое."],
      ["la bebida", "напиток", "¿Y de bebida?", "А из напитков?"],
      ["quisiera", "я бы хотел (вежливо)", "Quisiera una mesa cerca de la ventana.", "Я бы хотел столик у окна."]
    ],
    rule: {
      title: "querer — e меняется на ie",
      html: `<p>В некоторых глаголах под ударением <b>e → ie</b>. Кроме «мы» и «вы»:</p>
<table><tr><td>yo</td><td><b>quiero</b></td><td>nosotros</td><td>queremos</td></tr>
<tr><td>tú</td><td><b>quieres</b></td><td>vosotros</td><td>queréis</td></tr>
<tr><td>él / ella / usted</td><td><b>quiere</b></td><td>ellos / ustedes</td><td><b>quieren</b></td></tr></table>
<p>Окончания обычные (-o, -es, -e, -emos, -éis, -en), меняется только корень.</p>
<p>💡 В кафе вежливее сказать <b>quisiera</b> («я бы хотел»), чем <b>quiero</b>: <i>Quisiera un café.</i></p>
<p>Так же меняются: <b>preferir</b> (prefiero), <b>empezar</b> (empiezo), <b>cerrar</b> (cierra).</p>`
    },
    exercises: [
      { type: "choice", q: "Yo ___ un café.", tr: "Я хочу кофе.", options: ["quero", "quiero", "quiere", "queremos"], answer: 1 },
      { type: "choice", q: "¿Qué ___ tú?", tr: "Что хочешь ты?", options: ["quieres", "quiere", "queres", "quiero"], answer: 0 },
      { type: "choice", q: "Nosotros ___ una mesa.", tr: "Мы хотим столик.", options: ["quieremos", "queremos", "quieren", "quiero"], answer: 1 },
      { type: "choice", q: "Как вежливо попросить в кафе?", options: ["Quiero café.", "Dame café.", "Quisiera un café, por favor.", "Café."], answer: 2 },
      { type: "type", q: "Ellos ___ (querer) postre.", answer: ["quieren"] },
      { type: "type", q: "Напиши «меню» с артиклем", answer: ["la carta"] },
      { type: "order", tr: "Столик на двоих, пожалуйста.", answer: "Una mesa para dos por favor" },
      { type: "listen", say: "¿Y de bebida?", options: ["А из напитков?", "А на десерт?", "А блюдо дня?", "А счёт?"], answer: 0 }
    ],
    phrase: ["Una mesa para dos, por favor.", "Столик на двоих, пожалуйста."]
  },
  {
    id: "w3d3", week: 3, day: 3, title: "poder: можно?",
    words: [
      ["poder", "мочь", "¿Puedo pagar con tarjeta?", "Можно оплатить картой?"],
      ["pagar", "платить", "Pago yo.", "Я плачу."],
      ["la tarjeta", "карта (банковская)", "Con tarjeta, por favor.", "Картой, пожалуйста."],
      ["en efectivo", "наличными", "Solo en efectivo.", "Только наличными."],
      ["la propina", "чаевые", "¿Dejamos propina?", "Оставим чаевые?"],
      ["pedir", "заказывать, просить", "Vamos a pedir paella.", "Давай закажем паэлью."],
      ["probar", "пробовать", "¿Puedo probar?", "Можно попробовать?"],
      ["traer", "приносить", "¿Me puede traer agua?", "Можете принести воды?"]
    ],
    rule: {
      title: "poder — o меняется на ue",
      html: `<p>Ещё одна группа: под ударением <b>o → ue</b>:</p>
<table><tr><td>yo</td><td><b>puedo</b></td><td>nosotros</td><td>podemos</td></tr>
<tr><td>tú</td><td><b>puedes</b></td><td>vosotros</td><td>podéis</td></tr>
<tr><td>él / ella / usted</td><td><b>puede</b></td><td>ellos / ustedes</td><td><b>pueden</b></td></tr></table>
<p>После <b>poder</b> глагол стоит в начальной форме: <i>¿<b>Puedo pagar</b> con tarjeta?</i></p>
<p>💡 Самая полезная схема в поездке: <b>¿Me puede + глагол?</b> — «Можете…?»<br><i>¿Me puede traer la cuenta?</i> — Можете принести счёт?</p>
<p>Так же: <b>probar</b> (pruebo), <b>costar</b> (cuesta), <b>dormir</b> (duermo).</p>`
    },
    exercises: [
      { type: "choice", q: "¿___ pagar con tarjeta?", tr: "Можно (мне) оплатить картой?", options: ["Puedo", "Podo", "Puede", "Podemos"], answer: 0 },
      { type: "choice", q: "¿Usted ___ traer agua?", tr: "Вы можете принести воды?", options: ["puedo", "puedes", "puede", "pueden"], answer: 2 },
      { type: "choice", q: "«en efectivo» — это…", options: ["картой", "наличными", "по скидке", "бесплатно"], answer: 1 },
      { type: "choice", q: "Nosotros ___ pagar.", tr: "Мы можем заплатить.", options: ["puedemos", "podemos", "pueden", "puedo"], answer: 1 },
      { type: "type", q: "Tú ___ (poder) probar. (Ты можешь попробовать)", answer: ["puedes"] },
      { type: "type", q: "Напиши «чаевые» с артиклем", answer: ["la propina"] },
      { type: "order", tr: "Можете принести счёт?", answer: "¿Me puede traer la cuenta?" },
      { type: "listen", say: "¿Puedo probar?", options: ["Можно попробовать?", "Можно заплатить?", "Можно заказать?", "Можно сесть?"], answer: 0 }
    ],
    phrase: ["¿Puedo pagar con tarjeta?", "Можно оплатить картой?"]
  },
  {
    id: "w3d4", week: 3, day: 4, title: "Числа 20–100",
    words: [
      ["treinta", "30", "Treinta euros.", "Тридцать евро."],
      ["cuarenta", "40", "Cuarenta minutos.", "Сорок минут."],
      ["cincuenta", "50", "Cincuenta personas.", "Пятьдесят человек."],
      ["sesenta", "60", "Sesenta segundos.", "Шестьдесят секунд."],
      ["setenta", "70", "Setenta kilómetros.", "Семьдесят километров."],
      ["ochenta", "80", "Ochenta euros la noche.", "Восемьдесят евро за ночь."],
      ["noventa", "90", "Noventa y nueve.", "Девяносто девять."],
      ["cien", "100", "Cien por cien.", "Сто процентов."]
    ],
    rule: {
      title: "Как собрать число от 21 до 99",
      html: `<p>21–29 пишутся одним словом: <b>veintiuno, veintidós, veintitrés</b>…</p>
<p>С 31 — через <b>y</b> («и»): <b>treinta y dos</b> (32), <b>cuarenta y cinco</b> (45), <b>noventa y nueve</b> (99).</p>
<p>⚠️ Не путай: <b>sesenta</b> (60) и <b>setenta</b> (70). Подсказка: <b>se-s</b>enta — «шесть» (seis), <b>se-t</b>enta — «семь» (siete).</p>
<p><b>cien</b> — ровно 100. Дальше <b>ciento</b>: 101 = ciento uno.</p>`
    },
    exercises: [
      { type: "choice", q: "«45» по-испански:", options: ["cuarenta cinco", "cuarenta y cinco", "cuatro y cinco", "cincuenta y cuatro"], answer: 1 },
      { type: "choice", q: "«setenta» — это…", options: ["60", "70", "17", "7"], answer: 1 },
      { type: "choice", q: "«ochenta y ocho» — это…", options: ["88", "80", "18", "8"], answer: 0 },
      { type: "choice", q: "«100» по-испански:", options: ["ciento", "cien", "mil", "diez"], answer: 1 },
      { type: "type", q: "Напиши словами 30", answer: ["treinta"] },
      { type: "type", q: "Напиши словами 52", answer: ["cincuenta y dos"] },
      { type: "order", tr: "Девяносто девять евро.", answer: "Noventa y nueve euros" },
      { type: "listen", say: "sesenta y seis", options: ["66", "76", "16", "56"], answer: 0 }
    ],
    phrase: ["¿Me lo puede escribir, por favor?", "Можете мне это написать?"]
  },
  {
    id: "w3d5", week: 3, day: 5, title: "Сколько стоит?",
    words: [
      ["costar", "стоить", "¿Cuánto cuesta?", "Сколько стоит?"],
      ["el precio", "цена", "El precio es bueno.", "Цена хорошая."],
      ["el euro", "евро", "Son veinte euros.", "Двадцать евро."],
      ["la oferta", "акция, предложение", "Está en oferta.", "Это по акции."],
      ["el descuento", "скидка", "¿Hay descuento?", "Есть скидка?"],
      ["demasiado", "слишком", "Es demasiado caro.", "Это слишком дорого."],
      ["me lo llevo", "беру (это)", "Vale, me lo llevo.", "Ладно, беру."],
      ["solo miro", "я просто смотрю", "Gracias, solo miro.", "Спасибо, я просто смотрю."]
    ],
    rule: {
      title: "cuesta или cuestan",
      html: `<p><b>costar</b> — тоже o → ue. Глагол согласуется с вещью:</p>
<p><i>¿Cuánto <b>cuesta</b> la camiseta?</i> — Сколько стоит футболка? (одна)<br><i>¿Cuánto <b>cuestan</b> los zapatos?</i> — Сколько стоят ботинки? (много)</p>
<p>Ответ: <i><b>Son</b> veinte euros</i> или <i><b>Cuesta</b> veinte euros</i>.</p>
<p>💡 Фразы в магазине: <b>Solo miro</b> — «я просто смотрю» (отстанут), <b>Me lo llevo</b> — «беру», <b>Es demasiado caro</b> — «слишком дорого».</p>`
    },
    exercises: [
      { type: "choice", q: "¿Cuánto ___ los zapatos?", tr: "Сколько стоят ботинки?", options: ["cuesta", "cuestan", "costan", "cuesto"], answer: 1 },
      { type: "choice", q: "¿Cuánto ___ el libro?", tr: "Сколько стоит книга?", options: ["cuesta", "cuestan", "costa", "es"], answer: 0 },
      { type: "choice", q: "Продавец подходит, а ты просто смотришь:", options: ["Me lo llevo.", "Solo miro, gracias.", "Es demasiado caro.", "¿Hay descuento?"], answer: 1 },
      { type: "choice", q: "«Está en oferta» значит…", options: ["закрыто", "по акции", "в наличии", "продано"], answer: 1 },
      { type: "type", q: "Напиши «скидка» с артиклем", answer: ["el descuento"] },
      { type: "type", q: "Es ___ caro. (Это слишком дорого)", answer: ["demasiado"] },
      { type: "order", tr: "Ладно, беру.", answer: "Vale me lo llevo" },
      { type: "listen", say: "¿Hay descuento?", options: ["Есть скидка?", "Сколько стоит?", "Это по акции?", "Можно картой?"], answer: 0 }
    ],
    phrase: ["¿Cuánto cuesta? ¿Hay descuento?", "Сколько стоит? Есть скидка?"]
  },
  {
    id: "w3d6", week: 3, day: 6, title: "Диалог в кафе",
    words: [
      ["para mí", "мне (при заказе)", "Para mí, un café.", "Мне кофе."],
      ["para llevar", "с собой", "Un café para llevar.", "Кофе с собой."],
      ["para tomar aquí", "здесь (не с собой)", "Para tomar aquí, gracias.", "Здесь, спасибо."],
      ["¿qué me recomienda?", "что посоветуете?", "¿Qué me recomienda?", "Что посоветуете?"],
      ["lo mismo", "то же самое", "Para mí, lo mismo.", "Мне то же самое."],
      ["aquí tiene", "вот, пожалуйста (подавая)", "Aquí tiene su café.", "Вот ваш кофе."],
      ["algo más", "что-то ещё", "¿Algo más?", "Что-нибудь ещё?"],
      ["nada más", "больше ничего", "Nada más, gracias.", "Больше ничего, спасибо."]
    ],
    rule: {
      title: "Как заказать по-испански",
      html: `<p>Типичный разговор:</p>
<p>— Hola, ¿qué le pongo? <i>(Что вам?)</i><br>— <b>Para mí</b>, un café con leche, <b>por favor</b>.<br>— ¿<b>Para tomar aquí</b> o <b>para llevar</b>?<br>— Para llevar.<br>— ¿<b>Algo más</b>?<br>— <b>Nada más</b>, gracias. ¿Cuánto es?<br>— Dos euros. <b>Aquí tiene</b>.</p>
<p>💡 Три вежливые схемы: <b>Para mí…</b> · <b>Quisiera…</b> · <b>¿Me pone…?</b> (в Испании) — все значат «мне, пожалуйста…».</p>`
    },
    exercises: [
      { type: "choice", q: "Хочешь кофе с собой:", options: ["Un café para llevar.", "Un café para tomar aquí.", "Un café para mí no.", "Un café lo mismo."], answer: 0 },
      { type: "choice", q: "Друг заказал, ты хочешь так же:", options: ["Nada más.", "Lo mismo, por favor.", "Aquí tiene.", "Algo más."], answer: 1 },
      { type: "choice", q: "«¿Algo más?» — официант спрашивает…", options: ["Сколько с вас?", "Что-нибудь ещё?", "Здесь или с собой?", "Как вас зовут?"], answer: 1 },
      { type: "choice", q: "Хочешь совет официанта:", options: ["¿Qué me recomienda?", "¿Qué hora es?", "¿Dónde está?", "¿Cuánto es?"], answer: 0 },
      { type: "type", q: "Напиши «больше ничего»", answer: ["nada más", "nada mas"] },
      { type: "type", q: "___ mí, un té. (Мне чай)", answer: ["para"] },
      { type: "order", tr: "Больше ничего, спасибо. Сколько с меня?", answer: "Nada más gracias ¿Cuánto es?" },
      { type: "listen", say: "¿Para tomar aquí o para llevar?", options: ["Здесь или с собой?", "Наличными или картой?", "Чай или кофе?", "Что-нибудь ещё?"], answer: 0 }
    ],
    phrase: ["Para mí, lo mismo, por favor.", "Мне то же самое, пожалуйста."]
  },

  /* ───────── НЕДЕЛЯ 4: ПОЕЗДКА ───────── */
  {
    id: "w4d1", week: 4, day: 1, title: "ir: куда ты идёшь",
    words: [
      ["ir", "идти, ехать", "Voy al centro.", "Я еду в центр."],
      ["el aeropuerto", "аэропорт", "Vamos al aeropuerto.", "Мы едем в аэропорт."],
      ["el avión", "самолёт", "Voy en avión.", "Я лечу на самолёте."],
      ["el tren", "поезд", "El tren sale a las diez.", "Поезд отправляется в десять."],
      ["el autobús", "автобус", "¿Este autobús va al centro?", "Этот автобус идёт в центр?"],
      ["el metro", "метро", "Vamos en metro.", "Поедем на метро."],
      ["a pie", "пешком", "Voy a pie.", "Я иду пешком."],
      ["el billete", "билет", "Un billete para Madrid.", "Один билет до Мадрида."]
    ],
    rule: {
      title: "ir — неправильный, учим наизусть",
      html: `<table><tr><td>yo</td><td><b>voy</b></td><td>nosotros</td><td><b>vamos</b></td></tr>
<tr><td>tú</td><td><b>vas</b></td><td>vosotros</td><td><b>vais</b></td></tr>
<tr><td>él / ella / usted</td><td><b>va</b></td><td>ellos / ustedes</td><td><b>van</b></td></tr></table>
<p>Куда — <b>a</b>: <i>Voy <b>a</b> Madrid</i>. Перед <b>el</b> сливается: <b>a + el = al</b> → <i>Voy <b>al</b> aeropuerto</i>.</p>
<p>На чём — <b>en</b>: <i>en tren, en avión, en metro</i>. Но пешком — <b>a pie</b>.</p>
<p>В тесте ты выбрал <i>vamos</i> вместо <i>voy</i>. Пара для запоминания: <b>voy</b> = «я», <b>vamos</b> = «мы» (как «Vamos!» — «погнали!»).</p>`
    },
    exercises: [
      { type: "choice", q: "Yo ___ al centro.", tr: "Я еду в центр.", options: ["vamos", "voy", "va", "vas"], answer: 1 },
      { type: "choice", q: "¿Adónde ___ tú?", tr: "Куда ты идёшь?", options: ["vas", "va", "voy", "van"], answer: 0 },
      { type: "choice", q: "Vamos ___ aeropuerto.", tr: "Мы едем в аэропорт.", options: ["a el", "al", "en el", "en"], answer: 1 },
      { type: "choice", q: "Ellos van ___ tren.", tr: "Они едут на поезде.", options: ["a", "en", "al", "de"], answer: 1 },
      { type: "type", q: "Nosotros ___ (ir) a la playa.", answer: ["vamos"] },
      { type: "type", q: "Ella ___ (ir) a pie.", answer: ["va"] },
      { type: "order", tr: "Этот автобус идёт в центр?", answer: "¿Este autobús va al centro?" },
      { type: "listen", say: "Un billete para Madrid", options: ["Один билет до Мадрида", "Поезд до Мадрида", "Автобус в Мадрид", "Отель в Мадриде"], answer: 0 }
    ],
    phrase: ["¿Este autobús va al centro?", "Этот автобус идёт в центр?"]
  },
  {
    id: "w4d2", week: 4, day: 2, title: "ir a: что я собираюсь сделать",
    words: [
      ["esta noche", "сегодня вечером", "Esta noche vamos a salir.", "Сегодня вечером идём гулять."],
      ["el fin de semana", "выходные", "El fin de semana voy a descansar.", "На выходных буду отдыхать."],
      ["la semana que viene", "на следующей неделе", "La semana que viene voy a viajar.", "На следующей неделе поеду путешествовать."],
      ["visitar", "посещать", "Vamos a visitar el museo.", "Мы посетим музей."],
      ["conocer", "знакомиться, узнавать (место)", "Quiero conocer Barcelona.", "Хочу побывать в Барселоне."],
      ["salir", "выходить, гулять", "¿Vamos a salir?", "Пойдём гулять?"],
      ["descansar", "отдыхать", "Voy a descansar un poco.", "Немного отдохну."],
      ["el plan", "план", "¿Cuál es el plan?", "Какой план?"]
    ],
    rule: {
      title: "ir a + глагол — «собираюсь сделать»",
      html: `<p>Самый простой способ говорить о будущем:</p>
<p><b>ir</b> (по лицу) + <b>a</b> + глагол в начальной форме</p>
<p><i><b>Voy a</b> viajar.</i> — Я собираюсь путешествовать / поеду.<br><i>¿Qué <b>vas a</b> hacer?</i> — Что ты будешь делать?<br><i><b>Vamos a</b> comer.</i> — Давай поедим / мы будем есть.</p>
<p>💡 Меняется только <b>ir</b>, второй глагол всегда на -ar / -er / -ir. Слово <b>a</b> не теряй.</p>`
    },
    exercises: [
      { type: "choice", q: "Mañana ___ a estudiar.", tr: "Завтра я буду учиться.", options: ["voy", "vamos", "va", "vas"], answer: 0 },
      { type: "choice", q: "¿Qué ___ a hacer el fin de semana?", tr: "Что ты будешь делать на выходных?", options: ["voy", "vas", "va", "van"], answer: 1 },
      { type: "choice", q: "Vamos ___ visitar el museo.", tr: "Мы посетим музей.", options: ["—", "a", "de", "en"], answer: 1 },
      { type: "choice", q: "«la semana que viene» — это…", options: ["прошлая неделя", "эта неделя", "следующая неделя", "каждую неделю"], answer: 2 },
      { type: "type", q: "Ellos ___ a salir esta noche.", answer: ["van"] },
      { type: "type", q: "Yo voy a ___ (отдыхать).", answer: ["descansar"] },
      { type: "order", tr: "На следующей неделе я поеду путешествовать.", answer: "La semana que viene voy a viajar" },
      { type: "listen", say: "¿Cuál es el plan?", options: ["Какой план?", "Где карта?", "Который час?", "Что это?"], answer: 0 }
    ],
    phrase: ["¿Qué vamos a hacer hoy?", "Что будем делать сегодня?"]
  },
  {
    id: "w4d3", week: 4, day: 3, title: "tener que: мне нужно",
    words: [
      ["tener que", "быть должным, нужно", "Tengo que irme.", "Мне нужно идти."],
      ["el pasaporte", "паспорт", "¿Tiene el pasaporte?", "У вас есть паспорт?"],
      ["la maleta", "чемодан", "Mi maleta es azul.", "Мой чемодан синий."],
      ["el equipaje", "багаж", "Solo tengo equipaje de mano.", "У меня только ручная кладь."],
      ["el vuelo", "рейс, полёт", "El vuelo sale tarde.", "Рейс вылетает поздно."],
      ["temprano", "рано", "Tenemos que salir temprano.", "Нам надо выйти рано."],
      ["tarde", "поздно (и «день, вечер»)", "Es tarde.", "Поздно."],
      ["perder", "терять, опоздать на", "¡Vamos a perder el vuelo!", "Мы опоздаем на рейс!"]
    ],
    rule: {
      title: "tener que + глагол — «нужно, должен»",
      html: `<p>Берём <b>tener</b> по лицу + <b>que</b> + глагол:</p>
<table><tr><td>yo</td><td><b>tengo que</b> ir</td></tr><tr><td>tú</td><td><b>tienes que</b> ir</td></tr>
<tr><td>él / ella</td><td><b>tiene que</b> ir</td></tr><tr><td>nosotros</td><td><b>tenemos que</b> ir</td></tr>
<tr><td>ellos</td><td><b>tienen que</b> ir</td></tr></table>
<p><i>Tengo que comprar el billete.</i> — Мне нужно купить билет.</p>
<p>💡 Не путай: <b>tengo</b> un pasaporte — «у меня есть паспорт», <b>tengo que</b> llevar el pasaporte — «мне нужно взять паспорт».</p>`
    },
    exercises: [
      { type: "choice", q: "___ que comprar el billete.", tr: "Мне нужно купить билет.", options: ["Tengo", "Tiene", "Tenemos", "Tienes"], answer: 0 },
      { type: "choice", q: "Nosotros ___ que salir temprano.", tr: "Нам нужно выйти рано.", options: ["tienen", "tenemos", "tengo", "tiene"], answer: 1 },
      { type: "choice", q: "«Tengo que irme» значит…", options: ["У меня есть время", "Мне нужно идти", "Я хочу уйти", "Я ушёл"], answer: 1 },
      { type: "choice", q: "Tienes ___ llevar el pasaporte.", tr: "Тебе нужно взять паспорт.", options: ["a", "de", "que", "—"], answer: 2 },
      { type: "type", q: "Ellos ___ que esperar. (Им нужно ждать)", answer: ["tienen"] },
      { type: "type", q: "Напиши «чемодан» с артиклем", answer: ["la maleta"] },
      { type: "order", tr: "У меня только ручная кладь.", answer: "Solo tengo equipaje de mano" },
      { type: "listen", say: "¡Vamos a perder el vuelo!", options: ["Мы опоздаем на рейс!", "Мы потеряли багаж!", "Рейс задерживается!", "Мы пропустили поезд!"], answer: 0 }
    ],
    phrase: ["Solo tengo equipaje de mano.", "У меня только ручная кладь."]
  },
  {
    id: "w4d4", week: 4, day: 4, title: "Как пройти?",
    words: [
      ["¿Cómo llego a…?", "как добраться до…?", "¿Cómo llego a la plaza?", "Как добраться до площади?"],
      ["seguir recto", "идти прямо", "Siga recto.", "Идите прямо."],
      ["girar", "поворачивать", "Gire a la derecha.", "Поверните направо."],
      ["la calle", "улица", "Es esta calle.", "Это эта улица."],
      ["la esquina", "угол", "Está en la esquina.", "Это на углу."],
      ["el semáforo", "светофор", "En el semáforo, a la izquierda.", "На светофоре налево."],
      ["la plaza", "площадь", "La plaza Mayor está cerca.", "Главная площадь рядом."],
      ["al lado de", "рядом с", "Está al lado del banco.", "Это рядом с банком."]
    ],
    rule: {
      title: "Понять, как идти",
      html: `<p>Спросить: <b>Perdón, ¿cómo llego a…?</b> или <b>¿Dónde está…?</b></p>
<p>Ответы обычно в вежливой повелительной форме (на «Вы»):</p>
<table><tr><td><b>Siga recto</b></td><td>идите прямо</td></tr>
<tr><td><b>Gire a la derecha / izquierda</b></td><td>поверните направо / налево</td></tr>
<tr><td><b>Cruce la calle</b></td><td>перейдите улицу</td></tr>
<tr><td><b>Tome la primera / segunda</b></td><td>сверните на первую / вторую</td></tr></table>
<p>Места: <b>al lado de</b> (рядом с), <b>enfrente de</b> (напротив), <b>en la esquina</b> (на углу).</p>
<p>💡 <b>de + el = del</b>: <i>al lado <b>del</b> banco</i>.</p>`
    },
    exercises: [
      { type: "choice", q: "«Siga recto» значит…", options: ["поверните", "идите прямо", "остановитесь", "вернитесь"], answer: 1 },
      { type: "choice", q: "Gire a la ___.", tr: "Поверните налево.", options: ["derecha", "izquierda", "esquina", "calle"], answer: 1 },
      { type: "choice", q: "Está al lado ___ banco.", tr: "Это рядом с банком.", options: ["de el", "del", "al", "en el"], answer: 1 },
      { type: "choice", q: "«el semáforo» — это…", options: ["перекрёсток", "светофор", "указатель", "остановка"], answer: 1 },
      { type: "type", q: "Напиши «улица» с артиклем", answer: ["la calle"] },
      { type: "type", q: "¿Cómo ___ a la plaza? (Как добраться до площади?)", answer: ["llego"] },
      { type: "order", tr: "Извините, как добраться до вокзала?", answer: "Perdón ¿cómo llego a la estación?" },
      { type: "listen", say: "Está en la esquina", options: ["Это на углу", "Это на площади", "Это напротив", "Это на улице"], answer: 0 }
    ],
    phrase: ["Perdón, ¿cómo llego a la plaza?", "Извините, как дойти до площади?"]
  },
  {
    id: "w4d5", week: 4, day: 5, title: "В отеле",
    words: [
      ["la habitación", "номер, комната", "Una habitación doble.", "Двухместный номер."],
      ["la reserva", "бронь", "Tengo una reserva.", "У меня бронь."],
      ["la llave", "ключ", "¿Me da la llave?", "Дадите ключ?"],
      ["el desayuno", "завтрак", "¿El desayuno está incluido?", "Завтрак включён?"],
      ["la toalla", "полотенце", "No hay toallas.", "Нет полотенец."],
      ["la cama", "кровать", "La cama es cómoda.", "Кровать удобная."],
      ["pequeño / pequeña", "маленький", "La habitación es pequeña.", "Номер маленький."],
      ["funcionar", "работать (о технике)", "El aire acondicionado no funciona.", "Кондиционер не работает."]
    ],
    rule: {
      title: "Решать вопросы в отеле",
      html: `<p>Заселение:</p>
<p><i>Hola, <b>tengo una reserva</b> a nombre de Valera.</i> — У меня бронь на имя Валера.<br><i>¿A qué hora es el desayuno?</i> — Во сколько завтрак?<br><i>¿<b>Está incluido</b> el desayuno?</i> — Завтрак включён?</p>
<p>Проблема — две схемы, которые ты уже знаешь:</p>
<p><b>No hay</b> + что: <i>No hay agua caliente.</i> — Нет горячей воды.<br><b>… no funciona</b>: <i>El wifi no funciona.</i> — Вай-фай не работает.</p>
<p>Просьба: <b>¿Me puede…?</b> <i>¿Me puede cambiar la habitación?</i> — Можете поменять номер?</p>`
    },
    exercises: [
      { type: "choice", q: "На ресепшене говоришь, что бронировал:", options: ["Tengo una reserva.", "Quiero una llave.", "No funciona.", "Está incluido."], answer: 0 },
      { type: "choice", q: "El wifi no ___.", tr: "Вай-фай не работает.", options: ["trabaja", "funciona", "hay", "está"], answer: 1 },
      { type: "choice", q: "___ agua caliente.", tr: "Нет горячей воды.", options: ["No está", "No hay", "No es", "No tiene"], answer: 1 },
      { type: "choice", q: "«¿Está incluido el desayuno?» спрашивает…", options: ["когда завтрак", "включён ли завтрак", "где завтрак", "сколько стоит завтрак"], answer: 1 },
      { type: "type", q: "Напиши «ключ» с артиклем", answer: ["la llave"] },
      { type: "type", q: "La habitación es ___. (Номер маленький)", answer: ["pequeña", "pequena"] },
      { type: "order", tr: "Можете поменять номер?", answer: "¿Me puede cambiar la habitación?" },
      { type: "listen", say: "¿A qué hora es el desayuno?", options: ["Во сколько завтрак?", "Где завтрак?", "Завтрак включён?", "Что на завтрак?"], answer: 0 }
    ],
    phrase: ["Hola, tengo una reserva a nombre de Valera.", "Здравствуйте, у меня бронь на имя Валера."]
  },
  {
    id: "w4d6", week: 4, day: 6, title: "Помогите! Я не понимаю",
    words: [
      ["la ayuda", "помощь", "¡Ayuda, por favor!", "Помогите, пожалуйста!"],
      ["perdido / perdida", "потерявшийся", "Estoy perdido.", "Я заблудился."],
      ["no entiendo", "я не понимаю", "Perdón, no entiendo.", "Извините, я не понимаю."],
      ["¿Puede repetir?", "можете повторить?", "¿Puede repetir, por favor?", "Повторите, пожалуйста."],
      ["más despacio", "помедленнее", "Más despacio, por favor.", "Помедленнее, пожалуйста."],
      ["¿Habla inglés?", "вы говорите по-английски?", "Perdón, ¿habla inglés?", "Извините, вы говорите по-английски?"],
      ["me duele", "у меня болит", "Me duele la cabeza.", "У меня болит голова."],
      ["la policía", "полиция", "Llame a la policía.", "Вызовите полицию."]
    ],
    rule: {
      title: "Фразы-спасатели и doler",
      html: `<p>Когда не понимаешь — это нормально. Говори:</p>
<p><b>No entiendo.</b> · <b>¿Puede repetir?</b> · <b>Más despacio, por favor.</b> · <b>¿Cómo se dice … en español?</b> (как сказать … по-испански?)</p>
<p><b>doler</b> («болеть») устроен как <b>gustar</b>:</p>
<p><i>Me <b>duele</b> la cabeza.</i> — Болит голова (одна).<br><i>Me <b>duelen</b> los pies.</i> — Болят ноги (много).</p>
<p>💡 Это ещё одна тренировка того, на чём ты споткнулся в тесте: глагол смотрит на то, что болит, а не на «я».</p>`
    },
    exercises: [
      { type: "choice", q: "Тебе говорят слишком быстро:", options: ["Más despacio, por favor.", "Nada más.", "Lo mismo.", "Aquí tiene."], answer: 0 },
      { type: "choice", q: "Me ___ la cabeza.", tr: "У меня болит голова.", options: ["duelo", "duele", "duelen", "dolor"], answer: 1 },
      { type: "choice", q: "Me ___ los pies.", tr: "У меня болят ноги.", options: ["duele", "duelen", "duelo", "dolemos"], answer: 1 },
      { type: "choice", q: "«Estoy perdido» значит…", options: ["я устал", "я заблудился", "я потерял паспорт", "я опоздал"], answer: 1 },
      { type: "type", q: "Напиши «я не понимаю»", answer: ["no entiendo"] },
      { type: "type", q: "¿Puede ___, por favor? (Повторите?)", answer: ["repetir"] },
      { type: "order", tr: "Как сказать «билет» по-испански?", answer: "¿Cómo se dice «билет» en español?" },
      { type: "listen", say: "¿Habla inglés?", options: ["Вы говорите по-английски?", "Вы из Англии?", "Вы понимаете?", "Вы можете помочь?"], answer: 0 }
    ],
    phrase: ["Perdón, no entiendo. ¿Puede repetir más despacio?", "Извините, не понимаю. Можете повторить помедленнее?"]
  }
);
window.COURSE.weeks.forEach(w => { if (w.n <= 4) w.soon = false; });
