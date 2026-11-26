# Guia Prático de Produção de Aulas (`.md` + Visual CSS + Padrão ACCESS)

Este guia resume **o jeito que funciona melhor** para produzir aulas neste workspace. A regra central é simples: **didática humana e fluida em Markdown + visual limpo em CSS/SVG + divisão automática por Eixos no site**.

> **IMPORTANTE — O QUE FOI ABANDONADO (PROIBIDO REPETIR):**
> - **NÃO** usar o antigo molde burocrático `D-E-A-M-P-C` (`D —`, `E —`, `A —`, `M —`, `P —`).
> - **NÃO** carimbar todos os subtópicos com `"Exemplo 1 (Cotidiano) / Exemplo 2 (Rotina de Prefeitura) / Exemplo 3 (Caso Limite)"` nem com `"Como a banca monta a armadilha / Teste de 5s"`.
> - **NÃO** criar módulos `.tsx` customizados (`EduKit`) em `app-react/src/lessons/`. Tanto o site original (`index.html`) quanto o app React (`app-react/`) leem diretamente o `.md` via `aulas-data.js`, e o React já divide qualquer aula por `## EIXO X:` automaticamente.

---

## 1. Filosofia Didática (O Ritmo das Semanas 01–04)

1. **Contexto e Porquê antes do rótulo técnico:**
   - Sempre explique primeiro **por que** a regra existe, qual ambiguidade ou problema real ela resolve, e só depois dê o nome gramatical, matemático ou jurídico.
2. **Um conceito por vez → exemplos claros → próximo conceito:**
   - Nunca explique 3 ou 4 classificações juntas em bloco para só depois listar exemplos misturados.
   - Padrão fluido: explique o **Conceito A** → mostre logo abaixo os **exemplos destacados do Conceito A** → passe para o **Conceito B** → mostre os **exemplos do Conceito B**.
3. **Exemplos limpos, curtos e naturais:**
   - Use frases que qualquer pessoa visualiza na hora, sem forçar "Prefeitura" onde um exemplo simples do cotidiano explica melhor a mecânica (especialmente em Português e Matemática). Em Específicos, conte naturalmente como a repartição funciona na prática.
4. **Quadros comparativos e analogias integradas ao texto:**
   - Quando duas ideias se confundem na prova (ex.: *haver* vs. *existir*, *mas* vs. *embora*, *Pauta* vs. *Ata*), traga uma tabela objetiva ou analogia clara dentro do próprio fluxo da explicação.
5. **Fechamento leve por Eixo:**
   - Divida a aula em `## EIXO 1: ...`, `## EIXO 2: ...`, etc. (mantendo exatamente `## EIXO <N>: <Título>` para o parser de Eixos do React).
   - Ao final de cada Eixo: uma **Síntese Feynman de 3 Linhas** (`> [!TIP]`) e, quando ajudar o aluno a praticar antes de mudar de assunto, de 2 a 3 questões diretas de checkpoint (`### Questão XX`).
6. **Preservação dos Simulados:**
   - **NUNCA** retire questões de `prova-auto/1.pdf` a `12.pdf` (Simulados de Sábado). Use apenas `prova-auto/provas-access/` (mantidas 100% autênticas com gabarito definitivo conferido) e `13.pdf`..`93.pdf` / inéditas (adaptadas ao padrão ACCESS).

---

## 2. Catálogo de Elementos Visuais Limpos no `.md`

Estes elementos funcionam perfeitamente tanto no `index.html` quanto no `app-react/`:

### A. Destaque Colorido de Palavras (Inline)
Use quando quiser bater o olho na frase e enxergar na hora quem é o Sujeito, o Verbo, o Objeto, o Conectivo ou a Preposição:
- `<mark class="hl-indigo">termo</mark>` (índigo — ex.: Sujeito / Núcleo / Conceito principal)
- `<mark class="hl-emerald">termo</mark>` (esmeralda — ex.: Verbo / Ação / Termo correto)
- `<mark class="hl-sky">termo</mark>` (azul-celeste — ex.: Objeto / Complemento / Estado)
- `<mark class="hl-amber">termo</mark>` (âmbar — ex.: Adjunto / Preposição / Circunstância)
- `<mark class="hl-rose">termo</mark>` (rosa — ex.: Alerta / Erro comum / Elemento paciente)
- `<mark class="hl-purple">termo</mark>` (roxo — ex.: Predicativo / Conectivo / Referência)
- `<u>termo</u>` (sublinhado âmbar de destaque padrão — ótimo para enunciados de questões quando citam *"o termo sublinhado"*).

### B. Caixa Limpa de Exemplos Destacados (`.edu-component` + `.edu-ex-list`)
Sempre mantenha todas as tags `<div ...>` e `</div>` perfeitamente balanceadas:

```html
<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>EXEMPLOS NA PRÁTICA</span>
    </div>
    <span class="edu-comp-badge">VISUALIZAÇÃO</span>
  </div>
  <div class="edu-ex-legend">
    <span><mark class="hl-indigo">Sujeito</mark></span>
    <span><mark class="hl-emerald">Verbo</mark></span>
    <span><mark class="hl-sky">Objeto</mark></span>
  </div>
  <div class="edu-ex-list">
    <div class="edu-ex-item">
      <div class="edu-ex-sentence"><mark class="hl-indigo">O diretor</mark> <mark class="hl-emerald">assinou</mark> <mark class="hl-sky">o edital</mark>.</div>
      <div class="edu-ex-note">Sem preposição entre o verbo e o alvo → Objeto Direto.</div>
    </div>
  </div>
</div>
```

### C. Grids de Cards CSS, Callouts e Pipeline 3 Escalas
- Cards lado a lado para resumir 2, 3 ou 4 peças: `<div class="edu-component my-6">` com `<div class="edu-cards-grid grid-3">` e `<div class="edu-card card-indigo|card-emerald|card-amber|card-rose|card-sky">`.
- Callouts Markdown: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`.
- Conexão de 3 Escalas em Conhecimentos Gerais: `> [!ESCALAS]` com `CAUSA:`, `FATO:`, `CONSEQUÊNCIA:`.
- Contas matemáticas armadas: bloco ```` ```text ````. (Proibido caixas ASCII desenhadas com `┌───┐`!).

### D. Diagramas SVG Limpos (com Zoom Automático no React)
Sempre que um esquema visual ou fluxograma ajudar a clarear o raciocínio (ex.: Ordem Direta vs. Inversa, Fluxo de Protocolo, `CN × AA`), desenhe um `<svg viewBox="0 0 740 240" class="w-full h-auto" role="img" aria-label="...">` legível e responsivo. O leitor do React adiciona automaticamente o botão **Expandir em tela cheia**.

---

## 3. Padrão de Questões Interativas + Validação

Toda questão de múltipla escolha deve seguir este formato para virar formulário interativo nos dois sites:

```markdown
### Questão 01
**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo
Enunciado claro aqui...

(A) Alternativa A
(B) Alternativa B
(C) Alternativa C
(D) Alternativa D
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
- **(C) CORRETA:** Explicação clara...
- **(A), (B) e (D) ERRADAS:** Motivo curto do erro de cada uma...
</details>
```

Checklist rápido antes de finalizar uma aula:
1. Rodar `python .agents/audit_lesson.py semana-XX/<arquivo>.md` (0 erros).
2. Rodar `python .agents/sync_lessons.py` para atualizar `aulas-data.js`.
3. Conferir se `index.html` e `app-react/` leem o conteúdo limpo e sem HTML quebrado.
