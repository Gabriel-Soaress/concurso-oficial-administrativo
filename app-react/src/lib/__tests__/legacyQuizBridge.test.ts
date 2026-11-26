import { describe, expect, it } from "vitest";
import {
  convertLegacyQuizToDocState,
  hydrateChecklistWithLegacyQuizzes,
  mergeCloudAndLocalChecklist,
} from "../legacyQuizBridge";
import type { ChecklistState } from "@/types";

describe("legacyQuizBridge", () => {
  it("converte _quizzes legado para _quizStore nos escopos final e rich_final", () => {
    const converted = convertLegacyQuizToDocState({
      total: 10,
      answers: { "1": "A", "5": "C" },
      checkedMap: { "1": true, "5": true },
      eliminated: { "5_A": true, "5_B": false },
      hideCommMap: { "1": false },
      submitted: true,
    });

    expect(converted.mcAnswers).toEqual({
      final_q1: "A",
      rich_final_q1: "A",
      final_q5: "C",
      rich_final_q5: "C",
    });
    expect(converted.mcChecked).toEqual({
      final_q1: true,
      rich_final_q1: true,
      final_q5: true,
      rich_final_q5: true,
    });
    expect(converted.mcEliminated).toEqual({
      final_q5_A: true,
      rich_final_q5_A: true,
    });
    expect(converted.mcOpenCommentary).toEqual({
      final_q1: true,
      rich_final_q1: true,
    });
    expect(converted.mcSubmittedAll).toBe(true);
  });

  it("não sobrescreve respostas existentes em _quizStore e preserva checkpoints por eixo", () => {
    const converted = convertLegacyQuizToDocState(
      {
        answers: { "1": "A", "2": "D" },
        checkedMap: { "1": true, "2": true },
        submitted: true,
      },
      {
        mcAnswers: { final_q1: "B", rich_axis_1_q1: "C" },
        mcChecked: { final_q1: true, rich_axis_1_q1: true },
        mcSubmittedAll: false,
      }
    );

    expect(converted.mcAnswers?.final_q1).toBe("B");
    expect(converted.mcAnswers?.rich_final_q1).toBe("A");
    expect(converted.mcAnswers?.final_q2).toBe("D");
    expect(converted.mcAnswers?.rich_axis_1_q1).toBe("C");
    expect(converted.mcSubmittedAll).toBe(false);
  });

  it("hidrata _quizStore sem apagar _quizzes original", () => {
    const input: ChecklistState = {
      w3_port: true,
      _quizzes: {
        w3_port_doc0: {
          answers: { "2": "C", "10": "C" },
          checkedMap: { "2": true, "10": true },
          eliminated: { "10_A": true },
          submitted: true,
        },
      },
    };

    const hydrated = hydrateChecklistWithLegacyQuizzes(input);

    expect(hydrated._quizzes?.w3_port_doc0?.answers).toEqual({ "2": "C", "10": "C" });
    expect(hydrated._quizStore?.w3_port_doc0?.mcAnswers?.final_q2).toBe("C");
    expect(hydrated._quizStore?.w3_port_doc0?.mcAnswers?.rich_final_q10).toBe("C");
    expect(hydrated._quizStore?.w3_port_doc0?.mcEliminated?.rich_final_q10_A).toBe(true);
  });

  it("mergeCloudAndLocalChecklist prioriza nuvem e mescla _axesProgress e _quizzes", () => {
    const local: ChecklistState = {
      _theme: "dark",
      _axesProgress: {
        w4_port_doc0: { completedAxes: ["eixo-1"], lastStep: "eixo-1" },
      },
      _quizStore: {
        w4_port_doc0: { mcAnswers: { rich_axis_1_q1: "B" }, mcChecked: { rich_axis_1_q1: true } },
      },
    };

    const cloud: ChecklistState = {
      w3_port: true,
      _theme: "light",
      _axesProgress: {
        w4_port_doc0: { completedAxes: ["eixo-2"], lastStep: "eixo-2" },
      },
      _quizzes: {
        w4_esp_doc0: {
          answers: { "1": "A" },
          checkedMap: { "1": true },
          submitted: true,
        },
      },
    };

    const merged = mergeCloudAndLocalChecklist(local, cloud);

    expect(merged.w3_port).toBe(true);
    expect(merged._theme).toBe("light");
    expect(merged._axesProgress?.w4_port_doc0?.completedAxes).toEqual(["eixo-1", "eixo-2"]);
    expect(merged._quizStore?.w4_port_doc0?.mcAnswers?.rich_axis_1_q1).toBe("B");
    expect(merged._quizStore?.w4_esp_doc0?.mcAnswers?.final_q1).toBe("A");
    expect(merged._quizStore?.w4_esp_doc0?.mcAnswers?.rich_final_q1).toBe("A");
  });

  it("preserva simulados respondidos localmente ao mesclar com a nuvem", () => {
    const local: ChecklistState = {
      _simulados: {
        "simulado-sem-01-04": {
          answers: { pt3_q1: "A", pt3_q2: "C" },
          eliminated: { pt3_q1_B: true },
          corrected: false,
          correctedMaterias: { portugues: true },
          elapsedSeconds: 320,
        },
        "simulado-sem-01-03": {
          answers: { pt2_q1: "B" },
          eliminated: {},
          corrected: false,
          correctedMaterias: {},
          elapsedSeconds: 10,
        },
      },
    };

    const cloud: ChecklistState = {
      _simulados: {
        "simulado-sem-01-03": {
          answers: { pt2_q1: "A", pt2_q2: "D" },
          eliminated: {},
          corrected: true,
          correctedMaterias: { portugues: true },
          elapsedSeconds: 500,
        },
      },
    };

    const merged = mergeCloudAndLocalChecklist(local, cloud);

    expect(merged._simulados?.["simulado-sem-01-04"]?.answers).toEqual({ pt3_q1: "A", pt3_q2: "C" });
    expect(merged._simulados?.["simulado-sem-01-04"]?.correctedMaterias).toEqual({ portugues: true });
    expect(merged._simulados?.["simulado-sem-01-03"]?.answers).toEqual({ pt2_q1: "A", pt2_q2: "D" });
    expect(merged._simulados?.["simulado-sem-01-03"]?.corrected).toBe(true);
  });
});
