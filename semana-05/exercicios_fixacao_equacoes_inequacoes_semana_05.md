# Lista de Fixação Direta: 20 Questões de Equação e Inequação de 2º Grau (Semana 05)

> **Objetivo deste Caderno:** Treino direto e sem rodeios para fixar na mão o cálculo de **Equações de 2º Grau (Questões 01 a 10)** e **Inequações de 2º Grau pelo Estudo do Sinal (Questões 11 a 20)**, antes de enfrentar problemas contextualizados longos.  
> **Pré-requisito recomendado:** [Aula Completa — Semana 05 (Matemática e RLM)](matematica_semana_05.md) (Eixos 1 e 2).  
> **Como usar:** Resolva cada conta no caderno sem pular sinais, marque sua alternativa no formulário interativo e confira o gabarito desmontado passo a passo com **Prova Real** logo abaixo de cada questão.

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
(C) Não possui nenhuma raiz real no conjunto $\mathbb{R}$: $S = \varnothing$.
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
(A) O discriminante vale $\Delta = -20$ e a equação não possui raízes reais ($S = \varnothing$).
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
(A) $x < 3$ ou $x > 4$
(B) $3 \le x \le 4$
(C) $x \le 3$ ou $x \ge 4$
(D) $3 < x < 4$

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
(A) $1 \le x \le 5$
(B) $x \le 1$ ou $x \ge 5$
(C) $x < 1$ ou $x > 5$
(D) $1 < x < 5$

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
(A) $x > 3$
(B) $-3 < x < 3$
(C) $x < -3$ ou $x > 3$
(D) $x \le -3$ ou $x \ge 3$

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
(A) $1 \le x \le 3$
(B) $1 < x < 3$
(C) $x < 1$ ou $x > 3$
(D) $x \le 1$ ou $x \ge 3$

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
