# Plataforma de Estudos (90 Dias) — Oficial Administrativo

Sistema completo de preparação em **12 semanas (3 meses)** para concursos de **Oficial Administrativo**, estruturado pela **Lógica de Origem** (*entender o porquê lógico e histórico de cada regra, exceção e cálculo, do básico ao avançado*), com trilha sequencial de pré-requisitos e um acervo de **93 provas reais (2022–2026)** com gabarito.

- **Acesso Online (Web & Mobile):** [https://concurso-oficial-administrativo.vercel.app/](https://concurso-oficial-administrativo.vercel.app/)

---

## Como Funciona e Como Usar a Plataforma

Independentemente de você estudar pelo **celular/navegador** ou pelo **computador**, o fluxo de estudo segue 4 passos dentro do site:

### 1. Entenda o Método (Aba *O Método & Base*)
O plano foi desenhado para uma rotina de **1h30 por dia** (Segunda a Sexta) + **Simulado no Sábado**:
- **60 minutos de Construção:** 40 min de teoria focada na *Lógica de Origem* (entender que problema real aquela regra gramatical, conta matemática ou lei resolve) + 20 min de questões de fixação.
- **30 minutos de Prática:** Resolução de questões em provas reais do acervo.
- **Síntese Feynman de 3 Linhas:** Ao encerrar o estudo do dia, anote no caderno em no máximo 3 linhas como você explicaria a lógica central daquilo para um amigo.
- **Sábado (Simulado Fixo):** Resolução de 1 prova completa na ordem das semanas (`1.pdf` a `12.pdf`) + registro de 1 linha por erro no Caderno de Erros.

### 2. Siga a Trilha de Pré-Requisitos (Aba *Cronograma 12 Semanas*)
Os conteúdos das 4 disciplinas (**Língua Portuguesa**, **Matemática e RLM**, **Conhecimentos Específicos** e **Conhecimentos Gerais**) estão encadeados em uma ordem estrita:
- Você nunca estuda um assunto dependente antes de dominar seu requisito (ex: *Fonologia/Morfologia* vem antes de *Sintaxe*, que vem antes de *Concordância/Regência*, que vem antes de *Crase e Pontuação*).
- Ao concluir cada bloco na semana, basta marcar o checkbox correspondente para registrar seu avanço.

### 3. Gere sua Aula Personalizada (Aba *Gerador de Prompt*)
Em vez de usar prompts genéricos, a plataforma monta um **Prompt Específico** para a etapa que você vai estudar:
1. Escolha seu **Ambiente de Estudo** (*IA Web / Mobile* ou *Agente PC*).
2. Selecione a **Semana (01 a 12)**.
3. Escolha o **Modelo por Disciplina** (uma matéria específica para focar sem enviar informações desnecessárias das outras, ou a *Semana Completa*).
4. *(Opcional)* Digite no campo de texto qual ponto ou conta você tem mais dificuldade.
5. Clique em **Copiar Prompt** e cole na sua IA de preferência (**ChatGPT, Claude, Gemini**, etc.).

### 4. Treine com Provas Reais (Aba *Acervo 93 Provas*)
- **Provas `#1` a `#12` (`1.pdf` a `12.pdf`):** Selecionadas e ordenadas como os **12 Simulados Oficiais de Sábado** (um para cada semana do cronograma).
- **Provas `#13` a `#93` (`13.pdf` a `93.pdf`):** 81 provas reais de Prefeituras e Câmaras Municipais (2022 a 2026) com seus gabaritos (`g13.pdf` a `g93.pdf`) para treino diário.

---

## Qual a Diferença entre o Uso na Web vs. Uso Local com Agente?

O objetivo didático e o conteúdo estudado são exatamente os mesmos nos dois modos. O que muda é a **automação**:

| Recurso | Modo IA Web / Mobile (ChatGPT, Claude, Gemini) | Modo Local com Agente no PC (Cursor, Antigravity, Windsurf, Claude Code) |
| :--- | :--- | :--- |
| **Como estudar** | Você copia o prompt no site e cola no chat da sua IA preferida pelo celular ou navegador. | Você clona este repositório no PC e envia o prompt para o Agente da sua IDE. |
| **Geração do Material** | A IA responde com a aula completa e questões diretamente na conversa. | O Agente cria automaticamente a pasta da semana (`semana-01/`, `semana-02/`...) e salva os arquivos `.md` de cada matéria lá dentro. |
| **Questões de Prova** | A IA elabora/adapta questões no padrão da banca diretamente no chat. | O Agente lê os PDFs reais da pasta `prova-auto/` e extrai questões autênticas com gabarito comentado. |
| **Marcação de Progresso** | Você marca manualmente os checkboxes concluídos no site. | **Automático:** o Agente pergunta seu e-mail na primeira vez e, a cada etapa concluída, marca sozinho o checklist local e atualiza seu progresso no site. |

---

## Como Usar Localmente com Agente de IA (Estrutura do Repositório)

Se você quiser usar o modo automatizado com um Agente de IA no computador, basta clonar o repositório e abrir a pasta na sua IDE:

```bash
git clone https://github.com/Gabriel-Soaress/concurso-oficial-administrativo.git
cd concurso-oficial-administrativo
```

### Estrutura de Pastas para o Agente
```text
concurso-oficial-administrativo/
├── index.html                                  # Plataforma Web (Login, Método, Cronograma, Gerador e 93 Provas)
├── edital_organizado_oficial_administrativo.pdf # Mapa original dos 4 grupos de conteúdo do edital
├── .agents/                                    # Cérebro do Agente Local
│   ├── GUIA_DO_AGENTE.md                       # Contexto mestre, método didático e Checklist das 12 semanas
│   ├── sync_db.py                              # Script que vincula o e-mail do usuário e atualiza o progresso no site
│   └── rules/
│       └── tutor-concurso.md                   # Regra lida automaticamente pelo Agente ao abrir o projeto
├── prova-auto/                                 # Acervo completo de 93 provas reais (2022 a 2026)
│   ├── 1.pdf .. 12.pdf                         # Os 12 Simulados Oficiais de Sábado (Semanas 01 a 12)
│   ├── 13.pdf .. 93.pdf                        # As 81 provas para treino diário
│   ├── g1.pdf .. g93.pdf                       # Gabaritos oficiais correspondentes
│   └── indice_provas.txt                       # Índice completo (Nº, Tipo, Ano, Órgão, Banca e Arquivos)
└── semana-01/ .. semana-12/                    # Pastas criadas automaticamente pelo Agente a cada semana
```

### Como o Agente Sincroniza seu Progresso
1. Ao iniciar seus estudos no PC, o Agente verifica o arquivo `.agents/GUIA_DO_AGENTE.md`.
2. Se for seu primeiro acesso local, o Agente **perguntará qual é o seu e-mail (ou usuário) cadastrado na plataforma** e executará:
   ```bash
   python .agents/sync_db.py set-user seu_email@exemplo.com
   ```
3. A partir daí, sempre que você avisar ao Agente que terminou uma matéria ou simulado, ele atualizará tanto o `.agents/GUIA_DO_AGENTE.md` quanto o seu painel online automaticamente.
