import { CheckCircle2, ChevronDown, ChevronUp, RotateCcw, Scissors, XCircle } from "lucide-react";
import type { MCQuestion } from "@/types";
import { useProgress } from "@/contexts/ProgressContext";
import { renderInlineMarkdown, renderRichMarkdown } from "@/lib/markdown";

interface MCQuestionListProps {
  docId: string;
  scopeKey: string; // ex: "final" ou "eixo-1" para isolar estado de cada checkpoint
  questions: MCQuestion[];
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function MCQuestionList({
  docId,
  scopeKey,
  questions,
  title,
  subtitle,
  compact = false,
}: MCQuestionListProps) {
  const { getQuizDoc, updateQuizDoc } = useProgress();
  const docState = getQuizDoc(docId);

  const answers = docState.mcAnswers || {};
  const checkedMap = docState.mcChecked || {};
  const eliminated = docState.mcEliminated || {};
  const openComm = docState.mcOpenCommentary || {};

  const qKey = (num: string) => `${scopeKey}_q${num}`;

  const selectOption = (num: string, letter: string) => {
    const k = qKey(num);
    if (checkedMap[k]) return;
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      mcAnswers: {
        ...(prev.mcAnswers || {}),
        [k]: prev.mcAnswers?.[k] === letter ? "" : letter,
      },
    }));
  };

  const toggleEliminate = (num: string, letter: string) => {
    const k = qKey(num);
    if (checkedMap[k]) return;
    const eKey = `${k}_${letter}`;
    updateQuizDoc(docId, (prev) => {
      const nextElim = { ...(prev.mcEliminated || {}), [eKey]: !prev.mcEliminated?.[eKey] };
      const nextAns = { ...(prev.mcAnswers || {}) };
      if (nextElim[eKey] && nextAns[k] === letter) {
        nextAns[k] = "";
      }
      return { ...prev, mcEliminated: nextElim, mcAnswers: nextAns };
    });
  };

  const checkSingle = (num: string) => {
    const k = qKey(num);
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      mcChecked: { ...(prev.mcChecked || {}), [k]: true },
      mcOpenCommentary: { ...(prev.mcOpenCommentary || {}), [k]: true },
    }));
  };

  const resetSingle = (num: string) => {
    const k = qKey(num);
    updateQuizDoc(docId, (prev) => {
      const nextAns = { ...(prev.mcAnswers || {}) };
      const nextChk = { ...(prev.mcChecked || {}) };
      const nextComm = { ...(prev.mcOpenCommentary || {}) };
      delete nextAns[k];
      delete nextChk[k];
      delete nextComm[k];
      return { ...prev, mcAnswers: nextAns, mcChecked: nextChk, mcOpenCommentary: nextComm };
    });
  };

  const toggleCommentary = (num: string) => {
    const k = qKey(num);
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      mcOpenCommentary: { ...(prev.mcOpenCommentary || {}), [k]: !prev.mcOpenCommentary?.[k] },
    }));
  };

  const checkAll = () => {
    updateQuizDoc(docId, (prev) => {
      const nextChk = { ...(prev.mcChecked || {}) };
      const nextComm = { ...(prev.mcOpenCommentary || {}) };
      questions.forEach((q) => {
        const k = qKey(q.num);
        nextChk[k] = true;
        nextComm[k] = true;
      });
      return { ...prev, mcChecked: nextChk, mcOpenCommentary: nextComm };
    });
  };

  const resetAll = () => {
    updateQuizDoc(docId, (prev) => {
      const nextAns = { ...(prev.mcAnswers || {}) };
      const nextChk = { ...(prev.mcChecked || {}) };
      const nextComm = { ...(prev.mcOpenCommentary || {}) };
      const nextElim = { ...(prev.mcEliminated || {}) };
      questions.forEach((q) => {
        const k = qKey(q.num);
        delete nextAns[k];
        delete nextChk[k];
        delete nextComm[k];
        Object.keys(nextElim).forEach((ek) => {
          if (ek.startsWith(`${k}_`)) delete nextElim[ek];
        });
      });
      return {
        ...prev,
        mcAnswers: nextAns,
        mcChecked: nextChk,
        mcOpenCommentary: nextComm,
        mcEliminated: nextElim,
      };
    });
  };

  const answeredCount = questions.filter((q) => !!answers[qKey(q.num)]).length;
  const checkedCount = questions.filter((q) => !!checkedMap[qKey(q.num)]).length;
  const correctCount = questions.filter((q) => {
    const k = qKey(q.num);
    return checkedMap[k] && answers[k] === q.answer;
  }).length;

  const pct = checkedCount > 0 ? Math.round((correctCount / checkedCount) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Header do Bloco de Questões */}
      {(title || subtitle) && (
        <div className="surface rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-tech">
          <div className="space-y-1">
            {title && <h3 className="text-base sm:text-lg font-extrabold text-pri">{title}</h3>}
            {subtitle && <p className="text-xs sm:text-sm text-sec">{subtitle}</p>}
          </div>
          <div className="flex items-center flex-wrap gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-xl surface-muted font-mono text-xs font-bold text-sec">
              {answeredCount}/{questions.length} marcadas
            </span>
            {checkedCount > 0 && (
              <span
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold ${
                  pct >= 70
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                    : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                }`}
              >
                {correctCount}/{checkedCount} acertos ({pct}%)
              </span>
            )}
            <button type="button" onClick={checkAll} className="btn-primary !py-2 !px-3.5 !text-xs">
              Corrigir Tudo
            </button>
            {checkedCount > 0 && (
              <button
                type="button"
                onClick={resetAll}
                className="btn-secondary !py-2 !px-3 !text-xs"
                title="Refazer questões"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Lista de Questões */}
      <div className="space-y-4">
        {questions.map((q) => {
          const k = qKey(q.num);
          const selected = answers[k] || "";
          const isChecked = !!checkedMap[k];
          const isRight = isChecked && selected === q.answer;
          const showComm = !!openComm[k];
          const letters = Object.keys(q.options);

          return (
            <article
              key={k}
              className={`surface rounded-2xl ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6"} space-y-4 border transition-colors ${
                isChecked
                  ? isRight
                    ? "border-emerald-500/45"
                    : "border-rose-500/45"
                  : "border-tech"
              }`}
            >
              {/* Cabeçalho da Questão */}
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                      {q.header}
                    </span>
                    {isChecked && (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                          isRight
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : "bg-rose-500/15 text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {isRight ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Acertou!
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Gabarito: {q.answer}
                          </>
                        )}
                      </span>
                    )}
                  </div>
                  {q.banca && (
                    <div
                      className="text-xs text-mut"
                      dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(q.banca, `${k}_meta`) }}
                    />
                  )}
                </div>

                {isChecked && (
                  <button
                    type="button"
                    onClick={() => resetSingle(q.num)}
                    className="text-xs font-medium text-mut hover:text-pri inline-flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer</span>
                  </button>
                )}
              </div>

              {/* Enunciado */}
              <div
                className="mc-question-scope text-sm sm:text-[15px] leading-relaxed text-pri space-y-2"
                dangerouslySetInnerHTML={{ __html: renderRichMarkdown(q.statement, `${k}_stmt`) }}
              />

              {/* Alternativas */}
              <div className="space-y-2">
                {letters.map((L) => {
                  const isSelected = selected === L;
                  const isElim = !!eliminated[`${k}_${L}`];
                  const isCorrectOpt = isChecked && L === q.answer;
                  const isWrongSelected = isChecked && isSelected && L !== q.answer;

                  let stateClasses =
                    "border-tech hover:border-indigo-500/50 hover:bg-indigo-500/[0.03]";
                  if (isCorrectOpt) {
                    stateClasses = "border-emerald-500 bg-emerald-500/10 ring-1 ring-emerald-500/30";
                  } else if (isWrongSelected) {
                    stateClasses = "border-rose-500 bg-rose-500/10 ring-1 ring-rose-500/30";
                  } else if (isSelected) {
                    stateClasses = "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500/30";
                  }

                  return (
                    <div key={L} className="flex items-stretch gap-2">
                      <button
                        type="button"
                        onClick={() => selectOption(q.num, L)}
                        disabled={isChecked}
                        className={`flex-1 text-left flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer disabled:cursor-default ${stateClasses} ${
                          isElim && !isChecked ? "opacity-45 line-through" : ""
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 ${
                            isCorrectOpt
                              ? "bg-emerald-600 text-white"
                              : isWrongSelected
                                ? "bg-rose-600 text-white"
                                : isSelected
                                  ? "bg-indigo-600 text-white"
                                  : "surface-muted text-sec"
                          }`}
                        >
                          {L}
                        </span>
                        <span
                          className="mc-question-scope text-sm leading-relaxed text-pri flex-1"
                          dangerouslySetInnerHTML={{
                            __html: renderInlineMarkdown(q.options[L], `${k}_opt_${L}`),
                          }}
                        />
                      </button>

                      {!isChecked && (
                        <button
                          type="button"
                          onClick={() => toggleEliminate(q.num, L)}
                          title={isElim ? "Restaurar alternativa" : "Riscar/eliminar alternativa"}
                          className={`px-2.5 rounded-xl border border-tech flex items-center justify-center cursor-pointer transition-colors ${
                            isElim
                              ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40"
                              : "text-mut hover:text-pri hover:bg-slate-200/50 dark:hover:bg-slate-800"
                          }`}
                        >
                          <Scissors className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Ações da Questão */}
              <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
                {!isChecked ? (
                  <button
                    type="button"
                    onClick={() => checkSingle(q.num)}
                    disabled={!selected}
                    className="btn-primary !py-2 !px-4 !text-xs"
                  >
                    Verificar Resposta
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleCommentary(q.num)}
                    className="btn-secondary !py-1.5 !px-3 !text-xs"
                  >
                    {showComm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    <span>{showComm ? "Ocultar Comentário" : "Ver Gabarito Comentado"}</span>
                  </button>
                )}
              </div>

              {/* Gabarito Comentado */}
              {isChecked && showComm && q.commentary && (
                <div className="rounded-xl p-4 border border-emerald-500/30 bg-emerald-500/[0.06] space-y-2">
                  <div className="text-[11px] font-mono uppercase font-extrabold text-emerald-600 dark:text-emerald-400">
                    Gabarito Oficial: Letra {q.answer} — Comentário Detalhado
                  </div>
                  <div
                    className="text-xs sm:text-sm leading-relaxed text-pri space-y-2"
                    dangerouslySetInnerHTML={{ __html: renderRichMarkdown(q.commentary, `${k}_comm`) }}
                  />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
