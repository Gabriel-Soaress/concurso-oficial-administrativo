# GUIA DO AGENTE — Contexto Mestre, Metodologia e Checklist de Progresso
**Projeto:** Preparação Completa para Concurso de Oficial Administrativo (Prazo: 3 Meses / 12 Semanas)

> **INSTRUÇÃO OBRIGATÓRIA PARA QUALQUER AGENTE IA:**
> Sempre que iniciar uma sessão ou receber uma mensagem do usuário neste diretório:
> 1. Leia este arquivo (`.agents/GUIA_DO_AGENTE.md`) para saber exatamente em qual **Semana e Tópico** o usuário está no **Checklist de Progresso** (Seção 5).
> 2. **VINCULAÇÃO DO E-MAIL DO USUÁRIO (SINCRONIZAÇÃO COM O SITE):** Verifique se o e-mail do usuário já está configurado localmente rodando `python .agents/sync_db.py status`. **Caso ainda não tenha o e-mail configurado (`.agents/usuario_ativo.json` ausente), pergunte ao aluno qual é o e-mail ou nome de usuário dele na plataforma** e execute `python .agents/sync_db.py set-user <email_informado>`.
> 3. **FONTE ÚNICA DE VERDADE EM MARKDOWN (`.md`) + CSS VISUAL + `sync_lessons.py`:** Toda aula e lista de exercícios deve ser criada diretamente em `semana-01/` .. `semana-12/` como arquivo `.md` limpo (enriquecido com componentes CSS visuais, destaques coloridos de palavras e SVGs quando ajudarem a enxergar a estrutura). Em seguida, **rode `python .agents/audit_lesson.py <arquivo.md>`** (checagem técnica e padrão ACCESS) e **`python .agents/sync_lessons.py`** para incorporar os `.md` no arquivo `aulas-data.js` (consumido pelo site original `index.html` e pelo app React `app-react/`, que já divide automaticamente os `## EIXO X:` em etapas navegáveis). **NÃO crie módulos `.tsx` customizados (`EduKit`) em `app-react/src/lessons/`.**
> 4. **ATUALIZAÇÃO AUTOMÁTICA DO PROGRESSO (LOCAL + SITE):** Quando o usuário avisar que concluiu um tópico, bloco ou simulado:
>    - Edite imediatamente a Seção 5 deste arquivo, trocando `[ ]` por `[x]`.
>    - Sincronize o progresso na conta do usuário para atualizar o site automaticamente rodando:
>      - `python .agents/sync_db.py mark <chave>` (chaves: `w1_port`, `w1_rlm`, `w1_esp`, `w1_ger`, `w1_sim` ... até `w12_sim`)
>      - `python .agents/sync_db.py exam <numero_da_prova>` (ex: `1` a `93`)
> 5. Ao ensinar qualquer conteúdo ao usuário, siga rigorosamente o **Perfil Cognitivo e Didático do Aluno (Seção 2)** — voz clara de professor, contexto real antes do rótulo técnico, **1 conceito → exemplos claros com destaque visual em palavras → próximo conceito**, nunca regras secas nem moldes mecânicos engessados.
> 6. **PADRÃO ESTRUTURAL DA BANCA INSTITUTO ACCESS:** Consulte `.agents/PADRAO_QUESTOES_BANCA_ACCESS.md`. As questões oficiais do Instituto ACCESS (`prova-auto/provas-access/`) são mantidas 100% autênticas e originais com gabarito definitivo conferido (descartando anuladas). Já as questões adaptadas de outras bancas (`prova-auto/13.pdf` a `93.pdf`) ou inéditas DEVEM seguir o padrão ACCESS (4 alternativas A–D, comandos em CAIXA ALTA como CORRETA/INCORRETA/EXCETO, casos práticos de repartição, personificação em RLM e simetria de tamanho entre alternativas).

---

## 1. Visão Geral dos Arquivos do Workspace (`c:\Users\gabri\OneDrive\Documentos\concurso`)

