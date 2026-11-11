# Semana 03: Matemática e Raciocínio Lógico-Matemático (RLM) — Radiciação, Regra de Três e Porcentagem
**Cargo:** Oficial Administrativo  
**Nível de Escolaridade:** Ensino Médio  
**Foco:** Construção Lógica Passo a Passo (do Zero ao Avançado), Compreensão Prática das Fórmulas, Diagramas Visuais em CSS e Questões Reais Comentadas  

---

## Sumário da Aula
1. [Eixo 1: Radiciação Completa — Do Expoente Fracionário à Racionalização](#eixo-1-radiciação-completa--do-expoente-fracionário-à-racionalização)
   - O que a Radiciação Faz na Realidade? (A Operação Reversa da Potência)
   - Anatomia do Radical e a Regra dos Sinais (Índice Par vs. Índice Ímpar)
   - Expoente Fracionário: A Lógica da "Regra do Sol e da Sombra"
   - Simplificação de Raízes Não Exatas (Extraindo Fatores pela Fatoração)
   - As 4 Propriedades Sagradas e Operações com Radicais
   - Racionalização de Denominadores (Por que tirar a raiz de baixo e os 2 Casos de Prova)
   - Síntese Feynman (Radiciação)
2. [Eixo 2: Regra de Três Simples e Composta — A Lógica das Grandezas](#eixo-2-regra-de-três-simples-e-composta--a-lógica-das-grandezas)
   - Qual Problema Real a Regra de Três Resolve?
   - Regra de Três Simples: Método das Setas (Direta vs. Inversa)
   - Regra de Três Composta: O Método Infalível da Comparação com o $x$
   - Conferência Rápida pelo Método "Processo × Produto" (Causas vs. Efeitos)
   - Síntese Feynman (Regra de Três)
3. [Eixo 3: Porcentagem Aplicada e Variações Sucessivas (Aumentos e Descontos)](#eixo-3-porcentagem-aplicada-e-variações-sucessivas-aumentos-e-descontos)
   - O Significado Real de "%" e a Tríade da Conversão
   - Atalhos de Cálculo Mental ($10\%$, $1\%$, $5\%$, $25\%$, $50\%$)
   - Fator de Multiplicação ($1 + i$ e $1 - i$) e Como Voltar ao Valor Original
   - Por que Aumentos e Descontos Sucessivos Não se Somam Direto ($+20\%$ depois $-20\%$ $\neq 0$)
   - Variação Percentual Entre Dois Valores (A Armadilha do Valor Inicial)
   - Síntese Feynman (Porcentagem)
4. [Laboratório de Casos Guiados (Passo a Passo)](#laboratório-de-casos-guiados-passo-a-passo)
5. [Bateria de 6 Questões Reais Comentadas](#bateria-de-6-questões-reais-comentadas)
6. [Checklist de Fixação Ativa para o Aluno](#checklist-de-fixação-ativa-para-o-aluno)

---

## EIXO 1: Radiciação Completa — Do Expoente Fracionário à Racionalização

### 1. O que a Radiciação Faz na Realidade? (A Operação Reversa)
Na Semana 01, vimos a **potenciação**: você tem a **base** e o **expoente** e pergunta qual é o resultado multiplicado.  
Exemplo: *"Se o lado de uma sala quadrada mede $5\text{ m}$, qual é a área?"* $\implies 5^2 = \mathbf{25\text{ m}^2}$.

A **radiciação** faz a pergunta no sentido contrário: ela entrega o resultado pronto (a área $= 25\text{ m}^2$ ou o volume de um cubo $= 64\text{ m}^3$) e pergunta: **"Qual número positivo multiplicado por si mesmo $n$ vezes produziu esse valor?"**
* $\sqrt{25} = \mathbf{5}$ porque $5^2 = 25$.
* $\sqrt[3]{64} = \mathbf{4}$ porque $4^3 = 4 \times 4 \times 4 = 64$.

---

### 2. Anatomia do Radical e a Regra dos Sinais (Índice Par vs. Índice Ímpar)
Toda expressão radical $\sqrt[n]{a} = b$ possui quatro peças com funções bem definidas:
* **Índice ($n$):** o número pequeno que fica em cima do "V" do radical. Ele diz **quantas vezes** a resposta precisa multiplicar a si mesma. *(Quando não aparece nada escrito, o índice é obrigatoriamente **$2$** — raiz quadrada)*.
* **Radical ($\sqrt{\;\;}$):** o símbolo da operação.
* **Radicando ($a$):** o número que está protegido debaixo do teto.
* **Raiz ($b$):** o resultado final da conta ($\sqrt[n]{a} = b \iff b^n = a$).

> [!IMPORTANT]
> **O Porquê da Regra dos Sinais na Raiz (Onde Todo Mundo Trava):**
> * **Índice PAR ($\sqrt{\;\;}$, $\sqrt[4]{\;\;}$, $\sqrt[6]{\;\;}$) NÃO aceita radicando negativo nos Reais ($\mathbb{R}$):**
>   Tente calcular $\sqrt{-9}$. Você precisa de um número real que, multiplicado por ele mesmo ($2$ vezes), dê $-9$.
>   - Se testar $+3$: $(+3) \times (+3) = +9$ (deu positivo!).
>   - Se testar $-3$: $(-3) \times (-3) = +9$ (também deu positivo, pela regra dos sinais!).
>   Conclusão: **nenhum número real** ao quadrado dá negativo! Logo, $\sqrt{-9} \notin \mathbb{R}$. *(Atenção: $-\sqrt{9} = -3$ existe porque o sinal de menos está **do lado de fora** da raiz!)*.
> * **Índice ÍMPAR ($\sqrt[3]{\;\;}$, $\sqrt[5]{\;\;}$) ACEITA normalmente radicando negativo:**
>   Teste $\sqrt[3]{-8}$: $(-2) \times (-2) \times (-2) = (+4) \times (-2) = -8$. Deu certo! Logo, $\sqrt[3]{-8} = \mathbf{-2}$.

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">📐</span>
      <span>ANATOMIA DO RADICAL & REGRA DOS SINAIS</span>
    </div>
    <span class="edu-comp-badge">Base da Radiciação</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">🔍</span>
        <span class="card-badge">Peças da Expressão</span>
      </div>
      <h4 class="card-title">$\sqrt[n]{a} = b$</h4>
      <p class="card-text"><strong>$n$</strong> é o índice (se oculto, vale $2$); <strong>$a$</strong> é o radicando (conteúdo interno); <strong>$b$</strong> é a raiz tal que $b^n = a$.</p>
      <div class="card-examples">
        <span class="ex-tag">$\sqrt[4]{81} = 3$ (pois $3^4 = 81$)</span>
      </div>
    </div>
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">🚫</span>
        <span class="card-badge">Índice Par ($2, 4, 6\dots$)</span>
      </div>
      <h4 class="card-title">Radicando Negativo Proibido em $\mathbb{R}$</h4>
      <p class="card-text">Todo número real elevado a expoente par vira positivo ou zero. Nunca dará negativo dentro da raiz.</p>
      <div class="card-examples">
        <span class="ex-tag">$\sqrt{-16} \notin \mathbb{R}$</span>
        <span class="ex-tag">$-\sqrt{16} = -4$ (menos fora!)</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">✅</span>
        <span class="card-badge">Índice Ímpar ($3, 5, 7\dots$)</span>
      </div>
      <h4 class="card-title">Conserva o Sinal de Dentro</h4>
      <p class="card-text">Multiplicar quantidade ímpar de fatores negativos preserva o sinal negativo no resultado.</p>
      <div class="card-examples">
        <span class="ex-tag">$\sqrt[3]{-27} = -3$</span>
        <span class="ex-tag">$\sqrt[5]{-32} = -2$</span>
      </div>
    </div>
  </div>
</div>

---

### 3. Expoente Fracionário: A Lógica da "Regra do Sol e da Sombra"
Por que escrever $8^{\frac{1}{3}}$ significa o mesmo que $\sqrt[3]{8}$?  
Pela regra de potências da Semana 01, multiplicar potências de mesma base **soma os expoentes**. Veja o que acontece quando multiplicamos $8^{\frac{1}{3}}$ por ele mesmo $3$ vezes:
$$8^{\frac{1}{3}} \times 8^{\frac{1}{3}} \times 8^{\frac{1}{3}} = 8^{\frac{1}{3} + \frac{1}{3} + \frac{1}{3}} = 8^{\frac{3}{3}} = 8^1 = 8$$
Ora, o único número positivo que multiplicado por si mesmo $3$ vezes dá $8$ é justamente a **raiz cúbica de $8$** ($\sqrt[3]{8} = 2$)!  
Daí nasce a lei universal de conversão entre potência e raiz:

$$a^{\frac{m}{n}} = \sqrt[n]{a^m}$$

**Analogia da Regra do Sol e da Sombra (para nunca inverter quem vai dentro e quem vai no índice):**
* Imagine a fração $\frac{m}{n}$ no expoente: o número de cima ($m$) está tomando **Sol**; o de baixo ($n$) está na **Sombra**.
* Ao transformar em raiz, quem estava no **Sol ($m$)** entra para a **Sombra** (debaixo do teto do radical, como expoente do $a$), e quem estava na **Sombra ($n$)** sai para o **Sol** (no índice do radical)!
* **Exemplo 1:** $8^{\frac{2}{3}} = \sqrt[3]{8^2} = \sqrt[3]{64} = \mathbf{4}$ *(ou mais rápido: $(\sqrt[3]{8})^2 = 2^2 = 4$)*.
* **Exemplo 2 (com expoente negativo):** $27^{-\frac{1}{3}}$ — primeiro o sinal negativo inverte a base: $\left(\frac{1}{27}\right)^{\frac{1}{3}} = \sqrt[3]{\frac{1}{27}} = \mathbf{\frac{1}{3}}$.

---

### 4. Simplificação de Raízes Não Exatas (Extraindo Fatores)
Na Semana 01, vimos raízes exatas como $\sqrt{144} = 12$. Mas e quando o número **não** tem raiz exata, como $\sqrt{50}$ ou $\sqrt[3]{54}$? Em provas, a banca nunca escreve o decimal aproximado ($7{,}071\dots$); ela escreve na **forma simplificada**.

**Como funciona na prática?** Você fatora o radicando em números primos e junta grupos do tamanho exato do **índice $n$** (pares se o índice for $2$; trincas se o índice for $3$). Quem fecha um grupo inteiro **paga o pedágio** (perde o expoente $n$) e **sai** da raiz; quem sobra sozinho **fica preso** dentro do radical:

1. **Simplificar $\sqrt{50}$ (índice $2 \to$ junte pares):**
   * Fatorando $50$: $50 = 2 \times 25 = 2 \times 5^2$.
   * O $5^2$ completou um par $\to$ sai como $5$. O $2$ está sozinho $\to$ fica dentro!
   * Resultado: $\sqrt{50} = \sqrt{5^2 \times 2} = \mathbf{5\sqrt{2}}$.
2. **Simplificar $\sqrt{72}$ (índice $2$):**
   * Fatorando $72$: $72 = 36 \times 2 = 6^2 \times 2$ (ou $2^2 \times 2 \times 3^2$).
   * Resultado: $\sqrt{72} = \sqrt{6^2 \times 2} = \mathbf{6\sqrt{2}}$.
3. **Simplificar $\sqrt[3]{54}$ (índice $3 \to$ junte trincas):**
   * Fatorando $54$: $54 = 27 \times 2 = 3^3 \times 2$.
   * O $3^3$ completou uma trinca $\to$ sai como $3$. O $2$ fica dentro da raiz cúbica!
   * Resultado: $\sqrt[3]{54} = \mathbf{3\sqrt[3]{2}}$.

---

### 5. As 4 Propriedades Sagradas e Operações com Radicais

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">⚡</span>
      <span>OPERAÇÕES COM RADICAIS E ARMADILHA CLÁSSICA DE PROVA</span>
    </div>
    <span class="edu-comp-badge">Propriedades Essenciais</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">✅</span>
        <span class="card-badge">Multiplicação, Divisão e Raiz de Raiz</span>
      </div>
      <h4 class="card-title">Pode Juntar ou Separar Livremente</h4>
      <p class="card-text">Com o <strong>mesmo índice $n$</strong>, o produto e a divisão permitem juntar tudo sob um único radical:</p>
      <div class="card-levels">
        <div class="level-row"><span>Produto</span> <strong>$\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{a \cdot b}$ &nbsp;(Ex: $\sqrt{3}\cdot\sqrt{12} = \sqrt{36} = 6$)</strong></div>
        <div class="level-row"><span>Divisão</span> <strong>$\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}$ &nbsp;(Ex: $\frac{\sqrt{48}}{\sqrt{3}} = \sqrt{16} = 4$)</strong></div>
        <div class="level-row"><span>Raiz de Raiz</span> <strong>$\sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}$ &nbsp;(Ex: $\sqrt{\sqrt[3]{64}} = \sqrt[6]{64} = 2$)</strong></div>
      </div>
    </div>
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">🚨</span>
        <span class="card-badge">Soma e Subtração de Radicais</span>
      </div>
      <h4 class="card-title">JAMAIS Some os Números de Dentro!</h4>
      <p class="card-text">$\sqrt{9 + 16} = \sqrt{25} = 5$, enquanto $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$! Só somamos os coeficientes de <strong>radicais idênticos</strong> (como letras em álgebra: $3x + 5x = 8x$):</p>
      <div class="card-levels">
        <div class="level-row highlight-danger"><span>Proibido</span> <strong>$\sqrt{2} + \sqrt{3} \neq \sqrt{5}$</strong></div>
        <div class="level-row"><span>Semelhantes</span> <strong>$3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$</strong></div>
        <div class="level-row"><span>Simplificar Antes</span> <strong>$\sqrt{18} + \sqrt{50} = 3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$</strong></div>
      </div>
    </div>
  </div>
</div>

---

### 6. Racionalização de Denominadores (Tirar a Raiz de Baixo)
Imagine tentar calcular na mão $\frac{1}{\sqrt{2}} = \frac{1}{1{,}4142135\dots}$. Dividir $1$ por um número infinito não periódico dá um trabalho imenso. Mas se multiplicarmos em cima e embaixo por $\sqrt{2}$ (ou seja, multiplicarmos por **"1 disfarçado"** = $\frac{\sqrt{2}}{\sqrt{2}}$), não alteramos o valor da fração e o denominador vira inteiro:

$$\frac{1}{\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2}}{(\sqrt{2})^2} = \frac{\sqrt{2}}{2}$$

Dividir $1{,}4142\dots$ por $2$ ($= 0{,}7071\dots$) é instantâneo! Há **2 casos** cobrados em provas:

1. **Caso 1 — Raiz quadrada sozinha embaixo ($\frac{A}{\sqrt{b}}$ ou $\frac{A}{k\sqrt{b}}$):**
   Multiplique em cima e embaixo por $\sqrt{b}$.
   * *Exemplo:* $\frac{12}{\sqrt{3}} = \frac{12 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{12\sqrt{3}}{3} = \mathbf{4\sqrt{3}}$.
2. **Caso 2 — Soma ou subtração com raiz embaixo ($\frac{A}{\sqrt{b} + \sqrt{c}}$):**
   Se multiplicar só por $\sqrt{b}$, a outra raiz continua lá! Usamos o produto notável $(x + y)(x - y) = x^2 - y^2$, multiplicando pelo **conjugado** (mesmos termos com o **sinal do meio invertido**).
   * *Exemplo:* Racionalizar $\frac{4}{\sqrt{5} - \sqrt{3}}$:
     Multiplica em cima e embaixo por $(\sqrt{5} + \sqrt{3})$:
     $$\frac{4 \cdot (\sqrt{5} + \sqrt{3})}{(\sqrt{5} - \sqrt{3})(\sqrt{5} + \sqrt{3})} = \frac{4(\sqrt{5} + \sqrt{3})}{(\sqrt{5})^2 - (\sqrt{3})^2} = \frac{4(\sqrt{5} + \sqrt{3})}{5 - 3} = \frac{4(\sqrt{5} + \sqrt{3})}{2} = \mathbf{2(\sqrt{5} + \sqrt{3})}$$

> **Síntese Feynman (Radiciação em 3 Linhas):**
> 1. $\sqrt[n]{a}$ pergunta qual número elevado a $n$ dá $a$; índice par rejeita negativos em $\mathbb{R}$, enquanto índice ímpar preserva o sinal, e $a^{m/n} = \sqrt[n]{a^m}$ ("Sol entra na sombra").
> 2. Raízes não exatas simplificam-se fatorando e extraindo grupos de tamanho $n$; na soma/subtração só juntamos radicais idênticos após simplificá-los.
> 3. Racionalizar multiplica numerador e denominador por $\sqrt{b}$ (termo isolado) ou pelo conjugado (troca do sinal do meio) para eliminar a raiz do denominador.

---

## EIXO 2: Regra de Três Simples e Composta — A Lógica das Grandezas

### 1. Qual Problema Real a Regra de Três Resolve?
Você conhece **três valores** de uma relação proporcional na rotina administrativa e precisa descobrir o **quarto valor ($x$)** — por exemplo: *"Se 3 impressoras do setor de protocolo imprimem 900 guias em 2 horas, quantas horas levarão 5 impressoras para imprimir 3.000 guias?"*  
Na Semana 02, aprendemos a montar proporções ($\frac{a}{b} = \frac{c}{d}$). A **Regra de Três** é exatamente o método organizado para montar essa proporção quando as grandezas podem crescer juntas (**diretas**) ou em direções opostas (**inversas**).

---

### 2. Regra de Três Simples: Método das Setas (2 Grandezas)
O erro nº 1 do candidato apressado é montar a tabela e sair **multiplicando cruzado no piloto automático**. Antes de cruzar qualquer coisa, faça sempre a pergunta da realidade: **"Se eu AUMENTAR a coluna A, a coluna B AUMENTA ou DIMINUI?"**

* **Grandezas Diretamente Proporcionais (GDP — Setas no MESMO sentido $\uparrow\;\uparrow$):**
  Mais processos para digitalizar $\to$ exige **mais** tempo (ou mais folhas de papel). Quando ambas crescem ou diminuem juntas, a fração fica na posição original e **multiplica-se cruzado**.
* **Grandezas Inversamente Proporcionais (GIP — Setas em sentidos OPOSTOS $\uparrow\;\downarrow$):**
  Mais servidores atendendo ao mesmo tempo (ou maior velocidade de um veículo) $\to$ o serviço termina em **menos** tempo! Quando uma cresce e a outra cai, **INVERTA uma das colunas** (vire de cabeça para baixo) antes de multiplicar cruzado (ou multiplique **reto na horizontal**).

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">↔️</span>
      <span>REGRA DE TRÊS SIMPLES: DIRETA vs. INVERSA NA PRÁTICA</span>
    </div>
    <span class="edu-comp-badge">Método das Setas</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">⬆️⬆️</span>
        <span class="card-badge">Diretamente Proporcional (GDP)</span>
      </div>
      <h4 class="card-title">Mais trabalho = Mais tempo</h4>
      <p class="card-text">Uma impressora imprime <strong>120 páginas em 4 minutos</strong>. Quantas páginas imprimirá em <strong>10 minutos</strong>?</p>
      <div class="card-levels">
        <div class="level-row"><span>Setas</span> <strong>$\uparrow$ Minutos ($4 \to 10$) $\implies$ $\uparrow$ Páginas ($120 \to x$)</strong></div>
        <div class="level-row"><span>Proporção</span> <strong>$\frac{4}{10} = \frac{120}{x} \implies 4x = 1200$</strong></div>
        <div class="level-row"><span>Resultado</span> <strong>$x = \mathbf{300\text{ páginas}}$ (cresceu junto!)</strong></div>
      </div>
    </div>
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">⬆️⬇️</span>
        <span class="card-badge">Inversamente Proporcional (GIP)</span>
      </div>
      <h4 class="card-title">Mais servidores = Menos dias</h4>
      <p class="card-text">Uma equipe de <strong>6 servidores</strong> cataloga um arquivo em <strong>10 dias</strong>. Se colocarmos <strong>15 servidores</strong>, em quantos dias terminam?</p>
      <div class="card-levels">
        <div class="level-row"><span>Setas</span> <strong>$\uparrow$ Servidores ($6 \to 15$) $\implies$ $\downarrow$ Dias ($10 \to x$)</strong></div>
        <div class="level-row highlight-danger"><span>Inverter!</span> <strong>Inverte a coluna dos servidores: $\frac{15}{6} = \frac{10}{x}$</strong></div>
        <div class="level-row"><span>Resultado</span> <strong>$15x = 60 \implies x = \mathbf{4\text{ dias}}$ (caiu o prazo!)</strong></div>
      </div>
    </div>
  </div>
</div>

---

### 3. Regra de Três Composta (3 ou mais Grandezas) — Passo a Passo com Exemplo Real
Na rotina de um órgão público, um prazo quase nunca depende de apenas um fator. Ele costuma depender ao mesmo tempo de **quantos servidores trabalham**, **quantas horas por dia eles rendem** e **qual o tamanho da pilha de processos**. Quando temos **3 ou mais grandezas** juntas, usamos a **Regra de Três Composta**.

#### Exemplo Real Passo a Passo (Digitalização na Prefeitura de Birigui)
> **Problema:** Na Prefeitura de Birigui, **$6$ servidores**, trabalhando **$4$ horas por dia**, digitalizam **$1.200$ processos** em **$5$ dias**. Se a chefia realocar a equipe para **$5$ servidores**, mas ampliar a jornada para **$6$ horas por dia**, em **quantos dias** eles digitalizarão **$3.600$ processos**?

Vamos desmontar a solução em **4 passos sem pular nenhum raciocínio**:

**Passo 1 — Montar a tabela organizada em colunas (uma coluna para cada grandeza):**

| Servidores | Horas por dia | Processos | **Dias (Incógnita)** |
| :---: | :---: | :---: | :---: |
| $6$ | $4$ | $1.200$ | **$5$** |
| $5$ | $6$ | $3.600$ | **$x$** |

**Passo 2 — Isolar a coluna do $x$ ANTES do sinal de igual (`=`):**  
Escolha uma direção de seta para a coluna do $x$ (por padrão, **aponte para baixo $\downarrow$**) e escreva essa razão sozinha do lado esquerdo:
$$\frac{5}{x} = \text{(produto das outras colunas comparadas)}$$

**Passo 3 — Comparar CADA coluna individualmente APENAS com a coluna do $x$:**  
*Regra de ouro:* Ao analisar uma coluna, **finja que todas as outras estão congeladas!** Nunca compare *Servidores* com *Processos* entre si — compare tudo sempre com **Dias ($x$)**:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🧭</span>
      <span>ANÁLISE COLUNA POR COLUNA (SEMPRE EM RELAÇÃO AOS DIAS $\downarrow$)</span>
    </div>
    <span class="edu-comp-badge">Regra de Três Composta</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">👥</span>
        <span class="card-badge">1ª Comparação: INVERSA</span>
      </div>
      <h4 class="card-title">Servidores ($6 \to 5$) vs. Dias ($\downarrow$)</h4>
      <p class="card-text"><em>Pergunta:</em> Se eu <strong>DIMINUO</strong> o nº de servidores, o mesmo serviço demora <strong>MAIS</strong> ou menos dias?</p>
      <div class="card-levels">
        <div class="level-row"><span>Sentido</span> <strong>$\downarrow$ Servidores $\implies$ $\uparrow$ Dias</strong></div>
        <div class="level-row highlight-danger"><span>Ação</span> <strong>INVERSA $\implies$ INVERTE: $\dfrac{5}{6}$</strong></div>
      </div>
    </div>
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">⏰</span>
        <span class="card-badge">2ª Comparação: INVERSA</span>
      </div>
      <h4 class="card-title">Horas/dia ($4 \to 6$) vs. Dias ($\downarrow$)</h4>
      <p class="card-text"><em>Pergunta:</em> Se a equipe trabalha <strong>MAIS</strong> horas por dia, termina em mais ou <strong>MENOS</strong> dias?</p>
      <div class="card-levels">
        <div class="level-row"><span>Sentido</span> <strong>$\uparrow$ Horas/dia $\implies$ $\downarrow$ Dias</strong></div>
        <div class="level-row highlight-danger"><span>Ação</span> <strong>INVERSA $\implies$ INVERTE: $\dfrac{6}{4}$</strong></div>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">📂</span>
        <span class="card-badge">3ª Comparação: DIRETA</span>
      </div>
      <h4 class="card-title">Processos ($1.200 \to 3.600$) vs. Dias ($\downarrow$)</h4>
      <p class="card-text"><em>Pergunta:</em> Se temos <strong>MAIS</strong> processos para digitalizar, precisamos de <strong>MAIS</strong> ou menos dias?</p>
      <div class="card-levels">
        <div class="level-row"><span>Sentido</span> <strong>$\uparrow$ Processos $\implies$ $\uparrow$ Dias</strong></div>
        <div class="level-row"><span>Ação</span> <strong>DIRETA $\implies$ MANTÉM: $\dfrac{1.200}{3.600} = \dfrac{1}{3}$</strong></div>
      </div>
    </div>
  </div>
</div>

**Passo 4 — Juntar as frações multiplicando do lado direito do `=` e simplificar antes de multiplicar:**
$$\frac{5}{x} = \underbrace{\frac{5}{6}}_{\text{Servidores (inv.)}} \times \underbrace{\frac{6}{4}}_{\text{Horas/dia (inv.)}} \times \underbrace{\frac{1}{3}}_{\text{Processos (dir.)}}$$

1. **Simplifique cortando o $6$ de baixo com o $6$ de cima:** $\frac{5}{6} \times \frac{6}{4} \times \frac{1}{3} = \frac{5}{4} \times \frac{1}{3} = \mathbf{\frac{5}{12}}$.
2. **Resolva a proporção final:**
   $$\frac{5}{x} = \frac{5}{12} \implies 5x = 60 \implies x = \mathbf{12\text{ dias}}$$
*(Conferência lógica: a pilha de processos triplicou de $1.200$ para $3.600$, o que exigiria $15$ dias; como a equipe encolheu um pouco mas compensou trabalhando mais horas por dia, fechou em $12$ dias — totalmente coerente!)*

> [!TIP]
> **Atalho de Conferência "Processo × Produto" (Causas ÷ Efeitos):**  
> Em qualquer problema de produção/trabalho, separe quem **trabalha/produz (Processo = Causas)** do que **foi entregue (Produto = Efeito)**:  
> $$\frac{\text{Processo}_1}{\text{Produto}_1} = \frac{\text{Processo}_2}{\text{Produto}_2}$$  
> Aplicando no mesmo exemplo da Prefeitura (**Processo:** Servidores $\times$ Horas/dia $\times$ Dias | **Produto:** Processos digitalizados):  
> $$\frac{6 \times 4 \times 5}{1.200} = \frac{5 \times 6 \times x}{3.600} \implies \frac{120}{1.200} = \frac{30x}{3.600} \implies \frac{1}{10} = \frac{x}{120} \implies x = \mathbf{12\text{ dias}}$$  
> *(Use as setas como método principal e o Processo $\div$ Produto para conferir em 15 segundos se você não inverteu nenhuma seta sem querer!)*

> **Síntese Feynman (Regra de Três em 3 Linhas):**
> 1. Antes de cruzar números, pergunte à realidade: se a grandeza cresce e o resultado cresce junto, é direta (mantém); se um cresce e o outro encolhe, é inversa (inverte).
> 2. Na Regra de Três Composta, isole a fração do $x$ antes do `=` e compare cada outra coluna individualmente apenas com a do $x$, multiplicando todas depois do `=`.
> 3. Sempre cheque se a resposta faz sentido físico (dobrar a equipe sem mudar a obra precisa reduzir o prazo, nunca aumentá-lo!).

---

## EIXO 3: Porcentagem Aplicada e Variações Sucessivas

### 1. O Significado Real de "%" e a Tríade da Conversão
O símbolo **`%` ("por cento")** significa literalmente **"dividido por $100$"** — isto é, fatiar o inteiro em $100$ pedacinhos iguais e pegar $p$ fatias. Dominar porcentagem rápido em prova exige transitar entre **três idiomas equivalentes**:

| Taxa Percentual | Forma Fracionária | Forma Decimal (O Fator!) | Cálculo Mental Rápido (sobre um valor $V$) |
| :---: | :---: | :---: | :--- |
| **$100\%$** | $\frac{100}{100} = 1$ | **$1{,}00$** | É o próprio inteiro ($V$). |
| **$50\%$** | $\frac{50}{100} = \frac{1}{2}$ | **$0{,}50$** | Metade ($\div 2$). |
| **$25\%$** | $\frac{25}{100} = \frac{1}{4}$ | **$0{,}25$** | Um quarto ($\div 4$, ou metade da metade). |
| **$10\%$** | $\frac{10}{100} = \frac{1}{10}$ | **$0{,}10$** | Divide por $10$ (anda a vírgula $1$ casa p/ esquerda). |
| **$5\%$** | $\frac{5}{100} = \frac{1}{20}$ | **$0{,}05$** | É a metade de $10\%$! |
| **$1\%$** | $\frac{1}{100}$ | **$0{,}01$** | Divide por $100$ (anda a vírgula $2$ casas p/ esquerda). |

*Como combinar rápido de cabeça:* Quer $15\%$ de $\text{R\$ } 400$? $10\% = 40$; $5\% = \text{metade de } 40 = 20 \implies 15\% = 40 + 20 = \mathbf{\text{R\$ } 60}$!

---

### 2. Fator de Multiplicação ($1 + i$ e $1 - i$) e Como Voltar ao Valor Original
Calcular o desconto ou aumento e depois somar/subtrair funciona, mas em provas modernas (especialmente em **variações sucessivas** e **reversão de preço**) o **Fator de Multiplicação** resolve em 1 linha sem armadilhas:

* O valor original completo vale **$100\% = 1{,}00$**.
* **Para AUMENTAR $i\%$:** Multiplique por **$(1 + i)$**:
  - Aumento de $15\%$ ($0{,}15$): você fica com $100\% + 15\% = 115\% = \mathbf{1{,}15}$.
  - Aumento de $5\%$ ($0{,}05$): você fica com $100\% + 5\% = 105\% = \mathbf{1{,}05}$ *(cuidado: $1{,}5$ seria $50\%$, e não $5\%$!)*.
* **Para DESCONTAR $i\%$:** Multiplique por **$(1 - i)$**:
  - Desconto de $20\%$ ($0{,}20$): você paga $100\% - 20\% = 80\% = \mathbf{0{,}80}$.
  - Desconto de $9\%$ ($0{,}09$): você paga $100\% - 9\% = 91\% = \mathbf{0{,}91}$.

> [!WARNING]
> **A Maior Armadilha da ACCESS em Porcentagem (Descobrir o Valor ANTES do Ajuste):**  
> *"Após um desconto de 20%, um produto passou a custar R\$ 240,00. Qual era o preço original?"*  
> **Erro clássico:** calcular $20\%$ de $240$ ($=48$) e somar ($240 + 48 = 288$). **ERRADO!** O desconto de $20\%$ foi aplicado sobre o preço antigo $P$, e não sobre $240$!  
> **Caminho certo com o fator:**
> $$P_{\text{novo}} = P_{\text{antigo}} \times 0{,}80 \implies 240 = P_{\text{antigo}} \times 0{,}80 \implies P_{\text{antigo}} = \frac{240}{0{,}80} = \mathbf{\text{R\$ } 300{,}00}$$
> *Regra de ouro:* Para **avançar** no tempo, **multiplique** pelo fator; para **voltar** ao original, **divida** pelo fator (ou monte a regra de três: $240$ está para $80\%$, assim como $P$ está para $100\%$).

---

### 3. Aumentos e Descontos Sucessivos (O Efeito Cascata)
Por que um produto que sobe **$20\%$** num mês e cai **$20\%$** no mês seguinte **NÃO** volta ao preço inicial?  
Porque a segunda porcentagem **não incide sobre o valor original**, e sim **sobre o novo valor já inchado** (a nova base de $100\%$ ficou maior)!

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">📉</span>
      <span>VARIAÇÕES SUCESSIVAS: A ILUSÃO DO "+20% E -20%"</span>
    </div>
    <span class="edu-comp-badge">Multiplicação de Fatores</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">1️⃣</span>
        <span class="card-badge">Início (Base 100)</span>
      </div>
      <h4 class="card-title">Produto custa R$ 100,00</h4>
      <p class="card-text">Sempre que uma questão de porcentagem sucessiva não der o preço inicial em reais, teste mentalmente com <strong>$100$</strong>!</p>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">2️⃣</span>
        <span class="card-badge">1º Ajuste: +20% (× 1,20)</span>
      </div>
      <h4 class="card-title">Sobe para R$ 120,00</h4>
      <p class="card-text">$100 \times 1{,}20 = \mathbf{120}$. Agora a base sobre a qual o desconto vai bater é $120$, e não mais $100$!</p>
    </div>
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">3️⃣</span>
        <span class="card-badge">2º Ajuste: −20% (× 0,80)</span>
      </div>
      <h4 class="card-title">Cai para R$ 96,00 (−4%!)</h4>
      <p class="card-text">$20\%$ de $120 = 24$. Então $120 - 24 = \mathbf{96}$! Via fatores: $1{,}20 \times 0{,}80 = \mathbf{0{,}96} \implies 96\%$ do início = <strong>queda real de $4\%$</strong>.</p>
    </div>
  </div>
</div>

#### Fórmula Geral das Variações Sucessivas e Variação Percentual
* **Encadear $n$ variações:** Multiplique todos os fatores: $F_{\text{total}} = (1 \pm i_1) \times (1 \pm i_2) \times (1 \pm i_3) \dots$
  - *Ex. 2 aumentos sucessivos de $10\%$:* $1{,}10 \times 1{,}10 = 1{,}21 \implies$ aumento acumulado de **+$21\%$** (não $20\%$).
  - *Ex. 2 descontos sucessivos de $10\%$:* $0{,}90 \times 0{,}90 = 0{,}81 \implies$ restou $81\%$, logo o desconto acumulado foi $100\% - 81\% =$ **-$19\%$** (não $20\%$).
* **Variação Percentual entre Dois Valores ($V_i \to V_f$):**
  $$\text{Variação (\%)} = \frac{\text{Valor Final} - \text{Valor Inicial}}{\text{Valor Inicial}} \times 100\%$$
  *Por que dividir pelo Valor Inicial?* Porque você mede quanto mudou **em relação ao ponto de partida**. *(De $80$ para $100$: subiu $20$ em cima de $80 \implies \frac{20}{80} = +25\%$. De $100$ para $80$: caiu $20$ em cima de $100 \implies \frac{-20}{100} = -20\%$!)*.

> **Síntese Feynman (Porcentagem em 3 Linhas):**
> 1. Porcentagem é uma fração por $100$; multiplicar pelo fator $(1+i)$ aplica aumento e $(1-i)$ aplica desconto em uma única operação.
> 2. Para descobrir o preço anterior a um ajuste, nunca some/subtraia a taxa do valor novo — divida pelo fator $(1 \pm i)$.
> 3. Em aumentos ou descontos sucessivos, cada nova taxa bate sobre o valor acumulado anterior: multiplique os fatores entre si e compare o resultado com $1{,}00$.

---

## Laboratório de Casos Guiados (Passo a Passo)

### Caso Guiado 1 (Radiciação + Racionalização): Simplificação Completa
**Problema:** Reduza à forma mais simples a expressão $E = \sqrt{50} + \sqrt{18} - \frac{12}{\sqrt{2}}$.

<details>
<summary><b>Ver Resolução Guiada Passo a Passo</b></summary>

1. **Passo 1 — Simplificar os radicais não exatos ($\sqrt{50}$ e $\sqrt{18}$):**
   - $\sqrt{50} = \sqrt{25 \times 2} = \mathbf{5\sqrt{2}}$
   - $\sqrt{18} = \sqrt{9 \times 2} = \mathbf{3\sqrt{2}}$
2. **Passo 2 — Racionalizar o termo $\frac{12}{\sqrt{2}}$ (tirar a raiz do denominador):**
   $$\frac{12}{\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}} = \frac{12\sqrt{2}}{2} = \mathbf{6\sqrt{2}}$$
3. **Passo 3 — Juntar os radicais semelhantes (todos têm $\sqrt{2}$):**
   $$E = 5\sqrt{2} + 3\sqrt{2} - 6\sqrt{2} = (5 + 3 - 6)\sqrt{2} = \mathbf{2\sqrt{2}}$$
</details>

---

### Caso Guiado 2 (Regra de Três Composta): Comparação com o $x$ vs. Processo × Produto
**Problema:** Na gráfica da Prefeitura de Birigui, $4$ impressoras idênticas imprimem $2.400$ carnês trabalhando $6$ horas. Quantas horas serão necessárias para $6$ dessas impressoras imprimirem $5.400$ carnês?

<details>
<summary><b>Ver Resolução pelos 2 Métodos</b></summary>

* **Método 1 — Setas comparadas com a coluna da incógnita ($x$ = Horas):**
  | Impressoras | Folhetos/Carnês | Horas ($x$) |
  | :---: | :---: | :---: |
  | $4$ | $2.400$ | $6$ |
  | $6$ | $5.400$ | $x$ |

  - Comparando **Impressoras vs. Horas**: *Mais* impressoras imprimem em *menos* horas $\implies$ **INVERSA** (inverte para $\frac{6}{4}$).
  - Comparando **Carnês vs. Horas**: *Mais* carnês exigem *mais* horas $\implies$ **DIRETA** (mantém $\frac{2400}{5400} = \frac{4}{9}$).
  - Montando a equação com o $x$ isolado antes do `=`:
    $$\frac{6}{x} = \frac{6}{4} \times \frac{4}{9} \implies \frac{6}{x} = \frac{6}{9} \implies x = \mathbf{9\text{ horas}}$$

* **Método 2 — Conferência por Processo × Produto ($\frac{\text{Causas}_1}{\text{Produto}_1} = \frac{\text{Causas}_2}{\text{Produto}_2}$):**
  - **Processo (Causas):** Impressoras $\times$ Horas. **Produto (Efeito):** Carnês produzidos.
  $$\frac{4 \times 6}{2.400} = \frac{6 \times x}{5.400} \implies \frac{24}{2.400} = \frac{6x}{5.400} \implies \frac{1}{100} = \frac{6x}{5.400} \implies 6x = 54 \implies x = \mathbf{9\text{ horas}}$$
</details>

---

### Caso Guiado 3 (Porcentagem — Reversão de Desconto e Variação Sucessiva)
**Problema:** Uma licitação estimou uma compra em valor $V$. Aplicou-se primeiro um aumento de $25\%$ por reajuste de tabela e, sobre o novo preço, obteve-se um desconto de $20\%$ na etapa de lances, fechando em $\text{R\$ } 1.500{,}00$. Qual foi a variação acumulada e qual era o valor inicial $V$?

<details>
<summary><b>Ver Resolução Guiada Passo a Passo</b></summary>

1. **Passo 1 — Multiplicar os fatores de variação:**
   - Aumento de $25\%$ $\to \times 1{,}25$
   - Desconto de $20\%$ $\to \times 0{,}80$
   - Fator total: $1{,}25 \times 0{,}80 = \mathbf{1{,}00}$!
2. **Passo 2 — Interpretar o resultado:**
   - Como o fator acumulado deu exatamente $1{,}00$, o aumento de $25\%$ e o desconto de $20\%$ **se anularam exata e perfeitamente** (variação líquida $= 0\%$).
   - Logo, o valor inicial $V$ era igual ao valor final: $V = \frac{1.500}{1{,}00} = \mathbf{\text{R\$ } 1.500{,}00}$.
</details>

---

## Bateria de 6 Questões Reais Comentadas

### Questão 01 (Adaptada de FUNDATEC — Pref. Arroio do Sal/RS — 2024 — Padrão Instituto ACCESS)
Durante a conferência de cálculos de um projeto de engenharia municipal, um servidor precisou simplificar a expressão numérica envolvendo radicais descrita a seguir:

$$\frac{\sqrt{1764}}{\sqrt{7}} + \sqrt{70} \cdot \sqrt{10} - \sqrt{1575}$$

Realizando corretamente as propriedades da radiciação e a racionalização de denominadores, assinale a alternativa que apresenta o resultado CORRETO da expressão:

- **A)** $\sqrt{7}$
- **B)** $2\sqrt{7}$
- **C)** $7$
- **D)** $5\sqrt{7}$

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra A ($\sqrt{7}$)**

