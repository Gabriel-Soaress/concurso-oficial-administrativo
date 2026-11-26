import type { WeekCurriculum } from "@/types";

export type PromptSubject = "all" | "port" | "rlm" | "esp" | "ger" | "simulado";
export type PromptMode = "web" | "agent";

const VISUAL_DIDACTICS_GUIDE = `
ESTILO DIDÁTICO E VISUAL NO MARKDOWN (.md):
- Explique sempre o contexto e o "porquê" antes de dar o nome técnico (sem termos soltos nem molde mecânico tipo D-E-A-M-P-C).
- Regra de clareza ("1 conceito -> exemplos -> próximo conceito"): sempre que houver subtipos, explique UM por vez, mostre logo abaixo seus exemplos claros com destaque colorido nas palavras-chave, e só depois avance ao próximo.
- Recursos visuais limpos no .md (funcionam no site original e no React dividido por Eixos):
  • Destaques em palavras: <mark class="hl-indigo">...</mark>, <mark class="hl-emerald">...</mark>, <mark class="hl-sky">...</mark>, <mark class="hl-amber">...</mark>, <mark class="hl-rose">...</mark>, <mark class="hl-purple">...</mark> e <u>termo-alvo</u>.
  • Caixas de exemplos: <div class="edu-component my-6"> com .edu-ex-legend + .edu-ex-list + .edu-ex-item (.edu-ex-sentence e .edu-ex-note), além de .edu-cards-grid / .edu-card e tabelas comparativas.
  • Diagramas <svg viewBox="..."> responsivos apenas onde realmente ajudam a enxergar relações (nunca crie módulos .tsx customizados).
- Divida a aula em ## EIXO 1:, ## EIXO 2:, etc., fechando cada Eixo com **"Síntese Feynman de 3 Linhas"** e 2 a 3 questões diretas de checkpoint.`;

const ACCESS_GUIDE_PROMPT = `
DIRETRIZ DE QUESTÕES (BANCA INSTITUTO ACCESS + SIMETRIA):
Consulte o manual ".agents/PADRAO_QUESTOES_BANCA_ACCESS.md" (JAMAIS retire questões de "prova-auto/1.pdf" a "12.pdf"):
- QUESTÕES OFICIAIS DO INSTITUTO ACCESS ("prova-auto/provas-access/"): mantenha enunciados e alternativas 100% autênticos e fiéis à prova original (apenas confira o gabarito oficial definitivo para descartar anuladas).
- QUESTÕES DE OUTRAS BANCAS ("prova-auto/13.pdf" a "93.pdf"), INÉDITAS OU CHECKPOINTS: adapte para o padrão municipal do Instituto ACCESS:
  1. Exatamente 4 alternativas (A, B, C, D), equilibradas em extensão (sem alternativas "órfãs" curtas ou explicações entre parênteses só na correta).
  2. Termos de comando em CAIXA ALTA: "CORRETA", "INCORRETA", "EXCETO", "NÃO", "FALSA".
  3. Alterne formatos típicos da banca na bateria final (Múltipla Escolha contextualizada, Afirmativas Romanas I/II/III, V ou F, Associação de Colunas), com casos práticos em Específicos e personificação em RLM.
  4. Formato interativo obrigatório no .md: inicie cada questão com "### Questão XX", linha "**Banca:** ...", alternativas "(A) " a "(D) " (uma por linha) e "<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary> **Gabarito Oficial: X** ... </details>" comentando alternativa por alternativa.`;

