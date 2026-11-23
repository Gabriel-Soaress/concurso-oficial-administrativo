# Guia Oficial: Conversão de Aulas `.md` para Módulos React (`EduKit`)

Sempre que o aluno solicitar **"incorporar a aula ao sistema"** ou **"subir a aula para o site React"**:

## 1. Fluxo Obrigatório
> **REGRA DE OURO INVIOLÁVEL (MAPEAMENTO 1-PARA-1 · ZERO CONDENSAÇÃO):**
> O `.md` entregue é **fechado e sagrado como texto-base**. O agente **NUNCA** deve resumir, condensar, fundir subseções ou omitir parágrafos, bullets, exemplos ou explicações do `.md`.
> - Toda subseção (`### 1.`, `### 2.`, `### 3.`, `### 4.`...) do `.md` deve existir separadamente no `.tsx` com o **texto integral preservado**.
> - O trabalho do agente é **exclusivamente reorganizar visualmente** usando `<ProseSection>` e os componentes do `EduKit` (`ConceptCard`, `CompareGrid`, `KeyTable`, `FormulaSpotlight`, `TrapAlert`, `StepByStep`, `FlipCardsGrid`, `FeynmanCard`) para maximizar o destaque e a didática sem perder uma única frase.
> - A única adição permitida são as **3 questões diretas de checkpoint** ao final de cada Eixo (caso o `.md` ainda não as possua).

1. O arquivo `.md` em `semana-XX/<materia>_semana_XX.md` continua sendo a **base de dados pedagógica** (fácil de ler e editar).
2. Leia o `.md` e **converta seu conteúdo em um Módulo React/TypeScript** em:
   `app-react/src/lessons/semana-XX/<materia>.tsx`
   implementando a interface `RichLessonModule` (`@/types`).
3. **Estrutura obrigatória por Eixo:**
   - Divida o conteúdo em **Eixos focados** (`axes: RichLessonAxis[]`), sem paredões de texto corrido.
   - Em **cada Eixo**, inclua:
     - Componentes visuais da biblioteca **EduKit** (`@/components/edu`);
     - Um `<FeynmanCard />` de fechamento com 3 linhas;
     - **3 questões diretas de checkpoint** (`checkpointQuestions`) sobre o próprio eixo (4 alternativas A–D, gabarito e comentário).
   - Ao final do módulo (`finalQuestions`), inclua a **Bateria Final de Questões Reais + Adaptadas** no padrão Instituto ACCESS e o `checklistItems`.
4. **Registre o módulo** em `app-react/src/lessons/registry.ts` usando *lazy import*:
   ```ts
   { blockId: "w4_rlm", docIndex: 0, load: () => import("./semana-04/matematica") }
   ```
5. **Valide antes de finalizar:**
   ```bash
   cd app-react && npm run typecheck && npm run build
   ```

