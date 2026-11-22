import type { WeekCurriculum } from "@/types";

export type PromptSubject = "all" | "port" | "rlm" | "esp" | "ger" | "simulado";
export type PromptMode = "web" | "agent";

const ANTI_SUPERFICIALITY_PROTOCOL = `
PROTOCOLO ANTI-SUPERFICIALIDADE (D-E-A-M-P-C — OBRIGATÓRIO):
Consulte ".agents/PROTOCOLO_PRODUCAO_AULA.md" e ".agents/GUIA_EDUKIT_REACT.md" antes de começar:
- PESQUISA PRÉVIA E FILTRO ANTI-ENROLAÇÃO: Profundidade máxima nos tópicos cobrados em Nível Médio / Oficial Administrativo / Banca Instituto ACCESS, cortando teoria acadêmica irrelevante. Tudo o que for listado no Sumário DEVE ter seção completa no corpo (zero promessas vazias). Nunca use questões de "prova-auto/1.pdf" a "12.pdf" e confira sempre o gabarito oficial definitivo para descartar questões anuladas.
- CONTRATO D-E-A-M-P-C POR SUBCONCEITO (###):
  1. D (Definição do Zero): zero termo técnico sem explicar antes em linguagem simples (+ micro-revisão de pré-requisito quando necessário).
  2. E (Explicação Lógica e Teste Prático): explique o porquê da regra/conta/processo e entregue o teste operacional passo a passo para identificar na prova.
  3. A (Analogia + Mínimo 3 Exemplos Progressivos): analogia concreta + 3 exemplos em escada (1. Intuitivo cotidiano; 2. Rotina de Prefeitura / Birigui; 3. Caso limite, ordem invertida ou armadilha de prova).
  4. M (Mapa de "Gêmeos Confundíveis"): quadros comparativos entre conceitos que as bancas trocam entre si.
  5. P (Pegadinha ACCESS + Teste de 5s): destaque a armadilha típica da banca e como escapar em 5 segundos.
  6. C (Consolidação Ativa por Eixo): feche CADA Eixo com Flashcards (<FlipCardsGrid /> com 4–6 cartas no React), "Síntese Feynman de 3 Linhas" e **3 questões diretas de checkpoint** antes do próximo Eixo. Diagramas citados (fluxograma/organograma) devem ser desenhados em SVG responsivo.`;

const ACCESS_GUIDE_PROMPT = `
DIRETRIZ OBRIGATÓRIA DE QUESTÕES (BANCA INSTITUTO ACCESS + SIMETRIA):
Consulte o manual de engenharia reversa ".agents/PADRAO_QUESTOES_BANCA_ACCESS.md".
- QUESTÕES OFICIAIS DO INSTITUTO ACCESS (acervo local "prova-auto/provas-access/"): Mantenha os enunciados e alternativas 100% originais e autênticos à prova (NÃO altere a redação original; apenas confira o gabarito definitivo oficial para não trazer questão anulada).
- QUESTÕES DE OUTRAS BANCAS ("prova-auto/13.pdf" a "93.pdf"), INÉDITAS OU CHECKPOINTS: DEVEM SER OBRIGATORIAMENTE ADAPTADAS para o padrão do Instituto ACCESS:
  1. Concurso Municipal: exatamente 4 alternativas (A, B, C, D). Se a original tiver 5 opções, elimine a mais fraca/redundante e adapte para 4.
  2. Termos de comando obrigatoriamente em CAIXA ALTA: "CORRETA", "INCORRETA", "EXCETO", "NÃO", "FALSA".
  3. Formatos canônicos da ACCESS na Bateria Final: alterne entre Múltipla Escolha contextualizada, Afirmativas Romanas (I, II, III com "Está(ão) correta(s)..."), V ou F com sequência e Associação de Colunas (Coluna I e Coluna II).
  4. Contexto Prático da Repartição: em Específicos/Administração/Português, use casos reais de órgão público; em RLM, personifique com nomes próprios e situações cotidianas.
  5. Simetria Anti-Gabarito Óbvio: equilibre o tamanho das 4 alternativas (razão correta/média das erradas entre 0,65 e 1,35), proíba parênteses explicativos ou negritos exclusivos na alternativa certa, distribua os gabaritos entre A/B/C/D (máximo 40% por letra na bateria final; jamais 3 iguais nos checkpoints de um eixo) e comente alternativa por alternativa.
  6. Checkpoints por Eixo: ao final de CADA Eixo (## EIXO X), após a Síntese Feynman, inclua 3 questões diretas de fixação (### Questão XX), além da Bateria Final.
  7. Padrão do Formulário Interativo: inicie cada questão com "### Questão XX", linha "**Banca:** ...", alternativas "(A) ", "(B) ", "(C) ", "(D) " (uma por linha) e "<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary> **Gabarito Oficial: X** ... </details>".`;

