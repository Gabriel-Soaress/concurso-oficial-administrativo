import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, Sparkles } from "lucide-react";
import type { LessonAxis } from "@/types";
import { renderInlineMarkdown } from "@/lib/markdown";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { MCQuestionList } from "./MCQuestionList";
import { useToast } from "@/contexts/ToastContext";

interface LessonAxisViewProps {
  docId: string;
  baseUrl: string;
  axis: LessonAxis;
  totalAxes: number;
  hasFinalQuestions: boolean;
  extraLabMd?: string;
  isCompleted: boolean;
  onCompleteAxis: (axisId: string, nextStep: string) => void;
  onDownloadAxis?: () => void;
}

export function LessonAxisView({
  docId,
  baseUrl,
  axis,
  totalAxes,
  hasFinalQuestions,
  extraLabMd,
  isCompleted,
  onCompleteAxis,
  onDownloadAxis,
}: LessonAxisViewProps) {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const isLastAxis = axis.index === totalAxes;
  const remainingAxes = totalAxes - axis.index;

  const prevUrl = axis.index === 1 ? baseUrl : `${baseUrl}/eixo/${axis.index - 1}`;
  const nextUrl = isLastAxis
    ? hasFinalQuestions
      ? `${baseUrl}/questoes`
      : baseUrl
    : `${baseUrl}/eixo/${axis.index + 1}`;

  const nextStepKey = isLastAxis ? (hasFinalQuestions ? "questoes" : "summary") : `eixo-${axis.index + 1}`;

  const remainingText = isLastAxis
    ? hasFinalQuestions
      ? "Próximo passo: Bateria Final de Questões"
      : "Último eixo desta aula!"
    : remainingAxes === 1
      ? hasFinalQuestions
        ? "Falta 1 eixo + Bateria Final"
        : "Falta apenas 1 eixo"
      : hasFinalQuestions
        ? `Faltam ${remainingAxes} eixos + Bateria Final`
        : `Faltam ${remainingAxes} eixos`;

  const handleAdvance = () => {
    onCompleteAxis(axis.id, nextStepKey);
    showToast(`Eixo ${axis.index} concluído!`, "success");
    navigate(nextUrl);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Conteúdo Teórico Focado do Eixo */}
      <article className="surface rounded-2xl p-5 sm:p-8 border border-tech space-y-4">
        <div className="flex items-start sm:items-center justify-between gap-3 pb-4 border-b border-tech flex-wrap">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                EIXO {axis.index} DE {totalAxes}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
                </span>
              )}
            </div>
            <h2
              className="text-xl sm:text-2xl font-extrabold text-pri leading-snug"
              dangerouslySetInnerHTML={{
                __html: renderInlineMarkdown(axis.cleanTitle, `${docId}_ax_title_${axis.index}`),
              }}
            />
          </div>

          {onDownloadAxis && (
            <button
              type="button"
              onClick={onDownloadAxis}
              className="btn-secondary !py-1.5 !px-3 !text-xs shrink-0"
              title={`Baixar apenas o Eixo ${axis.index} em Markdown (ideal para NotebookLM)`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Eixo {axis.index} (.md)</span>
            </button>
          )}
        </div>

        <MarkdownRenderer
          content={axis.theoryMd}
          contextId={`${docId}_axis_${axis.index}`}
          docId={docId}
        />

        {/* Se for o último eixo e houver Laboratório/Raio-X antes da bateria, exibe aqui */}
        {isLastAxis && extraLabMd && (
          <div className="pt-6 mt-6 border-t border-tech">
            <MarkdownRenderer
              content={extraLabMd}
              contextId={`${docId}_extra_lab`}
              docId={docId}
            />
          </div>
        )}
      </article>

      {/* Bloco de 3 Questões Diretas de Checkpoint do Eixo (quando presentes no .md) */}
      {axis.checkpointQuestions.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-mono uppercase tracking-wider font-extrabold text-amber-600 dark:text-amber-400">
              Checkpoint Rápido · Fixação Imediata do Eixo {axis.index}
            </h3>
          </div>
          <MCQuestionList
            docId={docId}
            scopeKey={`axis_${axis.index}`}
            questions={axis.checkpointQuestions}
            title={`Prática Direta do Eixo ${axis.index}`}
            subtitle="Resolva estas questões curtas antes de avançar para consolidar o conceito na memória."
            compact
          />
        </section>
      )}

      {/* Rodapé de Navegação & Progresso */}
      <footer className="surface rounded-2xl p-4 sm:p-5 border border-tech flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate(prevUrl)}
          className="btn-secondary !py-2.5 !px-4 !text-xs sm:!text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{axis.index === 1 ? "Voltar ao Início" : `Eixo ${axis.index - 1}`}</span>
        </button>

        <div className="text-center">
          <div className="text-xs font-mono font-bold text-pri">
            Eixo {axis.index} de {totalAxes}
          </div>
          <div className="text-[11px] text-mut mt-0.5">{remainingText}</div>
        </div>

        <button
          type="button"
          onClick={handleAdvance}
          className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm"
        >
          <span>
            {isLastAxis
              ? hasFinalQuestions
                ? "Concluir & Ir para Bateria Final"
                : "Concluir Último Eixo"
              : `Concluir & Ir ao Eixo ${axis.index + 1}`}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