* **Passo 1 — Resolver $\frac{\sqrt{1764}}{\sqrt{7}}$:**  
  Fatorando $1764$: $1764 = 2^2 \times 3^2 \times 7^2 \implies \sqrt{1764} = 2 \times 3 \times 7 = \mathbf{42}$.  
  Ficamos com $\frac{42}{\sqrt{7}}$. Racionalizando (multiplicando em cima e embaixo por $\sqrt{7}$):
  $$\frac{42\sqrt{7}}{\sqrt{7}\cdot\sqrt{7}} = \frac{42\sqrt{7}}{7} = \mathbf{6\sqrt{7}}$$
* **Passo 2 — Resolver $\sqrt{70} \cdot \sqrt{10}$:**  
  Pela propriedade do produto de mesmo índice:
  $$\sqrt{70 \times 10} = \sqrt{700} = \sqrt{100 \times 7} = \mathbf{10\sqrt{7}}$$
* **Passo 3 — Simplificar $\sqrt{1575}$:**  
  Fatorando $1575$: $1575 \div 7 = 225 = 15^2$. Logo:
  $$\sqrt{1575} = \sqrt{225 \times 7} = \mathbf{15\sqrt{7}}$$
* **Passo 4 — Somar e subtrair os radicais semelhantes:**  
  $$6\sqrt{7} + 10\sqrt{7} - 15\sqrt{7} = (6 + 10 - 15)\sqrt{7} = 1\sqrt{7} = \mathbf{\sqrt{7}}$$
