---
description: Regra de acompanhamento do plano de estudos de 3 meses para Oficial Administrativo
---

Sempre que o usuário interagir neste workspace sobre seus estudos, aulas, questões ou simulados:
1. Leia primeiro o arquivo `.agents/GUIA_DO_AGENTE.md` para verificar o contexto completo, o método de ensino ("entender o porquê / lógica e história por trás das regras e contas", do básico ao avançado) e o status atual do **Checklist de Progresso (Seção 5)**.
2. **Identificação do Usuário (E-mail para Sincronizar Progresso):** Verifique se já existe o arquivo `.agents/usuario_ativo.json` executando `python .agents/sync_db.py status`. Caso ainda não exista um usuário vinculado, **pergunte ao aluno qual é o e-mail (ou nome de usuário) dele na plataforma** e registre com `python .agents/sync_db.py set-user <email_do_usuario>`.
3. Ao gerar materiais de estudo para uma semana específica, crie uma pasta dedicada na raiz do workspace (`semana-01`, `semana-02`, ..., `semana-12`) e salve os arquivos `.md` lá dentro. **NÃO crie módulos `.tsx` customizados (`EduKit`) dentro de `app-react/src/lessons/`.**
4. Consulte `prova-auto/indice_provas.txt` para localizar provas (`1.pdf` a `93.pdf`) e gabaritos (`g1.pdf` a `g93.pdf`), além de `prova-auto/provas-access/indice_access.txt` para as provas específicas da banca Instituto ACCESS.
5. **Diretriz Pedagógica Obrigatória (Didática Natural + Visual CSS no `.md`):**
   - Consulte `.agents/PROTOCOLO_PRODUCAO_AULA.md` para ver o catálogo de recursos visuais CSS/SVG e os cuidados de fluxo.
   - **Zero termos técnicos sem explicação prévia:** Nunca lance um jargão (fonético, sintático, matemático ou legal) sem antes explicar o conceito e o contexto em linguagem clara.
   - **A Lógica e o Porquê + Fluxo "1 Conceito → Exemplos Claros → Próximo Conceito":** Antes da regra, explique qual problema real ela resolve. Quando houver 2 ou mais subtipos, explique **um de cada vez**, mostre exemplos reais e fáceis de visualizar logo abaixo dele com palavras destacadas, e só depois passe para o próximo. Nunca explique múltiplos subtipos juntos para jogar os exemplos depois.
   - **Anti-Engessamento (Proibições):** **NÃO** use molde burocrático `D-E-A-M-P-C` (`D — / E — / A — / M — / P —`), **NÃO** force rótulos artificiais (`"Exemplo 1 (Cotidiano) / Exemplo 2 (Rotina de Prefeitura) / Exemplo 3 (Caso Limite)"`), **NÃO** coloque boxes repetitivos `"Como a banca monta a armadilha / Teste de 5s"` nem exija `<FlipCardsGrid />` ou `Filtro Anti-Enrolação`.
   - **Recursos Visuais Limpos no `.md` (Site Original + React):**
     - Destaques coloridos em palavras: `<mark class="hl-indigo|hl-emerald|hl-sky|hl-amber|hl-rose|hl-purple">termo</mark>` e `<u>termo-alvo</u>`.
     - Lista visual limpa de exemplos dentro de `<div class="edu-component my-6">`: `.edu-ex-legend` + `.edu-ex-list` + `.edu-ex-item` (`.edu-ex-sentence` e `.edu-ex-note`).
     - Cards e esquemas CSS: `.edu-cards-grid`, `.edu-card`, `.edu-pyramid-container`, `.edu-orbital-stage`, `> [!ESCALAS]`.
     - Diagramas visuais em `<svg viewBox="...">` responsivo (ganha botão de expandir e zoom em tela cheia no React). Contas armadas usam blocos ```` ```text ````.
   - **Eixos, Síntese e Fixação:** Estruture as aulas com `## EIXO 1:` .. `## EIXO N:` (assim o React já divide automaticamente por Eixo via `LessonAxisView`). Feche cada eixo com **Síntese Feynman de 3 Linhas** e, quando ajudar a consolidar o eixo antes de avançar, inclua de 2 a 3 questões diretas de checkpoint.
6. **Diretriz Obrigatória de Auditoria Técnica e Incorporação ao Site (`sync_lessons.py`):**
   - **Passo 1 — Auditoria Técnica:** Rode `python .agents/audit_lesson.py <arquivo.md>` para conferir integridade HTML/CSS, formato e simetria das questões ACCESS e ausência de citações às provas `1.pdf`–`12.pdf`.
   - **Passo 2 — Vinculação em `aulas-data.js`:** Todo novo arquivo `.md` gerado ou editado em `semana-01`..`semana-12` DEVE ser imediatamente vinculado executando:
     `python .agents/sync_lessons.py`
   - Isso atualiza automaticamente `aulas-data.js` (consumido por `index.html` e `app-react/`).
   - **Padrão Estrito para Questões virarem Formulário Interativo nos dois Sites:**
     - **Questões de Múltipla Escolha:** Devem iniciar com `### Questão XX`, seguidas pela linha `**Banca:** ...`, enunciado, 4 alternativas `(A) `, `(B) `, `(C) `, `(D) ` (uma por linha) e bloco `<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary> **Gabarito Oficial: X** ... </details>` comentando alternativa por alternativa. Nas adaptadas/inéditas, manter simetria de tamanho (`0.65`–`1.35`), comandos em CAIXA ALTA (`CORRETA`, `INCORRETA`, `EXCETO`), zero pistas exclusivas e distribuição equilibrada entre A/B/C/D.
     - **Listas Extras de Exercícios Abertos (ex: Matemática):** Devem usar as seções `## 📝 Caderno de Questões` (com itens `1. ... = \_\_\_\_\_\_`) e `## 🔑 Gabarito Comentado` (com itens `1. **resposta** \implies explicação`).
7. Sempre que o usuário informar que concluiu um tópico, semana ou simulado:
   - Marque `[x]` na linha correspondente em `.agents/GUIA_DO_AGENTE.md`.
   - Atualize também o progresso online do usuário executando `python .agents/sync_db.py mark <chave_bloco>` (ex: `w1_port`, `w1_rlm`, `w1_esp`, `w1_ger`, `w1_sim`) ou `python .agents/sync_db.py exam <numero_prova>`.
8. **Preservação Rígida dos 12 Simulados de Sábado:**
   - NUNCA retire questões das provas `1.pdf` a `12.pdf` para compor aulas teóricas, listas de exercícios de fixação ou apostilas semanais. Essas 12 provas são sagradas e exclusivas para os **Simulados de Sábado** do cronograma.
   - Todas as questões de aulas e treinos diários devem ser extraídas estritamente do acervo de **Treino Diário** (`prova-auto/13.pdf` até `93.pdf` ou `prova-auto/provas-access/`).
9. **Padrão de Questões Instituto ACCESS:** Ao utilizar questões oficiais da ACCESS (`prova-auto/provas-access/`), mantenha-as 100% autênticas e fiéis à prova com gabarito definitivo oficial conferido (não precisam ser adaptadas). Caso utilize questões de outras bancas (`prova-auto/13.pdf` a `93.pdf`) ou elabore questões inéditas, adapte-as obrigatoriamente seguindo o manual `.agents/PADRAO_QUESTOES_BANCA_ACCESS.md` (4 alternativas A–D, comandos em CAIXA ALTA com CORRETA/INCORRETA, situações práticas de repartição em Específicos e personificação em RLM).
