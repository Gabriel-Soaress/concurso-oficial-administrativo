import type { ReactNode } from "react";
import { BookOpen, CheckCircle2, XCircle } from "lucide-react";

export type ExampleAccent = "indigo" | "emerald" | "amber" | "sky" | "purple" | "rose";

export interface ExampleTag {
  label: string;
  value: string;
  color?: ExampleAccent;
}

export interface ExampleSentenceCase {
  sentence: ReactNode;
  verdict?: "right" | "wrong" | "neutral";
  tags?: ExampleTag[];
  explanation: ReactNode;
}

export interface ExampleShowcaseItem {
  level: string;
  accent?: ExampleAccent;
  intro?: ReactNode;
  cases: ExampleSentenceCase[];
}

export interface ExampleShowcaseProps {
  title?: string;
  items: ExampleShowcaseItem[];
}

const ACCENT_MAP: Record<
  ExampleAccent,
  { border: string; badge: string; box: string; pill: string; pillLabel: string }
> = {
  indigo: {
    border: "border-indigo-500/35",
    badge: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
    box: "border-l-indigo-500 bg-indigo-500/[0.06]",
    pill: "border-indigo-500/30 bg-indigo-500/[0.08] text-pri",
    pillLabel: "text-indigo-700 dark:text-indigo-300",
  },
  emerald: {
    border: "border-emerald-500/35",
    badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    box: "border-l-emerald-500 bg-emerald-500/[0.06]",
    pill: "border-emerald-500/30 bg-emerald-500/[0.08] text-pri",
    pillLabel: "text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    border: "border-amber-500/35",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
    box: "border-l-amber-500 bg-amber-500/[0.06]",
    pill: "border-amber-500/30 bg-amber-500/[0.08] text-pri",
    pillLabel: "text-amber-800 dark:text-amber-300",
  },
  sky: {
    border: "border-sky-500/35",
    badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
    box: "border-l-sky-500 bg-sky-500/[0.06]",
    pill: "border-sky-500/30 bg-sky-500/[0.08] text-pri",
    pillLabel: "text-sky-700 dark:text-sky-300",
  },
  purple: {
    border: "border-purple-500/35",
    badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300",
    box: "border-l-purple-500 bg-purple-500/[0.06]",
    pill: "border-purple-500/30 bg-purple-500/[0.08] text-pri",
    pillLabel: "text-purple-700 dark:text-purple-300",
  },
  rose: {
    border: "border-rose-500/35",
    badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
    box: "border-l-rose-500 bg-rose-500/[0.06]",
    pill: "border-rose-500/30 bg-rose-500/[0.08] text-pri",
    pillLabel: "text-rose-700 dark:text-rose-300",
  },
};

/**
 * Vitrine 100% vertical para exemplos progressivos:
 * - Frase isolada em faixa grande de alto contraste
 * - Pílulas visuais opcionais desmontando os papéis das palavras
 * - Leitura guiada logo abaixo em linguagem simples de professor
 */
export function ExampleShowcase({ title = "Exemplos Progressivos Guiados", items }: ExampleShowcaseProps) {
  return (
    <div className="space-y-4 max-w-full">
      {title && (
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-mut px-1">
          <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span>{title}</span>
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, idx) => {
          const theme = ACCENT_MAP[item.accent ?? "indigo"];
          return (
            <div
              key={idx}
              className={`rounded-2xl surface-muted border ${theme.border} p-4 sm:p-5 space-y-4 min-w-0 max-w-full`}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className={`inline-block px-2.5 py-1 rounded-lg font-mono text-[11px] font-extrabold uppercase tracking-wider ${theme.badge}`}
                >
                  {item.level}
                </span>
              </div>

              {item.intro && (
                <div className="text-sm sm:text-[15px] text-sec leading-relaxed">{item.intro}</div>
              )}

              <div className="space-y-3.5">
                {item.cases.map((c, cIdx) => {
                  const boxClass =
                    c.verdict === "right"
                      ? ACCENT_MAP.emerald.box
                      : c.verdict === "wrong"
                        ? ACCENT_MAP.rose.box
                        : theme.box;

                  return (
                    <div
                      key={cIdx}
                      className="rounded-xl surface border border-tech p-3.5 sm:p-4 space-y-3 min-w-0"
                    >
                      {/* Faixa de destaque da frase-exemplo */}
                      <div className={`rounded-xl border-l-4 ${boxClass} px-4 py-3 space-y-1.5`}>
                        {c.verdict === "right" && (
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>Construção Correta</span>
                          </div>
                        )}
                        {c.verdict === "wrong" && (
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                            <XCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>Armadilha / Forma Errada</span>
                          </div>
                        )}
                        <div className="edu-focus-scope text-[15px] sm:text-[17px] font-medium text-pri leading-relaxed break-words">
                          {c.sentence}
                        </div>
                      </div>

                      {/* Etiquetas desmontando as peças da frase */}
                      {c.tags && c.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {c.tags.map((tg, tIdx) => {
                            const tagTheme = ACCENT_MAP[tg.color ?? item.accent ?? "indigo"];
                            return (
                              <div
                                key={tIdx}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs ${tagTheme.pill}`}
                              >
                                <span
                                  className={`font-mono text-[10px] font-extrabold uppercase tracking-wider ${tagTheme.pillLabel}`}
                                >
                                  {tg.label}:
                                </span>
                                <span className="font-bold">{tg.value}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Leitura guiada logo abaixo */}
                      <div className="pt-2.5 border-t border-tech/60 text-sm sm:text-[15px] text-sec leading-relaxed space-y-1.5 break-words">
                        {c.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