* **Por que as outras estão erradas?** Erros típicos de soma dentro da raiz ($\sqrt{70} \neq 7\sqrt{10}$), erro na racionalização sem dividir o $42$ por $7$, ou esquecer de subtrair $15\sqrt{7}$.
</details>

---

### Questão 02 (Instituto ACCESS — UFJ — 2023 — Assistente em Administração)
Uma pequena empresa possui duas máquinas que produzem igualmente $120$ peças cada uma no período de $8$ horas. Se a taxa de produção permanecer constante nas duas máquinas, quantas peças elas irão produzir ao todo num período de $15$ horas?

- **A)** $225$.
- **B)** $240$.
- **C)** $360$.
- **D)** $450$.
- **E)** $480$.

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra D ($450$)**

* **Atenção à leitura do enunciado ("120 peças CADA UMA" vs. "ao todo"):**  
  Se são **duas máquinas** produzindo $120$ peças **cada uma**, em $8$ horas **as duas juntas** produzem:
  $$2 \times 120 = \mathbf{240\text{ peças em } 8\text{ horas}}$$
* **Montando a Regra de Três Simples Direta (mais horas $\to$ mais peças):**
  - $8\text{ horas} \longrightarrow 240\text{ peças}$
  - $15\text{ horas} \longrightarrow x\text{ peças}$
  $$8x = 240 \times 15 \implies x = \frac{240}{8} \times 15 = 30 \times 15 = \mathbf{450\text{ peças}}$$
