# Revisão Geral: Matemática e RLM — Semana 01 (Bateria de 30 Questões)

> **Objetivo:** Simulado e revisão geral com 30 questões variadas de concurso sobre **todos os conteúdos da Semana 01** de Matemática e RLM para o cargo de Oficial Administrativo:
> 1. **Conjuntos Numéricos ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{I}, \mathbb{R}$)** e Regra dos Sinais;
> 2. **Números Primos, MMC e MDC** em problemas práticos de escala e divisão de lotes;
> 3. **Operações com Frações** (Soma, Subtração, Multiplicação, Divisão e Fração de Quantidade);
> 4. **Números Decimais e Divisão com Vírgula**;
> 5. **Dízimas Periódicas** (Fração Geratriz Simples e Composta);
> 6. **Potenciação, Propriedades dos Expoentes e Notação Científica**;
> 7. **Radiciação e Fatoração Prima**;
> 8. **Expressões Numéricas Mistas e Hierarquia das Operações (PEMDAS)**.

---

## 📝 CADERNO DE 30 QUESTÕES DE MÚLTIPLA ESCOLHA

### Questão 01
**Banca:** VUNESP (Adaptada) | **Conteúdo:** Conjuntos Numéricos e Classificação

Considere os seguintes números reais:  
$x = -7$, $\quad y = \frac{15}{4}$, $\quad z = \sqrt{49}$, $\quad w = \sqrt{7}$, $\quad k = 0{,}333\dots$  
A respeito da classificação desses números nos conjuntos numéricos, assinale a afirmativa CORRETA:  
(A) $w$ pertence ao conjunto dos números racionais ($\mathbb{Q}$).  
(B) $z$ é um número irracional ($\mathbb{I}$), pois contém o símbolo de raiz quadrada.  
(C) $x \in \mathbb{Z}$, $z \in \mathbb{N}$, $y \in \mathbb{Q}$ e $k \in \mathbb{Q}$.  
(D) $k$ é um número irracional ($\mathbb{I}$) por ter infinitas casas decimais após a vírgula.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* $x = -7 \in \mathbb{Z}$ (inteiro negativo).  
* $z = \sqrt{49} = 7 \in \mathbb{N}$ (número natural).  
* $y = \frac{15}{4} = 3{,}75 \in \mathbb{Q}$ (número decimal exato, racional).  
* $k = 0{,}333\dots = \frac{1}{3} \in \mathbb{Q}$ (toda dízima periódica é racional, pois pode ser escrita como fração de dois inteiros).  
* $w = \sqrt{7} \approx 2{,}64575\dots \in \mathbb{I}$ (raiz quadrada não exata é irracional).  
* Portanto, a afirmativa (C) está 100% correta.
* **Gabarito:** Letra **C**.
</details>

---

### Questão 02
**Banca:** IBFC (Adaptada) | **Conteúdo:** Conjuntos Numéricos e Relações de Inclusão

Sobre a estrutura dos conjuntos numéricos fundamentais ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{I}$ e $\mathbb{R}$), assinale a afirmativa INCORRETA:  
(A) Todo número natural é também um número inteiro ($\mathbb{N} \subset \mathbb{Z}$).  
(B) A soma de dois números irracionais resulta sempre, obrigatoriamente, em outro número irracional.  
(C) O conjunto dos números racionais ($\mathbb{Q}$) é formado por todos os números que podem ser expressos na forma $\frac{a}{b}$, com $a \in \mathbb{Z}$ e $b \in \mathbb{Z}^*$.  
(D) O conjunto dos números reais ($\mathbb{R}$) é a união dos racionais com os irracionais ($\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$).  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* A alternativa (B) é falsa (e, portanto, o gabarito pedido). Contraexemplo clássico:  
  Sejam $a = \sqrt{5}$ e $b = -\sqrt{5}$ (ambos são irracionais).  
  A soma deles é: $\sqrt{5} + (-\sqrt{5}) = 0$, e $0$ é um número **racional e inteiro**, e não irracional.  
