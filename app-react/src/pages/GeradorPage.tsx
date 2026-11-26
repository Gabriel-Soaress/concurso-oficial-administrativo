import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Bot, Check, Copy, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { WEEKS_DATA } from "@/data/weeks";
import { buildSpecificPrompt, type PromptMode, type PromptSubject } from "@/lib/promptBuilder";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/contexts/ToastContext";

export function GeradorPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { difficultyNotes, setDifficultyNotes, setCurrentWeek } = useProgress();
  const { showToast } = useToast();

  const weekNum = Math.min(12, Math.max(1, Number(searchParams.get("semana") || "1") || 1));
  const subject = (searchParams.get("materia") || "all") as PromptSubject;
  const mode: PromptMode = searchParams.get("modo") === "web" ? "web" : "agent";

  const [copied, setCopied] = useState(false);

  const week = WEEKS_DATA.find((w) => w.num === weekNum) || WEEKS_DATA[0];

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next, { replace: true });
    if (key === "semana") {
      setCurrentWeek(Number(value));
    }
  };

  const promptText = useMemo(
    () => buildSpecificPrompt(week, subject, mode, difficultyNotes),
    [week, subject, mode, difficultyNotes]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      showToast("Prompt copiado para a área de transferência!", "success");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Não foi possível copiar automaticamente.", "error");
    }
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
          Engenharia de Estudo com IA
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri">
          Gerador de Prompt Pedagógico
        </h1>
        <p className="text-sm text-sec">
          Gera prompts calibrados na didática lógica por Eixos, elementos visuais limpos e questões no padrão Instituto ACCESS.
        </p>
      </header>

      {/* Controles */}
      <div className="surface rounded-2xl p-5 sm:p-6 border border-tech space-y-5">
        {/* Persona */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => updateParam("modo", "agent")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              mode === "agent"
                ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500/30"
                : "border-tech surface-muted hover:border-indigo-500/40"
            }`}
          >
            <Bot className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-pri">Agente Local (Workspace)</div>
              <div className="text-xs text-mut mt-0.5">
                Cria os `.md` nas pastas, roda `sync_lessons.py` e atualiza seu banco Neon DB.
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => updateParam("modo", "web")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              mode === "web"
                ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500/30"
                : "border-tech surface-muted hover:border-indigo-500/40"
            }`}
          >
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-pri">IA Web (ChatGPT / Gemini / Claude)</div>
              <div className="text-xs text-mut mt-0.5">
                Sessão direta de 90 minutos no navegador com questões comentadas no padrão ACCESS.
              </div>
            </div>
          </button>
        </div>

        {/* Seletores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="weekSelect" className="block text-xs font-bold uppercase tracking-wider text-sec">
              Semana da Trilha
            </label>
            <select
              id="weekSelect"
              value={weekNum}
              onChange={(e) => updateParam("semana", e.target.value)}
              className="input-tech"
            >
              {WEEKS_DATA.map((w) => (
                <option key={w.num} value={w.num}>
                  {w.title}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subjectSelect" className="block text-xs font-bold uppercase tracking-wider text-sec">
              Foco / Matéria
            </label>
            <select
              id="subjectSelect"
              value={subject}
              onChange={(e) => updateParam("materia", e.target.value)}
              className="input-tech"
            >
              <option value="all">Semana Completa (As 4 Matérias)</option>
              <option value="port">Língua Portuguesa</option>
              <option value="rlm">Matemática & RLM</option>
              <option value="esp">Conhecimentos Específicos</option>
              <option value="ger">Conhecimentos Gerais & Atualidades</option>
              <option value="simulado">Simulado de Sábado & Caderno de Erros</option>
            </select>
          </div>
        </div>

        {/* Prévia Dinâmica do Conteúdo Selecionado (igual ao sistema original) */}
        <div id="generatorWeekPreview" className="surface-muted rounded-2xl p-4 sm:p-6 border border-tech">
          {subject === "all" ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3.5 mb-3.5 border-b border-tech">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    Semana Completa
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-pri">{week.title}</h4>
                </div>
                <span className="text-xs text-mut">{week.prereq}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
                <div className="surface rounded-xl p-3.5 space-y-1.5 border border-tech">
                  <span className="inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-full badge-port">
                    Português
                  </span>
                  <p className="text-sec leading-relaxed m-0">{week.port}</p>
                </div>
                <div className="surface rounded-xl p-3.5 space-y-1.5 border border-tech">
                  <span className="inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-full badge-rlm">
                    Matemática & RLM
                  </span>
                  <p className="text-sec leading-relaxed m-0">{week.rlm}</p>
                </div>
                <div className="surface rounded-xl p-3.5 space-y-1.5 border border-tech">
                  <span className="inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-full badge-esp">
                    Específicos
                  </span>
                  <p className="text-sec leading-relaxed m-0">{week.esp}</p>
                </div>
                <div className="surface rounded-xl p-3.5 space-y-1.5 border border-tech">
                  <span className="inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-full badge-ger">
                    Gerais & Simulado
                  </span>
                  <p className="text-sec leading-relaxed m-0">{week.ger}</p>
                </div>
              </div>
            </>
          ) : (
            (() => {
              const focusMap: Record<
                Exclude<PromptSubject, "all">,
                { badge: string; label: string; content: string; method: string }
              > = {
                port: {
                  badge: "badge-port",
                  label: "Modelo Exclusivo • Língua Portuguesa",
                  content: week.port,
                  method:
                    "Foco na origem lógica das regras e exceções gramaticais, sem enviar informações das outras matérias."
                },
                rlm: {
                  badge: "badge-rlm",
                  label: "Modelo Exclusivo • Matemática e RLM",
                  content: week.rlm,
                  method:
                    "Foco na intuição real da conta antes da fórmula e resolução passo a passo, sem poluir com outras matérias."
                },
                esp: {
                  badge: "badge-esp",
                  label: "Modelo Exclusivo • Conhecimentos Específicos",
                  content: week.esp,
                  method:
                    "Foco em ensinar do zero como o fluxo prático de uma Prefeitura Municipal, com quadros comparativos."
                },
                ger: {
                  badge: "badge-ger",
                  label: "Modelo Exclusivo • Conhecimentos Gerais",
                  content: week.ger,
                  method:
                    "Foco na conexão Causa -> Fato -> Consequência nas 3 escalas (Birigui/Região <-> SP <-> Brasil)."
                },
                simulado: {
                  badge: "badge-sim",
                  label: "Modelo Exclusivo • Simulado & Diagnóstico de Erros",
                  content: mode === "agent" ? week.simulado : week.simBanca,
                  method:
                    mode === "agent"
                      ? "Analisa diretamente o PDF do simulado na pasta local prova-auto/ e monta o Caderno de Erros."
                      : "Gera um Simulado Diagnóstico calibrado na banca da semana ou corrige suas questões no chat."
                }
              };
              const f = focusMap[subject as Exclude<PromptSubject, "all">];
              return (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-tech">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-mono text-xs font-bold px-3 py-0.5 rounded-full ${f.badge}`}>
                        {f.label}
                      </span>
                      <span className="text-xs font-bold text-sec">{week.title}</span>
                    </div>
                    <span className="text-xs font-mono text-mut">
                      {mode === "agent" ? `Versão Agente Local (${week.folder}/)` : "Versão IA Web"}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div>
                      <strong className="font-semibold text-pri">Conteúdo que rege este prompt:</strong>{" "}
                      <span className="text-sec">{f.content}</span>
                    </div>
                    <div className="text-xs text-mut">{f.method}</div>
                  </div>
                </>
              );
            })()
          )}
        </div>

        {/* Dúvida / Dificuldade (sincronizado com banco) */}
        <div className="space-y-1.5">
          <label htmlFor="difficultyInput" className="block text-xs font-bold uppercase tracking-wider text-sec">
            Dúvida Específica ou Dificuldade (opcional · salvo na nuvem)
          </label>
          <textarea
            id="difficultyInput"
            rows={2}
            value={difficultyNotes}
            onChange={(e) => setDifficultyNotes(e.target.value)}
            placeholder="Ex: Tenho travado na hora de montar equações de 1º grau a partir de problemas com texto..."
            className="input-tech resize-y"
          />
        </div>
      </div>

      {/* Preview e Ações */}
      <div className="surface rounded-2xl p-5 sm:p-6 border border-tech space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-sm font-extrabold text-pri">Prompt Gerado</div>
          <div className="flex items-center flex-wrap gap-2">
            <button type="button" onClick={handleCopy} className="btn-primary !py-2 !px-4 !text-xs">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copiado!" : "Copiar Prompt"}</span>
            </button>
            {mode === "web" && (
              <>
                <a
                  href="https://chatgpt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3 !text-xs"
                >
                  <span>ChatGPT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3 !text-xs"
                >
                  <span>Gemini</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </>
            )}
          </div>
        </div>

        <pre className="p-4 rounded-xl surface-muted border border-tech text-xs sm:text-sm font-mono whitespace-pre-wrap leading-relaxed text-pri max-h-[460px] overflow-y-auto">
          {promptText}
        </pre>
      </div>
    </div>
  );
}