* **Análise dos distratores:**
  - **(A) $225$:** É a produção de **apenas uma** máquina em $15$ horas ($\frac{120}{8} \times 15 = 225$), armadilha clássica para quem ignora a expressão *"cada uma"* e *"ao todo"*.
  - **(B) $240$:** Apenas a produção das duas máquinas em $8$ horas.
</details>

---

### Questão 03 (OBJETIVA — Pref. Ilópolis/RS — 2025 — Auxiliar de Administração)
Uma construtora iniciou a construção de um muro e, para isso, designou $12$ operários, que trabalham $6$ horas por dia. Com essa organização, o muro foi finalizado em $20$ dias. Agora, a empresa precisa construir um novo muro com as mesmas dimensões, mas precisou reduzir a equipe para $10$ funcionários. No intuito de compensar a redução de funcionários, eles aumentaram a jornada de trabalho para $8$ horas diárias. Com base nos dados apresentados, em quantos dias o novo muro será finalizado?

- **A)** $18$ dias.
- **B)** $20$ dias.
- **C)** $22$ dias.
- **D)** $24$ dias.

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra A ($18$ dias)**

* **Análise da Regra de Três Composta (colocando o $x$ = Dias isolado):**
  - $12$ operários $\cdot$ $6$ h/dia $\longrightarrow 20$ dias
  - $10$ operários $\cdot$ $8$ h/dia $\longrightarrow x$ dias
  - **Operários vs. Dias:** *Menos* operários $\to$ *mais* dias (**Inversa** $\implies \frac{10}{12}$).
  - **Horas/dia vs. Dias:** *Mais* horas por dia $\to$ *menos* dias (**Inversa** $\implies \frac{8}{6}$).
  $$\frac{20}{x} = \frac{10}{12} \times \frac{8}{6} = \frac{80}{72} = \frac{10}{9} \implies 10x = 20 \times 9 = 180 \implies x = \mathbf{18\text{ dias}}$$
