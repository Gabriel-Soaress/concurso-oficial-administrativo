/* ==========================================================================
   SIMULADO DE REVISÃO — Semanas 01 e 02
   - Aba isolada (1ª aba ativa ao abrir revisao/index.html)
   - Todas as 74 questões juntas na mesma aba, na ordem oficial da prova:
     Português -> Raciocínio Lógico -> Conhecimentos Gerais -> Específicos
   - Ao clicar em uma das 4 abas de resumo, o simulado é ocultado e só o
     resumo aparece; ao clicar na aba Simulado, os resumos são ocultados
   - Origem (ACCESS / Adaptada · Guia ACCESS) + assunto + gabarito ficam
     ESCONDIDOS até o aluno clicar em "Corrigir simulado"
   ========================================================================== */
(function (root) {
  "use strict";

  var STORE_KEY = "revisao_simulado_v1";
  var LETTERS = ["A", "B", "C", "D", "E"];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function md(text, ctx) {
    var t = String(text == null ? "" : text);
    if (typeof root.renderRichMarkdown === "function") {
      try { return root.renderRichMarkdown(t, ctx || "sim"); } catch (e) { /* fallback */ }
    }
    return t.split(/\n{2,}/).map(function (p) {
      return "<p>" + esc(p).replace(/\n/g, "<br/>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>") + "</p>";
    }).join("");
  }

  function mdInline(text, ctx) {
    var h = md(text, ctx).trim();
    var m = h.match(/^<p[^>]*>([\s\S]*)<\/p>$/);
    if (m && m[1].indexOf("<p") === -1) return m[1];
    return h;
  }

  function flatQuestions(data) {
    var list = [];
    (data.materias || []).forEach(function (mat) {
      (mat.questoes || []).forEach(function (q) { list.push({ mat: mat, q: q }); });
    });
    return list;
  }

  /* ----------------------------- RENDER ---------------------------------- */
  function buildSimuladoHtml(data) {
    var html = [];
    var num = 0;
    var total = flatQuestions(data).length;

    html.push(
      '<div class="sim-intro">' +
        '<div class="sim-intro-top">' +
          '<div><div class="sim-kicker">Simulado Prático de Revisão · Padrão Instituto ACCESS</div>' +
          '<h2 class="sim-title">Caderno de Prova: Semanas 01 e 02 (' + total + ' questões)</h2></div>' +
          '<div class="sim-timer" id="simTimer" title="Tempo decorrido desde a 1ª resposta">⏱ 00:00</div>' +
        '</div>' +
        '<p class="sim-intro-text">As questões abaixo seguem a ordem oficial das provas do Instituto ACCESS: <strong>Língua Portuguesa → Raciocínio Lógico e Matemático → Conhecimentos Gerais → Conhecimentos Específicos</strong>. ' +
        'A tag indicando se a questão é <strong>original da ACCESS</strong> ou <strong>adaptada pelo nosso Guia</strong>, bem como o gabarito e a resolução comentada, <strong>ficam ocultos</strong> e só são revelados após clicar em <strong>Corrigir simulado</strong> no final da prova.</p>' +
        '<div class="sim-index">' +
          (data.materias || []).map(function (m) {
            return '<a href="#sim-sec-' + esc(m.key) + '" class="sim-index-chip chip-' + esc(m.key) + '" onclick="return SIMULADO.goTo(\'sim-sec-' + esc(m.key) + '\')">' +
              esc(m.icone) + " " + esc(m.titulo) + " <span>" + (m.questoes || []).length + " questões</span></a>";
          }).join("") +
        "</div>" +
      "</div>"
    );

    (data.materias || []).forEach(function (mat) {
      var qs = mat.questoes || [];
      if (!qs.length) return;
      var first = num + 1, last = num + qs.length;
      var textos = {};
      (mat.textos || []).forEach(function (t) { textos[t.id] = t; });

      var textRange = {};
      qs.forEach(function (q, i) {
        if (!q.texto_id) return;
        var n = first + i;
        if (!textRange[q.texto_id]) textRange[q.texto_id] = { a: n, b: n };
        textRange[q.texto_id].b = n;
      });

      html.push(
        '<div class="sim-section sec-' + esc(mat.key) + '" id="sim-sec-' + esc(mat.key) + '">' +
          '<header class="sim-section-head">' +
            '<span class="sim-section-icon">' + esc(mat.icone) + "</span>" +
            '<div><h3 class="sim-section-title">' + esc(mat.titulo) + "</h3>" +
            '<div class="sim-section-range">Questões ' + pad(first) + " a " + pad(last) + " (" + qs.length + " questões)</div></div>" +
          "</header>"
      );

      var printedText = {};
      qs.forEach(function (q) {
        num++;
        if (q.texto_id && textos[q.texto_id] && !printedText[q.texto_id]) {
          printedText[q.texto_id] = true;
          var t = textos[q.texto_id], r = textRange[q.texto_id];
          html.push(
            '<div class="sim-text-card" id="sim-txt-' + esc(t.id) + '">' +
              '<div class="sim-text-label">📖 Leia o texto a seguir para responder ' + (r.b !== r.a ? "às questões " + pad(r.a) + " a " + pad(r.b) : "à questão " + pad(r.a)) + "</div>" +
              (t.titulo ? '<h4 class="sim-text-title">' + esc(t.titulo) + "</h4>" : "") +
              '<div class="sim-text-body">' + md(t.conteudo, "simtxt_" + t.id) + "</div>" +
              (t.credito ? '<div class="sim-text-credit">' + esc(t.credito) + "</div>" : "") +
            "</div>"
          );
        }

        var qid = "q" + num;
        var origemAccess = String(q.origem || "").toUpperCase() === "ACCESS";
        var alts = q.alternativas || {};
        var keys = LETTERS.filter(function (L) { return alts[L] != null && String(alts[L]).trim() !== ""; });
        var rInfo = q.texto_id && textRange[q.texto_id] ? textRange[q.texto_id] : null;

        html.push(
          '<article class="sim-q" id="' + qid + '" data-qid="' + qid + '" data-gab="' + esc(q.gabarito) + '" data-mat="' + esc(mat.key) + '">' +
            '<div class="sim-q-head">' +
              '<span class="sim-q-num">Questão ' + pad(num) + "</span>" +
              '<span class="sim-reveal sim-origin ' + (origemAccess ? "origin-access" : "origin-adapt") + '">' +
                (origemAccess ? "🏛️ Original ACCESS" : "🛠️ Adaptada · Guia ACCESS") + "</span>" +
              (q.assunto ? '<span class="sim-reveal sim-topic">' + esc(q.assunto) + "</span>" : "") +
              '<span class="sim-reveal sim-verdict"></span>' +
            "</div>" +
            (rInfo ? '<div class="sim-q-textref">Refere-se ao texto base (Questões ' + pad(rInfo.a) + ' a ' + pad(rInfo.b) + ') · <a href="#sim-txt-' + esc(q.texto_id) + '" onclick="return SIMULADO.goTo(\'sim-txt-' + esc(q.texto_id) + '\')">↑ Ver texto</a></div>' : "") +
            '<div class="sim-q-body">' + md(q.enunciado, "simq_" + qid) + "</div>" +
            (q.imagem ? '<figure class="sim-q-img"><img src="' + esc(q.imagem) + '" alt="Figura da questão ' + num + '" loading="lazy"/></figure>' : "") +
            '<div class="sim-alts" role="radiogroup">' +
              keys.map(function (L) {
                return '<button type="button" class="sim-alt" data-letter="' + L + '" onclick="SIMULADO.pick(\'' + qid + "','" + L + '\')">' +
                  '<span class="sim-alt-letter">' + L + "</span>" +
                  '<span class="sim-alt-text">' + mdInline(alts[L], "sima_" + qid + L) + "</span>" +
                "</button>";
              }).join("") +
            "</div>" +
            '<div class="sim-reveal sim-feedback">' +
              '<div class="sim-feedback-gab">Gabarito Oficial: <strong>Alternativa ' + esc(q.gabarito) + "</strong> · <span class=\"sim-feedback-origin\">" + (origemAccess ? "Questão Oficial Instituto ACCESS" : "Questão Adaptada pelo Guia ACCESS") + "</span></div>" +
              (q.comentario ? '<div class="sim-feedback-text">' + md(q.comentario, "simc_" + qid) + "</div>" : "") +
            "</div>" +
          "</article>"
        );
      });
      html.push("</div>");
    });

    html.push(
      '<div class="sim-footer-card" id="simFooter">' +
        '<div class="sim-progress-line">Progresso do Simulado: <strong><span id="simAnswered">0</span> de ' + total + '</strong> questões respondidas</div>' +
        '<div class="sim-progress-bar"><div id="simProgressFill" style="width:0%"></div></div>' +
        '<div class="sim-actions">' +
          '<button type="button" class="sim-btn sim-btn-primary" id="simCorrectBtn" onclick="SIMULADO.correct()">✅ Corrigir Simulado e Revelar Origem/Gabarito</button>' +
          '<button type="button" class="sim-btn sim-btn-ghost" onclick="SIMULADO.reset()">↺ Limpar Respostas e Refazer</button>' +
        "</div>" +
        '<div class="sim-result" id="simResult"></div>' +
      "</div>"
    );
    return html.join("\n");
  }

  /* ----------------------------- STATE ----------------------------------- */
  var state = { answers: {}, corrected: false, startedAt: null, finishedAt: null };

  function load() {
    try {
      var s = JSON.parse(root.localStorage.getItem(STORE_KEY) || "null");
      if (s && typeof s === "object") state = Object.assign(state, s);
    } catch (e) { /* ignora */ }
  }
  function save() {
    try { root.localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignora */ }
  }

  function area() { return root.document && root.document.getElementById("simuladoArea"); }

  function applyState() {
    var el = area();
    if (!el) return;
    el.classList.toggle("sim-corrected", !!state.corrected);
    var qs = el.querySelectorAll(".sim-q");
    var answered = 0;
    for (var i = 0; i < qs.length; i++) {
      var qEl = qs[i], qid = qEl.getAttribute("data-qid"), gab = qEl.getAttribute("data-gab");
      var mine = state.answers[qid];
      if (mine) answered++;
      var btns = qEl.querySelectorAll(".sim-alt");
      for (var j = 0; j < btns.length; j++) {
        var b = btns[j], L = b.getAttribute("data-letter");
        b.classList.toggle("selected", mine === L);
        b.classList.toggle("is-correct", !!state.corrected && L === gab);
        b.classList.toggle("is-wrong", !!state.corrected && mine === L && L !== gab);
        b.disabled = !!state.corrected;
      }
      qEl.classList.remove("q-right", "q-wrong", "q-blank");
      var verdict = qEl.querySelector(".sim-verdict");
      if (state.corrected) {
        var cls = !mine ? "q-blank" : (mine === gab ? "q-right" : "q-wrong");
        qEl.classList.add(cls);
        if (verdict) verdict.textContent = !mine ? "⚪ Em branco" : (mine === gab ? "✔ Acertou" : "✘ Errou (marcou " + mine + ")");
      } else if (verdict) {
        verdict.textContent = "";
      }
    }
    var total = qs.length;
    var a = root.document.getElementById("simAnswered");
    if (a) a.textContent = answered;
    var f = root.document.getElementById("simProgressFill");
    if (f) f.style.width = (total ? Math.round(answered / total * 100) : 0) + "%";
    var btn = root.document.getElementById("simCorrectBtn");
    if (btn) btn.style.display = state.corrected ? "none" : "";
    renderResult();
  }

  function renderResult() {
    var box = root.document.getElementById("simResult");
    if (!box) return;
    if (!state.corrected) { box.innerHTML = ""; return; }
    var data = root.SIMULADO_DATA || { materias: [] };
    var el = area();
    var rows = [], tot = 0, totOk = 0;
    (data.materias || []).forEach(function (m) {
      var qEls = el.querySelectorAll('.sim-q[data-mat="' + m.key + '"]');
      var ok = 0;
      for (var i = 0; i < qEls.length; i++) if (qEls[i].classList.contains("q-right")) ok++;
      tot += qEls.length; totOk += ok;
      var pct = qEls.length ? Math.round(ok / qEls.length * 100) : 0;
      rows.push('<div class="sim-score-row"><span>' + esc(m.icone) + " " + esc(m.titulo) + '</span><div class="sim-score-bar"><div style="width:' + pct + '%"></div></div><strong>' + ok + "/" + qEls.length + " (" + pct + "%)</strong></div>");
    });
    var pctTot = tot ? Math.round(totOk / tot * 100) : 0;
    var tempo = (state.startedAt && state.finishedAt) ? fmtTime(state.finishedAt - state.startedAt) : null;
    box.innerHTML =
      '<div class="sim-score-total">Nota Final: ' + totOk + " de " + tot + " <span>(" + pctTot + "% de aproveitamento)</span></div>" +
      (tempo ? '<div class="sim-score-time">⏱ Tempo de resolução: ' + tempo + "</div>" : "") +
      '<div class="sim-score-grid">' + rows.join("") + "</div>" +
      '<p class="sim-score-tip">✨ <strong>Correção liberada!</strong> Role as questões acima para conferir em cada uma o selo de origem (<strong>🏛️ Original ACCESS</strong> ou <strong>🛠️ Adaptada · Guia ACCESS</strong>), o assunto cobrado e o comentário passo a passo.</p>';
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
    return (h ? h + ":" + pad(m) : pad(m)) + ":" + pad(ss);
  }
  var timerHandle = null;
  function tick() {
    var t = root.document.getElementById("simTimer");
    if (!t) return;
    if (!state.startedAt) { t.textContent = "⏱ 00:00"; return; }
    var end = state.finishedAt || Date.now();
    t.textContent = "⏱ " + fmtTime(end - state.startedAt);
  }

  /* ----------------------------- API ------------------------------------- */
  var rendered = false;
  var API = {
    build: buildSimuladoHtml,
    render: function (force) {
      var el = area();
      if (!el || !root.SIMULADO_DATA) return;
      if (rendered && !force && el.querySelectorAll(".sim-q").length > 0) {
        applyState();
        return;
      }
      try {
        el.innerHTML = buildSimuladoHtml(root.SIMULADO_DATA);
        rendered = true;
      } catch (e) {
        if (root.console) console.error("Falha ao renderizar simulado, mantendo versão pré-renderizada:", e);
      }
      applyState();
    },
    pick: function (qid, L) {
      if (state.corrected) return;
      if (!state.startedAt) state.startedAt = Date.now();
      if (!timerHandle) timerHandle = root.setInterval(tick, 1000);
      state.answers[qid] = state.answers[qid] === L ? undefined : L;
      if (!state.answers[qid]) delete state.answers[qid];
      save(); applyState();
    },
    correct: function () {
      var total = area().querySelectorAll(".sim-q").length;
      var answered = Object.keys(state.answers).length;
      if (answered < total && typeof root.confirm === "function") {
        if (!root.confirm("Você deixou " + (total - answered) + " questão(ões) em branco. Deseja corrigir o simulado mesmo assim?")) return;
      }
      state.corrected = true;
      state.finishedAt = Date.now();
      if (!state.startedAt) state.startedAt = state.finishedAt;
      save(); applyState(); tick();
      var r = root.document.getElementById("simFooter");
      if (r && r.scrollIntoView) r.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof root.confetti === "function") {
        var ok = area().querySelectorAll(".q-right").length;
        if (ok / total >= 0.7) root.confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
      }
    },
    reset: function () {
      if (typeof root.confirm === "function" && !root.confirm("Apagar todas as respostas e recomeçar o simulado do zero?")) return;
      state = { answers: {}, corrected: false, startedAt: null, finishedAt: null };
      save(); applyState(); tick();
      if (typeof root.scrollTo === "function") root.scrollTo({ top: 0, behavior: "smooth" });
    },
    goTo: function (id) {
      var t = root.document.getElementById(id);
      if (t && t.scrollIntoView) t.scrollIntoView({ behavior: "smooth", block: "start" });
      return false;
    },
    /* Mostra SOMENTE a aba isolada do Simulado e esconde os resumos */
    show: function () {
      var d = root.document;
      d.querySelectorAll(".revisao-nav-btn").forEach(function (b) {
        b.classList.remove("active");
        b.classList.add("text-sec");
      });
      var tab = d.getElementById("tab-simulado");
      if (tab) {
        tab.classList.add("active");
        tab.classList.remove("text-sec");
      }
      var banner = d.getElementById("activeSubjectBanner");
      var content = d.getElementById("contentArea");
      if (banner) banner.style.display = "none";
      if (content) content.style.display = "none";

      var el = area();
      if (el) el.style.display = "";
      API.render(false);
      if (!timerHandle && state.startedAt && !state.finishedAt) {
        timerHandle = root.setInterval(tick, 1000);
      }
      tick();
      if (typeof root.scrollTo === "function") root.scrollTo({ top: 0, behavior: "smooth" });
    },
    /* Esconde a aba do Simulado e mostra o resumo selecionado */
    hide: function () {
      var d = root.document;
      var el = area();
      if (el) el.style.display = "none";
      var banner = d.getElementById("activeSubjectBanner");
      var content = d.getElementById("contentArea");
      if (banner) banner.style.display = "";
      if (content) content.style.display = "";
      var tab = d.getElementById("tab-simulado");
      if (tab) {
        tab.classList.remove("active");
        tab.classList.add("text-sec");
      }
    },
    _state: function () { return state; }
  };

  root.SIMULADO = API;

  /* Inicialização automática: abre direto na aba Simulado */
  if (root.document && root.addEventListener) {
    load();
    root.addEventListener("DOMContentLoaded", function () {
      if (typeof root.switchSubject === "function" && !root.switchSubject.__simWrapped) {
        var orig = root.switchSubject;
        var wrapped = function (k) {
          API.hide();
          return orig(k);
        };
        wrapped.__simWrapped = true;
        root.switchSubject = wrapped;
      }
      API.show();
    });
  }
})(typeof window !== "undefined" ? window : globalThis);
