# Protocolo Mestre de Produção de Aulas — Anti-Superficialidade (`D-E-A-M-P-C`)

> **Finalidade:** Impedir que qualquer aula seja gerada de forma rasa, apressada, incompleta ou com promessas não cumpridas, ao mesmo tempo em que **corta teoria acadêmica irrelevante** que não cai em prova de Nível Médio (Oficial Administrativo — Banca Instituto ACCESS).
> **Regra Absoluta:** Nenhuma aula nova está pronta até passar com `[OK]` em `python .agents/audit_lesson.py <arquivo.md>`, ser sincronizada com `python .agents/sync_lessons.py` e convertida 1-para-1 para módulo React `EduKit` em `app-react/src/lessons/`.

---

## FASE 1 — Pesquisa Prévia e Escopo Cirúrgico (Antes de Escrever)

Antes de digitar o título da aula, o agente deve executar estes 4 passos obrigatórios:

1. **Ler o Recorte Oficial e os Pré-requisitos:**
   - Consultar `.agents/GUIA_DO_AGENTE.md` (Seções 3 e 5) e `app-react/src/data/weeks.ts` para confirmar exatamente o tema da semana e o que já foi ensinado nas semanas anteriores.
2. **Definir o Filtro Anti-Enrolação (O que ENTRA vs. O que FICA DE FORA):**
   - Mapear todos os subconceitos essenciais exigidos no **Edital Nível Médio / Oficial Administrativo / Banca Instituto ACCESS**.
   - Explicitar no início da aula (e seguir rigorosamente) o que **ENTRA** (tudo que decide questão na prova) e o que **FICA DE FORA** (classificações filológicas raras, terminologia universitária obscura, polêmicas doutrinárias que não caem em concurso municipal).
3. **Varredura Obrigatória no Acervo Real (Proibido Usar `1.pdf` a `12.pdf`):**
   - Pesquisar questões reais em `prova-auto/provas-access/` e `prova-auto/13.pdf` a `93.pdf`.
   - **NUNCA** extrair questões de `prova-auto/1.pdf` a `12.pdf` (reservadas aos 12 Simulados de Sábado).
   - **CONFERÊNCIA OBRIGATÓRIA DE GABARITO:** Sempre abrir o arquivo `gabarito_*.pdf` ou `g*.pdf` correspondente e conferir o **Gabarito Definitivo Retificado** para o cargo exato. Descartar imediatamente qualquer questão anulada (`X`, `*` ou `**`).
4. **Contrato de Sumário (Zero Promessas Vazias):**
   - Todo tópico ou termo listado no `## Sumário` ou no subtítulo de um `## EIXO` **DEVE** receber uma subseção `###` completa no corpo da aula. É proibido citar um subtipo (ex.: *Voz Reflexiva*, *Objeto Direto Preposicionado*) na introdução ou no índice e esquecer de desenvolvê-lo no texto.

---

## FASE 2 — Contrato Didático `D-E-A-M-P-C` por Subconceito

- **Abertura Obrigatória de Todo Eixo (`Contexto Inicial`):** Todo `## EIXO X` deve abrir com um bloco de contexto inicial (`> [!NOTE]` no `.md` / `<AxisContextCard />` no `.tsx`) trazendo ponte com o eixo anterior, o problema real que aquele eixo resolve na prova e o roteiro de subtópicos. Cada subtópico (`###`) deve iniciar em **voz calma de professor explicando o porquê da regra antes do rótulo técnico**.
- **Paradas Rápidas no Meio dos Eixos:** Em eixos densos, intercale blocos `#### 🎯 Parada Rápida X.A` (`.md`) / `<InlinePractice />` (`.tsx`) com 1 a 2 questões curtas de fixação ativa no meio da teoria, antes de mudar de bloco conceitual — sem substituir os 3 checkpoints obrigatórios ao final do eixo.

Cada subconceito (`###`) dentro de um Eixo (`## EIXO X: ...`) deve obrigatoriamente cumprir os **6 pilares `D-E-A-M-P-C`**:

- **D — Definição do Zero:**
  - Conceitue com palavras simples antes de usar qualquer termo técnico (zero jargão solto).
  - Se o subconceito depender de conteúdo de semanas anteriores (ex.: preposição, particípio, pronome oblíquo), faça uma **micro-revisão de 1 a 3 linhas** ali mesmo antes de avançar.
  - **Ordem de Dependência Linear (Zero Forward References):** Jamais use siglas ou conceitos de Eixos posteriores (nem em exemplos, quadros, fluxogramas ou checkpoints) antes de defini-los formalmente no Eixo próprio. Quando um exemplo da introdução ou de um eixo inicial mencionar um papel sintático futuro, use descrição intuitiva em português comum e aponte entre parênteses em qual Eixo será batizado e aprofundado.
- **E — Explicação da Mecânica e do Porquê:**
  - Explique **por que** a regra existe na comunicação escrita ou no cálculo/rotina pública e **como ela funciona nos bastidores**.
  - Sempre entregue o **Teste Operacional Prático** (ex.: *"troque por algo/alguém"*, *"pluralize o verbo para achar o sujeito"*, *"substitua pelo pronome `o/a` para saber se é objeto ou predicativo"*).
- **A — Analogia Concreta + Mínimo de 3 Exemplos Progressivos:**
  - Inclua uma analogia clara do cotidiano ou da rotina de trabalho de uma Prefeitura Municipal.
  - Todo subconceito deve trazer **no mínimo 3 exemplos progressivos comentados**:
    1. **Exemplo 1 (Intuitivo / Cotidiano):** frase ou caso simples para "cair a ficha" de imediato;
    2. **Exemplo 2 (Rotina de Prefeitura / Oficial Administrativo):** aplicação concreta no setor público (protocolo, ofício, licitação, edital, atendimento em Birigui/SP);
    3. **Exemplo 3 (Caso Limite / Ordem Invertida / Armadilha de Prova):** a construção atípica que derruba quem só decorou o caso básico.
- **M — Mapa de "Gêmeos Confundíveis":**
  - Sempre que houver conceitos parecidos que as bancas trocam (ex.: *Complemento Nominal × Adjunto Adnominal*; *Sujeito Indeterminado com SE × Voz Passiva Sintética com SE*; *Verbo Haver × Verbo Existir*; *Objeto Direto Preposicionado × Objeto Indireto*), construa um quadro/tabela comparativo mostrando o critério exato de desempate.
- **P — Pegadinha Real da Banca ACCESS + Teste de 5 Segundos:**
  - Mostre explicitamente **como a banca monta a armadilha** e **como escapar em 5 segundos** na hora da prova.
- **C — Consolidação Ativa ao Final de TODO Eixo:**
  - Antes de fechar o `## EIXO X`, inclua nesta ordem exata:
    1. **Flashcards de Memorização Ativa** (no módulo React `EduKit`, usar `<FlipCardsGrid />` com **4 a 6 cartas** testando testes rápidos, contrastes e pegadinhas do eixo);
    2. **Síntese Feynman de 3 Linhas** (`> [!NOTE]` no `.md` / `<FeynmanCard />` no `.tsx`);
    3. **3 Questões Diretas de Checkpoint** (`### Questão 01`... formatadas para formulário interativo, **DEPOIS** da Síntese Feynman e sem nenhuma seção teórica após a 3ª questão dentro do mesmo Eixo).

---

## FASE 3 — Engenharia de Questões (Padrão ACCESS + Simetria)

Consulte sempre `.agents/PADRAO_QUESTOES_BANCA_ACCESS.md` e cumpra as regras abaixo:

1. **Questões Oficiais do Instituto ACCESS (`prova-auto/provas-access/`):**
   - Manter enunciado e 4 alternativas `(A)` a `(D)` **100% autênticos** (sem alterar redação original da banca).
   - Identificar com `**Banca:** Instituto ACCESS (Ano — Órgão — Cargo)`.
   - Conferir o gabarito definitivo retificado antes de publicar.
