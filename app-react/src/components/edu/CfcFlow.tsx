import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CfcFlowProps {
  title?: string;
  causa: { label?: string; content: ReactNode };
  fato: { label?: string; content: ReactNode };
  consequencia: { label?: string; content: ReactNode };
}

export function CfcFlow({
  title = "Conexão Lógica: Causa ➔ Fato ➔ Consequência",
  causa,
  fato,
  consequencia,
}: CfcFlowProps) {
  const cards = [
    {
      pill: "1. Origem",
      label: causa.label || "Causa",
      content: causa.content,
      cls: "border-amber-500/35 bg-amber-500/[0.06]",
      labelCls: "text-amber-700 dark:text-amber-400",
    },
    {
      pill: "2. Marco",
      label: fato.label || "Fato",
      content: fato.content,
      cls: "border-indigo-500/35 bg-indigo-500/[0.06]",
      labelCls: "text-indigo-700 dark:text-indigo-400",
    },
    {
      pill: "3. Impacto",
      label: consequencia.label || "Consequência",
      content: consequencia.content,
      cls: "border-emerald-500/35 bg-emerald-500/[0.06]",
      labelCls: "text-emerald-700 dark:text-emerald-400",
    },
  ];

  return (
    <div className="surface rounded-2xl p-5 border border-tech space-y-4">
      <div className="text-xs font-mono uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        {cards.map((c, idx) => (
          <div key={idx} className={`rounded-xl p-4 border ${c.cls} flex flex-col gap-2 relative`}>
            <div className="flex items-center justify-between gap-2">
              <span className={`text-xs font-extrabold uppercase tracking-wide ${c.labelCls}`}>
                {c.label}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full surface-muted text-mut">
                {c.pill}
              </span>
            </div>
            <div className="text-sm text-pri leading-relaxed">{c.content}</div>
            {idx < 2 && (
              <ArrowRight className="hidden md:block w-4 h-4 text-mut absolute -right-3.5 top-1/2 -translate-y-1/2 z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