* `index.html`: Aplicação original completa do aluno com a trilha interativa de 12 semanas, Leitor de Aulas e Formulários Interativos, acervo de provas e Gerador de Prompt.
* `app-react/`: Versão em React + Vite que consome o mesmo `aulas-data.js` e divide automaticamente qualquer aula `.md` por `## EIXO X:` (`LessonAxisView`), renderizando cards CSS, destaques coloridos em palavras, KaTeX, diagramas SVG ampliáveis com zoom e questões interativas diretamente do Markdown.
* `aulas-data.js` e `.agents/sync_lessons.py`: Sistema automatizado que converte todos os arquivos `.md` de `semana-01/` a `semana-12/` em aulas e listas de exercícios interativas linkadas diretamente aos cards de cada semana e matéria na Trilha dos dois sites.
* `.agents/PROTOCOLO_PRODUCAO_AULA.md` e `.agents/audit_lesson.py`: Guia prático da didática original + catálogo de recursos visuais CSS/SVG no `.md`, além do auditor técnico automático que valida formatação de questões, simetria ACCESS, balanceamento HTML e preservação dos simulados.
* `edital_organizado_oficial_administrativo.pdf`: Documento original do aluno com o Mapa de Estudos dividido em 4 Grandes Grupos (01. Língua Portuguesa, 02. Raciocínio Lógico e Matemático, 03. Conhecimentos Gerais, 04. Conhecimentos Específicos), alinhado ao concurso de Oficial Administrativo (Prefeitura de Birigui/SP — Edital 220/2026 — Banca Instituto ACCESS: 40 questões, sendo 10 de cada grupo).
* `prova-auto/`: Pasta contendo **93 provas reais de Oficial Administrativo (2022 a 2026)** numeradas de `1.pdf` a `93.pdf` e seus respectivos gabaritos `g1.pdf` a `g93.pdf`, além de `provas-access/` com 45 provas de Nível Médio do Instituto ACCESS (2024–2026):
  * **Provas `1.pdf` a `12.pdf` (`g1.pdf` a `g12.pdf`):** São os **12 Simulados Oficiais de Sábado**, renumerados exatamente na ordem da **Semana 01 até a Semana 12**!
  * **Provas `13.pdf` a `93.pdf` (`g13.pdf` a `g93.pdf`):** São as **81 provas de Treino Diário** (para usar de segunda a sexta nas baterias de questões por matéria).
  * `prova-auto/indice_provas.txt`: Índice completo mapeando `Nº | Tipo | Ano | Órgão | Banca | Prova | Gabarito | URL`.
* `.agents/PADRAO_QUESTOES_BANCA_ACCESS.md`: Manual mestre de engenharia reversa e adaptação de questões do Instituto ACCESS (formatos de enunciados, itens romanos, V/F, associação de colunas, personificação e simetria).

> [!IMPORTANT]
> **PRESERVAÇÃO TOTAL DOS 12 SIMULADOS DE SÁBADO (PROVAS 1 A 12):**
> Nunca retire questões de `1.pdf` a `12.pdf` para aulas semanais, apostilas teóricas ou baterias diárias de exercícios. Elas são reservadas com exclusividade para os Simulados de Sábado. Todas as questões de aula devem vir exclusivamente das provas de Treino Diário (`13.pdf` a `93.pdf` ou `provas-access/`).

* `semana-01/`, `semana-02/`, etc.: Pastas criadas pelos agentes à medida que os materiais de cada semana são gerados.

---

## 2. Perfil Cognitivo do Aluno e Diretrizes Didáticas para o Agente

1. **Disponibilidade de Tempo:**
   * **Segunda a Sexta:** ~**1h30 por dia** (90 minutos), dividido em **60 min** (Bloco Principal: Teoria Conceitual + Fixação) + **30 min** (Bloco Complementar: Questões das 93 provas ou Conhecimentos Gerais).
   * **Sábado:** **1 Simulado Fixo Obrigatório** (1 prova completa de `prova-auto` cronometrada) + correção investigativa dos erros. (Eventualmente até 2 simulados quando houver mais tempo no fim de semana).
   * **Domingo:** Estudo contextual de **Conhecimentos Gerais** (História Municipal/Nacional, Geografia e Política/Atualidades) + revisão leve dos erros da semana.