* Todas as outras afirmativas são postulados verdadeiros da teoria dos conjuntos numéricos.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 03
**Banca:** ACCESS (Foco Oficial Administrativo) | **Conteúdo:** MMC em Escala de Plantões e Rotinas

Em uma secretaria municipal, o servidor Carlos faz a conferência dos arquivos eletrônicos a cada 6 dias, a servidora Beatriz a cada 8 dias, e o supervisor Marcos a cada 12 dias. Se hoje todos coincidiram e realizaram a conferência juntos, após quantos dias os três voltarão a coincidir novamente nessa tarefa?  
(A) 18 dias  
(B) 24 dias  
(C) 36 dias  
(D) 48 dias  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Identificação do problema:** Eventos cíclicos periódicos que coincidem exigem o **Mínimo Múltiplo Comum (MMC)** entre os períodos: $\text{MMC}(6, 8, 12)$.  
* **Fatoração simultânea:**  
  $$6, 8, 12 \mid 2$$  
  $$3, 4, 6 \mid 2$$  
  $$3, 2, 3 \mid 2$$  
  $$3, 1, 3 \mid 3$$  
  $$1, 1, 1 \mid \text{Fim}$$  
* $\text{MMC} = 2 \times 2 \times 2 \times 3 = 2^3 \times 3 = 8 \times 3 = 24$ dias.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 04
**Banca:** VUNESP | **Conteúdo:** MDC em Divisão de Lotes e Arquivamento

Um oficial administrativo recebeu três lotes de processos para arquivar em pastas: o primeiro lote contém 48 processos, o segundo contém 72 processos e o terceiro contém 96 processos. Ele pretende organizar todos os processos em pastas com a **mesma quantidade máxima possível** de processos em cada uma, sem misturar lotes e sem deixar nenhum processo sobrando. Quantos processos haverá em cada pasta?  
(A) 12 processos  
(B) 16 processos  
(C) 24 processos  
(D) 32 processos  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Identificação do problema:** Dividir quantidades em lotes iguais com o maior tamanho possível exige o **Máximo Divisor Comum (MDC)**: $\text{MDC}(48, 72, 96)$.  
* **Fatoração simultânea (marcando os fatores comuns):**  
  - Divide todos por 2: $48, 72, 96 \to 24, 36, 48$ (fator comum: 2)  
  - Divide todos por 2: $24, 36, 48 \to 12, 18, 24$ (fator comum: 2)  
  - Divide todos por 2: $12, 18, 24 \to 6, 9, 12$ (fator comum: 2)  
  - Divide todos por 3: $6, 9, 12 \to 2, 3, 4$ (fator comum: 3)  
  - Os números restantes (2, 3, 4) não possuem mais divisores comuns além de 1.  
* $\text{MDC} = 2 \times 2 \times 2 \times 3 = 24$ processos por pasta.
* **Gabarito:** Letra **C**.
</details>

---

### Questão 05
**Banca:** FGV | **Conteúdo:** MDC e Total de Grupos/Pastas

No problema da questão anterior ($\text{MDC}(48, 72, 96) = 24$), se a banca perguntar **quantas pastas no total** o oficial administrativo utilizará para guardar todos os processos dos três lotes, o total de pastas será:  
(A) 7 pastas  
(B) 9 pastas  
(C) 10 pastas  
(D) 12 pastas  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* Total de processos no 1º lote: $48 \div 24 = 2$ pastas.  
* Total de processos no 2º lote: $72 \div 24 = 3$ pastas.  
* Total de processos no 3º lote: $96 \div 24 = 4$ pastas.  
* Total geral de pastas: $2 + 3 + 4 = 9$ pastas (ou soma total: $\frac{48 + 72 + 96}{24} = \frac{216}{24} = 9$ pastas).
* **Gabarito:** Letra **B**.
</details>

