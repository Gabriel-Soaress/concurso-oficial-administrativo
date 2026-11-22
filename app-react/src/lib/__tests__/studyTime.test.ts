import { describe, expect, it } from "vitest";
import {
  addStudyDelta,
  classifyStudyRoute,
  computeStudyAverages,
  formatStudyDuration,
  getLocalDateKey,
  mergeStudyTimeStats,
} from "../studyTime";
import { mergeCloudAndLocalChecklist } from "../legacyQuizBridge";
import type { ChecklistState } from "@/types";

describe("studyTime", () => {
  it("classifica rotas de matéria, eixo, questões, simulado e ignora navegação geral", () => {
    expect(classifyStudyRoute("/aulas/w4_port")).toEqual({ kind: "aula", target: "w4_port" });
    expect(classifyStudyRoute("/aulas/w4_port/0")).toEqual({ kind: "aula", target: "w4_port" });
    expect(classifyStudyRoute("/aulas/w4_port/0/eixo/3")).toEqual({ kind: "eixo", target: "w4_port" });
    expect(classifyStudyRoute("/aulas/w4_port/0/questoes")).toEqual({ kind: "questoes", target: "w4_port" });
    expect(classifyStudyRoute("/simulados/simulado-sem-01-03")).toEqual({
      kind: "simulado",
      target: "simulado-sem-01-03",
    });

    expect(classifyStudyRoute("/cronograma")).toBeNull();
    expect(classifyStudyRoute("/metodo")).toBeNull();
    expect(classifyStudyRoute("/gerador")).toBeNull();
    expect(classifyStudyRoute("/provas")).toBeNull();
    expect(classifyStudyRoute("/simulados")).toBeNull();
  });

  it("acumula segundos por dia local, categoria e alvo, limitando saltos irreais", () => {
    const day1 = new Date(2026, 10, 21, 22, 30, 0); // 21/11/2026 22:30 fuso local
    const s1 = addStudyDelta(undefined, 900, "eixo", "w4_port", true, day1);
    expect(s1.totalSeconds).toBe(900);
    expect(s1.sessionCount).toBe(1);
    expect(s1.byDay[getLocalDateKey(day1)]).toBe(900);
    expect(s1.byCategory.eixo).toBe(900);
    expect(s1.byTarget.w4_port).toBe(900);

    // Salto irreal (> 7200s) é limitado a 7200s
    const s2 = addStudyDelta(s1, 99999, "simulado", "simulado-sem-01-03", false, day1);
    expect(s2.totalSeconds).toBe(900 + 7200);
    expect(s2.sessionCount).toBe(1);
    expect(s2.byCategory.simulado).toBe(7200);
  });

  it("calcula médias diária e por sessão e formata durações corretamente", () => {
    const day1 = new Date(2026, 10, 20, 10, 0, 0);
    const day2 = new Date(2026, 10, 21, 10, 0, 0);

    let stats = addStudyDelta(undefined, 3600, "aula", "w4_port", true, day1);
    stats = addStudyDelta(stats, 1800, "simulado", "simulado-sem-01-03", true, day2);

    const avg = computeStudyAverages(stats, day2);
    expect(avg.totalSeconds).toBe(5400);
    expect(avg.activeDays).toBe(2);
    expect(avg.avgPerDaySeconds).toBe(2700); // 45 min
    expect(avg.avgPerSessionSeconds).toBe(2700);
    expect(avg.todaySeconds).toBe(1800);

    expect(formatStudyDuration(0)).toBe("0 min");
    expect(formatStudyDuration(42)).toBe("< 1 min");
    expect(formatStudyDuration(2700)).toBe("45 min");
    expect(formatStudyDuration(3600)).toBe("1h");
    expect(formatStudyDuration(5400)).toBe("1h 30m");
  });

  it("mescla _studyTime local e nuvem sem perda no mergeCloudAndLocalChecklist", () => {
    const localStats = addStudyDelta(
      undefined,
      1200,
      "eixo",
      "w4_port",
      true,
      new Date(2026, 10, 21, 14, 0, 0)
    );
    const cloudStats = addStudyDelta(
      undefined,
      2400,
      "simulado",
      "simulado-sem-01-03",
      true,
      new Date(2026, 10, 20, 14, 0, 0)
    );

    const mergedDirect = mergeStudyTimeStats(localStats, cloudStats);
    expect(mergedDirect?.totalSeconds).toBe(3600);
    expect(mergedDirect?.byDay["2026-11-20"]).toBe(2400);
    expect(mergedDirect?.byDay["2026-11-21"]).toBe(1200);

    const local: ChecklistState = { _studyTime: localStats };
    const cloud: ChecklistState = { _studyTime: cloudStats };
    const mergedChecklist = mergeCloudAndLocalChecklist(local, cloud);
    expect(mergedChecklist._studyTime?.totalSeconds).toBe(3600);
  });
});