2. **Estilo de Aprendizagem ("Entender o Porquê / Lógica e História"):**
   * O aluno tem base de Ensino Médio em Português e Matemática, mas **faz tempo que viu**, então precisa **construir do básico até o avançado sem pular degraus**.
   * **Regra de Ouro Didática:** O aluno **não gosta de decorar "como fazer a conta" ou "macetes cegos"**, nem de textos engessados por rótulos artificiais. Ele aprende muito melhor quando entende:
     * **O contexto e o porquê da regra e das exceções** (ex: *para que* aquela classificação existe na língua; *por que* a crase não ocorre antes de verbo; *por que* a vírgula não separa sujeito e verbo).
     * **O significado físico/prático da conta matemática** (ex: *o que* uma equação, função, matriz ou razão está fazendo na realidade).
     * **O contexto histórico e institucional** (ex: *por que* a Administração Pública funciona assim; *qual* a história que levou a um fato político/econômico).
   * **Fluxo e Clareza (Regras Práticas de Ouro):**
     * **Zero termos jogados do nada:** Qualquer conceito novo deve ser apresentado primeiro em linguagem clara e contextualizada antes do nome técnico.
     * **Um conceito por vez → exemplos com destaque visual → próximo conceito:** Quando um tópico tiver 2 ou mais subtipos (ex: os 3 tipos de predicado, os tipos de sujeito, os casos de crase), explique **um subtipo**, mostre imediatamente seus exemplos com destaque colorido nas palavras-chave, e **só depois** passe para o próximo. Nunca explique 3 coisas juntas para jogar todos os exemplos misturados lá embaixo.
     * **Exemplos limpos e naturais (sem molde engessado):** Use frases claras, reais e fáceis de visualizar — misturando cotidiano e situações do cargo apenas quando fizer sentido natural.
     * **Elementos visuais que ajudam a enxergar (CSS + SVG no `.md`):** Use destaques coloridos de palavras (`<mark class="hl-...">`, `<u>...</u>`), caixas limpas de exemplos (`.edu-ex-list`), cards comparativos CSS (`.edu-component` / `.edu-cards-grid`), blocos `> [!ESCALAS]` e fluxogramas `<svg>` limpos (com zoom automático no leitor). Proibido caixas ASCII desenhadas com `┌───┐`.
     * **Fixação natural e Síntese Feynman de 3 Linhas:** Feche cada eixo com uma **Síntese Feynman de 3 Linhas** direta para o caderno e, quando ajudar a consolidar o eixo antes de seguir, inclua de 2 a 3 questões diretas de checkpoint.
   * **O que é PROIBIDO fazer nas aulas (Anti-Engessamento):**
     * **NÃO** use molde burocrático `D-E-A-M-P-C` com subtítulos repetitivos `D — / E — / A — / M — / P —`.
     * **NÃO** force artificialmente a escada carimbada `"Exemplo 1 (Cotidiano) / Exemplo 2 (Rotina de Prefeitura) / Exemplo 3 (Caso Limite)"` nem boxes repetitivos de `"Como a banca monta a armadilha / Teste de 5s"` em todo subtópico.
     * **NÃO** recrie ou duplique aulas `.md` como módulos `.tsx` (`EduKit`) dentro de `app-react/src/lessons/`.
3. **Nível Inicial por Grande Grupo:**
   * **Grupo 01 (Português) e Grupo 02 (Matemática/RLM):** Já viu no Ensino Médio, mas precisa relembrar desde a base com explicação lógica passo a passo até chegar nos tópicos avançados.
   * **Grupo 03 (Conhecimentos Gerais):** Exige atenção especial à **História Municipal (Birigui/SP e região), História Nacional, Geografia e Política**, sempre conectando causa, fato e consequência nas 3 escalas (Municipal $\leftrightarrow$ Estadual $\leftrightarrow$ Nacional/Global).
   * **Grupo 04 (Conhecimentos Específicos):** Tirando **Informática** (onde já tem familiaridade), **quase tudo é contato novo** (Administração Pública, Rotinas, Redação Oficial, Protocolo, Arquivo, LAI e LGPD). O agente deve ensinar esses temas como uma narrativa contínua do funcionamento de uma Prefeitura.

---

## 3. A Cadeia Lógica de Pré-Requisitos (Por que a ordem das 12 Semanas não deve ser quebrada)

* **Língua Portuguesa:**
  `Interpretação + Sons/Sílabas/Acentuação (Sem 1)` $\rightarrow$ `Classes de Nomes/Determinantes + Formação (Sem 2)` $\rightarrow$ `Verbos + Conectores (Preposição/Conjunção) + Semântica (Sem 3)` $\rightarrow$ `Sintaxe da Oração Simples: Sujeito/Predicado/Objetos (Sem 4)` $\rightarrow$ `Sintaxe do Período Composto (Sem 5)` $\rightarrow$ `Concordância (Sem 6)` $\rightarrow$ `Regência (Sem 7)` $\rightarrow$ `Crase [depende de Regência + Artigo] (Sem 8)` $\rightarrow$ `Pontuação [depende da Sintaxe Simples e Composta] (Sem 9)` $\rightarrow$ `Reescrita e Integração Multi-Bancas (Sem 10–12)`.