---

### Questão 06
**Banca:** Avança SP | **Conteúdo:** Adição e Subtração de Frações

O resultado da expressão fracionária $\frac{5}{6} - \frac{3}{8} + \frac{1}{4}$ é igual a:  
(A) $\frac{17}{24}$  
(B) $\frac{3}{10}$  
(C) $\frac{19}{24}$  
(D) $\frac{7}{12}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Calculando o MMC dos denominadores (6, 8, 4):**  
  $\text{MMC}(6, 8, 4) = 24$.  
* **Reduzindo as frações ao mesmo denominador comum:**  
  - Para $\frac{5}{6}$: $24 \div 6 = 4 \implies 4 \times 5 = 20 \implies \frac{20}{24}$  
  - Para $\frac{3}{8}$: $24 \div 8 = 3 \implies 3 \times 3 = 9 \implies \frac{9}{24}$  
  - Para $\frac{1}{4}$: $24 \div 4 = 6 \implies 6 \times 1 = 6 \implies \frac{6}{24}$  
* **Operando os numeradores:**  
  $$\frac{20 - 9 + 6}{24} = \frac{11 + 6}{24} = \frac{17}{24}$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 07
**Banca:** VUNESP | **Conteúdo:** Fração de Quantidade em Expediente Público

Do total de 240 processos físicos que estavam pendentes de análise na seção de protocolo de uma prefeitura, um servidor despachou $\frac{3}{8}$ pela manhã e $\frac{2}{5}$ do que restava à tarde. Ao final desse dia de trabalho, a quantidade de processos que ainda permaneceu pendente foi de:  
(A) 60 processos  
(B) 90 processos  
(C) 75 processos  
(D) 84 processos  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
1. **Despachados pela manhã:**  
   $$\frac{3}{8} \times 240 = 3 \times 30 = 90 \text{ processos}$$  
2. **Restante após a manhã:**  
   $$240 - 90 = 150 \text{ processos}$$  
3. **Despachados à tarde ($\frac{2}{5}$ do restante):**  
   $$\frac{2}{5} \times 150 = 2 \times 30 = 60 \text{ processos}$$  
4. **Processos que ainda permaneceram pendentes:**  
   $$150 - 60 = 90 \text{ processos}$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 08
**Banca:** Legalle | **Conteúdo:** Multiplicação e Divisão de Frações

O valor numérico simplificado da expressão $\left(\frac{4}{9} \times \frac{15}{8}\right) \div \frac{5}{6}$ é igual a:  
(A) 1  
(B) $\frac{3}{4}$  
(C) $\frac{5}{6}$  
(D) $\frac{4}{3}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Passo 1 — Multiplicação com simplificação prévia:**  
  $$\frac{4}{9} \times \frac{15}{8}$$  
  - Simplifica o 4 com o 8 (divide ambos por 4): sobram 1 no numerador e 2 no denominador.  
  - Simplifica o 15 com o 9 (divide ambos por 3): sobram 5 no numerador e 3 no denominador.  
  - Resultado: $\frac{1 \times 5}{3 \times 2} = \frac{5}{6}$.  
* **Passo 2 — Divisão pela terceira fração:**  
  $$\frac{5}{6} \div \frac{5}{6} = \frac{5}{6} \times \frac{6}{5} = 1$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 09
**Banca:** Quadrix | **Conteúdo:** Número Misto e Operações Fracionárias

O resultado do cálculo $2\frac{1}{3} - 1\frac{3}{4}$ equivale a:  
(A) $\frac{7}{12}$  
(B) $\frac{5}{12}$  
(C) $\frac{1}{2}$  
(D) $\frac{11}{12}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Conversão dos números mistos em frações impróprias:**  
  - $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$  
  - $1\frac{3}{4} = \frac{1 \times 4 + 3}{4} = \frac{7}{4}$  
