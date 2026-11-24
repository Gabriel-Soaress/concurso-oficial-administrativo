import { useState, type ReactNode } from "react";
import { CheckCircle2, RotateCcw, Target, XCircle } from "lucide-react";

export interface InlinePracticeOption {
  key: string;
  label: ReactNode;
}

export interface InlinePracticeQuestion {
  prompt: ReactNode;
  sentence?: ReactNode;
  options: InlinePracticeOption[];
  correctKey: string;
  feedbackCorrect: ReactNode;
  feedbackWrong: ReactNode;
}

export interface InlinePracticeProps {
  title: string;
  subtitle?: string;
  questions: InlinePracticeQuestion[];
}

/**
 * Parada Rápida de Fixação interativa NO MEIO do Eixo (100% vertical).
 * Garante prática imediata antes de avançar para o próximo subconceito.
 */
export function InlinePractice({ title, subtitle, questions }: InlinePracticeProps) {
  const [selected, setSelected] = useState<Record<number, string>>({});

  const answeredCount = Object.keys(selected).length;
  const correctCount = questions.reduce(
    (acc, q, idx) => (selected[idx] === q.correctKey ? acc + 1 : acc),
    0,
  );

  const handleChoose = (qIdx: number, optKey: string) => {
    setSelected((prev) => {
      if (prev[qIdx]) return prev;
      return { ...prev, [qIdx]: optKey };
    });
  };

  const handleReset = () => {
    setSelected({});
  };

  return (
    <div className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] via-orange-500/[0.03] to-transparent overflow-hidden max-w-full">
      <div className="px-4 sm:px-5 py-3.5 border-b border-amber-500/25 flex items-center justify-between gap-3 flex-wrap">
        <div className="space-y-0.5 min-w-0">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-extrabold text-amber-700 dark:text-amber-300">
            <Target className="w-4 h-4 shrink-0" />
            <span>Parada Rápida · Fixe Antes de Avançar</span>
          </div>
          <h4 className="text-sm sm:text-base font-extrabold text-pri break-words">{title}</h4>
          {subtitle && <p className="text-xs sm:text-sm text-sec leading-snug">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-200 font-mono text-xs font-bold">
            {answeredCount}/{questions.length} · {correctCount} acerto{correctCount === 1 ? "" : "s"}
          </span>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary !py-1 !px-2.5 !text-xs inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-5">
        {questions.map((q, qIdx) => {
          const chosen = selected[qIdx];
          const isAnswered = Boolean(chosen);
          const isCorrect = chosen === q.correctKey;

          return (
            <div
              key={qIdx}
              className="rounded-xl surface border border-tech p-4 space-y-3.5 min-w-0"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">
                  Treino Rápido {qIdx + 1} de {questions.length}
                </div>
                <div className="text-sm sm:text-[15px] font-semibold text-pri leading-relaxed">
                  {q.prompt}
                </div>
                {q.sentence && (
                  <div className="edu-focus-scope rounded-xl border-l-4 border-l-indigo-500 bg-indigo-500/[0.06] px-4 py-3 text-[15px] sm:text-base font-medium text-pri leading-relaxed">
                    {q.sentence}
                  </div>
                )}
              </div>

              {/* Alternativas empilhadas em 1 coluna */}
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isThisChosen = chosen === opt.key;
                  const isThisCorrect = opt.key === q.correctKey;

                  let btnStyle =
                    "border-tech surface-muted hover:border-indigo-500/60 hover:bg-indigo-500/[0.05] text-pri";
                  let badgeStyle =
                    "bg-slate-500/15 text-sec";

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle =
                        "border-emerald-500/60 bg-emerald-500/12 text-pri font-semibold";
                      badgeStyle = "bg-emerald-600 text-white";
                    } else if (isThisChosen && !isCorrect) {
                      btnStyle = "border-rose-500/60 bg-rose-500/12 text-pri";
                      badgeStyle = "bg-rose-600 text-white";
                    } else {
                      btnStyle = "border-tech/60 surface-muted opacity-70 text-sec";
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleChoose(qIdx, opt.key)}
                      className={`w-full min-h-[44px] text-left rounded-xl px-3.5 py-2.5 border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-full font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}
                        >
                          {opt.key}
                        </span>
                        <span className="edu-focus-scope text-sm sm:text-[15px] leading-snug break-words">
                          {opt.label}
                        </span>
                      </div>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      )}
                      {isAnswered && isThisChosen && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div
                  className={`rounded-xl p-3.5 border text-sm sm:text-[15px] leading-relaxed space-y-1 ${
                    isCorrect
                      ? "border-emerald-500/40 bg-emerald-500/[0.08] text-pri"
                      : "border-rose-500/40 bg-rose-500/[0.08] text-pri"
                  }`}
                >
                  <div
                    className={`text-xs font-mono uppercase font-extrabold ${
                      isCorrect
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-rose-700 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? "✅ Acertou! Entendeu a lógica:" : "❌ Quase lá — veja a lógica correta:"}
                  </div>
                  <div className="text-pri/90">{isCorrect ? q.feedbackCorrect : q.feedbackWrong}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