* **Raciocínio Lógico e Matemático:**
  `Conjuntos Numéricos + Frações/Decimais/Potências/Expressões (Sem 1)` $\rightarrow$ `Teoria dos Conjuntos (Venn) + Razão e Divisão Proporcional (Sem 2)` $\rightarrow$ `Regra de Três + Porcentagem (Sem 3)` $\rightarrow$ `Equações/Inequações de 1º Grau + Sistemas Básicos (Sem 4)` $\rightarrow$ `Equações de 2º Grau + Funções de 1º e 2º Grau (Sem 5)` $\rightarrow$ `Sequências/Reversão + PA e PG (Sem 6)` $\rightarrow$ `Lógica Proposicional + Argumentação/Dedução (Sem 7)` $\rightarrow$ `Geometria Plana e Espacial (Sem 8)` $\rightarrow$ `Combinatória e Probabilidade (Sem 9)` $\rightarrow$ `Polinômios, Matrizes e Determinantes (Sem 10)` $\rightarrow$ `Trigonometria e Geometria Analítica (Sem 11)` $\rightarrow$ `Revisão Geral (Sem 12)`.
* **Conhecimentos Específicos:**
  `Conceito de Administração Pública + Princípios (Sem 1)` $\rightarrow$ `Organização Administrativa: Desconcentração/Descentralização (Sem 2)` $\rightarrow$ `Funções PODC + Estruturas + PDCA (Sem 3)` $\rightarrow$ `Rotinas, Fluxo de Demandas, Controles e Reuniões (Sem 4)` $\rightarrow$ `Redação Oficial: Como criar o documento (Sem 5)` $\rightarrow$ `Protocolo: Como movimentar o documento (Sem 6)` $\rightarrow$ `Arquivologia: Como guardar/conservar nas 3 Idades e recuperar (Sem 7)` $\rightarrow$ `Informática I: Word e Excel (Sem 8)` $\rightarrow$ `Informática II: E-mail, Arquivos e Segurança (Sem 9)` $\rightarrow$ `LAI - Lei 12.527/2011 (Sem 10)` $\rightarrow$ `LGPD - Lei 13.709/2018 + Relação LAI vs LGPD (Sem 11)` $\rightarrow$ `Casos Práticos Integrados (Sem 12)`.

---

## 4. Como o Agente Deve Atuar ao Receber o Prompt da Semana

Quando o usuário enviar o Prompt Matriz da Semana $X$:
1. **Pesquise o escopo real e organize a aula em Eixos (`## EIXO 1:` .. `## EIXO N:`):** Leia o assunto da semana + pré-requisitos, foque no que cai em nível médio / Instituto ACCESS (cortando teoria acadêmica irrelevante) e estruture os eixos em ordem crescente de dependência lógica.
2. **Crie a pasta `semana-XX/` e salve o `.md` didático:**
   * Explique primeiro o contexto e o *porquê*, avance **um conceito por vez com exemplos claros logo abaixo** (usando `.edu-ex-list`, `<mark class="hl-...">`, `.edu-component` / `.edu-cards-grid`, quadros comparativos e `<svg>` limpos onde realmente iluminam o raciocínio), e feche cada eixo com **Síntese Feynman de 3 Linhas** (+ 2 a 3 questões de checkpoint ao final de cada eixo quando ajudar a fixar antes do próximo).
   * Feche a aula com uma **Bateria Final de Questões Reais + Adaptadas** no padrão Instituto ACCESS (`prova-auto/provas-access/` e `13.pdf`..`93.pdf`, **JAMAIS `1.pdf`..`12.pdf`**), respeitando 4 alternativas `(A)`–`(D)` simétricas em tamanho, comandos em CAIXA ALTA e gabarito comentado alternativa por alternativa.
3. **Audite tecnicamente e incorpore aos sites (`aulas-data.js`):**
   * Rode `python .agents/audit_lesson.py semana-XX/<arquivo>.md` e garanta que passe sem erros.
   * Rode imediatamente `python .agents/sync_lessons.py` para publicar no `aulas-data.js` (tanto o site original quanto o app React dividido por Eixos passam a exibir a aula instantaneamente).