function buildAgentChecklistFooter(
  w: WeekCurriculum,
  fileRelPath: string,
  markKey: string,
  batteryDesc: string
): string {
  return `TAREFA PARA O AGENTE LOCAL:
1. Leia ".agents/GUIA_DO_AGENTE.md" e ".agents/PROTOCOLO_PRODUCAO_AULA.md", e rode "python .agents/sync_db.py status".
2. Crie (se não existir) "${w.folder}/" e salve "${fileRelPath}" estruturada em "## EIXO 1..N:", seguindo a didática natural ("1 conceito -> exemplos com destaque visual -> próximo conceito"), "Síntese Feynman de 3 Linhas" + 2 a 3 checkpoints por Eixo e ${batteryDesc}.
3. Rode "python .agents/audit_lesson.py ${fileRelPath}" (0 erros) e "python .agents/sync_lessons.py" para incorporar em "aulas-data.js" (alimenta o site original e o React dividido por Eixos).
4. Somente quando eu confirmar que concluí a matéria, marque "[x]" em ".agents/GUIA_DO_AGENTE.md" e rode "python .agents/sync_db.py mark ${markKey}".`;
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
      ? `\nFOCO ESPECIAL / MINHA DÚVIDA EM PORTUGUÊS:\n"${cleanDiff}"\n-> Aprofunde esse ponto com exemplos comparativos claros (frase certa vs. frase errada) antes de avançar.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/portugues_semana_${weekStr}.md`;
      return `Atue como meu Professor Especialista em Língua Portuguesa para Concursos (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DESTA AULA DE PORTUGUÊS:
- Assunto: ${w.port}
- Base / Pré-requisito na trilha: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("A LÓGICA DA LÍNGUA"):
Tenho Ensino Médio completo, mas vi essa base há bastante tempo. Aprendo muito melhor entendendo **a lógica, o contexto e a origem das regras e das exceções**, sem jargões soltos e sem teoria acadêmica irrelevante para nível médio.
1. Construa do básico ao avançado: qual problema de comunicação ou ambiguidade essa regra resolve?
2. Por que as exceções existem e como reconhecer cada caso facilmente dentro da frase?
3. Explique um subtópico de cada vez: conceitue em voz clara de professor, mostre exemplos naturais logo abaixo com as palavras-alvo destacadas em cor (<mark class="hl-...">) e só então siga para o próximo ponto.
4. Use quadros comparativos (Certo vs. Errado / diferenças clássicas) e feche cada Eixo com **"Síntese Feynman de 3 Linhas"** e 2–3 questões diretas de checkpoint.
${VISUAL_DIDACTICS_GUIDE}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, `w${w.num}_port`, "Bateria Final de 10 questões no Padrão Instituto ACCESS (reais conferidas + adaptadas simétricas)")}`;
    }

    return `Atue como meu Professor Especialista em Língua Portuguesa para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.port}
${customDoubt}
COMO EU APRENDO MELHOR (DIRETRIZ OBRIGATÓRIA):
Tenho Ensino Médio, mas vi a gramática há bastante tempo. Não quero listas secas de regras nem macetes soltos para decorar. Quero entender **a lógica e o porquê por trás da regra e das exceções**:
1. Construa a base degrau por degrau: para que serve esse mecanismo na língua e como ele evita ambiguidade no texto?
2. Explique a razão lógica das regras e das exceções, avançando um subtipo de cada vez seguido imediatamente de seus exemplos.
3. Mostre exemplos práticos comentados e quadros comparativos (Certo vs. Errado) das pegadinhas comuns em bancas municipais.
4. Feche cada bloco com uma **"Síntese Feynman de 3 Linhas"** para o caderno.
5. Ao final, elabore **8 questões no Padrão Instituto ACCESS (4 alternativas A a D equilibradas, comandos em CAIXA ALTA)** com gabarito comentado alternativa por alternativa.`;
  }

  if (subj === "rlm") {
    const customDoubt = cleanDiff
      ? `\nMINHA MAIOR DIFICULDADE NESTA CONTA / ASSUNTO:\n"${cleanDiff}"\n-> Desmonte essa operação passo a passo, mostrando o que acontece nos bastidores do cálculo.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/matematica_semana_${weekStr}.md`;
      return `Atue como meu Professor Especialista em Matemática e Raciocínio Lógico para Concursos (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DESTA AULA DE MATEMÁTICA / RLM:
- Assunto: ${w.rlm}
- Base / Pré-requisito na trilha: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("O QUE A CONTA FAZ NA REALIDADE"):
1. Antes de qualquer fórmula ou algoritmo, explique a intuição prática e visual do conceito (do básico ao avançado, sem jargões soltos).
2. Mostre de onde vem a fórmula ou regra operacional para evitar decoreba cega.
3. Desmonte cada conta passo a passo sem pular nenhuma passagem algébrica, traduzindo o enunciado em português para a linguagem matemática.
4. Inclua exemplos guiados progressivos, destaques nos pontos críticos do cálculo, **"Síntese Feynman de 3 Linhas"** e 2–3 questões diretas de checkpoint por Eixo.
${VISUAL_DIDACTICS_GUIDE}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, `w${w.num}_rlm`, "Bateria Final de 10 questões no Padrão Instituto ACCESS personificadas")}`;
    }

    return `Atue como meu Professor Especialista em Matemática e Raciocínio Lógico para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.rlm}
${customDoubt}
COMO EU APRENDO MELHOR:
1. Comece pela intuição prática: qual problema real essa operação resolve?
2. Demonstre de forma simples por que a regra/fórmula funciona assim.
3. Resolva 3 exemplos guiados passo a passo traduzindo o enunciado para a matemática sem pular etapas.
4. Entregue **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A a D equilibradas, comandos em CAIXA ALTA e enunciados personificados)** com resolução comentada.`;
  }

  if (subj === "esp") {
    const customDoubt = cleanDiff
      ? `\nPONTO QUE QUERO COMPREENDER MELHOR:\n"${cleanDiff}"\n-> Explique esse conceito com um exemplo concreto de rotina dentro de uma Prefeitura.\n`
      : "";

    if (isAgent) {
      const mdPath = `${w.folder}/especificos_semana_${weekStr}.md`;
      return `Atue como meu Tutor Especialista em Administração Pública e Rotinas Administrativas (Cargo: Oficial Administrativo — Semana ${weekStr}).

TEMA EXCLUSIVO DE CONHECIMENTOS ESPECÍFICOS:
- Assunto: ${w.esp}
- Conexão com a semana anterior: ${w.prereq}
${customDoubt}
MEU PERFIL E MÉTODO DIDÁTICO ("A HISTÓRIA REAL DE UMA PREFEITURA"):
1. Sem juridiquês solto: conceituar todo termo técnico do zero e ensinar como uma história contínua da rotina real dentro de uma Prefeitura Municipal.
2. Diferencie conceitos parecidos que as bancas invertem (com quadros comparativos em CSS e exemplos concretos do cargo) + \`<svg>\` limpo quando houver fluxograma ou organograma.
3. Ao final de cada Eixo, inclua **"Síntese Feynman de 3 Linhas"** e 2–3 questões diretas de checkpoint.
${VISUAL_DIDACTICS_GUIDE}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, `w${w.num}_esp`, "Bateria Final de 10 questões práticas no Padrão Instituto ACCESS")}`;
    }

    return `Atue como meu Tutor Especialista em Conhecimentos Específicos para o concurso de Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO DESTA SESSÃO DE ESTUDO (90 MINUTOS):
- Conteúdo Programático: ${w.esp}
${customDoubt}
COMO EU APRENDO MELHOR:
1. Explique do básico ao avançado como o funcionamento real de uma Prefeitura Municipal (sem termos jogados do nada).
2. Use analogias reais e quadros comparativos entre termos que as bancas invertem.
3. Inclua **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A a D equilibradas, comandos em CAIXA ALTA, estudos de caso práticos)** com gabarito comentado.`;
  }

  if (subj === "ger") {
    const customDoubt = cleanDiff ? `\nRECORTE OU DÚVIDA ESPECÍFICA EM GERAIS:\n"${cleanDiff}"\n` : "";

    if (isAgent) {
      const mdPath = `${w.folder}/conhecimentos_gerais_semana_${weekStr}.md`;
      return `Atue como meu Professor de História, Geografia, Política e Atualidades para o concurso de Oficial Administrativo de Birigui/SP (Semana ${weekStr}).

TEMA EXCLUSIVO DE CONHECIMENTOS GERAIS:
- Assunto: ${w.ger}
${customDoubt}
MÉTODO DIDÁTICO ("CAUSA -> FATO -> CONSEQUÊNCIA NAS 3 ESCALAS"):
1. Explique o tema em narrativa histórica e geográfica lógica (Causa -> Fato -> Consequência), conceituando todo termo histórico, geográfico ou econômico do zero.
2. Conecte as Três Escalas (Brasil/Mundo <-> Estado de São Paulo <-> Birigui e Região Noroeste Paulista) usando blocos \`> [!ESCALAS]\`, quadros comparativos e fluxogramas/linhas do tempo em SVG quando ajudar.
3. Feche cada Eixo com **"Síntese Feynman de 3 Linhas"** e 2–3 questões diretas de checkpoint.
${VISUAL_DIDACTICS_GUIDE}
${ACCESS_GUIDE_PROMPT}

${buildAgentChecklistFooter(w, mdPath, `w${w.num}_ger`, "Bateria Final de 8 a 10 questões no Padrão Instituto ACCESS")}`;
    }

    return `Atue como meu Professor de Conhecimentos Gerais para Oficial Administrativo (${w.title}).

TEMA EXCLUSIVO: ${w.ger}
${customDoubt}
1. Construa a narrativa Causa -> Fato -> Consequência nas 3 Escalas (Brasil -> SP -> Birigui/Noroeste Paulista), explicando todo termo técnico do zero.
2. Entregue **"Síntese Feynman de 3 Linhas"** e **8 questões no Padrão Instituto ACCESS (4 alternativas A-D equilibradas, comandos em CAIXA ALTA)** comentadas alternativa por alternativa.`;
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
3. Faça o Raio-X claro dos erros: explique a lógica da base teórica do zero, mostre por que o distrator induziu ao erro, gere questões espelho de treino em "${w.folder}/caderno_erros_semana_${weekStr}.md" e incorpore com "python .agents/sync_lessons.py".
4. Quando eu confirmar a revisão, atualize o checklist e sincronize com "python .agents/sync_db.py mark w${w.num}_sim" e "python .agents/sync_db.py exam ${w.simNum}".`;
    }

    return `Atue como meu Avaliador de Simulado e Mentor de Engenharia Reversa (Sábado da Semana ${weekStr} — ${w.simBanca}).

ESCOPO DESTA SEMANA:
- Português: ${w.port}
- Matemática/RLM: ${w.rlm}
- Específicos: ${w.esp}
- Gerais: ${w.ger}
${customDoubt}
1. Se colei erros acima, disseque a lógica da certa, a pegadinha da errada e gere 1 linha para o Caderno de Erros.
2. Caso contrário, monte um Mini-Simulado Padrão ACCESS com 15 questões (5 Port, 4 RLM, 4 Esp, 2 Ger — 4 alternativas A-D equilibradas, comandos em CAIXA ALTA) com gabarito comentado.`;
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
${VISUAL_DIDACTICS_GUIDE}
${ACCESS_GUIDE_PROMPT}

TAREFA PARA O AGENTE LOCAL:
1. Leia ".agents/GUIA_DO_AGENTE.md" e ".agents/PROTOCOLO_PRODUCAO_AULA.md", e rode "python .agents/sync_db.py status".
2. Crie em "${w.folder}/" os arquivos ".md" de cada matéria divididos em "## EIXO 1..N:", usando explicação fluida do zero ("1 conceito -> exemplos com destaque visual -> próximo conceito"), **"Síntese Feynman de 3 Linhas"** por Eixo + bateria final no Padrão ACCESS.
3. Rode "python .agents/audit_lesson.py ${w.folder}/*.md" e "python .agents/sync_lessons.py" para atualizar "aulas-data.js" (alimentando o site original e o React dividido por Eixos).
4. Sincronize apenas quando eu confirmar cada bloco com "python .agents/sync_db.py mark w${w.num}_<bloco>".`;
  }

  return `Atue como meu Tutor Especialista para o concurso de Oficial Administrativo (Plano de 90 Dias — **${w.title}**).

CRONOGRAMA INTEGRADO DESTA SEMANA (1h30/DIA):
- Português: ${w.port}
- Matemática/RLM: ${w.rlm}
- Conhecimentos Específicos: ${w.esp}
- Conhecimentos Gerais: ${w.ger}
${customDoubtAll}
Explique pela Lógica de Origem (contexto + porquê antes do termo técnico, 1 conceito seguido de exemplos claros, analogias naturais e quadros comparativos), inclua "Síntese Feynman de 3 Linhas" por matéria e feche com 12 questões no Padrão Instituto ACCESS (4 alternativas A-D equilibradas, comandos em CAIXA ALTA) comentadas.`;
}
