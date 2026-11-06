/* Содержание курса. Слово: [испанский, русский, пример, перевод примера].
   Упражнения: choice (выбор), type (вписать), order (собрать фразу), listen (на слух). */
window.COURSE = {
  weeks: [
    { n: 1, title: "Знакомство" },
    { n: 2, title: "Где и как" },
    { n: 3, title: "Еда и кафе", soon: true },
    { n: 4, title: "Поездка", soon: true },
    { n: 5, title: "Мой день", soon: true },
    { n: 6, title: "Прошлое 1", soon: true },
    { n: 7, title: "Прошлое 2", soon: true },
    { n: 8, title: "Итог A2", soon: true }
  ],
  lessons: [
    /* ───────── НЕДЕЛЯ 1 ───────── */
    {
      id: "w1d1", week: 1, day: 1, title: "Привет! Кто есть кто",
      words: [
        ["hola", "привет", "¡Hola! ¿Qué tal?", "Привет! Как дела?"],
        ["buenos días", "доброе утро / добрый день", "Buenos días, señor.", "Доброе утро, сеньор."],
        ["buenas noches", "добрый вечер / спокойной ночи", "Buenas noches, hasta mañana.", "Спокойной ночи, до завтра."],
        ["adiós", "пока, до свидания", "Adiós, amigo.", "Пока, друг."],
        ["gracias", "спасибо", "Muchas gracias.", "Большое спасибо."],
        ["por favor", "пожалуйста (прошу)", "Un café, por favor.", "Кофе, пожалуйста."],
        ["perdón", "извините", "Perdón, ¿dónde está el hotel?", "Извините, где отель?"],
        ["sí / no", "да / нет", "Sí, gracias. No, gracias.", "Да, спасибо. Нет, спасибо."]
      ],
      rule: {
        title: "Личные местоимения",
        html: `<p>Кто делает действие:</p>
<table><tr><td><b>yo</b></td><td>я</td></tr>
<tr><td><b>tú</b></td><td>ты</td></tr>
<tr><td><b>él / ella</b></td><td>он / она</td></tr>
<tr><td><b>usted</b></td><td>Вы (вежливо)</td></tr>
<tr><td><b>nosotros / nosotras</b></td><td>мы</td></tr>
<tr><td><b>vosotros / vosotras</b></td><td>вы (друзьям, в Испании)</td></tr>
<tr><td><b>ellos / ellas</b></td><td>они</td></tr>
<tr><td><b>ustedes</b></td><td>вы (вежливо; в Латинской Америке — всем)</td></tr></table>
<p>💡 <b>usted</b> и <b>ustedes</b> работают с глаголом как «он» и «они»: <i>usted es</i>, <i>ustedes son</i>.</p>
<p>💡 Местоимение часто пропускают: <i>Soy Valera</i> = «(Я) Валера». Лицо видно по окончанию глагола — поэтому окончания так важны.</p>`
      },
      exercises: [
        { type: "choice", q: "Как сказать «я»?", options: ["tú", "yo", "él", "ella"], answer: 1 },
        { type: "choice", q: "«ellas» — это…", options: ["они (только женщины)", "она", "мы", "вы"], answer: 0 },
        { type: "choice", q: "Вежливое «Вы» к незнакомому человеку:", options: ["tú", "vosotros", "usted", "él"], answer: 2 },
        { type: "choice", q: "Вечером уходишь из бара. Что сказать?", options: ["Buenos días", "Buenas noches", "Por favor", "Perdón"], answer: 1 },
        { type: "type", q: "Напиши по-испански «спасибо»", answer: ["gracias"] },
        { type: "type", q: "Напиши «мы» (о компании, где есть парни)", answer: ["nosotros"] },
        { type: "order", tr: "Кофе, пожалуйста.", answer: "Un café por favor" },
        { type: "listen", say: "Perdón", options: ["спасибо", "извините", "привет", "пока"], answer: 1 }
      ],
      phrase: ["¡Hola! ¿Qué tal?", "Привет! Как дела?"]
    },
    {
      id: "w1d2", week: 1, day: 2, title: "Глагол ser: кто я",
      words: [
        ["ser", "быть (кем-то, каким-то)", "Quiero ser profesor.", "Хочу быть преподавателем."],
        ["estudiante", "студент / студентка", "Soy estudiante.", "Я студент."],
        ["ruso / rusa", "русский / русская", "Ella es rusa.", "Она русская."],
        ["de", "из (откуда)", "Soy de Rusia.", "Я из России."],
        ["España", "Испания", "Él es de España.", "Он из Испании."],
        ["amigo / amiga", "друг / подруга", "Es mi amigo.", "Это мой друг."],
        ["profesor / profesora", "преподаватель", "La profesora es simpática.", "Преподавательница милая."],
        ["simpático / simpática", "приятный, милый", "Eres muy simpático.", "Ты очень приятный."]
      ],
      rule: {
        title: "Глагол ser — «быть» (кто, откуда, какой)",
        html: `<table><tr><td>yo</td><td><b>soy</b></td><td>nosotros</td><td><b>somos</b></td></tr>
<tr><td>tú</td><td><b>eres</b></td><td>vosotros</td><td><b>sois</b></td></tr>
<tr><td>él / ella / usted</td><td><b>es</b></td><td>ellos / ustedes</td><td><b>son</b></td></tr></table>
<p><b>ser</b> — для того, что про человека «постоянно»:</p>
<ul><li>кто ты: <i>Soy estudiante.</i></li><li>откуда: <i>Soy de Rusia.</i></li><li>какой по характеру: <i>Eres simpático.</i></li></ul>
<p>💡 Ты путал формы в тесте. Запомни пары: <b>yo soy</b> — <b>tú eres</b> — <b>él es</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "Yo ___ estudiante.", tr: "Я студент.", options: ["es", "soy", "eres", "son"], answer: 1 },
        { type: "choice", q: "Tú ___ de España.", tr: "Ты из Испании.", options: ["eres", "soy", "es", "somos"], answer: 0 },
        { type: "choice", q: "Nosotros ___ amigos.", tr: "Мы друзья.", options: ["son", "sois", "somos", "es"], answer: 2 },
        { type: "choice", q: "Ellas ___ rusas.", tr: "Они русские.", options: ["es", "son", "somos", "eres"], answer: 1 },
        { type: "type", q: "Usted ___ profesor. (Вы преподаватель)", answer: ["es"] },
        { type: "type", q: "Ella ___ simpática. (Она милая)", answer: ["es"] },
        { type: "order", tr: "Я из России.", answer: "Soy de Rusia" },
        { type: "listen", say: "Somos de España", options: ["Мы из Испании", "Они из Испании", "Я из Испании", "Ты из Испании"], answer: 0 }
      ],
      phrase: ["Soy de Rusia, ¿y tú?", "Я из России, а ты?"]
    },
    {
      id: "w1d3", week: 1, day: 3, title: "Род и артикли",
      words: [
        ["el chico", "парень", "El chico es alto.", "Парень высокий."],
        ["la chica", "девушка", "La chica es de Madrid.", "Девушка из Мадрида."],
        ["el libro", "книга", "El libro es interesante.", "Книга интересная."],
        ["la casa", "дом", "La casa es grande.", "Дом большой."],
        ["el hotel", "отель", "El hotel es caro.", "Отель дорогой."],
        ["la playa", "пляж", "La playa es bonita.", "Пляж красивый."],
        ["la ciudad", "город", "La ciudad es grande.", "Город большой."],
        ["el día", "день", "Es un día bonito.", "Красивый день."]
      ],
      rule: {
        title: "Мужской и женский род: el / la, un / una",
        html: `<p>У каждого слова есть род. Перед словом ставится артикль:</p>
<table><tr><th></th><th>мужской</th><th>женский</th></tr>
<tr><td>этот (определённый)</td><td><b>el</b> libro</td><td><b>la</b> casa</td></tr>
<tr><td>какой-то (неопределённый)</td><td><b>un</b> libro</td><td><b>una</b> casa</td></tr>
<tr><td>много</td><td><b>los</b> libros</td><td><b>las</b> casas</td></tr></table>
<p>Как угадать род:</p><ul><li>на <b>-o</b> — обычно мужской: el libr<b>o</b></li>
<li>на <b>-a</b> — обычно женский: la cas<b>a</b> (ты ошибся именно здесь в тесте)</li>
<li>на <b>-dad / -ción</b> — женский: la ciu<b>dad</b>, la esta<b>ción</b></li></ul>
<p>⚠️ Исключения учим вместе с артиклем: <b>el día</b>, <b>el mapa</b>, <b>la mano</b>. Поэтому слова в приложении всегда идут с el / la.</p>`
      },
      exercises: [
        { type: "choice", q: "___ casa es grande.", tr: "Дом большой.", options: ["El", "La", "Los", "Un"], answer: 1 },
        { type: "choice", q: "___ libro es interesante.", tr: "Книга интересная.", options: ["La", "Las", "El", "Una"], answer: 2 },
        { type: "choice", q: "___ ciudad es bonita.", tr: "Город красивый.", options: ["El", "La", "Los", "Un"], answer: 1 },
        { type: "choice", q: "Es ___ día bonito.", tr: "Красивый день.", options: ["una", "la", "un", "las"], answer: 2 },
        { type: "choice", q: "___ playas son bonitas.", tr: "Пляжи красивые.", options: ["Los", "Las", "La", "El"], answer: 1 },
        { type: "type", q: "Артикль (el/la): ___ hotel", answer: ["el"] },
        { type: "type", q: "Артикль (un/una): ___ chica", answer: ["una"] },
        { type: "order", tr: "Отель дорогой.", answer: "El hotel es caro" }
      ],
      phrase: ["¿Dónde está la playa?", "Где пляж?"]
    },
    {
      id: "w1d4", week: 1, day: 4, title: "Глаголы на -ar",
      words: [
        ["hablar", "говорить", "Hablo un poco de español.", "Я немного говорю по-испански."],
        ["trabajar", "работать", "Trabajo en Rusia.", "Я работаю в России."],
        ["estudiar", "учиться, учить", "Estudio español.", "Я учу испанский."],
        ["viajar", "путешествовать", "Me gusta viajar.", "Мне нравится путешествовать."],
        ["necesitar", "нуждаться, нужно", "Necesito un taxi.", "Мне нужно такси."],
        ["comprar", "покупать", "Compramos agua.", "Мы покупаем воду."],
        ["llegar", "приезжать, прибывать", "El tren llega a las tres.", "Поезд прибывает в три."],
        ["un poco", "немного", "Hablo un poco.", "Говорю немного."]
      ],
      rule: {
        title: "Настоящее время глаголов на -ar",
        html: `<p>Убираем <b>-ar</b> и добавляем окончание по лицу. Пример: <b>habl</b>ar</p>
<table><tr><td>yo</td><td>habl<b>o</b></td><td>nosotros</td><td>habl<b>amos</b></td></tr>
<tr><td>tú</td><td>habl<b>as</b></td><td>vosotros</td><td>habl<b>áis</b></td></tr>
<tr><td>él / ella / usted</td><td>habl<b>a</b></td><td>ellos / ustedes</td><td>habl<b>an</b></td></tr></table>
<p>💡 Главное: <b>-o</b> = я, <b>-as</b> = ты, <b>-a</b> = он, <b>-amos</b> = мы, <b>-an</b> = они.</p>
<p>В тесте ты выбрал <i>hablas</i> вместо <i>hablamos</i>: «мы» всегда на <b>-mos</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "Nosotros ___ español.", tr: "Мы говорим по-испански.", options: ["hablas", "hablamos", "hablan", "hablo"], answer: 1 },
        { type: "choice", q: "Yo ___ en un hotel.", tr: "Я работаю в отеле.", options: ["trabajo", "trabaja", "trabajas", "trabajan"], answer: 0 },
        { type: "choice", q: "Ella ___ mucho.", tr: "Она много путешествует.", options: ["viajo", "viajas", "viaja", "viajamos"], answer: 2 },
        { type: "choice", q: "Ellos ___ agua.", tr: "Они покупают воду.", options: ["compra", "compramos", "compras", "compran"], answer: 3 },
        { type: "type", q: "Tú ___ (estudiar) español.", answer: ["estudias"] },
        { type: "type", q: "Yo ___ (necesitar) un taxi.", answer: ["necesito"] },
        { type: "type", q: "Nosotros ___ (llegar) mañana.", answer: ["llegamos"] },
        { type: "order", tr: "Я немного говорю по-испански.", answer: "Hablo un poco de español" },
        { type: "listen", say: "Estudiamos español", options: ["Мы учим испанский", "Я учу испанский", "Ты учишь испанский", "Они учат испанский"], answer: 0 }
      ],
      phrase: ["Hablo un poco de español.", "Я немного говорю по-испански."]
    },
    {
      id: "w1d5", week: 1, day: 5, title: "Числа 0–20 и возраст",
      words: [
        ["uno, dos, tres", "1, 2, 3", "Tres cafés, por favor.", "Три кофе, пожалуйста."],
        ["cuatro, cinco, seis", "4, 5, 6", "Somos cinco.", "Нас пятеро."],
        ["siete, ocho, nueve, diez", "7, 8, 9, 10", "La habitación diez.", "Номер десять."],
        ["once, doce, trece", "11, 12, 13", "Son las doce.", "Сейчас двенадцать."],
        ["catorce, quince", "14, 15", "Quince euros.", "Пятнадцать евро."],
        ["dieciséis … diecinueve", "16 … 19", "Tengo diecinueve años.", "Мне девятнадцать лет."],
        ["veinte / veintiuno", "20 / 21", "Tengo veintiún años.", "Мне двадцать один год."],
        ["tener … años", "иметь … лет (возраст)", "¿Cuántos años tienes?", "Сколько тебе лет?"]
      ],
      rule: {
        title: "Возраст через tener — «иметь»",
        html: `<p>По-испански не «мне 21», а «я <b>имею</b> 21 год»:</p>
<table><tr><td>yo</td><td><b>tengo</b></td><td>nosotros</td><td><b>tenemos</b></td></tr>
<tr><td>tú</td><td><b>tienes</b></td><td>vosotros</td><td><b>tenéis</b></td></tr>
<tr><td>él / ella / usted</td><td><b>tiene</b></td><td>ellos / ustedes</td><td><b>tienen</b></td></tr></table>
<p><i>Tengo veintiún años.</i> — Мне 21 год.<br><i>¿Cuántos años tienes?</i> — Сколько тебе лет?</p>
<p>💡 16–19 пишутся одним словом: dieci<b>séis</b>, diecisiete, dieciocho, diecinueve. Перед словом мужского рода <b>veintiuno</b> → <b>veintiún</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "Сколько будет cinco + tres?", options: ["siete", "ocho", "nueve", "seis"], answer: 1 },
        { type: "choice", q: "«15» по-испански:", options: ["cinco", "catorce", "quince", "cincuenta"], answer: 2 },
        { type: "choice", q: "Yo ___ veinte años.", tr: "Мне двадцать лет.", options: ["soy", "tengo", "tiene", "estoy"], answer: 1 },
        { type: "choice", q: "¿Cuántos años ___?", tr: "Сколько тебе лет?", options: ["tienes", "tiene", "tengo", "eres"], answer: 0 },
        { type: "type", q: "Напиши словом число 12", answer: ["doce"] },
        { type: "type", q: "Mi hermana ___ quince años. (Сестре 15)", answer: ["tiene"] },
        { type: "order", tr: "Мне двадцать один год.", answer: "Tengo veintiún años" },
        { type: "listen", say: "diecisiete", options: ["7", "16", "17", "70"], answer: 2 }
      ],
      phrase: ["La cuenta, por favor. ¿Cuánto es?", "Счёт, пожалуйста. Сколько с меня?"]
    },
    {
      id: "w1d6", week: 1, day: 6, title: "Вопросы: знакомимся",
      words: [
        ["¿qué?", "что?", "¿Qué es esto?", "Что это?"],
        ["¿quién?", "кто?", "¿Quién es él?", "Кто он?"],
        ["¿dónde?", "где?", "¿Dónde vives?", "Где ты живёшь?"],
        ["¿de dónde?", "откуда?", "¿De dónde eres?", "Откуда ты?"],
        ["¿cómo?", "как?", "¿Cómo te llamas?", "Как тебя зовут?"],
        ["¿cuánto?", "сколько?", "¿Cuánto cuesta?", "Сколько стоит?"],
        ["me llamo…", "меня зовут…", "Me llamo Valera.", "Меня зовут Валера."],
        ["mucho gusto", "очень приятно", "Mucho gusto, Ana.", "Очень приятно, Ана."]
      ],
      rule: {
        title: "Вопросительные слова",
        html: `<p>Вопрос пишется с перевёрнутым знаком в начале: <b>¿</b>…<b>?</b> Вопросительные слова всегда с ударением-значком: <b>qué, quién, dónde, cómo, cuánto</b>.</p>
<p>Мини-диалог знакомства:</p>
<p>— ¡Hola! ¿Cómo te llamas? <i>(Как тебя зовут?)</i><br>— Me llamo Valera. ¿Y tú? <i>(А тебя?)</i><br>— Me llamo Ana. ¿De dónde eres? <i>(Откуда ты?)</i><br>— Soy de Rusia. <i>(Я из России.)</i><br>— ¡Mucho gusto! <i>(Очень приятно!)</i></p>`
      },
      exercises: [
        { type: "choice", q: "Ты хочешь узнать, откуда человек:", options: ["¿Cómo te llamas?", "¿De dónde eres?", "¿Cuánto cuesta?", "¿Qué es esto?"], answer: 1 },
        { type: "choice", q: "«¿Cuánto cuesta?» значит…", options: ["Как дела?", "Сколько стоит?", "Где это?", "Кто это?"], answer: 1 },
        { type: "choice", q: "На «¿Cómo te llamas?» отвечаем:", options: ["Soy de Rusia.", "Tengo 21 años.", "Me llamo Valera.", "Muy bien."], answer: 2 },
        { type: "choice", q: "¿___ está el hotel?", tr: "Где отель?", options: ["Qué", "Quién", "Dónde", "Cuánto"], answer: 2 },
        { type: "type", q: "Напиши «очень приятно»", answer: ["mucho gusto"] },
        { type: "type", q: "¿___ es él? (Кто он?)", answer: ["quién", "quien"] },
        { type: "order", tr: "Откуда ты?", answer: "¿De dónde eres?" },
        { type: "listen", say: "¿Cómo te llamas?", options: ["Как тебя зовут?", "Откуда ты?", "Где ты живёшь?", "Сколько тебе лет?"], answer: 0 }
      ],
      phrase: ["¡Mucho gusto! Me llamo Valera.", "Очень приятно! Меня зовут Валера."]
    },

    /* ───────── НЕДЕЛЯ 2 ───────── */
    {
      id: "w2d1", week: 2, day: 1, title: "Глагол estar: как ты",
      words: [
        ["estar", "быть (сейчас, где-то)", "Estoy en casa.", "Я дома."],
        ["bien / mal", "хорошо / плохо", "Estoy bien, gracias.", "У меня всё хорошо, спасибо."],
        ["cansado / cansada", "уставший", "Estoy muy cansado.", "Я очень устал."],
        ["contento / contenta", "довольный, радостный", "Ella está contenta.", "Она довольна."],
        ["enfermo / enferma", "больной", "Mi amigo está enfermo.", "Мой друг болеет."],
        ["ocupado / ocupada", "занятой", "¿Estás ocupado?", "Ты занят?"],
        ["muy", "очень", "Estamos muy bien.", "У нас всё очень хорошо."],
        ["hoy", "сегодня", "Hoy estoy cansado.", "Сегодня я устал."]
      ],
      rule: {
        title: "Глагол estar — «быть» сейчас",
        html: `<table><tr><td>yo</td><td><b>estoy</b></td><td>nosotros</td><td><b>estamos</b></td></tr>
<tr><td>tú</td><td><b>estás</b></td><td>vosotros</td><td><b>estáis</b></td></tr>
<tr><td>él / ella / usted</td><td><b>está</b></td><td>ellos / ustedes</td><td><b>están</b></td></tr></table>
<p><b>estar</b> — временное состояние: как ты себя чувствуешь <i>сейчас</i>.</p>
<p><i>Hoy <b>estoy</b> cansado.</i> — Сегодня я устал (а завтра, может, нет).</p>
<p>💡 В тесте ты выбрал <i>es</i>. Устал — это состояние, значит <b>estar</b>, и «я» → <b>estoy</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "Hoy ___ muy cansado.", tr: "Сегодня я очень устал.", options: ["soy", "estoy", "es", "está"], answer: 1 },
        { type: "choice", q: "¿Cómo ___ tú?", tr: "Как ты?", options: ["estás", "eres", "está", "estoy"], answer: 0 },
        { type: "choice", q: "Ellos ___ contentos.", tr: "Они довольны.", options: ["está", "estamos", "están", "son"], answer: 2 },
        { type: "choice", q: "Nosotros ___ ocupados.", tr: "Мы заняты.", options: ["estamos", "están", "somos", "estoy"], answer: 0 },
        { type: "type", q: "Mi madre ___ enferma. (Мама болеет)", answer: ["está", "esta"] },
        { type: "type", q: "Yo ___ bien, gracias.", answer: ["estoy"] },
        { type: "order", tr: "Сегодня я очень устал.", answer: "Hoy estoy muy cansado" },
        { type: "listen", say: "¿Estás ocupado?", options: ["Ты занят?", "Ты устал?", "Ты дома?", "Ты болеешь?"], answer: 0 }
      ],
      phrase: ["Estoy bien, gracias. ¿Y tú?", "У меня всё хорошо, спасибо. А у тебя?"]
    },
    {
      id: "w2d2", week: 2, day: 2, title: "Где это? Город",
      words: [
        ["la estación", "вокзал, станция", "¿Dónde está la estación?", "Где вокзал?"],
        ["el banco", "банк", "El banco está cerca.", "Банк рядом."],
        ["la farmacia", "аптека", "La farmacia está allí.", "Аптека вон там."],
        ["el museo", "музей", "El museo está en el centro.", "Музей в центре."],
        ["el restaurante", "ресторан", "El restaurante está cerrado.", "Ресторан закрыт."],
        ["aquí / allí", "здесь / там", "Estamos aquí.", "Мы здесь."],
        ["cerca / lejos", "близко / далеко", "¿Está lejos?", "Это далеко?"],
        ["a la derecha / a la izquierda", "справа / слева", "Está a la derecha.", "Это справа."]
      ],
      rule: {
        title: "estar для места: где что находится",
        html: `<p>Где что находится — всегда <b>estar</b>:</p>
<p><i>¿Dónde <b>está</b> la estación?</i> — Где вокзал?<br><i>La farmacia <b>está</b> a la izquierda.</i> — Аптека слева.<br><i><b>Estamos</b> en Madrid.</i> — Мы в Мадриде.</p>
<p>💡 Даже если что-то никуда не денется (город, музей), всё равно <b>estar</b>: место = estar.</p>
<p>Полезно: <b>a + el = al</b>: <i>Voy al banco</i> (иду в банк).</p>`
      },
      exercises: [
        { type: "choice", q: "¿Dónde ___ el museo?", tr: "Где музей?", options: ["es", "está", "son", "estoy"], answer: 1 },
        { type: "choice", q: "«lejos» — это…", options: ["близко", "далеко", "справа", "здесь"], answer: 1 },
        { type: "choice", q: "La farmacia está ___.", tr: "Аптека слева.", options: ["a la derecha", "a la izquierda", "cerca", "allí"], answer: 1 },
        { type: "choice", q: "Nosotros ___ en el centro.", tr: "Мы в центре.", options: ["somos", "estáis", "estamos", "están"], answer: 2 },
        { type: "type", q: "Напиши «здесь»", answer: ["aquí", "aqui"] },
        { type: "type", q: "El banco ___ cerca. (Банк близко)", answer: ["está", "esta"] },
        { type: "order", tr: "Извините, где вокзал?", answer: "Perdón ¿dónde está la estación?" },
        { type: "listen", say: "Está a la derecha", options: ["Это справа", "Это слева", "Это далеко", "Это здесь"], answer: 0 }
      ],
      phrase: ["Perdón, ¿dónde está la estación?", "Извините, где вокзал?"]
    },
    {
      id: "w2d3", week: 2, day: 3, title: "ser или estar?",
      words: [
        ["alto / alta", "высокий", "Mi hermano es alto.", "Мой брат высокий."],
        ["guapo / guapa", "красивый (о человеке)", "Ella es muy guapa.", "Она очень красивая."],
        ["nervioso / nerviosa", "нервный, на нервах", "Estoy nervioso hoy.", "Я сегодня нервничаю."],
        ["abierto / abierta", "открытый", "La tienda está abierta.", "Магазин открыт."],
        ["cerrado / cerrada", "закрытый", "El museo está cerrado.", "Музей закрыт."],
        ["caro / cara", "дорогой", "El hotel es caro.", "Отель дорогой."],
        ["barato / barata", "дешёвый", "Es muy barato.", "Это очень дёшево."],
        ["listo / lista", "готовый", "¿Estás listo?", "Ты готов?"]
      ],
      rule: {
        title: "ser vs estar — как не путать",
        html: `<table><tr><th>ser</th><th>estar</th></tr>
<tr><td>кто: <i>soy estudiante</i></td><td>как себя чувствую: <i>estoy cansado</i></td></tr>
<tr><td>откуда: <i>soy de Rusia</i></td><td>где: <i>estoy en casa</i></td></tr>
<tr><td>какой всегда: <i>es alto</i></td><td>какой сейчас: <i>está abierto</i></td></tr>
<tr><td>цена в целом: <i>es caro</i></td><td>готов / занят: <i>está listo</i></td></tr></table>
<p>💡 Проверка: «это свойство или состояние на сейчас?» Свойство → <b>ser</b>, состояние или место → <b>estar</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "Mi hermano ___ alto.", tr: "Мой брат высокий.", options: ["es", "está"], answer: 0 },
        { type: "choice", q: "La tienda ___ cerrada.", tr: "Магазин закрыт.", options: ["es", "está"], answer: 1 },
        { type: "choice", q: "Yo ___ de Rusia.", tr: "Я из России.", options: ["soy", "estoy"], answer: 0 },
        { type: "choice", q: "Hoy ___ nervioso.", tr: "Сегодня я нервничаю.", options: ["soy", "estoy"], answer: 1 },
        { type: "choice", q: "Madrid ___ en España.", tr: "Мадрид в Испании.", options: ["es", "está"], answer: 1 },
        { type: "type", q: "¿___ (tú) listo? (Ты готов?)", answer: ["estás", "estas"] },
        { type: "type", q: "Ella ___ estudiante. (Она студентка)", answer: ["es"] },
        { type: "order", tr: "Отель дорогой, но красивый.", answer: "El hotel es caro pero bonito" }
      ],
      phrase: ["¿Está abierto hoy?", "Сегодня открыто?"]
    },
    {
      id: "w2d4", week: 2, day: 4, title: "hay — «есть, имеется»",
      words: [
        ["hay", "есть, имеется", "Hay un parque aquí.", "Здесь есть парк."],
        ["la tienda", "магазин", "¿Hay una tienda cerca?", "Рядом есть магазин?"],
        ["el supermercado", "супермаркет", "Hay un supermercado allí.", "Там есть супермаркет."],
        ["el baño", "туалет, ванная", "¿Dónde está el baño?", "Где туалет?"],
        ["el cajero", "банкомат", "¿Hay un cajero cerca?", "Рядом есть банкомат?"],
        ["el parque", "парк", "El parque es bonito.", "Парк красивый."],
        ["el wifi", "вай-фай", "¿Hay wifi?", "Есть вай-фай?"],
        ["mucho / mucha", "много", "Hay mucha gente.", "Много людей."]
      ],
      rule: {
        title: "hay — «есть» (существует, имеется)",
        html: `<p><b>hay</b> — одна форма для всего: и один предмет, и много.</p>
<p><i><b>Hay</b> un cajero cerca.</i> — Рядом есть банкомат.<br><i><b>Hay</b> dos restaurantes.</i> — Есть два ресторана.<br><i>¿<b>Hay</b> wifi?</i> — Есть вай-фай?</p>
<p>💡 Разница: <b>hay</b> — «есть ли вообще», <b>está</b> — «где конкретный».<br><i>¿Hay un baño?</i> — Тут есть туалет?<br><i>¿Dónde está el baño?</i> — Где (этот) туалет?</p>
<p>После <b>hay</b> идёт <b>un / una</b> или число, а не <b>el / la</b>.</p>`
      },
      exercises: [
        { type: "choice", q: "¿___ wifi en el hotel?", tr: "В отеле есть вай-фай?", options: ["Está", "Hay", "Es", "Son"], answer: 1 },
        { type: "choice", q: "¿Dónde ___ el baño?", tr: "Где туалет?", options: ["hay", "está", "es", "tiene"], answer: 1 },
        { type: "choice", q: "Hay ___ supermercado cerca.", tr: "Рядом есть супермаркет.", options: ["el", "un", "la", "una"], answer: 1 },
        { type: "choice", q: "«el cajero» — это…", options: ["кассир в банке", "банкомат", "касса", "магазин"], answer: 1 },
        { type: "type", q: "¿___ una farmacia cerca? (Есть рядом аптека?)", answer: ["hay"] },
        { type: "type", q: "Напиши «магазин» с артиклем", answer: ["la tienda"] },
        { type: "order", tr: "Рядом есть банкомат?", answer: "¿Hay un cajero cerca?" },
        { type: "listen", say: "Hay mucha gente", options: ["Много людей", "Много денег", "Мало людей", "Много магазинов"], answer: 0 }
      ],
      phrase: ["¿Hay un cajero cerca?", "Здесь рядом есть банкомат?"]
    },
    {
      id: "w2d5", week: 2, day: 5, title: "Глаголы на -er и -ir",
      words: [
        ["comer", "есть, кушать", "Comemos en casa.", "Мы едим дома."],
        ["beber", "пить", "Bebo agua.", "Я пью воду."],
        ["leer", "читать", "Leo un libro.", "Я читаю книгу."],
        ["aprender", "учить, изучать", "Aprendo español.", "Я учу испанский."],
        ["vivir", "жить", "Vivo en Rusia.", "Я живу в России."],
        ["escribir", "писать", "Escribes muy bien.", "Ты очень хорошо пишешь."],
        ["abrir", "открывать", "La tienda abre a las nueve.", "Магазин открывается в девять."],
        ["el agua", "вода (жен. род!)", "Un agua sin gas.", "Воду без газа."]
      ],
      rule: {
        title: "Настоящее время: -er и -ir",
        html: `<table><tr><th></th><th>com<b>er</b></th><th>viv<b>ir</b></th></tr>
<tr><td>yo</td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
<tr><td>tú</td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
<tr><td>él / ella / usted</td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
<tr><td>nosotros</td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
<tr><td>ellos / ustedes</td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table>
<p>💡 Сравни с -ar: там <i>habl<b>a</b>s</i>, тут <i>com<b>e</b>s</i>. «Я» везде на <b>-o</b>.</p>
<p>⚠️ <b>el agua</b> — женского рода, но с <i>el</i> (так легче произносить). Прилагательное женское: <i>el agua fría</i>.</p>`
      },
      exercises: [
        { type: "choice", q: "Yo ___ en Rusia.", tr: "Я живу в России.", options: ["vive", "vivo", "vives", "vivimos"], answer: 1 },
        { type: "choice", q: "Nosotros ___ en casa.", tr: "Мы едим дома.", options: ["comemos", "comen", "comimos", "comes"], answer: 0 },
        { type: "choice", q: "¿Tú ___ libros?", tr: "Ты читаешь книги?", options: ["lee", "leo", "lees", "leen"], answer: 2 },
        { type: "choice", q: "Ellos ___ en Madrid.", tr: "Они живут в Мадриде.", options: ["viven", "vivimos", "vive", "vivís"], answer: 0 },
        { type: "type", q: "Nosotros ___ (vivir) cerca.", answer: ["vivimos"] },
        { type: "type", q: "Ella ___ (beber) café.", answer: ["bebe"] },
        { type: "type", q: "Yo ___ (aprender) español.", answer: ["aprendo"] },
        { type: "order", tr: "Я живу в Ханты-Мансийске.", answer: "Vivo en Janty-Mansiisk" },
        { type: "listen", say: "¿Dónde vives?", options: ["Где ты живёшь?", "Что ты пьёшь?", "Что ты читаешь?", "Где ты учишься?"], answer: 0 }
      ],
      phrase: ["Un agua sin gas, por favor.", "Воду без газа, пожалуйста."]
    },
    {
      id: "w2d6", week: 2, day: 6, title: "Дни недели и время",
      words: [
        ["lunes, martes", "понедельник, вторник", "Hoy es lunes.", "Сегодня понедельник."],
        ["miércoles, jueves", "среда, четверг", "El jueves trabajo.", "В четверг я работаю."],
        ["viernes", "пятница", "El viernes vamos a la playa.", "В пятницу едем на пляж."],
        ["sábado, domingo", "суббота, воскресенье", "El domingo está cerrado.", "В воскресенье закрыто."],
        ["mañana", "завтра (и «утро»)", "Mañana es martes.", "Завтра вторник."],
        ["¿Qué hora es?", "Который час?", "Perdón, ¿qué hora es?", "Извините, который час?"],
        ["Es la una / Son las dos", "Час / Два часа", "Son las tres y media.", "Половина четвёртого."],
        ["y media / y cuarto", "с половиной / с четвертью", "Son las ocho y cuarto.", "Четверть девятого."]
      ],
      rule: {
        title: "Дни недели и который час",
        html: `<p><b>lunes, martes, miércoles, jueves, viernes, sábado, domingo</b> — с маленькой буквы, мужского рода.</p>
<p>«В понедельник» = <b>el</b> lunes. «По понедельникам» = <b>los</b> lunes.</p>
<p><b>Который час:</b><br><i>Es <b>la</b> una.</i> — Час (один → <b>es la</b>).<br><i>Son <b>las</b> dos / tres / diez.</i> — Два / три / десять (больше одного → <b>son las</b>).<br><i>Son las tres <b>y media</b>.</i> — 3:30. <i>Son las ocho <b>y cuarto</b>.</i> — 8:15. <i>Son las nueve <b>menos cuarto</b>.</i> — 8:45.</p>
<p>💡 В тесте ты выбрал domingo вместо martes. Подсказка для запоминания: <b>lunes</b> — Луна, <b>martes</b> — Марс, <b>miércoles</b> — Меркурий.</p>`
      },
      exercises: [
        { type: "choice", q: "Hoy es lunes. ¿Qué día es mañana?", tr: "Сегодня понедельник. Какой день завтра?", options: ["martes", "domingo", "jueves", "sábado"], answer: 0 },
        { type: "choice", q: "«viernes» — это…", options: ["четверг", "пятница", "суббота", "среда"], answer: 1 },
        { type: "choice", q: "Как сказать «Два часа»?", options: ["Es la dos.", "Son las dos.", "Son dos.", "Es dos."], answer: 1 },
        { type: "choice", q: "«Son las cinco y media» — это…", options: ["5:15", "5:30", "4:30", "5:45"], answer: 1 },
        { type: "type", q: "Напиши «воскресенье»", answer: ["domingo"] },
        { type: "type", q: "___ la una. (Сейчас час)", answer: ["es"] },
        { type: "order", tr: "Извините, который час?", answer: "Perdón ¿qué hora es?" },
        { type: "listen", say: "Son las ocho y cuarto", options: ["8:15", "8:30", "4:08", "7:45"], answer: 0 }
      ],
      phrase: ["¿A qué hora abre?", "Во сколько открывается?"]
    }
  ]
};