* **Subtração:** $\text{MMC}(3, 4) = 12$.  
  $$\frac{7}{3} - \frac{7}{4} = \frac{28 - 21}{12} = \frac{7}{12}$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 10
**Banca:** ACCESS | **Conteúdo:** Multiplicação com Decimais em Compras Públicas

O setor de suprimentos de uma autarquia municipal adquiriu 18 resmas de papel sulfite ao custo unitário de R$ 24,75 cada uma. O valor total pago por essa aquisição foi de:  
(A) R$ 442,50  
(B) R$ 445,50  
(C) R$ 450,00  
(D) R$ 435,50  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* Montamos a multiplicação ignorando as vírgulas: $2475 \times 18$.  
  - $2475 \times 8 = 19800$  
  - $2475 \times 10 = 24750$  
  - Soma: $19800 + 24750 = 44550$.  
* Como $24{,}75$ tem 2 casas decimais, recuamos 2 casas decimais no resultado:  
  $$445{,}50 \implies \text{R\$} 445{,}50$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 11
**Banca:** VUNESP | **Conteúdo:** Divisão com Decimais (Regra das Casas Decimais)

Efetuando a divisão $14{,}7 \div 0{,}35$, obtém-se exatamente:  
(A) 4,2  
(B) 42  
(C) 420  
(D) 0,42  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Regra de Ouro da Divisão de Decimais:** Iguale o número de casas decimais e corte as vírgulas.  
  - $14{,}7$ tem 1 casa decimal $\implies$ vira $14{,}70$ (2 casas decimais).  
  - $0{,}35$ já tem 2 casas decimais.  
* Cortando as vírgulas: $1470 \div 35$.  
  - $147 \div 35 = 4$ com resto $7$ ($4 \times 35 = 140$).  
  - Baixa o 0: $70 \div 35 = 2$ com resto 0.  
  - Resultado final: **42**.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 12
**Banca:** FCC | **Conteúdo:** Conversão de Fração para Decimal

Ao converter a fração ordinária $\frac{7}{16}$ em sua representação decimal exata, obtém-se:  
(A) 0,4375  
(B) 0,425  
(C) 0,4575  
(D) 0,4125  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* Arme a divisão $7 \div 16$:  
  - $7 < 16 \implies 0{,}$ no quociente e acrescenta zero: $70 \div 16 = 4$ (resto 6, pois $4 \times 16 = 64$).  
  - Acrescenta zero: $60 \div 16 = 3$ (resto 12, pois $3 \times 16 = 48$).  
  - Acrescenta zero: $120 \div 16 = 7$ (resto 8, pois $7 \times 16 = 112$).  
  - Acrescenta zero: $80 \div 16 = 5$ (resto 0, pois $5 \times 16 = 80$).  
* Resultado: $0{,}4375$.
* **Gabarito:** Letra **A**.
</details>

---

### Questão 13
**Banca:** ACCESS | **Conteúdo:** Dízima Periódica Simples (Fração Geratriz)

A dízima periódica simples $1{,}555\dots$ tem como fração geratriz irredutível:  
(A) $\frac{15}{9}$  
(B) $\frac{14}{9}$  
(C) $\frac{5}{9}$  
(D) $\frac{16}{9}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Método 1 (Decomposição):**  
  $$1{,}555\dots = 1 + 0{,}555\dots = 1 + \frac{5}{9} = \frac{9 \times 1 + 5}{9} = \frac{14}{9}$$  
* **Método 2 (Regra Prática do Numerador):**  
  $$\text{Numerador} = (\text{Parte inteira e período juntos}) - (\text{Parte inteira}) = 15 - 1 = 14$$  
  $$\text{Denominador} = 9 \implies \frac{14}{9}$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 14
**Banca:** FGV | **Conteúdo:** Dízima Periódica Composta (Fração Geratriz)

