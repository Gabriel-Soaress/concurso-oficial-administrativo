import { describe, expect, it } from "vitest";
import { evalMathStringToFloat, isWorksheetAnswerCorrect } from "../worksheetParser";

describe("worksheetParser math evaluation", () => {
  it("avalia frações, decimais, números mistos e porcentagens", () => {
    expect(evalMathStringToFloat("3/4")).toBeCloseTo(0.75);
    expect(evalMathStringToFloat("0,75")).toBeCloseTo(0.75);
    expect(evalMathStringToFloat("1 1/2")).toBeCloseTo(1.5);
    expect(evalMathStringToFloat("75%")).toBeCloseTo(0.75);
  });

  it("aceita equivalência numérica quando não exige forma exata", () => {
    const item = {
      num: 10,
      promptMd: "3/4",
      primaryAns: "3/4",
      primaryNorm: "3/4",
      acceptedNorms: ["3/4"],
      explanationMd: "",
      requireExactForm: false,
    };
    expect(isWorksheetAnswerCorrect("0,75", item)).toBe(true);
    expect(isWorksheetAnswerCorrect("6/8", item)).toBe(true);
    expect(isWorksheetAnswerCorrect("0,5", item)).toBe(false);
  });
});
