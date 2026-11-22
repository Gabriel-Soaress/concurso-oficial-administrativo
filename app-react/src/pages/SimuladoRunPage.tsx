import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  CheckCircle2,
  ListChecks,
  RotateCcw,
  Scissors,
  XCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { loadSimuladosRegistry } from "@/services/simuladosLoader";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/contexts/ToastContext";
import { renderInlineMarkdown, renderRichMarkdown } from "@/lib/markdown";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SimuladoTimer } from "@/components/simulado/SimuladoTimer";
import { SimuladoResultBox } from "@/components/simulado/SimuladoResultBox";
import { MarkdownRenderer } from "@/components/lesson/MarkdownRenderer";
import type { SimuladoRegistryEntry } from "@/types";

const LETTERS = ["A", "B", "C", "D", "E"];

function getShortSubjectTitle(key: string, fallback: string): string {
  if (key === "portugues") return "Português";
  if (key === "especificos") return "Específicos";
  if (key === "gerais") return "Gerais";
  if (key === "matematica") return "Mat. e RLM";
  return fallback;
}

export function SimuladoRunPage() {
  const { simId = "" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { getSimuladoState, saveSimuladoState } = useProgress();
  const { showToast } = useToast();

  const [entry, setEntry] = useState<SimuladoRegistryEntry | null | undefined>(undefined);

  useEffect(() => {
    let active = true;
    loadSimuladosRegistry().then((list) => {
      if (!active) return;
      setEntry(list.find((s) => s.id === simId) || null);
    });
    return () => {
      active = false;
    };
  }, [simId]);

  const activeTab = searchParams.get("aba") === "resumo" ? "resumo" : "questoes";
  const activeMat = searchParams.get("mat") || "all";

  const setTabAndMat = (aba: "questoes" | "resumo", mat: string) => {
    setSearchParams({ aba, mat }, { replace: true });
  };

  const state = getSimuladoState(simId);
  const data = useMemo(() => (entry ? entry.getData() : null), [entry]);
  const resumos = useMemo(() => (entry ? entry.getResumos() : null), [entry]);

  const handleSyncSeconds = useCallback(
    (elapsedSeconds: number) => {
      if (!simId) return;
      const latest = getSimuladoState(simId);
      if (latest.elapsedSeconds === elapsedSeconds) return;
      saveSimuladoState(simId, { ...latest, elapsedSeconds });
    },
    [simId, getSimuladoState, saveSimuladoState]
  );

  if (entry === undefined) {
    return (
      <div className="py-16 text-center space-y-3">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-mut">Carregando caderno de prova...</p>
      </div>
    );
  }

  if (!entry || !data) {
    return (
      <div className="max-w-xl mx-auto surface rounded-2xl p-8 text-center space-y-4">
        <h2 className="text-xl font-extrabold text-pri">Simulado não encontrado</h2>
        <Link to="/simulados" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar aos Simulados</span>
        </Link>
      </div>
    );
  }

  const pickAnswer = (qid: string, matKey: string, letter: string) => {
    if (state.corrected || state.correctedMaterias?.[matKey]) return;
    const nextAnswers = { ...state.answers };
    nextAnswers[qid] = nextAnswers[qid] === letter ? undefined : letter;
    saveSimuladoState(simId, { ...state, answers: nextAnswers });
  };

  const toggleEliminate = (qid: string, matKey: string, letter: string) => {
    if (state.corrected || state.correctedMaterias?.[matKey]) return;
    const eKey = `${qid}_${letter}`;
    const nextElim = { ...state.eliminated, [eKey]: !state.eliminated[eKey] };
    const nextAns = { ...state.answers };
    if (nextElim[eKey] && nextAns[qid] === letter) {
      nextAns[qid] = undefined;
    }
    saveSimuladoState(simId, { ...state, eliminated: nextElim, answers: nextAns });
  };

  const correctSubject = (matKey: string) => {
    const nextCorr = { ...(state.correctedMaterias || {}), [matKey]: true };
    const allDone = data.materias.every((m) => !!nextCorr[m.key]);
    saveSimuladoState(simId, { ...state, correctedMaterias: nextCorr, corrected: allDone });
    confetti({ particleCount: 55, spread: 55, origin: { y: 0.7 } });
    showToast("Matéria corrigida! Confira os comentários.", "success");
  };

  const resetSubject = (matKey: string) => {
    const mat = data.materias.find((m) => m.key === matKey);
    if (!mat) return;
    if (!window.confirm(`Refazer todas as questões de ${mat.titulo}?`)) return;
    const nextAns = { ...state.answers };
    const nextElim = { ...state.eliminated };
    mat.questoes.forEach((q, idx) => {
      const qid = q.id || `${mat.key}_q${idx + 1}`;
      delete nextAns[qid];
      LETTERS.forEach((L) => delete nextElim[`${qid}_${L}`]);
    });
    const nextCorr = { ...(state.correctedMaterias || {}) };
    delete nextCorr[matKey];
    saveSimuladoState(simId, {
      ...state,
      answers: nextAns,
      eliminated: nextElim,
      corrected: false,
      correctedMaterias: nextCorr,
    });
  };

  const correctAll = () => {
    const nextCorr: Record<string, boolean> = {};
    data.materias.forEach((m) => {
      nextCorr[m.key] = true;
    });
    saveSimuladoState(simId, { ...state, corrected: true, correctedMaterias: nextCorr });
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.65 } });
    showToast("Simulado inteiro corrigido!", "success");
  };

  const resetAll = () => {
    if (!window.confirm("Zerar todas as respostas e reiniciar o simulado?")) return;
    saveSimuladoState(simId, {
      answers: {},
      eliminated: {},
      corrected: false,
      correctedMaterias: {},
      elapsedSeconds: 0,
    });
    showToast("Simulado reiniciado.", "info");
  };

  const visibleMaterias =
    activeMat === "all" ? data.materias : data.materias.filter((m) => m.key === activeMat);

  const resumeKeys = resumos ? Object.keys(resumos) : [];
  const activeResumeKey = resumos && resumos[activeMat] ? activeMat : resumeKeys[0];
  const activeResume = activeResumeKey && resumos ? resumos[activeResumeKey] : null;

  const totalQuestions = data.materias.reduce((acc, m) => acc + m.questoes.length, 0);
  const answeredTotal = data.materias.reduce(
    (acc, m) =>
      acc +
      m.questoes.filter((q, idx) => Boolean(state.answers[q.id || `${m.key}_q${idx + 1}`])).length,
    0
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/simulados" className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Simulados</span>
          </Link>
          <Breadcrumbs items={[{ label: "Simulados", to: "/simulados" }, { label: entry.titulo }]} />
        </div>
      </div>

      {/* Top Bar com Título e Cronômetro */}
      <div className="surface rounded-2xl p-4 sm:p-5 border border-tech flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 space-y-0.5">
          <h1 className="text-base sm:text-xl font-extrabold text-pri leading-snug">{entry.titulo}</h1>
          <p className="text-xs font-mono text-mut leading-relaxed">{entry.subtitulo}</p>
        </div>
        <SimuladoTimer initialSeconds={state.elapsedSeconds} onSyncSeconds={handleSyncSeconds} />
      </div>

      {/* Abas em 2 níveis: Switch Questões/Resumos + Seletor de Resumo por Matéria */}
      <div className="space-y-2.5">
        <div
          className={`p-1 surface rounded-2xl border border-tech gap-1.5 ${
            resumeKeys.length > 0 ? "grid grid-cols-2 sm:inline-flex" : "inline-flex"
          }`}
        >
          <button
            type="button"
            onClick={() =>
              setTabAndMat(
                "questoes",
                data.materias.some((m) => m.key === activeMat) ? activeMat : "all"
              )
            }
            className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
              activeTab === "questoes"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-sec hover:text-pri hover:surface-muted"
            }`}
          >
            <ListChecks className="w-4 h-4 shrink-0" />
            <span className="sm:hidden">Questões</span>
            <span className="hidden sm:inline">Caderno de Questões</span>
          </button>

          {resumeKeys.length > 0 && (
            <button
              type="button"
              onClick={() => setTabAndMat("resumo", activeResumeKey || resumeKeys[0])}
              className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
                activeTab === "resumo"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-sec hover:text-pri hover:surface-muted"
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Resumos ({resumeKeys.length})</span>
              <span className="hidden sm:inline">Resumos Teóricos ({resumeKeys.length})</span>
            </button>
          )}
        </div>

        {activeTab === "resumo" && resumeKeys.length > 0 && (
          <div className="surface rounded-2xl p-3 sm:p-4 border border-tech space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-mut">
                Resumo por matéria
              </span>
              <span className="text-[11px] font-mono text-mut">{resumeKeys.length} matérias</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {resumeKeys.map((rKey, rIdx) => {
                const r = resumos![rKey];
                const rTitle = r.title || r.titulo || rKey;
                const rShort = getShortSubjectTitle(rKey, rTitle);
                const rIcon = r.icon || r.icone || "📘";
                const isAct = activeResumeKey === rKey;
                const spanFullLast =
                  resumeKeys.length % 2 === 1 && rIdx === resumeKeys.length - 1;
                return (
                  <button
                    key={rKey}
                    type="button"
                    onClick={() => setTabAndMat("resumo", rKey)}
                    className={`inline-flex items-center justify-center sm:justify-start gap-1.5 px-3 sm:px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-bold border cursor-pointer transition-colors min-w-0 ${
                      spanFullLast ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      isAct
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "surface-muted text-sec hover:text-pri border-tech"
                    }`}
                  >
                    <span className="shrink-0">{rIcon}</span>
                    <span className="sm:hidden truncate">{rShort}</span>
                    <span className="hidden sm:inline">{rTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* VISÃO 1: CADERNO DE QUESTÕES */}
      {activeTab === "questoes" && (
        <div className="space-y-6">
          <SimuladoResultBox data={data} state={state} />

          {/* Barra de Filtros por Matéria + Ações Globais (Mobile-First) */}
          <div className="surface rounded-2xl p-3.5 sm:p-4 border border-tech space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-mut">
                Filtrar por matéria
              </span>
              <span className="text-[11px] font-mono text-mut">
                {answeredTotal}/{totalQuestions} respondidas
              </span>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTabAndMat("questoes", "all")}
                className={`flex items-center justify-between gap-2 px-3 py-2.5 sm:py-2 rounded-xl text-xs font-bold border cursor-pointer transition-colors ${
                  data.materias.length % 2 === 0 ? "col-span-2 sm:col-span-1" : ""
                } ${
                  activeMat === "all"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "surface-muted text-sec hover:text-pri border-tech"
                }`}
              >
                <span className="sm:hidden">Todas</span>
                <span className="hidden sm:inline">Todas as matérias</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md font-mono text-[10px] font-extrabold shrink-0 ${
                    activeMat === "all"
                      ? "bg-white/20 text-white"
                      : "surface text-mut border border-tech"
                  }`}
                >
                  {totalQuestions}
                </span>
              </button>

              {data.materias.map((m) => {
                const isActive = activeMat === m.key;
                const isDone = state.corrected || !!state.correctedMaterias?.[m.key];
                const shortLabel = getShortSubjectTitle(m.key, m.titulo);
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setTabAndMat("questoes", m.key)}
                    className={`flex items-center justify-between gap-2 px-3 py-2.5 sm:py-2 rounded-xl text-xs font-bold border cursor-pointer transition-colors min-w-0 ${
                      isActive
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "surface-muted text-sec hover:text-pri border-tech"
                    }`}
                  >
                    <span className="flex items-center gap-1.5 min-w-0">
                      <span className="shrink-0">{m.icone}</span>
                      <span className="sm:hidden truncate">{shortLabel}</span>
                      <span className="hidden sm:inline truncate">{m.titulo}</span>
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md font-mono text-[10px] font-extrabold shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : isDone
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : "surface text-mut border border-tech"
                      }`}
                    >
                      {isDone ? `✓ ${m.questoes.length}` : m.questoes.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-end gap-2 pt-2.5 border-t border-tech">
              <button
                type="button"
                onClick={correctAll}
                className="btn-primary !py-2 !px-3.5 !text-xs justify-center"
              >
                Corrigir Simulado
              </button>
              <button
                type="button"
                onClick={resetAll}
                className="btn-secondary !py-2 !px-3 !text-xs justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Seções por Matéria */}
          {visibleMaterias.map((mat) => {
            const isMatCorr = state.corrected || !!state.correctedMaterias?.[mat.key];
            const matAnswered = mat.questoes.filter(
              (q, idx) => Boolean(state.answers[q.id || `${mat.key}_q${idx + 1}`])
            ).length;
            const matRight = isMatCorr
              ? mat.questoes.filter(
                  (q, idx) => state.answers[q.id || `${mat.key}_q${idx + 1}`] === q.gabarito
                ).length
              : 0;
            const matPct =
              mat.questoes.length > 0 ? Math.round((matRight / mat.questoes.length) * 100) : 0;
            const matIdx = data.materias.findIndex((m) => m.key === mat.key);
            const nextMat =
              matIdx >= 0 && matIdx + 1 < data.materias.length ? data.materias[matIdx + 1] : null;
            return (
              <section key={mat.key} className="space-y-4">
                <div className="surface rounded-2xl p-4 sm:p-5 border border-tech flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-pri">
                      {mat.icone} {mat.titulo}
                    </h2>
                    {mat.subtitulo && <p className="text-xs text-mut mt-0.5">{mat.subtitulo}</p>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {!isMatCorr ? (
                      <button
                        type="button"
                        onClick={() => correctSubject(mat.key)}
                        className="btn-primary !py-1.5 !px-3.5 !text-xs"
                      >
                        Corrigir {mat.titulo}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => resetSubject(mat.key)}
                        className="btn-secondary !py-1.5 !px-3 !text-xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Refazer Matéria</span>
                      </button>
                    )}
                  </div>
                </div>

                {mat.questoes.map((q, idx) => {
                  const qid = q.id || `${mat.key}_q${idx + 1}`;
                  const mine = state.answers[qid];
                  const isRight = isMatCorr && mine === q.gabarito;
                  const optKeys = LETTERS.filter(
                    (L) => q.alternativas?.[L] != null && String(q.alternativas[L]).trim() !== ""
                  );

                  return (
                    <article
                      key={qid}
                      className={`surface rounded-2xl p-5 sm:p-6 space-y-4 border ${
                        isMatCorr
                          ? isRight
                            ? "border-emerald-500/45"
                            : "border-rose-500/45"
                          : "border-tech"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                            Questão {String(q.num || idx + 1).padStart(2, "0")}
                          </span>
                          {q.banca && (
                            <span className="text-xs text-mut font-medium">{q.banca}</span>
                          )}
                          {q.origem && (
                            <span className="px-2 py-0.5 rounded-md surface-muted font-mono text-[10px] font-bold uppercase text-sec">
                              {q.origem}
                            </span>
                          )}
                        </div>
                        {isMatCorr && (
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                              isRight
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                : "bg-rose-500/15 text-rose-600 dark:text-rose-400"
                            }`}
                          >
                            {isRight ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correta
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" /> Gabarito: {q.gabarito}
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {q.textoApoio && (
                        <div
                          className="p-4 rounded-xl surface-muted border border-tech text-xs sm:text-sm leading-relaxed text-sec space-y-2"
                          dangerouslySetInnerHTML={{
                            __html: renderRichMarkdown(q.textoApoio, `${qid}_apoio`),
                          }}
                        />
                      )}

                      <div
                        className="text-sm sm:text-[15px] leading-relaxed text-pri space-y-2"
                        dangerouslySetInnerHTML={{
                          __html: renderRichMarkdown(q.enunciado, `${qid}_enunc`),
                        }}
                      />

                      <div className="space-y-2">
                        {optKeys.map((L) => {
                          const isSelected = mine === L;
                          const isElim = !!state.eliminated[`${qid}_${L}`];
                          const isCorrectOpt = isMatCorr && L === q.gabarito;
                          const isWrongSel = isMatCorr && isSelected && L !== q.gabarito;

                          const isElimActive = isElim && !isMatCorr;
                          let cls = "border-tech hover:border-indigo-500/50";
                          if (isCorrectOpt) cls = "border-emerald-500 bg-emerald-500/10 ring-1 ring-emerald-500/30";
                          else if (isWrongSel) cls = "border-rose-500 bg-rose-500/10 ring-1 ring-rose-500/30";
                          else if (isSelected) cls = "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500/30";
                          else if (isElimActive) cls = "sim-opt-eliminated border-dashed border-slate-400/70 dark:border-slate-500/70 bg-slate-200/70 dark:bg-slate-800/75";

                          return (
                            <div key={L} className="flex items-stretch gap-2">
                              <button
                                type="button"
                                disabled={isMatCorr}
                                onClick={() => pickAnswer(qid, mat.key, L)}
                                className={`flex-1 text-left flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer disabled:cursor-default ${cls}`}
                              >
                                <span
                                  className={`w-7 h-7 rounded-lg font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 ${
                                    isCorrectOpt
                                      ? "bg-emerald-600 text-white"
                                      : isWrongSel
                                        ? "bg-rose-600 text-white"
                                        : isSelected
                                          ? "bg-indigo-600 text-white"
                                          : isElimActive
                                            ? "bg-slate-300/80 dark:bg-slate-700/90 text-slate-600 dark:text-slate-400 border border-slate-400/60 dark:border-slate-600 line-through decoration-2 decoration-slate-600 dark:decoration-slate-300"
                                            : "surface-muted text-sec"
                                  }`}
                                >
                                  {L}
                                </span>
                                <span
                                  className={`text-sm leading-relaxed flex-1 ${
                                    isElimActive
                                      ? "text-slate-500 dark:text-slate-400/75 line-through decoration-slate-600 dark:decoration-slate-300 decoration-2"
                                      : "text-pri"
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: renderInlineMarkdown(q.alternativas[L], `${qid}_opt_${L}`),
                                  }}
                                />
                                {isElimActive && (
                                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-slate-300/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 self-center">
                                    Cortada
                                  </span>
                                )}
                              </button>

                              {!isMatCorr && (
                                <button
                                  type="button"
                                  onClick={() => toggleEliminate(qid, mat.key, L)}
                                  aria-pressed={isElim}
                                  className={`px-2.5 rounded-xl border transition-colors cursor-pointer ${
                                    isElim
                                      ? "bg-slate-700 dark:bg-slate-600 text-white border-slate-700 dark:border-slate-500 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-500"
                                      : "border-tech text-mut hover:text-pri hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-500/10"
                                  }`}
                                  title={isElim ? "Restaurar alternativa" : "Riscar alternativa"}
                                >
                                  <Scissors className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {isMatCorr && q.comentario && (
                        <div className="rounded-xl p-4 border border-emerald-500/30 bg-emerald-500/[0.06] space-y-1.5">
                          <div className="text-[11px] font-mono uppercase font-extrabold text-emerald-600 dark:text-emerald-400">
                            Gabarito: {q.gabarito} — Comentário
                          </div>
                          <div
                            className="text-xs sm:text-sm leading-relaxed text-pri space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: renderRichMarkdown(q.comentario, `${qid}_comm`),
                            }}
                          />
                        </div>
                      )}
                    </article>
                  );
                })}

                {/* Rodapé de Conclusão da Matéria */}
                <div className="surface rounded-2xl p-4 sm:p-5 border border-tech flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-pri">
                      {mat.icone} Fim de {mat.titulo}
                    </div>
                    <p className="text-xs font-mono text-mut mt-0.5">
                      {isMatCorr
                        ? `${matRight} de ${mat.questoes.length} acertos (${matPct}%)`
                        : `${matAnswered} de ${mat.questoes.length} respondidas`}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 shrink-0">
                    {!isMatCorr ? (
                      <button
                        type="button"
                        onClick={() => correctSubject(mat.key)}
                        className="btn-primary !py-2 !px-4 !text-xs justify-center"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Corrigir {mat.titulo}</span>
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => resetSubject(mat.key)}
                          className="btn-secondary !py-2 !px-3.5 !text-xs justify-center"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Refazer Matéria</span>
                        </button>
                        {activeMat !== "all" && nextMat && (
                          <button
                            type="button"
                            onClick={() => {
                              setTabAndMat("questoes", nextMat.key);
                              scrollToTop();
                            }}
                            className="btn-primary !py-2 !px-4 !text-xs justify-center"
                          >
                            <span>Próxima: {getShortSubjectTitle(nextMat.key, nextMat.titulo)}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </>
                    )}

                    <button
                      type="button"
                      onClick={scrollToTop}
                      className="btn-secondary !py-2 !px-3.5 !text-xs justify-center"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                      <span>Voltar ao topo</span>
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* VISÃO 2: RESUMO TEÓRICO */}
      {activeTab === "resumo" && activeResume && (
        <article className="surface rounded-2xl p-6 sm:p-8 border border-tech space-y-6">
          <div className="pb-4 border-b border-tech">
            <h2 className="text-xl font-extrabold text-pri">
              {activeResume.icon || activeResume.icone || "📘"}{" "}
              {activeResume.title || activeResume.titulo}
            </h2>
            {(activeResume.badge || activeResume.subtitulo) && (
              <p className="text-xs sm:text-sm text-mut mt-1">
                {activeResume.badge || activeResume.subtitulo}
              </p>
            )}
          </div>

          {(activeResume.content || activeResume.conteudo) && (
            <MarkdownRenderer
              content={activeResume.content || activeResume.conteudo || ""}
              contextId={`res_${activeResumeKey}`}
            />
          )}

          {activeResume.secoes?.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {sec.titulo}
              </h3>
              <MarkdownRenderer
                content={sec.conteudo}
                contextId={`res_${activeResumeKey}_${idx}`}
              />
            </div>
          ))}
        </article>
      )}
    </div>
  );
}