A fração geratriz irredutível da dízima periódica composta $0{,}41666\dots$ é:  
(A) $\frac{5}{12}$  
(B) $\frac{41}{90}$  
(C) $\frac{25}{60}$  
(D) $\frac{7}{18}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* Na dízima $0{,}41666\dots$:  
  - Antiperíodo (não se repete): $41$ (tem 2 algarismos $\implies$ dois zeros no denominador).  
  - Período (se repete): $6$ (tem 1 algarismo $\implies$ um nove no denominador).  
* **Fórmula do Numerador:**  
  $$\text{Numerador} = 416 - 41 = 375$$  
* **Denominador:**  
  $$\text{Denominador} = 900$$  
* **Simplificando a fração $\frac{375}{900}$:**  
  - Divide por 25: $\frac{375 \div 25}{900 \div 25} = \frac{15}{36}$  
  - Divide por 3: $\frac{15 \div 3}{36 \div 3} = \frac{5}{12}$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 15
**Banca:** IBFC | **Conteúdo:** Expressão Mista com Fração, Decimal e Dízima

O valor numérico da expressão $\left(0{,}333\dots + \frac{1}{2}\right) \times 1{,}2$ é igual a:  
(A) 1  
(B) 0,9  
(C) 1,2  
(D) 1,5  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Passo 1 — Converter todos os elementos para frações:**  
  - $0{,}333\dots = \frac{3}{9} = \frac{1}{3}$  
  - $1{,}2 = \frac{12}{10} = \frac{6}{5}$  
* **Passo 2 — Resolver a soma entre parênteses:**  
  $$\frac{1}{3} + \frac{1}{2} = \frac{2 + 3}{6} = \frac{5}{6}$$  
* **Passo 3 — Multiplicar pelo fator externo:**  
  $$\frac{5}{6} \times \frac{6}{5} = 1$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 16
**Banca:** VUNESP | **Conteúdo:** Potenciação e Regra dos Sinais com Expoentes

Considere as duas expressões:  
$A = (-3)^4 \quad \text{e} \quad B = -3^4$  
Os valores respectivos de $A$ e $B$ são:  
(A) $81$ e $81$  
(B) $81$ e $-81$  
(C) $-81$ e $81$  
(D) $-81$ e $-81$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* Em $A = (-3)^4$, a base inteira é negativa e está protegida por parênteses; como o expoente é par, o resultado é positivo:  
  $$(-3) \times (-3) \times (-3) \times (-3) = +81$$  
* Em $B = -3^4$, o expoente 4 afeta **apenas** o algarismo 3, mantendo o sinal de menos que está fora:  
  $$-(3^4) = -(3 \times 3 \times 3 \times 3) = -81$$  
* Portanto: $A = 81$ e $B = -81$.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 17
**Banca:** ACCESS | **Conteúdo:** Propriedades das Potências de Mesma Base

A forma mais simples da expressão numérica $\frac{2^7 \times 2^5 \times (2^3)^2}{2^{15}}$ é:  
(A) $2^2 = 4$  
(B) $2^3 = 8$  
(C) $2^4 = 16$  
(D) $2^5 = 32$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Potência de potência no numerador:**  
  $$(2^3)^2 = 2^{3 \times 2} = 2^6$$  
* **Multiplicação de potências de mesma base no numerador (soma os expoentes):**  
  $$2^7 \times 2^5 \times 2^6 = 2^{7 + 5 + 6} = 2^{18}$$  
* **Divisão de potências de mesma base (subtrai os expoentes):**  
  $$\frac{2^{18}}{2^{15}} = 2^{18 - 15} = 2^3 = 8$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 18
**Banca:** Legalle | **Conteúdo:** Expoente Negativo e Fração

