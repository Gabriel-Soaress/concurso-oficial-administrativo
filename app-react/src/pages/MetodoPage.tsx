import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CalendarDays,
  CheckSquare,
  Clock,
  FileText,
  Layers,
  Target,
  Terminal,
} from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { computeStudyAverages, formatStudyDuration } from "@/lib/studyTime";

export function MetodoPage() {
  const { completedBlocksCount, totalBlocksCount, completedExamsCount, studyTime } = useProgress();
  const pct = totalBlocksCount > 0 ? Math.round((completedBlocksCount / totalBlocksCount) * 100) : 0;
  const avgStats = computeStudyAverages(studyTime);

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Editorial */}
      <section className="hero-banner rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-mono font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>Plano Estratégico · 90 Dias · Instituto ACCESS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Oficial Administrativo: Estudo Guiado pela Lógica de Origem
          </h1>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
            Uma trilha estruturada em 12 semanas progressivas, sem decoreba cega. Cada aula é dividida em{" "}
            <strong className="text-white">Eixos com checkpoints</strong>, seguida de questões reais e adaptadas no
            padrão da banca Instituto ACCESS.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/cronograma"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm shadow-lg hover:bg-indigo-50 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Abrir Trilha de 12 Semanas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/simulados"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/25 backdrop-blur-sm transition-colors"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Ir para Simulados</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Painel de Métricas */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="surface rounded-2xl p-5 space-y-1">
          <div className="text-xs font-mono uppercase text-mut">Progresso da Trilha</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {pct}%
          </div>
          <div className="text-xs text-sec">
            {completedBlocksCount} de {totalBlocksCount} blocos concluídos
          </div>
        </div>

        <div className="surface rounded-2xl p-5 space-y-1">
          <div className="text-xs font-mono uppercase text-mut">Acervo de Provas</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-pri">
            {completedExamsCount}
            <span className="text-base font-semibold text-mut">/93</span>
          </div>
          <div className="text-xs text-sec">+ 21 provas oficiais ACCESS</div>
        </div>

        <div
          className="surface rounded-2xl p-5 space-y-1"
          title={
            avgStats.totalSeconds > 0
              ? `Total acumulado: ${formatStudyDuration(avgStats.totalSeconds)} | Hoje: ${formatStudyDuration(avgStats.todaySeconds)} | Média/sessão: ${formatStudyDuration(avgStats.avgPerSessionSeconds)}`
              : "Medição automática ao estudar aulas, eixos, questões e simulados"
          }
        >
          <div className="text-xs font-mono uppercase text-mut">
            {avgStats.avgPerDaySeconds > 0 ? "Média de Estudo" : "Meta Diária"}
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-pri">
            {avgStats.avgPerDaySeconds > 0 ? formatStudyDuration(avgStats.avgPerDaySeconds) : "1h30"}
          </div>
          <div className="text-xs text-sec">
            {avgStats.avgPerDaySeconds > 0
              ? `Por dia (${avgStats.activeDays}d) · Meta 1h30`
              : "60 min teoria + 30 min questões"}
          </div>
        </div>

        <div className="surface rounded-2xl p-5 space-y-1">
          <div className="text-xs font-mono uppercase text-mut">Sábados</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            12
          </div>
          <div className="text-xs text-sec">Simulados cronometrados fixos</div>
        </div>
      </section>

      {/* Pilares do Método */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-pri">Como o Método Funciona</h2>
          <p className="text-sm text-sec mt-1">
            Quatro engrenagens simples que eliminam a sensação de “li tudo e esqueci na hora da prova”.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-pri">1. Aulas Divididas por Eixos</h3>
            <p className="text-sm text-sec leading-relaxed">
              Sem rolagem infinita: você abre o sumário da aula, inicia pelo Eixo 1, resolve o checkpoint imediato e
              avança passo a passo acompanhando exatamente quantas etapas faltam.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-pri">2. Lógica de Origem & Síntese Feynman</h3>
            <p className="text-sm text-sec leading-relaxed">
              Toda regra de Português, fórmula de Matemática ou rotina de Prefeitura começa pelo “porquê” real antes
              de qualquer macete, fechando com resumo de 3 linhas para o caderno.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-pri">3. Padrão Instituto ACCESS</h3>
            <p className="text-sm text-sec leading-relaxed">
              Treino calibrado em 4 alternativas (A–D), comandos em CAIXA ALTA (CORRETA, INCORRETA, EXCETO) e estudos
              de caso práticos da rotina de repartição municipal.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-pri">4. Simulados + Engenharia Reversa</h3>
            <p className="text-sm text-sec leading-relaxed">
              Todo sábado é reservado para prova cronometrada e mapeamento de erros, transformando cada deslize em um
              ponto ganho no dia do concurso.
            </p>
          </div>
        </div>
      </section>

      {/* Atalhos Rápidos */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/cronograma?mes=1" className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-indigo-500 shrink-0" />
            <div>
              <div className="text-sm font-bold text-pri">Trilha Semanal</div>
              <div className="text-xs text-mut">Aulas e checklists</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-mut" />
        </Link>

        <Link to="/provas?tab=access" className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <div className="text-sm font-bold text-pri">Provas ACCESS</div>
              <div className="text-xs text-mut">PDFs e gabaritos</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-mut" />
        </Link>

        <Link to="/gerador" className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <div className="text-sm font-bold text-pri">Gerador de Prompt</div>
              <div className="text-xs text-mut">IA Web & Agente Local</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-mut" />
        </Link>
      </section>
    </div>
  );
}
