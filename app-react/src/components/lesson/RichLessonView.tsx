import { useState, type MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Download,
  Layers,
  ListChecks,
  Play,
  Sparkles,
} from "lucide-react";
import type { RichLessonModule } from "@/types";
import { extractZoomPayload, isZoomableSvg } from "@/lib/diagramZoom";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/contexts/ToastContext";
import { DiagramZoomModal, type ZoomDiagramPayload } from "./DiagramZoomModal";
import { LessonStepperBar } from "./LessonStepperBar";
import { MCQuestionList } from "./MCQuestionList";

interface RichLessonViewProps {
  lesson: RichLessonModule;
  baseUrl: string;
  mode: "summary" | "axis" | "questoes";
  axisNum?: number;
  onFinishBlock: () => void;
  onDownloadFullLesson?: () => void;
  onDownloadAxis?: (axisIndex: number) => void;
}

export function RichLessonView({
  lesson,
  baseUrl,
  mode,
  axisNum = 1,
  onFinishBlock,
  onDownloadFullLesson,
  onDownloadAxis,
}: RichLessonViewProps) {
  const navigate = useNavigate();
  const { getDocAxesProgress, markAxisCompleted, getQuizDoc, updateQuizDoc } = useProgress();
  const { showToast } = useToast();
  const [zoomDiagram, setZoomDiagram] = useState<ZoomDiagramPayload | null>(null);

  const handleRichMediaClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-self-zoom='true']")) return;

    const zoomWrap = target.closest<HTMLElement>("[data-zoom-diagram]");
    if (zoomWrap) {
      const payload = extractZoomPayload(zoomWrap);
      if (payload) setZoomDiagram(payload);
      return;
    }

    const imgEl = target.closest<HTMLImageElement>("img");
    if (imgEl && (imgEl.naturalWidth >= 120 || imgEl.clientWidth >= 120)) {
      const payload = extractZoomPayload(imgEl);
      if (payload) setZoomDiagram(payload);
      return;
    }

    const svgEl = target.closest<SVGSVGElement>("svg");
    if (svgEl && isZoomableSvg(svgEl)) {
      const payload = extractZoomPayload(svgEl as unknown as HTMLElement);
      if (payload) setZoomDiagram(payload);
    }
  };

  const axesProgress = getDocAxesProgress(lesson.id);
  const completedAxes = axesProgress.completedAxes;
  const doneCount = lesson.axes.filter((a) => completedAxes.includes(a.id)).length;
  const totalAxes = lesson.axes.length;
  const hasFinalQuestions = lesson.finalQuestions.length > 0;

  const currentAxis =
    mode === "axis"
      ? lesson.axes.find((a) => a.index === axisNum) || lesson.axes[0]
      : null;

  const firstPendingAxis = lesson.axes.find((a) => !completedAxes.includes(a.id));
  const allAxesDone = doneCount === totalAxes && totalAxes > 0;

  const ctaUrl =
    allAxesDone && hasFinalQuestions
      ? `${baseUrl}/questoes`
      : `${baseUrl}/eixo/${firstPendingAxis ? firstPendingAxis.index : 1}`;

  const ctaLabel =
    doneCount === 0
      ? "Iniciar Estudo · Eixo 1"
      : allAxesDone
        ? "Ir para Bateria Final de Questões"
        : `Continuar de onde parei · Eixo ${firstPendingAxis?.index ?? 1}`;

  const totalCheckpointQ = lesson.axes.reduce((acc, a) => acc + a.checkpointQuestions.length, 0);

  const innerChecks = getQuizDoc(lesson.id).innerChecks || {};
  const toggleChecklistItem = (key: string) => {
    updateQuizDoc(lesson.id, (prev) => ({
      ...prev,
      innerChecks: { ...(prev.innerChecks || {}), [key]: !prev.innerChecks?.[key] },
    }));
  };

  const activeStep: "summary" | "questoes" | number =
    mode === "questoes" ? "questoes" : mode === "axis" && currentAxis ? currentAxis.index : "summary";

  return (
    <div className="space-y-6">
      {/* Stepper Sticky Unificado */}
      <LessonStepperBar
        baseUrl={baseUrl}
        axes={lesson.axes.map((ax) => ({
          id: ax.id,
          index: ax.index,
          label: ax.title,
        }))}
        hasFinalQuestions={hasFinalQuestions}
        activeStep={activeStep}
        completedAxes={completedAxes}
        isInteractiveModule
      />

      {/* MODO 1: SUMÁRIO */}
      {mode === "summary" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="surface rounded-2xl p-6 sm:p-8 border border-tech space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Módulo Didático Interativo · EduKit</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri leading-tight">
                {lesson.title}
              </h1>
              {lesson.subtitle && (
                <p className="text-sm sm:text-base text-sec leading-relaxed">{lesson.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="surface-muted rounded-xl p-3.5">
                <div className="text-[11px] font-mono uppercase text-mut">Eixos Guiados</div>
                <div className="text-lg font-extrabold text-pri mt-0.5">
                  {doneCount}/{totalAxes} <span className="text-xs font-medium text-mut">concluídos</span>
                </div>
              </div>
              <div className="surface-muted rounded-xl p-3.5">
                <div className="text-[11px] font-mono uppercase text-mut">Checkpoints Diretos</div>
                <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">
                  {totalCheckpointQ} <span className="text-xs font-medium text-mut">questões rápidas</span>
                </div>
              </div>
              <div className="surface-muted rounded-xl p-3.5 col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono uppercase text-mut">Bateria Final</div>
                <div className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">
                  {lesson.finalQuestions.length}{" "}
                  <span className="text-xs font-medium text-mut">reais + ACCESS</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link to={ctaUrl} className="btn-primary !py-3 !px-6 !text-sm sm:!text-base">
                <Play className="w-4 h-4 fill-current" />
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {onDownloadFullLesson && (
                <button
                  type="button"
                  onClick={onDownloadFullLesson}
                  className="btn-secondary !py-3 !px-4 !text-xs sm:!text-sm"
                  title="Baixar aula completa em Markdown (ideal para NotebookLM)"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Aula Completa (.md)</span>
                </button>
              )}
            </div>
          </div>

          {lesson.introRender && <div onClick={handleRichMediaClick}>{lesson.introRender()}</div>}

          {/* Mapa de Eixos */}
          <div className="surface rounded-2xl p-5 sm:p-6 border border-tech space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-pri flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-500" />
                <span>Atalho para os Eixos & Checkpoints</span>
              </h2>
              <p className="text-xs text-mut mt-0.5">
                Cada eixo traz teoria visual focada + 3 questões diretas para fixar na hora.
              </p>
            </div>

            <div className="space-y-2.5">
              {lesson.axes.map((ax) => {
                const isDone = completedAxes.includes(ax.id);
                const isNext = firstPendingAxis?.id === ax.id;
                return (
                  <div
                    key={ax.id}
                    className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border transition-all ${
                      isDone
                        ? "border-emerald-500/35 bg-emerald-500/[0.04] hover:border-emerald-500/60"
                        : isNext
                          ? "border-indigo-500/45 bg-indigo-500/[0.05] hover:border-indigo-500"
                          : "border-tech surface-muted hover:border-indigo-500/40"
                    }`}
                  >
                    <Link
                      to={`${baseUrl}/eixo/${ax.index}`}
                      className="group flex-1 min-w-0 flex items-center justify-between gap-3 p-2 rounded-lg"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <Circle className={`w-5 h-5 ${isNext ? "text-indigo-500" : "text-mut/60"}`} />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
                              Eixo {ax.index}
                            </span>
                            {ax.estimatedMinutes && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-mut">
                                <Clock className="w-3 h-3" /> {ax.estimatedMinutes} min
                              </span>
                            )}
                            {ax.checkpointQuestions.length > 0 && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold">
                                +{ax.checkpointQuestions.length} questões diretas
                              </span>
                            )}
                          </div>
                          <div className="text-sm sm:text-[15px] font-bold text-pri mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {ax.title}
                          </div>
                          {ax.subtitle && <p className="text-xs text-mut mt-0.5">{ax.subtitle}</p>}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-mut group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>

                    {onDownloadAxis && (
                      <button
                        type="button"
                        onClick={() => onDownloadAxis(ax.index)}
                        title={`Baixar apenas o Eixo ${ax.index} em Markdown`}
                        aria-label={`Baixar Eixo ${ax.index} em Markdown`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg surface border border-tech text-sec hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 text-xs font-mono font-bold transition-colors cursor-pointer shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>.md</span>
                      </button>
                    )}
                  </div>
                );
              })}

              {hasFinalQuestions && (
                <Link
                  to={`${baseUrl}/questoes`}
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-indigo-500/35 bg-gradient-to-r from-indigo-500/[0.07] to-sky-500/[0.07] hover:border-indigo-500 transition-all"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <ListChecks className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <span className="font-mono text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
                        Etapa Final · Consolidação
                      </span>
                      <div className="text-sm sm:text-[15px] font-bold text-pri mt-0.5">
                        {lesson.finalQuestionsTitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODO 2: EIXO ATIVO */}
      {mode === "axis" && currentAxis && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cabeçalho do Eixo */}
          <div className="surface rounded-2xl p-5 sm:p-7 border border-tech space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                  EIXO {currentAxis.index} DE {totalAxes}
                </span>
                {currentAxis.estimatedMinutes && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg surface-muted font-mono text-xs text-mut">
                    <Clock className="w-3.5 h-3.5" /> ~{currentAxis.estimatedMinutes} min
                  </span>
                )}
                {completedAxes.includes(currentAxis.id) && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
                  </span>
                )}
              </div>

              {onDownloadAxis && (
                <button
                  type="button"
                  onClick={() => onDownloadAxis(currentAxis.index)}
                  className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0"
                  title={`Baixar apenas o Eixo ${currentAxis.index} em Markdown (ideal para NotebookLM)`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Eixo {currentAxis.index} (.md)</span>
                </button>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pri leading-snug">
              {currentAxis.title}
            </h2>
            {currentAxis.subtitle && <p className="text-sm text-sec">{currentAxis.subtitle}</p>}
          </div>

          {/* Conteúdo JSX Rico (EduKit) */}
          <div onClick={handleRichMediaClick}>{currentAxis.render()}</div>

          {/* 3 Questões Diretas de Checkpoint */}
          {currentAxis.checkpointQuestions.length > 0 && (
            <section className="space-y-4 pt-2">
              <div className="flex items-center gap-2 px-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-amber-600 dark:text-amber-400">
                  Checkpoint do Eixo {currentAxis.index} · {currentAxis.checkpointQuestions.length} Questões Diretas
                </h3>
              </div>
              <MCQuestionList
                docId={lesson.id}
                scopeKey={`rich_axis_${currentAxis.index}`}
                questions={currentAxis.checkpointQuestions}
                title={`Prática Imediata — Eixo ${currentAxis.index}`}
                subtitle="Responda agora para travar o conteúdo na memória antes de avançar."
                compact
              />
            </section>
          )}

          {/* Rodapé Próximo + Progresso */}
          {(() => {
            const isLast = currentAxis.index === totalAxes;
            const remaining = totalAxes - currentAxis.index;
            const prevUrl =
              currentAxis.index === 1 ? baseUrl : `${baseUrl}/eixo/${currentAxis.index - 1}`;
            const nextUrl = isLast
              ? hasFinalQuestions
                ? `${baseUrl}/questoes`
                : baseUrl
              : `${baseUrl}/eixo/${currentAxis.index + 1}`;
            const nextKey = isLast ? (hasFinalQuestions ? "questoes" : "summary") : `eixo-${currentAxis.index + 1}`;

            const remainingLabel = isLast
              ? hasFinalQuestions
                ? "Próximo passo: Bateria Final de Questões Reais + ACCESS"
                : "Último eixo desta aula!"
              : remaining === 1
                ? hasFinalQuestions
                  ? "Falta 1 eixo + Bateria Final"
                  : "Falta 1 eixo"
                : hasFinalQuestions
                  ? `Faltam ${remaining} eixos + Bateria Final`
                  : `Faltam ${remaining} eixos`;

            return (
              <footer className="surface rounded-2xl p-4 sm:p-5 border border-tech flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => navigate(prevUrl)}
                  className="btn-secondary !py-2.5 !px-4 !text-xs sm:!text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{currentAxis.index === 1 ? "Voltar ao Início" : `Eixo ${currentAxis.index - 1}`}</span>
                </button>

                <div className="text-center">
                  <div className="text-xs font-mono font-bold text-pri">
                    Eixo {currentAxis.index} de {totalAxes}
                  </div>
                  <div className="text-[11px] text-mut mt-0.5">{remainingLabel}</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    markAxisCompleted(lesson.id, currentAxis.id, nextKey);
                    showToast(`Eixo ${currentAxis.index} concluído!`, "success");
                    navigate(nextUrl);
                  }}
                  className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm"
                >
                  <span>
                    {isLast
                      ? hasFinalQuestions
                        ? "Concluir & Ir para Bateria Final"
                        : "Concluir Último Eixo"
                      : `Concluir & Ir ao Eixo ${currentAxis.index + 1}`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </footer>
            );
          })()}
        </div>
      )}

      {/* MODO 3: BATERIA FINAL + CHECKLIST */}
      {mode === "questoes" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <MCQuestionList
            docId={lesson.id}
            scopeKey="rich_final"
            questions={lesson.finalQuestions}
            title={lesson.finalQuestionsTitle}
            subtitle="Questões reais e adaptadas no padrão Instituto ACCESS cobrindo todos os eixos da aula."
          />

          {lesson.checklistItems && lesson.checklistItems.length > 0 && (
            <section className="surface rounded-2xl p-5 sm:p-6 border border-tech space-y-4">
              <div>
                <h3 className="text-base font-extrabold text-pri">Checklist de Fixação Ativa</h3>
                <p className="text-xs text-mut mt-0.5">
                  Marque cada item que você consegue explicar com segurança sem olhar o resumo.
                </p>
              </div>
              <div className="space-y-2">
                {lesson.checklistItems.map((item, idx) => {
                  const key = `rich_chk_${idx}`;
                  const checked = !!innerChecks[key];
                  return (
                    <label
                      key={key}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        checked
                          ? "border-emerald-500/40 bg-emerald-500/[0.05]"
                          : "border-tech surface-muted hover:border-indigo-500/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChecklistItem(key)}
                        className="mt-0.5 accent-emerald-600 w-4 h-4 shrink-0"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          checked ? "line-through text-mut" : "text-pri"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
          )}

          <footer className="surface rounded-2xl p-5 border border-emerald-500/35 bg-emerald-500/[0.04] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Link
              to={`${baseUrl}/eixo/${totalAxes}`}
              className="btn-secondary !py-2.5 !px-4 !text-xs sm:!text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Eixo {totalAxes}</span>
            </Link>
            <button
              type="button"
              onClick={onFinishBlock}
              className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm !bg-emerald-600"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Concluir Bloco na Trilha 🎉</span>
            </button>
          </footer>
        </div>
      )}

      <DiagramZoomModal diagram={zoomDiagram} onClose={() => setZoomDiagram(null)} />
    </div>
  );
}
