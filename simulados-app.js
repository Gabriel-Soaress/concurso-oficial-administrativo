/* ==========================================================================
   SIMULADOS APP — Controlador do Módulo de Simulados do Portal
   - Gerencia o Hub de Simulados (cards com status e progresso)
   - Execução de Simulado Mobile-First com abas de Resumos Teóricos no topo
   - Cronômetro Manual com Play / Pause / Zerar
   - Eliminação / Corte de Alternativas com um toque
   - Correção por Matéria ou Simulado Completo
   ========================================================================== */
(function (root) {
  "use strict";

  var STORE_PREFIX = "concurso_simulado_state_";
  var LETTERS = ["A", "B", "C", "D", "E"];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function fmtTime(sec) {
    var s = Math.max(0, Math.floor(sec || 0));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var ss = s % 60;
    if (h > 0) {
      return pad(h) + ":" + pad(m) + ":" + pad(ss);
    }
    return pad(m) + ":" + pad(ss);
  }

  function getShortMatName(key, defaultTitle) {
    if (key === "portugues") return "Português";
    if (key === "matematica") return "Mat e Lógica";
    if (key === "gerais") return "Gerais";
    if (key === "especificos") return "Específicos";
    return defaultTitle || key;
  }

  function md(text, ctx) {
    var t = String(text == null ? "" : text);
    if (typeof root.renderRichMarkdown === "function") {
      try { return root.renderRichMarkdown(t, ctx || "sim"); } catch (e) { /* fallback */ }
    }
    return t.split(/\n{2,}/).map(function (p) {
      return "<p class=\"my-2\">" + esc(p).replace(/\n/g, "<br/>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>") + "</p>";
    }).join("");
  }

  function mdInline(text, ctx) {
    var h = md(text, ctx).trim();
    var m = h.match(/^<p[^>]*>([\s\S]*)<\/p>$/);
    if (m && m[1].indexOf("<p") === -1) return m[1];
    return h;
  }

  /* ----------------------------- ESTADO ----------------------------------- */
  var appState = {
    activeSimId: null,
    activeTab: "questoes", // "questoes" ou "resumo_[matKey]"
    activeFilter: "all",
    timerInterval: null
  };

  function getSimState(simId) {
    if (!simId) return null;
    try {
      var raw = root.localStorage.getItem(STORE_PREFIX + simId);
      if (raw) {
        var obj = JSON.parse(raw);
        if (obj && typeof obj === "object") {
          if (!obj.answers) obj.answers = {};
          if (!obj.eliminated) obj.eliminated = {};
          if (!obj.correctedMaterias) obj.correctedMaterias = {};
          if (typeof obj.elapsedSeconds !== "number") obj.elapsedSeconds = 0;
          return obj;
        }
      }
    } catch (e) { /* fallback */ }

    // Fallback retrocompatível: importa de revisao_simulado_v1 se for sem-01-02
    if (simId === "simulado-sem-01-02") {
      try {
        var old = root.localStorage.getItem("revisao_simulado_v1");
        if (old) {
          var o = JSON.parse(old);
          if (o && typeof o === "object" && o.answers) {
            return {
              answers: o.answers || {},
              eliminated: {},
              correctedMaterias: o.correctedMaterias || {},
              corrected: !!o.corrected,
              elapsedSeconds: 0,
              startedAt: o.startedAt || null,
              finishedAt: o.finishedAt || null
            };
          }
        }
      } catch (e) {}
    }

    return {
      answers: {},
      eliminated: {},
      correctedMaterias: {},
      corrected: false,
      elapsedSeconds: 0,
      startedAt: null,
      finishedAt: null
    };
  }

  function saveSimState(simId, state) {
    if (!simId || !state) return;
    try {
      root.localStorage.setItem(STORE_PREFIX + simId, JSON.stringify(state));
    } catch (e) { /* ignora */ }
  }

  function getSimEntry(simId) {
    var reg = root.SIMULADOS_REGISTRY || [];
    for (var i = 0; i < reg.length; i++) {
      if (reg[i].id === simId) return reg[i];
    }
    return null;
  }

  /* ----------------------------- HUB VIEW --------------------------------- */
  function renderHub() {
    var hubEl = root.document.getElementById("simuladosHubList");
    if (!hubEl) return;

    var reg = root.SIMULADOS_REGISTRY || [];
    if (!reg.length) {
      hubEl.innerHTML = '<div class="surface p-8 rounded-2xl text-center text-sec">Nenhum simulado cadastrado no momento.</div>';
      return;
    }

    var html = [];
    reg.forEach(function (sim) {
      var state = getSimState(sim.id);
      var totalQ = sim.totalQuestoes || 0;
      var answeredCount = Object.keys(state.answers || {}).length;
      var isDone = !!state.corrected;
      var hasStarted = answeredCount > 0 || state.elapsedSeconds > 0;

      // Cálculo de acertos se houver correções
      var data = sim.getData ? sim.getData() : null;
      var correctCount = 0;
      var correctedTotal = 0;
      if (data && data.materias) {
        data.materias.forEach(function (m) {
          var isMatCorr = state.corrected || (state.correctedMaterias && state.correctedMaterias[m.key]);
          if (isMatCorr) {
            (m.questoes || []).forEach(function (q, idx) {
              correctedTotal++;
              var qid = q.qid || ("q" + (idx + 1));
              if (state.answers[qid] && state.answers[qid] === q.gabarito) {
                correctCount++;
              }
            });
          }
        });
      }

      var pctAns = totalQ ? Math.round((answeredCount / totalQ) * 100) : 0;
      var pctCorrect = correctedTotal ? Math.round((correctCount / correctedTotal) * 100) : 0;

      var statusBadge = '';
      var btnLabel = 'Iniciar Simulado';
      var btnClass = 'sim-btn-primary';

      if (isDone) {
        statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">✔ Concluído (' + correctCount + '/' + totalQ + ' • ' + pctCorrect + '%)</span>';
        btnLabel = 'Revisar / Continuar Prova';
      } else if (hasStarted) {
        statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-black bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">⏳ Em Andamento (' + answeredCount + '/' + totalQ + ')</span>';
        btnLabel = 'Continuar Simulado (' + pctAns + '%)';
      } else {
        statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25">⭐ Novo</span>';
        btnLabel = 'Iniciar Simulado';
      }

      var tempoFmt = sim.tempoSugeridoMinutos ? Math.floor(sim.tempoSugeridoMinutos / 60) + "h" + (sim.tempoSugeridoMinutos % 60 ? (sim.tempoSugeridoMinutos % 60) + "m" : "00m") : "3h30";

      html.push(
        '<div class="surface-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between gap-5 border border-tech transition-all hover:shadow-lg">' +
          '<div class="space-y-4">' +
            '<div class="flex items-start justify-between gap-3 flex-wrap">' +
              '<div class="flex items-center gap-2">' +
                '<span class="text-2xl sm:text-3xl">' + esc(sim.icone || "🎯") + '</span>' +
                '<div>' +
                  '<div class="text-[11px] font-mono uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">' + esc(sim.semanas) + ' • ' + esc(sim.badge) + '</div>' +
                  '<h3 class="text-lg sm:text-xl font-black text-pri leading-snug">' + esc(sim.titulo) + '</h3>' +
                '</div>' +
              '</div>' +
              statusBadge +
            '</div>' +

            '<p class="text-xs sm:text-sm text-sec leading-relaxed">' + esc(sim.descricao) + '</p>' +

            '<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">' +
              (sim.materias || []).map(function (m) {
                return '<div class="p-2.5 rounded-xl surface-muted text-center border border-tech">' +
                  '<div class="text-base sm:text-lg mb-0.5">' + esc(m.icone) + '</div>' +
                  '<div class="text-[11px] font-bold text-pri truncate">' + esc(m.titulo) + '</div>' +
                  '<div class="text-[10px] text-mut font-semibold">' + m.count + ' questões</div>' +
                '</div>';
              }).join("") +
            '</div>' +

            '<div class="space-y-1.5 pt-2">' +
              '<div class="flex items-center justify-between text-xs text-sec font-semibold">' +
                '<span>Progresso: ' + answeredCount + ' de ' + totalQ + ' respondidas</span>' +
                '<span>⏱ Sugerido: ' + tempoFmt + (state.elapsedSeconds ? ' (Gasto: ' + fmtTime(state.elapsedSeconds) + ')' : '') + '</span>' +
              '</div>' +
              '<div class="w-full bg-slate-200 dark:bg-slate-750 rounded-full h-2 overflow-hidden">' +
                '<div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-300" style="width:' + pctAns + '%"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="pt-3 border-t border-tech flex items-center justify-between gap-3 flex-wrap">' +
            '<button type="button" onclick="SIMULADOS_APP.openSimulado(\'' + esc(sim.id) + '\')" class="w-full sm:w-auto flex-1 sim-btn ' + btnClass + ' flex items-center justify-center gap-2">' +
              '<span>' + esc(btnLabel) + '</span>' +
              '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>' +
            '</button>' +
            (hasStarted ? '<button type="button" onclick="SIMULADOS_APP.resetSimuladoPrompt(\'' + esc(sim.id) + '\')" class="sim-btn sim-btn-ghost text-xs py-2 px-3 hover:text-rose-500" title="Zerar e recomeçar simulado">↺ Zerar</button>' : '') +
          '</div>' +
        '</div>'
      );
    });

    hubEl.innerHTML = html.join("");
  }

  /* ----------------------------- CRONÔMETRO ------------------------------- */
  function startTimer() {
    if (appState.timerInterval) return;
    var simId = appState.activeSimId;
    if (!simId) return;
    var state = getSimState(simId);
    if (!state.startedAt) {
      state.startedAt = Date.now();
      saveSimState(simId, state);
    }
    appState.timerInterval = root.setInterval(function () {
      var curState = getSimState(simId);
      curState.elapsedSeconds = (curState.elapsedSeconds || 0) + 1;
      saveSimState(simId, curState);
      updateTimerDisplay(curState.elapsedSeconds, true);
    }, 1000);
    updateTimerControls(true);
  }

  function pauseTimer() {
    if (appState.timerInterval) {
      root.clearInterval(appState.timerInterval);
      appState.timerInterval = null;
    }
    updateTimerControls(false);
  }

  function resetTimer() {
    var simId = appState.activeSimId;
    if (!simId) return;
    if (root.confirm && !root.confirm("Zerar a contagem do cronômetro?")) return;
    pauseTimer();
    var state = getSimState(simId);
    state.elapsedSeconds = 0;
    saveSimState(simId, state);
    updateTimerDisplay(0, false);
  }

  function updateTimerDisplay(sec, isRunning) {
    var el = root.document.getElementById("simManualTimerText");
    if (el) el.textContent = fmtTime(sec);
    var dot = root.document.getElementById("simTimerLiveDot");
    if (dot) {
      dot.classList.toggle("animate-pulse", !!isRunning);
      dot.classList.toggle("bg-emerald-500", !!isRunning);
      dot.classList.toggle("bg-amber-500", !isRunning);
    }
  }

  function updateTimerControls(isRunning) {
    var playBtn = root.document.getElementById("simTimerPlayBtn");
    var pauseBtn = root.document.getElementById("simTimerPauseBtn");
    if (playBtn) playBtn.style.display = isRunning ? "none" : "inline-flex";
    if (pauseBtn) pauseBtn.style.display = isRunning ? "inline-flex" : "none";
  }

  /* ----------------------------- RENDER EXECUÇÃO -------------------------- */
  function openSimulado(simId) {
    var entry = getSimEntry(simId);
    if (!entry) return;

    appState.activeSimId = simId;
    appState.activeTab = "questoes";
    appState.activeFilter = "all";

    // Mostra a visão de execução e esconde o Hub
    var hubView = root.document.getElementById("simuladosHubView");
    var activeView = root.document.getElementById("simuladoActiveView");
    if (hubView) hubView.style.display = "none";
    if (activeView) activeView.style.display = "block";

    var state = getSimState(simId);

    // Inicializa cronômetro
    updateTimerDisplay(state.elapsedSeconds || 0, false);
    pauseTimer();
    if (!state.finishedAt && (state.startedAt || Object.keys(state.answers).length > 0)) {
      startTimer();
    }

    // Renderiza header de prova, abas superiores e conteúdo
    renderActiveHeader(entry);
    renderActiveTabs(entry);
    renderQuestionsCaderno(entry);

    applyCurrentState();
    if (root.scrollTo) root.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeSimulado() {
    pauseTimer();
    appState.activeSimId = null;
    var hubView = root.document.getElementById("simuladosHubView");
    var activeView = root.document.getElementById("simuladoActiveView");
    if (activeView) activeView.style.display = "none";
    if (hubView) hubView.style.display = "block";
    renderHub();
    if (root.scrollTo) root.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderActiveHeader(entry) {
    var titleEl = root.document.getElementById("simActiveTitle");
    var subEl = root.document.getElementById("simActiveSub");
    if (titleEl) titleEl.textContent = entry.titulo;
    if (subEl) subEl.textContent = entry.semanas + " • " + entry.badge + " (" + entry.totalQuestoes + " Questões)";
  }

  function renderActiveTabs(entry) {
    var tabsWrap = root.document.getElementById("simActiveTabsWrap");
    if (!tabsWrap) return;

    var tabs = [
      { id: "questoes", label: "Questões (" + entry.totalQuestoes + ")", icon: "📝", isMain: true }
    ];

    (entry.materias || []).forEach(function (m) {
      tabs.push({
        id: "resumo_" + m.key,
        label: getShortMatName(m.key, m.titulo),
        icon: m.icone,
        matKey: m.key,
        isMain: false
      });
    });

    var html = tabs.map(function (tab) {
      var isActive = appState.activeTab === tab.id;
      var mainCls = tab.isMain ? "sim-top-tab-main" : "";
      return '<button type="button" onclick="SIMULADOS_APP.switchTab(\'' + esc(tab.id) + '\')" class="sim-top-tab ' + mainCls + ' ' + (isActive ? 'active' : '') + '" data-tab="' + esc(tab.id) + '">' +
        '<span class="shrink-0 text-sm sm:text-base">' + esc(tab.icon) + '</span>' +
        '<span class="truncate">' + esc(tab.label) + '</span>' +
      '</button>';
    }).join("");

    tabsWrap.innerHTML = html;
  }

  function switchTab(tabId) {
    appState.activeTab = tabId;
    var entry = getSimEntry(appState.activeSimId);
    if (!entry) return;

    // Atualiza botões das abas
    var tabs = root.document.querySelectorAll(".sim-top-tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].getAttribute("data-tab") === tabId);
    }

    var qArea = root.document.getElementById("simQuestionsArea");
    var rArea = root.document.getElementById("simResumeArea");

    if (tabId === "questoes") {
      if (qArea) qArea.style.display = "block";
      if (rArea) rArea.style.display = "none";
    } else {
      if (qArea) qArea.style.display = "none";
      if (rArea) {
        rArea.style.display = "block";
        var matKey = tabId.replace("resumo_", "");
        renderResumeContent(entry, matKey);
      }
    }
    if (root.scrollTo) root.scrollTo({ top: 120, behavior: "smooth" });
  }

  function renderResumeContent(entry, matKey) {
    var rArea = root.document.getElementById("simResumeArea");
    if (!rArea) return;

    var resumos = entry.getResumos ? entry.getResumos() : null;
    var item = resumos && resumos[matKey] ? resumos[matKey] : null;

    if (!item) {
      rArea.innerHTML = '<div class="surface p-8 rounded-2xl text-center text-sec">Resumo teórico em preparação para esta matéria.</div>';
      return;
    }

    var bodyHtml = item.html || md(item.content || "", "resumo_" + matKey);

    rArea.innerHTML =
      '<div class="surface rounded-2xl p-5 sm:p-8 border border-tech space-y-6 shadow-sm">' +
        '<div class="flex items-center justify-between gap-4 pb-4 border-b border-tech flex-wrap">' +
          '<div class="flex items-center gap-3">' +
            '<span class="text-3xl sm:text-4xl">' + esc(item.icon || "📚") + '</span>' +
            '<div>' +
              '<span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">' + esc(item.badge || "Resumo Teórico") + '</span>' +
              '<h2 class="text-xl sm:text-2xl font-black text-pri">' + esc(item.title) + '</h2>' +
            '</div>' +
          '</div>' +
          '<button type="button" onclick="SIMULADOS_APP.switchTab(\'questoes\')" class="sim-btn sim-btn-ghost text-xs flex items-center gap-2">' +
            '<span>← Voltar às Questões</span>' +
          '</button>' +
        '</div>' +
        '<div class="sim-resume-body text-pri leading-relaxed space-y-4">' + bodyHtml + '</div>' +
        '<div class="pt-6 border-t border-tech text-center">' +
          '<button type="button" onclick="SIMULADOS_APP.switchTab(\'questoes\')" class="sim-btn sim-btn-primary inline-flex items-center gap-2">' +
            '<span>Pronto para Responder? Voltar às Questões</span>' +
            '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';

    // Se houver fórmulas LaTeX no resumo, renderiza de forma segura
    if (typeof root.renderMathInElement === "function") {
      try {
        var resumeEl = rArea.querySelector(".sim-resume-body");
        if (resumeEl && (resumeEl.innerHTML.indexOf("$$") !== -1 || resumeEl.innerHTML.indexOf("\\(") !== -1 || resumeEl.innerHTML.indexOf("\\[") !== -1)) {
          root.renderMathInElement(resumeEl, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "\\(", right: "\\)", display: false },
              { left: "\\[", right: "\\]", display: true }
            ],
            throwOnError: false,
            ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
          });
        }
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    }
  }

  /* ----------------------------- CADERNO DE QUESTÕES ---------------------- */
  function renderQuestionsCaderno(entry) {
    var qArea = root.document.getElementById("simQuestionsArea");
    if (!qArea) return;

    var data = entry.getData ? entry.getData() : null;
    if (!data || !data.materias) {
      qArea.innerHTML = '<div class="surface p-8 rounded-2xl text-center text-sec">Banco de questões não localizado para este simulado.</div>';
      return;
    }

    var html = [];
    var totalQ = entry.totalQuestoes || 74;
    var num = 0;

    // 1. Barra de Filtro de Matéria Mobile First
    html.push(
      '<div class="sim-filter-wrap mb-6">' +
        '<div class="sim-filter-title">Filtrar Questões por Matéria:</div>' +
        '<div class="sim-filter-chips">' +
          '<button type="button" class="sim-filter-chip active" data-filter="all" onclick="SIMULADOS_APP.filterSubject(\'all\')">' +
            '📋 Todas as Matérias <span class="sim-filter-count">' + totalQ + '</span>' +
          '</button>' +
          (entry.materias || []).map(function (m) {
            return '<button type="button" class="sim-filter-chip chip-' + esc(m.key) + '" data-filter="' + esc(m.key) + '" onclick="SIMULADOS_APP.filterSubject(\'' + esc(m.key) + '\')">' +
              esc(m.icone) + ' ' + esc(getShortMatName(m.key, m.titulo)) + ' <span class="sim-filter-count">' + m.count + '</span>' +
            '</button>';
          }).join("") +
        '</div>' +
      '</div>'
    );

    // 2. Loop de matérias e questões
    data.materias.forEach(function (mat) {
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
        '<section class="sim-section sec-' + esc(mat.key) + '" id="sim-sec-' + esc(mat.key) + '" data-mat="' + esc(mat.key) + '">' +
          '<header class="sim-section-head">' +
            '<span class="sim-section-icon">' + esc(mat.icone) + '</span>' +
            '<div class="min-w-0 flex-1">' +
              '<h3 class="sim-section-title truncate">' + esc(mat.titulo) + '</h3>' +
              '<div class="sim-section-range">Questões ' + pad(first) + ' a ' + pad(last) + ' (' + qs.length + ' questões)</div>' +
            '</div>' +
          '</header>'
      );

      var printedText = {};
      qs.forEach(function (q) {
        num++;
        var qid = q.qid || ("q" + num);
        var origemAccess = String(q.origem || "").toUpperCase() === "ACCESS";
        var alts = q.alternativas || {};
        var keys = LETTERS.filter(function (L) { return alts[L] != null && String(alts[L]).trim() !== ""; });
        var rInfo = q.texto_id && textRange[q.texto_id] ? textRange[q.texto_id] : null;

        if (q.texto_id && textos[q.texto_id] && !printedText[q.texto_id]) {
          printedText[q.texto_id] = true;
          var t = textos[q.texto_id], r = textRange[q.texto_id];
          html.push(
            '<div class="sim-text-card" id="sim-txt-' + esc(t.id) + '">' +
              '<div class="sim-text-label">📖 Texto Base ' + (r.b !== r.a ? 'para as questões ' + pad(r.a) + ' a ' + pad(r.b) : 'para a questão ' + pad(r.a)) + '</div>' +
              (t.titulo ? '<h4 class="sim-text-title">' + esc(t.titulo) + '</h4>' : '') +
              '<div class="sim-text-body">' + md(t.conteudo, "simtxt_" + t.id) + '</div>' +
              (t.fonte ? '<div class="sim-text-credit">Fonte: ' + esc(t.fonte) + '</div>' : '') +
            '</div>'
          );
        }

        html.push(
          '<article class="sim-q surface-card" id="' + qid + '" data-qid="' + qid + '" data-gab="' + esc(q.gabarito) + '" data-mat="' + esc(mat.key) + '" data-origem="' + (origemAccess ? "access" : "adapt") + '">' +
            '<div class="sim-q-head">' +
              '<span class="sim-q-num">Questão ' + pad(num) + '</span>' +
              '<span class="sim-reveal sim-origin ' + (origemAccess ? 'origin-access' : 'origin-adapt') + '">' +
                (origemAccess ? '🏛️ Original ACCESS' : '🛠️ Adaptada · Guia ACCESS') +
              '</span>' +
              (q.assunto || q.topico ? '<span class="sim-reveal sim-topic truncate">' + esc(q.assunto || q.topico) + '</span>' : '') +
              '<span class="sim-reveal sim-verdict"></span>' +
            '</div>' +

            (rInfo ? '<div class="sim-q-textref">Refere-se ao texto base (Questões ' + pad(rInfo.a) + ' a ' + pad(rInfo.b) + ') · <a href="#sim-txt-' + esc(q.texto_id) + '" onclick="return SIMULADOS_APP.goTo(\'sim-txt-' + esc(q.texto_id) + '\')">↑ Ver texto</a></div>' : '') +

            '<div class="sim-q-body text-pri">' + md(q.enunciado, "simq_" + qid) + '</div>' +

            (q.imagem ? '<figure class="sim-q-img my-3"><img src="' + esc(q.imagem) + '" alt="Figura da questão ' + num + '" class="rounded-xl max-w-full h-auto border border-tech" loading="lazy"/></figure>' : '') +

            '<!-- Alternativas com Suporte a Cortar Opções -->' +
            '<div class="sim-alts" role="radiogroup">' +
              keys.map(function (L) {
                return '<div class="sim-alt-row" id="row_' + qid + '_' + L + '">' +
                  '<button type="button" class="sim-alt flex-1" id="btn_' + qid + '_' + L + '" data-letter="' + L + '" onclick="SIMULADOS_APP.pickAnswer(\'' + qid + '\',\'' + L + '\')">' +
                    '<span class="sim-alt-letter">' + L + '</span>' +
                    '<span class="sim-alt-text">' + mdInline(alts[L], "sima_" + qid + L) + '</span>' +
                  '</button>' +
                  '<button type="button" class="sim-alt-cut-btn" id="cut_' + qid + '_' + L + '" onclick="SIMULADOS_APP.toggleEliminateOption(\'' + qid + '\',\'' + L + '\', event)" title="Riscar ou descartar alternativa">' +
                    '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>' +
                  '</button>' +
                '</div>';
              }).join("") +
            '</div>' +

            '<div class="sim-reveal sim-feedback">' +
              '<div class="sim-feedback-gab">Gabarito Oficial: <strong>Alternativa ' + esc(q.gabarito) + '</strong> · <span class="sim-feedback-origin">' + (origemAccess ? 'Questão Oficial ACCESS' : 'Questão Adaptada pelo Guia ACCESS') + '</span></div>' +
              (q.comentario ? '<div class="sim-feedback-text">' + md(q.comentario, "simc_" + qid) + '</div>' : '') +
            '</div>' +
          '</article>'
        );
      });

      // Rodapé da matéria
      html.push(
        '<div class="sim-sec-footer" id="sim-sec-footer-' + esc(mat.key) + '">' +
          '<div class="sim-sec-footer-top">' +
            '<div class="sim-sec-footer-info">' +
              '<span class="sim-sec-footer-badge">' + esc(mat.icone) + ' ' + esc(mat.titulo) + '</span>' +
              '<span class="sim-sec-progress" id="simSecProg-' + esc(mat.key) + '"><strong>0</strong> de ' + qs.length + ' respondidas</span>' +
            '</div>' +
            '<div class="sim-sec-actions">' +
              '<button type="button" class="sim-btn sim-btn-sec-correct" id="simSecCorrectBtn-' + esc(mat.key) + '" onclick="SIMULADOS_APP.correctSubject(\'' + esc(mat.key) + '\')">' +
                '✅ Verificar ' + esc(mat.titulo) + ' (' + qs.length + ' q.)' +
              '</button>' +
              '<button type="button" class="sim-btn sim-btn-ghost sim-btn-sm" id="simSecResetBtn-' + esc(mat.key) + '" style="display:none;" onclick="SIMULADOS_APP.resetSubject(\'' + esc(mat.key) + '\')">' +
                '↺ Refazer ' + esc(mat.titulo) +
              '</button>' +
            '</div>' +
          '</div>' +
          '<div class="sim-sec-result" id="simSecResult-' + esc(mat.key) + '"></div>' +
        '</div>'
      );

      html.push('</section>');
    });

    // 3. Rodapé Geral do Simulado
    html.push(
      '<div class="sim-footer-card mt-8" id="simGeneralFooter">' +
        '<div class="sim-progress-line">Progresso Total do Simulado: <strong><span id="simActiveAnswered">0</span> de ' + totalQ + '</strong> questões respondidas</div>' +
        '<div class="sim-progress-bar"><div id="simActiveProgressFill" style="width:0%"></div></div>' +
        '<div class="sim-actions">' +
          '<button type="button" class="sim-btn sim-btn-primary" id="simActiveCorrectBtn" onclick="SIMULADOS_APP.correctAll()">' +
            '✅ Corrigir Simulado Completo (Todas as ' + totalQ + ' Questões)' +
          '</button>' +
          '<button type="button" class="sim-btn sim-btn-ghost" onclick="SIMULADOS_APP.resetAll()">' +
            '↺ Limpar Todas as Respostas e Recomeçar' +
          '</button>' +
        '</div>' +
        '<div class="sim-by-mat-box">' +
          '<div class="sim-by-mat-heading">Ou verifique matéria por matéria individualmente:</div>' +
          '<div class="sim-by-mat-grid" id="simByMatGrid">' +
            (entry.materias || []).map(function (m) {
              return '<button type="button" class="sim-by-mat-btn" id="simByMatBtn-' + esc(m.key) + '" onclick="SIMULADOS_APP.onMatBtnClick(\'' + esc(m.key) + '\')">' +
                '<span class="truncate">' + esc(m.icone) + ' ' + esc(getShortMatName(m.key, m.titulo)) + '</span>' +
                '<span class="sim-by-mat-tag shrink-0" id="simByMatTag-' + esc(m.key) + '">' + m.count + ' q.</span>' +
              '</button>';
            }).join("") +
          '</div>' +
        '</div>' +
        '<div class="sim-result" id="simActiveResult"></div>' +
      '</div>'
    );

    qArea.innerHTML = html.join("");
  }

  /* ----------------------------- APLICAÇÃO DE ESTADO ---------------------- */
  function applyCurrentState() {
    var simId = appState.activeSimId;
    if (!simId) return;
    var state = getSimState(simId);
    var entry = getSimEntry(simId);
    var data = entry ? entry.getData() : null;
    if (!data) return;

    var el = root.document.getElementById("simQuestionsArea");
    if (!el) return;

    el.classList.toggle("sim-corrected", !!state.corrected);
    var qs = el.querySelectorAll(".sim-q");
    var totalAnswered = 0;

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
      var mCorr = !!state.corrected || !!(state.correctedMaterias && state.correctedMaterias[matKey]);
      var mine = state.answers[qid];

      if (matStats[matKey]) {
        matStats[matKey].total++;
        if (isAccess) matStats[matKey].totAccess++; else matStats[matKey].totAdapt++;
        if (mine) matStats[matKey].answered++;
      }
      if (mine) totalAnswered++;

      var btns = qEl.querySelectorAll(".sim-alt");
      for (var j = 0; j < btns.length; j++) {
        var b = btns[j], L = b.getAttribute("data-letter");
        var isElim = !!(state.eliminated && state.eliminated[qid + "_" + L]);
        var cutBtn = root.document.getElementById("cut_" + qid + "_" + L);

        b.classList.toggle("selected", mine === L);
        b.classList.toggle("is-correct", mCorr && L === gab);
        b.classList.toggle("is-wrong", mCorr && mine === L && L !== gab);
        b.classList.toggle("eliminated", isElim && !mCorr);
        b.disabled = mCorr;

        if (cutBtn) {
          cutBtn.classList.toggle("is-active", isElim && !mCorr);
          cutBtn.style.display = mCorr ? "none" : "";
        }
      }

      qEl.classList.remove("q-right", "q-wrong", "q-blank", "q-corrected");
      var verdict = qEl.querySelector(".sim-verdict");

      if (mCorr) {
        qEl.classList.add("q-corrected");
        var isRight = mine === gab;
        qEl.classList.add(!mine ? "q-blank" : (isRight ? "q-right" : "q-wrong"));
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

    // Seções por matéria
    (data.materias || []).forEach(function (m) {
      var mKey = m.key;
      var secEl = el.querySelector('#sim-sec-' + mKey);
      var mCorr = !!state.corrected || !!(state.correctedMaterias && state.correctedMaterias[mKey]);
      if (secEl) secEl.classList.toggle("sim-corrected", mCorr);

      var stat = matStats[mKey] || { total: (m.questoes || []).length, answered: 0, ok: 0 };
      var progEl = root.document.getElementById("simSecProg-" + mKey);
      if (progEl) progEl.innerHTML = "<strong>" + stat.answered + "</strong> de " + stat.total + " respondidas";

      var corBtn = root.document.getElementById("simSecCorrectBtn-" + mKey);
      var rstBtn = root.document.getElementById("simSecResetBtn-" + mKey);
      var resEl = root.document.getElementById("simSecResult-" + mKey);

      if (corBtn) {
        if (mCorr) {
          corBtn.textContent = "✔ " + m.titulo + " Verificada (" + stat.ok + "/" + stat.total + ")";
          corBtn.classList.add("sim-btn-done");
          corBtn.disabled = true;
        } else {
          corBtn.textContent = "✅ Verificar " + m.titulo + " (" + stat.total + " q.)";
          corBtn.classList.remove("sim-btn-done");
          corBtn.disabled = false;
        }
      }

      if (rstBtn) rstBtn.style.display = mCorr ? "" : "none";

      if (resEl) {
        if (mCorr) {
          var pct = stat.total ? Math.round((stat.ok / stat.total) * 100) : 0;
          resEl.innerHTML =
            '<div class="sim-sec-score-card mt-3">' +
              '<div class="sim-sec-score-header">' +
                '<div class="sim-sec-score-badge">' + esc(m.icone) + ' Desempenho em ' + esc(m.titulo) + '</div>' +
                '<div class="sim-sec-score-val">' + stat.ok + ' de ' + stat.total + ' <span>(' + pct + '% de acerto)</span></div>' +
              '</div>' +
              '<div class="sim-sec-score-bar"><div style="width:' + pct + '%"></div></div>' +
              '<div class="sim-sec-score-details">' +
                '<span>🏛️ Originais ACCESS: <strong>' + stat.okAccess + '/' + stat.totAccess + '</strong></span>' +
                '<span>🛠️ Adaptadas pelo Guia: <strong>' + stat.okAdapt + '/' + stat.totAdapt + '</strong></span>' +
              '</div>' +
              '<p class="sim-sec-score-msg">✨ Gabarito oficial e resoluções comentadas de ' + esc(m.titulo) + ' liberados acima! Revise seus pontos fortes e fracos.</p>' +
            '</div>';
        } else {
          resEl.innerHTML = "";
        }
      }

      var matBtn = root.document.getElementById("simByMatBtn-" + mKey);
      var matTag = root.document.getElementById("simByMatTag-" + mKey);
      if (matBtn && matTag) {
        matBtn.classList.toggle("is-corr", mCorr);
        if (mCorr) matTag.textContent = stat.ok + "/" + stat.total + " ✔";
        else matTag.textContent = stat.answered + "/" + stat.total;
      }
    });

    // Rodapé Geral
    var totalQ = entry.totalQuestoes || qs.length;
    var a = root.document.getElementById("simActiveAnswered");
    if (a) a.textContent = totalAnswered;
    var f = root.document.getElementById("simActiveProgressFill");
    if (f) f.style.width = (totalQ ? Math.round((totalAnswered / totalQ) * 100) : 0) + "%";
    var btn = root.document.getElementById("simActiveCorrectBtn");
    if (btn) btn.style.display = state.corrected ? "none" : "";

    applyFilter();
    renderResultBox();
  }

  function applyFilter() {
    var el = root.document.getElementById("simQuestionsArea");
    if (!el) return;
    var filter = appState.activeFilter || "all";
    var secs = el.querySelectorAll(".sim-section");
    for (var i = 0; i < secs.length; i++) {
      var sec = secs[i];
      var mKey = sec.getAttribute("data-mat");
      sec.style.display = (filter === "all" || filter === mKey) ? "" : "none";
    }
    var chips = el.querySelectorAll(".sim-filter-chip");
    for (var j = 0; j < chips.length; j++) {
      chips[j].classList.toggle("active", chips[j].getAttribute("data-filter") === filter);
    }
  }

  function renderResultBox() {
    var box = root.document.getElementById("simActiveResult");
    if (!box) return;

    var simId = appState.activeSimId;
    var state = getSimState(simId);
    var entry = getSimEntry(simId);
    var data = entry ? entry.getData() : null;
    if (!state || !entry || !data) return;

    var anyCorr = state.corrected || Object.keys(state.correctedMaterias || {}).some(function (k) {
      return state.correctedMaterias[k];
    });

    if (!anyCorr) {
      box.innerHTML = "";
      return;
    }

    var el = root.document.getElementById("simQuestionsArea");
    var rows = [], tot = 0, totOk = 0;
    (data.materias || []).forEach(function (m) {
      var qEls = el.querySelectorAll('.sim-q[data-mat="' + m.key + '"]');
      var ok = 0;
      for (var i = 0; i < qEls.length; i++) {
        if (qEls[i].classList.contains("q-right")) ok++;
      }
      tot += qEls.length;
      totOk += ok;
      var pct = qEls.length ? Math.round((ok / qEls.length) * 100) : 0;
      var isCorr = state.corrected || (state.correctedMaterias && state.correctedMaterias[m.key]);
      rows.push(
        '<div class="sim-score-row">' +
          '<span class="truncate">' + esc(m.icone) + ' ' + esc(m.titulo) + ' ' + (isCorr ? '<em class="text-xs text-emerald-500 font-bold">(verificada)</em>' : '<em class="text-xs text-amber-500 font-bold">(pendente)</em>') + '</span>' +
          '<div class="sim-score-bar"><div style="width:' + (isCorr ? pct : 0) + '%"></div></div>' +
          '<strong>' + (isCorr ? (ok + "/" + qEls.length + " (" + pct + "%)") : "—") + '</strong>' +
        '</div>'
      );
    });

    var pctTot = tot ? Math.round((totOk / tot) * 100) : 0;
    var tempo = fmtTime(state.elapsedSeconds || 0);

    box.innerHTML =
      '<div class="sim-score-total">Aproveitamento Consolidado: ' + totOk + ' de ' + tot + ' <span>(' + pctTot + '% de acertos)</span></div>' +
      '<div class="sim-score-time">⏱ Tempo total registrado: ' + tempo + '</div>' +
      '<div class="sim-score-grid">' + rows.join("") + '</div>' +
      '<p class="sim-score-tip">✨ <strong>Correções liberadas!</strong> Role pelas questões de cada disciplina verificada para conferir o selo de origem, tópico do edital e o comentário explicativo passo a passo.</p>';
  }

  /* ----------------------------- AÇÕES DO USUÁRIO ------------------------- */
  var API = {
    init: function () {
      renderHub();
    },

    openSimulado: openSimulado,
    closeSimulado: closeSimulado,
    switchTab: switchTab,

    filterSubject: function (key) {
      appState.activeFilter = key || "all";
      applyFilter();
      if (key && key !== "all") {
        var t = root.document.getElementById("sim-sec-" + key);
        if (t && t.scrollIntoView) t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return false;
    },

    goTo: function (id) {
      if (id.indexOf("sim-sec-") === 0) {
        var k = id.replace("sim-sec-", "");
        if (appState.activeFilter !== "all" && appState.activeFilter !== k) {
          API.filterSubject("all");
        }
      }
      var t = root.document.getElementById(id);
      if (t && t.scrollIntoView) t.scrollIntoView({ behavior: "smooth", block: "start" });
      return false;
    },

    pickAnswer: function (qid, letter) {
      var simId = appState.activeSimId;
      if (!simId) return;
      var state = getSimState(simId);
      var qEl = root.document.getElementById(qid);
      var matKey = qEl ? qEl.getAttribute("data-mat") : null;

      if (state.corrected || (matKey && state.correctedMaterias && state.correctedMaterias[matKey])) {
        return; // Matéria já corrigida
      }

      // Se a alternativa estava eliminada, desfaz a eliminação ao selecionar
      var elimKey = qid + "_" + letter;
      if (state.eliminated && state.eliminated[elimKey]) {
        delete state.eliminated[elimKey];
      }

      state.answers[qid] = state.answers[qid] === letter ? undefined : letter;
      if (!state.answers[qid]) delete state.answers[qid];

      if (!state.startedAt) state.startedAt = Date.now();
      saveSimState(simId, state);

      if (!appState.timerInterval && !state.finishedAt) {
        startTimer();
      }

      applyCurrentState();
    },

    toggleEliminateOption: function (qid, letter, evt) {
      if (evt && evt.stopPropagation) evt.stopPropagation();
      var simId = appState.activeSimId;
      if (!simId) return;
      var state = getSimState(simId);
      var qEl = root.document.getElementById(qid);
      var matKey = qEl ? qEl.getAttribute("data-mat") : null;

      if (state.corrected || (matKey && state.correctedMaterias && state.correctedMaterias[matKey])) {
        return;
      }

      var elimKey = qid + "_" + letter;
      if (!state.eliminated) state.eliminated = {};
      state.eliminated[elimKey] = !state.eliminated[elimKey];

      // Se eliminou a alternativa que estava selecionada, desmarca a seleção
      if (state.eliminated[elimKey] && state.answers[qid] === letter) {
        delete state.answers[qid];
      }

      saveSimState(simId, state);
      applyCurrentState();
    },

    correctSubject: function (matKey) {
      var simId = appState.activeSimId;
      if (!simId) return;
      var state = getSimState(simId);
      var entry = getSimEntry(simId);
      var data = entry ? entry.getData() : null;
      var mat = (data && data.materias || []).filter(function (m) { return m.key === matKey; })[0];
      if (!mat) return;

      var qEls = root.document.querySelectorAll('#simQuestionsArea .sim-q[data-mat="' + matKey + '"]');
      var answered = 0;
      for (var i = 0; i < qEls.length; i++) {
        var qid = qEls[i].getAttribute("data-qid");
        if (state.answers[qid]) answered++;
      }

      if (answered < qEls.length && root.confirm) {
        if (!root.confirm("Você deixou " + (qEls.length - answered) + " questão(ões) de " + mat.titulo + " em branco.\nDeseja verificar esta matéria mesmo assim?")) {
          return;
        }
      }

      if (!state.correctedMaterias) state.correctedMaterias = {};
      state.correctedMaterias[matKey] = true;

      // Verifica se todas foram feitas
      var allDone = true;
      (data.materias || []).forEach(function (m) {
        if (!state.correctedMaterias[m.key]) allDone = false;
      });
      if (allDone) {
        state.corrected = true;
        state.finishedAt = Date.now();
        pauseTimer();
      }

      saveSimState(simId, state);
      applyCurrentState();

      var foot = root.document.getElementById("sim-sec-footer-" + matKey);
      if (foot && foot.scrollIntoView) foot.scrollIntoView({ behavior: "smooth", block: "center" });

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

    resetSubject: function (matKey) {
      var simId = appState.activeSimId;
      if (!simId) return;
      var state = getSimState(simId);
      var entry = getSimEntry(simId);
      var data = entry ? entry.getData() : null;
      var mat = (data && data.materias || []).filter(function (m) { return m.key === matKey; })[0];
      var matTitle = mat ? mat.titulo : matKey;

      if (root.confirm && !root.confirm("Limpar respostas e refazer as questões de " + matTitle + "?")) return;

      var qEls = root.document.querySelectorAll('#simQuestionsArea .sim-q[data-mat="' + matKey + '"]');
      for (var i = 0; i < qEls.length; i++) {
        var qid = qEls[i].getAttribute("data-qid");
        delete state.answers[qid];
        // limpa eliminadas da matéria
        LETTERS.forEach(function (L) {
          if (state.eliminated) delete state.eliminated[qid + "_" + L];
        });
      }

      if (state.correctedMaterias) delete state.correctedMaterias[matKey];
      state.corrected = false;

      saveSimState(simId, state);
      applyCurrentState();

      var sec = root.document.getElementById("sim-sec-" + matKey);
      if (sec && sec.scrollIntoView) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    },

    onMatBtnClick: function (matKey) {
      var simId = appState.activeSimId;
      var state = getSimState(simId);
      if (state && (state.corrected || (state.correctedMaterias && state.correctedMaterias[matKey]))) {
        API.goTo("sim-sec-" + matKey);
      } else {
        API.correctSubject(matKey);
      }
    },

    correctAll: function () {
      var simId = appState.activeSimId;
      if (!simId) return;
      var state = getSimState(simId);
      var entry = getSimEntry(simId);
      var total = entry ? entry.totalQuestoes : 74;
      var answered = Object.keys(state.answers).length;

      if (answered < total && root.confirm) {
        if (!root.confirm("Você deixou " + (total - answered) + " questão(ões) em branco no total.\nDeseja corrigir o simulado completo mesmo assim?")) {
          return;
        }
      }

      state.corrected = true;
      state.finishedAt = Date.now();
      pauseTimer();

      var data = entry ? entry.getData() : null;
      if (!state.correctedMaterias) state.correctedMaterias = {};
      if (data && data.materias) {
        data.materias.forEach(function (m) {
          state.correctedMaterias[m.key] = true;
        });
      }

      saveSimState(simId, state);
      applyCurrentState();

      var r = root.document.getElementById("simGeneralFooter");
      if (r && r.scrollIntoView) r.scrollIntoView({ behavior: "smooth", block: "start" });

      if (typeof root.confetti === "function") {
        var ok = root.document.querySelectorAll("#simQuestionsArea .q-right").length;
        if (ok / total >= 0.7) {
          root.confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
        }
      }
    },

    resetAll: function () {
      var simId = appState.activeSimId;
      if (!simId) return;
      if (root.confirm && !root.confirm("Apagar todas as respostas e recomeçar o simulado do zero?")) return;
      pauseTimer();
      var clean = {
        answers: {},
        eliminated: {},
        correctedMaterias: {},
        corrected: false,
        elapsedSeconds: 0,
        startedAt: null,
        finishedAt: null
      };
      saveSimState(simId, clean);
      updateTimerDisplay(0, false);
      applyCurrentState();
      if (root.scrollTo) root.scrollTo({ top: 0, behavior: "smooth" });
    },

    resetSimuladoPrompt: function (simId) {
      if (root.confirm && !root.confirm("Zerar todas as respostas e progresso deste simulado?")) return;
      var clean = {
        answers: {},
        eliminated: {},
        correctedMaterias: {},
        corrected: false,
        elapsedSeconds: 0,
        startedAt: null,
        finishedAt: null
      };
      saveSimState(simId, clean);
      renderHub();
    },

    // Controles manuais do cronômetro
    startTimer: startTimer,
    pauseTimer: pauseTimer,
    resetTimer: resetTimer
  };

  root.SIMULADOS_APP = API;

  // Inicialização no DOMContentLoaded
  if (root.document && root.addEventListener) {
    root.addEventListener("DOMContentLoaded", function () {
      API.init();
    });
  }
})(typeof window !== "undefined" ? window : globalThis);
