import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
  Layers,
  ListChecks,
  Sparkles,
} from "lucide-react";

export interface StepperAxisItem {
  id: string;
  index: number;
  label: string;
}

interface LessonStepperBarProps {
  baseUrl: string; // ex: /aulas/w4_rlm/0
  axes: StepperAxisItem[];
  hasFinalQuestions: boolean;
  activeStep: "summary" | "questoes" | number; // number = 1-based axis index
  completedAxes: string[];
  isInteractiveModule?: boolean;
}

interface StepEntry {
  key: "summary" | "questoes" | number;
  to: string;
  shortLabel: string;
  fullLabel: string;
  kind: "summary" | "axis" | "questoes";
  isDone: boolean;
}

export function LessonStepperBar({
  baseUrl,
  axes,
  hasFinalQuestions,
  activeStep,
  completedAxes,
  isInteractiveModule = false,
}: LessonStepperBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeStep, baseUrl]);

  const totalSteps = axes.length + (hasFinalQuestions ? 1 : 0);
  const doneCount = axes.filter((a) => completedAxes.includes(a.id)).length;
  const pct = totalSteps > 0 ? Math.round((doneCount / totalSteps) * 100) : 0;

  const steps = useMemo<StepEntry[]>(() => {
    const list: StepEntry[] = [
      {
        key: "summary",
        to: baseUrl,
        shortLabel: isInteractiveModule ? "Início · Interativa" : "Início",
        fullLabel: "Início & Visão Geral da Aula",
        kind: "summary",
        isDone: false,
      },
    ];
    for (const ax of axes) {
      list.push({
        key: ax.index,
        to: `${baseUrl}/eixo/${ax.index}`,
        shortLabel: `Eixo ${ax.index} de ${axes.length}`,
        fullLabel: `Eixo ${ax.index}: ${ax.label}`,
        kind: "axis",
        isDone: completedAxes.includes(ax.id),
      });
    }
    if (hasFinalQuestions) {
      list.push({
        key: "questoes",
        to: `${baseUrl}/questoes`,
        shortLabel: "Bateria Final",
        fullLabel: "Bateria Final de Questões",
        kind: "questoes",
        isDone: false,
      });
    }
    return list;
  }, [axes, baseUrl, completedAxes, hasFinalQuestions, isInteractiveModule]);

  const currentIdx = Math.max(
    0,
    steps.findIndex((s) => s.key === activeStep)
  );
  const currentStep = steps[currentIdx] || steps[0];
  const prevStep = currentIdx > 0 ? steps[currentIdx - 1] : null;
  const nextStep = currentIdx < steps.length - 1 ? steps[currentIdx + 1] : null;

  return (
    <div className="sticky top-[57px] md:top-0 z-20 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 bg-[var(--bg-app)]/92 backdrop-blur-md border-b border-tech">
      <div className="max-w-4xl mx-auto">
        {/* MOBILE (< sm): barra única alinhada com navegação < [Etapa v] > + trilha segmentada */}
        <div className="sm:hidden space-y-2">
          <div className="flex items-center gap-1.5">
            {prevStep ? (
              <Link
                to={prevStep.to}
                title={`Anterior: ${prevStep.fullLabel}`}
                aria-label={`Ir para ${prevStep.fullLabel}`}
                className="w-9 h-9 rounded-xl surface border border-tech flex items-center justify-center text-sec hover:text-pri shrink-0 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="w-9 h-9 rounded-xl surface border border-tech flex items-center justify-center text-mut opacity-35 shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </span>
            )}

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label="Escolher etapa da aula"
              className="flex-1 min-w-0 h-9 px-3 rounded-xl surface border border-tech flex items-center justify-between gap-2 cursor-pointer hover:border-indigo-500/40 transition-colors"
            >
              <span className="flex items-center gap-1.5 min-w-0">
                {currentStep.kind === "summary" ? (
                  <Flag className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                ) : currentStep.kind === "questoes" ? (
                  <ListChecks className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                ) : isInteractiveModule ? (
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                ) : (
                  <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                )}
                <span className="text-xs font-extrabold text-pri truncate">
                  {currentStep.shortLabel}
                </span>
              </span>

              <span className="flex items-center gap-1.5 shrink-0">
                <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-extrabold">
                  {doneCount}/{axes.length}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-mut transition-transform duration-150 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {nextStep ? (
              <Link
                to={nextStep.to}
                title={`Próxima: ${nextStep.fullLabel}`}
                aria-label={`Ir para ${nextStep.fullLabel}`}
                className="w-9 h-9 rounded-xl surface border border-tech flex items-center justify-center text-sec hover:text-pri shrink-0 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="w-9 h-9 rounded-xl surface border border-tech flex items-center justify-center text-mut opacity-35 shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>

          {/* Trilha segmentada igualitária (1 segmento por etapa) */}
          <div className="flex items-center gap-1" aria-hidden="true">
            {steps.map((s) => {
              const isCurr = s.key === activeStep;
              return (
                <div
                  key={String(s.key)}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    isCurr
                      ? "bg-indigo-600"
                      : s.isDone
                        ? "bg-emerald-500"
                        : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              );
            })}
          </div>

          {/* Menu suspenso completo para saltar direto para qualquer eixo */}
          {isMenuOpen && (
            <div className="surface rounded-xl border border-tech shadow-lg p-1.5 space-y-1 max-h-72 overflow-y-auto">
              {steps.map((s) => {
                const isCurr = s.key === activeStep;
                return (
                  <Link
                    key={String(s.key)}
                    to={s.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      isCurr
                        ? "bg-indigo-600 text-white"
                        : s.isDone
                          ? "text-emerald-700 dark:text-emerald-400 bg-emerald-500/[0.06] hover:bg-emerald-500/12"
                          : "text-sec hover:text-pri hover:bg-slate-500/10"
                    }`}
                  >
                    <span className="truncate">{s.fullLabel}</span>
                    {s.isDone && (
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isCurr ? "text-white" : "text-emerald-500"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP / TABLET (sm+): cabeçalho + barra contínua + pílulas limpas sem duplicação */}
        <div className="hidden sm:block space-y-2.5">
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-sec">
              {isInteractiveModule ? (
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              ) : (
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
              )}
              <span>
                {activeStep === "summary"
                  ? isInteractiveModule
                    ? "Início · Aula Interativa"
                    : "Início · Visão Geral da Aula"
                  : activeStep === "questoes"
                    ? "Etapa Final · Bateria de Questões"
                    : `Eixo ${activeStep} de ${axes.length}`}
              </span>
            </div>
            <span className="font-mono text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
              {doneCount}/{axes.length} eixos concluídos ({pct}%)
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 via-blue-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(pct, activeStep === "summary" ? 4 : 10)}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <Link
              to={baseUrl}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                activeStep === "summary"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "surface text-sec hover:text-pri border-tech"
              }`}
            >
              <Flag className="w-3 h-3" />
              <span>Início</span>
            </Link>

            {axes.map((axis) => {
              const isDone = completedAxes.includes(axis.id);
              const isCurrent = activeStep === axis.index;
              return (
                <Link
                  key={axis.id}
                  to={`${baseUrl}/eixo/${axis.index}`}
                  title={axis.label}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                    isCurrent
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : isDone
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/35 hover:bg-emerald-500/20"
                        : "surface text-sec hover:text-pri border-tech"
                  }`}
                >
                  {isDone && !isCurrent && <Check className="w-3 h-3 shrink-0" />}
                  <span>Eixo {axis.index}</span>
                </Link>
              );
            })}

            {hasFinalQuestions && (
              <Link
                to={`${baseUrl}/questoes`}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                  activeStep === "questoes"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "surface text-sec hover:text-pri border-tech"
                }`}
              >
                <ListChecks className="w-3 h-3" />
                <span>Bateria Final</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