function buildAgentChecklistFooter(
  w: WeekCurriculum,
  fileRelPath: string,
  tsxRelPath: string,
  markKey: string,
  batteryDesc: string
): string {
  return `TAREFA OBRIGATÓRIA PARA O AGENTE LOCAL (5 PORTÕES):
1. Consulte ".agents/GUIA_DO_AGENTE.md", ".agents/PROTOCOLO_PRODUCAO_AULA.md" e ".agents/GUIA_EDUKIT_REACT.md" e verifique seu usuário com "python .agents/sync_db.py status".
2. Crie (se não existir) "${w.folder}/" e salve "${fileRelPath}" cumprindo integralmente o Contrato D-E-A-M-P-C (≥3 exemplos progressivos por subconceito, Gêmeos Confundíveis, Pegadinha ACCESS, Síntese Feynman de 3 linhas + 3 questões de checkpoint em CADA Eixo) + ${batteryDesc}.
3. Rode OBRIGATORIAMENTE o auditor automático:
   "python .agents/audit_lesson.py ${fileRelPath}"
   e corrija todos os [ERRO] e [AVISO] até sair com status [OK].
4. Rode OBRIGATORIAMENTE "python .agents/sync_lessons.py" para incorporar o ".md" em "aulas-data.js".
5. Converta 1-para-1 (ZERO condensação) para o módulo React EduKit em "${tsxRelPath}" (usando <ProseSection>, <ConceptCard>, <AnalogyBox>, <CompareGrid>/<KeyTable>, <TrapAlert>, <StepByStep>, <FlipCardsGrid /> em todos os eixos densos, SVG se houver fluxograma/esquema, <FeynmanCard />, checkpointQuestions e finalQuestions), registre em "app-react/src/lessons/registry.ts" e valide dentro de "app-react/" com "npm run typecheck", "npm test" e "npm run build".
6. Quando eu confirmar a conclusão da matéria, marque "[x]" em ".agents/GUIA_DO_AGENTE.md" e rode "python .agents/sync_db.py mark ${markKey}".`;
}