O valor da expressão $\left(\frac{2}{3}\right)^{-2} + \left(\frac{1}{2}\right)^{-3}$ é:  
(A) $\frac{41}{4}$  
(B) $\frac{37}{4}$  
(C) $\frac{10}{3}$  
(D) $10$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Regra do expoente negativo:** Inverte a fração da base e torna o expoente positivo:  
  - $\left(\frac{2}{3}\right)^{-2} = \left(\frac{3}{2}\right)^2 = \frac{9}{4}$  
  - $\left(\frac{1}{2}\right)^{-3} = \left(\frac{2}{1}\right)^3 = 2^3 = 8 = \frac{32}{4}$  
* **Somando as parcelas:**  
  $$\frac{9}{4} + \frac{32}{4} = \frac{41}{4} = 10{,}25$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 19
**Banca:** FCC | **Conteúdo:** Notação Científica nas Rotinas Administrativas

Em um relatório de gestão orçamentária, registrou-se que o saldo arrecadado em determinada rubrica municipal foi de **R$ 38.400.000,00**. Na forma de notação científica padrão ($N \times 10^n$, com $1 \le N < 10$), esse número é expresso corretamente por:  
(A) $38{,}4 \times 10^6$  
(B) $3{,}84 \times 10^7$  
(C) $3{,}84 \times 10^8$  
(D) $0{,}384 \times 10^8$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* A vírgula original está após o último zero de $38.400.000{,}$.  
* Para deixar a mantissa $N$ entre 1 e 10 ($N = 3{,}84$), a vírgula deve se deslocar **7 casas para a esquerda**:  
  $$38.400.000 = 3{,}84 \times 10^7$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 20
**Banca:** VUNESP | **Conteúdo:** Radiciação Exata por Decomposição Prima

A raiz quadrada exata de $1.296$ é igual a:  
(A) 34  
(B) 36  
(C) 38  
(D) 46  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Decomposição em fatores primos:**  
  $$1296 \div 2 = 648$$  
  $$648 \div 2 = 324$$  
  $$324 \div 2 = 162$$  
  $$162 \div 2 = 81$$  
  $$81 \div 3 = 27$$  
  $$27 \div 3 = 9$$  
  $$9 \div 3 = 3$$  
  $$3 \div 3 = 1$$  
* Logo: $1296 = 2^4 \times 3^4$.  
* **Extraindo a raiz quadrada (divide os expoentes pelo índice 2):**  
  $$\sqrt{1296} = \sqrt{2^4 \times 3^4} = 2^{4/2} \times 3^{4/2} = 2^2 \times 3^2 = 4 \times 9 = 36$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 21
**Banca:** ACCESS | **Conteúdo:** Radiciação com Números Decimais

O valor da expressão $\sqrt{0{,}0064} + \sqrt{0{,}81}$ é igual a:  
(A) 0,98  
(B) 0,88  
(C) 1,7  
(D) 0,17  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Convertendo os decimais em frações para não errar a quantidade de zeros:**  
  - $\sqrt{0{,}0064} = \sqrt{\frac{64}{10000}} = \frac{\sqrt{64}}{\sqrt{10000}} = \frac{8}{100} = 0{,}08$  
  - $\sqrt{0{,}81} = \sqrt{\frac{81}{100}} = \frac{\sqrt{81}}{\sqrt{100}} = \frac{9}{10} = 0{,}90$  
* **Somando:**  
  $$0{,}08 + 0{,}90 = 0{,}98$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 22
**Banca:** FGV | **Conteúdo:** Hierarquia das Operações (PEMDAS)

O resultado numérico da expressão $18 - 3 \times [4 + 2 \times (7 - 5)^2]$ é igual a:  
(A) $-18$  
(B) 0  
(C) 6  
(D) 12  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
1. **Dentro dos parênteses:** $7 - 5 = 2$.  
2. **Potência:** $(2)^2 = 4$.  
3. **Multiplicação dentro dos colchetes:** $2 \times 4 = 8$.  
4. **Soma dentro dos colchetes:** $4 + 8 = 12$.  
5. **Multiplicação fora dos colchetes:** $3 \times 12 = 36$.  
6. **Subtração final:**  
   $$18 - 36 = -18$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 23
