/* ==========================================================================
   SIMULADO DE REVISÃO — Semanas 01 e 02
   - Aba isolada (1ª aba ativa ao abrir revisao/index.html)
   - Todas as 74 questões organizadas na ordem oficial da prova:
     Português -> Raciocínio Lógico -> Conhecimentos Gerais -> Específicos
   - Permite verificar/corrigir TODAS as 74 questões de uma vez OU
     verificar/corrigir cada MATÉRIA SEPARADAMENTE
   - Filtro no topo para VISUALIZAR todas ou cada matéria isoladamente
   - Origem (ACCESS / Adaptada) + assunto + gabarito + comentários ficam
     OCULTOS até a matéria ou o simulado ser corrigido
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
        'Você pode <strong>resolver tudo junto</strong> ou <strong>focar em uma matéria por vez</strong>. O selo de origem (<strong>Original ACCESS</strong> ou <strong>Adaptada</strong>), o gabarito e a resolução comentada ficam ocultos até você clicar em <strong>Verificar</strong> ao final da matéria ou no botão geral no fim da prova.</p>' +
        
        '<!-- Filtro de Visualização por Matéria -->' +
        '<div class="sim-filter-wrap">' +
          '<div class="sim-filter-title">Visualizar Caderno por Matéria:</div>' +
          '<div class="sim-filter-chips">' +
            '<button type="button" class="sim-filter-chip active" data-filter="all" onclick="SIMULADO.filterSubject(\'all\')">' +
              '📋 Todas as Matérias <span class="sim-filter-count">' + total + '</span>' +
            '</button>' +
            (data.materias || []).map(function (m) {
              return '<button type="button" class="sim-filter-chip chip-' + esc(m.key) + '" data-filter="' + esc(m.key) + '" onclick="SIMULADO.filterSubject(\'' + esc(m.key) + '\')">' +
                esc(m.icone) + " " + esc(m.titulo) + ' <span class="sim-filter-count">' + (m.questoes || []).length + '</span>' +
              '</button>';
            }).join("") +
          '</div>' +
        '</div>' +

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
        '<div class="sim-section sec-' + esc(mat.key) + '" id="sim-sec-' + esc(mat.key) + '" data-mat="' + esc(mat.key) + '">' +
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
          '<article class="sim-q" id="' + qid + '" data-qid="' + qid + '" data-gab="' + esc(q.gabarito) + '" data-mat="' + esc(mat.key) + '" data-origem="' + (origemAccess ? "access" : "adapt") + '">' +
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

      /* Rodapé exclusivo da matéria: progresso, botão de verificar a matéria e refazer */
      html.push(
        '<div class="sim-sec-footer" id="sim-sec-footer-' + esc(mat.key) + '">' +
          '<div class="sim-sec-footer-top">' +
            '<div class="sim-sec-footer-info">' +
              '<span class="sim-sec-footer-badge">' + esc(mat.icone) + " " + esc(mat.titulo) + '</span>' +
              '<span class="sim-sec-progress" id="simSecProg-' + esc(mat.key) + '"><strong>0</strong> de ' + qs.length + ' respondidas</span>' +
            '</div>' +
            '<div class="sim-sec-actions">' +
              '<button type="button" class="sim-btn sim-btn-sec-correct" id="simSecCorrectBtn-' + esc(mat.key) + '" onclick="SIMULADO.correctSubject(\'' + esc(mat.key) + '\')">' +
                '✅ Verificar ' + esc(mat.titulo) + ' (' + qs.length + ' questões)' +
              '</button>' +
              '<button type="button" class="sim-btn sim-btn-ghost sim-btn-sm" id="simSecResetBtn-' + esc(mat.key) + '" style="display:none;" onclick="SIMULADO.resetSubject(\'' + esc(mat.key) + '\')">' +
                '↺ Refazer ' + esc(mat.titulo) +
              '</button>' +
            '</div>' +
          '</div>' +
          '<div class="sim-sec-result" id="simSecResult-' + esc(mat.key) + '"></div>' +
        '</div>'
      );

      html.push("</div>"); // fecha sim-section
    });

    html.push(
      '<div class="sim-footer-card" id="simFooter">' +
        '<div class="sim-progress-line">Progresso Geral do Simulado: <strong><span id="simAnswered">0</span> de ' + total + '</strong> questões respondidas</div>' +
        '<div class="sim-progress-bar"><div id="simProgressFill" style="width:0%"></div></div>' +
        '<div class="sim-actions">' +
          '<button type="button" class="sim-btn sim-btn-primary" id="simCorrectBtn" onclick="SIMULADO.correct()">✅ Corrigir Simulado Completo (Todas as ' + total + ' Questões)</button>' +
          '<button type="button" class="sim-btn sim-btn-ghost" onclick="SIMULADO.reset()">↺ Limpar Todas as Respostas e Refazer</button>' +
        "</div>" +

        '<!-- Bloco de Verificação por Matéria no Rodapé Geral -->' +
        '<div class="sim-by-mat-box">' +
          '<div class="sim-by-mat-heading">Ou verifique / revise cada matéria individualmente:</div>' +
          '<div class="sim-by-mat-grid" id="simByMatGrid">' +
            (data.materias || []).map(function (m) {
              return '<button type="button" class="sim-by-mat-btn" id="simByMatBtn-' + esc(m.key) + '" onclick="SIMULADO.onMatBtnClick(\'' + esc(m.key) + '\')">' +
                '<span>' + esc(m.icone) + ' ' + esc(m.titulo) + '</span>' +
                '<span class="sim-by-mat-tag" id="simByMatTag-' + esc(m.key) + '">' + (m.questoes || []).length + ' q.</span>' +
              '</button>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="sim-result" id="simResult"></div>' +
      "</div>"
    );
    return html.join("\n");
  }

  /* ----------------------------- STATE ----------------------------------- */
  var state = {
    answers: {},
    corrected: false,
    correctedMaterias: {},
    activeFilter: "all",
    startedAt: null,
    finishedAt: null
  };

  function load() {
    try {
      var s = JSON.parse(root.localStorage.getItem(STORE_KEY) || "null");
      if (s && typeof s === "object") {
        state = Object.assign(state, s);
        if (!state.correctedMaterias) state.correctedMaterias = {};
        if (!state.activeFilter) state.activeFilter = "all";
      }
    } catch (e) { /* ignora */ }
  }
  function save() {
    try { root.localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignora */ }
  }

  function area() { return root.document && root.document.getElementById("simuladoArea"); }

  function isMatCorrected(matKey) {
    return !!state.corrected || !!(state.correctedMaterias && state.correctedMaterias[matKey]);
  }

  function applyFilter() {
    var el = area();
    if (!el) return;
    var filter = state.activeFilter || "all";
    var secs = el.querySelectorAll(".sim-section");
    for (var i = 0; i < secs.length; i++) {
      var sec = secs[i];
      var mKey = sec.getAttribute("data-mat") || sec.id.replace("sim-sec-", "");
      if (filter === "all" || filter === mKey) {
        sec.style.display = "";
      } else {
        sec.style.display = "none";
      }
    }
    var chips = el.querySelectorAll(".sim-filter-chip");
    for (var j = 0; j < chips.length; j++) {
      var c = chips[j];
      c.classList.toggle("active", c.getAttribute("data-filter") === filter);
    }
  }

  function applyState() {
    var el = area();
    if (!el) return;
    el.classList.toggle("sim-corrected", !!state.corrected);

    var data = root.SIMULADO_DATA || { materias: [] };
    var qs = el.querySelectorAll(".sim-q");
    var totalAnswered = 0;

    // Estatísticas por matéria
    var matStats = {};
    (data.materias || []).forEach(function (m) {
      matStats[m.key] = { total: 0, answered: 0, ok: 0, okAccess: 0, totAccess: 0, okAdapt: 0, totAdapt: 0 };
    });

    for (var i = 0; i < qs.length; i++) {
      var qEl = qs[i];
      var qid = qEl.getAttribute("data-qid");
      var gab = qEl.getAttribute("data-gab");
      var matKey = qEl.getAttribute("data-mat");
      var isAccess = qEl.getAttribute("data-origem") === "access";
      var mCorr = isMatCorrected(matKey);
      var mine = state.answers[qid];

      if (matStats[matKey]) {
        matStats[matKey].total++;
        if (isAccess) matStats[matKey].totAccess++; else matStats[matKey].totAdapt++;
        if (mine) matStats[matKey].answered++;
      }
      if (mine) totalAnswered++;

      // Alternativas
      var btns = qEl.querySelectorAll(".sim-alt");
      for (var j = 0; j < btns.length; j++) {
        var b = btns[j], L = b.getAttribute("data-letter");
        b.classList.toggle("selected", mine === L);
        b.classList.toggle("is-correct", mCorr && L === gab);
        b.classList.toggle("is-wrong", mCorr && mine === L && L !== gab);
        b.disabled = mCorr;
      }

      qEl.classList.remove("q-right", "q-wrong", "q-blank", "q-corrected");
      var verdict = qEl.querySelector(".sim-verdict");

      if (mCorr) {
        qEl.classList.add("q-corrected");
        var isRight = mine === gab;
        var cls = !mine ? "q-blank" : (isRight ? "q-right" : "q-wrong");
        qEl.classList.add(cls);
        if (isRight && matStats[matKey]) {
          matStats[matKey].ok++;
          if (isAccess) matStats[matKey].okAccess++; else matStats[matKey].okAdapt++;
        }
        if (verdict) {
          verdict.textContent = !mine ? "⚪ Em branco" : (isRight ? "✔ Acertou" : "✘ Errou (marcou " + mine + ")");
        }
      } else if (verdict) {
        verdict.textContent = "";
      }
    }

    // Atualiza cada seção de matéria
    (data.materias || []).forEach(function (m) {
      var mKey = m.key;
      var secEl = el.querySelector('#sim-sec-' + mKey);
      var mCorr = isMatCorrected(mKey);
      if (secEl) {
        secEl.classList.toggle("sim-corrected", mCorr);
      }

      var stat = matStats[mKey] || { total: (m.questoes || []).length, answered: 0, ok: 0 };
      var progEl = root.document.getElementById("simSecProg-" + mKey);
      if (progEl) {
        progEl.innerHTML = "<strong>" + stat.answered + "</strong> de " + stat.total + " respondidas";
      }

      var corBtn = root.document.getElementById("simSecCorrectBtn-" + mKey);
      var rstBtn = root.document.getElementById("simSecResetBtn-" + mKey);
      var resEl = root.document.getElementById("simSecResult-" + mKey);

      if (corBtn) {
        if (mCorr) {
          corBtn.textContent = "✔ " + m.titulo + " Verificada (" + stat.ok + "/" + stat.total + ")";
          corBtn.classList.add("sim-btn-done");
          corBtn.disabled = true;
        } else {
          corBtn.textContent = "✅ Verificar " + m.titulo + " (" + stat.total + " questões)";
          corBtn.classList.remove("sim-btn-done");
          corBtn.disabled = false;
        }
      }

      if (rstBtn) {
        rstBtn.style.display = mCorr ? "" : "none";
      }

      if (resEl) {
        if (mCorr) {
          var pct = stat.total ? Math.round(stat.ok / stat.total * 100) : 0;
          resEl.innerHTML =
            '<div class="sim-sec-score-card">' +
              '<div class="sim-sec-score-header">' +
                '<div class="sim-sec-score-badge">' + esc(m.icone) + ' Desempenho em ' + esc(m.titulo) + '</div>' +
                '<div class="sim-sec-score-val">' + stat.ok + ' de ' + stat.total + ' <span>(' + pct + '% de acerto)</span></div>' +
              '</div>' +
              '<div class="sim-sec-score-bar"><div style="width:' + pct + '%"></div></div>' +
              '<div class="sim-sec-score-details">' +
                '<span>🏛️ Originais ACCESS: <strong>' + stat.okAccess + '/' + stat.totAccess + '</strong></span>' +
                '<span>🛠️ Adaptadas pelo Guia: <strong>' + stat.okAdapt + '/' + stat.totAdapt + '</strong></span>' +
              '</div>' +
              '<p class="sim-sec-score-msg">✨ Gabarito e resoluções passo a passo de ' + esc(m.titulo) + ' liberados acima! Confira seus erros e acertos.</p>' +
            '</div>';
        } else {
          resEl.innerHTML = "";
        }
      }

      // Atualiza botão correspondente no rodapé geral
      var matBtn = root.document.getElementById("simByMatBtn-" + mKey);
      var matTag = root.document.getElementById("simByMatTag-" + mKey);
      if (matBtn && matTag) {
        matBtn.classList.toggle("is-corr", mCorr);
        if (mCorr) {
          matTag.textContent = stat.ok + "/" + stat.total + " ✔";
        } else {
          matTag.textContent = stat.answered + "/" + stat.total;
        }
      }
    });

    // Progresso Geral
    var total = qs.length;
    var a = root.document.getElementById("simAnswered");
    if (a) a.textContent = totalAnswered;
    var f = root.document.getElementById("simProgressFill");
    if (f) f.style.width = (total ? Math.round(totalAnswered / total * 100) : 0) + "%";
    var btn = root.document.getElementById("simCorrectBtn");
    if (btn) btn.style.display = state.corrected ? "none" : "";

    applyFilter();
    renderResult();
  }

  function renderResult() {
    var box = root.document.getElementById("simResult");
    if (!box) return;

    var data = root.SIMULADO_DATA || { materias: [] };
    var anyCorr = state.corrected || Object.keys(state.correctedMaterias || {}).some(function (k) {
      return state.correctedMaterias[k];
    });

    if (!anyCorr) {
      box.innerHTML = "";
      return;
    }

    var el = area();
    var rows = [], tot = 0, totOk = 0;
    (data.materias || []).forEach(function (m) {
      var qEls = el.querySelectorAll('.sim-q[data-mat="' + m.key + '"]');
      var ok = 0;
      for (var i = 0; i < qEls.length; i++) {
        if (qEls[i].classList.contains("q-right")) ok++;
      }
      tot += qEls.length;
      totOk += ok;
      var pct = qEls.length ? Math.round(ok / qEls.length * 100) : 0;
      var isCorr = isMatCorrected(m.key);
      rows.push(
        '<div class="sim-score-row">' +
          '<span>' + esc(m.icone) + " " + esc(m.titulo) + " " + (isCorr ? '<em style="font-size:0.75rem;color:#10b981;">(verificada)</em>' : '<em style="font-size:0.75rem;color:#f59e0b;">(pendente)</em>') + '</span>' +
          '<div class="sim-score-bar"><div style="width:' + (isCorr ? pct : 0) + '%"></div></div>' +
          '<strong>' + (isCorr ? (ok + "/" + qEls.length + " (" + pct + "%)") : "—") + '</strong>' +
        '</div>'
      );
    });

    var pctTot = tot ? Math.round(totOk / tot * 100) : 0;
    var tempo = (state.startedAt && state.finishedAt) ? fmtTime(state.finishedAt - state.startedAt) : null;
    box.innerHTML =
      '<div class="sim-score-total">Aproveitamento Geral: ' + totOk + " de " + tot + " <span>(" + pctTot + "% de acertos)</span></div>" +
      (tempo ? '<div class="sim-score-time">⏱ Tempo de resolução: ' + tempo + "</div>" : "") +
      '<div class="sim-score-grid">' + rows.join("") + "</div>" +
      '<p class="sim-score-tip">✨ <strong>Correções em tempo real liberadas!</strong> Role pelas questões de cada matéria verificada para conferir a origem oficial/adaptada, o tópico do edital e o comentário passo a passo.</p>';
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
      var el = area();
      if (!el) return;
      var qEl = el.querySelector('#' + qid);
      var matKey = qEl ? qEl.getAttribute("data-mat") : null;
      if (matKey && isMatCorrected(matKey)) return;
      if (state.corrected) return;

      if (!state.startedAt) state.startedAt = Date.now();
      if (!timerHandle) timerHandle = root.setInterval(tick, 1000);
      state.answers[qid] = state.answers[qid] === L ? undefined : L;
      if (!state.answers[qid]) delete state.answers[qid];
      save(); applyState();
    },

    /* Filtra a visualização das questões por matéria ou exibe todas */
    filterSubject: function (key) {
      state.activeFilter = key || "all";
      save();
      applyFilter();
      if (key && key !== "all") {
        var t = root.document.getElementById("sim-sec-" + key);
        if (t && t.scrollIntoView) {
          t.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return false;
    },

    /* Ação ao clicar no botão de matéria no rodapé geral */
    onMatBtnClick: function (matKey) {
      if (isMatCorrected(matKey)) {
        // Se já está corrigida, rola até ela para conferir
        API.goTo("sim-sec-" + matKey);
      } else {
        // Se ainda não está corrigida, pergunta se quer verificar
        API.correctSubject(matKey);
      }
    },

    /* Corrige apenas uma matéria específica e libera seus gabaritos */
    correctSubject: function (matKey) {
      var data = root.SIMULADO_DATA || { materias: [] };
      var mat = (data.materias || []).filter(function (m) { return m.key === matKey; })[0];
      var qs = (mat && mat.questoes) || [];
      var el = area();
      var qEls = el.querySelectorAll('.sim-q[data-mat="' + matKey + '"]');
      var answered = 0;
      for (var i = 0; i < qEls.length; i++) {
        var qid = qEls[i].getAttribute("data-qid");
        if (state.answers[qid]) answered++;
      }

      if (answered < qEls.length && typeof root.confirm === "function") {
        var matTitle = mat ? mat.titulo : matKey;
        if (!root.confirm("Você deixou " + (qEls.length - answered) + " questão(ões) de " + matTitle + " em branco.\nDeseja verificar esta matéria mesmo assim?")) {
          return;
        }
      }

      if (!state.startedAt) state.startedAt = Date.now();
      if (!state.correctedMaterias) state.correctedMaterias = {};
      state.correctedMaterias[matKey] = true;

      // Verifica se todas as matérias agora foram corrigidas
      var allDone = true;
      (data.materias || []).forEach(function (m) {
        if (!state.correctedMaterias[m.key]) allDone = false;
      });
      if (allDone) {
        state.corrected = true;
        state.finishedAt = Date.now();
      }

      save(); applyState(); tick();

      var foot = root.document.getElementById("sim-sec-footer-" + matKey);
      if (foot && foot.scrollIntoView) {
        foot.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (typeof root.confetti === "function") {
        var ok = 0;
        for (var k = 0; k < qEls.length; k++) {
          if (qEls[k].classList.contains("q-right")) ok++;
        }
        if (qEls.length && ok / qEls.length >= 0.7) {
          root.confetti({ particleCount: 75, spread: 65, origin: { y: 0.65 } });
        }
      }
    },

    /* Limpa e permite refazer apenas as questões de uma matéria */
    resetSubject: function (matKey) {
      var data = root.SIMULADO_DATA || { materias: [] };
      var mat = (data.materias || []).filter(function (m) { return m.key === matKey; })[0];
      var matTitle = mat ? mat.titulo : matKey;

      if (typeof root.confirm === "function" && !root.confirm("Limpar as respostas e refazer as questões de " + matTitle + "?")) return;

      var el = area();
      var qEls = el.querySelectorAll('.sim-q[data-mat="' + matKey + '"]');
      for (var i = 0; i < qEls.length; i++) {
        var qid = qEls[i].getAttribute("data-qid");
        delete state.answers[qid];
      }

      if (state.correctedMaterias) delete state.correctedMaterias[matKey];
      state.corrected = false; // Simulado não é mais 100% corrigido
      save(); applyState(); tick();

      var sec = root.document.getElementById("sim-sec-" + matKey);
      if (sec && sec.scrollIntoView) {
        sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },

    /* Corrige o simulado inteiro (todas as matérias) */
    correct: function () {
      var total = area().querySelectorAll(".sim-q").length;
      var answered = Object.keys(state.answers).length;
      if (answered < total && typeof root.confirm === "function") {
        if (!root.confirm("Você deixou " + (total - answered) + " questão(ões) em branco no total. Deseja corrigir o simulado completo mesmo assim?")) return;
      }
      state.corrected = true;
      state.finishedAt = Date.now();
      if (!state.startedAt) state.startedAt = state.finishedAt;

      var data = root.SIMULADO_DATA || { materias: [] };
      if (!state.correctedMaterias) state.correctedMaterias = {};
      (data.materias || []).forEach(function (m) {
        state.correctedMaterias[m.key] = true;
      });

      save(); applyState(); tick();
      var r = root.document.getElementById("simFooter");
      if (r && r.scrollIntoView) r.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof root.confetti === "function") {
        var ok = area().querySelectorAll(".q-right").length;
        if (ok / total >= 0.7) root.confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
      }
    },

    /* Limpa todas as respostas do simulado completo */
    reset: function () {
      if (typeof root.confirm === "function" && !root.confirm("Apagar todas as respostas e recomeçar o simulado do zero?")) return;
      state = { answers: {}, corrected: false, correctedMaterias: {}, activeFilter: "all", startedAt: null, finishedAt: null };
      save(); applyState(); tick();
      if (typeof root.scrollTo === "function") root.scrollTo({ top: 0, behavior: "smooth" });
    },

    goTo: function (id) {
      // Se a matéria estiver filtrada/oculta, reabre todas ou muda o filtro
      if (id.indexOf("sim-sec-") === 0) {
        var targetKey = id.replace("sim-sec-", "");
        if (state.activeFilter !== "all" && state.activeFilter !== targetKey) {
          API.filterSubject("all");
        }
      }
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