4. **Atualize o Checklist (Seção 5 abaixo):** Somente quando o aluno confirmar que concluiu um tópico ou semana, marque `[x]` e rode `python .agents/sync_db.py mark wX_<materia>`.

---

## 5. CHECKLIST DE PROGRESSO (Atualizar a cada etapa concluída)

### MÊS 1 — As Fundações (Do Zero à Base Sólida)

#### Semana 1: Os Alicerces (`semana-01/`)
- [x] **Português (Sem 1):** Leitura/Interpretação (ideia central, inferência, implícitos) + Fonologia básica, sílabas, lógica da tonicidade/acentuação e ortografia.
- [x] **Matemática/RLM (Sem 1):** Conjuntos numéricos ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$), operações fundamentais, lógica das frações, decimais, potências, raízes e expressões numéricas.
- [x] **Específicos (Sem 1):** O que é Estado, Governo e Administração Pública; Princípios (LIMPE + implícitos) e serviço público.
- [x] **Conhecimentos Gerais (Sem 1):** Formação histórica, territorial e econômica do Brasil (grandes ciclos e regiões).
- [x] **Simulado de Sábado 1:** Simulado Adaptado Semanas 01-02 (74 Questões) — *Acertos: 43/56 respondidas (76,8%) | Português: 12/18, Gerais: 14/18, Específicos: 17/20*

#### Semana 2: Dando Nome e Proporção às Coisas (`semana-02/`)
- [x] **Português (Sem 2):** Morfologia I (Substantivo, Adjetivo, Artigo, Numeral e Pronome — anáfora/catáfora) + Estrutura e Formação das palavras (derivação e composição).
- [x] **Matemática/RLM (Sem 2):** Teoria dos Conjuntos (união, interseção, diferença, Diagramas de Venn) + Razões e Divisão Diretamente/Inversamente Proporcional.
- [x] **Específicos (Sem 2):** Organização Administrativa (Centralização, Descentralização, Concentração, Desconcentração; Administração Direta e Indireta).
- [x] **Conhecimentos Gerais (Sem 2):** Brasil Republicano, Constituição de 1988, Três Poderes, Federação e Cidadania.
- [x] **Simulado de Sábado 2:** Prova `prova-auto/2.pdf` (Gabarito `g2.pdf` - VUNESP - Câmara de Fernandópolis/SP) — *Nota/Acertos: ___*

#### Semana 3: Ações, Conexões e Regras de Proporção (`semana-03/`)
- [x] **Português (Sem 3):** Morfologia II (Verbos: lógica dos tempos/modos; Advérbios, Preposições vs. Artigos, e Conjunções) + Semântica em contexto.
- [x] **Matemática/RLM (Sem 3):** Radiciação completa (complemento: índices, expoente fracionário, simplificação, operações e racionalização) + Regra de Três Simples e Composta (lógica das grandezas) + Porcentagem (aumentos e descontos sucessivos).
- [x] **Específicos (Sem 3):** Funções da Administração (PODC), Estruturas Organizacionais (Linear, Funcional, Linha-Staff, Matricial) e Ciclo PDCA.
- [x] **Conhecimentos Gerais (Sem 3):** Formação histórica, geográfica e econômica do Estado de São Paulo e do interior paulista.
- [x] **Simulado de Sábado 3:** Prova `prova-auto/3.pdf` (Gabarito `g3.pdf` - Avança SP - Câmara de Francisco Morato/SP) — *Nota/Acertos: Concluído*

#### Semana 4: Estrutura da Frase Simples, Álgebra Inicial e Rotina Interna (`semana-04/`)
- [ ] **Português (Sem 4):** Sintaxe da Oração Simples (Frase, Oração, Período; Sujeito, Predicado, Transitividade Verbal, Objetos Direto/Indireto, Adjuntos e Aposto).
- [ ] **Matemática/RLM (Sem 4):** Equações e Inequações de 1º grau + Sistemas de equações de 1º grau.
- [ ] **Específicos (Sem 4):** Organização do trabalho (fluxo de documentos/demandas, controles, prazos, pendências, rastreabilidade e apoio a reuniões/atas).
- [ ] **Conhecimentos Gerais (Sem 4):** História, Geografia, Economia e Atualidades de Birigui/SP e Região (Noroeste Paulista).
- [ ] **Simulado de Sábado 4:** Prova `prova-auto/4.pdf` (Gabarito `g4.pdf` - Objetiva - Pref. Nonai/RS) — *Nota/Acertos: ___*