export function buildSpecificPrompt(
  w: WeekCurriculum,
  subj: PromptSubject,
  mode: PromptMode,
  diff: string
): string {
  const weekStr = String(w.num).padStart(2, "0");
  const isAgent = mode === "agent";
  const cleanDiff = diff.trim();

  if (subj === "port") {
    const customDoubt = cleanDiff
      ? `\nFOCO ESPECIAL / MINHA DÚVIDA EM PORTUGUÊS:\n"${cleanDiff}"\n-> Aprofunde esse ponto com ≥3 exemplos comparativos (frase certa vs. frase errada + caso de prova) antes de avançar.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/portugues_semana_${weekStr}.md`;
      const tsxPath = `app-react/src/lessons/${w.folder}/portugues.tsx`;
      return `Atue como meu Professor Especialista em Língua Portuguesa para Concursos (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DESTA AULA DE PORTUGUÊS:
- Assunto: ${w.port}
- Base / Pré-requisito na trilha: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("A LÓGICA DA LÍNGUA"):
Tenho Ensino Médio completo, mas vi essa base há bastante tempo. Aprendo muito melhor entendendo **a lógica, a causa e o funcionamento real das regras e das exceções**, sem jargões soltos e sem teoria acadêmica inútil para nível médio.
1. Construa do básico ao avançado: qual problema de comunicação ou ambiguidade essa regra resolve?
2. Por que as exceções existem e qual é o teste prático de 5 segundos para identificar cada caso na frase?
3. Mostre a mecânica em pelo menos 3 exemplos progressivos por subconceito (cotidiano, rotina de Prefeitura e pegadinha/ordem invertida).
4. Ao final de cada Eixo, inclua Flashcards (no React), **"Síntese Feynman de 3 Linhas"** e **3 questões diretas de checkpoint**.
${ANTI_SUPERFICIALITY_PROTOCOL}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, tsxPath, `w${w.num}_port`, "Bateria Final de 10 questões no Padrão Instituto ACCESS (reais conferidas no gabarito oficial + adaptadas simétricas)")}`;
    }

    return `Atue como meu Professor Especialista em Língua Portuguesa para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.port}
${customDoubt}
COMO EU APRENDO MELHOR (DIRETRIZ OBRIGATÓRIA):
Tenho Ensino Médio, mas vi a gramática há bastante tempo. Quero entender **a lógica e o porquê por trás da regra e das exceções** sem superficialidade e sem teoria acadêmica irrelevante:
1. Construa a base degrau por degrau (zero termo técnico sem explicação prévia).
2. Explique a razão lógica das regras, os testes operacionais e principalmente as **exceções**.
3. Dê no mínimo **3 exemplos progressivos** por tópico (1. cotidiano, 2. Prefeitura/serviço público, 3. pegadinha invertida) + quadro dos "Gêmeos Confundíveis".
4. Feche cada bloco com uma **"Síntese Feynman de 3 Linhas"** e 2–3 checkpoints rápidos.
5. Ao final, elabore **8 questões no Padrão Instituto ACCESS (4 alternativas A a D simétricas em tamanho, comandos em CAIXA ALTA)** com gabarito comentado alternativa por alternativa.`;
  }

  if (subj === "rlm") {
    const customDoubt = cleanDiff
      ? `\nMINHA MAIOR DIFICULDADE NESTA CONTA / ASSUNTO:\n"${cleanDiff}"\n-> Desmonte essa operação passo a passo, mostrando o que acontece nos bastidores do cálculo.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/matematica_semana_${weekStr}.md`;
      const tsxPath = `app-react/src/lessons/${w.folder}/matematica.tsx`;
      return `Atue como meu Professor Especialista em Matemática e Raciocínio Lógico para Concursos (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DESTA AULA DE MATEMÁTICA / RLM:
- Assunto: ${w.rlm}
- Base / Pré-requisito na trilha: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("O QUE A CONTA FAZ NA REALIDADE"):
1. Antes de qualquer fórmula ou algoritmo, explique a intuição prática e visual do conceito (do básico ao avançado, sem jargões soltos).
2. Mostre de onde vem a fórmula ou regra operacional para evitar decoreba cega.
3. Resolva pelo menos **3 exemplos progressivos** por tópico (fácil cotidiano, rotina administrativa personificada, caso limite/pegadinha) sem pular nenhuma passagem algébrica.
4. Ao final de cada Eixo, inclua Flashcards (no React), **"Síntese Feynman de 3 Linhas"** e **3 questões diretas de checkpoint**.
${ANTI_SUPERFICIALITY_PROTOCOL}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, tsxPath, `w${w.num}_rlm`, "Bateria Final de 10 questões no Padrão Instituto ACCESS personificadas")}`;
    }

    return `Atue como meu Professor Especialista em Matemática e Raciocínio Lógico para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.rlm}
${customDoubt}
COMO EU APRENDO MELHOR:
1. Comece pela intuição prática: qual problema real essa operação resolve?
2. Demonstre de forma simples por que a regra/fórmula funciona assim.
3. Resolva **3 exemplos guiados progressivos** passo a passo traduzindo o enunciado para a matemática sem pular etapas.
4. Entregue **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A a D simétricas, comandos em CAIXA ALTA e enunciados personificados)** com resolução comentada.`;
  }

  if (subj === "esp") {
    const customDoubt = cleanDiff
      ? `\nPONTO QUE QUERO COMPREENDER MELHOR:\n"${cleanDiff}"\n-> Explique esse conceito com exemplos concretos de rotina dentro de uma Prefeitura.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/especificos_semana_${weekStr}.md`;
      const tsxPath = `app-react/src/lessons/${w.folder}/especificos.tsx`;
      return `Atue como meu Tutor Especialista em Administração Pública e Rotinas Administrativas (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DE CONHECIMENTOS ESPECÍFICOS:
- Assunto: ${w.esp}
- Conexão com a semana anterior: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("A HISTÓRIA REAL DE UMA PREFEITURA"):
1. Sem juridiquês solto: conceituar todo termo técnico do zero e ensinar como a rotina real dentro de uma Prefeitura Municipal.
2. Em cada subconceito, trazer analogia prática + **mínimo 3 exemplos progressivos** + quadros de "Gêmeos Confundíveis" + **SVG** sempre que citar fluxograma/organograma.
3. Ao final de cada Eixo, inclua Flashcards (no React), **"Síntese Feynman de 3 Linhas"** e **3 questões diretas de checkpoint**.
${ANTI_SUPERFICIALITY_PROTOCOL}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, tsxPath, `w${w.num}_esp`, "Bateria Final de 10 questões práticas no Padrão Instituto ACCESS")}`;
    }

    return `Atue como meu Tutor Especialista em Conhecimentos Específicos para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.esp}
${customDoubt}
COMO EU APRENDO MELHOR:
1. Explique do básico ao avançado como o funcionamento real de uma Prefeitura Municipal (sem termos jogados do nada).
2. Use analogias, **3 exemplos progressivos** e quadros comparativos entre termos que as bancas invertem.
3. Inclua **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A a D simétricas, comandos em CAIXA ALTA, estudos de caso práticos)** com gabarito comentado.`;
  }

  if (subj === "ger") {
    const customDoubt = cleanDiff ? `\nRECORTE OU DÚVIDA ESPECÍFICA EM GERAIS:\n"${cleanDiff}"\n` : "";

    if (isAgent) {
      const mdPath = `${w.folder}/conhecimentos_gerais_semana_${weekStr}.md`;
      const tsxPath = `app-react/src/lessons/${w.folder}/gerais.tsx`;
      return `Atue como meu Professor de História, Geografia, Política e Atualidades para o concurso de Oficial Administrativo de Birigui/SP (Semana ${weekStr}).

TEMA EXCLUSIVO DE CONHECIMENTOS GERAIS:
- Assunto: ${w.ger}
${customDoubt}
MÉTODO DIDÁTICO ("CAUSA -> FATO -> CONSEQUÊNCIA NAS 3 ESCALAS"):
1. Explique o tema em linha lógica completa (Causa -> Fato -> Consequência), explicando todo termo histórico, geográfico ou econômico do zero.
2. Conecte as Três Escalas (Brasil/Mundo <-> Estado de São Paulo <-> Birigui e Região Noroeste Paulista) com casos concretos, quadros comparativos e fluxogramas/linhas do tempo em SVG quando aplicável.
3. Ao final de cada Eixo, inclua Flashcards (no React), **"Síntese Feynman de 3 Linhas"** e **3 questões diretas de checkpoint**.
${ANTI_SUPERFICIALITY_PROTOCOL}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, tsxPath, `w${w.num}_ger`, "Bateria Final de 8 a 10 questões no Padrão Instituto ACCESS")}`;
    }

    return `Atue como meu Professor de Conhecimentos Gerais para Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO: ${w.ger}
${customDoubt}
1. Construa a narrativa Causa -> Fato -> Consequência nas 3 Escalas (Brasil -> SP -> Birigui/Noroeste Paulista), explicando todo termo técnico do zero.
2. Entregue **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A-D simétricas, comandos em CAIXA ALTA)** comentadas alternativa por alternativa.`;
  }

  if (subj === "simulado") {
    const customDoubt = cleanDiff ? `\nQUESTÕES QUE ERREI / DÚVIDAS DO SIMULADO:\n"${cleanDiff}"\n` : "";

    if (isAgent) {
      return `Atue como meu Analista de Desempenho e Revisor do Simulado de Sábado da Semana ${weekStr} (Cargo: Oficial Administrativo).

PROVA ALVO DESTE SÁBADO NO ACERVO LOCAL:
- Arquivo da Prova: "prova-auto/${w.simNum}.pdf"
- Arquivo do Gabarito: "prova-auto/g${w.simNum}.pdf"
- Referência: ${w.simBanca}
- Conteúdos acumulados até a Semana ${weekStr}: ${w.title}
${customDoubt}
${ACCESS_GUIDE_PROMPT}

TAREFA PARA O AGENTE LOCAL:
1. Rode "python .agents/sync_db.py status".
2. Analise "prova-auto/${w.simNum}.pdf" e "prova-auto/g${w.simNum}.pdf" (conferindo o gabarito oficial definitivo e descartando eventuais anuladas).
3. Faça a Engenharia Reversa dos erros seguindo o padrão D-E-A-M-P-C (explique a regra do zero, a armadilha da banca e como escapar em 5s), gere "${w.folder}/caderno_erros_semana_${weekStr}.md" e incorpore com "python .agents/sync_lessons.py".
4. Atualize o checklist e sincronize com "python .agents/sync_db.py mark w${w.num}_sim" e "python .agents/sync_db.py exam ${w.simNum}".`;
    }

    return `Atue como meu Avaliador de Simulado e Mentor de Engenharia Reversa (Sábado da Semana ${weekStr} — ${w.simBanca}).

ESCOPO DESTA SEMANA:
- Português: ${w.port}
- Matemática/RLM: ${w.rlm}
- Específicos: ${w.esp}
- Gerais: ${w.ger}
${customDoubt}
1. Se colei erros acima, disseque a lógica da certa, a pegadinha da errada e gere 1 linha para o Caderno de Erros.
2. Caso contrário, monte um Mini-Simulado Padrão ACCESS com 15 questões (5 Port, 4 RLM, 4 Esp, 2 Ger — 4 alternativas A-D simétricas, comandos em CAIXA ALTA) com gabarito comentado.`;
  }

  // Semana completa ("all")
  const customDoubtAll = cleanDiff
    ? `\nATENÇÃO ESPECIAL NESTA SEMANA (MINHA MAIOR DÚVIDA):\n"${cleanDiff}"\n-> Dê prioridade e aprofunde passo a passo este ponto.\n`
    : "";

  if (isAgent) {
    return `Atue como meu Tutor Especialista para o concurso de Oficial Administrativo (Plano de 90 Dias — **${w.title}**).

MAPA COMPLETO DOS CONTEÚDOS DESTA SEMANA ${weekStr}:
1. LÍNGUA PORTUGUESA: ${w.port}
2. MATEMÁTICA E RLM: ${w.rlm}
3. CONHECIMENTOS ESPECÍFICOS: ${w.esp}
4. CONHECIMENTOS GERAIS: ${w.ger}
5. SIMULADO FIXO DE SÁBADO: ${w.simulado}
(Pré-requisito: ${w.prereq})
${customDoubtAll}
${ANTI_SUPERFICIALITY_PROTOCOL}
${ACCESS_GUIDE_PROMPT}

TAREFA OBRIGATÓRIA PARA O AGENTE LOCAL:
1. Leia ".agents/GUIA_DO_AGENTE.md", ".agents/PROTOCOLO_PRODUCAO_AULA.md" e ".agents/GUIA_EDUKIT_REACT.md", e rode "python .agents/sync_db.py status".
2. Crie em "${w.folder}/" os arquivos ".md" cumprindo o Contrato D-E-A-M-P-C em cada matéria (≥3 exemplos progressivos, Gêmeos Confundíveis, Pegadinha ACCESS, Síntese Feynman + 3 questões de checkpoint por Eixo + bateria final ACCESS simétrica).
3. Rode OBRIGATORIAMENTE "python .agents/audit_lesson.py ${w.folder}/*.md" e corrija todos os alertas até sair com [OK].
4. Rode OBRIGATORIAMENTE "python .agents/sync_lessons.py" para atualizar "aulas-data.js".
5. Converta cada aula 1-para-1 (ZERO condensação) para módulos React EduKit em "app-react/src/lessons/${w.folder}/<materia>.tsx" (com <FlipCardsGrid /> nos eixos densos e SVGs quando aplicável), registre em "app-react/src/lessons/registry.ts" e valide "npm run typecheck", "npm test" e "npm run build" em "app-react/".
6. Sincronize cada bloco concluído com "python .agents/sync_db.py mark w${w.num}_<bloco>".`;
  }

  return `Atue como meu Tutor Especialista para o concurso de Oficial Administrativo (Plano de 90 Dias — **${w.title}**).

CRONOGRAMA INTEGRADO DESTA SEMANA (1h30/DIA):
- Português: ${w.port}
- Matemática/RLM: ${w.rlm}
- Conhecimentos Específicos: ${w.esp}
- Conhecimentos Gerais: ${w.ger}
${customDoubtAll}
Explique pela Lógica de Origem com Protocolo D-E-A-M-P-C (zero jargão solto, ≥3 exemplos progressivos, analogias e gêmeos confundíveis), inclua "Síntese Feynman de 3 Linhas" por matéria e feche com 12 questões no Padrão Instituto ACCESS (4 alternativas A-D simétricas, comandos em CAIXA ALTA) comentadas.`;
}
