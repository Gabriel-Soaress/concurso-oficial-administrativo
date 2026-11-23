import type { ReactNode } from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";

interface TrapAlertProps {
  title?: string;
  trap: ReactNode;
  escape: ReactNode;
}

export function TrapAlert({
  title = "Pegadinha Clássica da Banca ACCESS",
  trap,
  escape,
}: TrapAlertProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-amber-500/40 bg-amber-500/[0.06] space-y-0">
      <div className="px-5 py-3 bg-amber-500/15 border-b border-amber-500/25 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
        <span className="text-xs font-mono uppercase tracking-wider font-extrabold text-amber-800 dark:text-amber-300">
          {title}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5">
        <div className="rounded-xl p-3.5 bg-rose-500/[0.06] border border-rose-500/25 space-y-1.5">
          <div className="text-[11px] font-mono uppercase font-bold text-rose-600 dark:text-rose-400">
            ❌ 1. Como a banca monta a armadilha
          </div>
          <div className="text-sm sm:text-[15px] text-pri leading-relaxed">{trap}</div>
        </div>

        <div className="rounded-xl p-3.5 bg-emerald-500/[0.07] border border-emerald-500/30 space-y-1.5">
          <div className="text-[11px] font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>2. Teste de 5 Segundos para escapar na hora</span>
          </div>
          <div className="text-sm sm:text-[15px] text-pri leading-relaxed">{escape}</div>
        </div>
      </div>
    </div>
  );
}