## 2. Catálogo de Componentes `EduKit` (`import { ... } from "@/components/edu"`)
- `<ProseSection number title>` — Bloco editorial obrigatório para parágrafos introdutórios, contexto narrativo e demonstrações integrais do `.md`.
- `<MathTex tex="..." display? bare? />` — KaTeX nativo inline ou em bloco (zero regex, zero scroll lateral).
- `<MathStack lines showFlowArrows? align? compact? />` — Pilha vertical de passagens matemáticas ("papel e caneta"), uma equação por linha, com setas opcionais (`↓`) e destaque esmeralda (`highlight: true`) na resposta final.
- `<GuidedCalcCard title badge? accent? banner? rows />` & `<GuidedCalcGrid>` — Bloquinhos estruturados de Matemática: cada linha traz `[Badge à esquerda]`, explicação curta em cima e faixa `<MathStack>` separada abaixo para as contas.
- `<ConceptCard title badge accent icon>` — Destaque para conceitos-chave e regras centrais.
- `<AxisContextCard eyebrow? title bridge problemSolved roadmap />` — Bloco obrigatório de contexto inicial no topo de cada Eixo (100% vertical: ponte com o eixo anterior, qual problema resolve e roteiro do eixo).
- `<ExampleShowcase title? items />` — Vitrine 100% vertical para exemplos progressivos: frase em caixa destacada de alto contraste (`verdict?: "right"|"wrong"|"neutral"`), tags coloridas desmontando peças da frase e leitura guiada logo abaixo.
- `<InlinePractice title subtitle? questions />` — Paradas Rápidas de fixação interativa NO MEIO do Eixo (`options` em 1 coluna, feedback imediato e botão Refazer) para consolidar subconceitos parciais antes de avançar.
- `<ProgressiveExamples items />` — Renderiza exemplos progressivos (`label`, `accent?`, `content`) em sub-cards espaçados com quebra de linha clara entre frases e subitens `(a)`, `(b)`, `(c)`, sem amontoar exemplos em listas `<ul>` corridas.
- `<DefinitionBlocks title? columns={1|2} items />` — Quebra conceitos irmãos, subtipos ou enumerações em cards individuais destacados (no desktop e no mobile renderiza em coluna vertical única para leitura fluida sem fadiga lateral).
- `<FormulaSpotlight title formulaTex? formulas? note? legend? />` — Fórmula em destaque ou lista vertical (`formulas[]`) de fórmulas empilhadas + passos + legenda visual dos símbolos. Nunca colocar duas fórmulas lado a lado com `|`.
- `<CompareGrid title mode="right-wrong"|"contrast" left right />` — Comparação Certo vs. Errado ou Conceito A vs. B.
- `<TrapAlert title trap escape />` — Pegadinha clássica da banca ACCESS vs. como escapar.
- `<StepByStep title problem steps defaultRevealAll? />` — Resolução passo a passo interativa (`steps` suportam `badge`, `content` e `mathLines` verticais separados do texto).
- `<AnalogyBox title tag>` — Analogias do dia a dia e casos práticos de Prefeitura.
- `<CfcFlow title causa fato consequencia />` — Pipeline Causa → Fato → Consequência (3 Escalas).
- `<FlipCardsGrid title cards />` — Flashcards clicáveis para memorização ativa (parônimos, verbos, fatores).
- `<KeyTable title headers rows />` — Tabelas-resumo limpas e responsivas (com bordas e zebra no desktop e cards empilhados no mobile — zero scroll lateral).
- `<AsciiKeyBlock title code />` — Contas armadas na chave e diagramas alinhados com quebra segura.
- `<FeynmanCard title lines />` — Síntese Feynman de 3 linhas (suporta `{ render, copyText }` para usar `<MathTex />`) com botão de copiar para o caderno.

## 3. Regras Invioláveis de Matemática, Tabelas e Layout Responsivo
1. **ZERO Scroll Lateral em Qualquer Tela (`overflow-x-auto` PROIBIDO):**
   - Nunca usar `overflow-x-auto` nem grades rígidas sem `minmax(0, 1fr)` em equações, tabelas, steppers, abas ou caixas ASCII.
   - Todo conteúdo deve caber confortavelmente tanto em **mobile (`390px`)** quanto em **desktop (`1280px`)**.
2. **Resolução "Papel e Caneta" (Vertical, Linha por Linha):**
   - Nunca encadear várias igualdades ou implicações compridas numa única linha horizontal (`a = b ⇒ c = d ⇒ e = f`).
   - Use `<MathStack lines={[...]} showFlowArrows />`, `mathLines` dentro de `<GuidedCalcCard>` / `<StepByStep>`, ou quebre comentários em blocos `$$...$$` onde cada etapa vai para a linha de baixo.
   - Em `<FormulaSpotlight>`, quando houver 2 fórmulas ou exemplos relacionados, use `formulas={[ ... ]}` empilhados verticalmente — jamais junte dois casos na mesma linha separados por `|`.
3. **Ritmo em Bloquinhos (`<GuidedCalcCard>` + `<GuidedCalcGrid>`):**
   - Não misturar contas longas dentro de parágrafos ou bullets corridos. Separe sempre: `[Rótulo / Passo]` → `[Explicação curta]` → `[Faixa visual com a conta vertical]`.
