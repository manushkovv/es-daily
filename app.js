(() => {
  "use strict";

  const tg = window.Telegram && window.Telegram.WebApp;
  const C = window.COURSE;
  const $app = document.getElementById("app");
  const INTERVALS = [0, 1, 2, 4, 7, 15, 30]; // дни до следующего повторения по «коробкам»

  /* ───────── хранилище: Telegram CloudStorage, иначе localStorage ───────── */
  const cloud = tg && tg.CloudStorage && tg.isVersionAtLeast && tg.isVersionAtLeast("6.9") ? tg.CloudStorage : null;
  const store = {
    get(key) {
      if (!cloud) {
        try { return Promise.resolve(localStorage.getItem(key)); } catch (e) { return Promise.resolve(null); }
      }
      return new Promise(res => cloud.getItem(key, (err, v) => res(err ? null : v || null)));
    },
    set(key, val) {
      if (!cloud) {
        try { localStorage.setItem(key, val); } catch (e) { /* приватный режим */ }
        return Promise.resolve();
      }
      return new Promise(res => cloud.setItem(key, val, () => res()));
    }
  };
  const loadJSON = async (k, def) => { try { return JSON.parse(await store.get(k)) || def; } catch (e) { return def; } };

  /* ───────── даты ───────── */
  const day = (offset = 0) => { const d = new Date(); d.setDate(d.getDate() + offset); return d.toLocaleDateString("sv"); };

  /* ───────── план: уроки + день повторения в конце каждой недели ───────── */
  const PLAN = [];
  C.weeks.forEach(w => {
    const ls = C.lessons.filter(l => l.week === w.n);
    if (!ls.length) return;
    ls.forEach(l => PLAN.push(l));
    PLAN.push({ id: `w${w.n}r`, week: w.n, day: 7, title: "Повторение и мини-тест", review: true });
  });

  /* ───────── состояние ───────── */
  let progress = { done: {}, streak: 0, last: null };
  let srs = {}; // слово -> { b: коробка, d: дата, ru, w: неделя }

  async function loadState() {
    progress = await loadJSON("progress", progress);
    for (const w of C.weeks) Object.assign(srs, await loadJSON("srs" + w.n, {}));
  }
  async function saveState() {
    await store.set("progress", JSON.stringify(progress));
    const byWeek = {};
    for (const [k, v] of Object.entries(srs)) (byWeek[v.w] = byWeek[v.w] || {})[k] = v;
    for (const [w, part] of Object.entries(byWeek)) await store.set("srs" + w, JSON.stringify(part));
  }

  /* ───────── озвучка ───────── */
  let esVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    esVoice = vs.find(v => v.lang === "es-ES") || vs.find(v => v.lang && v.lang.startsWith("es")) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text) {
    if (!("speechSynthesis" in window)) return false;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\s*\/\s*/g, ", "));
    u.lang = "es-ES"; u.rate = 0.85;
    if (esVoice) u.voice = esVoice;
    speechSynthesis.speak(u);
    return true;
  }

  /* ───────── утилиты ───────── */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => s.toLowerCase().replace(/[¿?¡!.,;:]/g, "").replace(/\s+/g, " ").trim();
  const noAcc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  const haptic = t => { try { tg && tg.HapticFeedback.notificationOccurred(t); } catch (e) { /* нет */ } };
  const sayBtn = text => `<button class="say" data-say="${esc(text)}" aria-label="Послушать">🔊</button>`;
  function render(html) {
    $app.innerHTML = html;
    $app.querySelectorAll("[data-say]").forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.say); });
    window.scrollTo(0, 0);
  }
  const lessonById = id => PLAN.find(l => l.id === id);
  const nextLesson = () => PLAN.find(l => !progress.done[l.id]) || null;
  const dueWords = () => Object.entries(srs).filter(([, v]) => v.d <= day()).map(([es, v]) => ({ es, ...v }));

  /* ───────── доступ только владельцу ───────── */
  async function allowed() {
    const want = (window.APP_CONFIG || {}).ownerHash;
    if (!want) return true;
    const id = tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id;
    if (!id || !crypto.subtle) return false;
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(id)));
    const hex = [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
    return hex === want;
  }

  /* ───────── главный экран ───────── */
  function home() {
    if (tg) tg.BackButton.hide();
    const next = nextLesson();
    const doneCount = Object.keys(progress.done).length;
    const today = day();
    const doneToday = Object.values(progress.done).includes(today);
    const streak = progress.last === today || progress.last === day(-1) ? progress.streak : 0;
    const due = dueWords().length;

    let html = `<h1>Español</h1><p class="muted">План A1 → A2 · 20–30 минут в день</p>
      <div class="stats">
        <div class="card"><div class="big">${streak}</div><div class="muted">дней подряд 🔥</div></div>
        <div class="card"><div class="big">${doneCount}</div><div class="muted">уроков</div></div>
        <div class="card"><div class="big">${Object.keys(srs).length}</div><div class="muted">слов</div></div>
      </div>`;

    if (next) {
      html += doneToday
        ? `<div class="card"><b>Сегодня урок пройден ✓</b><p class="muted">Можно отдохнуть или пройти следующий.</p>
           <button class="btn secondary" data-open="${next.id}">Ещё урок: ${esc(next.title)}</button></div>`
        : `<div class="card"><span class="tag">Неделя ${next.week} · день ${next.day}</span>
           <h2 style="margin-top:6px">${esc(next.title)}</h2>
           ${due ? `<p class="muted">Плюс повторение: ${due} сл.</p>` : ""}
           <button class="btn" data-open="${next.id}">Начать урок</button></div>`;
    } else {
      html += `<div class="card"><b>Все доступные уроки пройдены 🎉</b><p class="muted">Новые недели появятся скоро. Пока повторяй слова.</p></div>`;
    }
    if (due && (doneToday || !next)) html += `<button class="btn secondary" data-review="1">Повторить слова (${due})</button>`;

    for (const w of C.weeks) {
      const ls = PLAN.filter(l => l.week === w.n);
      const done = ls.filter(l => progress.done[l.id]).length;
      html += `<h2>Неделя ${w.n}. ${esc(w.title)}</h2>`;
      if (w.soon || !ls.length) { html += `<p class="muted">Скоро</p>`; continue; }
      html += `<div class="progress"><i style="width:${Math.round(done / ls.length * 100)}%"></i></div>`;
      for (const l of ls) {
        const isDone = progress.done[l.id], isNext = next && next.id === l.id;
        const cls = isDone ? "done" : isNext ? "next" : "locked";
        html += `<div class="lesson ${cls}" ${isDone || isNext ? `data-open="${l.id}"` : ""}>
          <div class="mark">${isDone ? "✓" : l.day}</div><div class="grow">${esc(l.title)}</div></div>`;
      }
    }
    render(html);
    $app.querySelectorAll("[data-open]").forEach(el => el.onclick = () => startLesson(lessonById(el.dataset.open)));
    const r = $app.querySelector("[data-review]");
    if (r) r.onclick = () => startReviewOnly();
  }

  /* ───────── урок ───────── */
  let S = null; // текущая сессия

  function buildSteps(lesson) {
    const steps = [];
    const due = shuffle(dueWords()).slice(0, 15);
    if (lesson.review) {
      const weekWords = C.lessons.filter(l => l.week === lesson.week).flatMap(l => l.words.map(w => ({ es: w[0], ru: w[1] })));
      const pool = due.length ? due : [];
      const extra = shuffle(weekWords).filter(w => !pool.some(p => p.es === w.es)).slice(0, Math.max(0, 15 - pool.length));
      pool.concat(extra).forEach(w => steps.push({ kind: "flash", w }));
      const ex = shuffle(C.lessons.filter(l => l.week === lesson.week).flatMap(l => l.exercises)).slice(0, 12);
      ex.forEach(e => steps.push({ kind: "ex", e }));
    } else {
      due.forEach(w => steps.push({ kind: "flash", w }));
      lesson.words.forEach(w => steps.push({ kind: "word", w }));
      steps.push({ kind: "rule" });
      lesson.exercises.forEach(e => steps.push({ kind: "ex", e }));
      steps.push({ kind: "phrase" });
    }
    return steps;
  }

  function startLesson(lesson) {
    S = { lesson, steps: buildSteps(lesson), i: 0, ok: 0, total: 0, retried: new Set() };
    if (tg) { tg.BackButton.show(); tg.BackButton.onClick(exitLesson); }
    step();
  }
  function startReviewOnly() {
    S = { lesson: { id: null, title: "Повторение слов" }, steps: shuffle(dueWords()).slice(0, 20).map(w => ({ kind: "flash", w })), i: 0, ok: 0, total: 0, retried: new Set() };
    if (tg) { tg.BackButton.show(); tg.BackButton.onClick(exitLesson); }
    step();
  }
  function exitLesson() {
    if (tg) tg.BackButton.offClick(exitLesson);
    S = null; home();
  }

  const top = () => `<div class="top"><button class="x" id="x">✕</button>
    <div class="progress"><i style="width:${Math.round(S.i / S.steps.length * 100)}%"></i></div></div>`;
  function bindTop() { const x = document.getElementById("x"); if (x) x.onclick = exitLesson; }
  function next() { S.i++; step(); }

  function step() {
    if (!S) return;
    if (S.i >= S.steps.length) return finish();
    const s = S.steps[S.i];
    ({ flash: showFlash, word: showWord, rule: showRule, ex: showEx, phrase: showPhrase })[s.kind](s);
    bindTop();
  }

  function showFlash(s) {
    const w = s.w;
    render(`${top()}<p class="muted">Повторение · вспомни перевод</p>
      <div class="card flash"><div class="row" style="justify-content:center"><span class="big">${esc(w.es)}</span>${sayBtn(w.es)}</div>
      <p id="ru" class="muted" style="visibility:hidden;font-size:18px">${esc(w.ru)}</p></div>
      <button class="btn" id="show">Показать перевод</button>
      <div id="grade" style="display:none"><button class="btn" id="yes">Помню</button><button class="btn secondary" id="no">Не помню</button></div>`);
    speak(w.es);
    document.getElementById("show").onclick = () => {
      document.getElementById("ru").style.visibility = "visible";
      document.getElementById("show").style.display = "none";
      document.getElementById("grade").style.display = "block";
    };
    const grade = good => {
      const cur = srs[w.es];
      if (cur) {
        if (good) { cur.b = Math.min(cur.b + 1, INTERVALS.length - 1); cur.d = day(INTERVALS[cur.b]); }
        else { cur.b = 1; cur.d = day(1); }
      }
      next();
    };
    document.getElementById("yes").onclick = () => grade(true);
    document.getElementById("no").onclick = () => grade(false);
  }

  function showWord(s) {
    const [es, ru, ex, exRu] = s.w;
    const n = S.lesson.words.indexOf(s.w) + 1;
    render(`${top()}<p class="muted">Новое слово ${n} из ${S.lesson.words.length}</p>
      <div class="card"><div class="row"><div class="grow"><div class="big">${esc(es)}</div><div style="font-size:18px">${esc(ru)}</div></div>${sayBtn(es)}</div></div>
      <div class="card"><div class="row"><div class="grow"><div class="es">${esc(ex)}</div><div class="muted">${esc(exRu)}</div></div>${sayBtn(ex)}</div></div>
      <button class="btn" id="go">Дальше</button>`);
    speak(es);
    document.getElementById("go").onclick = next;
  }

  function showRule() {
    const r = S.lesson.rule;
    render(`${top()}<p class="muted">Правило</p><h2>${esc(r.title)}</h2><div class="card rule">${r.html}</div>
      <button class="btn" id="go">Понятно, к упражнениям</button>`);
    document.getElementById("go").onclick = next;
  }

  function showPhrase() {
    const [es, ru] = S.lesson.phrase;
    render(`${top()}<p class="muted">Фраза дня — пригодится в поездке</p>
      <div class="card flash"><div class="row" style="justify-content:center"><span class="es" style="font-size:22px">${esc(es)}</span>${sayBtn(es)}</div>
      <p class="muted">${esc(ru)}</p></div><button class="btn" id="go">Завершить урок</button>`);
    speak(es);
    document.getElementById("go").onclick = next;
  }

  /* ───────── упражнения ───────── */
  function showEx(s) {
    const e = s.e;
    const head = (label, body) => `${top()}<p class="muted">${label}</p>${body}`;
    const qBlock = e.q ? `<div class="card"><div class="es">${esc(e.q)}</div>${e.tr ? `<div class="muted">${esc(e.tr)}</div>` : ""}</div>` : "";

    if (e.type === "choice" || e.type === "listen" || e.type === "meme") {
      const label = e.type === "listen" ? "Послушай и выбери перевод" : e.type === "meme" ? "Мем 😏" : "Выбери ответ";
      const body = e.type === "listen"
        ? `<div class="card flash"><button class="say" style="width:64px;height:64px;font-size:28px" data-say="${esc(e.say)}">🔊</button>
           <p class="muted" id="fallback" style="display:none">${esc(e.say)}</p></div>`
        : e.type === "meme"
        ? `<div class="meme"><div class="m-top">${esc(e.top)}</div><div class="m-emoji">${esc(e.emoji)}</div>
           <div class="m-bottom">${esc(e.bottom)}</div></div><p>${esc(e.q)}</p>`
        : qBlock;
      render(head(label, body + e.options.map((o, i) => `<button class="opt" data-i="${i}">${esc(o)}</button>`).join("") + `<div id="fb"></div>`));
      if (e.type === "listen" && !speak(e.say)) document.getElementById("fallback").style.display = "block";
      $app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        const i = +b.dataset.i, good = i === e.answer;
        $app.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.i === e.answer) x.classList.add("ok"); });
        if (!good) b.classList.add("bad");
        const full = e.type === "listen" ? `«${e.say}» — ${e.options[e.answer]}`
          : e.type === "meme" ? ([e.bottom, e.top].find(t => t.includes("___")) || "___").replace("___", e.options[e.answer])
          : (e.q.includes("___") ? e.q.replace("___", e.options[e.answer]) : e.options[e.answer]);
        result(s, good, full);
      });
      return;
    }

    if (e.type === "type") {
      render(head("Впиши ответ", `<div class="card"><div class="es">${esc(e.q)}</div></div>
        <input class="answer" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ответ по-испански">
        <p class="muted" style="font-size:14px">Ударения (á, é, í, ó, ú, ñ) можно не ставить — подскажу, где они нужны.</p>
        <button class="btn" id="check">Проверить</button><div id="fb"></div>`));
      const inp = document.getElementById("inp");
      inp.focus();
      const check = () => {
        const v = norm(inp.value);
        if (!v) return;
        const exact = e.answer.some(a => norm(a) === v);
        const loose = e.answer.some(a => noAcc(norm(a)) === noAcc(v));
        inp.disabled = true;
        document.getElementById("check").style.display = "none";
        const right = e.answer[0];
        const note = !exact && loose ? `Верно! Правильное написание: <b>${esc(right)}</b>` : null;
        result(s, exact || loose, right, note);
      };
      document.getElementById("check").onclick = check;
      inp.onkeydown = ev => { if (ev.key === "Enter") check(); };
      return;
    }

    if (e.type === "order") {
      const tokens = e.answer.split(" ");
      let pool = shuffle(tokens.map((t, i) => ({ t, i })));
      if (pool.every((p, k) => p.i === k) && tokens.length > 1) pool = pool.reverse();
      const picked = [];
      const draw = () => {
        document.getElementById("tgt").innerHTML = picked.map((p, k) => `<button class="chip" data-k="${k}">${esc(p.t)}</button>`).join("");
        document.getElementById("src").innerHTML = pool.map((p, k) => `<button class="chip" data-k="${k}">${esc(p.t)}</button>`).join("");
        document.querySelectorAll("#tgt .chip").forEach(b => b.onclick = () => { pool.push(picked.splice(+b.dataset.k, 1)[0]); draw(); });
        document.querySelectorAll("#src .chip").forEach(b => b.onclick = () => { picked.push(pool.splice(+b.dataset.k, 1)[0]); draw(); });
        document.getElementById("check").disabled = pool.length > 0;
      };
      render(head("Собери фразу", `<div class="card"><div class="es">${esc(e.tr)}</div></div>
        <div class="chips target" id="tgt"></div><div class="chips" id="src"></div>
        <button class="btn" id="check" disabled>Проверить</button><div id="fb"></div>`));
      draw();
      document.getElementById("check").onclick = () => {
        const good = norm(picked.map(p => p.t).join(" ")) === norm(e.answer);
        document.getElementById("check").style.display = "none";
        document.querySelectorAll(".chip").forEach(c => c.disabled = true);
        result(s, good, e.answer);
      };
    }
  }

  function result(s, good, full, note) {
    S.total += S.retried.has(s) ? 0 : 1;
    if (good && !S.retried.has(s)) S.ok++;
    if (!good && !S.retried.has(s)) { // ошибку повторим в конце урока, до фразы дня
      S.retried.add(s);
      const pi = S.steps.findIndex((x, k) => k > S.i && x.kind === "phrase");
      if (pi >= 0) S.steps.splice(pi, 0, s); else S.steps.push(s);
    }
    haptic(good ? "success" : "error");
    const say = full.replace(/«|»/g, "").split(" — ")[0];
    const canSay = !/[а-яё]/i.test(say);
    document.getElementById("fb").innerHTML = `<div class="feedback ${good ? "ok" : "bad"}">
      <b>${good ? "Верно!" : "Не совсем."}</b> ${note || (good ? "" : `Правильно: <b>${esc(full)}</b>`)}
      ${good && !note ? `<span class="muted">${esc(full)}</span>` : ""}
      ${s.e.explain ? `<p style="margin:8px 0 0">💡 ${esc(s.e.explain)}</p>` : ""}
      ${!good ? `<p class="muted" style="margin:6px 0 0">Это задание вернётся в конце урока.</p>` : ""}</div>
      <div class="row"><button class="btn" id="go" style="flex:1">Дальше</button>${canSay ? sayBtn(say).replace('class="say"', 'class="say" style="background:var(--bg2)"') : ""}</div>`;
    $app.querySelectorAll("#fb [data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
    document.getElementById("go").onclick = next;
    document.getElementById("go").scrollIntoView({ behavior: "smooth", block: "end" });
  }

  /* ───────── конец урока ───────── */
  async function finish() {
    const l = S.lesson;
    const today = day();
    if (l.id) {
      if (!progress.done[l.id]) {
        if (progress.last !== today) progress.streak = progress.last === day(-1) ? progress.streak + 1 : 1;
        progress.last = today;
        progress.done[l.id] = today;
      }
      if (l.words) for (const w of l.words) if (!srs[w[0]]) srs[w[0]] = { b: 1, d: day(1), ru: w[1], w: l.week };
    }
    await saveState();
    haptic("success");
    if (tg) tg.BackButton.offClick(exitLesson);
    const pct = S.total ? Math.round(S.ok / S.total * 100) : 100;
    const msg = pct >= 90 ? "Отлично! 💪" : pct >= 70 ? "Хорошо, так держать!" : "Нормально — ошибки уйдут в повторение.";
    render(`<div class="flash"><div style="font-size:56px">🎉</div><h1>${l.id ? "Урок пройден" : "Повторение готово"}</h1>
      ${S.total ? `<p class="big">${S.ok} из ${S.total}</p><p>${msg}</p>` : ""}
      <p class="muted">Серия: ${progress.streak} дн. 🔥</p></div>
      <button class="btn" id="home">На главную</button>`);
    document.getElementById("home").onclick = () => { S = null; home(); };
  }

  /* ───────── старт ───────── */
  (async () => {
    if (tg) { tg.ready(); tg.expand(); }
    if (!(await allowed())) {
      render(`<div class="flash"><div style="font-size:48px">🔒</div><p>Это личное приложение.</p></div>`);
      return;
    }
    await loadState();
    home();
  })();
})();