* **Conferência rápida por Processo × Produto (como o muro tem as mesmas dimensões, o esforço total em horas-homem é constante):**
  $$12 \times 6 \times 20 = 1.440\text{ horas-homem}$$
  $$10 \times 8 \times x = 1.440 \implies 80x = 1.440 \implies x = \mathbf{18\text{ dias}}$$
</details>

---

### Questão 04 (Instituto ACCESS — Pref. Passos/MG — 2023 — Oficial de Administração)
Uma empresa vai aumentar o salário de todos os seus funcionários em $5\%$. Sabe-se que um dos seus funcionários ganha hoje $\text{R\$ } 3.000{,}00$. Para ele calcular o seu salário com o aumento, ele vai precisar

- **A)** multiplicar por $1{,}05$.
- **B)** multiplicar por $1{,}15$.
- **C)** multiplicar por $1{,}25$.
- **D)** multiplicar por $1{,}50$.

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra A (multiplicar por $1{,}05$)**

* **Aplicação direta do Fator de Multiplicação ($1 + i$):**  
  - O salário atual corresponde a $100\% = 1{,}00$.
  - Um aumento de $5\%$ equivale à fração $\frac{5}{100} = 0{,}05$.
  - Logo, o novo salário será $1{,}00 + 0{,}05 = \mathbf{1{,}05}$ vezes o salário atual ($3.000 \times 1{,}05 = \text{R\$ } 3.150{,}00$).
