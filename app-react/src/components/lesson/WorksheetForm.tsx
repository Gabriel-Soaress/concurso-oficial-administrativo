import { CheckCircle2, Eye, EyeOff, RotateCcw, XCircle } from "lucide-react";
import { isWorksheetAnswerCorrect, type ParsedWorksheetData } from "@/lib/worksheetParser";
import { renderInlineMarkdown } from "@/lib/markdown";
import { useProgress } from "@/contexts/ProgressContext";

interface WorksheetFormProps {
  docId: string;
  data: ParsedWorksheetData;
}

export function WorksheetForm({ docId, data }: WorksheetFormProps) {
  const { getQuizDoc, updateQuizDoc } = useProgress();
  const state = getQuizDoc(docId);

  const inputs = state.wsInputs || {};
  const checked = state.wsChecked || {};
  const revealedAll = !!state.wsRevealedAll;

  const setInput = (num: number, value: string) => {
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      wsInputs: { ...(prev.wsInputs || {}), [String(num)]: value },
    }));
  };

  const checkSingle = (num: number) => {
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      wsChecked: { ...(prev.wsChecked || {}), [String(num)]: true },
    }));
  };

  const checkAll = () => {
    updateQuizDoc(docId, (prev) => {
      const next: Record<string, boolean> = { ...(prev.wsChecked || {}) };
      data.allItems.forEach((it) => {
        next[String(it.num)] = true;
      });
      return { ...prev, wsChecked: next, wsSubmittedAll: true };
    });
  };

  const toggleRevealAll = () => {
    updateQuizDoc(docId, (prev) => ({ ...prev, wsRevealedAll: !prev.wsRevealedAll }));
  };

  const resetAll = () => {
    updateQuizDoc(docId, (prev) => ({
      ...prev,
      wsInputs: {},
      wsChecked: {},
      wsSubmittedAll: false,
      wsRevealedAll: false,
    }));
  };

  const checkedItems = data.allItems.filter((it) => !!checked[String(it.num)]);
  const correctItems = checkedItems.filter((it) =>
    isWorksheetAnswerCorrect(inputs[String(it.num)] || "", it)
  );

  return (
    <div className="space-y-6">
      <div className="surface rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-tech">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-pri">
            Caderno Prático Interativo ({data.allItems.length} exercícios)
          </h3>
          <p className="text-xs sm:text-sm text-sec">
            Digite frações (ex: 3/4), decimais (ex: 0,75) ou números mistos (ex: 1 7/24).
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          {checkedItems.length > 0 && (
            <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              {correctItems.length}/{checkedItems.length} acertos
            </span>
          )}
          <button type="button" onClick={checkAll} className="btn-primary !py-2 !px-3.5 !text-xs">
            Corrigir Tudo
          </button>
          <button type="button" onClick={toggleRevealAll} className="btn-secondary !py-2 !px-3 !text-xs">
            {revealedAll ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{revealedAll ? "Ocultar Gabarito" : "Ver Gabarito"}</span>
          </button>
          <button type="button" onClick={resetAll} className="btn-secondary !py-2 !px-3 !text-xs">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpar</span>
          </button>
        </div>
      </div>

      {data.categories.map((cat, idx) => (
        <section key={idx} className="surface rounded-2xl p-5 space-y-4 border border-tech">
          <h4
            className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 pb-2 border-b border-tech"
            dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(cat.title, `ws_cat_${idx}`) }}
          />
          <div className="space-y-3">
            {cat.items.map((item) => {
              const val = inputs[String(item.num)] || "";
              const isChecked = !!checked[String(item.num)];
              const ok = isChecked && isWorksheetAnswerCorrect(val, item);

              return (
                <div
                  key={item.num}
                  className={`rounded-xl p-3.5 border transition-colors space-y-2.5 ${
                    isChecked
                      ? ok
                        ? "border-emerald-500/50 bg-emerald-500/[0.04]"
                        : "border-rose-500/50 bg-rose-500/[0.04]"
                      : "border-tech surface-muted"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                    <div className="flex items-baseline gap-2 text-sm text-pri">
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                        {item.num}.
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: renderInlineMarkdown(item.promptMd, `ws_p_${item.num}`),
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => setInput(item.num, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") checkSingle(item.num);
                        }}
                        placeholder="Sua resposta..."
                        className="input-tech !py-1.5 !px-3 !w-36 sm:!w-40 font-mono text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => checkSingle(item.num)}
                        className="btn-secondary !py-1.5 !px-3 !text-xs"
                      >
                        OK
                      </button>
                      {isChecked &&
                        (ok ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                        ))}
                    </div>
                  </div>

                  {(isChecked || revealedAll) && item.explanationMd && (
                    <div
                      className="text-xs text-sec pt-2 border-t border-tech/60 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: renderInlineMarkdown(item.explanationMd, `ws_exp_${item.num}`),
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