4. **KaTeX Obrigatório (Zero Unicode Matemático):**
   - Nunca escrever `ⁿ√a`, `⁴√81`, `a^(m/n)` ou frações em texto corrido quando houver suporte a KaTeX: use sempre `<MathTex tex="..." />` (ou `{ render: ..., copyText: ... }` dentro do `<FeynmanCard>`).
5. **Diretriz de Unidades Atômicas em Sequência Direta & Escala de Operações:**
   - Expressões que formam uma única unidade lógica (ex.: `↑ Minutos (4 → 10)`, `(x - 2)`, `x = 12 dias`) são renderizadas como átomos indivisíveis (`math-atom`) e **nunca** sofrem quebra de linha interna. Em sequências conectadas por `e`, `⇒` ou `⟶`, a eventual quebra em tela estreita ocorre apenas no conector.
   - Toda linha em `<MathStack />` e `<MathTex display />` renderiza em `\displaystyle` com fonte ampliada para que frações e expoentes fracionários ($8^{\frac{2}{3}}$) tenham leitura imediata.

---

## 4. Padrão Mínimo de Interatividade (Protocolo `D-E-A-M-P-C`)

Consulte `.agents/PROTOCOLO_PRODUCAO_AULA.md` (Fases 2 e 4). Ao construir qualquer módulo `.tsx`, garanta em todos os Eixos:
1. **`<FlipCardsGrid />` em Todo Eixo Denso:** inclua de **4 a 6 flashcards clicáveis** por eixo (`front`, `hint?`, `back`) cobrindo testes rápidos de 5 segundos, contrastes clássicos e pegadinhas da banca ACCESS.
2. **Fluxo 100% Vertical, Contexto Inicial, Explicação Simples Antes da Regra e Paradas Rápidas Inline:**
   - Abra TODO Eixo com `<AxisContextCard />` (1 coluna vertical: ponte com o degrau anterior, problema real resolvido e roteiro do eixo).
   - Em cada `<ProseSection>`, comece com parágrafos curtos em **voz calma de professor explicando o porquê da regra antes do rótulo técnico**, só depois apresente `<DefinitionBlocks />` em coluna única e destaque os exemplos com `<ExampleShowcase />` (frase grande, tags coloridas desmontando as peças e leitura guiada abaixo).
   - Evite cards teóricos lado a lado (`md:grid-cols-2`): todo o fluxo de leitura deve correr em **1 coluna vertical contínua**.
   - Em Eixos densos, intercale blocos `<InlinePractice />` (**Paradas Rápidas no meio do conteúdo**) para o aluno testar subconceitos parciais antes de avançar ao próximo bloco.
3. **Regra Anti-Texto Corrido (1 Conceito = 1 Bloco Destacado):** é proibido agrupar 2 ou mais conceitos, subtipos ou enumerações (`(1)... (2)... (3)...`) num único parágrafo `<p>`. Use `<DefinitionBlocks />` para separar e destacar cada conceito com respiro visual, mantendo 100% do conteúdo integral (zero condensação).
3. **Mapeamento Semântico dos "Gêmeos Confundíveis" e Pegadinhas:** nunca deixe comparações críticas apenas em texto corrido — use `<CompareGrid />` ou `<KeyTable />` e destaque armadilhas reais com `<TrapAlert />`.
4. **Diagramas Visuais em SVG Nativo:** sempre que uma explicação citar fluxograma, organograma, linha do tempo ou anatomia visual da frase/processo, desenhe o componente **`<svg viewBox="..." className="w-full h-auto" />` responsivo** (proibido prometer diagrama sem desenhá-lo).
5. **Auditoria Antes da Conversão:** nunca converta um `.md` sem antes aprová-lo com `python .agents/audit_lesson.py <arquivo.md>` e sincronizar com `python .agents/sync_lessons.py`.
6. **Validação Completa ao Final:** rode `npm run typecheck`, `npm test` e `npm run build` dentro de `app-react/`.