---

### MÊS 2 — A Estrutura Intermediária (Relações, Fluxos e Documentos)

#### Semana 5: Período Composto, Equações/Funções e Redação Oficial (`semana-05/`)
- [ ] **Português (Sem 5):** Sintaxe do Período Composto (Orações Coordenadas e Subordinadas Substantivas, Adjetivas e Adverbiais).
- [ ] **Matemática/RLM (Sem 5):** Equações e Inequações de 2º grau + Funções de 1º e 2º grau (fórmula, tabela, raízes e interpretação de gráficos).
- [ ] **Específicos (Sem 5):** Redação e Comunicação Oficial (Manual da Presidência da República: clareza, concisão, impessoalidade, Padrão Ofício, pronomes e fechos).
- [ ] **Conhecimentos Gerais (Sem 5):** Economia e Energia no Brasil atual (inflação, PIB, Reforma Tributária, matriz energética e transição energética).
- [ ] **Simulado de Sábado 5:** Prova `prova-auto/5.pdf` (Gabarito `g5.pdf` - Consulplan - Câmara de Caratinga/MG) — *Nota/Acertos: ___*

#### Semana 6: Concordância, Sequências/Progressões e Protocolo (`semana-06/`)
- [ ] **Português (Sem 6):** Concordância Verbal e Nominal (regra lógica geral e casos especiais).
- [ ] **Matemática/RLM (Sem 6):** Sequências Lógicas (números, letras, figuras), Princípio da Regressão/Reversão + Progressões (PA e PG).
- [ ] **Específicos (Sem 6):** Protocolo (Recebimento, Registro, Classificação, Distribuição, Tramitação e Expedição de documentos).
- [ ] **Conhecimentos Gerais (Sem 6):** Política e Segurança Pública contemporâneas (instituições, políticas públicas e impactos sociais).
- [ ] **Simulado de Sábado 6:** Prova `prova-auto/6.pdf` (Gabarito `g6.pdf` - ACCESS - Pref. Itaguara/MG) — *Nota/Acertos: ___/50*

#### Semana 7: Regência, Lógica Proposicional e Arquivologia (`semana-07/`)
- [ ] **Português (Sem 7):** Regência Verbal e Nominal (lógica das preposições exigidas e mudanças de sentido).
- [ ] **Matemática/RLM (Sem 7):** Lógica Proposicional (Proposições, Conectivos, Tabela-Verdade, Equivalências e Negação/De Morgan) + Argumentação e Dedução.
- [ ] **Específicos (Sem 7):** Arquivologia (Teoria das 3 Idades: Corrente, Intermediário, Permanente; Tabela de Temporalidade; Métodos de Arquivamento; Conservação e Recuperação).
- [ ] **Conhecimentos Gerais (Sem 7):** Sociedade, Demografia e Educação (Censo IBGE, transformações sociais, acesso a serviços e debates públicos).
- [ ] **Simulado de Sábado 7:** Prova `prova-auto/7.pdf` (Gabarito `g7.pdf` - VUNESP - Câmara de Itapeva/SP) — *Nota/Acertos: ___*

#### Semana 8: Crase, Geometria e Informática Aplicada I (`semana-08/`)
- [ ] **Português (Sem 8):** Crase (a mecânica lógica de Regência + Artigo; casos proibidos, obrigatórios e facultativos).
- [ ] **Matemática/RLM (Sem 8):** Geometria Plana e Espacial (unidades, perímetros, áreas, Pitágoras, sólidos, áreas superficiais e volumes).
- [ ] **Específicos (Sem 8):** Informática Aplicada I — Editores de Texto (Word) e Planilhas Eletrônicas (Excel: fórmulas, ordenação, filtros e leitura de tabelas).
- [ ] **Conhecimentos Gerais (Sem 8):** Tecnologia, Inovação e Sustentabilidade (IA, 5G, desenvolvimento sustentável, mudanças climáticas e COP30).
- [ ] **Simulado de Sábado 8:** Prova `prova-auto/8.pdf` (Gabarito `g8.pdf` - Fundatec - Pref. Bom Jesus/RS) — *Nota/Acertos: ___*