2. **Questões Adaptadas (`13.pdf` a `93.pdf`), Inéditas e Checkpoints:**
   - Identificar com `**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo` (ou `**Banca:** Checkpoint Direto (Padrão ACCESS)` nos checkpoints dos eixos).
   - **Exatamente 4 alternativas** `(A) `, `(B) `, `(C) `, `(D) ` (uma opção por linha).
   - **Comandos em CAIXA ALTA:** `CORRETA`, `INCORRETA`, `EXCETO`, `NÃO`, `FALSA`, `VERDADEIRO`.
   - Alternar entre os **formatos canônicos** da banca na Bateria Final: Múltipla Escolha contextualizada, Afirmativas Romanas (I, II, III), V ou F com julgamento de sequência e Associação de Colunas (Coluna I e Coluna II).
   - Contextualizar com situações reais de Prefeitura / repartição pública (específicos/português) ou problemas personificados com nomes próprios (RLM).
3. **Regra de Simetria Anti-Gabarito Óbvio (Obrigatória para Checkpoints e Adaptadas/Inéditas):**
   - **Proporção de tamanho equilibrada:** nenhuma alternativa correta pode virar um "textão" enquanto as erradas são frases curtas (nem o contrário). A razão `comprimento(correta) / média(incorretas)` deve ficar entre **0,65 e 1,35** (idealmente `0,80` a `1,20`).
   - **Zero pistas tipográficas exclusivas:** não coloque parênteses explicativos `(ou seja, ...)`, aspas ou negritos **apenas** na alternativa correta; se usar estrutura explicativa na certa, use estrutura equivalente nas 3 erradas.
   - **Distribuição balanceada de gabaritos:** em baterias de 8 a 10 questões, nenhuma letra (`A`, `B`, `C`, `D`) pode passar de **40%** (ideal: 2 a 3 de cada letra em 10 questões). Nos 3 checkpoints de um mesmo Eixo, é proibido repetir a mesma letra nas 3 questões.
   - **Comentário completo alternativa por alternativa:** dentro de `<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary> **Gabarito Oficial: X** ... </details>`, explicar por que a correta procede **e** qual é o erro específico de cada uma das outras 3 opções.
4. **Destaque Inequívoco com Sublinhado em Termos-Alvo (Obrigatório):**
   - Sempre que um enunciado de **Parada Rápida**, **Checkpoint** ou **Questão** mencionar *"termo destacado"*, *"verbo destacado"* ou *"trecho destacado"*, é **proibido** deixar a palavra apenas em texto comum ou em negrito discreto: marque explicitamente o termo-alvo com `<u>...</u>` no TSX (`InlinePractice`, `ExampleShowcase`) ou com `<u>...</u>` / `**termo**` dentro de frase em itálico `*“... **termo** ...”*` no Markdown (`.edu-focus-scope`, `.mc-question-scope`, `.edu-term-highlight`), garantindo renderização com **sublinhado espesso (`2px`) + destaque visual**.

---

## FASE 4 — Matriz Prescritiva de Componentes React `EduKit` (`app-react/`)

Conforme `.agents/GUIA_EDUKIT_REACT.md`:

