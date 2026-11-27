# Lista de Fixação Direta: 40 Questões — Equações, Inequações e Funções de 1º e 2º Grau (Semana 05)

> **Objetivo deste Caderno:** Treino direto e sem rodeios para fixar na mão o cálculo e a leitura gráfica de **Equações de 2º Grau (Questões 01 a 10)**, **Inequações de 2º Grau pelo Estudo do Sinal (Questões 11 a 20)**, **Função de 1º Grau e Gráficos (Questões 21 a 30)** e **Função de 2º Grau, Parábola e Vértice (Questões 31 a 40)**, antes de enfrentar problemas contextualizados longos.  
> **Pré-requisito recomendado:** [Aula Completa — Semana 05 (Matemática e RLM)](matematica_semana_05.md) (Eixos 1, 2, 3 e 4).  
> **Como usar:** Resolva cada conta no caderno sem pular sinais, amplie qualquer gráfico clicando em **"🔍 Expandir em tela cheia"** se precisar, marque sua alternativa no formulário interativo e confira o gabarito desmontado passo a passo com **Prova Real** logo abaixo de cada questão.

---

## BLOCO 1: Equações de 2º Grau — 10 Questões Diretas de Fixação

> [!IMPORTANT]
> **📌 Cola Rápida de Bolso (Equações de 2º Grau — Antes de Começar):**
> 1. **Forma padrão:** arrume sempre deixando zero de um lado: $ax^2 + bx + c = 0$ *(lembre que $a$ acompanha $x^2$, $b$ acompanha $x$ e $c$ é o número solto)*.
> 2. **Incompleta sem $c$ ($ax^2 + bx = 0$):** coloque o $x$ em evidência $\to x(ax + b) = 0$. Uma raiz é sempre **$x_1 = 0$**, e a outra sai de $ax + b = 0$. *(Nunca corte $x$ dos dois lados para não apagar a raiz zero!)*
> 3. **Incompleta sem $b$ ($ax^2 + c = 0$):** isole $x^2$ e aplique $\pm\sqrt{\phantom{x}}$. Se $x^2$ der número negativo, **$S = \varnothing$** nos Reais ($\mathbb{R}$).
> 4. **Completa ($ax^2 + bx + c = 0$):**
>    * **Por Soma e Produto (comece pelos divisores de $P$!):** $S = x_1 + x_2 = -\dfrac{b}{a}$ e $P = x_1 \cdot x_2 = \dfrac{c}{a}$.
>    * **Por Bhaskara:** $\Delta = b^2 - 4ac$ e $x = \dfrac{-b \pm \sqrt{\Delta}}{2a}$.
>    * **3 cenários de $\Delta$:** $\Delta > 0 \to 2$ raízes reais distintas; $\Delta = 0 \to 1$ raiz real dupla; $\Delta < 0 \to$ nenhuma raiz real ($S = \varnothing$).