**Banca:** Quadrix | **Conteúdo:** MMC e Divisão com Resto

Qual é o menor número natural que, dividido por 12, por 15 e por 20, deixa sempre resto igual a 5?  
(A) 55  
(B) 65  
(C) 75  
(D) 125  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* O menor número que é divisível simultaneamente por 12, 15 e 20 é o $\text{MMC}(12, 15, 20)$:  
  - $12 = 2^2 \times 3$  
  - $15 = 3 \times 5$  
  - $20 = 2^2 \times 5$  
  - $\text{MMC} = 2^2 \times 3 \times 5 = 4 \times 15 = 60$.  
* Como o número precisa deixar **resto 5** em todas essas divisões, basta somar 5 ao MMC:  
  $$\text{Número} = 60 + 5 = 65$$  
* Conferência:  
  - $65 \div 12 = 5$ com resto 5;  
  - $65 \div 15 = 4$ com resto 5;  
  - $65 \div 20 = 3$ com resto 5.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 24
**Banca:** IBFC | **Conteúdo:** Propriedade do Produto MMC $\times$ MDC

O produto entre o MMC e o MDC de dois números naturais $A$ e $B$ é igual a $720$. Sabendo que um desses números é $24$, o valor do outro número é:  
(A) 25  
(B) 30  
(C) 32  
(D) 36  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Propriedade fundamental:** Para quaisquer dois números naturais $A$ e $B$, vale:  
  $$\text{MMC}(A, B) \times \text{MDC}(A, B) = A \times B$$  
* Substituindo os valores dados pelo enunciado:  
  $$720 = 24 \times B \implies B = \frac{720}{24} = 30$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 25
**Banca:** ACCESS | **Conteúdo:** Operações com Frações em Orçamento Público

Em uma secretaria municipal, $\frac{1}{4}$ da dotação orçamentária anual destina-se ao pagamento de energia e água, $\frac{2}{5}$ ao contrato de limpeza e segurança e $\frac{3}{10}$ à manutenção predial. A fração restante que sobra para despesas imprevistas é:  
(A) $\frac{1}{20}$  
(B) $\frac{1}{10}$  
(C) $\frac{3}{20}$  
(D) $\frac{1}{5}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Soma das despesas fixadas:**  
  $$\frac{1}{4} + \frac{2}{5} + \frac{3}{10}$$  
  $\text{MMC}(4, 5, 10) = 20$.  
  - $\frac{1}{4} = \frac{5}{20}$  
  - $\frac{2}{5} = \frac{8}{20}$  
  - $\frac{3}{10} = \frac{6}{20}$  
  - Total comprometido: $\frac{5 + 8 + 6}{20} = \frac{19}{20}$.  
* **Fração restante:**  
  $$1 - \frac{19}{20} = \frac{20}{20} - \frac{19}{20} = \frac{1}{20}$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 26
**Banca:** Avança SP | **Conteúdo:** Potência com Expoente Fracionário

O valor numérico simplificado de $64^{\frac{2}{3}}$ é igual a:  
(A) 8  
(B) 16  
(C) 32  
(D) 4  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Regra do expoente fracionário:** $\displaystyle a^{\frac{m}{n}} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$.  
* Fatorando $64$: $64 = 4^3 = 2^6$.  
* Portanto:  
  $$64^{\frac{2}{3}} = (4^3)^{\frac{2}{3}} = 4^{3 \times \frac{2}{3}} = 4^2 = 16$$  
  *(Ou: $\sqrt[3]{64} = 4$, e $4^2 = 16$)*.
* **Gabarito:** Letra **B**.
</details>

---

### Questão 27
**Banca:** VUNESP | **Conteúdo:** Divisão Inteira, Dízima e Fração Equivalente