* **Análise dos distratores (armadilha decimal clássica):**
  - **(D) $1{,}50$:** Confusão muito comum entre $5\%$ ($0{,}05$) e $50\%$ ($0{,}50$).
  - **(B) e (C):** Correspondem a aumentos de $15\%$ e $25\%$.
</details>

---

### Questão 05 (Instituto ACCESS — Pref. Domingos Martins/ES — 2024 — Auxiliar Administrativo)
Em 2024 o salário mínimo passou para o valor de $\text{R\$ } 1.412{,}00$. Um trabalhador que recebe exatamente $1{,}5$ salário mínimo de salário bruto e tem como desconto apenas os $9\%$ de previdência tem o salário líquido, em reais, igual a

- **A)** $\text{R\$ } 1.885{,}02$.
- **B)** $\text{R\$ } 1.906{,}20$.
- **C)** $\text{R\$ } 1.927{,}38$.
- **D)** $\text{R\$ } 2.012{,}10$.

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra C ($\text{R\$ } 1.927{,}38$)**

* **Passo 1 — Achar o salário bruto ($1{,}5$ salário mínimo = $1$ salário + metade):**
  $$1.412{,}00 + 706{,}00 = \mathbf{\text{R\$ } 2.118{,}00}$$
* **Passo 2 — Aplicar o desconto de $9\%$ (usando o fator $1 - 0{,}09 = 0{,}91$ ou calculando $9\%$):**
  - Cálculo de $9\%$ de $2.118$: $0{,}09 \times 2.118 = 190{,}62$ *(ou $10\% - 1\% = 211{,}80 - 21{,}18 = 190{,}62$)*.
  - Salário líquido: $2.118{,}00 - 190{,}62 = \mathbf{\text{R\$ } 1.927{,}38}$.
  - *(Ou direto via fator: $2.118 \times 0{,}91 = 1.927{,}38$)*.
