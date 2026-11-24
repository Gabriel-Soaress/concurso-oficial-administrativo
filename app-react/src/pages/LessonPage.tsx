import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Download,
  Layers,
  ListChecks,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SUBJECT_META } from "@/config/constants";
import { WEEKS_DATA } from "@/data/weeks";
import { loadWeekLessons } from "@/services/lessonsLoader";
import { loadRichLesson } from "@/lessons/registry";
import { parseLessonIntoAxes } from "@/lib/lessonStepperParser";
import { parseWorksheetMarkdown } from "@/lib/worksheetParser";
import {
  buildAxisMarkdown,
  buildAxisMdFilename,
  buildFullLessonMarkdown,
  buildLessonMdFilename,
  resolveRichAxisMarkdown,
  triggerMarkdownDownload,
} from "@/lib/markdownDownload";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/contexts/ToastContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LessonStepperBar } from "@/components/lesson/LessonStepperBar";
import { LessonSummaryView } from "@/components/lesson/LessonSummaryView";
import { LessonAxisView } from "@/components/lesson/LessonAxisView";
import { RichLessonView } from "@/components/lesson/RichLessonView";
import { MarkdownRenderer } from "@/components/lesson/MarkdownRenderer";
import { MCQuestionList } from "@/components/lesson/MCQuestionList";
import { WorksheetForm } from "@/components/lesson/WorksheetForm";
import type { RichLessonModule, SubjectKey, WeekLessonsMap } from "@/types";

interface LessonPageProps {
  mode?: "summary" | "axis" | "questoes";
}