Qual das alternativas a seguir apresenta uma fração que gera uma **dízima periódica** (e não um decimal exato)?  
(A) $\frac{11}{40}$  
(B) $\frac{9}{25}$  
(C) $\frac{7}{12}$  
(D) $\frac{13}{16}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Critério de Ouro do Decimal Exato:** Uma fração irredutível só gera número decimal exato se o seu denominador contiver **exclusivamente** fatores primos 2 e/ou 5.  
  - Em (A): $40 = 2^3 \times 5 \implies$ decimal exato ($0{,}275$).  
  - Em (B): $25 = 5^2 \implies$ decimal exato ($0{,}36$).  
  - Em (D): $16 = 2^4 \implies$ decimal exato ($0{,}8125$).  
  - Em (C): $12 = 2^2 \times 3$. O fator primo **3** no denominador gera dízima periódica ($\frac{7}{12} = 0{,}58333\dots$).
* **Gabarito:** Letra **C**.
</details>

---

### Questão 28
**Banca:** FCC | **Conteúdo:** Comparação e Ordenação de Frações

Dadas as frações $P = \frac{3}{5}$, $Q = \frac{5}{8}$ e ${R} = \frac{7}{12}$, a ordem estritamente crescente entre elas é:  
(A) ${R} < P < Q$  
(B) $P < {R} < Q$  
(C) $Q < P < {R}$  
(D) ${R} < Q < P$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Método 1 — Comparação via números decimais:**  
  - $P = \frac{3}{5} = 0{,}600$  
  - $Q = \frac{5}{8} = 0{,}625$  
  - $R = \frac{7}{12} = 0{,}58333\dots$  
* Comparando os decimais:  
  $$0{,}583\dots (R) < 0{,}600 (P) < 0{,}625 (Q) \implies R < P < Q$$
* **Gabarito:** Letra **A**.
</details>

---

### Questão 29
**Banca:** Legalle | **Conteúdo:** Expressão Numérica com Frações e Potências

O valor da expressão $\frac{\left(\frac{1}{2}\right)^2 + \left(\frac{1}{3}\right)^2}{\frac{1}{6}}$ é:  
(A) $\frac{13}{36}$  
(B) $\frac{13}{6}$  
(C) $\frac{25}{6}$  
(D) $\frac{12}{13}$  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Passo 1 — Calcular as potências no numerador:**  
  - $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$  
  - $\left(\frac{1}{3}\right)^2 = \frac{1}{9}$  
* **Passo 2 — Somar as frações do numerador:**  
  $$\frac{1}{4} + \frac{1}{9} = \frac{9 + 4}{36} = \frac{13}{36}$$  
* **Passo 3 — Dividir pelo denominador ($\frac{1}{6}$):**  
  $$\frac{13}{36} \div \frac{1}{6} = \frac{13}{36} \times \frac{6}{1} = \frac{13 \times 1}{6 \times 1} = \frac{13}{6}$$
* **Gabarito:** Letra **B**.
</details>

---

### Questão 30
**Banca:** ACCESS (Foco Oficial Administrativo) | **Conteúdo:** Problema Síntese da Semana 01

Uma impressora departamental rápida imprime 45 páginas por minuto. Em um mutirão administrativo, foram impressas 3 apostilas com 120 páginas cada e 4 relatórios com 45 páginas cada. O tempo total estritamente necessário para concluir essas impressões foi de:  
(A) 10 minutos  
(B) 12 minutos  
(C) 14 minutos  
(D) 15 minutos  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Total de páginas a serem impressas:**  
  - 3 apostilas de 120 páginas: $3 \times 120 = 360$ páginas.  
  - 4 relatórios de 45 páginas: $4 \times 45 = 180$ páginas.  
  - Total geral: $360 + 180 = 540$ páginas.  
* **Cálculo do tempo:**  
  $$\text{Tempo} = \frac{\text{Total de páginas}}{\text{Velocidade}} = \frac{540}{45}$$  
  - $540 \div 45 = 12$ minutos.
* **Gabarito:** Letra **B**.
</details>