* **Por que as outras estão erradas?**
  - **(B) $1.906{,}20$:** Seria descontar $10\%$ ($211{,}80$) em vez de $9\%$.
  - **(A) $1.885{,}02$:** Descontar $11\%$ ($232{,}98$).
  - **(D) $2.012{,}10$:** Descontar apenas $5\%$ ($105{,}90$).
</details>

---

### Questão 06 (Instituto ACCESS — Pref. Promissão/SP — 2026 — Escriturário)
Um engenheiro civil projeta um reservatório de água em formato de paralelepípedo retângulo com $8$ metros de comprimento, $6$ metros de largura e $3$ metros de profundidade. Por questões estruturais, decide-se aumentar o comprimento em $20\%$, dobrar a largura e reduzir a profundidade em um terço da medida original. Com base nas novas dimensões, calcule a capacidade final de armazenamento desse reservatório após as alterações.

- **A)** O volume do novo reservatório é de $115{,}2\text{ m}^3$.
- **B)** O volume do novo reservatório é de $192{,}0\text{ m}^3$.
- **C)** O volume do novo reservatório é de $460{,}8\text{ m}^3$.
- **D)** O volume do novo reservatório é de $230{,}4\text{ m}^3$.

<details>
<summary>Ver Gabarito e Resolução Passo a Passo</summary>

