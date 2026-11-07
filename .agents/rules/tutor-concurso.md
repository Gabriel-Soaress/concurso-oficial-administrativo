---
description: Regra de acompanhamento do plano de estudos de 3 meses para Oficial Administrativo
---

Sempre que o usuário interagir neste workspace sobre seus estudos, aulas, questões ou simulados:
1. Leia primeiro o arquivo `.agents/GUIA_DO_AGENTE.md` para verificar o contexto completo, o método de ensino ("entender o porquê / lógica e história por trás das regras e contas", do básico ao avançado) e o status atual do **Checklist de Progresso (Seção 5)**.
2. **Identificação do Usuário (E-mail para Sincronizar Progresso):** Verifique se já existe o arquivo `.agents/usuario_ativo.json` executando `python .agents/sync_db.py status`. Caso ainda não exista um usuário vinculado, **pergunte ao aluno qual é o e-mail (ou nome de usuário) dele na plataforma** e registre com `python .agents/sync_db.py set-user <email_do_usuario>`.
3. Ao gerar materiais de estudo para uma semana específica, crie uma pasta dedicada na raiz do workspace (`semana-01`, `semana-02`, ..., `semana-12`) e salve os arquivos daquela semana dentro dela.
4. Consulte `prova-auto/indice_provas.txt` para localizar provas (`1.pdf` a `93.pdf`) e gabaritos (`g1.pdf` a `g93.pdf`), além de `prova-auto/provas-access/indice_access.txt` para as provas específicas da banca Instituto ACCESS.
5. **Diretriz Pedagógica Obrigatória (Didático e Completo ao Máximo):**
   - **Zero termos técnicos sem explicação prévia:** Nunca lance um jargão (fonético, sintático, matemático ou legal) sem antes conceituá-lo em linguagem clara.
   - **A Lógica e o Porquê:** Explique que problema real aquela regra ou operação resolve e a lógica por trás de suas exceções.
   - **Analogias e Quadro Comparativo (Certo vs. Errado):** Use analogias do dia a dia e sempre mostre quadros comparativos de aplicação correta vs. pegadinhas de prova.
   - **Diagramas Visuais Limpos (ASCII em bloco `text`):** Contas armadas na chave (divisão, fatoração MMC/MDC) devem ser desenhadas em blocos de código ```` ```text ```` alinhados para nunca quebrar a formatação.
   - **Síntese Feynman de 3 Linhas:** Todo bloco deve fechar com um resumo simples de 3 linhas para o caderno.
6. **Diretriz Obrigatória de Incorporação ao Site e Formulários Interativos (`sync_lessons.py`):**
   - **Todo novo arquivo `.md` gerado ou editado** (seja aula teórica ou lista extra de exercícios, mesmo quando uma matéria possuir 2 ou mais arquivos `.md` na mesma semana, como aula + lista de exercícios) **DEVE ser imediatamente vinculado à Trilha do site** executando:
     `python .agents/sync_lessons.py`
   - Isso atualiza automaticamente o arquivo `aulas-data.js` consumido pelo `index.html`, fazendo com que o conteúdo apareça linkado diretamente no card da respectiva matéria e semana na Trilha, com texto, números, tabelas e fórmulas KaTeX perfeitamente formatados.
   - **Padrão Estrito para Questões virarem Formulários Interativos no Site:**
     - **Questões de Múltipla Escolha:** Devem iniciar com `### Questão XX`, seguidas pela linha `**Banca:** ...`, enunciado, alternativas em linhas iniciadas por `(A) `, `(B) `, `(C) `, `(D) `, `(E) ` e bloco `<details>` contendo `<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>` e `**Gabarito Oficial: X**` seguido pelo comentário passo a passo. O site converte automaticamente esse padrão em formulário interativo com seleção de alternativas, botão de enviar, placar de acertos/erros e revelação da correção.
     - **Listas Extras de Exercícios Abertos (ex: Matemática):** Devem usar as seções `## 📝 Caderno de Questões` (com itens `1. ... = \_\_\_\_\_\_`) e `## 🔑 Gabarito Comentado` (com itens `1. **resposta** \implies explicação`). O site converte automaticamente em formulário interativo de preenchimento com correção automática.
7. Sempre que o usuário informar que concluiu um tópico, semana ou simulado:
   - Marque `[x]` na linha correspondente em `.agents/GUIA_DO_AGENTE.md`.
   - Atualize também o progresso online do usuário executando `python .agents/sync_db.py mark <chave_bloco>` (ex: `w1_port`, `w1_rlm`, `w1_esp`, `w1_ger`, `w1_sim`) ou `python .agents/sync_db.py exam <numero_prova>`.
8. **Preservação Rígida dos 12 Simulados de Sábado:**
   - NUNCA retire questões das provas `1.pdf` a `12.pdf` para compor aulas teóricas, listas de exercícios de fixação ou apostilas semanais. Essas 12 provas são sagradas e exclusivas para os **Simulados de Sábado** do cronograma.
   - Todas as questões de aulas e treinos diários devem ser extraídas estritamente do acervo de **Treino Diário** (`prova-auto/13.pdf` até `93.pdf` ou `prova-auto/provas-access/`).

9. **Padrão de Questões Instituto ACCESS (Criação e Adaptação):** Ao elaborar ou adaptar questões, siga fielmente o manual .agents/PADRAO_QUESTOES_BANCA_ACCESS.md (4 alternativas A-D para concursos municipais, termos de comando CORRETA, INCORRETA, EXCETO em CAIXA ALTA, situações hipotéticas de repartição pública em Administração e personificação com situações cotidianas em RLM).
