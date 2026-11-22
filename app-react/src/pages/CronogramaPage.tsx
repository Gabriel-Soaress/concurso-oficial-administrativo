import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  FileText,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { WEEKS_DATA } from "@/data/weeks";
import { MONTH_META, SUBJECT_META } from "@/config/constants";
import { useProgress } from "@/contexts/ProgressContext";
import { loadWeekLessons } from "@/services/lessonsLoader";
import { hasRichLesson } from "@/lessons/registry";
import type { SubjectKey, WeekLessonsMap } from "@/types";

const SUBJECT_ORDER: SubjectKey[] = ["port", "rlm", "esp", "ger"];

export function CronogramaPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawMes = Number(searchParams.get("mes") || "1");
  const activeMonth: 1 | 2 | 3 = rawMes === 2 ? 2 : rawMes === 3 ? 3 : 1;

  const {
    checklist,
    collapsedWeeks,
    toggleBlock,
    toggleWeekCollapse,
    setMonthWeeksCollapsed,
    getDocAxesProgress,
  } = useProgress();

  const [lessonsMap, setLessonsMap] = useState<WeekLessonsMap>({});

  useEffect(() => {
    let active = true;
    loadWeekLessons()
      .then((data) => {
        if (active) setLessonsMap(data);
      })
      .catch(() => {
        // Fallback silencioso se aulas-data ainda não estiver gerado
      });
    return () => {
      active = false;
    };
  }, []);

  const setMonth = (m: 1 | 2 | 3) => {
    setSearchParams({ mes: String(m) });
  };

  const monthWeeks = WEEKS_DATA.filter((w) => w.monthNum === activeMonth);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Cabeçalho */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
            Trilha Progressiva · 12 Semanas
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri">
            Cronograma de Estudos
          </h1>
          <p className="text-sm text-sec">
            Clique em qualquer matéria com aula disponível para estudar no modo guiado por Eixos com checkpoints.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setMonthWeeksCollapsed(activeMonth, false)}
            className="btn-secondary !py-1.5 !px-3 !text-xs"
          >
            Expandir todas
          </button>
          <button
            type="button"
            onClick={() => setMonthWeeksCollapsed(activeMonth, true)}
            className="btn-secondary !py-1.5 !px-3 !text-xs"
          >
            Recolher todas
          </button>
        </div>
      </header>

      {/* Seletor de Meses (horizontal no mobile, cards ricos no desktop) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {([1, 2, 3] as const).map((m) => {
          const meta = MONTH_META[m];
          const isActive = activeMonth === m;
          const mWeeks = WEEKS_DATA.filter((w) => w.monthNum === m);
          const totalB = mWeeks.length * 5;
          const doneB = mWeeks.reduce((acc, w) => {
            return (
              acc +
              (["port", "rlm", "esp", "ger", "sim"] as const).filter((k) => !!checklist[`w${w.num}_${k}`])
                .length
            );
          }, 0);
          const mPct = totalB > 0 ? Math.round((doneB / totalB) * 100) : 0;
          const shortSem =
            mWeeks.length > 0 ? `Sem ${mWeeks[0].num}–${mWeeks[mWeeks.length - 1].num}` : meta.weeks;

          return (
            <button
              key={m}
              type="button"
              onClick={() => setMonth(m)}
              className={`min-w-0 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border transition-all cursor-pointer text-center sm:text-left ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                  : "surface hover:border-indigo-500/40 text-pri"
              }`}
            >
              {/* Versão compacta Mobile */}
              <div className="sm:hidden flex flex-col items-center">
                <span className="text-xs font-extrabold leading-tight truncate w-full">Mês {m}</span>
                <span
                  className={`text-[10px] font-mono font-semibold mt-0.5 ${
                    isActive ? "text-indigo-100" : "text-mut"
                  }`}
                >
                  {shortSem}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full mt-1.5 ${
                    isActive ? "bg-white/20 text-white" : "surface-muted text-sec"
                  }`}
                >
                  {doneB}/{totalB}
                </span>
                <div
                  className={`w-full h-1 rounded-full mt-1.5 overflow-hidden ${
                    isActive ? "bg-white/25" : "bg-slate-200 dark:bg-slate-800"
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all ${
                      isActive ? "bg-white" : "bg-indigo-500"
                    }`}
                    style={{ width: `${mPct}%` }}
                  />
                </div>
              </div>

              {/* Versão Desktop / Tablet */}
              <div className="hidden sm:block">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-mono font-bold uppercase ${
                      isActive ? "text-indigo-100" : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    {meta.weeks}
                  </span>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "surface-muted text-sec"
                    }`}
                  >
                    {doneB}/{totalB}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-extrabold mt-1">{meta.title}</div>
                <div className={`text-xs mt-1 line-clamp-2 ${isActive ? "text-indigo-100" : "text-mut"}`}>
                  {meta.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lista de Semanas do Mês Ativo */}
      <div className="space-y-5">
        {monthWeeks.map((w) => {
          const isCollapsed = !!collapsedWeeks[w.num];
          const doneInWeek = (["port", "rlm", "esp", "ger", "sim"] as const).filter(
            (k) => !!checklist[`w${w.num}_${k}`]
          ).length;
          const weekComplete = doneInWeek === 5;

          return (
            <section
              key={w.num}
              id={`week-card-${w.num}`}
              className={`surface rounded-2xl border overflow-hidden transition-colors ${
                weekComplete ? "border-emerald-500/45" : "border-tech"
              }`}
            >
              {/* Cabeçalho da Semana */}
              <div
                className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-500/[0.03] transition-colors"
                onClick={() => toggleWeekCollapse(w.num)}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <button
                    type="button"
                    className="mt-1 text-mut hover:text-pri shrink-0 cursor-pointer"
                    aria-label={isCollapsed ? "Expandir semana" : "Recolher semana"}
                  >
                    {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                        SEMANA {String(w.num).padStart(2, "0")}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-lg font-mono text-xs font-bold ${
                          weekComplete
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : "surface-muted text-sec"
                        }`}
                      >
                        {doneInWeek}/5 blocos
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-extrabold text-pri mt-1 leading-snug">
                      {w.title}
                    </h2>
                    <p className="text-xs text-mut mt-0.5">{w.prereq}</p>
                  </div>
                </div>

                <Link
                  to={`/gerador?semana=${w.num}`}
                  onClick={(e) => e.stopPropagation()}
                  className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0 hidden sm:inline-flex"
                  title="Gerar prompt de estudo para esta semana"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Prompt</span>
                </Link>
              </div>

              {/* Blocos da Semana */}
              {!isCollapsed && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-tech space-y-3">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {SUBJECT_ORDER.map((subj) => {
                      const blockId = `w${w.num}_${subj}`;
                      const meta = SUBJECT_META[subj];
                      const isDone = !!checklist[blockId];
                      const docs = lessonsMap[blockId] || [];

                      return (
                        <div
                          key={blockId}
                          className={`rounded-xl p-4 border transition-all flex flex-col justify-between gap-3 ${
                            isDone
                              ? "border-emerald-500/40 bg-emerald-500/[0.04]"
                              : "border-tech surface-muted"
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold ${meta.badgeClass}`}>
                                {meta.name}
                              </span>

                              <button
                                type="button"
                                onClick={() => toggleBlock(blockId)}
                                className={`inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                                  isDone
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : "text-mut hover:text-pri"
                                }`}
                              >
                                {isDone ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Concluído</span>
                                  </>
                                ) : (
                                  <>
                                    <Circle className="w-4 h-4" />
                                    <span>Marcar</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? "text-mut line-through" : "text-sec"}`}>
                              {w[subj]}
                            </p>
                          </div>

                          {/* Materiais / Aulas disponíveis */}
                          {docs.length > 0 ? (
                            <div className="space-y-1.5 pt-2 border-t border-tech/70">
                              {docs.map((doc, dIdx) => {
                                const axesProg = getDocAxesProgress(doc.id);
                                const completedAxesCount = axesProg.completedAxes.length;
                                const isRich = hasRichLesson(blockId, dIdx);

                                return (
                                  <Link
                                    key={doc.id}
                                    to={`/aulas/${blockId}/${dIdx}`}
                                    className="group flex items-center justify-between gap-2 px-3 py-2 rounded-lg surface border border-tech hover:border-indigo-500/50 transition-all text-xs"
                                  >
                                    <span className="flex items-center gap-2 min-w-0 font-semibold text-pri group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                      {isRich ? (
                                        <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                      ) : doc.isMain ? (
                                        <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                      ) : (
                                        <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                      )}
                                      <span className="truncate">{doc.shortTitle}</span>
                                    </span>

                                    <span className="flex items-center gap-1.5 shrink-0">
                                      {isRich && (
                                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-bold">
                                          EduKit
                                        </span>
                                      )}
                                      {completedAxesCount > 0 && (
                                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                                          {completedAxesCount}✓
                                        </span>
                                      )}
                                      <ChevronRight className="w-3.5 h-3.5 text-mut group-hover:text-indigo-500" />
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="pt-2 border-t border-tech/60 flex items-center justify-between text-[11px] text-mut">
                              <span>Material ainda não gerado</span>
                              <Link
                                to={`/gerador?semana=${w.num}&materia=${subj}`}
                                className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                              >
                                <Sparkles className="w-3 h-3" />
                                <span>Gerar aula</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Card do Simulado de Sábado */}
                  <div
                    className={`rounded-xl p-4 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      checklist[`w${w.num}_sim`]
                        ? "border-emerald-500/40 bg-emerald-500/[0.05]"
                        : "border-indigo-500/25 bg-indigo-500/[0.04]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400">
                          Sábado · Simulado Cronometrado #{w.simNum}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-pri">{w.simulado}</div>
                    </div>

                    <div className="flex items-center flex-wrap gap-2 shrink-0">
                      <a
                        href={`/prova-auto/${w.simNum}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-1.5 !px-3 !text-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Prova</span>
                      </a>
                      <a
                        href={`/prova-auto/g${w.simNum}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-1.5 !px-3 !text-xs"
                      >
                        <span>Gabarito</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => toggleBlock(`w${w.num}_sim`)}
                        className={`!py-1.5 !px-3 !text-xs ${
                          checklist[`w${w.num}_sim`] ? "btn-secondary !border-emerald-500 !text-emerald-600 dark:!text-emerald-400" : "btn-primary"
                        }`}
                      >
                        {checklist[`w${w.num}_sim`] ? "✅ Feito" : "Marcar Feito"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