**Gabarito Oficial: Letra D ($230{,}4\text{ m}^3$)**

* **Passo 1 — Aplicar cada alteração às dimensões originais ($C = 8$, $L = 6$, $P = 3$):**
  - **Comprimento (+20%, fator $1{,}20$):** $8 \times 1{,}20 = \mathbf{9{,}6\text{ m}}$ *(ou $8 + 1{,}6 = 9{,}6$)*.
  - **Largura (dobrar):** $6 \times 2 = \mathbf{12\text{ m}}$.
  - **Profundidade (reduzir em $\frac{1}{3}$):** Tirar $\frac{1}{3}$ de $3\text{ m}$ é tirar $1\text{ m}$, restando $3 - 1 = \mathbf{2\text{ m}}$ *(fator $\frac{2}{3} \times 3 = 2$)*.
* **Passo 2 — Calcular o volume final ($V = C \times L \times P$):**
  $$V_{\text{novo}} = 9{,}6 \times 12 \times 2 = 9{,}6 \times 24 = \mathbf{230{,}4\text{ m}^3}$$
* **Atalho usando Fatores Sucessivos:**  
  Volume inicial $= 8 \times 6 \times 3 = 144\text{ m}^3$. Fatores aplicados às 3 dimensões: $1{,}20 \times 2 \times \frac{2}{3} = 2{,}4 \times \frac{2}{3} = \mathbf{1{,}60}$.  
  Logo, $V_{\text{novo}} = 144 \times 1{,}60 = \mathbf{230{,}4\text{ m}^3}$ (aumento líquido de $60\%$).
</details>

---

## Checklist de Fixação Ativa para o Aluno
- [ ] Consigo explicar por que $\sqrt{-9}$ não existe nos Reais, mas $\sqrt[3]{-8} = -2$ existe?
- [ ] Sei transformar qualquer potência fracionária $a^{m/n}$ em raiz usando a Regra do Sol e da Sombra?
- [ ] Sei simplificar $\sqrt{50} = 5\sqrt{2}$ e racionalizar tanto $\frac{a}{\sqrt{b}}$ quanto $\frac{a}{\sqrt{b} - \sqrt{c}}$ pelo conjugado?
- [ ] Antes de montar qualquer Regra de Três, verifico sempre a direção da seta (GDP vs. GIP) e sei comparar cada grandeza com a do $x$ na Composta?
- [ ] Domino o Fator de Multiplicação ($1+i$ e $1-i$) tanto para calcular variações sucessivas ($1{,}20 \times 0{,}80 = 0{,}96$) quanto para voltar ao valor original dividindo?
