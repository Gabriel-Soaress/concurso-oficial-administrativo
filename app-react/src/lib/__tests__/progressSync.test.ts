import { describe, expect, it } from "vitest";
import {
  MAX_KEEPALIVE_BODY_BYTES,
  PATCH_PROGRESS_SQL,
  UPSERT_PROGRESS_SQL,
  buildKeepaliveExitRequestBody,
  extractCompactPatchChecklist,
  isPlainRecordEqual,
} from "../progressSync";
import type { ChecklistState } from "@/types";

describe("progressSync", () => {
  it("usa UPSERT completo no keepalive quando o payload cabe abaixo do limite", () => {
    const checklist: ChecklistState = {
      w5_rlm: true,
      _theme: "dark",
      _axesProgress: {
        w5_rlm_doc0: {
          completedAxes: ["eixo-1", "eixo-2"],
          lastStep: "eixo-3",
          completedAt: "2026-11-26T23:27:37.235Z",
        },
      },
    };

    const result = buildKeepaliveExitRequestBody(3, {
      checklist,
      examsDone: { "1": true },
      difficultyNotes: "Revisar inequações",
      currentWeek: 5,
    });

    expect(result.isCompactPatch).toBe(false);
    const parsed = JSON.parse(result.body);
    expect(parsed.query).toBe(UPSERT_PROGRESS_SQL);
    const syncedChecklist = JSON.parse(parsed.params[1]);
    expect(syncedChecklist._axesProgress.w5_rlm_doc0.completedAxes).toEqual(["eixo-1", "eixo-2"]);
  });

  it("alterna automaticamente para PATCH compacto abaixo de 64 KiB quando _quizStore excede 56 KB", () => {
    const hugeAnswers: Record<string, string> = {};
    const hugeChecked: Record<string, boolean> = {};
    for (let i = 1; i <= 1800; i++) {
      hugeAnswers[`final_question_item_${i}`] = "A";
      hugeChecked[`final_question_item_${i}`] = true;
    }

    const checklist: ChecklistState = {
      w5_rlm: true,
      _axesProgress: {
        w5_rlm_doc0: {
          completedAxes: ["eixo-1", "eixo-2", "eixo-3"],
          lastStep: "eixo-4",
          completedAt: "2026-11-26T23:30:00.000Z",
        },
      },
      _studyTime: {
        totalSeconds: 1500,
        sessionCount: 3,
        byDay: { "2026-11-26": 1500 },
        byCategory: { eixo: 1500 },
        byTarget: { w5_rlm: 1500 },
      },
      _simulados: {
        "simulado-sem-01-04": {
          answers: { q1: "B" },
          eliminated: {},
          corrected: false,
          correctedMaterias: {},
          elapsedSeconds: 420,
        },
      },
      _quizzes: { w1_rlm_doc0: { answers: { "1": "A" } } },
      _quizStore: {
        w4_port_doc0: {
          mcAnswers: hugeAnswers,
          mcChecked: hugeChecked,
        },
      },
    };

    const fullSize = JSON.stringify(checklist).length;
    expect(fullSize).toBeGreaterThan(MAX_KEEPALIVE_BODY_BYTES);

    const result = buildKeepaliveExitRequestBody(3, {
      checklist,
      examsDone: {},
      difficultyNotes: "",
      currentWeek: 5,
    });

    expect(result.isCompactPatch).toBe(true);
    const payloadBytes = new TextEncoder().encode(result.body).length;
    expect(payloadBytes).toBeLessThan(65_536);
    expect(payloadBytes).toBeLessThan(10_000);

    const parsed = JSON.parse(result.body);
    expect(parsed.query).toBe(PATCH_PROGRESS_SQL);
    const patchedChecklist = JSON.parse(parsed.params[1]);
    expect(patchedChecklist._quizStore).toBeUndefined();
    expect(patchedChecklist._quizzes).toBeUndefined();
    expect(patchedChecklist.w5_rlm).toBe(true);
    expect(patchedChecklist._axesProgress.w5_rlm_doc0.completedAxes).toEqual(["eixo-1", "eixo-2", "eixo-3"]);
    expect(patchedChecklist._studyTime.totalSeconds).toBe(1500);
    expect(patchedChecklist._simulados["simulado-sem-01-04"].answers.q1).toBe("B");
  });

  it("extractCompactPatchChecklist não muta o objeto original", () => {
    const original: ChecklistState = {
      w5_esp: true,
      _quizStore: { w5_esp_doc0: { mcAnswers: { q1: "A" } } },
      _quizzes: { w1_port_doc0: { answers: { "1": "C" } } },
      _axesProgress: { w5_esp_doc0: { completedAxes: ["eixo-1"] } },
    };

    const compact = extractCompactPatchChecklist(original);
    expect(compact._quizStore).toBeUndefined();
    expect(compact._quizzes).toBeUndefined();
    expect(compact._axesProgress).toEqual(original._axesProgress);
    expect(original._quizStore).toBeDefined();
    expect(original._quizzes).toBeDefined();
  });

  it("isPlainRecordEqual compara objetos aninhados independentemente da ordem de chaves ou undefined", () => {
    const a = { x: 1, nested: { b: 2, a: 1, opt: undefined }, arr: [1, { k: "v" }] };
    const b = { nested: { a: 1, b: 2 }, arr: [1, { k: "v" }], x: 1 };
    const c = { x: 1, nested: { a: 1, b: 3 }, arr: [1, { k: "v" }] };

    expect(isPlainRecordEqual(a, b)).toBe(true);
    expect(isPlainRecordEqual(a, c)).toBe(false);
  });
});
