import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Circle, ExternalLink, FileText, Search } from "lucide-react";
import { ACCESS_EXAMS } from "@/data/accessExams";
import { ALL_EXAMS } from "@/data/exams";
import { useProgress } from "@/contexts/ProgressContext";

export function ProvasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { examsDone, toggleExamDone } = useProgress();

  const tab = searchParams.get("tab") === "geral" ? "geral" : "access";
  const query = searchParams.get("q") || "";
  const yearFilter = searchParams.get("ano") || "all";
  const typeFilter = searchParams.get("tipo") || "all";

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  };

  const filteredAccess = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ACCESS_EXAMS.filter((ex) => {
      if (yearFilter !== "all" && String(ex.y) !== yearFilter) return false;
      if (!q) return true;
      return (
        ex.o.toLowerCase().includes(q) ||
        ex.c.toLowerCase().includes(q) ||
        String(ex.y).includes(q)
      );
    });
  }, [query, yearFilter]);

  const filteredGeneral = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_EXAMS.filter((ex) => {
      if (yearFilter !== "all" && String(ex.y) !== yearFilter) return false;
      if (typeFilter === "simulado" && ex.i > 12) return false;
      if (typeFilter === "treino" && ex.i <= 12) return false;
      if (!q) return true;
      return (
        ex.o.toLowerCase().includes(q) ||
        ex.b.toLowerCase().includes(q) ||
        String(ex.i) === q
      );
    });
  }, [query, yearFilter, typeFilter]);

  const years = useMemo(() => {
    const src = tab === "access" ? ACCESS_EXAMS.map((e) => e.y) : ALL_EXAMS.map((e) => e.y);
    return Array.from(new Set(src)).sort((a, b) => b - a);
  }, [tab]);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
          Banco Oficial de Provas PDF
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pri">
          Acervo & Provas Instituto ACCESS
        </h1>
        <p className="text-sm text-sec">
          Filtros sincronizados na URL — recarregue à vontade sem perder sua busca.
        </p>
      </header>

      {/* Abas */}
      <div className="flex items-center gap-2 border-b border-tech pb-3 flex-wrap">
        <button
          type="button"
          onClick={() => updateParam("tab", "access")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
            tab === "access"
              ? "bg-indigo-600 text-white shadow-sm"
              : "surface text-sec hover:text-pri border border-tech"
          }`}
        >
          Instituto ACCESS ({ACCESS_EXAMS.length})
        </button>
        <button
          type="button"
          onClick={() => updateParam("tab", "geral")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
            tab === "geral"
              ? "bg-indigo-600 text-white shadow-sm"
              : "surface text-sec hover:text-pri border border-tech"
          }`}
        >
          Acervo Geral ({ALL_EXAMS.length} provas)
        </button>
      </div>

      {/* Barra de Filtros */}
      <div className="surface rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 border border-tech">
        <div className="relative sm:col-span-6">
          <Search className="w-4 h-4 text-mut absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => updateParam("q", e.target.value)}
            placeholder={
              tab === "access" ? "Buscar órgão, cargo ou ano..." : "Buscar órgão, banca ou nº da prova..."
            }
            className="input-tech !pl-10"
          />
        </div>

        <select
          value={yearFilter}
          onChange={(e) => updateParam("ano", e.target.value)}
          className="input-tech sm:col-span-3"
          aria-label="Filtrar por ano"
        >
          <option value="all">Todos os anos</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>

        {tab === "geral" && (
          <select
            value={typeFilter}
            onChange={(e) => updateParam("tipo", e.target.value)}
            className="input-tech sm:col-span-3"
            aria-label="Filtrar por tipo"
          >
            <option value="all">Todas (Simulados + Treino)</option>
            <option value="simulado">12 Simulados de Sábado</option>
            <option value="treino">Treino Diário (#13 a #93)</option>
          </select>
        )}
      </div>

      {/* Lista ACCESS */}
      {tab === "access" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredAccess.map((ex) => {
            const key = `access_${ex.i}`;
            const done = !!examsDone[key];
            return (
              <div
                key={ex.i}
                className={`surface rounded-2xl p-4 border flex flex-col justify-between gap-3 transition-colors ${
                  done ? "border-emerald-500/45 bg-emerald-500/[0.03]" : "border-tech"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        ACCESS #{String(ex.i).padStart(2, "0")}
                      </span>
                      <span className="px-2 py-0.5 rounded-md surface-muted font-mono text-[11px] font-bold text-sec">
                        {ex.y}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-pri mt-1 leading-snug">{ex.o}</h3>
                    <p className="text-xs text-mut mt-0.5">{ex.c}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExamDone(key)}
                    className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                      done ? "text-emerald-500" : "text-mut hover:text-pri"
                    }`}
                    title={done ? "Desmarcar como feita" : "Marcar como feita"}
                  >
                    {done ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-tech/70">
                  <a
                    href={`/prova-auto/provas-access/${ex.f}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-1.5 !px-3 !text-xs flex-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Prova PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`/prova-auto/provas-access/${ex.g}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-1.5 !px-3 !text-xs flex-1"
                  >
                    <span>Gabarito</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lista Acervo Geral (93 Provas) */}
      {tab === "geral" && (
        <div className="surface rounded-2xl border border-tech overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-tech surface-muted text-[11px] font-mono uppercase text-mut">
                  <th className="py-3 px-2.5 sm:px-4 w-10 sm:w-12">Feita</th>
                  <th className="py-3 px-2 sm:px-4">#</th>
                  <th className="py-3 px-2.5 sm:px-4">Órgão / Concurso</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Banca</th>
                  <th className="py-3 px-4 hidden md:table-cell">Ano</th>
                  <th className="py-3 px-2.5 sm:px-4 text-right">Arquivos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tech">
                {filteredGeneral.map((ex) => {
                  const done = !!examsDone[String(ex.i)];
                  const isSim = ex.i <= 12;
                  return (
                    <tr
                      key={ex.i}
                      className={`hover:bg-slate-500/[0.03] transition-colors ${
                        done ? "bg-emerald-500/[0.03]" : ""
                      }`}
                    >
                      <td className="py-3 px-2.5 sm:px-4">
                        <button
                          type="button"
                          onClick={() => toggleExamDone(String(ex.i))}
                          className={`cursor-pointer ${done ? "text-emerald-500" : "text-mut hover:text-pri"}`}
                          aria-label={`Marcar prova ${ex.i}`}
                        >
                          {done ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                        </button>
                      </td>
                      <td className="py-3 px-2 sm:px-4 font-mono text-xs font-bold text-pri whitespace-nowrap">
                        #{ex.i}
                        {isSim && (
                          <span className="ml-1 sm:ml-1.5 px-1 sm:px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 text-[10px]">
                            SIM
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-2.5 sm:px-4 min-w-0">
                        <div className="font-semibold text-pri text-xs sm:text-sm break-words">{ex.o}</div>
                        <div className="text-[11px] text-mut sm:hidden break-words">
                          {ex.b} · {ex.y}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs text-sec hidden sm:table-cell">{ex.b}</td>
                      <td className="py-3 px-4 font-mono text-xs text-mut hidden md:table-cell">{ex.y}</td>
                      <td className="py-3 px-2.5 sm:px-4 text-right">
                        <div className="inline-flex flex-wrap justify-end items-center gap-1 sm:gap-1.5">
                          <a
                            href={`/prova-auto/${ex.i}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary !py-1 !px-2 sm:!px-2.5 !text-[11px] sm:!text-xs"
                          >
                            Prova
                          </a>
                          {ex.g && (
                            <a
                              href={`/prova-auto/g${ex.i}.pdf`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary !py-1 !px-2 sm:!px-2.5 !text-[11px] sm:!text-xs"
                            >
                              Gab.
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
      )}
    </div>
  );
}
