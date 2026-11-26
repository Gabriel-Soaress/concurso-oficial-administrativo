import { Award } from "lucide-react";
import type { SimuladoPayload, SimuladoState } from "@/types";

interface SimuladoResultBoxProps {
  data: SimuladoPayload;
  state: SimuladoState;
}

export function SimuladoResultBox({ data, state }: SimuladoResultBoxProps) {
  const anyCorrected =
    state.corrected || Object.values(state.correctedMaterias || {}).some(Boolean);
  if (!anyCorrected) return null;

  let totalRight = 0;
  let totalCorrectedQ = 0;

  const rows = (data.materias || []).map((m) => {
    const corrMap = state.correctedMaterias || {};
    const isCorr = Object.keys(corrMap).length > 0 ? !!corrMap[m.key] : !!state.corrected;
    const total = m.questoes.length;
    let right = 0;
    if (isCorr) {
      m.questoes.forEach((q, idx) => {
        const qid = q.id || q.qid || `${m.key}_q${idx + 1}`;
        if (state.answers[qid] === q.gabarito) right++;
      });
      totalRight += right;
      totalCorrectedQ += total;
    }
    const pct = total > 0 ? Math.round((right / total) * 100) : 0;
    return { key: m.key, titulo: m.titulo, icone: m.icone || "📘", isCorr, right, total, pct };
  });

  const overallPct = totalCorrectedQ > 0 ? Math.round((totalRight / totalCorrectedQ) * 100) : 0;

  return (
    <div className="surface rounded-2xl p-5 sm:p-6 border border-indigo-500/35 bg-gradient-to-br from-indigo-500/[0.06] to-emerald-500/[0.05] space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
              Boletim de Desempenho
            </div>
            <h3 className="text-lg font-extrabold text-pri">
              {totalRight}/{totalCorrectedQ} acertos ({overallPct}%)
            </h3>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-center ${
            overallPct >= 80
              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
              : overallPct >= 60
                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                : "bg-rose-500/15 text-rose-600 dark:text-rose-400"
          }`}
        >
          {overallPct >= 80 ? "Excelente nível de prova!" : overallPct >= 60 ? "Bom progresso — revise os erros" : "Reforçar a base dos erros"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {rows.map((r) => (
          <div key={r.key} className="surface rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs font-bold text-pri">
              <span className="truncate">
                {r.icone} {r.titulo}
              </span>
              <span className="font-mono shrink-0 text-indigo-600 dark:text-indigo-400">
                {r.isCorr ? `${r.pct}%` : "—"}
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  r.pct >= 70 ? "bg-emerald-500" : r.pct >= 50 ? "bg-amber-500" : "bg-rose-500"
                }`}
                style={{ width: r.isCorr ? `${r.pct}%` : "0%" }}
              />
            </div>
            <div className="text-[11px] font-mono text-mut">
              {r.isCorr ? `${r.right} de ${r.total} acertos` : "Ainda não corrigida"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
