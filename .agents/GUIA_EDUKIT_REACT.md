# GUIA EDUKIT REACT — ARQUIVO DESCONTINUADO

> [!IMPORTANT]
> **ESTE FLUXO FOI DESCONTINUADO POR DECISÃO DO ALUNO.**
> **NÃO** crie novos arquivos `.tsx` dentro de `app-react/src/lessons/`, **NÃO** registre aulas em `app-react/src/lessons/registry.ts` e **NÃO** duplique o conteúdo de `.md` em componentes React customizados (`<ProseSection>`, `<FlipCardsGrid />`, `<ExampleShowcase />`, etc.).

## Como o App React Funciona Agora (Fluxo Unificado)

1. A **única fonte de verdade** de qualquer aula é o arquivo Markdown em `semana-XX/<materia>_semana_XX.md`, sincronizado via:
   ```bash
   python .agents/sync_lessons.py
   ```
2. Sempre que uma aula `.md` NÃO está registrada em `registry.ts` (que agora deve permanecer vazio), o próprio `LessonPage.tsx` usa `parseLessonIntoAxes()` (`LessonAxisView.tsx`) para:
   - dividir automaticamente o `.md` por `## EIXO 1:`, `## EIXO 2:` etc.;
   - renderizar todos os cards CSS (`.edu-component`, `.edu-cards-grid`, `.edu-ex-list`), destaques coloridos (`<mark class="hl-...">`, `<u>`), tabelas responsivas, fórmulas KaTeX e diagramas `<svg>` com zoom em tela cheia;
   - transformar automaticamente as questões `### Questão XX` de cada Eixo em checkpoints interativos e as questões finais na Bateria Final (`MCQuestionList`);
   - manter o download `.md` por Eixo e da aula inteira 100% fiel ao arquivo original.

Para instruções atuais de escrita e recursos visuais no `.md`, consulte [`.agents/GUIA_DO_AGENTE.md`](GUIA_DO_AGENTE.md) e [`.agents/PROTOCOLO_PRODUCAO_AULA.md`](PROTOCOLO_PRODUCAO_AULA.md).
