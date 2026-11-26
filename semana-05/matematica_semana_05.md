# Semana 05: Matemática e Raciocínio Lógico-Matemático (RLM) — Equações e Inequações de 2º Grau + Funções de 1º e 2º Grau

> **Cargo-Alvo:** Oficial Administrativo — Concurso Municipal (Prefeitura de Birigui/SP)  
> **Banca Referência:** Instituto ACCESS  
> **Pré-Requisitos na Trilha:** Requer **Semana 01** (Potenciação, Raízes e Conjuntos Numéricos), **Semana 03** (Porcentagem e Variações) e **Semana 04** (Equações e Inequações de 1º Grau + Inversão de Sinal por $-1$). Prepara diretamente para **Sequências/PA/PG (Semana 06)** e **Geometria Analítica (Semana 11)**.  
> **Material de Treino:** 4 Eixos progressivos desmontando cada conta passo a passo + 4 diagramas visuais SVG + 12 Checkpoints diretos + Bateria Final de 10 Questões (4 autênticas do Instituto ACCESS + 6 adaptadas/inéditas no padrão da banca).

---

## Sumário da Aula
1. [Prólogo: Do Equilíbrio em Linha Reta da Semana 04 para Curvas e Máquinas de Transformação](#prólogo-do-equilíbrio-em-linha-reta-da-semana-04-para-curvas-e-máquinas-de-transformação)
2. [EIXO 1: Equações de 2º Grau — Anatomia, Casos Incompletos, Bhaskara e Soma e Produto](#eixo-1-equações-de-2º-grau--anatomia-casos-incompletos-bhaskara-e-soma-e-produto)
   - Por que existe uma equação com $x^2$ e o que significa cada peça ($a$, $b$, $c$ e raiz)
   - Casos Incompletos (1º: falta o $c$; 2º: falta o $b$) — resolvidos sem Bhaskara
   - De onde vem a Fórmula de Bhaskara (completar quadrados) e os 3 cenários de $\Delta$
   - O atalho da Soma e Produto (Relações de Girard) + Mapa Visual SVG
   - Síntese Feynman de 3 Linhas + 🛑 Bloco de Fixação Direta 1 + 3 Checkpoints
3. [EIXO 2: Inequações de 2º Grau — Por que Não Basta Isolar o $x$ e o Estudo Visual do Sinal](#eixo-2-inequações-de-2º-grau--por-que-não-basta-isolar-o-x-e-o-estudo-visual-do-sinal)
   - Por que tratar $x^2 - 9 < 0$ como conta de 1º grau leva ao erro fatal
   - O Método dos 3 Passos pelo Estudo do Sinal ($a > 0$ vs. $a < 0$, um por vez)
   - Bolinha aberta vs. bolinha fechada + casos em que $\Delta = 0$ ou $\Delta < 0$ (SVG)
   - Síntese Feynman de 3 Linhas + 🛑 Bloco de Fixação Direta 2 + 3 Checkpoints
4. [EIXO 3: O Conceito de Função e a Função de 1º Grau — Fórmula, Tabela, Raiz e Gráfico](#eixo-3-o-conceito-de-função-e-a-função-de-1º-grau--fórmula-tabela-raiz-e-gráfico)
   - A Máquina de Transformação: variável independente, dependente, Domínio, Contradomínio, Imagem e Plano Cartesiano
   - Função de 1º Grau ($f(x) = ax + b$): o papel do valor fixo $b$ e da taxa de variação $a$ ($a > 0$, $a < 0$ e $a = 0$, um por vez)
   - Raiz da reta e como montar a fórmula a partir de 2 pontos da tabela ou gráfico (SVG)
   - Síntese Feynman de 3 Linhas + 🛑 Bloco de Fixação Direta 3 + 3 Checkpoints
5. [EIXO 4: Função de 2º Grau (Quadrática) — Parábola, Vértice, Máximo/Mínimo e Leitura de Gráficos](#eixo-4-função-de-2º-grau-quadrática--parábola-vértice-máximomínimo-e-leitura-de-gráficos)
   - De onde nasce a curva em U (parábola) e o papel visual de $a$, $c$ e $\Delta$
   - O Vértice $V(x_V, y_V)$ e o Eixo de Simetria: de onde vem $-\frac{b}{2a}$ e como nunca trocar $x_V$ por $y_V$
   - Leitura reversa de gráficos e o Mapa Completo da Parábola (SVG)
   - Síntese Feynman de 3 Linhas + 🛑 Bloco de Fixação Direta 4 + 3 Checkpoints
6. [Bateria de 10 Questões Reais e Adaptadas no Padrão Instituto ACCESS](#bateria-de-10-questões-reais-e-adaptadas-no-padrão-instituto-access)
7. [Checklist de Fixação Ativa para o Caderno](#checklist-de-fixação-ativa-para-o-caderno)

---

## Prólogo: Do Equilíbrio em Linha Reta da Semana 04 para Curvas e Máquinas de Transformação

Na **Semana 04**, você viu que uma equação de 1º grau — como $3x + 15 = 75$ — funciona como uma balança de dois pratos: a letra $x$ aparece apenas elevada ao expoente $1$, você passa os termos aplicando operações inversas e encontra **uma única resposta exata** ($x = 20$).

Agora pense em duas situações muito comuns em provas de Raciocínio Lógico e Matemática de nível médio — e especialmente nos concursos do **Instituto ACCESS**:

1. **Quando uma grandeza se multiplica por ela mesma ($x \cdot x = x^2$):** se você precisa ampliar a área de uma sala retangular ou calcular o lucro que primeiro sobe com as vendas e depois cai porque o desconto ficou alto demais, aparece o termo **$x^2$** (*x ao quadrado*). A conta deixa de dar uma linha reta e passa a ter **duas respostas possíveis** (dois cruzamentos), um ponto de subida e um ponto de descida.
2. **Quando uma grandeza muda em resposta a outra:** em vez de achar apenas um valor congelado de $x$, o enunciado quer entender a **regra de relação** entre duas coisas que caminham juntas — por exemplo, quanto a Prefeitura gasta de energia conforme o número de equipamentos ligados, ou qual preço de ingresso gera o maior lucro possível. Essa regra de conexão é o que chamamos de **Função**.

Nesta aula, vamos desmontar tudo **do zero**, explicando o nome de cada peça antes de usá-la, mostrando de onde vêm todas as fórmulas (para você nunca depender de decoreba cega) e abrindo cada conta passo a passo sem pular nenhuma passagem algébrica.

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>ROTEIRO DA SEMANA 05: OS 4 EIXOS EM ORDEM LÓGICA</span>
    </div>
    <span class="edu-comp-badge">Do $x^2$ aos Gráficos</span>
  </div>
  <div class="edu-cards-grid grid-4">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">📐</span>
        <span class="card-badge">Eixo 1</span>
      </div>
      <h4 class="card-title">Equações de 2º Grau</h4>
      <p class="card-text">Anatomia ($a, b, c$), os 2 casos incompletos rápidos, de onde vem Bhaskara ($\Delta$), o atalho Soma & Produto e quando uma equação tem $2$, $1$ ou $0$ respostas.</p>
    </div>
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">🌊</span>
        <span class="card-badge">Eixo 2</span>
      </div>
      <h4 class="card-title">Inequações de 2º Grau</h4>
      <p class="card-text">Por que não se isola $x^2$ direto como no 1º grau e como usar o estudo visual do sinal da curva para achar trechos inteiros de resposta.</p>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">📈</span>
        <span class="card-badge">Eixo 3</span>
      </div>
      <h4 class="card-title">Função & 1º Grau</h4>
      <p class="card-text">Domínio, Imagem, Plano Cartesiano e como conectar fórmula $f(x) = ax + b$, tabela de valores, raiz e inclinação da reta.</p>
    </div>
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">⛰️</span>
        <span class="card-badge">Eixo 4</span>
      </div>
      <h4 class="card-title">Função de 2º Grau</h4>
      <p class="card-text">A parábola, concavidade ($a$), corte no eixo $y$ ($c$), Eixo de Simetria, Vértice ($x_V, y_V$) para máximo/mínimo e leitura completa de gráficos.</p>
    </div>
  </div>
</div>

---

## EIXO 1: Equações de 2º Grau — Anatomia, Casos Incompletos, Bhaskara e Soma e Produto

### 1. Por que existe uma equação com $x^2$ e o que significa cada peça?

Imagine que o setor de patrimônio da Prefeitura tenha um pátio quadrado antigo, de lado desconhecido $x$, e queira construir ao lado uma sala retangular cuja largura seja $x$ metros e o comprimento tenha $3$ metros a mais que a largura, isto é, $(x + 3)$ metros. A planta exige que a área total dessa sala seja de $40\text{ m}^2$.

Na Geometria básica, **área de retângulo** é $\text{largura} \times \text{comprimento}$. Traduzindo para a matemática:

$$x \cdot (x + 3) = 40$$

Aplicando a propriedade distributiva (o "chuveirinho" que vimos na Semana 04, onde o $x$ de fora multiplica cada termo lá de dentro):

$$x \cdot x + x \cdot 3 = 40 \implies x^2 + 3x = 40$$

Passando o $40$ para o lado esquerdo com operação inversa (para deixar tudo igualado a zero, o que facilita muito a solução):

$$x^2 + 3x - 40 = 0$$

Olhe para o que apareceu pela primeira vez: o termo **$x^2$** (*$x$ elevado ao expoente $2$*). Agora podemos dar os nomes técnicos exatos, sem mistério:

* **Por que o nome "Equação de 2º Grau"?**  
  O **grau** de uma equação é simplesmente o **maior expoente** da letra desconhecida (a incógnita $x$). Na Semana 04, o maior expoente era $1$ ($x^1 = x$), por isso era "1º grau". Aqui, como aparece $x^2$ (e não há $x^3$ nem $x^4$), ela é de **2º grau** (também chamada de **equação quadrática**, porque vem de *quadrado*, $x^2$).
* **O que é a Forma Padrão (ou Forma Geral)?**  
  Toda equação de 2º grau arrumada (com todos os termos de um lado e $0$ do outro) tem esta cara universal:
  $$ax^2 + bx + c = 0 \qquad (\text{com } a \neq 0)$$
  * **Por que a condição obrigatória $a \neq 0$?** Porque se o coeficiente $a$ fosse zero, o termo $0 \cdot x^2$ desapareceria ($0$), sobraria apenas $bx + c = 0$, e a equação voltaria a ser uma equação de **1º grau**!
* **O que é uma "Raiz" (ou "Solução") da equação?**  
  Em matemática, **raiz** não tem nada a ver com árvore nem necessariamente com $\sqrt{\;}$: **raiz da equação** é simplesmente **qualquer número que, colocado no lugar de $x$, faz a conta dar exatamente zero** (torna a igualdade verdadeira). No nosso exemplo $x^2 + 3x - 40 = 0$:
  * Teste $x = 5$: $5^2 + 3(5) - 40 = 25 + 15 - 40 = 0$ $\rightarrow$ Verdadeiro! Logo, $5$ é uma raiz.
  * Teste $x = -8$: $(-8)^2 + 3(-8) - 40 = 64 - 24 - 40 = 0$ $\rightarrow$ Verdadeiro! Logo, $-8$ também é raiz algébrica da equação (embora, como a largura de uma sala real não pode ser negativa, descartaríamos $-8$ no problema físico e ficaríamos com $5\text{ m}$).

Antes de fazer qualquer conta, você precisa enxergar perfeitamente os três números multiplicadores da forma padrão — os famosos **$a$**, **$b$** e **$c$**. Veja cada um deles:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>ANATOMIA DOS COEFICIENTES NA FORMA PADRÃO: $ax^2 + bx + c = 0$</span>
    </div>
    <span class="edu-comp-badge">Obrigatório antes da conta</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">🅰️</span>
        <span class="card-badge">Dono do $x^2$</span>
      </div>
      <h4 class="card-title">Coeficiente $a$ (Quadrático)</h4>
      <p class="card-text">É sempre o número (com seu sinal!) que está multiplicando o <strong>$x^2$</strong> — pouco importa em que ordem a equação esteja escrita. Jamais pode ser zero.</p>
      <div class="card-examples">
        <span class="ex-tag">Em $-x^2 + 5x = 0$, $a = -1$</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🅱️</span>
        <span class="card-badge">Dono do $x$</span>
      </div>
      <h4 class="card-title">Coeficiente $b$ (Linear)</h4>
      <p class="card-text">É sempre o número (com seu sinal!) que está multiplicando o <strong>$x$ simples</strong> (sem quadrado). Se não houver nenhum termo com $x$ simples, então $b = 0$.</p>
      <div class="card-examples">
        <span class="ex-tag">Em $2x^2 - 18 = 0$, $b = 0$</span>
      </div>
    </div>
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">🅾️</span>
        <span class="card-badge">Número Solto</span>
      </div>
      <h4 class="card-title">Termo Independente $c$</h4>
      <p class="card-text">É o número puro que aparece sozinho, <strong>sem nenhuma letra</strong> multiplicando. Se não houver número solto após igualar a zero, então $c = 0$.</p>
      <div class="card-examples">
        <span class="ex-tag">Em $3x^2 + 9x = 0$, $c = 0$</span>
      </div>
    </div>
  </div>
</div>

Um erro bobo que derruba muita gente acontece quando a banca escreve a equação **fora de ordem** ou ainda não igualou a zero. A regra prática é: **quem define $a, b, c$ é a letra que o número acompanha, e nunca a posição da esquerda para a direita!** Veja abaixo como arrumar a equação primeiro e ler os sinais com segurança:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>LENDO $a$, $b$ E $c$ SEM CAIR NA PEGADINHA DA ORDEM</span>
    </div>
    <span class="edu-comp-badge">Identificação Visual</span>
  </div>
  <div class="edu-ex-legend">
    <span><mark class="hl-indigo">$a$ (junto de $x^2$)</mark></span>
    <span><mark class="hl-emerald">$b$ (junto de $x$)</mark></span>
    <span><mark class="hl-amber">$c$ (termo solto)</mark></span>
  </div>
  <div class="edu-ex-list">
    <div class="edu-ex-item">
      <div class="edu-ex-sentence"><mark class="hl-indigo">$2$</mark>$x^2$ <mark class="hl-emerald">$- 7$</mark>$x$ <mark class="hl-amber">$+ 3$</mark> $= 0$</div>
      <div class="edu-ex-note">Já está arrumada e igualada a zero: <mark class="hl-indigo">$a = 2$</mark>, <mark class="hl-emerald">$b = -7$</mark> e <mark class="hl-amber">$c = 3$</mark>. Note que o sinal de menos faz parte do $b$.</div>
    </div>
    <div class="edu-ex-item">
      <div class="edu-ex-sentence">$\text{Original: } 5 - x^2 = 3x \;\longrightarrow\;$ <mark class="hl-indigo">$-1$</mark>$x^2$ <mark class="hl-emerald">$- 3$</mark>$x$ <mark class="hl-amber">$+ 5$</mark> $= 0$</div>
      <div class="edu-ex-note">Trazemos $3x$ como $-3x$ para igualar a zero e colocamos em ordem: <mark class="hl-indigo">$a = -1$</mark>, <mark class="hl-emerald">$b = -3$</mark> e <mark class="hl-amber">$c = 5$</mark>.</div>
    </div>
    <div class="edu-ex-item">
      <div class="edu-ex-sentence"><mark class="hl-amber">$12$</mark> <mark class="hl-indigo">$- 4$</mark>$x^2 = 0$</div>
      <div class="edu-ex-note">Cuidado com a ordem invertida! Quem multiplica $x^2$ é $-4$, não há $x$ simples, e o número solto é $+12$: <mark class="hl-indigo">$a = -4$</mark>, <mark class="hl-emerald">$b = 0$</mark> e <mark class="hl-amber">$c = 12$</mark>.</div>
    </div>
  </div>
</div>

> [!NOTE]
> 🎯 **Pausa Rápida para Fixar 1.1 (Lendo $a$, $b$ e $c$ no Caderno):**  
> Antes de resolver contas, identifique os coeficientes $a$, $b$ e $c$ de cada equação abaixo (arrumando na forma padrão quando precisar):
> 1. $5x^2 - 2x + 8 = 0$
> 2. $-x^2 + 4x = 0$
> 3. $9 - 3x^2 = 6x$
>
> <details><summary><b>Ver Resposta Rápida</b></summary>
>
> 1. Já está em ordem: **$a = 5$**, **$b = -2$** e **$c = 8$**.
> 2. Falta o número solto ($c$): **$a = -1$**, **$b = 4$** e **$c = 0$**.
> 3. Passando $6x$ para a esquerda e ordenando ($-3x^2 - 6x + 9 = 0$): **$a = -3$**, **$b = -6$** e **$c = 9$** *(ou, se passar tudo para a direita deixando $a$ positivo: $3x^2 + 6x - 9 = 0 \implies a = 3,\; b = 6,\; c = -9$; ambas representam a mesma equação!)*.
> </details>

---

### 2. Equações Incompletas (Um Caso por Vez — Sem Precisar de Bhaskara!)

Quando tanto $b$ quanto $c$ são diferentes de zero, a equação é chamada de **completa**. Quando falta $b$ ($b = 0$), falta $c$ ($c = 0$), ou faltam os dois ($b = c = 0$, caso trivial em que $ax^2 = 0 \implies x = 0$), chamamos a equação de **incompleta**.

Você *poderia* usar a fórmula de Bhaskara nas incompletas, mas perderia tempo precioso na prova e correria risco extra de errar sinal. Existem dois caminhos diretos e lógicos — vamos ver **um caso de cada vez**, entendendo o porquê da regra antes dos exemplos.

#### Caso 1: Quando falta o termo independente ($c = 0$, formato $ax^2 + bx = 0$)

**Antes de mexer com letras: o que significa "colocar em evidência"?**  
Olhe primeiro para uma conta só com números: $\mathbf{5} \cdot 10 - \mathbf{5} \cdot 3$.  
Repare que o número **$5$** aparece multiplicando **nas duas parcelas** (ele é o **fator comum**, isto é, um multiplicador repetido). Em vez de multiplicar por $5$ duas vezes separadas, podemos puxar esse $5$ **uma única vez** para fora dos parênteses e deixar lá dentro apenas o que sobra de cada parcela depois que dividimos por $5$:

$$\mathbf{5} \cdot 10 - \mathbf{5} \cdot 3 \;=\; \mathbf{5} \cdot \left(\frac{5 \cdot 10}{5} - \frac{5 \cdot 3}{5}\right) \;=\; \mathbf{5} \cdot (10 - 3)$$

Confira aplicando o "chuveirinho" (distributiva) de volta: $5 \cdot 10 - 5 \cdot 3$ ✓! **"Colocar em evidência" é exatamente fazer o chuveirinho ao contrário**: puxar quem se repete para fora e dividir cada pedaço por esse fator comum.

**Agora veja por que isso resolve qualquer equação com $c = 0$ ($ax^2 + bx = 0$):**  
Quando colocamos o $x$ em evidência, transformamos uma soma/subtração em uma **multiplicação igual a zero**:

$$\underbrace{x}_{A} \cdot \underbrace{(ax + b)}_{B} = 0$$

Aqui entra a **Propriedade do Produto Nulo** (pura lógica aritmética): se você multiplica dois blocos $A$ e $B$ e o resultado dá **$0$**, **pelo menos um dos dois blocos é obrigatoriamente zero**! É impossível multiplicar dois números diferentes de zero e obter zero. Logo, abrimos dois caminhos independentes:
1. Ou o fator de fora é zero: **$x = 0$** (em toda equação de 2º grau com $c = 0$, uma das raízes é **sempre $0$**!).
2. Ou o parêntese inteiro é zero: **$ax + b = 0$**, que é uma equação simples de 1º grau da Semana 04!

Vamos desmontar agora **um exemplo de cada vez**, em câmera lenta, sem pular nenhuma linha:

#### Exemplo 1A (Fator comum simples): Resolva $x^2 - 7x = 0$

1. **Abrir o que está escondido nas multiplicações:**  
   Lembre-se de que $x^2$ significa $x \cdot x$, e $7x$ significa $7 \cdot x$. Reescrevemos a equação mostrando tudo explicitamente:
   $$\mathbf{x} \cdot x - 7 \cdot \mathbf{x} = 0$$
2. **Enxergar o fator comum:**  
   Compare as duas parcelas: na 1ª parcela ($x \cdot x$) há um <mark class="hl-indigo">$x$</mark> multiplicando; na 2ª parcela ($7 \cdot x$) também há um <mark class="hl-indigo">$x$</mark> multiplicando. Esse $x$ repetido vai sair dos parênteses!
3. **Colocar $x$ em evidência (dividindo cada parcela pelo $x$ que saiu):**
   * O que sobra da 1ª parcela ao tirar um $x$? $\dfrac{x \cdot x}{x} = \mathbf{x}$ *(tinha dois $x$ multiplicados; puxamos um para fora, ficou um $x$ lá dentro)*.
   * O que sobra da 2ª parcela ao tirar o $x$? $\dfrac{-7 \cdot x}{x} = \mathbf{-7}$ *(puxamos o $x$ para fora, ficou o $-7$ lá dentro)*.
   * Juntando o fator comum fora e as sobras dentro dos parênteses:
     $$\underbrace{x}_{\text{Bloco } A} \cdot \underbrace{(x - 7)}_{\text{Bloco } B} = 0$$
4. **Conferência rápida pelo chuveirinho:**  
   Multiplique de volta para ter certeza de que não errou nada: $x \cdot x = x^2$ e $x \cdot (-7) = -7x \implies x^2 - 7x = 0$ ✓.
5. **Aplicar a Propriedade do Produto Nulo ($A \cdot B = 0 \implies A = 0 \text{ ou } B = 0$):**
   * **Ramo 1 ($A = 0$):** igualamos o fator de fora a zero $\implies$ **$\mathbf{x_1 = 0}$**.
   * **Ramo 2 ($B = 0$):** igualamos o parêntese inteiro a zero e resolvemos como 1º grau (passando o $-7$ somando pela Lei da Balança):
     $$x - 7 = 0 \implies x = 0 + 7 \implies \mathbf{x_2 = 7}$$
6. **Prova Real na equação original ($x^2 - 7x = 0$):**
   * Testando $x_1 = 0$: $0^2 - 7 \cdot 0 = 0 - 0 = 0$ ✓.
   * Testando $x_2 = 7$: $7^2 - 7 \cdot 7 = 49 - 49 = 0$ ✓.
   * Logo, o conjunto solução é **$S = \{0,\; 7\}$**.

#### Exemplo 1B (Com coeficiente na frente do $x^2$): Resolva $3x^2 + 12x = 0$

1. **Abrir tudo o que está multiplicando:**  
   $$3 \cdot \mathbf{x} \cdot x + 12 \cdot \mathbf{x} = 0$$
2. **Puxar o $x$ comum para fora e descobrir o que fica dentro dos parênteses:**
   * Na 1ª parcela, dividindo por $x$: $\dfrac{3 \cdot x \cdot x}{x} = \mathbf{3x}$.
   * Na 2ª parcela, dividindo por $x$: $\dfrac{+12 \cdot x}{x} = \mathbf{+12}$.
   * Fica assim:
     $$\underbrace{x}_{\text{Bloco } A} \cdot \underbrace{(3x + 12)}_{\text{Bloco } B} = 0$$
   *(Conferência pelo chuveirinho: $x \cdot 3x = 3x^2$ e $x \cdot 12 = +12x \implies 3x^2 + 12x$ ✓).*
3. **Aplicar a Propriedade do Produto Nulo ($A \cdot B = 0$):**
   * **Ramo 1 ($A = 0$):** $\mathbf{x_1 = 0}$.
   * **Ramo 2 ($B = 0$):** resolvemos a equação de 1º grau passo a passo:
     $$3x + 12 = 0 \implies 3x = 0 - 12 \implies 3x = -12 \implies x = \frac{-12}{3} \implies \mathbf{x_2 = -4}$$
4. **E se você também puxar o $3$ em evidência junto com o $x$?**  
   Repare que $12$ também é múltiplo de $3$ ($12 = 3 \cdot 4$). Se você puxar **$3x$** inteiro para fora, a 1ª parcela vira $\frac{3x^2}{3x} = x$ e a 2ª vira $\frac{12x}{3x} = +4$:
   $$3x \cdot (x + 4) = 0$$
   * Ramo 1: $3x = 0 \implies x = \frac{0}{3} \implies \mathbf{x_1 = 0}$.
   * Ramo 2: $x + 4 = 0 \implies \mathbf{x_2 = -4}$.  
   O resultado é **exatamente o mesmo**! Você pode escolher se quer puxar só o $x$ ou puxar número + $x$ juntos.
5. **Prova Real na equação original ($3x^2 + 12x = 0$):**
   * Testando $x_1 = 0$: $3(0)^2 + 12(0) = 0 + 0 = 0$ ✓.
   * Testando $x_2 = -4$: $3(-4)^2 + 12(-4) = 3 \cdot 16 - 48 = 48 - 48 = 0$ ✓.
   * Logo, **$S = \{-4,\; 0\}$**.

> [!WARNING]
> **Erro clássico de prova que zera a questão ($c = 0$):**  
> Nunca pegue $x^2 - 7x = 0$, passe o $7x$ para o outro lado ($x^2 = 7x$) e "corte o $x$ dos dois lados" dizendo que $x = 7$! Ao dividir por $x$, você pressupôs que $x \neq 0$ e **assassinou a raiz $x = 0$**, que muitas vezes é justamente a resposta ou uma das afirmações julgadas na questão! Sempre coloque em evidência.

#### Caso 2: Quando falta o termo do meio ($b = 0$, formato $ax^2 + c = 0$)

**Qual é a lógica por trás do método?**  
Aqui o $x$ só aparece em um único lugar ($x^2$). Por isso — **e somente quando $b = 0$!** — podemos usar a Lei da Balança da Semana 04 para deixar o $x^2$ completamente isolado de um lado e o número puro do outro.

Quando chegamos em algo como $x^2 = k$, perguntamos: *"Qual número multiplicado por ele mesmo dá $k$?"*  
E aqui mora o detalhe fundamental: tanto um número **positivo** quanto seu **oposto negativo** produzem o mesmo quadrado positivo! Por exemplo, $(+5) \cdot (+5) = 25$ e $(-5) \cdot (-5) = 25$. É exatamente por isso que, ao "desfazer" a potência ao quadrado aplicando a raiz quadrada dos dois lados, somos obrigados a escrever **$\pm$** (*mais ou menos*):

$$x^2 = 25 \implies x = \pm\sqrt{25} \implies x = \pm 5 \quad (\text{isto é, } x_1 = +5 \text{ e } x_2 = -5)$$

E se o número do lado direito der **negativo**, como $x^2 = -9$? Dentro do conjunto dos **Números Reais ($\mathbb{R}$)** — que é o universo das provas de nível médio —, **nenhum número real ao quadrado dá negativo** (positivo $\times$ positivo = positivo; negativo $\times$ negativo = positivo; zero $\times$ zero = zero). Logo, quando $x^2$ fica igual a um número negativo, **não existe solução real** ($S = \varnothing$).

Veja agora o passo a passo completo, **um exemplo de cada vez**:

#### Exemplo 2A (Duas raízes simétricas): Resolva $2x^2 - 50 = 0$

1. **Passar o número puro para o outro lado (Lei da Balança):** somamos $50$ aos dois lados (o $-50$ passa somando):
   $$2x^2 = 0 + 50 \implies 2x^2 = 50$$
2. **Deixar o $x^2$ completamente sozinho:** como o $2$ está multiplicando $x^2$, dividimos os dois lados por $2$:
   $$x^2 = \frac{50}{2} \implies x^2 = 25$$
3. **Desfazer o quadrado tirando a raiz com $\pm$:**
   $$x = \pm\sqrt{25} \implies x = \pm 5 \implies \mathbf{x_1 = -5} \quad \text{e} \quad \mathbf{x_2 = +5}$$
4. **Prova Real ($2x^2 - 50 = 0$):**
   * Para $x = -5$: $2(-5)^2 - 50 = 2(25) - 50 = 50 - 50 = 0$ ✓.
   * Para $x = +5$: $2(+5)^2 - 50 = 2(25) - 50 = 50 - 50 = 0$ ✓.
   * Conjunto solução: **$S = \{-5,\; 5\}$**.

#### Exemplo 2B (Armadilha sem solução real): Resolva nos reais $x^2 + 9 = 0$

1. **Isolar o $x^2$ (Lei da Balança):** subtraímos $9$ dos dois lados (o $+9$ passa negativo):
   $$x^2 = 0 - 9 \implies x^2 = -9$$
2. **Testar os sinais em $\mathbb{R}$:** existe algum número real que multiplicado por ele mesmo dê $-9$?
   * Tente $+3$: $(+3) \cdot (+3) = +9$ (deu positivo, não $-9$!).
   * Tente $-3$: $(-3) \cdot (-3) = +9$ (também deu positivo, não $-9$!).
3. **Conclusão:** como nenhum número real elevado ao quadrado resulta em negativo, a equação **não possui raízes reais**: **$S = \varnothing$**.

> [!NOTE]
> 🎯 **Pausa Rápida para Fixar 1.2 (Equações Incompletas na Unha):**  
> Resolva no caderno em 2 minutos sem usar Bhaskara:
> 1. $x^2 - 9x = 0$
> 2. $4x^2 + 20x = 0$
> 3. $3x^2 - 48 = 0$
> 4. $2x^2 + 18 = 0$
>
> <details><summary><b>Ver Resolução Passo a Passo</b></summary>
>
> 1. **Falta o $c$ ($x$ em evidência):** $x(x - 9) = 0 \implies x_1 = 0$ ou $x - 9 = 0 \implies x_2 = 9$. Logo, **$S = \{0, 9\}$**.
> 2. **Falta o $c$ ($x$ em evidência):** $x(4x + 20) = 0 \implies x_1 = 0$ ou $4x + 20 = 0 \implies 4x = -20 \implies x_2 = -5$. Logo, **$S = \{-5, 0\}$**.
> 3. **Falta o $b$ (isolar $x^2$):** $3x^2 = 48 \implies x^2 = \frac{48}{3} = 16 \implies x = \pm\sqrt{16} \implies x = \pm 4$. Logo, **$S = \{-4, 4\}$**.
> 4. **Falta o $b$ (isolar $x^2$):** $2x^2 = -18 \implies x^2 = -9$. Nenhum número real ao quadrado dá negativo! Logo, **$S = \varnothing$** em $\mathbb{R}$.
> </details>

---

### 3. Equações Completas: De Onde Vem a Fórmula de Bhaskara e Os 3 Cenários de $\Delta$

Quando nenhum coeficiente é zero ($ax^2 + bx + c = 0$), temos tanto $x^2$ quanto $x$ juntos no mesmo prato da balança. Não dá para colocar tudo em evidência igual a zero (porque o $c$ atrapalha), e não dá para isolar só o $x^2$ (porque o $bx$ ainda tem $x$). Como os matemáticos resolveram esse nó há mais de mil anos? Com uma ideia visual brilhante chamada **Completar Quadrados**.

#### O que a Fórmula de Bhaskara realmente faz nos bastidores?

Imagine a equação $x^2 + 6x - 7 = 0$. Primeiro passamos o $-7$ para o outro lado para ficar apenas com as letras à esquerda: $x^2 + 6x = 7$.

Nosso objetivo é "empacotar" $x^2 + 6x$ dentro de **um único parêntese ao quadrado** do tipo $(x + \square)^2$, porque aí o $x$ aparece **uma vez só** e conseguimos tirar a raiz quadrada como no Caso 2! Mas qual número devemos pôr no quadradinho $\square$? Vamos abrir $(x + \square)^2$ usando o chuveirinho para enxergar:

$$(x + \square)^2 = (x + \square) \cdot (x + \square) = x^2 + \square x + \square x + \square^2 = x^2 + \mathbf{2\square}\,x + \mathbf{\square^2}$$

Olhe para o termo do meio: queremos que **$2\square$** seja igual ao **$6$** de $6x$!  
Então basta pegar **a metade de $6$**: $2\square = 6 \implies \square = \dfrac{6}{2} = \mathbf{3}$.  
Só que, ao abrir $(x + 3)^2 = x^2 + 6x + 3^2$, aparece sobrando um termo **$\square^2 = 3^2 = 9$**! Para manter a balança em equilíbrio (Semana 04), somamos **$9$** nos **dois pratos** ao mesmo tempo:

1. **Equação com letras de um lado e número do outro:** $x^2 + 6x = 7$.
2. **Somar $9$ (metade de $6$ ao quadrado) nos dois lados:**
   $$x^2 + 6x \mathbf{+ 9} = 7 \mathbf{+ 9}$$
3. **Empacotar o lado esquerdo no quadrado perfeito e somar o direito:**
   $$(x + 3)^2 = 16$$
4. **Agora o $x$ só aparece em um lugar! Tiramos a raiz quadrada com $\pm$:**
   $$x + 3 = \pm\sqrt{16} \implies x + 3 = \pm 4$$
5. **Isolar o $x$ passando o $+3$ subtraindo e abrir os dois sinais:**
   $$x = -3 \pm 4 \implies \begin{cases} x_1 = -3 + 4 = \mathbf{1} \\ x_2 = -3 - 4 = \mathbf{-7} \end{cases}$$
   *(Conferência: $1^2 + 6(1) - 7 = 0$ ✓ e $(-7)^2 + 6(-7) - 7 = 49 - 42 - 7 = 0$ ✓!)*

**Olhe para a última linha!** Quando fazemos *exatamente esse mesmo processo* usando as letras genéricas $a$, $b$ e $c$ em vez de números particulares, chegamos de uma vez só à receita pronta conhecida no Brasil como **Fórmula de Bhaskara**, dividida em duas etapas para facilitar a conta:

$$\text{Etapa 1 (Discriminante } \Delta\text{):} \qquad \Delta = b^2 - 4 \cdot a \cdot c$$

$$\text{Etapa 2 (Raízes):} \qquad x = \frac{-b \pm \sqrt{\Delta}}{2 \cdot a}$$

* **Por que $\Delta$ (letra grega *Delta* maiúscula) se chama "Discriminante"?**  
  Porque "discriminar" significa *separar, distinguir*. Como o $\Delta$ fica **dentro da raiz quadrada $\sqrt{\Delta}$**, é o sinal dele ($+$, $0$ ou $-$) que decide quantas soluções reais a equação vai ter, antes mesmo de você terminar a conta!
* **Atenção vital aos sinais na hora de montar:**
  * Em $b^2$: se $b$ for negativo (ex.: $b = -5$), coloque parênteses! $(-5)^2 = +25$, e **nunca** $-25$.
  * Em $-4 \cdot a \cdot c$: faça o jogo de sinais dos três números juntos! Se $a$ ou $c$ for negativo, o produto $-4ac$ vira **soma** (menos com menos dá mais).
  * Em $-b$ (lá na fração): significa **"o oposto de $b$"**! Se $b = -5$, então $-b = -(-5) = +5$.

Vamos abrir **um cenário de $\Delta$ por vez**, resolvendo a conta inteira na sua frente:

#### Cenário 1: $\Delta > 0$ (Delta positivo) $\rightarrow$ Duas raízes reais e distintas ($x_1 \neq x_2$)
Quando $\Delta$ dá um número maior que zero, $\sqrt{\Delta}$ existe e é diferente de zero. Ao fazer $-b + \sqrt{\Delta}$ e $-b - \sqrt{\Delta}$, geramos **dois resultados diferentes**.

* **Exemplo passo a passo:** Resolva $x^2 - 5x + 6 = 0$.
  1. **Identifique os coeficientes:** $a = 1$, $b = -5$, $c = 6$.
  2. **Calcule $\Delta$:**
     $$\Delta = b^2 - 4ac = (-5)^2 - 4 \cdot (1) \cdot (6) = 25 - 24 = \mathbf{1}$$
     Como $\Delta = 1 > 0$, já sabemos que haverá **2 raízes reais diferentes**.
  3. **Aplique a segunda etapa de Bhaskara (atenção ao $-b$):**
     $$x = \frac{-(-5) \pm \sqrt{1}}{2 \cdot 1} = \frac{5 \pm 1}{2}$$
  4. **Abra os dois caminhos ($\mathbf{+}$ e $\mathbf{-}$):**
     * $x_1 = \dfrac{5 + 1}{2} = \dfrac{6}{2} = \mathbf{3}$
     * $x_2 = \dfrac{5 - 1}{2} = \dfrac{4}{2} = \mathbf{2}$
  5. **Conferência na equação original:** $3^2 - 5(3) + 6 = 9 - 15 + 6 = 0$ ✓ e $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$ ✓.

#### Cenário 2: $\Delta = 0$ (Delta nulo) $\rightarrow$ Duas raízes reais e iguais (raiz dupla)
Quando $\Delta = 0$, temos $\sqrt{0} = 0$. Tanto faz somar zero quanto subtrair zero ($-b + 0$ ou $-b - 0$): os dois caminhos dão **exatamente o mesmo número**, $x = \dfrac{-b}{2a}$! Os concursos gostam de dizer que a equação tem **"uma única raiz real"** ou **"duas raízes reais e iguais"**.

* **Exemplo passo a passo:** Resolva $x^2 - 6x + 9 = 0$.
  1. **Identifique os coeficientes:** $a = 1$, $b = -6$, $c = 9$.
  2. **Calcule $\Delta$:**
     $$\Delta = (-6)^2 - 4 \cdot (1) \cdot (9) = 36 - 36 = \mathbf{0}$$
  3. **Aplique a segunda etapa:**
     $$x = \frac{-(-6) \pm \sqrt{0}}{2 \cdot 1} = \frac{6 \pm 0}{2} = \frac{6}{2} = \mathbf{3}$$
     Logo, $x_1 = x_2 = 3$ (raiz dupla). Note que $x^2 - 6x + 9$ era exatamente $(x - 3)^2 = 0$!

#### Cenário 3: $\Delta < 0$ (Delta negativo) $\rightarrow$ Nenhuma raiz real ($\nexists x \in \mathbb{R}$)
Quando $\Delta$ dá menor que zero, a fórmula exigiria calcular a raiz quadrada de um número negativo (como $\sqrt{-16}$), o que **não existe nos Números Reais**. Portanto, a equação **não possui raízes reais** ($S = \varnothing$ em $\mathbb{R}$).

* **Exemplo passo a passo:** Verifique as raízes reais de $x^2 + 2x + 5 = 0$.
  1. **Identifique os coeficientes:** $a = 1$, $b = 2$, $c = 5$.
  2. **Calcule $\Delta$:**
     $$\Delta = 2^2 - 4 \cdot (1) \cdot (5) = 4 - 20 = \mathbf{-16}$$
  3. **Conclusão imediata:** como $\Delta = -16 < 0$, paramos aqui! Não existe $\sqrt{-16}$ em $\mathbb{R}$, logo a equação **não admite raízes reais** ($S = \varnothing$).

---

### 4. O Atalho Inteligente: Soma e Produto (Relações de Girard)

E se você pudesse descobrir as raízes de muitas equações em **5 segundos de cabeça**, ou resolver questões que pedem apenas *"a soma das raízes"* ou *"o produto das raízes"* **sem sequer calcular $\Delta$ ou tirar raiz quadrada**?

**De onde vêm as fórmulas de Soma e Produto?**  
Se uma equação tem raízes $x_1$ e $x_2$, podemos escrevê-la na forma fatorada $a(x - x_1)(x - x_2) = 0$. Fazendo o chuveirinho entre os parênteses e dividindo tudo por $a$:

$$x^2 - \underbrace{(x_1 + x_2)}_{S} x + \underbrace{(x_1 \cdot x_2)}_{P} = 0$$

Comparando essa expressão termo a termo com a equação dividida por $a$ ($x^2 + \frac{b}{a}x + \frac{c}{a} = 0$), obtemos automaticamente as duas **Relações de Girard**:

$$\text{Soma das raízes } (S) = x_1 + x_2 = -\frac{b}{a} \qquad\qquad \text{Produto das raízes } (P) = x_1 \cdot x_2 = \frac{c}{a}$$

> [!IMPORTANT]
> **Onde a Soma e Produto brilha (e onde ela NÃO compensa)?**  
> * **Use SEMPRE** quando a questão pedir direto *"a soma das raízes"*, *"o produto das raízes"* ou *"a diferença entre a soma e o produto"* — **mesmo quando as raízes não são inteiras ou nem existem nos reais** (no caso de pedir só os valores de $S$ e $P$, $-\frac{b}{a}$ e $\frac{c}{a}$ funcionam para achar a resposta na hora, sem Bhaskara — mas se pedir raízes reais, confira se $\Delta \ge 0$!).  
> * **Para descobrir as duas raízes de cabeça**, funciona melhor quando $a = 1$ (ou quando dá para dividir a equação inteira por $a$) e as raízes são números inteiros. Se $a \neq 1$ e os números derem frações feias, vá direto para Bhaskara sem hesitar!

**Como achar as duas raízes por Soma e Produto em 2 passos mentais?**  
**Sempre comece pelo Produto $P$, nunca pela Soma $S$!** Por quê? Porque infinitos pares de números somam $7$ (ex.: $1+6$, $2+5$, $-3+10$, etc.), mas apenas **pouquíssimos pares inteiros multiplicam $10$** ($1 \times 10$ e $2 \times 5$). Veja na prática:

Veja agora **3 exemplos passo a passo**, do mais direto até o caso com coeficiente na frente do $x^2$, aplicando exatamente essa técnica:

#### Exemplo SP1 (Produto positivo e Soma positiva): Resolva $x^2 - 7x + 10 = 0$

**Passo 1 — Calcular Soma ($S$) e Produto ($P$):**  
Aqui temos **$a = 1$**, **$b = -7$** e **$c = 10$**:
* **Soma:** $S = -\dfrac{b}{a} = -\dfrac{-7}{1} = +7$ *(menos com menos dá mais)*
* **Produto:** $P = \dfrac{c}{a} = \dfrac{10}{1} = +10$

**Passo 2 — Decidir os sinais das duas raízes antes de fazer conta:**  
* O Produto é positivo ($+10$): isso só acontece quando os dois números têm o **mesmo sinal** ($+ \cdot + = +$ ou $- \cdot - = +$).
* Como a Soma também é positiva ($+7$), os dois números são **positivos**.

**Passo 3 — Testar primeiro os pares que multiplicam $10$:**  
* $1 \cdot 10 = 10$, mas $1 + 10 = 11$ *(não dá $7$)*.
* **$2 \cdot 5 = 10$**, e **$2 + 5 = 7$** ✓ *(bateu nos dois!)*.
* Logo, as raízes são **$x_1 = 2$** e **$x_2 = 5$** $\implies$ **$S = \{2,\; 5\}$**.

#### Exemplo SP2 (Produto negativo — sinais opostos!): Resolva $x^2 + 2x - 15 = 0$

**Passo 1 — Calcular Soma ($S$) e Produto ($P$):**  
Aqui temos **$a = 1$**, **$b = +2$** e **$c = -15$**:
* **Soma:** $S = -\dfrac{b}{a} = -\dfrac{2}{1} = -2$
* **Produto:** $P = \dfrac{c}{a} = \dfrac{-15}{1} = -15$

**Passo 2 — Decidir os sinais das duas raízes:**  
* O Produto é negativo ($-15$): isso avisa na hora que **um número é positivo e o outro é negativo** *(pois $(+) \cdot (-) = (-)$)*.
* A Soma é negativa ($-2$): como somamos um positivo com um negativo e ainda sobrou dívida ($-2$), o número de **maior tamanho** (mais distante do zero) tem de ser o **negativo**.

**Passo 3 — Testar pares que multiplicam $15$ (colocando o sinal $-$ no maior):**  
* $+1$ e $-15$: multiplicação $-15$, mas soma $1 + (-15) = -14$ *(não dá $-2$)*.
* **$+3$ e $-5$**: multiplicação $3 \cdot (-5) = -15$ e soma $3 + (-5) = -2$ ✓ *(bateu nos dois!)*.
* Logo, as raízes são **$x_1 = -5$** e **$x_2 = 3$** $\implies$ **$S = \{-5,\; 3\}$**.

#### Exemplo SP3 (Truque quando $a \neq 1$): Resolva $2x^2 - 12x + 16 = 0$

**Passo 1 — Simplificar a equação pela Lei da Balança:**  
Repare que $2$, $-12$ e $16$ são todos pares (divisíveis por $2$). Quando dividimos **todos os termos** dos dois lados pelo mesmo número diferente de zero, as raízes não mudam:
$$\frac{2x^2}{2} - \frac{12x}{2} + \frac{16}{2} = \frac{0}{2} \;\implies\; x^2 - 6x + 8 = 0$$

**Passo 2 — Aplicar Soma e Produto na equação simplificada ($a = 1$, $b = -6$, $c = 8$):**  
* **Soma:** $S = -\dfrac{-6}{1} = +6$
* **Produto:** $P = \dfrac{8}{1} = +8$

**Passo 3 — Testar os pares positivos que multiplicam $8$:**  
* $1 \cdot 8 = 8$, soma $1 + 8 = 9$ *(não serve)*.
* **$2 \cdot 4 = 8$**, soma $2 + 4 = 6$ ✓ *(bateu!)*.
* Logo, as raízes são **$x_1 = 2$** e **$x_2 = 4$** $\implies$ **$S = \{2,\; 4\}$**.

---

### 5. Mapa de Decisão da Equação de 2º Grau (Diagrama Visual)

<svg viewBox="0 0 760 320" class="w-full h-auto" role="img" aria-label="Fluxograma de decisão para resolver equações de segundo grau incompletas e completas, mais os três cenários do discriminante Delta">
  <rect x="8" y="8" width="744" height="304" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <rect x="24" y="22" width="712" height="44" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="380" y="42" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold" font-family="sans-serif">PASSO 0: ARRUMAR NA FORMA PADRÃO</text>
  <text x="380" y="58" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif">ax² + bx + c = 0   (identificar sinais de a, b e c com a ≠ 0)</text>

  <line x1="150" y1="66" x2="150" y2="96" stroke="#818cf8" stroke-width="2"/>
  <polygon points="145,96 155,96 150,104" fill="#818cf8"/>
  <line x1="380" y1="66" x2="380" y2="96" stroke="#818cf8" stroke-width="2"/>
  <polygon points="375,96 385,96 380,104" fill="#818cf8"/>
  <line x1="610" y1="66" x2="610" y2="96" stroke="#818cf8" stroke-width="2"/>
  <polygon points="605,96 615,96 610,104" fill="#818cf8"/>

  <rect x="24" y="106" width="222" height="92" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="135" y="126" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="sans-serif">INCOMPLETA: falta o c (c = 0)</text>
  <text x="135" y="144" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold" font-family="sans-serif">ax² + bx = 0</text>
  <text x="135" y="164" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">Coloque x em evidência:</text>
  <text x="135" y="180" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="bold" font-family="sans-serif">x(ax + b) = 0 → x₁ = 0 e x₂ = −b/a</text>

  <rect x="268" y="106" width="224" height="92" rx="10" fill="#172554" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="380" y="126" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="sans-serif">INCOMPLETA: falta o b (b = 0)</text>
  <text x="380" y="144" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold" font-family="sans-serif">ax² + c = 0</text>
  <text x="380" y="164" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">Isole x² e tire a raiz com ±:</text>
  <text x="380" y="180" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="bold" font-family="sans-serif">x² = −c/a → x = ±√(−c/a)</text>

  <rect x="514" y="106" width="222" height="92" rx="10" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="625" y="126" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">COMPLETA (a, b e c ≠ 0)</text>
  <text x="625" y="144" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="bold" font-family="sans-serif">Δ = b² − 4ac  e  x = (−b ± √Δ) / 2a</text>
  <text x="625" y="164" text-anchor="middle" fill="#fde68a" font-size="10.5" font-family="sans-serif">Ou por Soma e Produto (Girard):</text>
  <text x="625" y="180" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif">S = −b/a   |   P = c/a</text>

  <rect x="24" y="216" width="222" height="78" rx="10" fill="#0f2922" stroke="#34d399" stroke-width="1.3"/>
  <text x="135" y="238" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="sans-serif">Δ &gt; 0 (Positivo)</text>
  <text x="135" y="256" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">2 raízes reais distintas</text>
  <text x="135" y="274" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="sans-serif">(x₁ ≠ x₂ — corta eixo x 2 vezes)</text>

  <rect x="268" y="216" width="224" height="78" rx="10" fill="#2e1065" stroke="#a855f7" stroke-width="1.3"/>
  <text x="380" y="238" text-anchor="middle" fill="#d8b4fe" font-size="12" font-weight="bold" font-family="sans-serif">Δ = 0 (Nulo)</text>
  <text x="380" y="256" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">2 raízes reais iguais (x₁ = x₂)</text>
  <text x="380" y="274" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="sans-serif">(raiz dupla — tangencia eixo x)</text>

  <rect x="514" y="216" width="222" height="78" rx="10" fill="#4c0519" stroke="#f43f5e" stroke-width="1.3"/>
  <text x="625" y="238" text-anchor="middle" fill="#fda4af" font-size="12" font-weight="bold" font-family="sans-serif">Δ &lt; 0 (Negativo)</text>
  <text x="625" y="256" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Nenhuma raiz real em R</text>
  <text x="625" y="274" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="sans-serif">(S = ∅ — não toca o eixo x)</text>
</svg>

> [!TIP]
> **Síntese Feynman de 3 Linhas (Eixo 1 — Equações de 2º Grau):**
> 1. Antes de fazer conta, arrume a equação em $ax^2 + bx + c = 0$: o **$a$** acompanha $x^2$, o **$b$** acompanha $x$ e o **$c$** fica sem letra; se faltar o $c$, coloque $x$ em evidência ($x = 0$ sempre é raiz); se faltar o $b$, isole $x^2$ e tire $\pm\sqrt{\;}$.
> 2. Na equação completa, o discriminante **$\Delta = b^2 - 4ac$** nasce do método de completar quadrados e decide o jogo: se $\Delta > 0$ há $2$ raízes reais; se $\Delta = 0$ há $1$ raiz real dupla; se $\Delta < 0$ não há raízes reais.
> 3. Quando $a = 1$ (ou ao dividir tudo por $a$) ou quando a questão pedir direto a soma ou o produto das raízes, use **Soma e Produto** ($S = -\frac{b}{a}$ e $P = \frac{c}{a}$), começando sempre pelos divisores de $P$.

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 1 (Equações de 2º Grau na Unha)
Antes de responder às questões de múltipla escolha, faça no papel estes 4 exercícios diretos para travar a mecânica de Bhaskara, $\Delta$ e Soma e Produto:

1. **Bhaskara com $a \neq 1$:** Resolva $2x^2 - 7x + 3 = 0$.
2. **Caso $\Delta = 0$ (Raiz Dupla):** Resolva $x^2 - 10x + 25 = 0$.
3. **Soma e Produto com Sinal Negativo:** Ache as raízes mentais de $x^2 - 3x - 28 = 0$.
4. **Tradução do Português para o $x^2$:** *"O quadrado de um número positivo menos o quádruplo desse mesmo número é igual a $21$. Que número é esse?"*

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 1</b></summary>

* **1. Resolução de $2x^2 - 7x + 3 = 0$:**
  - Coeficientes: $a = 2$, $b = -7$, $c = 3$.
  - $\Delta = (-7)^2 - 4 \cdot 2 \cdot 3 = 49 - 24 = \mathbf{25}$.
  - $x = \dfrac{-(-7) \pm \sqrt{25}}{2 \cdot 2} = \dfrac{7 \pm 5}{4}$:
    - $x_1 = \dfrac{7 + 5}{4} = \dfrac{12}{4} = \mathbf{3}$
    - $x_2 = \dfrac{7 - 5}{4} = \dfrac{2}{4} = \mathbf{\dfrac{1}{2}}$
  - Conjunto solução: **$S = \left\{\frac{1}{2},\; 3\right\}$**.

* **2. Resolução de $x^2 - 10x + 25 = 0$:**
  - $\Delta = (-10)^2 - 4 \cdot 1 \cdot 25 = 100 - 100 = \mathbf{0}$.
  - $x = \dfrac{10 \pm 0}{2} = \mathbf{5}$ (duas raízes reais iguais: **$S = \{5\}$**).

* **3. Resolução de $x^2 - 3x - 28 = 0$ por Soma e Produto:**
  - $S = -\frac{-3}{1} = +3$ e $P = \frac{-28}{1} = -28$.
  - Produto negativo significa **um sinal $+$ e outro $-$**; soma positiva significa que o maior em módulo é positivo. Divisores de $28$: $7$ e $-4 \implies 7 \cdot (-4) = -28$ e $7 + (-4) = +3$ ✓!
  - Raízes: **$x_1 = -4$ e $x_2 = 7$**.

* **4. Tradução do problema:**
  - *"O quadrado de um número"* $\to x^2$; *"menos o quádruplo desse número"* $\to -4x$; *"é igual a $21$"* $\to = 21$.
  - Equação: $x^2 - 4x = 21 \implies x^2 - 4x - 21 = 0$.
  - Soma $= 4$ e Produto $= -21 \implies$ raízes $7$ e $-3$. Como o enunciado especificou um número **positivo**, a resposta é **$7$**! *(Conferência: $7^2 - 4 \cdot 7 = 49 - 28 = 21$ ✓).*
</details>

---

### Questão 01
**Banca:** Checkpoint do Eixo 1 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Na secretaria de obras de um município, o encarregado Rafael precisa recortar duas placas metálicas quadradas idênticas, ambas de lado $x$ metros. Após o corte, a soma das áreas das duas placas deve ser exatamente igual a $72\text{ m}^2$, o que conduz à equação incompleta $2x^2 - 72 = 0$. Considerando que $x$ representa uma medida geométrica positiva, é CORRETO afirmar que o valor algébrico das duas raízes dessa equação e a medida do lado de cada placa são, respectivamente:
(A) Raízes iguais a $0$ e $36$; lado da placa medindo $36$ metros.
(B) Raízes iguais a $-6$ e $+6$; lado da placa medindo $6$ metros.
(C) Raízes iguais a $-36$ e $+36$; lado da placa medindo $6$ metros.
(D) Raízes iguais a $-12$ e $+12$; lado da placa medindo $12$ metros.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Passo a passo da resolução:**
  * A equação $2x^2 - 72 = 0$ é incompleta porque falta o termo $b$ ($b = 0$).
  * Isolando $x^2$: $2x^2 = 72 \implies x^2 = \frac{72}{2} \implies x^2 = 36$.
  * Aplicando a raiz quadrada com o sinal $\pm$: $x = \pm\sqrt{36} \implies x_1 = -6$ e $x_2 = +6$.
  * Como o lado de uma placa não pode ser negativo, a medida geométrica válida é **$6\text{ metros}$**.
* **(B) CORRETA:** apresenta exatamente o par de raízes simétricas ($-6$ e $+6$) e o valor positivo $6\text{ metros}$.
* **(A) ERRADA:** confundiu o método de $c = 0$ ($x = 0$) com $b = 0$ e esqueceu de tirar a raiz quadrada de $36$.
* **(C) ERRADA:** esqueceu de tirar a raiz quadrada ao afirmar que as raízes são $\pm 36$.
* **(D) ERRADA:** calculou $72 \div 6$ ou falhou ao dividir $72$ por $2$ antes da raiz quadrada.
</details>

### Questão 02
**Banca:** Checkpoint do Eixo 1 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Durante o planejamento de um estacionamento retangular para viaturas da prefeitura, a servidora Helena verificou que a relação entre o recuo $x$ (em metros) e a folga exigida pelo projeto obedece à equação completa $x^2 - 9x + 14 = 0$. Após calcular o discriminante ($\Delta$) e resolver integralmente essa equação no conjunto dos números reais, assinale a alternativa CORRETA sobre o resultado encontrado por Helena:
(A) O discriminante vale $\Delta = 137$, resultando em duas raízes reais negativas.
(B) O discriminante vale $\Delta = 0$, resultando em uma única raiz real igual a $7$.
(C) O discriminante vale $\Delta = -25$, não existindo nenhuma solução real possível.
(D) O discriminante vale $\Delta = 25$, resultando nas duas raízes reais $2$ e $7$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**
* **Passo a passo por Bhaskara:**
  * Coeficientes: $a = 1$, $b = -9$, $c = 14$.
  * $\Delta = (-9)^2 - 4 \cdot 1 \cdot 14 = 81 - 56 = \mathbf{25}$.
  * $x = \dfrac{-(-9) \pm \sqrt{25}}{2 \cdot 1} = \dfrac{9 \pm 5}{2} \implies x_1 = \dfrac{14}{2} = \mathbf{7}$ e $x_2 = \dfrac{4}{2} = \mathbf{2}$.
* **(D) CORRETA:** $\Delta = 25$ e raízes reais $2$ e $7$.
* **(A) ERRADA:** somou $81 + 56 = 137$ em vez de subtrair $4ac$.
* **(B) ERRADA:** errou o cálculo de $\Delta$ ao dizer que vale $0$.
* **(C) ERRADA:** inverteu a ordem da subtração ($56 - 81 = -25$).
</details>

### Questão 03
**Banca:** Checkpoint do Eixo 1 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

O servidor Mateus está conferindo uma planilha de cálculo em que aparece a equação $3x^2 - 15x + 18 = 0$. Em vez de aplicar a fórmula de Bhaskara, ele decidiu utilizar as relações de Soma e Produto entre as duas raízes reais $x_1$ e $x_2$ dessa equação. Com base nas relações corretas entre coeficientes e raízes, os valores da soma $(x_1 + x_2)$ e do produto $(x_1 \cdot x_2)$ são, respectivamente:
(A) Soma igual a $5$ e produto igual a $6$.
(B) Soma igual a $-5$ e produto igual a $6$.
(C) Soma igual a $15$ e produto igual a $18$.
(D) Soma igual a $6$ e produto igual a $5$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Passo a passo pelas Relações de Girard:**
  * Coeficientes de $3x^2 - 15x + 18 = 0$: $a = 3$, $b = -15$, $c = 18$.
  * Soma: $S = -\dfrac{b}{a} = -\dfrac{-15}{3} = \mathbf{+5}$.
  * Produto: $P = \dfrac{c}{a} = \dfrac{18}{3} = \mathbf{6}$.
  * *(Conferência: os números que somam $5$ e multiplicam $6$ são $2$ e $3$, e de fato $\Delta = (-15)^2 - 4(3)(18) = 225 - 216 = 9 > 0$).*
* **(A) CORRETA:** soma $5$ e produto $6$.
* **(B) ERRADA:** errou o sinal menos da fórmula $S = -\frac{b}{a}$.
* **(C) ERRADA:** esqueceu de dividir $b$ e $c$ pelo coeficiente $a = 3$.
* **(D) ERRADA:** inverteu os resultados de soma e produto.
</details>

---

## EIXO 2: Inequações de 2º Grau — Por que Não Basta Isolar o $x$ e o Estudo Visual do Sinal

### 1. O Perigo Fatal de Tratar uma Inequação de 2º Grau como se Fosse de 1º Grau

Na Semana 04, você aprendeu a resolver inequações de 1º grau como $2x - 6 < 0$: isolava o $x$, chegava em $x < 3$, e pronto! Todo número menor que $3$ servia.

Agora veja o que acontece se alguém tentar fazer a mesma coisa com uma inequação de 2º grau:

$$\text{Tente resolver: } x^2 - 9 < 0$$

Quem tenta "passar o $-9$ para o outro lado e tirar raiz" acaba escrevendo algo sem pé nem cabeça como $x < \pm 3$. O que significaria "menor que $+3$ e menor que $-3$"? **Nada!** Para enxergar o que a conta está fazendo de verdade, vamos **testar números reais** na expressão $x^2 - 9$ e ver quais deixam o resultado menor que zero (negativo):

* Se $x = 0$: $0^2 - 9 = -9 < 0$ $\rightarrow$ **SERVE!**
* Se $x = 2$: $2^2 - 9 = 4 - 9 = -5 < 0$ $\rightarrow$ **SERVE!**
* Se $x = -2$: $(-2)^2 - 9 = 4 - 9 = -5 < 0$ $\rightarrow$ **SERVE!**
* Se $x = 3$: $3^2 - 9 = 0$ (não é menor que zero!) $\rightarrow$ **É A FRONTEIRA!**
* Se $x = -3$: $(-3)^2 - 9 = 0$ $\rightarrow$ **É A OUTRA FRONTEIRA!**
* Se $x = 4$: $4^2 - 9 = 16 - 9 = +7$ (positivo, não é $< 0$) $\rightarrow$ **NÃO SERVE!**
* Se $x = -4$: $(-4)^2 - 9 = 16 - 9 = +7$ (positivo, não é $< 0$) $\rightarrow$ **NÃO SERVE!**

Perceba a grande diferença entre o 1º e o 2º grau: os números que funcionam para $x^2 - 9 < 0$ formam um **trecho fechado entre duas paredes**, isto é, **entre $-3$ e $3$** ($-3 < x < 3$). Enquanto no 1º grau a solução vai para um único lado infinito da reta, no 2º grau a curva **mergulha e sobe de volta**, criando regiões internas ou externas às raízes!

Por isso, **NUNCA** tente "isolar $x$ direto" em uma inequação de 2º grau. O método profissional, visual e à prova de falhas chama-se **Estudo do Sinal**.

---

### 2. O Método dos 3 Passos pelo Estudo do Sinal ($a > 0$ vs. $a < 0$, Um por Vez)

Imagine que o eixo horizontal $x$ é a **superfície de um lago (nível $0$)** e a curva do 2º grau é a trajetória de um mergulhador ou de uma ponte:
* Quando a curva está **acima da água**, o resultado da expressão é **positivo ($+$)**.
* Quando a curva **encosta exatamente na superfície da água**, o resultado vale **zero ($0$)** — são as **raízes ($x_1$ e $x_2$)**!
* Quando a curva está **abaixo da água**, o resultado da expressão é **negativo ($-$)**.

O procedimento tem sempre 3 passos fixos:
1. **Arrume** a inequação deixando $0$ do lado direito (`ax² + bx + c > 0`, `< 0`, `≥ 0` ou `≤ 0`) e **ache as raízes** trocando temporariamente o sinal de desigualdade por $=$.
2. **Desenhe o esboço no eixo $x$** usando o sinal de $a$ (que você verá logo abaixo em dois subtipos separados).
3. **Pinte exatamente a região que o sinal original pediu** (`>` ou `≥` quer região $+$; `<` ou `≤` quer região $-$), cuidando da fronteira (bolinha aberta ou fechada).

Vamos estudar **um subtipo por vez**, com exemplos desmontados linha por linha:

#### Subtipo A: Quando $a > 0$ (Curva em formato de "U" / Sorrindo)

Quando o coeficiente $a$ (dono do $x^2$) é **positivo**, a curva começa lá no alto (**$+$**), desce e mergulha **abaixo da água** entre as duas raízes (**$-$**), e depois volta a subir lá para o alto (**$+$**).

Guarde o mapa de sinais para $a > 0$ quando existem duas raízes ($x_1 < x_2$) *(regra "MaCaMa": **M**esmo sinal de $a$ nas pontas, **C**ontrário no meio, **M**esmo nas pontas)*:
* **À esquerda da 1ª raiz ($x < x_1$):** sinal **positivo ($+$)** *(curva acima da água)*.
* **Entre as duas raízes ($x_1 < x < x_2$):** sinal **negativo ($-$)** *(curva mergulhada abaixo da água)*.
* **À direita da 2ª raiz ($x > x_2$):** sinal **positivo ($+$)** *(curva acima da água novamente)*.

Veja agora **dois exemplos completos**, um abaixo do outro, usando a mesma expressão $x^2 - 5x + 6$ — mudando apenas o sinal pedido pela inequação para você enxergar na prática como tudo funciona:

#### Exemplo A1 (Pedido: $< 0$): Resolva $x^2 - 5x + 6 < 0$

**Passo 1 — Descobrir onde a conta zera (achar as raízes):**  
Trocamos temporariamente o símbolo $<$ por $=$ para descobrir onde a curva cruza a superfície da água (nível zero):
$$x^2 - 5x + 6 = 0$$
Identificamos os coeficientes: **$a = 1$**, **$b = -5$** e **$c = 6$**. Usando **Soma e Produto** *(se preferir fazer por Bhaskara, o resultado é idêntico!)*:
* **Soma:** $S = -\dfrac{b}{a} = -\dfrac{-5}{1} = +5$ *(menos com menos dá mais)*
* **Produto:** $P = \dfrac{c}{a} = \dfrac{6}{1} = +6$
* Testamos os pares inteiros que multiplicam $6$: $1 \cdot 6 = 6$ (soma $7$, não serve) e **$2 \cdot 3 = 6$** (soma $2 + 3 = 5$ ✓!).
* Logo, as duas raízes que dividem a reta numérica são **$x_1 = 2$** e **$x_2 = 3$**.

**Passo 2 — Montar o mapa de sinais nas 3 fatias da reta (provando com números reais!):**  
As duas raízes ($2$ e $3$) cortam a reta em **3 regiões**. Como **$a = +1 > 0$**, a parábola tem formato de **"U"** (positiva nas duas pontas externas e negativa no miolo). Confira testando **1 número qualquer de cada fatia** dentro de $x^2 - 5x + 6$:

| Região da reta | Número de teste | Conta (substituindo $x$) | Resultado | Sinal da região |
| :--- | :---: | :--- | :---: | :---: |
| **1. Antes de $2$** ($x < 2$) | $x = 0$ | $0^2 - 5(0) + 6 = 0 - 0 + 6$ | **$+6$** | <mark class="hl-emerald">**Positivo ($+$)**</mark> |
| **2. Entre $2$ e $3$** ($2 < x < 3$) | $x = 2{,}5$ | $(2{,}5)^2 - 5(2{,}5) + 6 = 6{,}25 - 12{,}5 + 6$ | **$-0{,}25$** | <mark class="hl-rose">**Negativo ($-$)**</mark> |
| **3. Depois de $3$** ($x > 3$) | $x = 4$ | $4^2 - 5(4) + 6 = 16 - 20 + 6$ | **$+2$** | <mark class="hl-emerald">**Positivo ($+$)**</mark> |

*(E exatamente em $x = 2$ e em $x = 3$, o resultado da conta dá exatamente **$0$**!)*

**Passo 3 — Ler o que a inequação pediu e checar as fronteiras ($2$ e $3$):**
* O pedido original é $x^2 - 5x + 6 < 0$. O símbolo **$< 0$** quer apenas os valores de $x$ que fazem a conta dar **estritamente menor que zero**, ou seja, a <mark class="hl-rose">**região negativa ($-$)**</mark>.
* Olhando a tabela acima, a única região negativa é o **miolo entre $2$ e $3$**.
* **O $2$ e o $3$ entram na resposta?** Faça o teste: para $x = 2$, a conta dá $0$, mas a frase *"$0 < 0$"* (zero é menor que zero) é **FALSA**! O mesmo vale para $x = 3$.  
  Como o símbolo $<$ **não tem o tracinho de igual embaixo**, deixamos $2$ e $3$ de fora — no desenho da reta, isso se chama **bolinha aberta ($\circ$)** (vazia por dentro, indicando *"chega até a porta, mas não inclui a fronteira"*).

**Passo 4 — Escrever a resposta final:**
* Em português claro: **qualquer número real entre $2$ e $3$** (como $2{,}1$, $2{,}5$ ou $2{,}99$), sem incluir o $2$ nem o $3$.
* Na forma matemática curta:
  $$2 < x < 3$$
* *(Como costuma aparecer nas alternativas da banca em notação de conjunto:)*
  $$S = \{x \in \mathbb{R} \mid 2 < x < 3\}$$
  *(Tradução símbolo por símbolo: **$x \in \mathbb{R}$** lê-se "x pertence ao conjunto dos números reais"; a barra **$\mid$** lê-se "tal que"; e **$2 < x < 3$** lê-se "x está estritamente entre 2 e 3".)*

#### Exemplo A2 (Pedido: $\ge 0$): Resolva $x^2 - 5x + 6 \ge 0$

**Passo 1 — Reaproveitar as raízes e o mapa de sinais:**  
A expressão do lado esquerdo é exatamente a mesma ($x^2 - 5x + 6$), então as raízes continuam sendo **$x_1 = 2$** e **$x_2 = 3$**, e o mapa de sinais ($a = +1 > 0$, formato em "U") não muda nada:
* **Antes de $2$ ($x < 2$):** <mark class="hl-emerald">**Positivo ($+$)**</mark>
* **Entre $2$ e $3$ ($2 < x < 3$):** <mark class="hl-rose">**Negativo ($-$)**</mark>
* **Depois de $3$ ($x > 3$):** <mark class="hl-emerald">**Positivo ($+$)**</mark>

**Passo 2 — Ver o que mudou com o símbolo $\ge 0$:**
* Agora o símbolo **$\ge 0$** pede valores **maiores OU iguais a zero**, ou seja, queremos as <mark class="hl-emerald">**regiões positivas ($+$)**</mark>.
* Olhando o mapa acima, existem **duas fatias positivas** (as duas pontas externas):
  * Tudo o que está **à esquerda de $2$**;
  * Tudo o que está **à direita de $3$**.
* **O $2$ e o $3$ entram agora?** Faça o teste: para $x = 2$, a conta dá $0$, e a frase *"$0 \ge 0$"* (zero é maior **ou igual** a zero) é **VERDADEIRA**! O mesmo vale para $x = 3$.  
  Como $\ge$ **tem o tracinho de igual embaixo**, incluímos as fronteiras usando **bolinhas fechadas ($\bullet$)** (pintadas por dentro).

**Passo 3 — Escrever a resposta final (atenção ao conectivo "ou"):**  
Como são dois pedaços separados da reta — um antes do $2$ e outro depois do $3$ — ligamos os dois trechos com **"ou"** *(nenhum número pode ser menor que $2$ e maior que $3$ ao mesmo tempo; ou ele cai na ponta esquerda, ou cai na ponta direita)*:
$$x \le 2 \quad \text{ou} \quad x \ge 3$$
*(Em notação de conjunto: $S = \{x \in \mathbb{R} \mid x \le 2 \text{ ou } x \ge 3\}$.)*

**Passo 4 — Prova Real rápida (testando 4 números em $x^2 - 5x + 6 \ge 0$):**
* $x = 1$ (está em $x \le 2$): $1^2 - 5(1) + 6 = 1 - 5 + 6 = +2 \ge 0$ ✓
* $x = 2$ (fronteira com bolinha fechada): $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0 \ge 0$ ✓
* $x = 2{,}5$ (no miolo, fora da resposta): $(2{,}5)^2 - 5(2{,}5) + 6 = -0{,}25$ ✗ *(corretamente excluído!)*
* $x = 5$ (está em $x \ge 3$): $5^2 - 5(5) + 6 = 25 - 25 + 6 = +6 \ge 0$ ✓

> [!NOTE]
> 🎯 **Pausa Rápida para Fixar 2.1 (Estudo do Sinal com $a > 0$):**  
> Sabendo que $x^2 - 6x + 8 = 0$ tem raízes $2$ e $4$ ($S = 6$ e $P = 8$) e que $a = +1 > 0$, dê a solução de cabeça e confirme abaixo:
> 1. $x^2 - 6x + 8 < 0$
> 2. $x^2 - 6x + 8 \ge 0$
>
> <details><summary><b>Ver Resolução Passo a Passo</b></summary>
>
> * Como $a = +1 > 0$, a curva em U tem sinais: **$+$** antes de $2$ $\mid$ **$-$** entre $2$ e $4$ $\mid$ **$+$** depois de $4$.
> 1. **Para $< 0$ (miolo negativo, bolinha aberta):** **$2 < x < 4$**.
> 2. **Para $\ge 0$ (pontas positivas, bolinha fechada):** **$x \le 2$ ou $x \ge 4$**.
> </details>

#### Subtipo B: Quando $a < 0$ (Curva em formato de "$\cap$" / Montanha)

Quando o coeficiente $a$ é **negativo**, tudo vira de cabeça para baixo: a curva vem de baixo da água (**$-$**), sobe acima da água formando um morro entre as raízes (**$+$**), e cai novamente abaixo da água (**$-$**).

Mapa de sinais para $a < 0$ com duas raízes ($x_1 < x_2$) *(sempre "MaCaMa": **M**esmo sinal de $a$ nas pontas, **C**ontrário no miolo!)*:
* **À esquerda da 1ª raiz ($x < x_1$):** sinal **negativo ($-$)** *(abaixo da água)*.
* **Entre as duas raízes ($x_1 < x < x_2$):** sinal **positivo ($+$)** *(morro acima da água)*.
* **À direita da 2ª raiz ($x > x_2$):** sinal **negativo ($-$)** *(abaixo da água novamente)*.

> [!NOTE]
> **Dois jeitos equivalentes de resolver quando $a < 0$ (escolha o que você achar mais limpo!):**  
> 1. **Direto no desenho:** mantenha $a < 0$, desenhe a montanha ($\cap$, sinais `− | + | −`) e pegue a região pedida.  
> 2. **Multiplicando tudo por $-1$:** você pode multiplicar toda a inequação por $-1$ para transformar $a$ em positivo — **desde que INVERTER também o sinal da desigualdade** (regra da Semana 04: `>` vira `<`; `≥` vira `≤`!).

#### Exemplo B (Pedido: $> 0$): Resolva nos reais $-x^2 + 6x - 5 > 0$

**Caminho 1 — Mantendo $a = -1 < 0$ diretamente:**

**Passo 1 — Achar as raízes de $-x^2 + 6x - 5 = 0$:**  
Identificamos **$a = -1$**, **$b = 6$** e **$c = -5$**. Aplicando Bhaskara:
$$\Delta = 6^2 - 4 \cdot (-1) \cdot (-5) = 36 - 20 = 16$$
*(Alerta de sinal: $(-1) \cdot (-5) = +5$, e depois $-4 \cdot 5 = -20$!)*

$$x = \frac{-6 \pm \sqrt{16}}{2 \cdot (-1)} = \frac{-6 \pm 4}{-2}$$
* **$x_1 = \dfrac{-6 + 4}{-2} = \dfrac{-2}{-2} = \mathbf{1}$**
* **$x_2 = \dfrac{-6 - 4}{-2} = \dfrac{-10}{-2} = \mathbf{5}$**

**Passo 2 — Montar o mapa de sinais ($a = -1 < 0 \implies$ montanha $\cap$) com testes reais:**
* **Antes de $1$ ($x < 1$):** <mark class="hl-rose">**Negativo ($-$)**</mark> *(teste $x = 0$: $-0^2 + 6(0) - 5 = -5$)*
* **Entre $1$ e $5$ ($1 < x < 5$):** <mark class="hl-emerald">**Positivo ($+$)**</mark> *(teste $x = 2$: $-2^2 + 6(2) - 5 = -4 + 12 - 5 = +3$)*
* **Depois de $5$ ($x > 5$):** <mark class="hl-rose">**Negativo ($-$)**</mark> *(teste $x = 6$: $-6^2 + 6(6) - 5 = -36 + 36 - 5 = -5$)*

**Passo 3 — Ler o pedido ($> 0$):**  
Queremos a <mark class="hl-emerald">**região positiva ($+$)**</mark> com bolinha aberta ($\circ$, pois $>$ não inclui o zero):
$$1 < x < 5 \qquad \bigl(S = \{x \in \mathbb{R} \mid 1 < x < 5\}\bigr)$$

**Caminho 2 — Multiplicando tudo por $-1$ antes (e invertendo $>$ para $<$!):**

**Passo 1 — Trocar todos os sinais e virar a boca da desigualdade:**
$$-x^2 + 6x - 5 > 0 \;\xrightarrow{\times(-1)}\; x^2 - 6x + 5 < 0$$
*(Olhe bem: cada termo mudou de sinal e `>` virou `<`!)*

**Passo 2 — Achar as raízes de $x^2 - 6x + 5 = 0$ por Soma e Produto:**  
Com $a = 1$, $b = -6$ e $c = 5$: Soma $S = 6$ e Produto $P = 5 \implies$ **$x_1 = 1$** e **$x_2 = 5$** *(pois $1 + 5 = 6$ e $1 \cdot 5 = 5$)*.

**Passo 3 — Ler o novo pedido ($< 0$) com $a = +1 > 0$ (formato em "U"):**  
Como agora a curva é um "U" ($+$ antes de $1$, $-$ entre $1$ e $5$, $+$ depois de $5$) e a inequação multiplicada pede $< 0$ (região negativa, bolinha aberta), pegamos exatamente o miolo entre $1$ e $5$: **mesma solução $1 < x < 5$** ✓!

---

### 3. Bolinha Aberta vs. Bolinha Fechada e os Casos Especiais ($\Delta = 0$ e $\Delta < 0$)

Antes de fechar o Eixo 2, duas armadilhas clássicas que mudam o gabarito de questões inteiras:

1. **Fronteira entra ou não entra?**
   * Sinais estritos (**$<$** ou **$>$**): as raízes zeram a conta, e $0$ não é maior nem menor que $0$. Portanto, **bolinha aberta ($\circ$)** — as raízes **NÃO** entram na resposta! (Em questões que pedem *"quantos números inteiros satisfazem..."*, esquecer isso muda a contagem em $2$ unidades!).
   * Sinais inclusivos (**$\le$** ou **$\ge$**): como "ou igual a zero" vale, **bolinha fechada ($\bullet$)** — as raízes **ENTRAM** na resposta!

2. **E quando $\Delta = 0$ ou $\Delta < 0$ em uma inequação?**  
   Basta lembrar do desenho da água! Se $\Delta < 0$, a curva **nunca encosta na água** ($\mathbb{R}$ não tem raízes): ela fica **100% positiva** (se $a > 0$) ou **100% negativa** (se $a < 0$).
   * Exemplo rápido 1: $x^2 + 4 > 0$. Aqui $a = 1 > 0$ e $\Delta = 0^2 - 4(1)(4) = -16 < 0$. A curva fica inteira acima do zero para qualquer $x$! Logo, **todo número real $x \in \mathbb{R}$ é solução** ($S = \mathbb{R}$).
   * Exemplo rápido 2: $x^2 + 4 < 0$. Como a expressão sempre dá resultado positivo (no mínimo $+4$), **nunca** fica menor que zero! Logo, **não há solução** ($S = \varnothing$).
   * Exemplo rápido 3 ($\Delta = 0$): $(x - 3)^2 \le 0$. Como todo quadrado é $\ge 0$, ele só consegue ser $\le 0$ no único ponto em que vale exatamente zero: **$x = 3$** ($S = \{3\}$). Se fosse $(x - 3)^2 < 0$, seria $S = \varnothing$; se fosse $(x - 3)^2 > 0$, seria $S = \mathbb{R} - \{3\}$.

<svg viewBox="0 0 760 300" class="w-full h-auto" role="img" aria-label="Estudo visual do sinal em inequações de 2º grau comparando concavidade positiva e negativa com bolinha aberta e fechada">
  <rect x="8" y="8" width="744" height="284" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="380" y="34" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold" font-family="sans-serif">ESTUDO VISUAL DO SINAL NA INEQUAÇÃO DE 2º GRAU (Δ &gt; 0)</text>

  <!-- Esquerda: a > 0 -->
  <rect x="24" y="48" width="346" height="178" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.4"/>
  <text x="197" y="70" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="bold" font-family="sans-serif">SUBTIPO A: a &gt; 0  ("U" — Sorrindo)</text>

  <line x1="48" y1="142" x2="346" y2="142" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="346,138 354,142 346,146" fill="#94a3b8"/>
  <text x="348" y="157" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <path d="M 78 86 Q 197 242 316 86" fill="none" stroke="#34d399" stroke-width="3"/>
  <circle cx="122" cy="142" r="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="272" cy="142" r="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="108" y="160" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">x₁</text>
  <text x="278" y="160" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">x₂</text>

  <text x="82" y="128" fill="#34d399" font-size="16" font-weight="bold" font-family="sans-serif">+</text>
  <text x="197" y="176" text-anchor="middle" fill="#fb7185" font-size="18" font-weight="bold" font-family="sans-serif">−</text>
  <text x="312" y="128" fill="#34d399" font-size="16" font-weight="bold" font-family="sans-serif">+</text>
  <text x="197" y="212" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">&lt; 0 pega o miolo (x₁ a x₂)   |   &gt; 0 pega as pontas</text>

  <!-- Direita: a < 0 -->
  <rect x="390" y="48" width="346" height="178" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.4"/>
  <text x="563" y="70" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="bold" font-family="sans-serif">SUBTIPO B: a &lt; 0  ("∩" — Montanha)</text>

  <line x1="414" y1="142" x2="712" y2="142" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="712,138 720,142 712,146" fill="#94a3b8"/>
  <text x="714" y="157" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <path d="M 444 198 Q 563 42 682 198" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="488" cy="142" r="5" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="638" cy="142" r="5" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"/>
  <text x="472" y="130" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">x₁</text>
  <text x="646" y="130" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">x₂</text>

  <text x="448" y="166" fill="#fb7185" font-size="18" font-weight="bold" font-family="sans-serif">−</text>
  <text x="563" y="114" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold" font-family="sans-serif">+</text>
  <text x="676" y="166" fill="#fb7185" font-size="18" font-weight="bold" font-family="sans-serif">−</text>
  <text x="563" y="212" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">&gt; 0 pega o miolo (x₁ a x₂)   |   &lt; 0 pega as pontas</text>

  <!-- Rodape legenda -->
  <rect x="24" y="238" width="712" height="40" rx="8" fill="#172554" stroke="#6366f1" stroke-width="1"/>
  <circle cx="52" cy="258" r="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="66" y="262" fill="#e2e8f0" font-size="11" font-family="sans-serif">Bolinha aberta (&lt; ou &gt;): NÃO inclui as raízes</text>
  <circle cx="408" cy="258" r="5" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"/>
  <text x="422" y="262" fill="#e2e8f0" font-size="11" font-family="sans-serif">Bolinha fechada (≤ ou ≥): INCLUI as raízes</text>
</svg>

> [!TIP]
> **Síntese Feynman de 3 Linhas (Eixo 2 — Inequações de 2º Grau):**
> 1. Nunca resolva uma inequação de 2º grau isolando $x$ como no 1º grau: você precisa primeiro igualar a zero para achar as raízes ($x_1$ e $x_2$), que são as paredes onde o sinal muda.
> 2. O sinal de **$a$** define o desenho: se $a > 0$ ("U"), os sinais seguem $+ \mid - \mid +$; se $a < 0$ ("$\cap$"), seguem $- \mid + \mid -$ — ou multiplique por $-1$ **invertendo o sinal da desigualdade**.
> 3. Pinte a região que o sinal pede (`>`/`≥` busca $+$; `<`/`≤` busca $-$) e respeite a fronteira: `<` ou `>` deixa as raízes de fora (bolinha aberta); `≤` ou `≥` inclui as raízes (bolinha fechada).

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 2 (Inequações de 2º Grau na Unha)
Pratique no papel estes 4 casos clássicos de estudo do sinal antes de avançar para os checkpoints:

1. **Parábola em U ($a > 0$) com bolinha fechada:** Resolva $x^2 - 9x + 14 \le 0$.
2. **Parábola montanha ($a < 0$) com bolinha aberta:** Resolva $-x^2 + 5x - 4 > 0$.
3. **Contagem de inteiros (clássica de prova):** Quantos números inteiros satisfazem a inequação $x^2 - 16 < 0$?
4. **Caso especial $\Delta < 0$:** Qual é o conjunto solução real de $x^2 + 2x + 5 > 0$?

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 2</b></summary>

* **1. Resolução de $x^2 - 9x + 14 \le 0$:**
  - Raízes por Soma ($9$) e Produto ($14$): $x_1 = 2$ e $x_2 = 7$.
  - $a = +1 > 0 \implies + \mid - \mid +$. Queremos $\le 0$ (região $-$, bolinha fechada).
  - Solução: **$2 \le x \le 7$**.

* **2. Resolução de $-x^2 + 5x - 4 > 0$:**
  - Raízes de $-x^2 + 5x - 4 = 0$ (ou $x^2 - 5x + 4 = 0$): $x_1 = 1$ e $x_2 = 4$.
  - $a = -1 < 0$ (montanha $\cap$) $\implies - \mid + \mid -$. Queremos $> 0$ (miolo $+$, bolinha aberta).
  - Solução: **$1 < x < 4$**. *(Ou multiplicando por $-1$: $x^2 - 5x + 4 < 0 \implies 1 < x < 4$).*

* **3. Quantos inteiros satisfazem $x^2 - 16 < 0$?**
  - Raízes de $x^2 - 16 = 0 \implies x^2 = 16 \implies x = \pm 4$.
  - Como $a = 1 > 0$ e o sinal é $< 0$, pegamos o miolo aberto: $-4 < x < 4$.
  - Os números **inteiros** estritamente entre $-4$ e $4$ são: $\{-3, -2, -1, 0, 1, 2, 3\}$, totalizando **$7$ números inteiros**!

* **4. Solução de $x^2 + 2x + 5 > 0$:**
  - $\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$ (não toca o eixo $x$).
  - Como $a = +1 > 0$, toda a parábola flutua $100\%$ acima de zero (sempre positiva para qualquer $x$!).
  - Logo, qualquer número real serve: **$S = \mathbb{R}$**.
</details>

---

### Questão 04
**Banca:** Checkpoint do Eixo 2 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Um sistema de controle térmico de servidores aciona a ventilação auxiliar sempre que o parâmetro técnico $x$ satisfaz a inequação $x^2 - 7x + 10 < 0$. Assinale a alternativa que apresenta CORRETAMENTE o conjunto solução real para esse parâmetro $x$:
(A) Todos os valores menores ou iguais a $2$ ou maiores ou iguais a $5$.
(B) Todos os valores estritamente menores que $2$ ou estritamente maiores que $5$.
(C) Todos os valores reais estritamente compreendidos entre $2$ e $5$ ($2 < x < 5$).
(D) Todos os valores reais compreendidos entre $2$ e $5$, incluindo os extremos ($2 \le x \le 5$).
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
* **Passo 1 — Raízes de $x^2 - 7x + 10 = 0$:** Soma $S = 7$ e Produto $P = 10 \implies x_1 = 2$ e $x_2 = 5$.
* **Passo 2 — Estudo do sinal:** Como $a = +1 > 0$ (parábola em U), os sinais são $+$ antes de $2$, $-$ entre $2$ e $5$, e $+$ depois de $5$.
* **Passo 3 — Leitura do pedido ($< 0$):** queremos a região negativa ($-$), com bolinhas abertas porque o sinal é estrito ($<$). Logo, **$2 < x < 5$**.
* **(C) CORRETA:** aponta corretamente o intervalo interno aberto entre $2$ e $5$.
* **(A) e (B) ERRADAS:** pegaram as regiões externas positivas (que seriam solução de $\ge 0$ ou $> 0$).
* **(D) ERRADA:** incluiu os extremos ($2$ e $5$), esquecendo que para $x = 2$ ou $x = 5$ a expressão dá $0$, e $0 < 0$ é falso.
</details>

### Questão 05
**Banca:** Checkpoint do Eixo 2 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Em uma avaliação de segurança documental, o risco residual não é aceitável quando a variável $x$ obedece à condição $x^2 - 4x - 12 \ge 0$. Com base no estudo do sinal da expressão quadrática, o conjunto de todos os valores reais de $x$ que satisfazem essa inequação é dado por:
(A) $x \le -2$ ou $x \ge 6$.
(B) $-2 \le x \le 6$.
(C) $x < -2$ ou $x > 6$.
(D) $-6 \le x \le 2$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Passo 1 — Raízes de $x^2 - 4x - 12 = 0$:** Soma $S = 4$ e Produto $P = -12 \implies x_1 = -2$ e $x_2 = 6$ (confira: $-2 + 6 = 4$ e $-2 \cdot 6 = -12$).
* **Passo 2 — Estudo do sinal ($a = +1 > 0$, formato U):** $+$ antes de $-2$ $\mid$ $-$ entre $-2$ e $6$ $\mid$ $+$ depois de $6$.
* **Passo 3 — Pedido ($\ge 0$):** queremos a região positiva ($+$) com bolinhas fechadas, ou seja, **$x \le -2$ ou $x \ge 6$**.
* **(A) CORRETA:** regiões externas incluindo os extremos.
* **(B) ERRADA:** marcou o intervalo interno (que vale $\le 0$).
* **(C) ERRADA:** usou bolinha aberta, excluindo indevidamente $-2$ e $6$.
* **(D) ERRADA:** trocou o sinal das raízes ($-6$ e $2$) e ainda pegou o intervalo interno.
</details>

### Questão 06
**Banca:** Checkpoint do Eixo 2 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Na análise de desempenho de uma impressora multifuncional adquirida pela Prefeitura, o índice de eficiência diário $E(x)$ — onde $x$ representa o número inteiro de lotes processados por turno — mantém-se dentro da meta mínima quando satisfaz a inequação $-x^2 + 8x - 12 \ge 0$. Nessas condições, quantos valores **inteiros** distintos $x$ pode assumir para cumprir a meta?
(A) Exatamente $3$ valores inteiros possíveis.
(B) Exatamente $4$ valores inteiros possíveis.
(C) Exatamente $6$ valores inteiros possíveis.
(D) Exatamente $5$ valores inteiros possíveis.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**
* **Passo 1 — Raízes de $-x^2 + 8x - 12 = 0$:** multiplicando por $-1$ para achar as raízes mais fácil, temos $x^2 - 8x + 12 = 0 \implies S = 8, P = 12 \implies x_1 = 2$ e $x_2 = 6$.
* **Passo 2 — Estudo do sinal na expressão original ($a = -1 < 0$, formato montanha $\cap$):** $-$ antes de $2$ $\mid$ $+$ entre $2$ e $6$ $\mid$ $-$ depois de $6$.
* **Passo 3 — Pedido ($\ge 0$) e contagem de inteiros:** queremos o miolo positivo com os extremos incluídos: $2 \le x \le 6$. Os números inteiros nesse intervalo são $\{2, 3, 4, 5, 6\}$, totalizando exatamente **$5$ valores inteiros** ($6 - 2 + 1 = 5$).
* **(D) CORRETA:** contou todos os $5$ inteiros de $2$ até $6$ inclusive.
* **(A) ERRADA:** esqueceu de incluir as duas fronteiras ($3, 4, 5$ apenas), ignorando que o sinal é $\ge 0$.
* **(B) ERRADA:** fez $6 - 2 = 4$, erro clássico de contagem em intervalos fechados.
* **(C) ERRADA:** incluiu $0$ ou um termo inexistente fora do intervalo.
</details>

---

## EIXO 3: O Conceito de Função e a Função de 1º Grau — Fórmula, Tabela, Raiz e Gráfico

### 1. O que é uma Função na Realidade? (A Máquina de Transformação)

Até o Eixo 2, estudamos **equações** — igualdades que escondem um número fixo ($x^2 - 5x + 6 = 0 \implies x = 2$ ou $3$). Agora vamos dar o grande salto conceitual da Semana 05: entender o que é uma **Função**.

Imagine uma **máquina de cobrança de um estacionamento** ou um **contrato de impressão de apostilas na Prefeitura**:
* Você escolhe na **entrada** uma quantidade $x$ (ex.: $x$ horas estacionadas, ou $x$ apostilas impressas).
* A máquina aplica **uma regra matemática única e fixa** e entrega na **saída** um valor $y$ (o valor em reais a pagar).

Em matemática, **função** é exatamente isso: **uma regra que associa cada valor de entrada ($x$) a UM ÚNICO valor de saída ($y$)**. Escrevemos $y = f(x)$ — leia *"efe de xis"*, que apenas lembra que o resultado $y$ é fabricado pela regra $f$ usando o número de entrada $x$.

> [!NOTE]
> **Por que cada entrada $x$ só pode ter UMA saída $y$?**  
> Pense no estacionamento: se você ficou $3$ horas exatas, o sistema pode cobrar $\text{R\$ } 27{,}00$ no seu recibo e $\text{R\$ } 45{,}00$ no recibo do carro idêntico ao lado que entrou no mesmo minuto? Claro que não! Uma entrada ($x = 3$) não pode gerar duas saídas conflitantes ao mesmo tempo. *(Atenção: o contrário pode! Dois dias diferentes com preços diferentes ou promoções de tarifa máxima podem dar a mesma saída, mas nunca uma mesma entrada com duas saídas!)*

Veja o nome oficial de cada parte dessa máquina (muito cobrado em enunciados da ACCESS):

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>VOCABULÁRIO DA MÁQUINA DE FUNÇÃO: $f: A \to B$ COM $y = f(x)$</span>
    </div>
    <span class="edu-comp-badge">Sem Termo Solto</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">📥</span>
        <span class="card-badge">As Entradas</span>
      </div>
      <h4 class="card-title">Variável Independente ($x$) e Domínio ($D$)</h4>
      <p class="card-text"><strong>$x$</strong> é a <strong>variável independente</strong> porque você a escolhe livremente. O conjunto de todas as entradas permitidas chama-se <strong>Domínio ($D$)</strong>.</p>
      <div class="card-examples">
        <span class="ex-tag">$D$ = conjunto de partida ($A$)</span>
      </div>
    </div>
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">🎯</span>
        <span class="card-badge">O Alvo Geral</span>
      </div>
      <h4 class="card-title">Contradomínio ($CD$)</h4>
      <p class="card-text">É o conjunto inteiro de chegada ($B$) onde os resultados "moram" (ex.: todos os números reais $\mathbb{R}$), mesmo que nem todos sejam atingidos.</p>
      <div class="card-examples">
        <span class="ex-tag">$CD$ = conjunto de chegada ($B$)</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">📤</span>
        <span class="card-badge">As Saídas Reais</span>
      </div>
      <h4 class="card-title">Variável Dependente ($y$) e Imagem ($\text{Im}$)</h4>
      <p class="card-text"><strong>$y = f(x)$</strong> é a <strong>variável dependente</strong> porque depende de $x$. O conjunto dos valores que <em>efetivamente saem</em> da conta chama-se <strong>Imagem ($\text{Im}$)</strong>.</p>
      <div class="card-examples">
        <span class="ex-tag">Ex.: se $D=\{-1,1\}$ e $f(x)=x^2$, $\text{Im}=\{1\}$</span>
      </div>
    </div>
  </div>
</div>

#### Micro-revisão rápida: O Plano Cartesiano para ler qualquer ponto $(x, y)$
Para desenhar uma função, usamos duas réguas cruzadas em ângulo reto ($90^\circ$) no ponto $(0, 0)$ (chamado **Origem**):
* A régua **horizontal** ($\leftrightarrow$) é o **Eixo $x$** — chamado tecnicamente de **Eixo das Abscissas** (positivo à direita, negativo à esquerda).
* A régua **vertical** ($\updownarrow$) é o **Eixo $y$** — chamado tecnicamente de **Eixo das Ordenadas** (positivo para cima, negativo para baixo).
* Todo ponto no desenho é um **par ordenado $(x, y)$**: **sempre** o primeiro número anda na horizontal ($x$) e o segundo número sobe ou desce na vertical ($y$). Exemplo: no ponto $P(4, 10)$, a abscissa é $4$ e a ordenada é $10$.

---

### 2. Anatomia da Função de 1º Grau ($f(x) = ax + b$, com $a \neq 0$)

Também chamada de **Função Afim** ou **Função Linear Geral** (cuidado: tecnicamente "função linear" estrita tem $b = 0$, mas os concursos usam "relação linear" ou "função de 1º grau" para $f(x) = ax + b$). Seu gráfico é **sempre uma linha reta**!

Por que uma linha reta? Porque a cada passo que $x$ avança para a direita, $y$ muda **sempre exatamente a mesma quantidade fixa**. Vamos entender os dois números da receita — **um por vez**!

#### Peça 1: O Coeficiente Linear ($b$) — O Valor Fixo / Ponto de Partida no Eixo $y$

Olhe para o que acontece quando zeramos a entrada ($x = 0$) em $f(x) = ax + b$:

$$f(0) = a \cdot 0 + b = \mathbf{b}$$

Isso revela duas verdades gigantes que caem toda hora em prova:
1. **Na vida prática:** o **$b$** é a **taxa fixa inicial** — aquilo que você paga ou tem *mesmo quando a quantidade variável é zero* (ex.: bandeirada do táxi antes de rodar $1\text{ km}$, salário-base antes das comissões, taxa fixa de abertura de turma).
2. **No gráfico:** quando $x = 0$, você não anda nem para a esquerda nem para a direita — fica exatamente em cima do eixo vertical $y$! Portanto, **a reta SEMPRE corta o eixo vertical $y$ no ponto $(0, b)$**:
   * Se $b > 0$, corta $y$ acima da origem (em **ordenada positiva**).
   * Se $b = 0$, passa exatamente na origem $(0, 0)$.
   * Se $b < 0$, corta $y$ abaixo da origem (em ordenada negativa).

* **Exemplo imediato:** Uma empresa de manutenção cobra taxa fixa de visita de $\text{R\$ } 80{,}00$ mais $\text{R\$ } 50{,}00$ por hora trabalhada: $V(t) = 50t + 80$. Mesmo com $0$ horas de serviço extra ($t = 0$), a visita já custa $V(0) = b = \text{R\$ } 80{,}00$, e o gráfico corta o eixo vertical em $(0, 80)$.

#### Peça 2: O Coeficiente Angular ($a$) — A Taxa de Variação / Inclinação da Reta

O número **$a$** que multiplica $x$ diz **o quanto $y$ sobe ou desce a cada $1$ unidade que $x$ avança**. É a **taxa de variação** (ou inclinação da rampa):

$$a = \frac{\text{Variação em } y}{\text{Variação em } x} = \frac{y_2 - y_1}{x_2 - x_1}$$

Vamos ver os **3 comportamentos possíveis** de $a$, um por vez, com seu exemplo na hora:

* **Quando $a > 0$ (Função Crescente):** cada vez que $x$ aumenta, $y$ também **aumenta**. Olhando da esquerda para a direita, a reta **sobe**.
  * *Exemplo:* Um motorista de aplicativo ganha $\text{R\$ } 3{,}00$ por km rodado além da taxa fixa de $\text{R\$ } 6{,}00$: $G(x) = 3x + 6$. Aqui $a = +3 > 0$. Para $x = 1 \to 9$; para $x = 2 \to 12$; para $x = 3 \to 15$ (sobe de $3$ em $3$!).
* **Quando $a < 0$ (Função Decrescente):** cada vez que $x$ aumenta, $y$ **diminui**. Olhando da esquerda para a direita, a reta **desce**.
  * *Exemplo:* Um reservatório da Prefeitura começa com $500$ litros e perde $20$ litros por minuto por um registro aberto: $V(t) = -20t + 500$ (ou $500 - 20t$). Aqui $a = -20 < 0$ e $b = +500 > 0$. A cada minuto, o volume **cai $20$ litros**: $t = 0 \to 500$; $t = 1 \to 480$; $t = 2 \to 460$. No gráfico, é uma reta decrescente que corta o eixo $y$ na ordenada positiva $500$.
* **Caso especial $a = 0$ (Função Constante):** se $a = 0$, temos $f(x) = 0x + b = b$. Não importa quanto $x$ mude, o resultado $y$ **nunca sai do lugar**. Olhando no gráfico, é uma reta **horizontal** paralela ao eixo $x$, na altura $b$ (ex.: assinatura fixa mensal de $\text{R\$ } 90{,}00$ com uso ilimitado). *(Por definição rigorosa, função afim com $a = 0$ não é de 1º grau, é constante).*

> [!NOTE]
> 🎯 **Pausa Rápida para Fixar 3.1 (Lendo $a$, $b$ e Imagem na Hora):**  
> Responda rápido no caderno:
> 1. Na função $f(x) = 4x - 12$, quanto valem $a$ e $b$, a reta é crescente ou decrescente e quanto vale $f(5)$?
> 2. Na função $g(x) = 30 - 6x$, onde a reta corta o eixo vertical $y$ e ela sobe ou desce?
> 3. Se $h(x) = 3x + 2$ tem Domínio $D = \{-1, 0, 2\}$, qual é o conjunto Imagem ($\text{Im}$)?
>
> <details><summary><b>Ver Resposta Rápida</b></summary>
>
> 1. **$a = 4 > 0$** (crescente) e **$b = -12$** (corta $y$ em $(0, -12)$); $f(5) = 4(5) - 12 = 20 - 12 = \mathbf{8}$.
> 2. Atenção à ordem invertida: **$b = 30$** (corta $y$ em $(0, 30)$) e **$a = -6 < 0$** (desce / **decrescente**).
> 3. Calculando para cada entrada do domínio: $h(-1) = 3(-1) + 2 = -1$; $h(0) = 2$; $h(2) = 3(2) + 2 = 8$. Logo, **$\text{Im} = \{-1, 2, 8\}$**.
> </details>

---

### 3. A Raiz (Zero) da Reta e a Ponte Fórmula $\leftrightarrow$ Tabela $\leftrightarrow$ Gráfico

A **raiz** (ou **zero**) da função de 1º grau é o valor de $x$ onde a saída $f(x)$ zera ($y = 0$). No desenho do gráfico, é exatamente o ponto onde a reta **atravessa o eixo horizontal $x$**:

$$ax + b = 0 \implies ax = -b \implies x = -\frac{b}{a}$$

Mais rápido do que decorar $-\frac{b}{a}$ é simplesmente **igualar a fórmula a zero e resolver a equação de 1º grau**! Veja no reservatório do exemplo anterior ($V(t) = 500 - 20t$): em quanto tempo o tanque esvazia completamente ($V(t) = 0$)?

$$500 - 20t = 0 \implies 500 = 20t \implies t = \frac{500}{20} = \mathbf{25\text{ minutos}}$$

Logo, a raiz da função é $25$, e o gráfico corta o eixo horizontal no ponto $(25, 0)$.

#### Conectando os 3 Mundos no Mesmo Exemplo: $f(x) = 2x + 4$

Veja como **Fórmula**, **Tabela** e **Gráfico** contam exatamente a mesma história:

| Entrada ($x$) | Conta na Fórmula ($y = 2x + 4$) | Saída ($y$) | Significado no Gráfico $(x, y)$ |
| :---: | :--- | :---: | :--- |
| **$-2$** | $2 \cdot (-2) + 4 = -4 + 4$ | **$0$** | **Raiz da função!** Ponto $(-2, 0)$ onde corta o eixo horizontal $x$. |
| **$-1$** | $2 \cdot (-1) + 4 = -2 + 4$ | **$2$** | Subiu $2$ unidades porque $x$ avançou $+1$ ($a = 2$). |
| **$0$** | $2 \cdot (0) + 4 = 0 + 4$ | **$4$** | **Coeficiente linear $b$!** Ponto $(0, 4)$ onde corta o eixo vertical $y$. |
| **$1$** | $2 \cdot (1) + 4 = 2 + 4$ | **$6$** | Subiu mais $2$ unidades ($a = 2$). |
| **$2$** | $2 \cdot (2) + 4 = 4 + 4$ | **$8$** | Ponto $(2, 8)$. Qualquer dois pontos já bastam para traçar a reta! |

#### Como Descobrir a Fórmula a Partir de 2 Pontos da Tabela ou do Gráfico (Método Campeão da ACCESS!)

Na prova do Instituto ACCESS, raramente entregam a fórmula pronta — eles entregam **dois pares de valores** no texto, numa tabela ou desenhados sobre uma reta (por exemplo: *"a 40°C dilatou 3,2 mm e a 70°C dilatou 5,6 mm"* ou *"no ponto $x = 2$ vale $11$ e no ponto $x = 5$ vale $20$"*). Veja como achar $f(x) = ax + b$ sem montar sistema complicado:

```text
PROBLEMA MODELO: Uma função de 1º grau passa pelos pontos (2, 11) e (5, 20).
Qual é a fórmula f(x) = ax + b e qual é o valor de f(8)?

PASSO 1 — Calcular a taxa de variação "a" (quanto y mudou dividido por quanto x mudou):
  • x foi de 2 para 5  ==>  Δx = 5 - 2 = 3 unidades
  • y foi de 11 para 20 ==> Δy = 20 - 11 = 9 unidades
  • a = Δy / Δx = 9 / 3 = 3   (a cada +1 em x, y aumenta +3!)

PASSO 2 — Descobrir o valor fixo "b" substituindo UM dos pontos na fórmula y = 3x + b:
  Usando o ponto (2, 11)  [x = 2 e y = 11]:
    11 = 3·(2) + b
    11 = 6 + b
    b = 11 - 6 = 5

  FÓRMULA ENCONTRADA:  f(x) = 3x + 5
  (Conferência com o 2º ponto x = 5: f(5) = 3·5 + 5 = 15 + 5 = 20 ✓)

PASSO 3 — Calcular qualquer valor futuro (ex.: f(8)):
  f(8) = 3·(8) + 5 = 24 + 5 = 29
```

<svg viewBox="0 0 760 320" class="w-full h-auto" role="img" aria-label="Comparação visual do gráfico da função de 1º grau crescente e decrescente destacando coeficiente linear b, raiz e taxa de variação a">
  <rect x="8" y="8" width="744" height="304" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="380" y="34" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold" font-family="sans-serif">RAIO-X DO GRÁFICO DA FUNÇÃO DE 1º GRAU:  f(x) = ax + b</text>

  <!-- Esquerda: a > 0 -->
  <rect x="24" y="48" width="346" height="248" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.4"/>
  <text x="197" y="70" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="bold" font-family="sans-serif">a &gt; 0: RETA CRESCENTE (Ex.: f(x) = 2x + 4)</text>

  <!-- Eixos esq -->
  <line x1="56" y1="214" x2="342" y2="214" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="342,210 350,214 342,218" fill="#94a3b8"/>
  <text x="342" y="229" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <line x1="176" y1="274" x2="176" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="172,90 176,82 180,90" fill="#94a3b8"/>
  <text x="184" y="92" fill="#94a3b8" font-size="10.5" font-family="sans-serif">y</text>

  <!-- Reta crescente: passa por (-2,0) -> (116,214) e (0,4) -> (176,166) e (2,8) -> (236,118) -->
  <line x1="86" y1="238" x2="296" y2="70" stroke="#34d399" stroke-width="3"/>

  <!-- Triângulo taxa de variação -->
  <line x1="176" y1="166" x2="236" y2="166" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="236" y1="166" x2="236" y2="118" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="206" y="180" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Δx = +2</text>
  <text x="266" y="146" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Δy = +4</text>
  <text x="278" y="160" fill="#bae6fd" font-size="9.5" font-family="sans-serif">(a = 4/2 = 2)</text>

  <!-- Pontos chave -->
  <circle cx="116" cy="214" r="5" fill="#f59e0b"/>
  <text x="104" y="232" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold" font-family="sans-serif">Raiz (−2, 0)</text>
  <circle cx="176" cy="166" r="5" fill="#818cf8"/>
  <text x="136" y="158" fill="#c7d2fe" font-size="10" font-weight="bold" font-family="sans-serif">(0, b) = (0, 4)</text>
  <text x="197" y="286" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">Quanto maior o x, maior o y (sobe para a direita)</text>

  <!-- Direita: a < 0 -->
  <rect x="390" y="48" width="346" height="248" rx="10" fill="#1e293b" stroke="#fb7185" stroke-width="1.4"/>
  <text x="563" y="70" text-anchor="middle" fill="#fda4af" font-size="12" font-weight="bold" font-family="sans-serif">a &lt; 0: RETA DECRESCENTE (Ex.: f(x) = −2x + 6)</text>

  <!-- Eixos dir -->
  <line x1="422" y1="214" x2="708" y2="214" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="708,210 716,214 708,218" fill="#94a3b8"/>
  <text x="708" y="229" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <line x1="490" y1="274" x2="490" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="486,90 490,82 494,90" fill="#94a3b8"/>
  <text x="498" y="92" fill="#94a3b8" font-size="10.5" font-family="sans-serif">y</text>

  <!-- Reta decrescente: (0,6)->(490,118), (3,0)->(610,214) -->
  <line x1="450" y1="86" x2="660" y2="254" stroke="#fb7185" stroke-width="3"/>

  <circle cx="490" cy="118" r="5" fill="#818cf8"/>
  <text x="536" y="114" fill="#c7d2fe" font-size="10" font-weight="bold" font-family="sans-serif">(0, b) = (0, 6)</text>
  <circle cx="610" cy="214" r="5" fill="#f59e0b"/>
  <text x="646" y="206" fill="#fcd34d" font-size="10" font-weight="bold" font-family="sans-serif">Raiz (3, 0)</text>

  <text x="580" y="152" fill="#fda4af" font-size="10" font-weight="bold" font-family="sans-serif">a = −2 (cai 2 por passo)</text>
  <text x="563" y="286" text-anchor="middle" fill="#cbd5e1" font-size="10.5" font-family="sans-serif">b &gt; 0 corta eixo y acima de 0, mas a &lt; 0 faz cair</text>
</svg>

> [!TIP]
> **Síntese Feynman de 3 Linhas (Eixo 3 — Função e 1º Grau):**
> 1. Uma **função** liga cada entrada $x$ (Domínio) a uma única saída $y = f(x)$ (Imagem); no Plano Cartesiano, todo ponto $(x, y)$ marca primeiro a horizontal ($x$, abscissa) e depois a vertical ($y$, ordenada).
> 2. Na função de 1º grau $f(x) = ax + b$, o número **$b$** é o valor fixo inicial onde a reta corta o eixo vertical $y$ em $(0, b)$, e o número **$a$** é a taxa de variação ($a = \frac{\Delta y}{\Delta x}$): se $a > 0$ a reta cresce; se $a < 0$ a reta decresce.
> 3. A **raiz** é o valor de $x$ que zera a conta ($ax + b = 0$, onde a reta corta o eixo $x$); e bastam **dois pontos** $(x_1, y_1)$ e $(x_2, y_2)$ para descobrir $a = \frac{y_2 - y_1}{x_2 - x_1}$ e depois achar $b$ por substituição.

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 3 (Função de 1º Grau na Unha)
Resolva estes 4 exercícios diretos no papel para dominar fórmula, tabela, raiz e encontro de retas:

1. **Raiz (Zero) da Reta:** Encontre onde o gráfico de $f(x) = -3x + 18$ corta o eixo horizontal $x$.
2. **Taxa Fixa + Variável:** Um plano corporativo de internet custa $\text{R\$ } 40{,}00$ fixos por mês mais $\text{R\$ } 5{,}00$ por gigabyte extra ($x$) consumido. Escreva a fórmula $P(x)$, calcule o custo com $6\text{ GB}$ extras e descubra quantos GB extras geram uma fatura de $\text{R\$ } 85{,}00$.
3. **Montando a Lei por 2 Pontos:** Descubra a função $f(x) = ax + b$ que passa por $(1, 7)$ e $(4, 19)$ e calcule $f(10)$.
4. **Encontro de Duas Retas:** Em qual ponto $(x, y)$ as funções $f(x) = 2x + 10$ e $g(x) = 5x - 8$ assumem exatamente o mesmo valor?

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 3</b></summary>

* **1. Raiz de $f(x) = -3x + 18$:**
  - Igualamos a saída a zero: $-3x + 18 = 0 \implies 18 = 3x \implies x = \frac{18}{3} = \mathbf{6}$.
  - A reta corta o eixo $x$ no ponto **$(6, 0)$**.

* **2. Plano de Internet ($P(x) = 5x + 40$):**
  - Fórmula: $P(x) = \mathbf{5x + 40}$.
  - Para $x = 6$: $P(6) = 5(6) + 40 = 30 + 40 = \mathbf{\text{R\$ } 70{,}00}$.
  - Para fatura de $85$: $5x + 40 = 85 \implies 5x = 45 \implies x = \mathbf{9\text{ GB extras}}$.

* **3. Função passando por $(1, 7)$ e $(4, 19)$:**
  - Taxa de variação: $a = \dfrac{19 - 7}{4 - 1} = \dfrac{12}{3} = \mathbf{4}$.
  - Substituindo $(1, 7)$ em $y = 4x + b$: $7 = 4(1) + b \implies b = \mathbf{3}$.
  - Fórmula: **$f(x) = 4x + 3$**. Logo, $f(10) = 4(10) + 3 = \mathbf{43}$.

* **4. Encontro de $f(x) = 2x + 10$ e $g(x) = 5x - 8$:**
  - Quando duas funções empatam no gráfico, $f(x) = g(x)$:
    $$2x + 10 = 5x - 8 \implies 10 + 8 = 5x - 2x \implies 18 = 3x \implies x = \mathbf{6}$$
  - Calculando o $y$ do encontro (em qualquer uma das duas): $f(6) = 2(6) + 10 = \mathbf{22}$ (confira em $g$: $5(6) - 8 = 22$ ✓).
  - Ponto de cruzamento: **$(6, 22)$**.
</details>

---

### Questão 07
**Banca:** Adaptada de FUNDATEC (`prova-auto/87.pdf`, Q24) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

O pátio terceirizado que atende os visitantes próximos ao paço municipal cobra os seguintes valores de seus clientes: uma taxa fixa de $\text{R\$ } 18{,}00$ correspondente à primeira hora de permanência, acrescida de $\text{R\$ } 4{,}50$ por cada hora adicional completa utilizada além da primeira. Considerando $x$ o número de horas adicionais utilizadas além da primeira hora, assinale a alternativa CORRETA que indica a função $f(x)$, de primeiro grau, que permite calcular o valor total a ser cobrado:
(A) $f(x) = 18x + 4{,}5$.
(B) $f(x) = 18 + 4{,}5x$.
(C) $f(x) = 18 - 4{,}5x$.
(D) $f(x) = 4{,}5x - 18$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Tradução para $f(x) = ax + b$:**
  * O valor fixo (que independe das horas adicionais $x$, cobrado pela primeira hora) é $b = 18{,}00$.
  * A taxa variável (que multiplica cada hora adicional $x$) é $a = 4{,}50$.
  * Portanto, a lei da função é $f(x) = 4{,}5x + 18$, que escrita na ordem do valor fixo primeiro fica **$f(x) = 18 + 4{,}5x$**.
* **(B) CORRETA:** associa o valor fixo $18$ ao termo independente $b$ e o adicional $4{,}5$ como coeficiente angular multiplicando $x$.
* **(A) ERRADA:** trocou os papéis de $a$ e $b$, multiplicando o valor fixo pela quantidade de horas adicionais.
* **(C) ERRADA:** subtraiu o valor adicional em vez de somar, reduzindo a conta quanto mais tempo o cliente fica.
* **(D) ERRADA:** subtraiu o valor fixo $18$ da tarifa por hora, gerando valor negativo para $x = 1$.
</details>

### Questão 08
**Banca:** Checkpoint do Eixo 3 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

A tabela abaixo apresenta o custo diário $C(x)$ (em reais) para a emissão de $x$ relatórios encadernados em uma gráfica contratada, sabendo-se que a cobrança obedece a uma função polinomial do 1º grau $C(x) = ax + b$:

| Quantidade de relatórios ($x$) | $10$ | $25$ | $40$ |
| :--- | :---: | :---: | :---: |
| **Custo total $C(x)$ (em reais)** | $85{,}00$ | $145{,}00$ | $205{,}00$ |

Analise as afirmativas a seguir a respeito dessa função:
I. A taxa de variação (custo por relatório adicional) é igual a $\text{R\$ } 4{,}00$.
II. A taxa fixa inicial de pedido ($b$) cobrada pela gráfica é de $\text{R\$ } 45{,}00$.
III. O custo para emitir exatamente $60$ relatórios será de $\text{R\$ } 295{,}00$.

Está(ão) CORRETA(S):
(A) apenas a afirmativa I.
(B) apenas a afirmativa II.
(C) apenas as afirmativas I e II.
(D) todas as afirmativas.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
* **Passo 1 — Achar a taxa de variação $a$:**
  $$a = \frac{145 - 85}{25 - 10} = \frac{60}{15} = \mathbf{4}$$
  Logo, **I está CORRETA** ($\text{R\$ } 4{,}00$ por relatório).
* **Passo 2 — Achar o valor fixo $b$ usando o ponto $(10, 85)$:**
  $$85 = 4 \cdot 10 + b \implies 85 = 40 + b \implies b = \mathbf{45}$$
  Logo, **II está CORRETA** ($C(x) = 4x + 45$, confira em $x = 40$: $4 \cdot 40 + 45 = 205$ ✓).
* **Passo 3 — Testar $x = 60$:**
  $$C(60) = 4 \cdot 60 + 45 = 240 + 45 = \mathbf{285{,}00} \neq 295{,}00$$
  Logo, **III está ERRADA**.
* **(C) CORRETA:** apenas I e II procedem.
* **(A), (B) e (D) ERRADAS:** deixam de reconhecer a veracidade conjunta de I e II ou validam o cálculo errado de III.
</details>

### Questão 09
**Banca:** Adaptada de FADENOR (`prova-auto/26.pdf`, Q15) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Em uma análise de depreciação linear do valor de equipamentos de informática de uma autarquia municipal, constatou-se que o comportamento pode ser representado por uma função polinomial de grau $1$ que possui **coeficiente angular negativo** e **coeficiente linear positivo**. Com base exclusivamente nessas características, é CORRETO afirmar que:
(A) O gráfico da função é uma reta decrescente que intercepta o eixo $y$ em ordenada positiva.
(B) A função é estritamente crescente e passa necessariamente pela origem $(0, 0)$ do gráfico.
(C) A imagem correspondente ao valor $x = 0$ no domínio da função resulta em um número negativo.
(D) O esboço do gráfico dessa função é uma reta horizontal perfeitamente paralela ao eixo $x$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Tradução das informações:**
  * Função polinomial de grau $1$: $f(x) = ax + b$, cujo gráfico é uma reta.
  * "Coeficiente angular negativo": $a < 0 \implies$ a reta é **decrescente**.
  * "Coeficiente linear positivo": $b > 0 \implies$ quando $x = 0$, $f(0) = b > 0$, ou seja, a reta cruza o eixo vertical $y$ em um ponto acima de zero (**ordenada positiva**).
* **(A) CORRETA:** une exatamente reta decrescente ($a < 0$) com corte positivo no eixo $y$ ($b > 0$).
* **(B) ERRADA:** seria crescente apenas se $a > 0$, e só passaria pela origem $(0, 0)$ se $b = 0$.
* **(C) ERRADA:** a imagem de zero é $f(0) = b$, que é positiva, nunca negativa.
* **(D) ERRADA:** uma reta paralela ao eixo $x$ representa função constante ($a = 0$), não função com $a < 0$.
</details>

---

## EIXO 4: Função de 2º Grau (Quadrática) — Parábola, Vértice, Máximo/Mínimo e Leitura de Gráficos

### 1. De onde nasce a curva em U (Parábola) e o papel visual de $a$, $c$ e $\Delta$

Na função de 1º grau ($ax + b$), a variação de $y$ era constante, formando uma linha reta. Na **função de 2º grau** (ou **função quadrática**):

$$f(x) = ax^2 + bx + c \qquad (\text{com } a \neq 0)$$

o termo $x^2$ faz a saída **acelerar, frear e até inverter o sentido**! Veja isso acontecer diante dos seus olhos preenchendo a tabela de $f(x) = x^2 - 4x + 3$:

| Entrada ($x$) | Cálculo na Fórmula ($y = x^2 - 4x + 3$) | Saída ($y$) | O que a curva está fazendo? |
| :---: | :--- | :---: | :--- |
| **$0$** | $0^2 - 4(0) + 3$ | **$3$** | Começa na altura $3$ (corte no eixo $y$!) |
| **$1$** | $1^2 - 4(1) + 3 = 1 - 4 + 3$ | **$0$** | Caiu para zero $\to$ **1ª raiz** ($1, 0$)! |
| **$2$** | $2^2 - 4(2) + 3 = 4 - 8 + 3$ | **$-1$** | Chegou ao **fundo do poço** ($2, -1$)! |
| **$3$** | $3^2 - 4(3) + 3 = 9 - 12 + 3$ | **$0$** | Voltou a subir e cruzou o zero $\to$ **2ª raiz** ($3, 0$)! |
| **$4$** | $4^2 - 4(4) + 3 = 16 - 16 + 3$ | **$3$** | Espelhou perfeitamente a altura inicial $3$! |

Observe o movimento das saídas: $3 \to 0 \to \mathbf{-1} \to 0 \to 3$. Os valores descem até um ponto extremo ($-1$) e depois **sobem em espelho exato**, desenhando uma curva simétrica em U chamada **Parábola**.

Vamos entender **um coeficiente por vez** no gráfico da parábola:

#### Peça 1: Coeficiente $a$ — A Concavidade (Boca da Parábola) e Existência de Mínimo ou Máximo
A **concavidade** é o lado para o qual a boca do "U" aponta — e quem manda nela é exclusivamente o sinal do coeficiente $a$ (que multiplica $x^2$):
* **Se $a > 0$ (Boca voltada para CIMA — "Sorrindo"):** os dois braços da parábola sobem para o infinito. Como ela desce, bate em um fundo e depois sobe sem parar, a função **não tem ponto máximo** (sobe para sempre), mas **tem um PONTO DE MÍNIMO**!
  * *Exemplo:* Um setor descobre que seu custo diário de operação varia segundo $C(x) = 2x^2 - 24x + 100$. Como $a = +2 > 0$, a parábola abre para cima e existe uma quantidade ideal $x$ que gera o **custo mínimo**.
* **Se $a < 0$ (Boca voltada para BAIXO — "Triste"):** os dois braços caem para o infinito negativo. Como a curva sobe até um pico e depois despenca, a função **não tem ponto mínimo**, mas **tem um PONTO DE MÁXIMO**!
  * *Exemplo:* Um pequeno comércio modela seu lucro por $L(x) = -x^2 + 60x - 500$. Como $a = -1 < 0$, a parábola abre para baixo (formato de montanha) e existe um **lucro máximo** no topo!

#### Peça 2: Coeficiente $c$ — O Corte no Eixo Vertical $y$
Exatamente como o $b$ na reta do 1º grau, se jogarmos $x = 0$ na função de 2º grau:

$$f(0) = a(0)^2 + b(0) + c = \mathbf{c}$$

Portanto, **a parábola SEMPRE atravessa o eixo vertical $y$ no ponto $(0, c)$**!
* *Exemplo:* Em $f(x) = x^2 - 4x + 3$, como $c = +3$, basta olhar para o desenho e saber que a curva corta o eixo vertical exatamente na altura $+3$.

#### Peça 3: As Raízes ($f(x) = 0$) e o Discriminante $\Delta$ no Desenho
Quando igualamos a função a zero ($ax^2 + bx + c = 0$), descobrimos **onde a parábola cruza o eixo horizontal $x$**. Veja o resumo direto:

| Valor de $\Delta = b^2 - 4ac$ | Quantas vezes corta o eixo $x$? | O que acontece visualmente no gráfico? |
| :---: | :---: | :--- |
| **$\Delta > 0$** | **2 pontos distintos** ($x_1$ e $x_2$) | A curva mergulha e volta, atravessando o eixo $x$ em dois lugares. |
| **$\Delta = 0$** | **1 único ponto** ($x_1 = x_2$) | A curva apenas "beija" (tangencia) o eixo $x$ bem no vértice e volta. |
| **$\Delta < 0$** | **Nenhum ponto** ($0$ cortes) | A parábola flutua inteiramente acima ($a > 0$) ou inteiramente abaixo ($a < 0$) do eixo $x$. |

> [!NOTE]
> 🎯 **Pausa Rápida para Fixar 4.1 (Raio-X Instantâneo da Parábola):**  
> Sem desenhar o plano cartesiano completo, responda de cabeça para cada função:
> 1. Em $f(x) = 3x^2 - 6x + 5$: a parábola tem ponto de máximo ou mínimo? Onde corta o eixo $y$?
> 2. Em $g(x) = -2x^2 + 8x$: para onde aponta a concavidade e quais são as duas raízes?
> 3. Em $h(x) = x^2 - 4x + 4$: quantas vezes a curva encosta no eixo horizontal $x$?
>
> <details><summary><b>Ver Resposta Rápida</b></summary>
>
> 1. Como $a = +3 > 0$, abre para cima e tem **ponto de MÍNIMO**; como $c = 5$, corta o eixo $y$ em **$(0, 5)$**.
> 2. Como $a = -2 < 0$, concavidade para **baixo** (máximo); faltando $c$, pomos em evidência: $x(-2x + 8) = 0 \implies$ raízes **$0$ e $4$** (e corta $y$ na origem $(0, 0)$).
> 3. Calculando $\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = \mathbf{0}$: a curva **tangencia ("beija") o eixo $x$ em apenas $1$ único ponto** ($x = 2$).
> </details>

---

### 2. O Coração das Provas da ACCESS: O Vértice $V(x_V, y_V)$ e o Eixo de Simetria

O ponto onde a parábola faz a curva — o fundo do vale (quando $a > 0$) ou o pico da montanha (quando $a < 0$) — chama-se **Vértice** e é indicado pelo par ordenado **$V(x_V, y_V)$**.

#### De onde vem a famosa fórmula $x_V = -\dfrac{b}{2a}$? (Zero decoreba!)
Olhe novamente para a nossa tabela de $f(x) = x^2 - 4x + 3$:
* As raízes onde o gráfico cruza o eixo $x$ foram **$x_1 = 1$** e **$x_2 = 3$**.
* Onde estava o ponto mais baixo ($y = -1$)? Exatamente em **$x = 2$** — ou seja, **bem no meio do caminho entre $1$ e $3$** ($\frac{1 + 3}{2} = 2$)!

Como toda parábola é perfeitamente espelhada à esquerda e à direita de uma linha vertical imaginária chamada **Eixo de Simetria** ($x = x_V$), o valor $x_V$ do vértice é sempre a **média aritmética das duas raízes**! E no Eixo 1 você já descobriu que $x_1 + x_2 = -\frac{b}{a}$. Dividindo essa soma por $2$:

$$x_V = \frac{x_1 + x_2}{2} = \frac{-\frac{b}{a}}{2} = \mathbf{-\frac{b}{2a}}$$

*(E mesmo quando $\Delta < 0$ e não há raízes reais, a simetria da curva continua valendo no mesmo lugar: $x_V = -\frac{b}{2a}$ sempre funciona!)*

#### Como calcular o $y_V$ (a altura máxima ou mínima)? Dois caminhos válidos!
1. **Caminho Prático (Substituição — Recomendado para não errar sinal!):** já calculou quanto vale $x_V$? Basta **jogar o número $x_V$ dentro da própria fórmula da função**: $y_V = f(x_V)$!
2. **Caminho pela Fórmula de $\Delta$:** se você já calculou $\Delta = b^2 - 4ac$ antes, também pode usar:
   $$y_V = \mathbf{-\frac{\Delta}{4a}}$$

#### A Pergunta de Ouro que Evita 80% dos Erros na Prova: $x_V$ ou $y_V$?

Muitos candidatos calculam tudo certo e marcam a alternativa errada porque o enunciado perguntou o $x_V$ e eles responderam o $y_V$ (ou vice-versa). Olhe para o significado físico de cada coordenada:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>TRADUÇÃO DIRETA: O QUE O ENUNCIADO PEDE ($x_V$ OU $y_V$)?</span>
    </div>
    <span class="edu-comp-badge">Pegadinha Clássica ACCESS</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">↔️</span>
        <span class="card-badge">Abscissa do Vértice</span>
      </div>
      <h4 class="card-title">$x_V = -\dfrac{b}{2a}$ (A CAUSA / A ENTRADA IDEAL)</h4>
      <p class="card-text">Responde a perguntas do tipo: <em>"<strong>Quantas unidades</strong> devem ser vendidas para maximizar o lucro?"</em>, <em>"Em <strong>qual instante $t$</strong> atinge a altura máxima?"</em> ou <em>"<strong>Qual preço</strong> minimiza o custo?"</em>.</p>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">↕️</span>
        <span class="card-badge">Ordenada do Vértice</span>
      </div>
      <h4 class="card-title">$y_V = f(x_V) = -\dfrac{\Delta}{4a}$ (O RESULTADO EXTREMO)</h4>
      <p class="card-text">Responde a perguntas do tipo: <em>"<strong>Qual é o lucro máximo</strong> obtido?"</em>, <em>"<strong>Qual é a altura máxima</strong> atingida pelo projétil?"</em> ou <em>"<strong>Qual é o menor custo</strong> possível em reais?"</em>.</p>
    </div>
  </div>
</div>

#### Exemplo Completo Guiado (Desmontando Tudo do Zero)

Uma papelaria estima seu lucro diário $L(x)$ (em reais), ao vender $x$ cadernos, pela função:

$$L(x) = -x^2 + 20x - 64$$

Vamos extrair **todas as informações** dessa função passo a passo:
1. **Concavidade e tipo de extremo:** $a = -1 < 0 \implies$ parábola abre para **baixo** ($\cap$), logo possui um **Lucro MÁXIMO**!
2. **Ponto onde corta o eixo $y$:** quando não vende nenhum caderno ($x = 0$), $L(0) = c = \mathbf{-64}$ (prejuízo fixo de $\text{R\$ } 64{,}00$ antes de vender o primeiro caderno). Corte em $(0, -64)$.
3. **Raízes (onde o lucro zera — empate sem prejuízo nem lucro):**  
   $-x^2 + 20x - 64 = 0 \xrightarrow{\times(-1)} x^2 - 20x + 64 = 0$.  
   Por Soma ($S = 20$) e Produto ($P = 64$), achamos **$x_1 = 4$** e **$x_2 = 16$** ($4 + 16 = 20$ e $4 \cdot 16 = 64$ ✓).  
   *(Interpretação real: entre $4$ e $16$ cadernos, o lucro é positivo!)*
4. **Quantidade que maximiza o lucro ($x_V$):**
   $$x_V = -\frac{b}{2a} = -\frac{20}{2 \cdot (-1)} = -\frac{20}{-2} = \mathbf{10\text{ cadernos}}$$
   *(Conferência pela simetria das raízes: a metade exata entre $4$ e $16$ é $\frac{4 + 16}{2} = \frac{20}{2} = 10$ ✓!)*
5. **Qual é esse lucro máximo em reais ($y_V$)?**
   * *Pela substituição $y_V = L(x_V)$ (substituindo $x = 10$):*
     $$L(10) = -(10)^2 + 20(10) - 64 = -100 + 200 - 64 = \mathbf{\text{R\$ } 36{,}00}$$
     *(Cuidado enorme com `-(10)²`! O sinal de menos fica FORA do quadrado: vale $-100$, e NÃO $+100$!)*
   * *Conferência por $-\frac{\Delta}{4a}$:* $\Delta = 20^2 - 4(-1)(-64) = 400 - 256 = 144$, logo $y_V = -\frac{144}{4(-1)} = \frac{144}{4} = \mathbf{36}$ ✓!

---

### 3. Leitura Reversa de Gráficos (Do Desenho para os Sinais de $a, b, c$ e $\Delta$)

E se a questão mostrar uma parábola desenhada sem nenhuma fórmula e perguntar os sinais de $a, b, c$ e $\Delta$? Você lê em 10 segundos seguindo estes 4 testes visuais:
1. **Sinal de $a$:** olhe para a boca. Aberta para cima $\to a > 0$. Aberta para baixo $\to a < 0$.
2. **Sinal de $c$:** olhe onde a curva atravessa o eixo vertical $y$. Acima de zero $\to c > 0$. Na origem $(0, 0) \to c = 0$. Abaixo de zero $\to c < 0$.
3. **Sinal de $\Delta$:** conte quantos cruzamentos existem no eixo horizontal $x$. Dois $\to \Delta > 0$. Um toque só $\to \Delta = 0$. Nenhum $\to \Delta < 0$.
4. **Sinal de $b$ (macete visual infalível da subida/descida em $y$):** ponha o dedo exatamente no ponto onde a parábola corta o eixo vertical $y$ e acompanhe a curva para a direita:
   * Se a curva estiver **SUBINDO** ao passar pelo eixo $y \implies \mathbf{b > 0}$.
   * Se a curva estiver **DESCENDO** ao passar pelo eixo $y \implies \mathbf{b < 0}$.
   * Se o vértice estiver bem em cima do eixo $y$ (nem subindo nem descendo) $\implies \mathbf{b = 0}$.

*(Por quê? Porque $x_V = -\frac{b}{2a}$! Quando $a > 0$ e a curva desce ao passar por $x = 0$, o fundo do U fica à direita [$x_V > 0$], o que obriga $b$ e $a$ a terem sinais opostos [$b < 0$]. A inclinação no corte de $y$ é exatamente $b$!)*

<svg viewBox="0 0 760 330" class="w-full h-auto" role="img" aria-label="Anatomia completa da parábola na função de 2º grau comparando ponto de mínimo e ponto de máximo com raízes, eixo de simetria e vértice">
  <rect x="8" y="8" width="744" height="314" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

  <text x="380" y="34" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold" font-family="sans-serif">ANATOMIA COMPLETA DA PARÁBOLA:  f(x) = ax² + bx + c</text>

  <!-- Esquerda: Mínimo (a > 0) -->
  <rect x="24" y="48" width="346" height="258" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.4"/>
  <text x="197" y="70" text-anchor="middle" fill="#6ee7b7" font-size="11.5" font-weight="bold" font-family="sans-serif">a &gt; 0: CONCAVIDADE PARA CIMA (PONTO DE MÍNIMO)</text>

  <!-- Eixos esq -->
  <line x1="48" y1="204" x2="342" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="342,200 350,204 342,208" fill="#94a3b8"/>
  <text x="342" y="219" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <line x1="100" y1="286" x2="100" y2="88" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="96,88 100,80 104,88" fill="#94a3b8"/>
  <text x="108" y="92" fill="#94a3b8" font-size="10.5" font-family="sans-serif">y</text>

  <!-- Eixo de simetria esq -->
  <line x1="210" y1="90" x2="210" y2="262" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="210" y="274" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold" font-family="sans-serif">Eixo de Simetria: xᵥ = −b/(2a)</text>

  <!-- Parábola esq: f(x)=x²-4x+3 mapeada: x=0->100,y=144; x=1->155,y=204; x=2->210,y=240; x=3->265,y=204; x=4->320,y=144 -->
  <path d="M 85 112 Q 210 340 335 112" fill="none" stroke="#34d399" stroke-width="3"/>

  <!-- Pontos esq -->
  <circle cx="100" cy="146" r="4.5" fill="#38bdf8"/>
  <text x="64" y="140" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">(0, c)</text>
  <circle cx="155" cy="204" r="4.5" fill="#f59e0b"/>
  <text x="143" y="196" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">x₁</text>
  <circle cx="265" cy="204" r="4.5" fill="#f59e0b"/>
  <text x="274" y="196" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">x₂</text>
  <circle cx="210" cy="226" r="5" fill="#ec4899"/>
  <text x="220" y="242" fill="#f9a8d4" font-size="10" font-weight="bold" font-family="sans-serif">V(xᵥ, yᵥ) MÍNIMO</text>
  <text x="197" y="294" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="sans-serif">No eixo y cruza descendo → b &lt; 0   |   c &gt; 0</text>

  <!-- Direita: Máximo (a < 0) -->
  <rect x="390" y="48" width="346" height="258" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.4"/>
  <text x="563" y="70" text-anchor="middle" fill="#7dd3fc" font-size="11.5" font-weight="bold" font-family="sans-serif">a &lt; 0: CONCAVIDADE PARA BAIXO (PONTO DE MÁXIMO)</text>

  <!-- Eixos dir -->
  <line x1="414" y1="224" x2="708" y2="224" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="708,220 716,224 708,228" fill="#94a3b8"/>
  <text x="708" y="239" fill="#94a3b8" font-size="10.5" font-family="sans-serif">x</text>

  <line x1="464" y1="286" x2="464" y2="88" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="460,88 464,80 468,88" fill="#94a3b8"/>
  <text x="472" y="92" fill="#94a3b8" font-size="10.5" font-family="sans-serif">y</text>

  <!-- Eixo de simetria dir -->
  <line x1="578" y1="90" x2="578" y2="262" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="578" y="274" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold" font-family="sans-serif">xᵥ = (x₁ + x₂) / 2</text>

  <!-- Parábola dir: abre para baixo -->
  <path d="M 442 260 Q 578 16 714 260" fill="none" stroke="#38bdf8" stroke-width="3"/>

  <circle cx="464" cy="236" r="4.5" fill="#38bdf8"/>
  <text x="434" y="240" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">(0, c)</text>
  <circle cx="474" cy="224" r="4.5" fill="#f59e0b"/>
  <text x="476" y="216" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">x₁</text>
  <circle cx="682" cy="224" r="4.5" fill="#f59e0b"/>
  <text x="690" y="216" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">x₂</text>
  <circle cx="578" cy="138" r="5" fill="#ec4899"/>
  <text x="578" y="124" text-anchor="middle" fill="#f9a8d4" font-size="10" font-weight="bold" font-family="sans-serif">V(xᵥ, yᵥ) MÁXIMO</text>
  <text x="563" y="294" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="sans-serif">No eixo y cruza subindo → b &gt; 0   |   c &lt; 0</text>
</svg>

> [!TIP]
> **Síntese Feynman de 3 Linhas (Eixo 4 — Função de 2º Grau):**
> 1. Toda função quadrática $f(x) = ax^2 + bx + c$ desenha uma **parábola**: o sinal de **$a$** define a concavidade ($a > 0$ abre para cima e tem **mínimo**; $a < 0$ abre para baixo e tem **máximo**), **$c$** é o corte no eixo $y$ em $(0, c)$, e **$\Delta$** diz em quantos pontos a curva corta o eixo $x$.
> 2. O vértice $V(x_V, y_V)$ fica sempre sobre o eixo de simetria, na metade entre as raízes: calcula-se **$x_V = -\frac{b}{2a}$** e obtém-se **$y_V$** substituindo $x_V$ na função ($f(x_V)$) ou fazendo **$-\frac{\Delta}{4a}$**.
> 3. Na prova, leia o comando com lupa: perguntas sobre **"quantas unidades / qual instante / qual preço"** pedem **$x_V$**; perguntas sobre **"qual o lucro máximo / menor custo / altura máxima"** pedem **$y_V$**.

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 4 (Parábola e Vértice na Unha)
Faça estes 4 treinos rápidos no caderno antes de ir aos checkpoints e à bateria final:

1. **Vértice de Mínimo:** Encontre as coordenadas do vértice $V(x_V, y_V)$ de $f(x) = x^2 - 8x + 12$ e diga se é mínimo ou máximo.
2. **Altura Máxima ($x_V$ vs. $y_V$):** A altura $h(t)$ (em metros) de um jato d'água de jardim municipal após $t$ segundos segue $h(t) = -5t^2 + 20t$. Em que instante ele atinge o topo e qual é a altura máxima?
3. **Simetria das Raízes:** Uma parábola corta o eixo $x$ nos pontos $(-2, 0)$ e $(8, 0)$. Sem saber os coeficientes $a, b, c$, qual é a reta do seu eixo de simetria ($x_V$)?
4. **Leitura Reversa Pura:** Uma parábola no gráfico abre a boca para baixo, **não toca** o eixo horizontal $x$ e atravessa o eixo vertical $y$ descendo abaixo da origem. Quais são os sinais ($> 0$ ou $< 0$) de $a$, $b$, $c$ e $\Delta$?

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 4</b></summary>

* **1. Vértice de $f(x) = x^2 - 8x + 12$ ($a = 1 > 0 \implies$ MÍNIMO):**
  - $x_V = -\dfrac{b}{2a} = -\dfrac{-8}{2 \cdot 1} = \mathbf{4}$.
  - $y_V = f(4) = 4^2 - 8(4) + 12 = 16 - 32 + 12 = \mathbf{-4}$.
  - Ponto de mínimo: **$V(4, -4)$**.

* **2. Altura máxima de $h(t) = -5t^2 + 20t$ ($a = -5 < 0 \implies$ MÁXIMO):**
  - Instante do topo ($t_V$): $t_V = -\dfrac{20}{2 \cdot (-5)} = -\dfrac{20}{-10} = \mathbf{2\text{ segundos}}$.
  - Altura máxima ($h_V = h(2)$): $h(2) = -5(2)^2 + 20(2) = -20 + 40 = \mathbf{20\text{ metros}}$.

* **3. Eixo de simetria pelas raízes $-2$ e $8$:**
  - O vértice fica na média aritmética exata das raízes:
    $$x_V = \frac{-2 + 8}{2} = \frac{6}{2} = \mathbf{3} \quad (\text{reta } x = 3)$$

* **4. Leitura reversa dos sinais ($a, b, c, \Delta$):**
  - Boca para baixo $\implies \mathbf{a < 0}$.
  - Não toca o eixo $x$ $\implies \mathbf{\Delta < 0}$.
  - Corta o eixo $y$ abaixo da origem $\implies \mathbf{c < 0}$.
  - Passa pelo eixo $y$ **descendo** $\implies \mathbf{b < 0}$ *(confira: como $a < 0$ e $b < 0$, $x_V = -\frac{b}{2a} < 0$, ou seja, o topo ficou à esquerda do eixo $y$, coerente com a descida ao cruzar $y$!)*.
</details>

---

### Questão 10
**Banca:** Adaptada de FUNDATEC (`prova-auto/23.pdf`, Q32) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Ao analisar o comportamento de uma curva de custos operacionais modelada pela função de 2º grau $f(x) = x^2 + 10x + 12$, a servidora Carla precisa descrever as características do gráfico e localizar suas coordenadas extremas. Considerando a lei da função apresentada, é CORRETO afirmar que o gráfico de $f(x)$ é uma:
(A) Reta crescente que corta o eixo vertical $y$ na ordenada positiva igual a $12$.
(B) Parábola com concavidade voltada para baixo e seu ponto de máximo é $(-5, -13)$.
(C) Parábola com concavidade voltada para cima e seu ponto de mínimo é $(5, 87)$.
(D) Parábola com concavidade voltada para cima e seu ponto de mínimo é $(-5, -13)$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**
* **Passo 1 — Formato e concavidade:** Como é uma função do 2º grau, o gráfico é uma **parábola** (nunca uma reta). Como $a = +1 > 0$, a concavidade é voltada para **cima**, possuindo **ponto de mínimo**.
* **Passo 2 — Calcular $x_V$:**
  $$x_V = -\frac{b}{2a} = -\frac{10}{2 \cdot 1} = \mathbf{-5}$$
* **Passo 3 — Calcular $y_V$ substituindo $x = -5$ em $f(x)$:**
  $$y_V = f(-5) = (-5)^2 + 10(-5) + 12 = 25 - 50 + 12 = \mathbf{-13}$$
  Logo, o ponto de mínimo é **$V(-5, -13)$**.
* **(D) CORRETA:** aponta concavidade para cima e ponto de mínimo $(-5, -13)$.
* **(A) ERRADA:** confunde função de 2º grau (parábola) com função de 1º grau (reta).
* **(B) ERRADA:** afirma que a concavidade é para baixo e chama o vértice de máximo, mas $a = +1 > 0$.
* **(C) ERRADA:** esqueceu o sinal de menos da fórmula $x_V = -\frac{b}{2a}$, encontrando $+5$ em vez de $-5$.
</details>

### Questão 11
**Banca:** Checkpoint do Eixo 4 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

Uma gráfica municipal estimou que o ganho operacional mensal $G(x)$, em milhares de reais, na venda de $x$ lotes de impressões personalizadas é modelado pela função quadrática $G(x) = -2x^2 + 40x - 150$. A direção deseja conhecer quantos lotes devem ser produzidos para maximizar esse ganho e qual é o ganho máximo mensal obtido. Assinale a alternativa CORRETA com esses dois valores, respectivamente:
(A) $10$ lotes geram um ganho máximo de $\text{R\$ } 250{,}00$ mil.
(B) $10$ lotes geram um ganho máximo de $\text{R\$ } 50{,}00$ mil.
(C) $20$ lotes geram um ganho máximo de $\text{R\$ } 50{,}00$ mil.
(D) $50$ lotes geram um ganho máximo de $\text{R\$ } 10{,}00$ mil.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Passo 1 — Identificar coeficientes:** $a = -2$, $b = 40$, $c = -150$. Como $a < 0$, há máximo!
* **Passo 2 — Quantidade que maximiza ($x_V$):**
  $$x_V = -\frac{b}{2a} = -\frac{40}{2 \cdot (-2)} = -\frac{40}{-4} = \mathbf{10\text{ lotes}}$$
* **Passo 3 — Ganho máximo ($y_V = G(10)$):**
  $$G(10) = -2(10)^2 + 40(10) - 150 = -2(100) + 400 - 150 = -200 + 400 - 150 = \mathbf{50\text{ mil reais}}$$
* **(B) CORRETA:** indica $x_V = 10$ lotes e $y_V = 50$ mil reais.
* **(A) ERRADA:** errou o sinal de $-2(10)^2$, somando $+200 + 200$ ou esquecendo de subtrair $150$.
* **(C) ERRADA:** esqueceu de multiplicar $a$ por $2$ no denominador de $x_V = -\frac{b}{2a}$ ($40 \div 2 = 20$).
* **(D) ERRADA:** inverteu completamente os papéis entre a entrada ($x_V$) e a saída máxima ($y_V$).
</details>

### Questão 12
**Banca:** Checkpoint do Eixo 4 (Padrão Instituto ACCESS) | **Cargo:** Oficial Administrativo

O técnico Diego registrou em uma tabela cinco pares ordenados $(x, y)$ pertencentes ao gráfico de uma função quadrática $f(x) = ax^2 + bx + c$:

| $x$ | $0$ | $1$ | $3$ | $5$ | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **$y = f(x)$** | $5$ | $0$ | $-4$ | $0$ | $5$ |

Observando a simetria dos valores de $y$ na tabela acima, assinale a alternativa CORRETA sobre os elementos gráficos dessa parábola:
(A) A parábola possui concavidade voltada para baixo, raízes $1$ e $5$ e ponto de máximo em $(3, -4)$.
(B) A parábola corta o eixo $y$ no ponto $(5, 0)$, não possui raízes reais e tem $\Delta$ estritamente negativo.
(C) A parábola corta o eixo $y$ em $(0, 5)$, tem raízes $x_1 = 1$ e $x_2 = 5$, eixo de simetria $x = 3$ e valor mínimo $-4$.
(D) A parábola tem coeficiente linear $c = -4$, coeficiente $a$ negativo e valor máximo igual a $5$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
* **Leitura direta da tabela (Fórmula $\leftrightarrow$ Tabela $\leftrightarrow$ Gráfico):**
  * **Corte no eixo vertical $y$:** quando $x = 0$, $y = 5 \implies$ ponto **$(0, 5)$**, logo **$c = 5$**.
  * **Raízes (onde $y = 0$):** ocorre em **$x_1 = 1$** e **$x_2 = 5$**. Logo existem duas raízes reais e distintas ($\Delta > 0$).
  * **Vértice e concavidade:** os valores caem de $5 \to 0 \to -4$ e depois sobem de $-4 \to 0 \to 5$. Logo a parábola abre para **cima** ($a > 0$), seu ponto de **mínimo** está bem no meio das raízes em $x_V = \frac{1 + 5}{2} = \mathbf{3}$, onde $y_V = \mathbf{-4}$.
  * *(Conferência: a fórmula exata dessa função é $f(x) = x^2 - 6x + 5$.)*
* **(C) CORRETA:** lê com exatidão o corte em $y$, as duas raízes, o eixo de simetria e o valor mínimo.
* **(A) ERRADA:** inverteu a concavidade (disse "para baixo" e "máximo", mas o gráfico desce até $-4$ e volta a subir até $+5$).
* **(B) ERRADA:** inverteu as coordenadas $(0, 5)$ para $(5, 0)$ e negou as raízes visíveis na própria tabela ($y = 0$ em $x = 1$ e $x = 5$).
* **(D) ERRADA:** confundiu $y_V = -4$ com $c$ e disse que $5$ é o valor máximo (a parábola continua subindo para o infinito!).
</details>

---

## Bateria de 10 Questões Reais e Adaptadas no Padrão Instituto ACCESS

Esta bateria reúne **4 questões oficiais autênticas do Instituto ACCESS** (mantidas na íntegra, com gabaritos definitivos conferidos) e **6 questões adaptadas/inéditas** no estilo rigoroso da banca para você treinar leitura de enunciado, conta passo a passo e simetria de prova.

### Questão 13
**Banca:** Instituto ACCESS (Prefeitura Municipal de Rodeiro/MG — 2025 — Assistente Administrativo — Q12)

Um técnico verifica que o consumo mensal de energia de um setor varia linearmente com a produção. Para $200$ unidades produzidas, o consumo é de $480\text{ kWh}$; para $350$ unidades, o consumo atinge $780\text{ kWh}$. Com base nessa relação linear, determine o consumo para $250$ unidades.

I. A taxa de variação entre produção e consumo é de $2\text{ kWh}$ por unidade.  
II. O consumo para $250$ unidades é exatamente $580\text{ kWh}$.  
III. A função obtida é crescente.  
IV. O consumo para $100$ unidades seria $180\text{ kWh}$.  

Está CORRETO o que se afirma em:
(A) I, II e III, apenas.
(B) I e III, apenas.
(C) II e IV, apenas.
(D) III e IV, apenas.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Passo 1 — Descobrir a taxa de variação ($a$) da função de 1º grau $C(x) = ax + b$:**
  $$a = \frac{780 - 480}{350 - 200} = \frac{300}{150} = \mathbf{2\text{ kWh por unidade}}$$
  Logo, **I é VERDADEIRA** e, como $a = 2 > 0$, a função é crescente (**III é VERDADEIRA**).
* **Passo 2 — Descobrir a taxa fixa ($b$):**
  Usando o ponto $(200, 480)$:
  $$480 = 2 \cdot 200 + b \implies 480 = 400 + b \implies b = \mathbf{80}$$
  Portanto, a fórmula exata é **$C(x) = 2x + 80$**.
* **Passo 3 — Testar os itens II e IV:**
  * **Item II ($x = 250$):** $C(250) = 2 \cdot 250 + 80 = 500 + 80 = \mathbf{580\text{ kWh}}$ $\to$ **VERDADEIRO!**
  * **Item IV ($x = 100$):** $C(100) = 2 \cdot 100 + 80 = 200 + 80 = \mathbf{280\text{ kWh}} \neq 180\text{ kWh}$ $\to$ **FALSO!**
* Logo, apenas **I, II e III** estão corretas (**Alternativa A**).
</details>

---

### Questão 14
**Banca:** Instituto ACCESS (Prefeitura Municipal de Rodeiro/MG — 2025 — Assistente Administrativo — Q14)

Um pesquisador analisou a relação entre a temperatura ($x$) e a dilatação de uma haste metálica ($y$). Dois pontos foram medidos: a $40^\circ\text{C}$ a haste dilatou $3{,}2\text{ mm}$, e a $70^\circ\text{C}$ a dilatação atingiu $5{,}6\text{ mm}$. Determine a dilatação estimada para $60^\circ\text{C}$ assumindo comportamento linear.
(A) A dilatação estimada é de $5{,}2\text{ mm}$.
(B) A dilatação estimada é de $4{,}8\text{ mm}$.
(C) A dilatação estimada é de $5{,}0\text{ mm}$.
(D) A dilatação estimada é de $4{,}6\text{ mm}$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Passo 1 — Taxa de variação linear ($a = \frac{\Delta y}{\Delta x}$):**
  * A temperatura subiu de $40^\circ\text{C}$ para $70^\circ\text{C}$ ($\Delta x = 70 - 40 = 30^\circ\text{C}$).
  * A dilatação subiu de $3{,}2\text{ mm}$ para $5{,}6\text{ mm}$ ($\Delta y = 5{,}6 - 3{,}2 = 2{,}4\text{ mm}$).
  * Logo, a cada $1^\circ\text{C}$, a haste dilata:
    $$a = \frac{2{,}4}{30} = \frac{24}{300} = \mathbf{0{,}08\text{ mm/}^\circ\text{C}}$$
* **Passo 2 — Calcular a dilatação para $60^\circ\text{C}$:**
  * Partindo dos $40^\circ\text{C}$ (onde a dilatação já era $3{,}2\text{ mm}$), queremos subir mais $60 - 40 = 20^\circ\text{C}$:
    $$y(60) = 3{,}2 + 20 \cdot 0{,}08 = 3{,}2 + 1{,}6 = \mathbf{4{,}8\text{ mm}}$$
  * *(Ou montando $y = 0{,}08x + b$: $3{,}2 = 0{,}08(40) + b \implies b = 0 \implies y(x) = 0{,}08x \implies y(60) = 0{,}08 \cdot 60 = 4{,}8\text{ mm}$.)*
* **(B) CORRETA:** $4{,}8\text{ mm}$.
* **(A), (C) e (D) ERRADAS:** resultam de erro na razão $\frac{2{,}4}{30}$ ou de média aritmética indevida entre $3{,}2$ e $5{,}6$.
</details>

---

### Questão 15
**Banca:** Instituto ACCESS (Prefeitura Municipal de Promissão/SP — 2026 — Escriturário A — Q17)

Durante a análise financeira de um pequeno comércio, um consultor determinou que o lucro mensal $L(x)$, em reais, segue a função $f(x) = -x^2 + 60x - 500$, em que $x$ representa a quantidade de unidades vendidas. Com base nessa função quadrática, avalie as seguintes afirmações:

I. A quantidade de unidades que maximiza o lucro mensal é igual a $30$ unidades.  
II. O valor do lucro máximo mensal que a empresa pode atingir é de $\text{R\$ } 500{,}00$.  
III. O lucro é nulo quando a empresa vende exatamente $10$ ou $50$ unidades.  
IV. A representação gráfica dessa função é uma parábola com concavidade voltada para cima.  

Está CORRETO o que se afirma em:
(A) II e IV, apenas.
(B) I, II e III, apenas.
(C) II, III e IV, apenas.
(D) I e III, apenas.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**
* **Análise item por item em $f(x) = -x^2 + 60x - 500$ ($a = -1$, $b = 60$, $c = -500$):**
  * **Item IV — FALSO:** como $a = -1 < 0$, a concavidade da parábola é voltada para **baixo** (formato de montanha), e não para cima.
  * **Item I — VERDADEIRO:** a quantidade que maximiza o lucro é a abscissa do vértice ($x_V$):
    $$x_V = -\frac{b}{2a} = -\frac{60}{2 \cdot (-1)} = -\frac{60}{-2} = \mathbf{30\text{ unidades}}$$
  * **Item II — FALSO:** o lucro máximo é $y_V = f(30)$:
    $$f(30) = -(30)^2 + 60 \cdot 30 - 500 = -900 + 1800 - 500 = \mathbf{\text{R\$ } 400{,}00} \neq \text{R\$ } 500{,}00$$
  * **Item III — VERDADEIRO:** o lucro é nulo quando $f(x) = 0$:
    $$-x^2 + 60x - 500 = 0 \xrightarrow{\times(-1)} x^2 - 60x + 500 = 0$$
    Por Soma ($S = 60$) e Produto ($P = 500$): $10 + 50 = 60$ e $10 \cdot 50 = 500 \implies$ raízes **$10$** e **$50$** unidades!
* Portanto, apenas **I e III** estão corretas (**Alternativa D**).
</details>

---

### Questão 16
**Banca:** Instituto ACCESS (Universidade Federal de Jataí/GO — 2023 — Assistente em Administração — Q15)

Um automóvel move-se conforme a função $f : \mathbb{R} \to \mathbb{R}$ definida por $f(t) = 20t^2 + 50t + 500$, na qual $t$ é dado em minutos e a distância percorrida $f(t)$ é dada em metros. A autonomia desse automóvel utilizando gasolina é de $1$ litro a cada $10\text{ km}$.

Quantos litros de gasolina ele irá consumir rodando por $30$ minutos?
(A) $1{,}5$.
(B) $2{,}0$.
(C) $2{,}2$.
(D) $2{,}5$.
(E) $3{,}0$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Passo 1 — Calcular a distância dada pela função em $t = 30\text{ minutos}$:**
  $$f(30) = 20 \cdot (30)^2 + 50 \cdot (30) + 500$$
  $$f(30) = 20 \cdot 900 + 1.500 + 500$$
  $$f(30) = 18.000 + 1.500 + 500 = \mathbf{20.000\text{ metros}}$$
* **Passo 2 — Converter metros para quilômetros ($1\text{ km} = 1.000\text{ m}$):**
  $$20.000\text{ m} = \frac{20.000}{1.000} = \mathbf{20\text{ km}}$$
* **Passo 3 — Calcular o consumo com autonomia de $1\text{ litro}$ por $10\text{ km}$:**
  $$\text{Consumo} = \frac{20\text{ km}}{10\text{ km/L}} = \mathbf{2{,}0\text{ litros}}$$
  *(Observação de prova real: na UFJ/2023, o gabarito definitivo retificado confirmou a **letra B** como resposta oficial da banca, considerando diretamente o valor $f(30) = 20\text{ km}$.)*
</details>

---

### Questão 17
**Banca:** Adaptada de FUNDATEC (`prova-auto/87.pdf`, Q27) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Durante a revisão de cálculos de um contrato de manutenção, o analista Lucas precisou calcular rapidamente o valor resultante da diferença entre a soma ($S = x_1 + x_2$) e o produto ($P = x_1 \cdot x_2$) das raízes reais da equação do segundo grau $x^2 + 12x - 13 = 0$, ou seja, o valor da expressão $(S - P)$. Nessas condições, o resultado CORRETO encontrado por Lucas é igual a:
(A) $-25$, pois somam-se os dois números com sinais mantidos negativos.
(B) $-1$, pois o produto negativo foi somado ao valor da soma das raízes.
(C) $+1$, pois ao subtrair um produto negativo ocorre inversão de sinal.
(D) $+25$, pois ambos os coeficientes positivos geram soma e produto altos.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
* **Passo 1 — Extrair Soma ($S$) e Produto ($P$) de $x^2 + 12x - 13 = 0$ ($a = 1, b = 12, c = -13$):**
  * Soma: $S = -\dfrac{b}{a} = -\dfrac{12}{1} = \mathbf{-12}$.
  * Produto: $P = \dfrac{c}{a} = \dfrac{-13}{1} = \mathbf{-13}$.
  *(Conferência: as raízes são $-13$ e $+1$, porque $(-13) + 1 = -12$ e $(-13) \cdot 1 = -13$.)*
* **Passo 2 — Calcular a diferença $(S - P)$ com atenção absoluta aos parênteses:**
  $$S - P = (-12) - (-13) = -12 + 13 = \mathbf{+1}$$
* **(C) CORRETA:** respeitou o jogo de sinais $-(-13) = +13$, obtendo $+1$.
* **(A) ERRADA:** calculou $-12 + (-13) = -25$, somando em vez de subtrair $P$.
* **(B) ERRADA:** fez $P - S = -13 - (-12) = -1$, invertendo a ordem pedida no enunciado.
* **(D) ERRADA:** ignorou os sinais negativos de $S$ e $P$.
</details>

---

### Questão 18
**Banca:** Adaptada de COTEC/FADENOR (`prova-auto/53.pdf`, Q12) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Fábio trabalha com manutenção e limpeza de piscinas e cobra atualmente $\text{R\$ } 150{,}00$ por mês de cada um de seus $100$ clientes fixos. Levantamentos mostram uma relação linear entre preço e clientela: Fábio perderia exatamente $4$ clientes a cada $\text{R\$ } 5{,}00$ que aumentasse na mensalidade (e ganharia $4$ clientes a cada $\text{R\$ } 5{,}00$ de desconto concedido). Com base nessa função quadrática de receita, qual deve ser o valor mensal cobrado por cliente para **maximizar** o total arrecadado por Fábio?
(A) $\text{R\$ } 137{,}50$ mensais.
(B) $\text{R\$ } 145{,}00$ mensais.
(C) $\text{R\$ } 155{,}00$ mensais.
(D) $\text{R\$ } 160{,}00$ mensais.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Passo 1 — Montar a função Receita $R(n)$ em função do número $n$ de variações de $\text{R\$ } 5{,}00$ no preço:**
  * Preço novo por cliente: $(150 + 5n)$
  * Quantidade nova de clientes: $(100 - 4n)$
  * Receita total $= \text{Preço} \times \text{Clientes}$:
    $$R(n) = (150 + 5n)(100 - 4n)$$
    Aplicando o chuveirinho:
    $$R(n) = 15.000 - 600n + 500n - 20n^2$$
    $$R(n) = -20n^2 - 100n + 15.000$$
* **Passo 2 — Calcular o vértice $n_V$ ($a = -20$, $b = -100$):**
  $$n_V = -\frac{b}{2a} = -\frac{-100}{2 \cdot (-20)} = -\frac{100}{40} = \mathbf{-2{,}5}$$
* **Passo 3 — Interpretar o sinal negativo de $n_V = -2{,}5$:**
  Como $n_V$ deu **negativo**, a receita máxima ocorre dando **$2{,}5$ passos de redução** de $\text{R\$ } 5{,}00$ (em vez de aumentar!):
  $$\text{Mensalidade ótima} = 150 + 5 \cdot (-2{,}5) = 150 - 12{,}50 = \mathbf{\text{R\$ } 137{,}50}$$
  *(Conferência real: hoje $150 \times 100 = \text{R\$ } 15.000$; a $\text{R\$ } 137{,}50$ ele ganha $10$ clientes e vai para $110$ clientes: $137{,}50 \times 110 = \mathbf{\text{R\$ } 15.125{,}00}$, maior que qualquer outra opção!)*
* **(A) CORRETA:** $\text{R\$ } 137{,}50$.
* **(B), (C) e (D) ERRADAS:** resultam de errar o sinal de $n_V$ (aumentando o preço para $\text{R\$ } 162{,}50$ ou $\text{R\$ } 160{,}00$) ou de não testar o desconto.
</details>

---

### Questão 19
**Banca:** Adaptada de FUNDATEC (`prova-auto/56.pdf`, Q19) para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Considere a função real quadrática definida por $f(x) = 2x^2 - 3x + 5$. Em relação ao gráfico dessa função no plano cartesiano, avalie as assertivas a seguir e classifique-as como **V** (verdadeira) ou **F** (falsa):

(__) O vértice da parábola está localizado exatamente no ponto de coordenadas $(3, -4)$.  
(__) O eixo de simetria vertical da parábola corresponde exatamente à reta $x = \dfrac{3}{4}$.  
(__) O valor máximo atingido por essa função real é exatamente igual a $5$.  

A sequência CORRETA de preenchimento dos parênteses, de cima para baixo, é:
(A) F – F – V.
(B) F – V – F.
(C) V – F – F.
(D) V – V – F.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**
* **Análise detalhada de $f(x) = 2x^2 - 3x + 5$ ($a = 2, b = -3, c = 5$):**
  * **Assertiva 1 — FALSA (F):** Calculando o $x$ do vértice (eixo de simetria):
    $$x_V = -\frac{b}{2a} = -\frac{-3}{2 \cdot 2} = \mathbf{\frac{3}{4}}$$
    Como $x_V = \frac{3}{4} \neq 3$, o vértice jamais poderia estar em $(3, -4)$! *(E $y_V = 2(\frac{3}{4})^2 - 3(\frac{3}{4}) + 5 = \frac{18}{16} - \frac{9}{4} + 5 = \frac{9}{8} - \frac{18}{8} + \frac{40}{8} = \frac{31}{8} = 3{,}875$.)*
  * **Assertiva 2 — VERDADEIRA (V):** O eixo de simetria vertical sempre passa pela abscissa do vértice: **$x = x_V = \frac{3}{4}$**.
  * **Assertiva 3 — FALSA (F):** Primeiro, como $a = +2 > 0$, a concavidade é voltada para **cima**, portanto a função **não possui valor máximo** (e sim valor mínimo!); além disso, $5$ é apenas o corte no eixo $y$ ($c = 5$), não o extremo da função.
* Portanto, a sequência correta é **F – V – F** (**Alternativa B**).
</details>

---

### Questão 20
**Banca:** Inédita no Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

O setor de arquivo da Prefeitura Municipal de Birigui ocupa atualmente uma sala retangular com $6\text{ metros}$ de largura por $10\text{ metros}$ de comprimento. Para comportar novas estantes deslizantes, o projeto de reforma prevê acrescentar exatamente a mesma quantidade de metros ($x$) tanto na largura quanto no comprimento da sala, fazendo com que a área total após a ampliação passe a ser de $96\text{ m}^2$.

Nessas condições, qual deve ser o acréscimo $x$ em cada dimensão da sala?
(A) $x = 1\text{ metro}$, elevando as medidas para $7\text{ m} \times 11\text{ m}$.
(B) $x = 18\text{ metros}$, obtido ao ignorar a restrição geométrica.
(C) $x = 2\text{ metros}$, elevando as medidas para $8\text{ m} \times 12\text{ m}$.
(D) $x = 4\text{ metros}$, elevando as medidas para $10\text{ m} \times 14\text{ m}$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**
* **Passo 1 — Traduzir a ampliação para equação de 2º grau:**
  * Nova largura: $(6 + x)$ metros.
  * Novo comprimento: $(10 + x)$ metros.
  * Nova área: $(6 + x)(10 + x) = 96$.
* **Passo 2 — Abrir o chuveirinho e arrumar na forma padrão:**
  $$60 + 6x + 10x + x^2 = 96$$
  $$x^2 + 16x + 60 - 96 = 0 \implies \mathbf{x^2 + 16x - 36 = 0}$$
* **Passo 3 — Resolver por Soma e Produto ($S = -16$, $P = -36$):**
  * Como o produto é negativo, uma raiz é positiva e a outra é negativa. Testando divisores de $36$: $2$ e $-18 \implies 2 + (-18) = -16$ e $2 \cdot (-18) = -36$ ✓!
  * Como $x$ é um acréscimo real em metros ($x > 0$), descartamos $-18$ e ficamos com **$x = 2\text{ metros}$**.
  * *(Conferência: $(6 + 2) \times (10 + 2) = 8 \times 12 = 96\text{ m}^2$ ✓!)*
* **(C) CORRETA:** $x = 2$ metros ($8\text{ m} \times 12\text{ m}$).
* **(A), (B) e (D) ERRADAS:** $7 \times 11 = 77\text{ m}^2$; $-18$ virou $18$ positivo sem sentido físico; $10 \times 14 = 140\text{ m}^2$.
</details>

---

### Questão 21
**Banca:** Inédita no Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo

Durante um teste de desempenho de rede na sala de informática, a estabilidade do sinal $E(t)$, medida em função do tempo $t$ (em minutos), segue a lei $E(t) = -t^2 + 14t - 40$. Os técnicos definiram que o sistema opera com margem satisfatória apenas nos instantes em que a estabilidade é **estritamente positiva**, isto é, $E(t) > 0$. Com base no estudo do sinal dessa expressão, o intervalo CORRETO de tempo em que o sistema opera de forma satisfatória é:
(A) Apenas antes de $4$ minutos ($t < 4$) ou após $10$ minutos ($t > 10$).
(B) No intervalo fechado que inclui os extremos: $4 \le t \le 10$.
(C) Apenas nos instantes exatos $t = 4$ minutos e $t = 10$ minutos.
(D) No intervalo aberto entre as duas raízes: $4 < t < 10$.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**
* **Passo 1 — Raízes de $-t^2 + 14t - 40 = 0$:**
  Multiplicando por $-1$ para achar as raízes: $t^2 - 14t + 40 = 0$.
  Por Soma ($S = 14$) e Produto ($P = 40$): $4 + 10 = 14$ e $4 \cdot 10 = 40 \implies$ **$t_1 = 4$** e **$t_2 = 10$**.
* **Passo 2 — Estudo do sinal na função original ($a = -1 < 0$, montanha $\cap$):**
  * Para $t < 4$: $E(t) < 0$ (negativa).
  * Para $4 < t < 10$: $E(t) > 0$ (**positiva!**).
  * Para $t > 10$: $E(t) < 0$ (negativa).
* **Passo 3 — Conferir a fronteira:** o enunciado pede **estritamente positiva ($> 0$)**. Em $t = 4$ e $t = 10$, $E(t) = 0$ (não é $> 0$), logo os extremos ficam de fora (intervalo aberto: **$4 < t < 10$**).
* **(D) CORRETA:** intervalo interno aberto $4 < t < 10$.
* **(A) ERRADA:** trocou o sinal para as pontas (como se $a$ fosse positivo).
* **(B) ERRADA:** incluiu os extremos $4$ e $10$, onde a estabilidade vale zero.
* **(C) ERRADA:** confundiu inequação ($E(t) > 0$) com equação ($E(t) = 0$).
</details>

---

### Questão 22
**Banca:** Inédita no Padrão Instituto ACCESS (Formato Associação de Colunas) | **Cargo:** Oficial Administrativo

Para interpretar corretamente modelos matemáticos aplicados à gestão pública, o Oficial Administrativo deve relacionar os parâmetros algébricos de uma função ao seu significado visual no plano cartesiano. Relacione os parâmetros da **Coluna I** com suas respectivas interpretações gráficas na **Coluna II**:

**Coluna I:**  
1. Coeficiente angular ($a$) na função de 1º grau $f(x) = ax + b$.  
2. Coeficiente linear ($b$) na função de 1º grau $f(x) = ax + b$.  
3. Discriminante ($\Delta$) na função de 2º grau $f(x) = ax^2 + bx + c$.  
4. Abscissa do vértice ($x_V = -\frac{b}{2a}$) na função de 2º grau.  

**Coluna II:**  
(__) Indica a ordenada exata em que a reta corta o eixo vertical $y$, isto é, o valor de saída quando $x = 0$.  
(__) Define a posição vertical do eixo de simetria da parábola, correspondendo ao ponto médio entre as raízes reais.  
(__) Determina quantas vezes a parábola intercepta o eixo horizontal $x$ ($2$, $1$ ou nenhuma vez).  
(__) Mede a taxa constante de variação da reta, indicando se a função é crescente ($a > 0$) ou decrescente ($a < 0$).  

A sequência CORRETA de preenchimento dos parênteses na Coluna II, de cima para baixo, é:
(A) 2 – 4 – 3 – 1.
(B) 1 – 4 – 3 – 2.
(C) 2 – 3 – 4 – 1.
(D) 4 – 2 – 1 – 3.
<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**
* **Associação item por item na Coluna II:**
  * 1ª lacuna (**2**): em $f(0) = a(0) + b = b$, é o **coeficiente linear $b$** que marca o corte da reta no eixo $y$.
  * 2ª lacuna (**4**): o **eixo de simetria** passa exatamente em **$x_V = -\frac{b}{2a}$**, metade do caminho entre as raízes reais.
  * 3ª lacuna (**3**): o sinal do **discriminante $\Delta$** decide quantas raízes reais existem ($\Delta > 0 \to 2$ cortes; $\Delta = 0 \to 1$ toque; $\Delta < 0 \to 0$ cortes no eixo $x$).
  * 4ª lacuna (**1**): a **taxa de variação** e o crescimento/decrescimento da reta dependem do **coeficiente angular $a$**.
* Sequência final: **2 – 4 – 3 – 1** (**Alternativa A**).
* **(B), (C) e (D) ERRADAS:** trocam os papéis entre taxa de variação ($a$) e ponto inicial ($b$), ou entre discriminante ($\Delta$) e vértice ($x_V$).
</details>

---

## Checklist de Fixação Ativa para o Caderno

Ao terminar esta sessão, confira se você domina estes 6 pontos no seu caderno:
- [ ] Sei arrumar qualquer equação de 2º grau na forma $ax^2 + bx + c = 0$, identificar os sinais reais de $a$, $b$ e $c$ e resolver os dois tipos de **equação incompleta** ($c = 0$ pondo $x$ em evidência; $b = 0$ isolando $x^2$ com $\pm\sqrt{\;}$)?
- [ ] Sei explicar de onde vem a Fórmula de Bhaskara (completar quadrados) e o que significam os três cenários de **$\Delta = b^2 - 4ac$** ($\Delta > 0$, $\Delta = 0$ e $\Delta < 0$)?
- [ ] Sei usar **Soma e Produto** ($S = -\frac{b}{a}$ e $P = \frac{c}{a}$) começando sempre pelos divisores de $P$ para ganhar velocidade?
- [ ] Entendo por que não posso isolar $x^2$ direto em uma **inequação de 2º grau** e sei resolver qualquer uma desenhando o estudo do sinal ($a > 0$: $+ \mid - \mid +$; $a < 0$: $- \mid + \mid -$) respeitando bolinha aberta e fechada?
- [ ] Sei relacionar uma **função de 1º grau** ($f(x) = ax + b$) entre fórmula, tabela, raiz ($f(x) = 0$) e gráfico, descobrindo $a = \frac{\Delta y}{\Delta x}$ e $b$ a partir de dois pontos?
- [ ] Sei ler o gráfico de uma **função de 2º grau** ($a$ = concavidade, $c$ = corte em $y$, $\Delta$ = raízes em $x$) e diferenciar perfeitamente quando o enunciado pede **$x_V = -\frac{b}{2a}$** (a causa/quantidade) e quando pede **$y_V = f(x_V) = -\frac{\Delta}{4a}$** (o máximo ou mínimo em si)?