1. **Mapeamento 1-para-1 e Fluxo 100% Vertical:** o `.md` é o texto-base integral; o `.tsx` em `app-react/src/lessons/semana-XX/<materia>.tsx` deve preservar **100%** das subseções, parágrafos, exemplos e questões, em **fluxo 100% vertical na teoria** (proibido cards teóricos lado a lado `md:grid-cols-2`), apenas elevando a apresentação visual.
2. **Matriz Obrigatória de Componentes (`@/components/edu`):**
   - Contexto inicial obrigatório de cada Eixo → `<AxisContextCard eyebrow? title bridge problemSolved roadmap />`
   - Narrativa conceitual e demonstrações integrais → `<ProseSection number title>`
   - Regra-mãe ou definição inaugural → `<ConceptCard title badge accent icon>`
   - Definições e enumerações de conceitos irmãos → `<DefinitionBlocks title? columns={1|2} items />` (Regra Anti-Texto Corrido: proibido empilhar 2 ou mais conceitos/classificações num mesmo parágrafo `<p>`)
   - Exemplos progressivos destacados em vitrine vertical → `<ExampleShowcase title? items />`
   - Fixação ativa no meio dos eixos → `<InlinePractice title subtitle? questions />` (aceita `label: ReactNode` e termos-alvo obrigatoriamente marcados com `<u>`)
   - Analogia prática ou caso de Prefeitura → `<AnalogyBox title tag>`
   - Contraste entre "Gêmeos Confundíveis" ou Certo vs. Errado → `<CompareGrid mode="right-wrong"|"contrast" />` e/ou `<KeyTable />`
   - Armadilha da banca + Teste rápido de 5s → `<TrapAlert title trap escape />`
   - Método passo a passo de análise ou resolução → `<StepByStep title problem steps />`
   - Treino ativo de memorização (obrigatório em todo eixo denso!) → `<FlipCardsGrid title cards />` (4 a 6 flashcards)
   - Fórmulas e passagens matemáticas → `<MathTex />`, `<MathStack />`, `<GuidedCalcCard />`, `<FormulaSpotlight />`
   - Contas armadas na chave → `<AsciiKeyBlock />` (proibido caixas ASCII `┌───┐` fora de contas armadas!)
   - Fluxogramas, organogramas, SVG ou imagens didáticas → **`<ZoomableDiagram title badge? badgeTone?>`** envolvendo `<svg viewBox="..." className="w-full h-auto" />` ou imagem — **OBRIGATÓRIO** em módulos React para disponibilizar o botão `Expandir` e o modal `DiagramZoomModal` com zoom; **NUNCA** citar um fluxograma/organograma no texto sem desenhá-lo visualmente! Todo fluxograma deve ter **1 pergunta por caixa, 1 resultado por caixa final, setas explícitas (`SIM`/`NÃO`) conectando todas as etapas e termos por extenso**.
   - **Proibido abuso de siglas na explicação:** escreva os conceitos por extenso (ex.: *Predicado Verbal*, *Predicado Nominal*, *Predicado Verbo-Nominal*, *Predicativo do Sujeito*, *Predicativo do Objeto*) no texto, exemplos, flashcards e feedbacks; não substitua o nome completo por sopa de siglas repetitivas.
   - Fechamento teórico do eixo → `<FeynmanCard title lines />` (antes das 3 `checkpointQuestions`)
3. **Zero Scroll Lateral no Mobile (`390px`):** nunca usar `overflow-x-auto` nem larguras fixas maiores que `340px` fora de `viewBox` escalável.
4. **Contrato de Exportação `.md` (NotebookLM):** manter correspondência **1-para-1** dos cabeçalhos `## EIXO X:` entre o `.md` e o `.tsx` para que os botões **Baixar Aula (.md)** e **Baixar Eixo X (.md)** exportem conteúdo fiel e íntegro.

---

## FASE 5 — Portão de Auditoria Automática e Publicação

Ao finalizar a escrita da aula, execute obrigatoriamente nesta ordem e só entregue após tudo retornar sucesso (`0` erros):

1. **Auditar o `.md`:**
   ```bash
   python .agents/audit_lesson.py semana-XX/<arquivo>.md
   ```
   Corrija qualquer `[ERRO]` ou `[AVISO]` reportado antes de prosseguir.
2. **Vincular ao leitor legado / `aulas-data.js`:**
   ```bash
   python .agents/sync_lessons.py
   ```
3. **Criar o Módulo React `EduKit` e registrar em `app-react/src/lessons/registry.ts`:**
   - Criar `app-react/src/lessons/semana-XX/<materia>.tsx` implementando `RichLessonModule`.
   - Adicionar entrada lazy em `REGISTRY_ENTRIES` no arquivo `app-react/src/lessons/registry.ts`.
4. **Validar TypeScript, Testes e Build de Produção:**
   ```bash
   cd app-react && npm run typecheck && npm test && npm run build
   ```
   *(Em PowerShell 5, usar `;` e checar `$LASTEXITCODE` em vez de `&&`.)*