### Questão 01
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Incompleta sem $c$ (Fator Comum Simples)

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 6x = 0$$
(A) $S = \{-6,\; 0\}$
(B) $S = \{0,\; 6\}$
(C) $S = \{-3,\; 3\}$
(D) $S = \{6\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Identificar os coeficientes:** $a = 1$, $b = -6$ e $c = 0$ *(falta o número solto $c$!)*.
2. **Abrir as multiplicações e colocar $x$ em evidência:**
   $$x \cdot x - 6 \cdot x = 0 \implies x \cdot (x - 6) = 0$$
3. **Aplicar a Propriedade do Produto Nulo** *(para uma multiplicação dar zero, pelo menos um fator vale zero)*:
   * **Ramo 1:** $x_1 = 0$
   * **Ramo 2:** $x - 6 = 0 \implies x_2 = +6$
4. **Prova Real:**
   * Para $x = 0$: $0^2 - 6 \cdot 0 = 0 - 0 = 0$ ✓
   * Para $x = 6$: $6^2 - 6 \cdot 6 = 36 - 36 = 0$ ✓
* **Por que as outras estão erradas?**
  - (A) errou o sinal ao passar $-6$ para o outro lado.
  - (C) confundiu com a equação $x^2 - 9 = 0$.
  - (D) caiu na armadilha clássica de "cortar o $x$" ($x^2 = 6x \to x = 6$), apagando a raiz $x = 0$!

</details>

### Questão 02
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Incompleta sem $c$ com $a \neq 1$

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$5x^2 + 15x = 0$$
(A) $S = \{-3,\; 0\}$
(B) $S = \{0,\; 3\}$
(C) $S = \{-3,\; 3\}$
(D) $S = \{-5,\; 0\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Identificar os coeficientes:** $a = 5$, $b = +15$ e $c = 0$ *(falta o termo independente $c$)*.
2. **Colocar $x$ em evidência:**
   $$5 \cdot x \cdot x + 15 \cdot x = 0 \implies x \cdot (5x + 15) = 0$$
3. **Separar os dois ramos iguais a zero:**
   * **Ramo 1:** $x_1 = 0$
   * **Ramo 2:** $5x + 15 = 0 \implies 5x = -15 \implies x_2 = \dfrac{-15}{5} = -3$
4. **Prova Real:**
   * Para $x = 0$: $5(0)^2 + 15(0) = 0$ ✓
   * Para $x = -3$: $5(-3)^2 + 15(-3) = 5(9) - 45 = 45 - 45 = 0$ ✓
* **Por que as outras estão erradas?**
  - (B) errou o sinal do $-3$ ao resolver $5x + 15 = 0$.
  - (C) ignorou que a falta de $c$ obriga uma raiz a ser $0$ e inventou duas raízes opostas.
  - (D) esqueceu de dividir $15$ por $5$ (ou pegou o coeficiente $-a$).

</details>

### Questão 03
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Incompleta sem $b$ (Duas Raízes Simétricas)

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$2x^2 - 72 = 0$$
(A) $S = \{0,\; 6\}$
(B) $S = \{6\}$
(C) $S = \{-12,\; 12\}$
(D) $S = \{-6,\; 6\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Identificar os coeficientes:** $a = 2$, $b = 0$ e $c = -72$ *(falta o $x$ simples, então podemos isolar $x^2$)*.
2. **Passar $-72$ para a direita (Lei da Balança):**
   $$2x^2 = 72$$
3. **Dividir os dois lados por $2$:**
   $$x^2 = \frac{72}{2} \implies x^2 = 36$$
4. **Desfazer o quadrado aplicando $\pm\sqrt{\phantom{x}}$:**
   $$x = \pm\sqrt{36} \implies x_1 = -6 \quad \text{e} \quad x_2 = +6$$
   *(Lembre-se do porquê do $\pm$: tanto $(+6)^2 = 36$ quanto $(-6)^2 = 36$!)*
5. **Prova Real:** $2(-6)^2 - 72 = 2(36) - 72 = 0$ ✓ e $2(6)^2 - 72 = 0$ ✓.
* **Por que as outras estão erradas?**
  - (A) misturou regra de $c = 0$ colocando $0$ como raiz ($2(0)^2 - 72 = -72 \neq 0$).
  - (B) esqueceu o $\pm$ e descartou a raiz negativa $-6$.
  - (C) tirou a metade de $36$ em vez da raiz quadrada ($\sqrt{36} = 6$, não $12$).

</details>

### Questão 04
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Incompleta sem $b$ Sem Solução Real

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$2x^2 + 32 = 0$$
(A) Possui duas raízes reais opostas: $S = \{-4,\; 4\}$.
(B) Possui duas raízes reais opostas: $S = \{-16,\; 16\}$.
(C) Não possui nenhuma raiz real: $S = \varnothing$.
(D) Possui uma única raiz real negativa: $S = \{-4\}$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Isolar o $x^2$ passo a passo:**
   $$2x^2 = -32 \implies x^2 = \frac{-32}{2} \implies x^2 = -16$$
2. **Analisar a pergunta *"Qual número real vezes ele mesmo dá $-16$?"*:**
   * Se tentar $+4$: $(+4) \cdot (+4) = +16$ *(deu positivo!)*.
   * Se tentar $-4$: $(-4) \cdot (-4) = +16$ *(também deu positivo!)*.
   * Se tentar $0$: $0 \cdot 0 = 0$.
3. **Conclusão:** Nos números reais ($\mathbb{R}$), **todo número elevado ao quadrado dá zero ou positivo**, jamais $-16$. Logo, **não existe solução real**: **$S = \varnothing$**.
* **Por que as outras estão erradas?**
  - (A), (B) e (D) ignoraram o sinal negativo de $-16$ antes de extrair a raiz ou erraram o sinal de $(-4)^2$.

</details>

### Questão 05
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Equação Completa com $a = 1$ (Soma e Produto positivos)

Resolva a equação completa abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 8x + 15 = 0$$
(A) $S = \{-5,\; -3\}$
(B) $S = \{-3,\; 5\}$
(C) $S = \{1,\; 15\}$
(D) $S = \{3,\; 5\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo (pelos dois métodos!):**
* **Método 1 — Soma e Produto ($a = 1, b = -8, c = 15$):**
  1. Soma: $S = -\dfrac{b}{a} = -\dfrac{-8}{1} = +8$ *(atenção: o sinal de menos da fórmula inverte o $-8$ para $+8$!)*.
  2. Produto: $P = \dfrac{c}{a} = \dfrac{15}{1} = +15$.
  3. Divisores positivos de $15$: $1 \cdot 15$ (soma $16$, não serve) e **$3 \cdot 5 = 15$** (soma $3 + 5 = 8$ ✓).
* **Método 2 — Conferência por Bhaskara:**
  1. $\Delta = (-8)^2 - 4(1)(15) = 64 - 60 = 4$.
  2. $x = \dfrac{-(-8) \pm \sqrt{4}}{2 \cdot 1} = \dfrac{8 \pm 2}{2} \implies x_1 = \dfrac{10}{2} = 5$ e $x_2 = \dfrac{6}{2} = 3$.
* **Prova Real:** $3^2 - 8(3) + 15 = 9 - 24 + 15 = 0$ ✓ e $5^2 - 8(5) + 15 = 25 - 40 + 15 = 0$ ✓.
* **Por que as outras estão erradas?**
  - (A) esqueceu o sinal de menos da fórmula $S = -b/a$ (achou soma $-8$ em vez de $+8$).
  - (B) misturou sinais opostos (daria produto $-15$, não $+15$).
  - (C) pegou o primeiro par divisor de $15$, cuja soma é $16 \neq 8$.

</details>

### Questão 06
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Equação Completa com Produto Negativo (Sinais Opostos)

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 + 3x - 10 = 0$$
(A) $S = \{-5,\; 2\}$
(B) $S = \{-2,\; 5\}$
(C) $S = \{2,\; 5\}$
(D) $S = \{-10,\; 1\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Identificar $a = 1$, $b = +3$ e $c = -10$.**
2. **Calcular Soma e Produto:**
   * $S = -\dfrac{b}{a} = -\dfrac{3}{1} = -3$
   * $P = \dfrac{c}{a} = \dfrac{-10}{1} = -10$
3. **Analisar os sinais:** como $P = -10$ é negativo, **uma raiz é positiva e a outra é negativa**. Como $S = -3$ é negativa, a raiz de **maior valor absoluto** (mais longe do zero) leva o sinal negativo.
4. **Testar pares que multiplicam $-10$:**
   * $1 \cdot (-10) = -10$, mas soma $1 + (-10) = -9$ *(não serve)*.
   * **$2 \cdot (-5) = -10$**, e soma $2 + (-5) = -3$ ✓!
5. **Conferência por Bhaskara:** $\Delta = 3^2 - 4(1)(-10) = 9 + 40 = 49 \implies x = \dfrac{-3 \pm 7}{2} \implies x_1 = \dfrac{4}{2} = 2$ e $x_2 = \dfrac{-10}{2} = -5$.
* **Por que as outras estão erradas?**
  - (B) trocou os sinais das duas raízes (daria soma $+3$, não $-3$).
  - (C) usou duas raízes positivas (daria produto $+10$).
  - (D) multiplicaria $-10$, mas a soma $-10 + 1 = -9 \neq -3$.

</details>

### Questão 07
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Completa com $a \neq 1$ usando Bhaskara (Raiz Fracionária)

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$2x^2 - 5x + 2 = 0$$
(A) $S = \left\{-2,\; -\dfrac{1}{2}\right\}$
(B) $S = \left\{\dfrac{1}{2},\; 2\right\}$
(C) $S = \{1,\; 4\}$
(D) $S = \left\{\dfrac{1}{4},\; 2\right\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo (cuidado com $2a$ no denominador!):**
1. **Identificar os coeficientes:** $a = 2$, $b = -5$ e $c = 2$.
2. **Calcular o discriminante $\Delta$:**
   $$\Delta = b^2 - 4ac = (-5)^2 - 4 \cdot 2 \cdot 2 = 25 - 16 = 9$$
3. **Aplicar a Fórmula de Bhaskara (lembrando de calcular $2 \cdot a = 2 \cdot 2 = 4$ embaixo!):**
   $$x = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{-(-5) \pm \sqrt{9}}{2 \cdot 2} = \frac{5 \pm 3}{4}$$
4. **Separar os dois valores:**
   * $x_1 = \dfrac{5 + 3}{4} = \dfrac{8}{4} = \mathbf{2}$
   * $x_2 = \dfrac{5 - 3}{4} = \dfrac{2}{4} = \mathbf{\dfrac{1}{2}}$ *(simplificando em cima e embaixo por $2$)*
5. **Prova Real:**
   * Para $x = 2$: $2(2)^2 - 5(2) + 2 = 8 - 10 + 2 = 0$ ✓
   * Para $x = \frac{1}{2}$: $2\left(\frac{1}{4}\right) - 5\left(\frac{1}{2}\right) + 2 = \frac{1}{2} - \frac{5}{2} + 2 = -\frac{4}{2} + 2 = -2 + 2 = 0$ ✓
* **Por que as outras estão erradas?**
  - (A) errou o sinal de $-b$, usando $-5$ em vez de $+5$ no numerador.
  - (C) esqueceu de dividir por $2a$ (ou dividiu por $2$ apenas em uma conta errada).
  - (D) simplificou $\frac{2}{4}$ de forma incorreta para $\frac{1}{4}$.

</details>

### Questão 08
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Caso Especial $\Delta = 0$ (Raiz Real Única / Dupla)

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 10x + 25 = 0$$
(A) Possui duas raízes reais distintas: $S = \{-5,\; 5\}$.
(B) Possui duas raízes reais distintas: $S = \{0,\; 5\}$.
(C) Possui uma única raiz real dupla: $S = \{5\}$.
(D) Não possui nenhuma raiz real em $\mathbb{R}$: $S = \varnothing$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Identificar:** $a = 1$, $b = -10$ e $c = 25$.
2. **Calcular $\Delta$:**
   $$\Delta = (-10)^2 - 4 \cdot 1 \cdot 25 = 100 - 100 = 0$$
3. **Aplicar Bhaskara com $\Delta = 0$:**
   $$x = \frac{10 \pm \sqrt{0}}{2} = \frac{10 \pm 0}{2} \implies x_1 = x_2 = \mathbf{5}$$
   *(Observação visual: $x^2 - 10x + 25$ nada mais é do que o quadrado perfeito $(x - 5)^2 = 0$, que só zera quando $x = 5$!)*
4. **Prova Real:** $5^2 - 10(5) + 25 = 25 - 50 + 25 = 0$ ✓. *(Se testar $-5$: $(-5)^2 - 10(-5) + 25 = 25 + 50 + 25 = 100 \neq 0$!)*
* **Por que as outras estão erradas?**
  - (A) chutou $\pm 5$ sem testar ($-5$ dá $100$).
  - (B) testou $0$, mas $0^2 - 10(0) + 25 = 25 \neq 0$.
  - (D) confundiu $\Delta = 0$ (uma raiz real) com $\Delta < 0$ (nenhuma raiz real).

</details>

### Questão 09
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Caso Especial $\Delta < 0$ (Nenhuma Raiz Real)

Analise o valor do discriminante ($\Delta$) e o conjunto solução real da equação $x^2 + 4x + 9 = 0$:
(A) O discriminante vale $\Delta = -20$ e a equação não possui raízes reais, logo $S = \varnothing$.
(B) O discriminante vale $\Delta = 52$ e a equação possui duas raízes reais distintas.
(C) O discriminante vale $\Delta = 0$ e a equação possui apenas a raiz dupla $x = -2$.
(D) O discriminante vale $\Delta = 20$ e a equação possui duas raízes reais negativas.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Identificar:** $a = 1$, $b = +4$ e $c = +9$.
2. **Calcular $\Delta = b^2 - 4ac$:**
   $$\Delta = 4^2 - 4 \cdot 1 \cdot 9 = 16 - 36 = \mathbf{-20}$$
3. **Interpretar $\Delta = -20 < 0$:**
   Na fórmula de Bhaskara precisaríamos calcular $\sqrt{-20}$. Como **não existe raiz quadrada real de número negativo**, paramos a conta imediatamente e concluímos que **$S = \varnothing$** em $\mathbb{R}$.
* **Por que as outras estão erradas?**
  - (B) somou $+36$ em vez de subtrair $-36$ ($16 + 36 = 52$, erro de sinal pois $a$ e $c$ são positivos).
  - (C) chutou $\Delta = 0$ sem calcular.
  - (D) fez $36 - 16 = +20$, invertendo a subtração $16 - 36$.

</details>

### Questão 10
**Bloco:** 01 — Equações de 2º Grau | **Foco:** Arrumar na Forma Padrão e Simplificar por $a$

Resolva a equação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$3x^2 = 12x + 15$$
(A) $S = \{-5,\; 1\}$
(B) $S = \{1,\; 5\}$
(C) $S = \{-1,\; 5\}$
(D) $S = \{-3,\; 5\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Arrumar na forma padrão ($ax^2 + bx + c = 0$):** passamos $12x$ e $+15$ para o lado esquerdo com os sinais invertidos:
   $$3x^2 - 12x - 15 = 0$$
2. **Truque para simplificar as contas:** todos os coeficientes ($3$, $-12$ e $-15$) são múltiplos de $3$. Dividimos todos os termos por $3$:
   $$\frac{3x^2}{3} - \frac{12x}{3} - \frac{15}{3} = \frac{0}{3} \implies \mathbf{x^2 - 4x - 5 = 0}$$
3. **Resolver a equação simplificada ($a = 1, b = -4, c = -5$):**
   * Soma: $S = -\dfrac{-4}{1} = +4$
   * Produto: $P = \dfrac{-5}{1} = -5$
   * Como o produto é negativo ($-5$) e a soma é positiva ($+4$), temos um negativo e um positivo (com o maior sendo positivo): **$x_1 = -1$** e **$x_2 = 5$** *(confira: $-1 + 5 = 4$ e $-1 \cdot 5 = -5$ ✓)*.
4. **Prova Real na equação original ($3x^2 = 12x + 15$):**
   * Para $x = -1$: lado esquerdo $= 3(-1)^2 = 3$; lado direito $= 12(-1) + 15 = -12 + 15 = 3$ ✓!
   * Para $x = 5$: lado esquerdo $= 3(5)^2 = 75$; lado direito $= 12(5) + 15 = 60 + 15 = 75$ ✓!
* **Por que as outras estão erradas?**
  - (A) errou os sinais de $S$ (pegou $-4$ em vez de $+4$ porque leu $b = +12$ sem trocar o lado da igualdade).
  - (B) pegou $1$ positivo, mas $3(1)^2 = 3 \neq 12(1) + 15 = 27$.
  - (D) chutou divisores de $15$ sem testar na igualdade.

</details>

---

## BLOCO 2: Inequações de 2º Grau — 10 Questões Diretas de Fixação

> [!IMPORTANT]
> **📌 Cola Rápida de Bolso (Estudo do Sinal nas Inequações de 2º Grau — Nunca Isole o $x$ Direto!):**
> 1. **Passo 1 — Zerar um lado e achar as raízes:** deixe no formato $ax^2 + bx + c \;\square\; 0$ e resolva $ax^2 + bx + c = 0$ para achar onde o sinal vira.
> 2. **Passo 2 — Desenhar os sinais usando $a$ (regra "MaCaMa"):**
>    * **Se $a > 0$ (parábola em "U"):** $+$ antes da 1ª raiz $\mid$ **$-$ no miolo** $\mid$ $+$ depois da 2ª raiz.
>    * **Se $a < 0$ (montanha $\cap$):** $-$ antes da 1ª raiz $\mid$ **$+$ no miolo** $\mid$ $-$ depois da 2ª raiz *(ou multiplique tudo por $-1$ **invertendo o sinal da desigualdade**!)*.
> 3. **Passo 3 — Pintar a região pedida e checar a fronteira:**
>    * Pedido $>$ ou $\ge$ quer a região **positiva ($+$)**; pedido $<$ ou $\le$ quer a região **negativa ($-$)**.
>    * Sinal estrito ($<$ ou $>$) $\to$ **bolinha aberta ($\circ$)** (raízes NÃO entram). Sinal inclusivo ($\le$ ou $\ge$) $\to$ **bolinha fechada ($\bullet$)** (raízes ENTRAM).
> 4. **Casos especiais ($\Delta \le 0$):** se $\Delta < 0$, não há raízes e a curva tem o **mesmo sinal de $a$ para todo $x$ real** ($S = \mathbb{R}$ ou $S = \varnothing$). Se $\Delta = 0$, toque único na raiz (ex.: $(x - k)^2 \le 0$ dá $S = \{k\}$).

### Questão 11
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** $a > 0$ com Sinal Estrito ($< 0$) — Miolo Aberto

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 7x + 12 < 0$$
(A) $\{x \in \mathbb{R} \mid x < 3 \text{ ou } x > 4\}$
(B) $\{x \in \mathbb{R} \mid 3 \le x \le 4\}$
(C) $\{x \in \mathbb{R} \mid x \le 3 \text{ ou } x \ge 4\}$
(D) $\{x \in \mathbb{R} \mid 3 < x < 4\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Achar as raízes de $x^2 - 7x + 12 = 0$:**
   * Soma $S = 7$ e Produto $P = 12 \implies$ **$x_1 = 3$** e **$x_2 = 4$** *(pois $3 + 4 = 7$ e $3 \cdot 4 = 12$)*.
2. **Montar o mapa de sinais ($a = +1 > 0 \implies$ formato em "U": $+ \mid - \mid +$):**
   * **Antes de $3$ ($x < 3$):** positivo ($+$) *(teste $x = 0$: $0^2 - 0 + 12 = +12$)*
   * **Entre $3$ e $4$ ($3 < x < 4$):** negativo ($-$) *(teste $x = 3{,}5$: $12{,}25 - 24{,}5 + 12 = -0{,}25$)*
   * **Depois de $4$ ($x > 4$):** positivo ($+$) *(teste $x = 5$: $25 - 35 + 12 = +2$)*
3. **Ler o pedido ($< 0$) e a fronteira:**
   * Queremos a **região negativa ($-$)** (o miolo entre $3$ e $4$).
   * Como o sinal é estrito ($<$, sem o traço de igual), usamos **bolinhas abertas**: $3$ e $4$ dão $0$, e $0 < 0$ é falso.
   * **Solução:** **$3 < x < 4$**.
* **Por que as outras estão erradas?**
  - (A) e (C) escolheram as pontas externas positivas (que correspondem a $> 0$ ou $\ge 0$).
  - (B) incluiu as fronteiras $3$ e $4$, o que só valeria se fosse $\le 0$.

</details>

### Questão 12
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** $a > 0$ com Sinal Inclusivo ($\ge 0$) — Pontas Fechadas

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 6x + 5 \ge 0$$
(A) $\{x \in \mathbb{R} \mid 1 \le x \le 5\}$
(B) $\{x \in \mathbb{R} \mid x \le 1 \text{ ou } x \ge 5\}$
(C) $\{x \in \mathbb{R} \mid x < 1 \text{ ou } x > 5\}$
(D) $\{x \in \mathbb{R} \mid 1 < x < 5\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Achar as raízes de $x^2 - 6x + 5 = 0$:**
   * Soma $S = 6$ e Produto $P = 5 \implies$ **$x_1 = 1$** e **$x_2 = 5$** *(pois $1 + 5 = 6$ e $1 \cdot 5 = 5$)*.
2. **Montar o mapa de sinais ($a = +1 > 0 \implies$ formato em "U": $+ \mid - \mid +$):**
   * **Antes de $1$ ($x < 1$):** positivo ($+$) *(teste $x = 0$: $+5$)*
   * **Entre $1$ e $5$ ($1 < x < 5$):** negativo ($-$) *(teste $x = 3$: $9 - 18 + 5 = -4$)*
   * **Depois de $5$ ($x > 5$):** positivo ($+$) *(teste $x = 6$: $36 - 36 + 5 = +5$)*
3. **Ler o pedido ($\ge 0$) e a fronteira:**
   * O sinal $\ge 0$ pede as **regiões positivas ($+$)** — ou seja, as duas pontas externas — e inclui os extremos com **bolinhas fechadas** (pois $0 \ge 0$ é verdadeiro para $x = 1$ e $x = 5$).
   * **Solução:** **$x \le 1$ ou $x \ge 5$**.
* **Por que as outras estão erradas?**
  - (A) e (D) marcaram o miolo negativo (que vale para $\le 0$ ou $< 0$).
  - (C) acertou as pontas externas, mas esqueceu que $\ge 0$ inclui $1$ e $5$.

</details>

### Questão 13
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** $a > 0$ com Raízes de Sinais Opostos ($\le 0$)

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 2x - 8 \le 0$$
(A) $-2 \le x \le 4$
(B) $-4 \le x \le 2$
(C) $x \le -2$ ou $x \ge 4$
(D) $-2 < x < 4$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Achar as raízes de $x^2 - 2x - 8 = 0$:**
   * Soma $S = -\dfrac{-2}{1} = +2$ e Produto $P = \dfrac{-8}{1} = -8$.
   * Sinais opostos com maior sendo positivo: **$x_1 = -2$** e **$x_2 = 4$** *(confira: $-2 + 4 = +2$ e $-2 \cdot 4 = -8$)*.
2. **Montar o mapa de sinais ($a = +1 > 0 \implies$ formato em "U": $+ \mid - \mid +$):**
   * **Antes de $-2$ ($x < -2$):** positivo ($+$) *(teste $x = -3$: $9 + 6 - 8 = +7$)*
   * **Entre $-2$ e $4$ ($-2 < x < 4$):** negativo ($-$) *(teste $x = 0$: $0 - 0 - 8 = -8$)*
   * **Depois de $4$ ($x > 4$):** positivo ($+$) *(teste $x = 5$: $25 - 10 - 8 = +7$)*
3. **Ler o pedido ($\le 0$) e a fronteira:**
   * Queremos a **região negativa ($-$)** (o miolo entre $-2$ e $4$) com **bolinhas fechadas** (inclui $-2$ e $4$, onde dá $0 \le 0$).
   * **Solução:** **$-2 \le x \le 4$**.
* **Por que as outras estão erradas?**
  - (B) trocou o sinal das raízes (colocou $-4$ e $+2$).
  - (C) escolheu as pontas externas positivas (que valem para $\ge 0$).
  - (D) esqueceu de fechar as bolinhas nos extremos do símbolo $\le 0$.

</details>

### Questão 14
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** Incompleta sem $b$ ($x^2 - 9 > 0$ — Cuidado ao Não Isolar Direto!)

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 9 > 0$$
(A) $\{x \in \mathbb{R} \mid x > 3\}$
(B) $\{x \in \mathbb{R} \mid -3 < x < 3\}$
(C) $\{x \in \mathbb{R} \mid x < -3 \text{ ou } x > 3\}$
(D) $\{x \in \mathbb{R} \mid x \le -3 \text{ ou } x \ge 3\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo (por que NÃO basta escrever $x > 3$?):**
1. **Achar as raízes de $x^2 - 9 = 0$:**
   $$x^2 = 9 \implies x = \pm\sqrt{9} \implies \mathbf{x_1 = -3} \quad \text{e} \quad \mathbf{x_2 = +3}$$
2. **Montar o mapa de sinais ($a = +1 > 0 \implies + \mid - \mid +$):**
   * **Antes de $-3$ ($x < -3$):** positivo ($+$). Veja a prova testando $x = -4$: $(-4)^2 - 9 = +16 - 9 = \mathbf{+7 > 0}$ ✓ *(funciona mesmo sendo negativo!)*
   * **Entre $-3$ e $3$ ($-3 < x < 3$):** negativo ($-$) *(teste $x = 0$: $0 - 9 = -9$)*
   * **Depois de $3$ ($x > 3$):** positivo ($+$) *(teste $x = 4$: $16 - 9 = +7$)*
3. **Ler o pedido ($> 0$):**
   * Queremos as **duas regiões positivas ($+$)** com **bolinhas abertas** (pois $>$ exclui o zero):
   * **Solução:** **$x < -3$ ou $x > 3$**.
* **Por que as outras estão erradas?**
  - (A) caiu na armadilha mais comum de concurso: passou o $9$ e tirou raiz dizendo só $x > 3$, esquecendo toda a ponta negativa ($x < -3$)!
  - (B) pegou o miolo negativo ($< 0$).
  - (D) fechou as bolinhas incluindo $-3$ e $3$, mas $(-3)^2 - 9 = 0$, e $0 > 0$ é falso.

</details>

### Questão 15
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** $a < 0$ (Montanha $\cap$) com $> 0$

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$-x^2 + 7x - 10 > 0$$
(A) $x < 2$ ou $x > 5$
(B) $2 < x < 5$
(C) $2 \le x \le 5$
(D) $-5 < x < -2$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo (pelos dois caminhos equivalentes):**
* **Caminho 1 — Direto com $a = -1 < 0$:**
  1. **Raízes de $-x^2 + 7x - 10 = 0$:** $\Delta = 7^2 - 4(-1)(-10) = 49 - 40 = 9 \implies x = \dfrac{-7 \pm 3}{-2} \implies \mathbf{x_1 = 2}$ e $\mathbf{x_2 = 5}$.
  2. **Mapa de sinais ($a = -1 < 0 \implies$ montanha $\cap$: $- \mid + \mid -$):**
     * Antes de $2$ ($x < 2$): negativo ($-$) *(teste $x = 0$: $-10$)*
     * Entre $2$ e $5$ ($2 < x < 5$): positivo ($+$) *(teste $x = 3$: $-9 + 21 - 10 = +2$)*
     * Depois de $5$ ($x > 5$): negativo ($-$) *(teste $x = 6$: $-36 + 42 - 10 = -4$)*
  3. **Pedido ($> 0$):** queremos a **região positiva ($+$)** (miolo) com **bolinhas abertas** $\implies$ **$2 < x < 5$**.
* **Caminho 2 — Multiplicando por $-1$ antes (sem esquecer de inverter `>` para `<`!):**
  $$-x^2 + 7x - 10 > 0 \;\xrightarrow{\times(-1)}\; x^2 - 7x + 10 < 0$$
  Agora com $a = +1 > 0$ (formato "U") e pedido $< 0$ (região negativa, bolinha aberta), obtemos exatamente o mesmo miolo: **$2 < x < 5$** ✓!
* **Por que as outras estão erradas?**
  - (A) multiplicou por $-1$, mas esqueceu de inverter o sinal `>` para `<` (ou confundiu montanha $\cap$ com "U").
  - (C) fechou as bolinhas indevidamente no sinal estrito `>`.
  - (D) errou o sinal das duas raízes.

</details>

### Questão 16
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** $a < 0$ (Montanha $\cap$) com $\le 0$

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$-x^2 + 4x - 3 \le 0$$
(A) $\{x \in \mathbb{R} \mid 1 \le x \le 3\}$
(B) $\{x \in \mathbb{R} \mid 1 < x < 3\}$
(C) $\{x \in \mathbb{R} \mid x < 1 \text{ ou } x > 3\}$
(D) $\{x \in \mathbb{R} \mid x \le 1 \text{ ou } x \ge 3\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Achar as raízes:** trocando todos os sinais em $-x^2 + 4x - 3 = 0$, temos $x^2 - 4x + 3 = 0$. Por Soma ($4$) e Produto ($3$), as raízes são **$x_1 = 1$** e **$x_2 = 3$**.
2. **Estudo do sinal na expressão original ($a = -1 < 0 \implies$ montanha $\cap$: $- \mid + \mid -$):**
   * **Antes de $1$ ($x < 1$):** negativo ($-$) *(teste $x = 0$: $-0 + 0 - 3 = -3 \le 0$ ✓)*
   * **Entre $1$ e $3$ ($1 < x < 3$):** positivo ($+$) *(teste $x = 2$: $-4 + 8 - 3 = +1$ ✗)*
   * **Depois de $3$ ($x > 3$):** negativo ($-$) *(teste $x = 4$: $-16 + 16 - 3 = -3 \le 0$ ✓)*
   *(Conferência pelo Caminho 2: multiplicar $-x^2 + 4x - 3 \le 0$ por $-1$ dá $x^2 - 4x + 3 \ge 0$, que com $a > 0$ pede as pontas positivas $\ge 0$!)*
3. **Pedido ($\le 0$):** regiões negativas com **bolinhas fechadas** $\implies$ **$x \le 1$ ou $x \ge 3$**.
* **Por que as outras estão erradas?**
  - (A) e (B) escolheram o miolo positivo, ignorando que $a$ é negativo.
  - (C) deixou os extremos $1$ e $3$ abertos, apesar do sinal inclusivo $\le 0$.

</details>

### Questão 17
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** Zerar o Lado Direito Antes de Estudar o Sinal

Resolva a inequação abaixo no conjunto dos números reais ($\mathbb{R}$):
$$x^2 - 4x \ge 5$$
(A) $x \le -1$ ou $x \ge 5$
(B) $-1 \le x \le 5$
(C) $x \le -5$ ou $x \ge 1$
(D) $0 \le x \le 4$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Arrumar deixando $0$ do lado direito:** passamos o $5$ para a esquerda subtraindo:
   $$x^2 - 4x - 5 \ge 0$$
2. **Achar as raízes de $x^2 - 4x - 5 = 0$:**
   * Soma $S = 4$ e Produto $P = -5 \implies$ **$x_1 = -1$** e **$x_2 = 5$** *(pois $-1 + 5 = 4$ e $-1 \cdot 5 = -5$)*.
3. **Mapa de sinais ($a = +1 > 0 \implies$ formato em "U": $+ \mid - \mid +$):**
   * **Antes de $-1$:** positivo ($+$) *(teste na original com $x = -2$: $(-2)^2 - 4(-2) = 4 + 8 = 12 \ge 5$ ✓)*
   * **Entre $-1$ e $5$:** negativo ($-$) *(teste na original com $x = 0$: $0 - 0 = 0 < 5$ ✗)*
   * **Depois de $5$:** positivo ($+$) *(teste na original com $x = 6$: $36 - 24 = 12 \ge 5$ ✓)*
4. **Ler o pedido ($\ge 0$) com bolinhas fechadas:** **$x \le -1$ ou $x \ge 5$**.
* **Por que as outras estão erradas?**
  - (B) pegou a região negativa interna (onde $x^2 - 4x < 5$).
  - (C) inverteu o sinal das raízes para $-5$ e $+1$.
  - (D) calculou as raízes de $x^2 - 4x = 0$ esquecendo o $5$ do lado direito.

</details>

### Questão 18
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** Contagem de Soluções Inteiras com Bolinha Fechada

Quantos **números inteiros** distintos satisfazem a inequação abaixo?
$$x^2 - 5x + 4 \le 0$$
(A) Exatamente $2$ números inteiros.
(B) Exatamente $3$ números inteiros.
(C) Exatamente $4$ números inteiros.
(D) Exatamente $5$ números inteiros.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Achar as raízes de $x^2 - 5x + 4 = 0$:**
   * Soma $S = 5$ e Produto $P = 4 \implies$ **$x_1 = 1$** e **$x_2 = 4$** *(pois $1 + 4 = 5$ e $1 \cdot 4 = 4$)*.
2. **Estudo do sinal ($a = +1 > 0 \implies + \mid - \mid +$):**
   * O pedido é $\le 0$: queremos a região **negativa ($-$)** com **bolinhas fechadas**, logo:
     $$1 \le x \le 4$$
3. **Listar os números inteiros dentro de $1 \le x \le 4$:**
   * Como os extremos $1$ e $4$ **entram**, os inteiros que satisfazem a inequação são: **$\{1,\; 2,\; 3,\; 4\}$**.
   * Teste rápido na conta $x^2 - 5x + 4$: $x=1 \to 0 \le 0$ ✓; $x=2 \to -2 \le 0$ ✓; $x=3 \to -2 \le 0$ ✓; $x=4 \to 0 \le 0$ ✓.
   * Contando: são exatamente **$4$ números inteiros**! *(Fórmula prática com extremos fechados: $4 - 1 + 1 = 4$.)*
* **Por que as outras estão erradas?**
  - (A) contou apenas $\{2, 3\}$ (como se o sinal fosse estrito $< 0$).
  - (B) fez $4 - 1 = 3$, erro clássico de esquecer de somar $+1$ quando os dois extremos entram.
  - (D) incluiu o $0$ por engano.

</details>

### Questão 19
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** Caso Especial com $\Delta = 0$

Qual é o conjunto solução no conjunto dos números reais ($\mathbb{R}$) da inequação $x^2 - 6x + 9 \le 0$?
(A) $S = \varnothing$ (nenhum número real satisfaz a inequação).
(B) $S = \{3\}$ (apenas o número três satisfaz a inequação).
(C) $S = \mathbb{R}$ (todos os números reais satisfazem a inequação).
(D) $S = \{x \in \mathbb{R} \mid x \le 3\}$ (todos os reais menores ou iguais a três).

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Achar o discriminante e a raiz de $x^2 - 6x + 9 = 0$:**
   $$\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0 \implies x = \frac{6 \pm 0}{2} = \mathbf{3}$$
   *(Observe que $x^2 - 6x + 9$ é exatamente o quadrado perfeito $(x - 3)^2$!)*
2. **Desenhar o esboço da parábola ($a = +1 > 0$ e $\Delta = 0$):**
   * A parábola em "U" **encosta no eixo $x$ em um único ponto** ($x = 3$, onde vale $0$), e em todo o resto fica **acima de zero ($+$)** — ela nunca mergulha na região negativa!
   * Conferência com números reais: para $x = 2$, $(2 - 3)^2 = (-1)^2 = +1$; para $x = 4$, $(4 - 3)^2 = (+1)^2 = +1$.
3. **Ler o pedido ($\le 0$, ou seja, "menor OU igual a zero"):**
   * Menor que zero ($< 0$) não acontece nunca.
   * **Igual a zero ($= 0$)** acontece em um único número: **$x = 3$** ($0 \le 0$ é verdadeiro!).
   * Logo, **$S = \{3\}$**.
* **Por que as outras estão erradas?**
  - (A) seria a resposta apenas se o sinal fosse estrito ($x^2 - 6x + 9 < 0$).
  - (C) seria a resposta apenas se o sinal fosse $\ge 0$.
  - (D) tratou a inequação de 2º grau como se fosse de 1º grau.

</details>

### Questão 20
**Bloco:** 02 — Inequações de 2º Grau | **Foco:** Caso Especial com $\Delta < 0$

Qual é o conjunto solução no conjunto dos números reais ($\mathbb{R}$) da inequação $x^2 - 2x + 5 < 0$?
(A) $S = \mathbb{R}$ (qualquer número real satisfaz a inequação).
(B) $S = \{x \in \mathbb{R} \mid -1 < x < 5\}$ (valores reais entre menos um e cinco).
(C) $S = \{x \in \mathbb{R} \mid x < 1\}$ (todos os reais menores que um).
(D) $S = \varnothing$ (nenhum número real satisfaz a inequação).

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Tentar achar as raízes de $x^2 - 2x + 5 = 0$:**
   $$\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = \mathbf{-16 < 0}$$
2. **Interpretar o esboço visual:**
   * Como $\Delta < 0$, a curva **nunca encosta nem atravessa o zero**.
   * Como $a = +1 > 0$ (parábola aberta para cima), ela flutua **$100\%$ acima do eixo $x$** — ou seja, $x^2 - 2x + 5$ dá **resultado estritamente positivo para qualquer número real $x$** que você escolher!
   * Teste rápido no caderno: $x = 0 \to +5$; $x = 1 \to 1 - 2 + 5 = +4$; $x = -3 \to 9 + 6 + 5 = +20$.
3. **Ler o pedido ($< 0$):**
   * A inequação pergunta: *"Para quais valores de $x$ essa expressão fica menor que zero (negativa)?"*
   * Resposta: **nenhum!** Logo, o conjunto solução é vazio: **$S = \varnothing$**.
* **Por que as outras estão erradas?**
  - (A) seria o gabarito se a inequação pedisse $> 0$ ou $\ge 0$ (porque ela é sempre positiva!).
  - (B) inventou raízes inexistentes para uma equação com $\Delta < 0$.
  - (C) respondeu apenas o $x$ do vértice ($x_V = 1$) como se fosse uma inequação de 1º grau.

</details>

---

## BLOCO 3: Função de 1º Grau e Gráficos — 10 Questões Diretas de Fixação

> [!IMPORTANT]
> **📌 Cola Rápida de Bolso (Função de 1º Grau — Fórmula, Tabela e Gráfico):**
> 1. **A máquina $y = f(x)$:** **$x$** é a entrada (**Domínio $D$**), **$y$** é a saída (**Imagem $\text{Im}$**). No Plano Cartesiano, todo par ordenado **$(x, y)$** anda primeiro na **horizontal ($x$, abscissa)** e depois na **vertical ($y$, ordenada)**.
> 2. **Anatomia de $f(x) = ax + b$:**
>    * **$b$ (coeficiente linear / valor fixo):** é quanto vale $f(0)$. No gráfico, é sempre o ponto **$(0, b)$** onde a reta corta o eixo vertical $y$.
>    * **$a$ (coeficiente angular / taxa de variação):** $a = \dfrac{\Delta y}{\Delta x} = \dfrac{y_2 - y_1}{x_2 - x_1}$. Se **$a > 0$**, a reta é **crescente** ($\nearrow$); se **$a < 0$**, é **decrescente** ($\searrow$); se **$a = 0$**, é constante (horizontal).
> 3. **Raiz (zero) da função:** é o valor de $x$ que zera a saída ($f(x) = 0 \implies ax + b = 0$). No gráfico, é o ponto **$(x_1, 0)$** onde a reta cruza o eixo horizontal $x$.
> 4. **Achar a fórmula por 2 pontos $(x_1, y_1)$ e $(x_2, y_2)$:** calcule $a = \dfrac{y_2 - y_1}{x_2 - x_1}$ e depois substitua um dos pontos em $y = ax + b$ para descobrir $b$.
> 5. **Encontro de duas retas:** iguale $f(x) = g(x)$ para achar o $x$ comum e substitua em qualquer uma das funções para achar o $y$.

### Questão 21
**Bloco:** 03 — Função de 1º Grau | **Foco:** Domínio, Imagem e Cálculo de $f(x)$

Dada a função afim $f(x) = 3x - 5$, com domínio restrito ao conjunto $D = \{-1,\; 0,\; 2,\; 4\}$, assinale a alternativa que apresenta CORRETAMENTE o seu conjunto Imagem ($\text{Im}$):
(A) $\text{Im} = \{-2,\; -5,\; 1,\; 7\}$
(B) $\text{Im} = \{-8,\; -5,\; 1,\; 7\}$
(C) $\text{Im} = \{-8,\; 5,\; 1,\; 7\}$
(D) $\text{Im} = \{-3,\; 0,\; 6,\; 12\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Lembrar o papel de cada conjunto:** cada número do **Domínio ($D$)** entra no lugar da letra $x$, e o resultado gerado forma o conjunto **Imagem ($\text{Im}$)**.
2. **Calcular a saída $f(x) = 3x - 5$ para cada entrada de $D = \{-1,\; 0,\; 2,\; 4\}$:**
   * Para $x = -1$: $f(-1) = 3(-1) - 5 = -3 - 5 = \mathbf{-8}$ *(atenção: dois sinais negativos acumulam dívida $-8$, e não $-2$!)*
   * Para $x = 0$: $f(0) = 3(0) - 5 = 0 - 5 = \mathbf{-5}$
   * Para $x = 2$: $f(2) = 3(2) - 5 = 6 - 5 = \mathbf{1}$
   * Para $x = 4$: $f(4) = 3(4) - 5 = 12 - 5 = \mathbf{7}$
3. **Montar a Imagem:** $\text{Im} = \{-8,\; -5,\; 1,\; 7\}$.
* **Por que as outras estão erradas?**
  - (A) errou a soma de negativos em $3(-1) - 5$, calculando $-3 + 1$ ou $-5 + 3 = -2$.
  - (C) esqueceu o sinal negativo do termo $-5$ ao calcular $f(0)$.
  - (D) multiplicou por $3$, mas esqueceu de subtrair $5$ em todas as entradas.

</details>

### Questão 22
**Bloco:** 03 — Função de 1º Grau | **Foco:** Coeficientes $a$ e $b$ com Termos em Ordem Invertida

Analise a função real do 1º grau definida pela lei $f(x) = 14 - 2x$. Assinale a alternativa CORRETA a respeito de seus coeficientes, comportamento e interceptação com os eixos:
(A) Coeficiente angular $a = 14$, coeficiente linear $b = -2$, reta crescente e corta o eixo $y$ em $(0, -2)$.
(B) Coeficiente angular $a = 2$, coeficiente linear $b = 14$, reta crescente e corta o eixo $y$ em $(0, 14)$.
(C) Coeficiente angular $a = -2$, coeficiente linear $b = 14$, reta decrescente e corta o eixo $y$ em $(14, 0)$.
(D) Coeficiente angular $a = -2$, coeficiente linear $b = 14$, reta decrescente e corta o eixo $y$ em $(0, 14)$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Reorganizar na ordem padrão $f(x) = ax + b$:** quem manda no nome do coeficiente é **quem acompanha o $x$**, e não quem aparece primeiro na frase!
   $$f(x) = 14 - 2x = \mathbf{-2x + 14}$$
2. **Identificar $a$ e $b$ com seus sinais:**
   * **$a = -2$** *(é o número que multiplica $x$, trazendo o sinal de menos!)*. Como $a = -2 < 0$, a função é **decrescente**.
   * **$b = +14$** *(é o termo solto, independente de $x$)*.
3. **Encontrar o corte no eixo vertical $y$:** zeramos a entrada ($x = 0$):
   $$f(0) = 14 - 2 \cdot 0 = 14 \implies \text{ponto } \mathbf{(0,\; 14)}$$
   *(Lembre da ordem do par ordenado: horizontal $x = 0$ primeiro, vertical $y = 14$ depois!)*
* **Por que as outras estão erradas?**
  - (A) confundiu $a$ com $b$ apenas pela ordem em que os números estavam escritos no enunciado.
  - (B) leu $2$ sem o sinal negativo que o precede, concluindo erradamente que a reta cresce.
  - (C) acertou $a$, $b$ e o comportamento, mas inverteu o par ordenado $(0, 14)$ para $(14, 0)$ (que fica sobre o eixo $x$, não no eixo $y$).

</details>

### Questão 23
**Bloco:** 03 — Função de 1º Grau | **Foco:** Raiz (Zero) da Função e Corte no Eixo Horizontal $x$

Em qual ponto do plano cartesiano o gráfico da função do 1º grau $f(x) = 4x - 20$ intercepta o **eixo horizontal das abscissas ($x$)**?
(A) No ponto $(5,\; 0)$, pois a raiz da função é $x = 5$.
(B) No ponto $(0,\; 5)$, pois a raiz da função é $y = 5$.
(C) No ponto $(-5,\; 0)$, pois a raiz da função é $x = -5$.
(D) No ponto $(0,\; -20)$, pois a raiz da função é $x = -20$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Traduzir "corta o eixo horizontal $x$":** qualquer ponto apoiado sobre a linha horizontal do eixo $x$ não subiu nem desceu nada na vertical — ou seja, tem saída **$y = 0$** ($f(x) = 0$). É a chamada **raiz** (ou **zero**) da função!
2. **Igualar a expressão a zero e resolver a equação de 1º grau:**
   $$4x - 20 = 0 \implies 4x = 20 \implies x = \frac{20}{4} = \mathbf{5}$$
3. **Montar o par ordenado $(x, y)$ e tirar a Prova Real:**
   * Como $x = 5$ e $y = 0$, o corte no eixo $x$ ocorre em **$(5,\; 0)$**.
   * **Prova Real:** $f(5) = 4(5) - 20 = 20 - 20 = 0$ ✓.
* **Por que as outras estão erradas?**
  - (B) inverteu a abscissa e a ordenada, escrevendo $(0, 5)$ (que fica sobre o eixo $y$).
  - (C) errou o sinal ao passar $-20$ para o lado direito da igualdade.
  - (D) indicou o ponto $(0, -20)$, que na verdade é o corte no **eixo vertical $y$** ($b = -20$), e não no eixo $x$.

</details>

### Questão 24
**Bloco:** 03 — Função de 1º Grau | **Foco:** Descobrir a Entrada $x$ para uma Saída $g(x)$ Conhecida

Considere a função polinomial do 1º grau $g(x) = -5x + 32$. Qual é o valor numérico da entrada $x$ no domínio que produz exatamente a saída $g(x) = 7$?
(A) $x = -3$
(B) $x = -5$
(C) $x = 5$
(D) $x = 7{,}8$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Atenção ao comando:** o enunciado NÃO pediu $g(7)$ (jogar $7$ dentro de $x$), ele disse que a saída pronta vale $7$ ($g(x) = 7$) e pediu para descobrirmos qual $x$ produziu esse resultado!
2. **Montar a igualdade substituindo $g(x)$ por $7$:**
   $$-5x + 32 = 7$$
3. **Isolar o termo com $x$ sem errar o sinal:**
   * Passando $-5x$ para a direita e $7$ para a esquerda (ou subtraindo $32$ dos dois lados):
     $$32 - 7 = 5x \implies 25 = 5x \implies x = \frac{25}{5} = \mathbf{5}$$
4. **Prova Real:** $g(5) = -5(5) + 32 = -25 + 32 = \mathbf{7}$ ✓.
* **Por que as outras estão erradas?**
  - (A) calculou $g(7) = -5(7) + 32 = -3$, trocando entrada $x$ por saída $g(x)$.
  - (B) isolou $-5x = 25$, mas errou o sinal ao dividir $25$ por $-5$ (como se $32 - 7$ desse $-25$).
  - (D) somou $32 + 7 = 39$ e dividiu por $5$, invertendo o sinal do $32$ na balança.

</details>

### Questão 25
**Bloco:** 03 — Função de 1º Grau | **Foco:** Leitura Direta do Gráfico (Fórmula da Reta Crescente)

Observe a reta representada no plano cartesiano abaixo, correspondente ao gráfico de uma função de 1º grau $f(x) = ax + b$, destacando seus dois pontos de interseção com os eixos:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico de uma função de 1º grau crescente passando por (0, -6) e (3, 0)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">GRÁFICO DE f(x) = ax + b — INTERSEÇÃO COM OS EIXOS</text>

  <!-- Grade cartesiana suave (Origem em 220,135; sx=40; sy=16) -->
  <g stroke="#1e293b" stroke-width="1">
    <line x1="100" y1="50" x2="100" y2="274"/>
    <line x1="140" y1="50" x2="140" y2="274"/>
    <line x1="180" y1="50" x2="180" y2="274"/>
    <line x1="260" y1="50" x2="260" y2="274"/>
    <line x1="300" y1="50" x2="300" y2="274"/>
    <line x1="340" y1="50" x2="340" y2="274"/>
    <line x1="380" y1="50" x2="380" y2="274"/>
    <line x1="420" y1="50" x2="420" y2="274"/>
    <line x1="460" y1="50" x2="460" y2="274"/>
    <line x1="76" y1="71" x2="490" y2="71"/>
    <line x1="76" y1="103" x2="490" y2="103"/>
    <line x1="76" y1="167" x2="490" y2="167"/>
    <line x1="76" y1="199" x2="490" y2="199"/>
    <line x1="76" y1="231" x2="490" y2="231"/>
    <line x1="76" y1="263" x2="490" y2="263"/>
  </g>

  <!-- Eixos coordenados -->
  <line x1="76" y1="135" x2="496" y2="135" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="496,131 506,135 496,139" fill="#94a3b8"/>
  <text x="512" y="139" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="220" y1="278" x2="220" y2="52" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="216,52 220,42 224,52" fill="#94a3b8"/>
  <text x="230" y="54" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="208" y="128" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Reta f(x) = 2x - 6: (-1,-8)->(180,263), (0,-6)->(220,231), (3,0)->(340,135), (5,4)->(420,71) -->
  <line x1="180" y1="263" x2="420" y2="71" stroke="#34d399" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="220" cy="231" r="5.5" fill="#818cf8" stroke="#e0e7ff" stroke-width="1.5"/>
  <text x="232" y="242" text-anchor="start" fill="#c7d2fe" font-size="11.5" font-weight="bold" font-family="sans-serif">(0, −6)</text>

  <circle cx="340" cy="135" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="352" y="154" text-anchor="start" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(3, 0)</text>
</svg>

Com base nos pontos indicados no gráfico, assinale a alternativa que apresenta CORRETAMENTE a fórmula $f(x)$ dessa função:
(A) $f(x) = -2x - 6$
(B) $f(x) = 2x - 6$
(C) $f(x) = 3x - 6$
(D) $f(x) = 2x + 3$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Ler o coeficiente linear ($b$) direto no eixo vertical $y$:**
   * A reta corta o eixo $y$ no ponto $(0, -6)$. Como $f(0) = b$, sabemos na hora que **$b = -6$**!
2. **Calcular a taxa de variação ($a$) indo de $(0, -6)$ até $(3, 0)$:**
   * Enquanto $x$ avançou de $0$ para $3$ ($\Delta x = 3 - 0 = +3$), o valor de $y$ subiu de $-6$ para $0$ ($\Delta y = 0 - (-6) = +6$).
   * Logo:
     $$a = \frac{\Delta y}{\Delta x} = \frac{0 - (-6)}{3 - 0} = \frac{6}{3} = \mathbf{+2}$$
   *(Observe que a reta sobe da esquerda para a direita, confirmando $a > 0$!)*
3. **Montar a fórmula e tirar a Prova Real:**
   * $f(x) = ax + b \implies$ **$f(x) = 2x - 6$**.
   * **Prova Real:** $f(0) = 2(0) - 6 = -6$ ✓ e $f(3) = 2(3) - 6 = 6 - 6 = 0$ ✓.
* **Por que as outras estão erradas?**
  - (A) colocou $a = -2$, o que daria uma reta **decrescente** (e faria $f(3) = -12 \neq 0$).
  - (C) usou a raiz $3$ no lugar de $a$, confundindo $x_1$ com taxa de variação.
  - (D) trocou $b = -6$ por $+3$ (testando em $x = 0$, daria $(0, 3)$ e não $(0, -6)$).

</details>

### Questão 26
**Bloco:** 03 — Função de 1º Grau | **Foco:** Reta Decrescente no Gráfico por 2 Pontos (Calcular $a$ e $b$)

O gráfico abaixo mostra uma reta representando uma função do 1º grau $f(x) = ax + b$ que passa pelos pontos $(1,\; 9)$ e $(4,\; 0)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico de uma função de 1º grau decrescente passando por (1, 9) e (4, 0)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">DESCOBRINDO OS COEFICIENTES a E b PELO GRÁFICO</text>

  <!-- Origem em (150, 224); sx = 60; sy = 12 -->
  <!-- Grade horizontal y = 3, 6, 9, 12 -->
  <g stroke="#1e293b" stroke-width="1">
    <line x1="90" y1="188" x2="480" y2="188"/>
    <line x1="90" y1="152" x2="480" y2="152"/>
    <line x1="90" y1="116" x2="480" y2="116"/>
    <line x1="90" y1="80" x2="480" y2="80"/>
    <line x1="210" y1="50" x2="210" y2="270"/>
    <line x1="270" y1="50" x2="270" y2="270"/>
    <line x1="330" y1="50" x2="330" y2="270"/>
    <line x1="390" y1="50" x2="390" y2="270"/>
    <line x1="450" y1="50" x2="450" y2="270"/>
  </g>

  <!-- Eixos -->
  <line x1="86" y1="224" x2="492" y2="224" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="492,220 502,224 492,228" fill="#94a3b8"/>
  <text x="510" y="228" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="150" y1="274" x2="150" y2="52" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="146,52 150,42 154,52" fill="#94a3b8"/>
  <text x="160" y="54" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="138" y="240" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Projeções pontilhadas de (1, 9) -->
  <line x1="210" y1="116" x2="210" y2="224" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="150" y1="116" x2="210" y2="116" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="210" y="241" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="sans-serif">1</text>
  <text x="139" y="120" text-anchor="end" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="sans-serif">9</text>

  <!-- Reta f(x) = -3x + 12: (-0.5, 13.5)->(120,62) a (5,-3)->(450,260) -->
  <line x1="120" y1="62" x2="450" y2="260" stroke="#fb7185" stroke-width="3.2"/>

  <!-- Pontos chave -->
  <circle cx="150" cy="80" r="5" fill="#0f172a" stroke="#c084fc" stroke-width="2.2"/>
  <text x="139" y="84" text-anchor="end" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="sans-serif">(0, b)?</text>

  <circle cx="210" cy="116" r="5.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.5"/>
  <text x="223" y="110" text-anchor="start" fill="#bae6fd" font-size="11.5" font-weight="bold" font-family="sans-serif">(1, 9)</text>

  <circle cx="390" cy="224" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="400" y="211" text-anchor="start" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(4, 0)</text>
</svg>

Calculando os coeficientes dessa função diretamente pelas coordenadas mostradas no gráfico, quais são os valores CORRETOS de $a$ e $b$?
(A) $a = -3$ e $b = 12$
(B) $a = 3$ e $b = 12$
(C) $a = -3$ e $b = 9$
(D) $a = -4$ e $b = 13$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Passo 1 — Calcular a taxa de variação ($a$) pelos dois pontos $(1, 9)$ e $(4, 0)$:**
   * Quando $x$ avança de $1$ para $4$ ($\Delta x = 4 - 1 = +3$), a altura $y$ **cai** de $9$ para $0$ ($\Delta y = 0 - 9 = -9$).
   * Logo:
     $$a = \frac{y_2 - y_1}{x_2 - x_1} = \frac{0 - 9}{4 - 1} = \frac{-9}{3} = \mathbf{-3}$$
   *(Cada $+1$ passo em $x$ faz $y$ descer $3$ unidades — coerente com a reta descendo!)*
2. **Passo 2 — Descobrir o valor inicial $b$ substituindo o ponto $(1, 9)$ em $y = -3x + b$:**
   $$9 = -3 \cdot 1 + b \implies 9 = -3 + b \implies b = 9 + 3 = \mathbf{12}$$
   *(Visão intuitiva: se em $x = 1$ a reta está na altura $9$ e desce $3$ por passo, um passo antes em $x = 0$ ela estava $3$ unidades mais alta: $9 + 3 = 12$!)*
3. **Prova Real nos dois pontos ($f(x) = -3x + 12$):**
   * $f(1) = -3(1) + 12 = 9$ ✓ e $f(4) = -3(4) + 12 = -12 + 12 = 0$ ✓.
* **Por que as outras estão erradas?**
  - (B) esqueceu o sinal negativo de $a$ (com $a = +3$, a reta seria crescente e $f(4) = 24 \neq 0$).
  - (C) achou que a ordenada do primeiro ponto visível ($y = 9$ em $x = 1$) já era o valor de $b$ (mas $b$ é sempre a altura em $x = 0$!).
  - (D) errou a divisão $\frac{-9}{3}$ ou usou a raiz $4$ como inclinação.

</details>

### Questão 27
**Bloco:** 03 — Função de 1º Grau | **Foco:** Montar a Fórmula pela Tabela e Calcular $f(12)$

A tabela abaixo apresenta alguns pares ordenados $(x,\; f(x))$ de uma função polinomial do 1º grau $f(x) = ax + b$:

| Entrada ($x$) | $2$ | $5$ | $8$ |
| :--- | :---: | :---: | :---: |
| **Saída $f(x)$** | $13$ | $25$ | $37$ |

Com base na regularidade linear da tabela, assinale a alternativa que indica CORRETAMENTE o valor de $f(12)$:
(A) $f(12) = 48$
(B) $f(12) = 49$
(C) $f(12) = 61$
(D) $f(12) = 53$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo (por dois caminhos simples):**
* **Caminho 1 — Descobrindo a fórmula $f(x) = ax + b$:**
  1. Taxa de variação entre $(2, 13)$ e $(5, 25)$:
     $$a = \frac{25 - 13}{5 - 2} = \frac{12}{3} = \mathbf{4}$$
     *(Confira na coluna seguinte: de $x=5$ para $x=8$ são $+3$ passos, e $25 + 3 \cdot 4 = 37$ ✓!)*
  2. Descobrir $b$ com o par $(2, 13)$:
     $$13 = 4 \cdot 2 + b \implies 13 = 8 + b \implies b = \mathbf{5}$$
  3. Fórmula completa: **$f(x) = 4x + 5$**.
  4. Calculando $f(12)$:
     $$f(12) = 4 \cdot 12 + 5 = 48 + 5 = \mathbf{53}$$
* **Caminho 2 — Atalho direto pelos degraus da tabela:**
  * A taxa é $+4$ por unidade de $x$. Como em $x = 8$ a saída vale $37$, para chegar até $x = 12$ faltam $12 - 8 = 4$ unidades: $37 + 4 \cdot 4 = 37 + 16 = \mathbf{53}$ ✓!
* **Por que as outras estão erradas?**
  - (A) multiplicou $4 \times 12 = 48$, esquecendo de somar o coeficiente fixo $b = 5$.
  - (B) somou $+12$ direto em $37$ ($37 + 12 = 49$), aplicando um salto errado de $3$ em vez de $4$ passos de $+4$.
  - (C) inverteu $a$ e $b$, calculando $5 \cdot 12 + 1$ ou errando o sinal ao isolar $b$.

</details>

### Questão 28
**Bloco:** 03 — Função de 1º Grau | **Foco:** Leitura Visual Pura dos Sinais de $a$ e $b$ (Sem Números)

Observe o esboço do gráfico de uma função de 1º grau $f(x) = ax + b$ no plano cartesiano abaixo, onde os eixos se cruzam na origem $0$:

<svg viewBox="0 0 560 280" class="w-full h-auto" role="img" aria-label="Esboço de uma reta decrescente cortando o eixo y abaixo da origem, indicando a negativo e b negativo">
  <rect x="6" y="6" width="548" height="268" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">LEITURA VISUAL PURA DOS SINAIS DE a E b (f(x) = ax + b)</text>

  <!-- Origem em (310, 120) -->
  <line x1="76" y1="120" x2="492" y2="120" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="492,116 502,120 492,124" fill="#94a3b8"/>
  <text x="510" y="124" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="310" y1="258" x2="310" y2="52" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="306,52 310,42 314,52" fill="#94a3b8"/>
  <text x="320" y="54" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="320" y="113" fill="#94a3b8" font-size="11" font-weight="bold" font-family="sans-serif">0</text>

  <!-- Reta passando por (210, 120) e (310, 180): slope dy/dx = 0.6 -->
  <line x1="130" y1="72" x2="430" y2="252" stroke="#38bdf8" stroke-width="3.2"/>

  <!-- Pontos visuais -->
  <circle cx="210" cy="120" r="4.5" fill="#f59e0b"/>
  <text x="198" y="138" text-anchor="end" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">corte no eixo x</text>

  <circle cx="310" cy="180" r="5" fill="#a855f7" stroke="#f3e8ff" stroke-width="1.4"/>
  <text x="324" y="176" text-anchor="start" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="sans-serif">corte no eixo y</text>
</svg>

Sem conhecer os valores numéricos exatos, o que é CORRETO afirmar sobre os sinais dos coeficientes $a$ e $b$ dessa função?
(A) $a > 0$ e $b > 0$ (reta crescente cortando $y$ acima da origem).
(B) $a < 0$ e $b > 0$ (reta decrescente cortando $y$ acima da origem).
(C) $a < 0$ e $b < 0$ (reta decrescente cortando $y$ abaixo da origem).
(D) $a > 0$ e $b < 0$ (reta crescente cortando $y$ abaixo da origem).

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Teste 1 — Olhar a inclinação da esquerda para a direita (define $a$):**
   * Caminhando com o olho da esquerda para a direita, a reta azul **desce** (à medida que $x$ aumenta, a altura $y$ diminui). Portanto, **$a < 0$** (função decrescente).
2. **Teste 2 — Olhar onde a reta atravessa o eixo vertical $y$ (define $b$):**
   * O ponto roxo marcado no eixo vertical $y$ está **abaixo da linha do zero** (abaixo da origem $0$, na região negativa das ordenadas). Como o corte em $y$ vale $(0, b)$, temos **$b < 0$**.
* **Por que as outras estão erradas?**
  - (A) e (D) indicam $a > 0$ (que desenhariam uma reta subindo da esquerda para a direita).
  - (B) acertou $a < 0$, mas afirmou $b > 0$, o que faria a reta atravessar o eixo $y$ acima da origem.

</details>

### Questão 29
**Bloco:** 03 — Função de 1º Grau | **Foco:** Ponto de Encontro (Interseção) de Duas Retas no Gráfico

O gráfico a seguir mostra duas retas correspondentes às funções $f(x) = 2x + 1$ e $g(x) = -x + 10$, que se cruzam em um ponto comum $P(x,\; y)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico mostrando o cruzamento das retas f(x)=2x+1 e g(x)=-x+10 no ponto P">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">PONTO DE ENCONTRO P(x, y) ENTRE DUAS RETAS</text>

  <!-- Origem em (130, 230); sx = 36; sy = 16 -->
  <line x1="76" y1="230" x2="508" y2="230" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="508,226 518,230 508,234" fill="#94a3b8"/>
  <text x="524" y="234" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="130" y1="274" x2="130" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="126,48 130,38 134,48" fill="#94a3b8"/>
  <text x="140" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="118" y="246" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Projeções do ponto de encontro (3, 7) -> (238, 118) -->
  <line x1="238" y1="118" x2="238" y2="230" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="130" y1="118" x2="238" y2="118" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="238" y="247" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">x?</text>
  <text x="119" y="122" text-anchor="end" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">y?</text>

  <!-- Reta f(x) = 2x + 1: (-1,-1)->(94,246) até (5,11)->(310,54) -->
  <line x1="94" y1="246" x2="310" y2="54" stroke="#34d399" stroke-width="3"/>
  <text x="318" y="64" text-anchor="start" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="sans-serif">f(x) = 2x + 1</text>

  <!-- Reta g(x) = -x + 10: (-1,11)->(94,54) até (10,0)->(490,230) -->
  <line x1="94" y1="54" x2="490" y2="230" stroke="#38bdf8" stroke-width="3"/>
  <text x="355" y="152" text-anchor="start" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="sans-serif">g(x) = −x + 10</text>

  <!-- Interceptos conhecidos -->
  <circle cx="130" cy="70" r="4" fill="#38bdf8"/>
  <text x="119" y="74" text-anchor="end" fill="#7dd3fc" font-size="10.5" font-weight="bold" font-family="sans-serif">10</text>

  <circle cx="130" cy="214" r="4" fill="#34d399"/>
  <text x="119" y="216" text-anchor="end" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="sans-serif">1</text>

  <circle cx="490" cy="230" r="4" fill="#38bdf8"/>
  <text x="490" y="247" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="bold" font-family="sans-serif">10</text>

  <!-- Ponto P(x, y) -->
  <circle cx="238" cy="118" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="238" y="88" text-anchor="middle" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">P(x, y)</text>
</svg>

Quais são as coordenadas CORRETAS do ponto $P(x,\; y)$ onde as duas retas se cruzam?
(A) $P(7,\; 3)$
(B) $P(3,\; 7)$
(C) $P(3,\; 6)$
(D) $P(9,\; 1)$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Regra do cruzamento:** no ponto exato em que duas curvas se tocam, a entrada $x$ gera a **mesma saída $y$** nas duas funções — ou seja, **$f(x) = g(x)$**.
2. **Igualar as duas fórmulas e achar $x$:**
   $$2x + 1 = -x + 10$$
   $$2x + x = 10 - 1 \implies 3x = 9 \implies x = \frac{9}{3} = \mathbf{3}$$
3. **Achar o $y$ do encontro substituindo $x = 3$ em uma das fórmulas (e conferir na outra):**
   * Em $f$: $f(3) = 2(3) + 1 = 6 + 1 = \mathbf{7}$
   * Conferência em $g$: $g(3) = -(3) + 10 = \mathbf{7}$ ✓ *(deu igualzinho!)*
4. **Escrever na ordem $(x, y)$:** **$P(3,\; 7)$**.
* **Por que as outras estão erradas?**
  - (A) inverteu o par ordenado colocando $(y, x)$ no lugar de $(x, y)$.
  - (C) multiplicou $2 \cdot 3 = 6$ esquecendo de somar o $+1$.
  - (D) parou em $3x = 9$ sem dividir por $3$, e jogou $9$ em $g(9) = 1$.

</details>

### Questão 30
**Bloco:** 03 — Função de 1º Grau | **Foco:** Estudo do Sinal pelo Gráfico da Reta ($f(x) > 0$)

Observe o gráfico completo da função polinomial de 1º grau $y = f(x)$, que corta o eixo $y$ no ponto $(0,\; 8)$ e o eixo $x$ no ponto $(4,\; 0)$:

<svg viewBox="0 0 560 290" class="w-full h-auto" role="img" aria-label="Gráfico de uma reta decrescente passando por (0, 8) e (4, 0) para estudo do sinal">
  <rect x="6" y="6" width="548" height="278" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">ESTUDO DO SINAL DE f(x) PELO GRÁFICO DA RETA</text>

  <!-- Origem em (150, 180); sx = 50; sy = 14 -->
  <g stroke="#1e293b" stroke-width="1">
    <line x1="200" y1="45" x2="200" y2="255"/>
    <line x1="250" y1="45" x2="250" y2="255"/>
    <line x1="300" y1="45" x2="300" y2="255"/>
    <line x1="350" y1="45" x2="350" y2="255"/>
    <line x1="400" y1="45" x2="400" y2="255"/>
    <line x1="450" y1="45" x2="450" y2="255"/>
    <line x1="80" y1="124" x2="490" y2="124"/>
    <line x1="80" y1="68" x2="490" y2="68"/>
    <line x1="80" y1="236" x2="490" y2="236"/>
  </g>

  <!-- Eixos -->
  <line x1="76" y1="180" x2="496" y2="180" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="496,176 506,180 496,184" fill="#94a3b8"/>
  <text x="514" y="184" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="150" y1="262" x2="150" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="146,48 150,38 154,48" fill="#94a3b8"/>
  <text x="160" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="138" y="196" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Reta passando por (-1,10)->(100,40), (0,8)->(150,68), (4,0)->(350,180), (6.5,-5)->(475,250) -->
  <line x1="100" y1="40" x2="475" y2="250" stroke="#a78bfa" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="150" cy="68" r="5.5" fill="#818cf8" stroke="#e0e7ff" stroke-width="1.5"/>
  <text x="166" y="62" text-anchor="start" fill="#c7d2fe" font-size="11.5" font-weight="bold" font-family="sans-serif">(0, 8)</text>

  <circle cx="350" cy="180" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="356" y="165" text-anchor="start" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(4, 0)</text>
</svg>

Observando apenas o comportamento visual da reta no desenho, para qual conjunto de valores reais de $x$ tem-se **$f(x) > 0$**?
(A) $\{x \in \mathbb{R} \mid x < 4\}$
(B) $\{x \in \mathbb{R} \mid x > 4\}$
(C) $\{x \in \mathbb{R} \mid x \le 4\}$
(D) $\{x \in \mathbb{R} \mid x < 8\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Traduzir "$f(x) > 0$" para o visual do gráfico:**
   * Como $y = f(x)$ mede a **altura vertical**, pedir **$f(x) > 0$** significa procurar em qual faixa de $x$ a linha do gráfico está **estritamente ACIMA do eixo horizontal $x$**!
2. **Olhar para a raiz $(4, 0)$:**
   * A reta só encosta no chão ($y = 0$) em **$x = 4$**.
   * **À esquerda de $4$ ($x < 4$):** a reta roxa está **acima** do eixo horizontal $x$ (ex.: em $x = 0$, vale $+8$). Aqui $f(x) > 0$ ✓!
   * **Exatamente em $x = 4$:** vale $f(4) = 0$ (e $0 > 0$ é falso, por isso não entra o sinal de igual!).
   * **À direita de $4$ ($x > 4$):** a reta mergulhou **abaixo** do eixo horizontal $x$ (saídas negativas!).
3. **Conferência algébrica:** a reta tem equação $f(x) = -2x + 8$. Fazendo $-2x + 8 > 0 \implies 8 > 2x \implies x < 4$ ✓.
* **Por que as outras estão erradas?**
  - (B) escolheu o trecho em que a reta está abaixo do eixo $x$ ($f(x) < 0$).
  - (C) incluiu $x = 4$, o que só valeria se o sinal fosse $\ge 0$.
  - (D) olhou para o corte no eixo $y$ ($8$) em vez da raiz no eixo $x$ ($4$).

</details>

---

## BLOCO 4: Função de 2º Grau (Parábola, Vértice e Gráficos) — 10 Questões Diretas de Fixação

> [!IMPORTANT]
> **📌 Cola Rápida de Bolso (Parábola, Vértice e Leitura de Gráficos — $f(x) = ax^2 + bx + c$):**
> 1. **Concavidade ($a$):** **$a > 0$** $\to$ boca para **CIMA** ("U") $\to$ existe **PONTO DE MÍNIMO** ($\text{Im}: y \ge y_V$). **$a < 0$** $\to$ boca para **BAIXO** ($\cap$) $\to$ existe **PONTO DE MÁXIMO** ($\text{Im}: y \le y_V$).
> 2. **Corte em $y$ ($c$) e Cortes em $x$ ($\Delta$):** cruza o eixo vertical $y$ sempre em **$(0, c)$**. Já **$\Delta = b^2 - 4ac$** diz quantas vezes cruza o eixo $x$: $\Delta > 0 \to 2$ vezes; $\Delta = 0 \to 1$ toque (tangencia); $\Delta < 0 \to 0$ vezes.
> 3. **Sinal de $b$ no gráfico (teste da passagem pelo eixo $y$):** ponha o dedo onde a parábola cruza o eixo vertical $y$ indo da esquerda para a direita: **subindo** $\implies \mathbf{b > 0}$; **descendo** $\implies \mathbf{b < 0}$; vértice sobre o eixo $y$ $\implies b = 0$.
> 4. **Vértice $V(x_V,\; y_V)$ e Eixo de Simetria:**
>    * **$x_V = -\dfrac{b}{2a} = \dfrac{x_1 + x_2}{2}$** (a **entrada/causa** ideal — fica exatamente na metade entre as duas raízes!).
>    * **$y_V = f(x_V) = -\dfrac{\Delta}{4a}$** (o **valor máximo ou mínimo** em si — atenção ao sinal de `-(x)²`!).

### Questão 31
**Bloco:** 04 — Função de 2º Grau | **Foco:** Raio-X de $a$, $c$ e $\Delta$ na Fórmula Quadrática

Considere a função polinomial do 2º grau $f(x) = -2x^2 + 8x - 6$. Analisando seus coeficientes e seu discriminante ($\Delta$), assinale a alternativa CORRETA sobre a sua parábola:
(A) Tem concavidade para cima, corta o eixo $y$ em $(0, -6)$ e possui uma raiz real dupla.
(B) Tem concavidade para baixo, corta o eixo $y$ em $(-6, 0)$ e não toca o eixo horizontal $x$.
(C) Tem concavidade para baixo, corta o eixo $y$ em $(0, -6)$ e corta o eixo $x$ em dois pontos.
(D) Tem concavidade para cima, corta o eixo $y$ em $(0, 8)$ e corta o eixo $x$ em dois pontos.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Identificar os coeficientes:** $a = -2$, $b = +8$ e $c = -6$.
2. **Concavidade ($a$):** como $a = -2 < 0$, a boca da parábola abre para **baixo** ($\cap$, ponto de máximo).
3. **Corte no eixo vertical $y$ ($c$):** em $x = 0$, $f(0) = c = -6 \implies$ corta $y$ em **$(0,\; -6)$**.
4. **Quantidade de cortes no eixo horizontal $x$ ($\Delta$):**
   $$\Delta = b^2 - 4ac = 8^2 - 4(-2)(-6) = 64 - 48 = \mathbf{16 > 0}$$
   *(Cuidado com os três sinais negativos: $(-4)\cdot(-2)\cdot(-6) = -48$!)* Como $\Delta > 0$, a parábola atravessa o eixo $x$ em **dois pontos distintos** (conferindo: $x_1 = 1$ e $x_2 = 3$).
* **Por que as outras estão erradas?**
  - (A) errou a concavidade (disse "para cima") e achou $\Delta = 0$ sem calcular.
  - (B) inverteu o ponto $(0, -6)$ para $(-6, 0)$ e errou o sinal de $-4ac$, achando $\Delta < 0$.
  - (D) errou o sinal de $a$ e confundiu o corte em $y$ ($c = -6$) com o coeficiente $b = 8$.

</details>

### Questão 32
**Bloco:** 04 — Função de 2º Grau | **Foco:** Cálculo Direto do Vértice de Mínimo ($a > 0$)

Determine o vértice $V(x_V,\; y_V)$ da parábola que representa a função quadrática $f(x) = x^2 - 6x + 5$ e classifique-o CORRETAMENTE:
(A) Ponto de mínimo localizado em $V(3,\; -4)$.
(B) Ponto de máximo localizado em $V(3,\; -4)$.
(C) Ponto de mínimo localizado em $V(-3,\; 32)$.
(D) Ponto de mínimo localizado em $V(3,\; 4)$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo:**
1. **Classificar ($a$):** $a = +1 > 0 \implies$ concavidade voltada para **cima** ("U"), logo o vértice é um **ponto de mínimo**!
2. **Calcular a abscissa do vértice ($x_V$):**
   $$x_V = -\frac{b}{2a} = -\frac{-6}{2 \cdot 1} = \frac{6}{2} = \mathbf{3}$$
   *(Conferência pelas raízes: $x_1 = 1$ e $x_2 = 5$, metade exata: $\frac{1+5}{2} = 3$ ✓!)*
3. **Calcular a ordenada do vértice ($y_V = f(x_V)$):**
   $$y_V = f(3) = 3^2 - 6(3) + 5 = 9 - 18 + 5 = \mathbf{-4}$$
   *(Conferência por $-\frac{\Delta}{4a}$: $\Delta = (-6)^2 - 4(1)(5) = 36 - 20 = 16 \implies y_V = -\frac{16}{4} = -4$ ✓!)*
4. **Conclusão:** Ponto de mínimo em **$V(3,\; -4)$**.
* **Por que as outras estão erradas?**
  - (B) acertou as coordenadas, mas chamou o fundo do "U" ($a > 0$) de ponto de máximo.
  - (C) esqueceu o sinal negativo de $x_V = -\frac{b}{2a}$, calculando $-3$ em vez de $+3$.
  - (D) errou o sinal de $9 - 18 + 5$, respondendo $+4$ no lugar de $-4$.

</details>

### Questão 33
**Bloco:** 04 — Função de 2º Grau | **Foco:** Valor Máximo ($y_V$) com $a < 0$ e Pegadinha de $-x^2$

Considere a função quadrática $f(x) = -x^2 + 8x - 7$. Assinale a alternativa que apresenta CORRETAMENTE o **valor máximo** assumido por essa função real:
(A) O valor máximo da função é $4$.
(B) O valor máximo da função é $-7$.
(C) O valor máximo da função é $41$.
(D) O valor máximo da função é $9$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Entender o que está sendo pedido ($y_V$ vs. $x_V$):** "qual é o **valor máximo** da função?" pergunta pela maior altura atingida ($y_V$), e não pelo valor de $x$ que a produz!
2. **Calcular $x_V$ primeiro ($a = -1$, $b = 8$, $c = -7$):**
   $$x_V = -\frac{b}{2a} = -\frac{8}{2 \cdot (-1)} = -\frac{8}{-2} = \mathbf{4}$$
3. **Substituir $x = 4$ em $f(x)$ com atenção máxima ao sinal de `-x²`:**
   $$y_V = f(4) = -(4)^2 + 8(4) - 7 = \mathbf{-16} + 32 - 7 = 16 - 7 = \mathbf{9}$$
   *(Cuidado fatal: em `-(4)²`, apenas o $4$ está ao quadrado — o menos fica fora e dá `-16`, jamais `+16`!)*
* **Conferência por $-\frac{\Delta}{4a}$:** $\Delta = 8^2 - 4(-1)(-7) = 64 - 28 = 36 \implies y_V = -\frac{36}{4(-1)} = \frac{36}{4} = \mathbf{9}$ ✓.
* **Por que as outras estão erradas?**
  - (A) respondeu $x_V = 4$ (o ponto de entrada) no lugar do valor máximo $y_V$.
  - (B) confundiu o valor máximo com o corte no eixo $y$ ($c = -7$).
  - (C) calculou $(-4)^2 = +16$ no primeiro termo e ainda somou $+7$ ou fez $16 + 32 - 7 = 41$!

</details>

### Questão 34
**Bloco:** 04 — Função de 2º Grau | **Foco:** Entrada Ideal que Minimiza a Função ($x_V$ vs. $y_V$)

O custo operacional $C(x)$ de processamento de um lote varia segundo a função de 2º grau $C(x) = 2x^2 - 20x + 62$. Para qual valor de **$x$** esse custo atinge o seu **menor valor possível**?
(A) $x = -5$
(B) $x = 5$
(C) $x = 10$
(D) $x = 12$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Traduzir a pergunta com lupa:** a questão NÃO pergunta "qual é o menor custo?" ($y_V$), ela pergunta **"para qual valor de $x$"** ocorre o mínimo — portanto, pede diretamente **$x_V$**!
2. **Calcular $x_V = -\dfrac{b}{2a}$ ($a = 2$ e $b = -20$):**
   $$x_V = -\frac{-20}{2 \cdot 2} = \frac{20}{4} = \mathbf{5}$$
3. **Conferência completa:** para $x = 5$, o custo mínimo será $y_V = C(5) = 2(5)^2 - 20(5) + 62 = 50 - 100 + 62 = 12$ *(teste vizinhos: $C(4) = 32 - 80 + 62 = 14$ e $C(6) = 72 - 120 + 62 = 14$, confirmando o mínimo em $x = 5$!)*
* **Por que as outras estão erradas?**
  - (A) errou o sinal de $-\frac{-20}{4}$, esquecendo que o menos da fórmula cancela o menos de $b = -20$.
  - (C) esqueceu de multiplicar $a$ por $2$ no denominador (calculou $-\frac{b}{a} = 10$).
  - (D) caiu na pegadinha clássica de responder $y_V = 12$ (o menor custo) quando a pergunta pediu $x$ ($x_V = 5$).

</details>

### Questão 35
**Bloco:** 04 — Função de 2º Grau | **Foco:** Simetria da Parábola no Gráfico (Descobrir $x_2$)

O gráfico abaixo representa uma função de 2º grau cujo eixo de simetria vertical passa exatamente pela reta tracejada $x = 4$, sabendo-se que uma de suas raízes reais é o ponto $(1,\; 0)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico de uma parábola com eixo de simetria em x=4 e primeira raiz em (1, 0)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">SIMETRIA DA PARÁBOLA NO EIXO x = 4</text>

  <!-- Origem em (100, 175); sx = 48; sy = 20 -->
  <!-- f(x) = 0.5(x-1)(x-7) = 0.5(x-4)^2 - 4.5 -->
  <line x1="54" y1="175" x2="514" y2="175" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="514,171 524,175 514,179" fill="#94a3b8"/>
  <text x="532" y="179" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="100" y1="276" x2="100" y2="52" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="96,52 100,42 104,52" fill="#94a3b8"/>
  <text x="110" y="54" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="89" y="191" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Eixo de simetria x = 4 -> x_px = 100 + 4*48 = 292 -->
  <line x1="292" y1="52" x2="292" y2="278" stroke="#818cf8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="292" y="66" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="bold" font-family="sans-serif">Eixo de Simetria: x = 4</text>

  <!-- Parábola exata: M 76 62.5 Q 292 467.5 508 62.5 -->
  <path d="M 76 62.5 Q 292 467.5 508 62.5" fill="none" stroke="#34d399" stroke-width="3.2"/>

  <!-- Marcações simétricas das distâncias -->
  <line x1="148" y1="163" x2="292" y2="163" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="220" y="156" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="bold" font-family="sans-serif">d = 3</text>

  <line x1="292" y1="163" x2="436" y2="163" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="364" y="156" text-anchor="middle" fill="#7dd3fc" font-size="10.5" font-weight="bold" font-family="sans-serif">mesma distância</text>

  <!-- Pontos chave -->
  <circle cx="148" cy="175" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="148" y="196" text-anchor="middle" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(1, 0)</text>

  <circle cx="292" cy="175" r="4" fill="#818cf8"/>
  <text x="279" y="196" text-anchor="end" fill="#a5b4fc" font-size="11" font-weight="bold" font-family="sans-serif">4</text>

  <circle cx="436" cy="175" r="5.5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="436" y="196" text-anchor="middle" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(x₂, 0)</text>

  <circle cx="292" cy="265" r="5" fill="#ec4899"/>
  <text x="304" y="274" text-anchor="start" fill="#f9a8d4" font-size="10.5" font-weight="bold" font-family="sans-serif">Vértice</text>
</svg>

Usando exclusivamente a simetria da parábola mostrada no gráfico, qual é o valor CORRETO da segunda raiz $x_2$?
(A) $x_2 = 5$
(B) $x_2 = 6$
(C) $x_2 = 7$
(D) $x_2 = 8$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo (por dois caminhos instantâneos):**
* **Caminho 1 — Distância espelhada ao eixo de simetria:**
  * Da primeira raiz ($x_1 = 1$) até o eixo central ($x_V = 4$), a distância vale $4 - 1 = 3$ unidades para a esquerda.
  * Como a parábola é um espelho perfeito em torno de $x = 4$, basta andar a **mesma distância ($+3$)** para a direita do centro:
    $$x_2 = 4 + 3 = \mathbf{7}$$
* **Caminho 2 — Fórmula da média aritmética ($x_V = \dfrac{x_1 + x_2}{2}$):**
  $$4 = \frac{1 + x_2}{2} \implies 8 = 1 + x_2 \implies x_2 = 8 - 1 = \mathbf{7}$$
* **Por que as outras estão erradas?**
  - (A) somou apenas $+1$ a partir do eixo ($4 + 1 = 5$), esquecendo que a distância desde $x_1 = 1$ era $3$.
  - (B) somou $+2$ sem medir $4 - 1$.
  - (D) dobrou o valor do eixo de simetria ($2 \times 4 = 8$), como se a primeira raiz fosse $x_1 = 0$ em vez de $x_1 = 1$.

</details>

### Questão 36
**Bloco:** 04 — Função de 2º Grau | **Foco:** Leitura Reversa Pura dos Sinais de $a$, $b$, $c$ e $\Delta$

Analise apenas a posição e o formato da parábola da função quadrática $f(x) = ax^2 + bx + c$ desenhada no plano cartesiano abaixo:

<svg viewBox="0 0 560 295" class="w-full h-auto" role="img" aria-label="Parábola voltada para baixo, cortando o eixo x duas vezes e passando pelo eixo y acima da origem enquanto sobe">
  <rect x="6" y="6" width="548" height="283" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">LEITURA REVERSA DOS SINAIS (a, b, c E Δ) NA PARÁBOLA</text>

  <!-- Origem em (200, 195); sx=45; sy=24 -->
  <line x1="70" y1="195" x2="500" y2="195" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="500,191 510,195 500,199" fill="#94a3b8"/>
  <text x="518" y="199" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="200" y1="274" x2="200" y2="52" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="196,52 200,42 204,52" fill="#94a3b8"/>
  <text x="210" y="54" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="188" y="211" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Parábola f(x) = -0.5x^2 + 2x + 2.5 -> M 110 279 Q 290 -105 470 279 -->
  <path d="M 110 279 Q 290 -105 470 279" fill="none" stroke="#38bdf8" stroke-width="3.2"/>

  <!-- Marcadores visuais sem valores numéricos -->
  <circle cx="155" cy="195" r="4.5" fill="#f59e0b"/>
  <circle cx="425" cy="195" r="4.5" fill="#f59e0b"/>

  <circle cx="200" cy="135" r="5" fill="#a855f7" stroke="#f3e8ff" stroke-width="1.4"/>
  <text x="212" y="144" text-anchor="start" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="sans-serif">corte em y (subindo)</text>

  <circle cx="290" cy="87" r="5" fill="#ec4899"/>
  <text x="290" y="74" text-anchor="middle" fill="#f9a8d4" font-size="10.5" font-weight="bold" font-family="sans-serif">Vértice</text>
</svg>

Com base exclusivamente nos elementos geométricos do gráfico acima, assinale a alternativa CORRETA:
(A) $a < 0$, $b > 0$, $c > 0$ e $\Delta > 0$.
(B) $a < 0$, $b < 0$, $c > 0$ e $\Delta > 0$.
(C) $a > 0$, $b > 0$, $c > 0$ e $\Delta > 0$.
(D) $a < 0$, $b > 0$, $c < 0$ e $\Delta < 0$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Resolução Passo a Passo (os 4 testes visuais de 10 segundos):**
1. **Sinal de $a$ (Concavidade):** a boca da parábola está voltada para **baixo** (formato de montanha $\cap$) $\implies \mathbf{a < 0}$.
2. **Sinal de $\Delta$ (Cortes no eixo $x$):** a curva atravessa o eixo horizontal $x$ em **2 pontos distintos** (as duas bolinhas laranja) $\implies \mathbf{\Delta > 0}$.
3. **Sinal de $c$ (Corte no eixo $y$):** o ponto roxo onde a curva corta o eixo vertical $y$ está **acima do zero** $\implies \mathbf{c > 0}$.
4. **Sinal de $b$ (Movimento ao cruzar o eixo $y$):** olhando da esquerda para a direita no ponto roxo em $x = 0$, a curva está **subindo** rumo ao vértice que ficou à direita $\implies \mathbf{b > 0}$!
   *(Conferência pela fórmula $x_V = -\frac{b}{2a}$: o vértice está à direita do eixo $y$ [$x_V > 0$] e $a < 0$. Para $-\frac{b}{2a}$ dar positivo com $2a$ negativo, o sinal de cima $b$ precisa ser positivo!)*
* **Por que as outras estão erradas?**
  - (B) errou o sinal de $b$, afirmando $b < 0$ (o que colocaria o vértice à esquerda do eixo $y$ e faria a curva descer ao passar por $y$).
  - (C) errou a concavidade, dizendo $a > 0$ (boca para cima).
  - (D) errou tanto $c$ (disse $< 0$, abaixo da origem) quanto $\Delta$ (disse $< 0$, sem cortar $x$).

</details>

### Questão 37
**Bloco:** 04 — Função de 2º Grau | **Foco:** Descobrir a Fórmula $f(x) = ax^2 + bx + c$ pelo Gráfico

O gráfico cartesiano abaixo exibe uma função de 2º grau $f(x) = ax^2 + bx + c$ passando pelas raízes $(-1,\; 0)$ e $(3,\; 0)$, cortando o eixo $y$ em $(0,\; -3)$ e com vértice no ponto $V(1,\; -4)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico da parábola com raízes em (-1,0) e (3,0), corte em y em (0,-3) e vértice em (1,-4)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">IDENTIFICANDO A LEI DA FUNÇÃO QUADRÁTICA PELO GRÁFICO</text>

  <!-- Origem em (220, 160); sx = 55; sy = 22 -->
  <g stroke="#1e293b" stroke-width="1">
    <line x1="110" y1="45" x2="110" y2="275"/>
    <line x1="165" y1="45" x2="165" y2="275"/>
    <line x1="275" y1="45" x2="275" y2="275"/>
    <line x1="330" y1="45" x2="330" y2="275"/>
    <line x1="385" y1="45" x2="385" y2="275"/>
    <line x1="440" y1="45" x2="440" y2="275"/>
    <line x1="80" y1="116" x2="480" y2="116"/>
    <line x1="80" y1="72" x2="480" y2="72"/>
    <line x1="80" y1="204" x2="480" y2="204"/>
    <line x1="80" y1="248" x2="480" y2="248"/>
  </g>

  <!-- Eixos -->
  <line x1="76" y1="160" x2="488" y2="160" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="488,156 498,160 488,164" fill="#94a3b8"/>
  <text x="506" y="164" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="220" y1="278" x2="220" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="216,48 220,38 224,48" fill="#94a3b8"/>
  <text x="230" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="209" y="152" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Parábola f(x) = x^2 - 2x - 3 -> M 110 50 Q 275 446 440 50 -->
  <path d="M 110 50 Q 275 446 440 50" fill="none" stroke="#34d399" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="165" cy="160" r="5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.4"/>
  <text x="150" y="180" text-anchor="end" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">(−1, 0)</text>

  <circle cx="385" cy="160" r="5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.4"/>
  <text x="398" y="180" text-anchor="start" fill="#fcd34d" font-size="11" font-weight="bold" font-family="sans-serif">(3, 0)</text>

  <circle cx="220" cy="226" r="5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.4"/>
  <text x="206" y="232" text-anchor="end" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="sans-serif">(0, −3)</text>

  <circle cx="275" cy="248" r="5.5" fill="#ec4899" stroke="#fce7f3" stroke-width="1.4"/>
  <text x="275" y="269" text-anchor="middle" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">V(1, −4)</text>
</svg>

Qual é a fórmula algébrica CORRETA que define essa função quadrática?
(A) $f(x) = x^2 + 2x - 3$
(B) $f(x) = x^2 - 2x - 3$
(C) $f(x) = -x^2 + 2x - 3$
(D) $f(x) = x^2 - 2x + 3$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo:**
1. **Ler $a$ e $c$ de cara no desenho:**
   * Boca para **cima** $\implies a > 0$ (já elimina a letra C!).
   * Corte no eixo vertical $y$ em $(0, -3) \implies \mathbf{c = -3}$ (já elimina a letra D!).
2. **Usar Soma e Produto das raízes $x_1 = -1$ e $x_2 = 3$ (ou o vértice $x_V = +1$):**
   * Soma das raízes: $S = (-1) + 3 = \mathbf{+2}$.
   * Pela fórmula da soma ($S = -\frac{b}{a}$), sabendo pelos coeficientes da prova que $a = +1$ (e conferindo no produto $P = \frac{-3}{1} = (-1) \cdot 3 = -3$ ✓):
     $$-\frac{b}{1} = +2 \implies \mathbf{b = -2}$$
   * *(Atalho visual pelo gráfico: no ponto $(0, -3)$ a curva ainda está **descendo** em direção ao vértice em $x = +1$, logo $b$ tem que ser **negativo**!)*
3. **Prova Real nos 4 pontos em $f(x) = x^2 - 2x - 3$:**
   * $f(0) = -3$ ✓ | $f(-1) = 1 + 2 - 3 = 0$ ✓ | $f(3) = 9 - 6 - 3 = 0$ ✓ | $f(1) = 1 - 2 - 3 = -4$ ✓.
* **Por que as outras estão erradas?**
  - (A) errou o sinal de $b$, usando $+2$ no lugar de $-2$ (isso colocaria as raízes em $-3$ e $1$, e o vértice em $x = -1$).
  - (C) colocou $a = -1 < 0$, o que desenharia a parábola de cabeça para baixo.
  - (D) errou o sinal de $c$, dizendo $+3$ em vez de $-3$.

</details>

### Questão 38
**Bloco:** 04 — Função de 2º Grau | **Foco:** Conjunto Imagem ($\text{Im}$) da Parábola pelo Vértice no Gráfico

O gráfico abaixo mostra uma função quadrática $f : \mathbb{R} \to \mathbb{R}$, com raízes $(-1,\; 0)$ e $(5,\; 0)$, corte no eixo vertical em $(0,\; 5)$ e ponto máximo no vértice $V(2,\; 9)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico de parábola com concavidade para baixo e vértice máximo em V(2, 9)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">CONJUNTO IMAGEM (Im) DA FUNÇÃO QUADRÁTICA NO GRÁFICO</text>

  <!-- Origem em (180, 215); sx = 45; sy = 16 -->
  <line x1="76" y1="215" x2="492" y2="215" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="492,211 502,215 492,219" fill="#94a3b8"/>
  <text x="510" y="219" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="180" y1="276" x2="180" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="176,48 180,38 184,48" fill="#94a3b8"/>
  <text x="190" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="169" y="232" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Projeções do Vértice V(2, 9) -> (270, 71) -->
  <line x1="180" y1="71" x2="270" y2="71" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="270" y1="71" x2="270" y2="215" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="169" y="75" text-anchor="end" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">9</text>
  <text x="270" y="232" text-anchor="middle" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">2</text>

  <!-- Parábola f(x) = -x^2 + 4x + 5 -> M 112.5 267 Q 270 -125 427.5 267 -->
  <path d="M 112.5 267 Q 270 -125 427.5 267" fill="none" stroke="#38bdf8" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="135" cy="215" r="4.5" fill="#f59e0b"/>
  <text x="122" y="232" text-anchor="end" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">−1</text>

  <circle cx="405" cy="215" r="4.5" fill="#f59e0b"/>
  <text x="415" y="232" text-anchor="start" fill="#fcd34d" font-size="10.5" font-weight="bold" font-family="sans-serif">5</text>

  <circle cx="180" cy="135" r="4.5" fill="#a855f7"/>
  <text x="169" y="139" text-anchor="end" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="sans-serif">5</text>

  <circle cx="270" cy="71" r="5.5" fill="#ec4899" stroke="#fce7f3" stroke-width="1.5"/>
  <text x="285" y="64" text-anchor="start" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">V(2, 9)</text>
</svg>

Observando todas as alturas ($y$) alcançadas por essa parábola, qual alternativa expressa CORRETAMENTE o **conjunto Imagem ($\text{Im}$)** da função?
(A) $\text{Im} = \{y \in \mathbb{R} \mid y \ge 9\}$
(B) $\text{Im} = \{y \in \mathbb{R} \mid y \le 2\}$
(C) $\text{Im} = \{y \in \mathbb{R} \mid -1 \le y \le 5\}$
(D) $\text{Im} = \{y \in \mathbb{R} \mid y \le 9\}$

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Passo a Passo:**
1. **Lembrar o significado de Conjunto Imagem ($\text{Im}$):** é o conjunto de todos os valores verticais (**$y$**) que a curva consegue atingir!
2. **Olhar para o teto e o chão do desenho:**
   * A parábola sobe até o vértice **$V(2,\; 9)$** — portanto, a maior altura alcançada é **$y = 9$** (inclusive, pois o vértice pertence à curva). Acima da altura $9$, não há nenhum ponto da parábola!
   * Os dois braços descem continuamente para baixo, ultrapassando o eixo $x$ sem parar (indo até $-\infty$).
3. **Escrever o intervalo vertical:** todos os números reais menores ou iguais a $9$:
   $$\text{Im} = \{y \in \mathbb{R} \mid y \le 9\}$$
* **Por que as outras estão erradas?**
  - (A) inverteu o sinal para $y \ge 9$, o que só valeria se a parábola abrisse para cima ($a > 0$) com ponto mínimo em $9$.
  - (B) pegou a coordenada horizontal $x_V = 2$ em vez da altura vertical $y_V = 9$.
  - (C) colocou as duas raízes horizontais ($-1$ e $5$) como se fossem o intervalo da Imagem vertical.

</details>

### Questão 39
**Bloco:** 04 — Função de 2º Grau | **Foco:** Parábola Tangente ao Eixo $x$ ($\Delta = 0$)

Observe o gráfico da função quadrática abaixo, que corta o eixo $y$ no ponto $(0,\; 9)$ e **apenas tangencia ("beija")** o eixo horizontal $x$ exatamente no ponto $V(3,\; 0)$:

<svg viewBox="0 0 560 295" class="w-full h-auto" role="img" aria-label="Parábola voltada para cima tangenciando o eixo x em apenas um ponto V(3, 0)">
  <rect x="6" y="6" width="548" height="283" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">CASO ESPECIAL NO GRÁFICO: PARÁBOLA TANGENTE AO EIXO x</text>

  <!-- Origem em (150, 235); sx = 50; sy = 18 -->
  <line x1="76" y1="235" x2="496" y2="235" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="496,231 506,235 496,239" fill="#94a3b8"/>
  <text x="514" y="239" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="150" y1="274" x2="150" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="146,48 150,38 154,48" fill="#94a3b8"/>
  <text x="160" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="139" y="251" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Parábola f(x) = (x - 3)^2 -> M 150 73 Q 300 397 450 73 -->
  <path d="M 150 73 Q 300 397 450 73" fill="none" stroke="#34d399" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="150" cy="73" r="5" fill="#38bdf8" stroke="#e0e7ff" stroke-width="1.4"/>
  <text x="138" y="77" text-anchor="end" fill="#7dd3fc" font-size="11.5" font-weight="bold" font-family="sans-serif">(0, 9)</text>

  <circle cx="300" cy="235" r="6" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.5"/>
  <text x="300" y="258" text-anchor="middle" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">V(3, 0) — toque único</text>
</svg>

Considerando o que essa geometria revela sobre a função, assinale a alternativa CORRETA:
(A) O discriminante vale $\Delta < 0$ e a função assume valores negativos para $x < 3$.
(B) O discriminante vale $\Delta > 0$ e a função possui duas raízes reais distintas.
(C) O discriminante vale $\Delta = 0$ e a função possui uma raiz real dupla em $x = 3$.
(D) O discriminante vale $\Delta = 0$ e a função possui ponto de máximo em $V(3, 0)$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Passo a Passo:**
1. **Interpretar o toque único no eixo horizontal $x$ ($\Delta = 0$):**
   * Se a parábola cruzasse o eixo $x$ em 2 lugares, teria $\Delta > 0$.
   * Se flutuasse sem encostar no eixo $x$, teria $\Delta < 0$.
   * Como ela **encosta (tangencia) em apenas 1 ponto**, as duas raízes se juntaram em uma só (**raiz real dupla**), o que só ocorre quando **$\Delta = 0$**!
2. **Confirmar a raiz dupla e a fórmula real:**
   * O toque acontece no vértice $V(3, 0)$, logo a única raiz é **$x = 3$** (fórmula: $f(x) = (x - 3)^2 = x^2 - 6x + 9$, onde $\Delta = 36 - 36 = 0$!).
* **Por que as outras estão erradas?**
  - (A) com $\Delta < 0$ a curva nem tocaria o eixo $x$; além disso, toda a curva está acima ou sobre o eixo $x$, nunca negativa!
  - (B) $\Delta > 0$ exigiria dois cruzamentos distintos no eixo $x$, o que o gráfico não mostra.
  - (D) acertou $\Delta = 0$, mas a parábola abre para **cima** ($a > 0$), logo $V(3, 0)$ é ponto de **mínimo**, e nunca de máximo.

</details>

### Questão 40
**Bloco:** 04 — Função de 2º Grau | **Foco:** Leitura Integrada do Gráfico (Raízes, $c = 0$, Vértice e Estudo do Sinal)

Observe no gráfico abaixo a parábola de uma função quadrática $f(x)$ que passa pela origem $(0,\; 0)$, volta a cruzar o eixo horizontal em $(6,\; 0)$ e atinge seu vértice no ponto $V(3,\; 9)$:

<svg viewBox="0 0 560 300" class="w-full h-auto" role="img" aria-label="Gráfico da parábola passando por (0, 0) e (6, 0) com vértice máximo em V(3, 9)">
  <rect x="6" y="6" width="548" height="288" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" fill="#e2e8f0" font-size="12.5" font-weight="bold" font-family="sans-serif">RAIO-X COMPLETO DA PARÁBOLA: RAÍZES, c = 0, VÉRTICE E SINAL</text>

  <!-- Origem em (130, 225); sx = 50; sy = 17 -->
  <line x1="76" y1="225" x2="496" y2="225" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="496,221 506,225 496,229" fill="#94a3b8"/>
  <text x="514" y="229" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">x</text>

  <line x1="130" y1="278" x2="130" y2="48" stroke="#94a3b8" stroke-width="1.8"/>
  <polygon points="126,48 130,38 134,48" fill="#94a3b8"/>
  <text x="140" y="50" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="sans-serif">y</text>

  <text x="118" y="242" text-anchor="end" fill="#94a3b8" font-size="11" font-family="sans-serif">0</text>

  <!-- Projeções de V(3, 9) -> (280, 72) -->
  <line x1="130" y1="72" x2="280" y2="72" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="280" y1="72" x2="280" y2="225" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="119" y="76" text-anchor="end" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">9</text>
  <text x="280" y="242" text-anchor="middle" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">3</text>

  <!-- Parábola f(x) = -x^2 + 6x -> M 105 280.25 Q 280 -136.25 455 280.25 -->
  <path d="M 105 280.25 Q 280 -136.25 455 280.25" fill="none" stroke="#38bdf8" stroke-width="3.2"/>

  <!-- Pontos em destaque -->
  <circle cx="130" cy="225" r="5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.4"/>
  <circle cx="430" cy="225" r="5" fill="#f59e0b" stroke="#fef3c7" stroke-width="1.4"/>
  <text x="444" y="242" text-anchor="start" fill="#fcd34d" font-size="11.5" font-weight="bold" font-family="sans-serif">(6, 0)</text>

  <circle cx="280" cy="72" r="5.5" fill="#ec4899" stroke="#fce7f3" stroke-width="1.5"/>
  <text x="295" y="65" text-anchor="start" fill="#f9a8d4" font-size="11.5" font-weight="bold" font-family="sans-serif">V(3, 9)</text>
</svg>

A respeito do gráfico apresentado, analise as afirmativas a seguir:

I. A função passa pela origem $(0,\; 0)$, logo o seu coeficiente independente é $c = 0$.  
II. A função assume valores estritamente positivos ($f(x) > 0$) apenas no intervalo $0 < x < 6$.  
III. O valor máximo da função ocorre quando $x = 9$ e esse valor máximo é igual a $3$.

Está(ão) CORRETA(S):
(A) apenas a afirmativa I.
(B) apenas as afirmativas I e II.
(C) apenas as afirmativas II e III.
(D) todas as afirmativas.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Passo a Passo (analisando cada item no desenho):**
* **Afirmativa I — VERDADEIRA:** como a curva passa exatamente por $(0, 0)$, temos $f(0) = 0$. Como o corte no eixo vertical $y$ vale sempre $(0, c)$, concluímos de imediato que **$c = 0$**! *(De fato, a lei da função é $f(x) = -x^2 + 6x$.)*
* **Afirmativa II — VERDADEIRA:** pedir $f(x) > 0$ é procurar onde o traço azul está **estritamente acima** do eixo horizontal $x$. Olhando para o desenho, a curva fica acima do chão **exatamente entre as duas raízes $0$ e $6$**, sem incluir os extremos onde $y = 0$: **$0 < x < 6$** ✓!
* **Afirmativa III — FALSA:** houve inversão clássica entre $x_V$ e $y_V$! Olhando no ponto máximo $V(3,\; 9)$:
  * A **entrada ($x_V$)** onde o máximo acontece vale **$x = 3$**.
  * A **altura máxima ($y_V$)** alcançada vale **$y = 9$**.
* Logo, apenas as afirmativas **I e II** estão corretas (**Alternativa B**).
* **Por que as outras estão erradas?**
  - (A) ignorou a veracidade da leitura visual direta do sinal positivo na afirmativa II.
  - (C) e (D) aceitaram a afirmativa III, caindo na inversão entre as coordenadas $(3, 9)$ do vértice.

</details>