---

### MÊS 3 — Tópicos Avançados, Legislação (LAI/LGPD) e Lapidação Final

#### Semana 9: Pontuação, Combinatória/Probabilidade e Informática Aplicada II (`semana-09/`)
- [ ] **Português (Sem 9):** Pontuação aplicada à sintaxe (vírgula, ponto e vírgula, dois-pontos, travessão, aspas e zeugma).
- [ ] **Matemática/RLM (Sem 9):** Análise Combinatória (Princípio Multiplicativo, Permutação, Arranjo e Combinação) e Probabilidade.
- [ ] **Específicos (Sem 9):** Informática Aplicada II — E-mail (`Para`/`Cc`/`Cco`, anexos), Arquivos Digitais, Navegadores e Segurança da Informação (`CID`, malwares e backup).
- [ ] **Conhecimentos Gerais (Sem 9):** Relações Internacionais e Geopolítica (conflitos globais, Mercosul-UE, BRICS, comércio e efeitos no Brasil).
- [ ] **Simulado de Sábado 9:** Prova `prova-auto/9.pdf` (Gabarito `g9.pdf` - Instituto Mais - Pref. Santana de Parnaíba/SP) — *Nota/Acertos: ___*

#### Semana 10: Reescrita, Matrizes/Polinômios e LAI (`semana-10/`)
- [ ] **Português (Sem 10):** Reescrita de frases e parágrafos (integrando semântica, sintaxe, concordância, regência, crase e pontuação).
- [ ] **Matemática/RLM (Sem 10):** Polinômios (operações e manipulação) + Matrizes, Determinantes e Sistemas Lineares.
- [ ] **Específicos (Sem 10):** Legislação I — Lei de Acesso à Informação (LAI - Lei Federal nº 12.527/2011: transparência, procedimentos, prazos e sigilo).
- [ ] **Conhecimentos Gerais (Sem 10):** Artes, Literatura e História Cultural (obras e movimentos vinculados à história nacional e regional).
- [ ] **Simulado de Sábado 10:** Prova `prova-auto/10.pdf` (Gabarito `g10.pdf` - Avança SP - Pref. Pedreira/SP) — *Nota/Acertos: ___*

#### Semana 11: Multi-Bancas, Trigonometria/Geometria Analítica e LGPD (`semana-11/`)
- [ ] **Português (Sem 11):** Baterias intensivas Multi-Bancas (foco nos tópicos de maior incidência e revisão de pegadinhas).
- [ ] **Matemática/RLM (Sem 11):** Trigonometria no Triângulo Retângulo ($\text{sen}, \cos, \text{tg}$) + Geometria Analítica (plano cartesiano, distância entre pontos e equação da reta).
- [ ] **Específicos (Sem 11):** Legislação II — LGPD (Lei Federal nº 13.709/2018 no Poder Público) + Comparativo Prático entre LAI e LGPD nas rotinas administrativas.
- [ ] **Conhecimentos Gerais (Sem 11):** Conexão das Três Escalas (Birigui/Região $\leftrightarrow$ Estado de São Paulo $\leftrightarrow$ Brasil/Mundo).
- [ ] **Simulado de Sábado 11:** Prova `prova-auto/11.pdf` (Gabarito `g11.pdf` - Consulplan - Câmara de Itajubá/MG) — *Nota/Acertos: ___*

#### Semana 12: Revisão Geral Integrada e Véspera (`semana-12/`)
- [ ] **Português (Sem 12):** Revisão geral do Caderno de Erros (refazer todas as questões erradas nos 3 meses).
- [ ] **Matemática/RLM (Sem 12):** Revisão geral do significado das fórmulas e resolução dos erros marcados.
- [ ] **Específicos (Sem 12):** Bateria de casos práticos integrados (Princípios + Rotinas + Redação + Protocolo/Arquivo + Informática + LAI/LGPD).
- [ ] **Conhecimentos Gerais (Sem 12):** Revisão final de Atualidades (fatos de 2025/2026) e Dossiê Municipal de Birigui.
- [ ] **Simulado de Sábado 12:** Prova `prova-auto/12.pdf` (Gabarito `g12.pdf` - Legalle - Pref. Silveira Martins/RS) + Revisão estratégica de `1.pdf` e `6.pdf` — *Nota/Acertos: ___*