export function LessonPage({ mode = "summary" }: LessonPageProps) {
  const { blockId = "", docIdx = "0", axisNum } = useParams();
  const navigate = useNavigate();
  const { checklist, toggleBlock, setBlockDone, getDocAxesProgress, markAxisCompleted } = useProgress();
  const { showToast } = useToast();

  const [lessonsMap, setLessonsMap] = useState<WeekLessonsMap | null>(null);
  const [richLesson, setRichLesson] = useState<RichLessonModule | null | undefined>(undefined);
  const [continuousMode, setContinuousMode] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  useEffect(() => {
    let active = true;
    loadWeekLessons().then((data) => {
      if (active) setLessonsMap(data);
    });
    return () => {
      active = false;
    };
  }, []);

  // Carrega módulo React rico (EduKit) se existir no registry para este blockId/docIdx
  useEffect(() => {
    let active = true;
    setRichLesson(undefined);
    loadRichLesson(blockId, Number(docIdx) || 0)
      .then((mod) => {
        if (active) setRichLesson(mod);
      })
      .catch(() => {
        if (active) setRichLesson(null);
      });
    return () => {
      active = false;
    };
  }, [blockId, docIdx]);

  // Reseta modo contínuo e seletor mobile ao navegar entre documentos
  useEffect(() => {
    setContinuousMode(false);
    setIsDocsOpen(false);
  }, [blockId, docIdx]);

  const docs = lessonsMap?.[blockId] || [];
  const safeDocIdx = Math.min(Math.max(0, Number(docIdx) || 0), Math.max(0, docs.length - 1));
  const doc = docs[safeDocIdx] || null;

  const blockMatch = blockId.match(/^w(\d+)_(\w+)$/);
  const weekNum = blockMatch ? Number(blockMatch[1]) : 1;
  const subjKey = (blockMatch ? blockMatch[2] : "port") as SubjectKey;
  const subjMeta = SUBJECT_META[subjKey] || SUBJECT_META.port;
  const weekData = WEEKS_DATA.find((w) => w.num === weekNum);
  const cronogramaUrl = `/cronograma?mes=${weekData?.monthNum || 1}`;
  const baseUrl = `/aulas/${blockId}/${safeDocIdx}`;

  const worksheetData = useMemo(
    () => (doc && doc.kind === "worksheet" ? parseWorksheetMarkdown(doc.content) : null),
    [doc]
  );

  const parsedLesson = useMemo(
    () => (doc && doc.kind !== "worksheet" ? parseLessonIntoAxes(doc.content) : null),
    [doc]
  );

  const isBlockDone = !!checklist[blockId];
  const axesProgress = doc ? getDocAxesProgress(doc.id) : { completedAxes: [] };

  if (!lessonsMap || richLesson === undefined) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-3">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-mut">Carregando conteúdo da aula...</p>
      </div>
    );
  }

  if (!doc && !richLesson) {
    return (
      <div className="max-w-2xl mx-auto surface rounded-2xl p-8 text-center space-y-4">
        <h2 className="text-xl font-extrabold text-pri">Aula não encontrada</h2>
        <p className="text-sm text-sec">
          O bloco <code className="font-mono">{blockId}</code> ainda não possui material sincronizado.
        </p>
        <Link to={cronogramaUrl} className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Cronograma</span>
        </Link>
      </div>
    );
  }

  const parsedAxisNum = Number(axisNum) || 1;
  const currentAxis =
    mode === "axis" && parsedLesson?.hasAxes
      ? parsedLesson.axes.find((a) => a.index === parsedAxisNum) || parsedLesson.axes[0]
      : null;

  const activeStepperStep: "summary" | "questoes" | number =
    mode === "questoes" ? "questoes" : mode === "axis" && currentAxis ? currentAxis.index : "summary";

  const handleFinishBlock = () => {
    setBlockDone(blockId, true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    showToast("Bloco concluído e sincronizado na Trilha!", "success");
    navigate(cronogramaUrl);
  };

  const currentDoc = docs[safeDocIdx];

  const handleDownloadFullLesson = () => {
    if (!doc) return;
    const filename = buildLessonMdFilename(doc);
    triggerMarkdownDownload(buildFullLessonMarkdown(doc), filename);
    showToast(`Baixado: ${filename}`, "success");
  };

  const handleDownloadMarkdownAxis = (targetAxisIndex: number) => {
    if (!doc || !parsedLesson?.hasAxes) return;
    const axis = parsedLesson.axes.find((a) => a.index === targetAxisIndex);
    if (!axis) return;
    const filename = buildAxisMdFilename(doc, axis.index);
    triggerMarkdownDownload(buildAxisMarkdown(doc.title, axis), filename);
    showToast(`Baixado: ${filename}`, "success");
  };

  const handleDownloadRichAxis = (targetAxisIndex: number) => {
    if (!richLesson) return;
    const resolved = resolveRichAxisMarkdown(
      doc,
      parsedLesson,
      targetAxisIndex,
      richLesson.axes.length
    );
    if (!resolved) return;
    triggerMarkdownDownload(resolved.content, resolved.filename);
    showToast(`Baixado: ${resolved.filename}`, "success");
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Barra Superior de Contexto + Breadcrumbs */}
      <div className="max-w-4xl mx-auto space-y-3">
        {/* Versão Mobile (< sm): 1 linha compacta e perfeitamente alinhada */}
        <div className="sm:hidden flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              to={cronogramaUrl}
              className="btn-secondary !py-1.5 !px-2.5 !text-xs shrink-0"
              title="Voltar para o Cronograma"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Trilha</span>
            </Link>
            <span className="text-xs font-extrabold text-pri truncate">
              Sem {String(weekNum).padStart(2, "0")} · {subjMeta.shortName}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {doc && (
              <button
                type="button"
                onClick={handleDownloadFullLesson}
                aria-label="Baixar aula completa em Markdown"
                title="Baixar aula completa (.md) — ideal para NotebookLM"
                className="btn-secondary !py-1.5 !px-2.5 !text-xs shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.md</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                toggleBlock(blockId);
                showToast(
                  isBlockDone ? "Bloco desmarcado na Trilha." : "Bloco marcado como concluído!",
                  isBlockDone ? "info" : "success"
                );
              }}
              className={`!py-1.5 !px-3 !text-xs shrink-0 ${
                isBlockDone
                  ? "btn-secondary !border-emerald-500 !text-emerald-600 dark:!text-emerald-400"
                  : "btn-primary"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isBlockDone ? "Concluído" : "Concluir"}</span>
            </button>
          </div>
        </div>

        {/* Versão Desktop / Tablet (sm+): Trilha + Breadcrumbs + Ações */}
        <div className="hidden sm:flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to={cronogramaUrl}
              className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0"
              title="Voltar para o Cronograma"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Trilha</span>
            </Link>
            <Breadcrumbs
              items={[
                { label: "Cronograma", to: cronogramaUrl },
                { label: `Semana ${String(weekNum).padStart(2, "0")}`, to: cronogramaUrl },
                { label: subjMeta.shortName },
              ]}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {doc && (
              <button
                type="button"
                onClick={handleDownloadFullLesson}
                className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0"
                title="Baixar aula completa em Markdown (ideal para NotebookLM)"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar Aula (.md)</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                toggleBlock(blockId);
                showToast(
                  isBlockDone ? "Bloco desmarcado na Trilha." : "Bloco marcado como concluído!",
                  isBlockDone ? "info" : "success"
                );
              }}
              className={`!py-1.5 !px-3.5 !text-xs shrink-0 ${
                isBlockDone
                  ? "btn-secondary !border-emerald-500 !text-emerald-600 dark:!text-emerald-400"
                  : "btn-primary"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isBlockDone ? "Bloco Concluído" : "Concluir Bloco"}</span>
            </button>
          </div>
        </div>

        {/* Seletor de Documentos quando o bloco tiver múltiplos arquivos */}
        {docs.length > 1 && (
          <>
            {/* Mobile (< sm): seletor compacto em 1 linha com menu recolhível */}
            <div className="sm:hidden space-y-1.5">
              <button
                type="button"
                onClick={() => setIsDocsOpen((v) => !v)}
                aria-expanded={isDocsOpen}
                className="w-full surface rounded-xl px-3.5 py-2.5 border border-tech flex items-center justify-between gap-2 cursor-pointer hover:border-indigo-500/40 transition-colors"
              >
                <span className="flex items-center gap-2 min-w-0">
                  {currentDoc?.isMain ? (
                    <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  ) : (
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  )}
                  <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-extrabold shrink-0">
                    {safeDocIdx + 1}/{docs.length}
                  </span>
                  <span className="text-xs font-bold text-pri truncate text-left">
                    {currentDoc?.shortTitle}
                  </span>
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 shrink-0">
                  <span>Trocar</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      isDocsOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {isDocsOpen && (
                <div className="surface rounded-xl border border-tech p-1.5 space-y-1 shadow-md">
                  {docs.map((d, idx) => {
                    const isCurrentDoc = idx === safeDocIdx;
                    return (
                      <Link
                        key={d.id}
                        to={`/aulas/${blockId}/${idx}`}
                        onClick={() => setIsDocsOpen(false)}
                        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                          isCurrentDoc
                            ? "bg-indigo-600 text-white"
                            : "text-sec hover:text-pri hover:bg-slate-500/10"
                        }`}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          {d.isMain ? (
                            <Layers className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          )}
                          <span className="truncate">{d.shortTitle}</span>
                        </span>
                        {isCurrentDoc && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Desktop / Tablet (sm+): abas horizontais */}
            <div className="hidden sm:flex flex-wrap items-center gap-2">
              {docs.map((d, idx) => {
                const isCurrentDoc = idx === safeDocIdx;
                return (
                  <Link
                    key={d.id}
                    to={`/aulas/${blockId}/${idx}`}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all max-w-full ${
                      isCurrentDoc
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "surface text-sec hover:text-pri border-tech"
                    }`}
                  >
                    {d.isMain ? <Layers className="w-3.5 h-3.5 shrink-0" /> : <BookOpen className="w-3.5 h-3.5 shrink-0" />}
                    <span className="break-words text-left">{d.shortTitle}</span>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* 0. MÓDULO REACT RICO (EduKit) — Prioridade máxima quando existir no registry */}
      {richLesson ? (
        <RichLessonView
          lesson={richLesson}
          baseUrl={baseUrl}
          mode={mode}
          axisNum={parsedAxisNum}
          onFinishBlock={handleFinishBlock}
          onDownloadFullLesson={doc ? handleDownloadFullLesson : undefined}
          onDownloadAxis={doc && parsedLesson?.hasAxes ? handleDownloadRichAxis : undefined}
        />
      ) : (
        <>
          {/* Stepper Sticky (apenas quando a aula Markdown tem Eixos e não está no modo contínuo) */}
          {parsedLesson?.hasAxes && !continuousMode && (
            <LessonStepperBar
              baseUrl={baseUrl}
              axes={parsedLesson.axes.map((a) => ({
                id: a.id,
                index: a.index,
                label: a.cleanTitle,
              }))}
              hasFinalQuestions={parsedLesson.finalQuestions.length > 0}
              activeStep={activeStepperStep}
              completedAxes={axesProgress.completedAxes}
            />
          )}

      {/* 1. LISTA PRÁTICA ABERTA (WORKSHEET) */}
      {worksheetData && (
        <div className="max-w-4xl mx-auto space-y-6">
          {worksheetData.introMd && (
            <div className="surface rounded-2xl p-5 sm:p-7 border border-tech">
              <MarkdownRenderer content={worksheetData.introMd} contextId={`${doc.id}_ws_intro`} docId={doc.id} />
            </div>
          )}
          <WorksheetForm docId={doc.id} data={worksheetData} />
          {worksheetData.outroMd && (
            <div className="surface rounded-2xl p-5 sm:p-7 border border-tech">
              <MarkdownRenderer content={worksheetData.outroMd} contextId={`${doc.id}_ws_outro`} docId={doc.id} />
            </div>
          )}
        </div>
      )}

      {/* 2. AULA GUIADA POR EIXOS */}
      {parsedLesson && parsedLesson.hasAxes && !continuousMode && (
        <>
          {mode === "summary" && (
            <LessonSummaryView
              docId={doc.id}
              title={doc.title}
              baseUrl={baseUrl}
              parsed={parsedLesson}
              completedAxes={axesProgress.completedAxes}
              onSwitchContinuousMode={() => setContinuousMode(true)}
              onDownloadFullLesson={handleDownloadFullLesson}
              onDownloadAxis={handleDownloadMarkdownAxis}
            />
          )}

          {mode === "axis" && currentAxis && (
            <LessonAxisView
              docId={doc.id}
              baseUrl={baseUrl}
              axis={currentAxis}
              totalAxes={parsedLesson.axes.length}
              hasFinalQuestions={parsedLesson.finalQuestions.length > 0}
              extraLabMd={parsedLesson.extraLabMd}
              isCompleted={axesProgress.completedAxes.includes(currentAxis.id)}
              onCompleteAxis={(axisId, nextStep) => markAxisCompleted(doc.id, axisId, nextStep)}
              onDownloadAxis={() => handleDownloadMarkdownAxis(currentAxis.index)}
            />
          )}

          {mode === "questoes" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <MCQuestionList
                docId={doc.id}
                scopeKey="final"
                questions={parsedLesson.finalQuestions}
                title={parsedLesson.finalQuestionsTitle}
                subtitle="Questões reais e adaptadas no padrão Instituto ACCESS para consolidar todos os eixos da aula."
              />

              {parsedLesson.checklistMd && (
                <div className="surface rounded-2xl p-5 sm:p-7 border border-tech">
                  <MarkdownRenderer
                    content={parsedLesson.checklistMd}
                    contextId={`${doc.id}_checklist`}
                    docId={doc.id}
                  />
                </div>
              )}

              <footer className="surface rounded-2xl p-5 border border-emerald-500/35 bg-emerald-500/[0.04] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  to={`${baseUrl}/eixo/${parsedLesson.axes.length}`}
                  className="btn-secondary !py-2.5 !px-4 !text-xs sm:!text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao Eixo {parsedLesson.axes.length}</span>
                </Link>
                <button
                  type="button"
                  onClick={handleFinishBlock}
                  className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm !bg-emerald-600"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Concluir Bloco na Trilha 🎉</span>
                </button>
              </footer>
            </div>
          )}
        </>
      )}

      {/* 3. MODO LEITURA CONTÍNUA OU DOCUMENTO SEM EIXOS (ex: Banco ACCESS puro) */}
      {parsedLesson && (!parsedLesson.hasAxes || continuousMode) && (
        <div className="max-w-4xl mx-auto space-y-6">
          {parsedLesson.hasAxes && continuousMode && (
            <div className="surface rounded-xl px-4 py-3 flex items-center justify-between gap-3 border border-indigo-500/30">
              <span className="text-xs font-semibold text-sec">
                Você está no <strong>Modo Leitura Contínua</strong> (aula completa em uma tela).
              </span>
              <button
                type="button"
                onClick={() => setContinuousMode(false)}
                className="btn-primary !py-1.5 !px-3 !text-xs shrink-0"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Voltar ao Modo por Eixos</span>
              </button>
            </div>
          )}

          <article className="surface rounded-2xl p-5 sm:p-8 border border-tech">
            <MarkdownRenderer
              content={parsedLesson.hasAxes ? doc.content.split(/^##\s+(?:[^\w\s]*\s*)?(?:BATERIA|SE[ÇC][ÃA]O DE FIXA[ÇC][ÃA]O|CADERNO DE \d+ QUEST)/im)[0] : parsedLesson.introMd}
              contextId={`${doc.id}_full`}
              docId={doc.id}
            />
          </article>

          {parsedLesson.finalQuestions.length > 0 && (
            <MCQuestionList
              docId={doc.id}
              scopeKey="final"
              questions={parsedLesson.finalQuestions}
              title={parsedLesson.finalQuestionsTitle}
              subtitle="Resolva e confira o gabarito comentado alternativa por alternativa."
            />
          )}

          {parsedLesson.checklistMd && (
            <div className="surface rounded-2xl p-5 sm:p-7 border border-tech">
              <MarkdownRenderer
                content={parsedLesson.checklistMd}
                contextId={`${doc.id}_post`}
                docId={doc.id}
              />
            </div>
          )}

          <div className="flex justify-end">
            <button type="button" onClick={handleFinishBlock} className="btn-primary">
              <ListChecks className="w-4 h-4" />
              <span>Marcar Bloco Concluído</span>
            </button>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}
