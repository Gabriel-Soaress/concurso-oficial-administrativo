import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  ListChecks,
  Play,
  Sparkles,
} from "lucide-react";
import type { ParsedLessonStepper } from "@/types";
import { renderInlineMarkdown } from "@/lib/markdown";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface LessonSummaryViewProps {
  docId: string;
  title: string;
  baseUrl: string;
  parsed: ParsedLessonStepper;
  completedAxes: string[];
  onSwitchContinuousMode: () => void;
}

export function LessonSummaryView({
  docId,
  title,
  baseUrl,
  parsed,
  completedAxes,
  onSwitchContinuousMode,
}: LessonSummaryViewProps) {
  const firstPendingAxis = parsed.axes.find((a) => !completedAxes.includes(a.id));
  const doneCount = parsed.axes.filter((a) => completedAxes.includes(a.id)).length;
  const allAxesDone = doneCount === parsed.axes.length && parsed.axes.length > 0;

  const ctaUrl = allAxesDone && parsed.finalQuestions.length > 0
    ? `${baseUrl}/questoes`
    : `${baseUrl}/eixo/${firstPendingAxis ? firstPendingAxis.index : 1}`;

  const ctaLabel =
    doneCount === 0
      ? "Iniciar Estudo · Eixo 1"
      : allAxesDone
        ? "Ir para Bateria Final de Questões"
        : `Continuar de onde parei · Eixo ${firstPendingAxis?.index ?? 1}`;

  const totalCheckpointQ = parsed.axes.reduce((acc, a) => acc + a.checkpointQuestions.length, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Card da Aula */}
      <div className="surface rounded-2xl p-6 sm:p-8 border border-tech space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[11px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estudo Guiado por Eixos</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri leading-tight">
            {title}
          </h1>
        </div>

        {/* Métricas rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="surface-muted rounded-xl p-3.5">
            <div className="text-[11px] font-mono uppercase text-mut">Eixos da Aula</div>
            <div className="text-lg font-extrabold text-pri mt-0.5">
              {doneCount}/{parsed.axes.length}{" "}
              <span className="text-xs font-medium text-mut">concluídos</span>
            </div>
          </div>
          <div className="surface-muted rounded-xl p-3.5">
            <div className="text-[11px] font-mono uppercase text-mut">Questões Finais</div>
            <div className="text-lg font-extrabold text-pri mt-0.5">
              {parsed.finalQuestions.length}{" "}
              <span className="text-xs font-medium text-mut">reais + adaptadas</span>
            </div>
          </div>
          <div className="surface-muted rounded-xl p-3.5 col-span-2 sm:col-span-1">
            <div className="text-[11px] font-mono uppercase text-mut">Checkpoints</div>
            <div className="text-lg font-extrabold text-pri mt-0.5">
              {totalCheckpointQ > 0 ? `${totalCheckpointQ} diretas` : `${parsed.axes.length} etapas`}
            </div>
          </div>
        </div>

        {/* Botões principais */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <Link to={ctaUrl} className="btn-primary !py-3 !px-6 !text-sm sm:!text-base">
            <Play className="w-4 h-4 fill-current" />
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={onSwitchContinuousMode}
            className="btn-secondary !py-3 !px-4 !text-xs sm:!text-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Modo leitura contínua</span>
          </button>
        </div>
      </div>

      {/* Mapa de Eixos (Sumário Interativo) */}
      <div className="surface rounded-2xl p-5 sm:p-6 border border-tech space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-pri">
              Sumário & Checkpoints da Aula
            </h2>
            <p className="text-xs text-mut mt-0.5">
              Avance eixo por eixo sem sobrecarga visual, ou clique diretamente em qualquer tópico para revisar.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {parsed.axes.map((axis) => {
            const isDone = completedAxes.includes(axis.id);
            const isNext = firstPendingAxis?.id === axis.id;
            return (
              <Link
                key={axis.id}
                to={`${baseUrl}/eixo/${axis.index}`}
                className={`group flex items-center justify-between gap-3 p-4 rounded-xl border transition-all ${
                  isDone
                    ? "border-emerald-500/30 bg-emerald-500/[0.04] hover:border-emerald-500/55"
                    : isNext
                      ? "border-indigo-500/45 bg-indigo-500/[0.05] hover:border-indigo-500"
                      : "border-tech surface-muted hover:border-indigo-500/40"
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-0.5 shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Circle
                        className={`w-5 h-5 ${
                          isNext ? "text-indigo-500" : "text-mut/60"
                        }`}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
                        Eixo {axis.index}
                      </span>
                      {isNext && !isDone && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                          Próximo passo
                        </span>
                      )}
                      {axis.checkpointQuestions.length > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-semibold">
                          +{axis.checkpointQuestions.length} questões diretas
                        </span>
                      )}
                    </div>
                    <div
                      className="text-sm sm:text-[15px] font-bold text-pri mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      dangerouslySetInnerHTML={{
                        __html: renderInlineMarkdown(axis.cleanTitle, `${docId}_sum_ax_${axis.index}`),
                      }}
                    />
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-mut group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            );
          })}

          {/* Etapa Final: Bateria de Questões */}
          {parsed.finalQuestions.length > 0 && (
            <Link
              to={`${baseUrl}/questoes`}
              className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/[0.06] to-sky-500/[0.06] hover:border-indigo-500 transition-all"
            >
              <div className="flex items-start gap-3 min-w-0">
                <ListChecks className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <span className="font-mono text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
                    Etapa Final · Consolidação
                  </span>
                  <div className="text-sm sm:text-[15px] font-bold text-pri mt-0.5">
                    {parsed.finalQuestionsTitle} ({parsed.finalQuestions.length} questões)
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          )}
        </div>
      </div>

      {/* Prólogo / Introdução (se houver conteúdo relevante além do H1) */}
      {parsed.introMd && parsed.introMd.replace(/^#\s+.+$/m, "").trim().length > 20 && (
        <div className="surface rounded-2xl p-5 sm:p-7 border border-tech">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-mut mb-3">
            Introdução & Contexto
          </div>
          <MarkdownRenderer
            content={parsed.introMd.replace(/^#\s+.+\n?/, "")}
            contextId={`${docId}_intro`}
            docId={docId}
          />
        </div>
      )}
    </div>
  );
}
