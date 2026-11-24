import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import type { LessonDocument } from "@/types";
import { parseLessonIntoAxes } from "../lessonStepperParser";
import {
  buildAxisMarkdown,
  buildAxisMdFilename,
  buildFullLessonMarkdown,
  buildLessonMdFilename,
  resolveRichAxisMarkdown,
} from "../markdownDownload";

function loadRealDoc(relPath: string): LessonDocument {
  const filePath = path.resolve(__dirname, "../../../../", relPath);
  const content = fs.readFileSync(filePath, "utf8");
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return {
    id: path.basename(relPath, ".md"),
    file: relPath,
    filename: path.basename(relPath),
    title: titleMatch ? titleMatch[1].trim() : path.basename(relPath, ".md"),
    shortTitle: "Aula Teste",
    kind: "lesson",
    questionCount: 0,
    isMain: true,
    content,
  };
}

describe("markdownDownload", () => {
  it("gera nomes seguros e padronizados para aula completa e eixos individuais", () => {
    expect(
      buildLessonMdFilename({
        filename: "portugues_semana_04.md",
        title: "Português Semana 04",
      })
    ).toBe("portugues_semana_04.md");

    expect(
      buildLessonMdFilename({
        filename: "",
        title: "Noções de Administração Pública — Ato & Órgão!",
      })
    ).toBe("nocoes_de_administracao_publica_ato_orgao.md");

    expect(
      buildAxisMdFilename(
        {
          filename: "portugues_semana_04.md",
          title: "Português Semana 04",
        },
        2
      )
    ).toBe("portugues_semana_04_eixo_02.md");

    expect(
      buildAxisMdFilename(
        {
          filename: "",
          title: "Regência & Crase",
        },
        10
      )
    ).toBe("regencia_crase_eixo_10.md");
  });

  it("extrai apenas o Eixo 2 real de semana-04/portugues_semana_04.md com paradas e checkpoints", () => {
    const doc = loadRealDoc("semana-04/portugues_semana_04.md");
    const parsed = parseLessonIntoAxes(doc.content);
    const eixo2 = parsed.axes.find((a) => a.index === 2);

    expect(eixo2).toBeDefined();
    const axisMd = buildAxisMarkdown(doc.title, eixo2!);

    expect(axisMd.startsWith("# ")).toBe(true);
    expect(axisMd).toContain("Extrato do **Eixo 2**");
    expect(axisMd).toContain("## EIXO 2");
    expect(axisMd).toContain("Parada Rápida 2.A");
    expect(axisMd).toContain("### Questão 04");
    expect(axisMd).not.toContain("## EIXO 1");
    expect(axisMd).not.toContain("## EIXO 3");
    expect(axisMd).not.toContain("## Bateria");

    const fullMd = buildFullLessonMarkdown(doc);
    expect(fullMd).toContain("## EIXO 1");
    expect(fullMd).toContain("## EIXO 5");
    expect(fullMd.endsWith("\n")).toBe(true);
  });

  it("incorpora Eixo 7 do Markdown no Eixo 6 final de semana-03/portugues_semana_03.md", () => {
    const doc = loadRealDoc("semana-03/portugues_semana_03.md");
    const parsed = parseLessonIntoAxes(doc.content);

    expect(parsed.axes).toHaveLength(7);

    const resolved = resolveRichAxisMarkdown(doc, parsed, 6, 6);
    expect(resolved).not.toBeNull();
    expect(resolved!.filename).toBe("portugues_semana_03_eixo_06.md");
    expect(resolved!.content).toContain("## EIXO 6");
    expect(resolved!.content).toContain("## EIXO 7");
    expect(resolved!.content).not.toContain("## EIXO 5");
    expect(resolved!.content).not.toContain("## Bateria");
  });
});
