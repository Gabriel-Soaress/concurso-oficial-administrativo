# Plataforma de Estudos (90 Dias) — Oficial Administrativo

Sistema estruturado de preparação para concursos de **Oficial Administrativo** em **12 semanas (3 meses)**, combinando uma trilha encadeada por pré-requisitos, um acervo de **93 provas reais (2022–2026)**, sincronização em nuvem via **PostgreSQL (Neon DB)** e duas formas complementares de estudo (**Agente IA Local** e **Web / Mobile**).

---

## 1. Filosofia e Método de Aprendizagem ("A Lógica de Origem")

Em vez de listas de regras soltas ou fórmulas para decorar sem contexto, toda a trilha foi desenhada sobre quatro pilares cognitivos:

1. **Interrogação Elaborativa (*Entender o Porquê antes do Como*):** Toda regra gramatical, exceção, lei ou operação matemática existe para resolver um problema concreto. Compreender a causa, a história e o mecanismo por trás do conceito elimina a decoreba frágil.
2. **Técnica Feynman (Síntese em 3 Linhas):** Ao encerrar a teoria do dia, o aluno escreve em no máximo 3 linhas, com as próprias palavras, como explicaria a lógica central daquele tema para um amigo em 1 minuto.
3. **Sessão Diária 60 / 30 (Segunda a Sexta — 1h30/dia):**
   * **60 minutos de Construção:** 40 min de teoria lógica (do básico ao avançado, sem pular pré-requisitos) + 20 min de questões imediatas do tema.
   * **30 minutos de Aplicação:** Resolução de questões extraídas das 93 provas do acervo ou leitura contextual de Conhecimentos Gerais.
4. **Simulado Fixo de Sábado + Caderno de Erros:** Todo sábado é aplicada **1 prova completa real** (`1.pdf` a `12.pdf`, numeradas na ordem exata das Semanas 01 a 12). Cada erro gera 1 linha investigativa no Caderno de Erros.

---

## 2. As Duas Personas de Uso (Local com Agente vs. Mobile na Web)

A plataforma foi arquitetada para funcionar em dois ambientes sincronizados pelo mesmo banco de dados PostgreSQL (**Neon DB**):

```
                       ┌────────────────────────────────────┐
                       │   Banco PostgreSQL (Neon Cloud)    │
                       │  Tabelas: usuarios / progresso     │
                       └─────────────────┬──────────────────┘
                                         │
              ┌──────────────────────────┴──────────────────────────┐
              ▼                                                     ▼
┌───────────────────────────────────────────┐         ┌───────────────────────────────────────────┐
│   PERSONA 1: PC + AGENTE LOCAL (.agents)  │         │     PERSONA 2: MOBILE / WEB (Vercel)      │
├───────────────────────────────────────────┤         ├───────────────────────────────────────────┤
│ • Lê o "Cérebro" (.agents/GUIA_DO_AGENTE) │         │ • Acessa index.html pelo celular/web      │
│ • Cria pastas semana-01/ até semana-12/   │         │ • Faz login na tabela 'usuarios' (Neon)   │
│ • Extrai questões das 93 provas locais    │         │ • Gera Prompt Matriz autocontido em 1 clic│
│ • Atualiza checklist local + Neon DB      │         │ • Abre ChatGPT / Claude / Gemini no app   │
└───────────────────────────────────────────┘         └───────────────────────────────────────────┘
```

### Persona 1: Estudo Local no PC com Agente IA (O "Cérebro" em `.agents/`)
Ideal para quando você está no computador usando um Agente de IA no workspace (Antigravity, Cursor, VS Code, etc.):
* **Regra Automática (`.agents/rules/tutor-concurso.md`):** Qualquer agente aberto na pasta do projeto carrega automaticamente as diretrizes pedagógicas sem precisar de explicação prévia.
* **Cérebro Mestre (`.agents/GUIA_DO_AGENTE.md`):** Contém o perfil de aprendizagem do aluno, a cadeia completa de pré-requisitos das 12 semanas e o checklist mestre.
* **Criação Automática de Pastas (`semana-01/` a `semana-12/`):** Quando você usa o modo **Agente Local (PC)** no Gerador de Prompt, o agente cria automaticamente a pasta correspondente à semana, gera as apostilas explicando o *porquê* de cada matéria e extrai baterias de questões reais dos PDFs de `prova-auto/`.
* **Sincronização via CLI (`.agents/sync_db.py`):** O agente pode consultar e gravar o progresso diretamente no banco Neon executando:
  ```bash
  python .agents/sync_db.py status
  python .agents/sync_db.py mark <usuario_id> w1_port
  python .agents/sync_db.py exam <usuario_id> 1
  ```

### Persona 2: Estudo Mobile / Web (Vercel ou GitHub Pages)
Ideal para estudar pelo celular, tablet ou navegador em qualquer lugar:
* **Interface Mobile-First (`index.html`):** Ao abrir pelo celular ou via link `https://`, a interface adapta-se com barra de navegação inferior estilo app nativo e transforma a tabela de 93 provas em cards responsivos de toque rápido.
* **Login e Sincronização em Nuvem:** Clicando em **Entrar**, você autentica diretamente na tabela `usuarios` do seu banco **Neon PostgreSQL**. Cada tópico ou prova marcada no celular é salva em tempo real na tabela `concurso_progresso`.
* **Prompt Autocontido + Atalhos de IA:** No modo **Celular / IA Web**, o Gerador de Prompt monta uma instrução 100% independente de arquivos locais e exibe botões diretos para abrir **ChatGPT**, **Claude** ou **Gemini** no celular.

---

## 3. Estrutura do Repositório

```text
├── .agents/
│   ├── rules/
│   │   └── tutor-concurso.md      # Regra automática de contexto para Agentes IA
│   ├── GUIA_DO_AGENTE.md          # Cérebro do projeto, perfil didático e checklist mestre
│   └── sync_db.py                 # Script Python para o agente sincronizar com o Neon DB
├── prova-auto/
│   ├── 1.pdf .. 12.pdf            # Os 12 Simulados Oficiais de Sábado (Semanas 01 a 12)
│   ├── g1.pdf .. g12.pdf          # Gabaritos dos 12 Simulados
│   ├── 13.pdf .. 93.pdf           # 81 Provas para treino diário por disciplina
│   ├── g13.pdf .. g93.pdf         # Gabaritos das provas de treino diário
│   └── indice_provas.txt          # Mapa completo (Nº, Tipo, Ano, Órgão, Banca e Arquivos)
├── index.html                     # Aplicação Web / Mobile principal (compatível com Vercel/GitHub Pages)
├── como estudar!.html             # Atalho local da aplicação
├── edital_organizado_oficial_administrativo.pdf  # Mapa de conteúdos base do edital
└── README.md                      # Documentação do projeto
```

---

## 4. Como Subir para o GitHub e Vercel

Como o arquivo principal já está configurado como `index.html` na raiz e todos os PDFs da pasta `prova-auto/` possuem tamanho individual abaixo de 9 MB:

1. Inicialize e envie para o seu repositório GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: plataforma de estudos 90 dias + 93 provas + sync neon db"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
2. Na **Vercel** (ou **GitHub Pages**), basta importar o repositório sem necessidade de configurar *Build Command* (deploy estático direto da raiz).
