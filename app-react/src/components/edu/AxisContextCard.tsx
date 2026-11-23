import type { ReactNode } from "react";
import { Compass } from "lucide-react";

interface AxisContextCardProps {
  eyebrow?: string;
  title: string;
  bridge: ReactNode;
  problemSolved: ReactNode;
  roadmap: string[];
}

/**
 * Abertura contextual obrigatória no topo de cada Eixo (100% vertical).
 * Situa o aluno antes da teoria: de onde viemos, qual problema resolvemos agora e qual o roteiro do Eixo.
 */
export function AxisContextCard({
  eyebrow = "Contexto Inicial do Eixo · Onde Estamos na Escada",
  title,
  bridge,
  problemSolved,
  roadmap,
}: AxisContextCardProps) {
  return (
    <div className="rounded-2xl border border-indigo-500/35 bg-gradient-to-br from-indigo-500/[0.08] via-sky-500/[0.04] to-transparent p-5 sm:p-6 space-y-4">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-extrabold text-indigo-700 dark:text-indigo-300">
          <Compass className="w-4 h-4 shrink-0" />
          <span>{eyebrow}</span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-pri leading-snug">{title}</h3>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl surface border border-tech p-4 space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-sky-700 dark:text-sky-300">
            1. Ponte com o que você já domina
          </div>
          <div className="text-sm sm:text-[15px] text-sec leading-relaxed">{bridge}</div>
        </div>

        <div className="rounded-xl surface border border-tech p-4 space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-300">
            2. Qual problema real este Eixo resolve?
          </div>
          <div className="text-sm sm:text-[15px] text-sec leading-relaxed">{problemSolved}</div>
        </div>

        <div className="rounded-xl surface border border-tech p-4 space-y-2.5">
          <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-amber-700 dark:text-amber-300">
            3. Trajeto deste Eixo (em ordem linear)
          </div>
          <ol className="space-y-2">
            {roadmap.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm sm:text-[15px] text-pri/90 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="min-w-0">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
