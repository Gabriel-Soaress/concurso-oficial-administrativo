import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, RotateCcw } from "lucide-react";
import { loadSimuladosRegistry } from "@/services/simuladosLoader";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/contexts/ToastContext";
import type { SimuladoRegistryEntry } from "@/types";

export function SimuladosHubPage() {
  const { getSimuladoState, saveSimuladoState } = useProgress();
  const { showToast } = useToast();
  const [registry, setRegistry] = useState<SimuladoRegistryEntry[] | null>(null);

  useEffect(() => {
    let active = true;
    loadSimuladosRegistry()
      .then((list) => {
        if (active) setRegistry(list);
      })
      .catch(() => {
        if (active) setRegistry([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleReset = (sim: SimuladoRegistryEntry) => {
    if (!window.confirm(`Zerar todas as respostas e o cronômetro de "${sim.titulo}"?`)) return;
    saveSimuladoState(sim.id, {
      answers: {},
      eliminated: {},
      corrected: false,
      correctedMaterias: {},
      elapsedSeconds: 0,
    });
    showToast("Simulado zerado com sucesso.", "info");
  };

  if (!registry) {
    return (
      <div className="py-16 text-center space-y-3">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-mut">Carregando catálogo de simulados...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
          Treino Cronometrado · Padrão Instituto ACCESS
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri">
          Central de Simulados
        </h1>
        <p className="text-sm text-sec">
          Cada simulado tem URL própria, cronômetro manual, eliminação de alternativas e resumos teóricos integrados.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {registry.map((sim) => {
          const state = getSimuladoState(sim.id);
          const data = sim.getData();
          const answeredCount = Object.values(state.answers || {}).filter(Boolean).length;
          let totalQ = sim.totalQuestoes;
          let rightCount = 0;

          if (data?.materias) {
            totalQ = data.materias.reduce((acc, m) => acc + m.questoes.length, 0);
            data.materias.forEach((m) => {
              const isCorr = state.corrected || !!state.correctedMaterias?.[m.key];
              if (!isCorr) return;
              m.questoes.forEach((q, idx) => {
                const qid = q.id || `${m.key}_q${idx + 1}`;
                if (state.answers[qid] === q.gabarito) rightCount++;
              });
            });
          }

          const anyCorr = state.corrected || Object.values(state.correctedMaterias || {}).some(Boolean);
          const progressPct = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;

          return (
            <article
              key={sim.id}
              className="surface-card rounded-2xl p-6 border border-tech flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sim.icone}</span>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-bold uppercase">
                        {sim.badge} · {sim.semanas}
                      </span>
                      <h2 className="text-lg font-extrabold text-pri mt-1 leading-snug">{sim.titulo}</h2>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-sec leading-relaxed">{sim.descricao}</p>

                {/* Chips das matérias */}
                <div className="flex flex-wrap gap-1.5">
                  {sim.materias.map((m) => (
                    <span
                      key={m.key}
                      className="px-2.5 py-1 rounded-lg surface-muted text-[11px] font-semibold text-sec"
                    >
                      {m.icone} {m.titulo} ({m.count})
                    </span>
                  ))}
                </div>

                {/* Progresso */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-mut">
                      {answeredCount}/{totalQ} respondidas ({progressPct}%)
                    </span>
                    <span className="inline-flex items-center gap-1 text-mut">
                      <Clock className="w-3.5 h-3.5" />
                      {Math.floor(sim.tempoSugeridoMinutos / 60)}h
                      {String(sim.tempoSugeridoMinutos % 60).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full transition-all"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  {anyCorr && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>
                        {rightCount} acertos registrados até o momento
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-tech">
                <Link to={`/simulados/${sim.id}`} className="btn-primary flex-1 !py-2.5">
                  <span>{answeredCount > 0 ? "Continuar Simulado" : "Iniciar Simulado"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {answeredCount > 0 && (
                  <button
                    type="button"
                    onClick={() => handleReset(sim)}
                    className="btn-secondary !py-2.5 !px-3"
                    title="Zerar simulado"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
