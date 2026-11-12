# Banco Oficial Instituto ACCESS: 15 Questões Reais e Adaptadas de Matemática e RLM (Semana 02)

> **Objetivo:** Treino intensivo e inédito com **15 questões calibradas no Padrão Instituto ACCESS** (12 extraídas/adaptadas diretamente de provas oficiais do acervo de treino diário e 3 modeladas no formato canônico da banca para cobrir 100% do edital da Semana 02).  
> **Conteúdos Cobrados (Semana 02):**  
> 1. **Teoria dos Conjuntos:** Representação por extensão/propriedade, pertinência ($\in$), inclusão ($\subset$), conjunto vazio ($\emptyset$ vs. $\{\emptyset\}$), quantidade de subconjuntos ($2^n$) e operações ($\cup, \cap, -$);  
> 2. **Diagramas de Venn (2 e 3 Conjuntos):** Descoberta da interseção (Regra do Excesso), "pelo menos um", "exclusivamente um", equacionamento de regiões e Método da Cebola;  
> 3. **Razões e Proporções:** Razão parte-parte vs. parte-todo, razão entre grandezas e propriedade fundamental da proporção;  
> 4. **Divisão Proporcional:** Método das fichas ($k$) em divisão diretamente proporcional e inversão de pesos + MMC na divisão inversamente proporcional.  
> **Como usar:** Leia com calma, resolva no caderno sem pular etapas, selecione sua alternativa e clique em **Responder e Corrigir** para conferir a resolução comentada passo a passo.

---

## 📝 CADERNO DE 15 QUESTÕES — PADRÃO INSTITUTO ACCESS (SEMANA 02)

### Questão 01
**Banca:** FUNDATEC (ELETROCAR — 2023 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 1 — Teoria dos Conjuntos (Representação por Extensão e Conjunto $\mathbb{N}$)

No setor de protocolo de uma empresa pública, os códigos numéricos válidos para arquivamento urgente foram definidos por meio da propriedade matemática $A = \{x \in \mathbb{N} \mid x \le 5\}$. Ao transcrever essa regra para a listagem completa no sistema, a representação CORRETA por extensão do conjunto $A$ é:  
(A) $A = \{0, 1, 2, 3, 4, 5\}$.  
(B) $A = \{1, 2, 3, 4, 5\}$.  
(C) $A = \{0, 1, 2, 3, 4\}$.  
(D) $A = \{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5\}$.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Decodificando a notação por propriedade:**  
  - $x \in \mathbb{N}$: os elementos pertencem ao conjunto dos **números naturais**, que em concursos brasileiros começa no **zero** ($\mathbb{N} = \{0, 1, 2, 3, 4, 5, \dots\}$). Só excluiria o zero se houvesse o asterisco ($\mathbb{N}^*$).  
  - $x \le 5$: o símbolo $\le$ significa **"menor OU igual a $5$"**, portanto o próprio número $5$ está incluído no limite.  
* **Listando os elementos:** $A = \{0, 1, 2, 3, 4, 5\}$.  
* **Análise dos distratores:**  
  - (B) Erro clássico: excluir o $0$ como se fosse $\mathbb{N}^*$.  
  - (C) Leu o sinal como $<$ (estritamente menor que $5$) em vez de $\le$.  
  - (D) Confundiu os Naturais ($\mathbb{N}$) com os Inteiros ($\mathbb{Z}$), incluindo negativos.
* **Gabarito:** Letra **A**.
</details>

---

### Questão 02
**Banca:** FUNDATEC (Pref. Barra do Guarita/RS — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 1 — Teoria dos Conjuntos (Operação de Interseção)

Durante a conferência de duas listas de etiquetas numeradas em uma repartição municipal, o servidor verificou que:
- O conjunto $S$ reúne os números naturais **não nulos** múltiplos de $3$ e menores que $30$;
- O conjunto $T$ reúne os números naturais **positivos** pares e menores que $20$.

Assinale a alternativa que apresenta CORRETAMENTE o conjunto resultante da interseção $S \cap T$:  
(A) $\{6, 12, 18\}$.  
(B) $\{3, 6, 12\}$.  
(C) $\{6, 12, 18, 24\}$.  
(D) $\{2, 6, 12, 18\}$.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Passo 1 — Listar por extensão os dois conjuntos:**  
  - $S$ (múltiplos positivos de $3$ menores que $30$): $S = \{3, 6, 9, 12, 15, 18, 21, 24, 27\}$. *(Atenção: "menores que $30$" exclui o $30$).*  
  - $T$ (pares positivos menores que $20$): $T = \{2, 4, 6, 8, 10, 12, 14, 16, 18\}$. *(Atenção: "menores que $20$" exclui o $20$).*  
* **Passo 2 — Calcular a interseção ($S \cap T$):**  
  A interseção seleciona apenas os elementos que pertencem **simultaneamente** a $S$ e a $T$ (ou seja, múltiplos de $3$ que também são pares e menores que $20$):  
  $$S \cap T = \{6, 12, 18\}$$  
* **Análise dos distratores:**  
  - (B) Incluiu $3$ (que é ímpar) e deixou de fora o $18$.  
  - (C) Incluiu o $24$, esquecendo a trava do conjunto $T$ (menores que $20$).  
  - (D) Incluiu o $2$, que não é múltiplo de $3$.
* **Gabarito:** Letra **A**.
</details>

---

### Questão 03
**Banca:** Modelada no Padrão Instituto ACCESS (2026 — Formato Itens Romanos) | **Assunto:** Eixo 1 — Pertinência ($\in$), Inclusão ($\subset$), Conjunto Vazio e Subconjuntos ($2^n$)

No controle patrimonial de uma secretaria municipal, quatro caixas-arquivo receberam códigos registrados no conjunto $K = \{2, 5, 8, 11\}$. A respeito das relações e propriedades da Teoria dos Conjuntos aplicadas a $K$, analise as afirmativas a seguir:  

I. A relação $5 \in K$ está grafada corretamente, pois $5$ é um elemento pertencente ao conjunto $K$.  
II. A notação $\{\emptyset\}$ representa o conjunto vazio, possuindo zero elementos em seu interior.  
III. O conjunto $K$ possui exatamente $16$ subconjuntos distintos, considerando inclusive o conjunto vazio e o próprio conjunto $K$.  
IV. A relação $\{2, 8\} \subset K$ está correta, pois $\{2, 8\}$ configura um subconjunto contido em $K$.  

Está CORRETO apenas o que se afirma em:  
(A) I e II.  
(B) I, III e IV.  
(C) II, III e IV.  
(D) I, II e IV.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Item I (Correto):** O símbolo $\in$ (pertence) liga **elemento** (sem chaves de subconjunto) a **conjunto**. Como $5$ é um dos quatro elementos de $K$, a escrita $5 \in K$ é perfeita.  
* **Item II (Incorreto — Pegadinha clássica!):** O conjunto vazio é representado por $\emptyset$ **ou** por $\{ \}$, nunca um dentro do outro. Quando se escreve $\{\emptyset\}$, cria-se um conjunto **unitário** (uma "caixa" com $1$ elemento lá dentro, que é o símbolo $\emptyset$). Logo, $n(\{\emptyset\}) = 1$, e não zero.  
* **Item III (Correto):** O número total de subconjuntos (conjunto das partes) de um conjunto com $n$ elementos é dado por $2^n$. Como $n(K) = 4$, temos $2^4 = 2 \times 2 \times 2 \times 2 = \mathbf{16}$ subconjuntos.  
* **Item IV (Correto):** Como $\{2, 8\}$ está entre chaves, trata-se de um **conjunto** (subconjunto). A relação entre conjunto e conjunto faz-se com símbolo de inclusão ($\subset$), e todos os seus elementos pertencem a $K$.  
* **Gabarito:** Letra **B** (I, III e IV).
</details>

---

### Questão 04
**Banca:** Creative Group (Pref. Camaquã/RS — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 2 — Diagrama de Venn com 2 Conjuntos (Descoberta do Universo Total)

Em um levantamento interno sobre qualidade de vida e lazer promovido pela Prefeitura com um grupo de adultos, foram feitas duas perguntas para que respondessem "sim" ou "não":  
- *"Você gosta de cinema?"*  
- *"Você gosta de viajar?"*  

Ao tabular os formulários, verificou-se que: $80$ adultos responderam sim à primeira pergunta; $60$ responderam sim à segunda; $30$ responderam sim a ambas; e $50$ responderam não a ambas. Com base nesses dados, quantos adultos foram entrevistados ao todo?  
(A) 130 adultos.  
(B) 140 adultos.  
(C) 160 adultos.  
(D) 220 adultos.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Passo 1 — Preencher o Diagrama de Venn sempre pelo miolo (interseção):**  
  - Gostam de **ambos** (Cinema $\cap$ Viajar) $= \mathbf{30}$.  
  - Gostam **apenas de cinema**: $80 - 30 = \mathbf{50}$.  
  - Gostam **apenas de viajar**: $60 - 30 = \mathbf{30}$.  
  - Não gostam de **nenhum** dos dois (região externa): $\mathbf{50}$.  
* **Passo 2 — Somar as quatro regiões disjuntas (sem sobreposição):**  
  $$\text{Total} = 50 \text{ (só cinema)} + 30 \text{ (ambos)} + 30 \text{ (só viajar)} + 50 \text{ (nenhum)} = \mathbf{160} \text{ adultos}$$  
  *(Conferência pela fórmula: $n(C \cup V) = 80 + 60 - 30 = 110$, somando os $50$ de fora $\implies 110 + 50 = 160$).*  
* **Análise dos distratores:**  
  - (A) e (B) Erros na subtração da interseção ou omissão do miolo na soma final ($50 + 30 + 50 = 130$).  
  - (D) Erro clássico de somar tudo bruto sem descontar a interseção ($80 + 60 + 30 + 50 = 220$).
* **Gabarito:** Letra **C**.
</details>

---

### Questão 05
**Banca:** FUNDATEC (Pref. Arroio do Sal/RS — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 2 — Diagrama de Venn com Relação Proporcional entre Regiões Exclusivas

A Secretaria Municipal de Turismo realizou uma pesquisa com $210$ moradores para verificar se eles gostam de tomar banho de mar e/ou de rio, sabendo que todos os entrevistados escolheram ao menos uma dessas duas opções. Os dados mostraram que $35$ moradores responderam que gostam de ambos (mar e rio), e que o número de moradores que gostam de tomar banho **somente de mar** é o **quádruplo** dos que gostam de tomar banho **somente de rio**. Nessas condições, quantos moradores, ao total, gostam de tomar banho de **rio**?  
(A) 35 moradores.  
(B) 70 moradores.  
(C) 140 moradores.  
(D) 175 moradores.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Passo 1 — Montar as 3 regiões internas do Diagrama de Venn:**  
  - Miolo (ambos, mar e rio) $= 35$.  
  - Seja $x$ o número de moradores que gostam **somente de rio**.  
  - Pelo enunciado, quem gosta **somente de mar** é o quádruplo disso: $4x$.  
* **Passo 2 — Igualar a soma das 3 regiões ao total de $210$ moradores:**  
  $$4x + 35 + x = 210$$  
  $$5x + 35 = 210 \implies 5x = 210 - 35 \implies 5x = 175 \implies x = \frac{175}{5} = \mathbf{35}$$  
* **Passo 3 — Atenção máxima ao que a pergunta pediu:**  
  Ela NÃO pediu "somente de rio" ($x = 35$, que está na Letra A como armadilha!). Ela pediu **"ao total, gostam de tomar banho de rio"**, que é o círculo inteiro do rio (**somente rio + ambos**):  
  $$\text{Total Rio} = 35 + 35 = \mathbf{70} \text{ moradores}$$  
* **Análise dos distratores:**  
  - (A) $35$ é apenas $x$ (somente rio).  
  - (C) $140 = 4 \times 35$ (somente mar).  
  - (D) $175 = 140 + 35$ (total de mar).
* **Gabarito:** Letra **B**.
</details>

---

### Questão 06
**Banca:** Modelada no Padrão Instituto ACCESS (2026 — Formato Verdadeiro ou Falso) | **Assunto:** Eixo 2 — Diagrama de Venn (Descoberta do Miolo pela Regra do Excesso)

Em uma autarquia municipal com $90$ servidores, foi realizado um levantamento sobre o conhecimento de duas normas internas de atendimento: a Norma A e a Norma B. Constatou-se que $58$ servidores conhecem a Norma A, $44$ conhecem a Norma B e $10$ servidores não conhecem nenhuma das duas normas. Com base nesses dados, avalie as assertivas a seguir e assinale V (verdadeiro) ou F (falso):  

(__) Exatamente $22$ servidores conhecem **ambas** as normas (A e B).  
(__) Exatamente $36$ servidores conhecem **apenas** a Norma A.  
(__) Exatamente $20$ servidores conhecem **apenas** a Norma B.  
(__) Exatamente $80$ servidores conhecem **pelo menos uma** das duas normas.  

A sequência CORRETA, de cima para baixo, é:  
(A) V – F – V – F.  
(B) F – V – V – V.  
(C) V – V – V – F.  
(D) V – V – F – V.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Comentário Passo a Passo:**  
* **Passo 1 — Descobrir o miolo oculto pela Regra do Excesso:**  
  - Soma bruta informada $= 58 \text{ (Norma A)} + 44 \text{ (Norma B)} + 10 \text{ (Nenhuma)} = 112$.  
  - Como o universo real tem $90$ servidores, quem foi contado duas vezes é o excesso:  
    $$n(A \cap B) = 112 - 90 = \mathbf{22} \text{ servidores}$$  
  Logo, a **1ª assertiva é V**.  
* **Passo 2 — Descontar o miolo para achar as partes exclusivas:**  
  - **Apenas Norma A:** $58 - 22 = \mathbf{36}$ servidores $\implies$ **2ª assertiva é V**.  
  - **Apenas Norma B:** $44 - 22 = \mathbf{22}$ servidores (e não $20$) $\implies$ **3ª assertiva é F**.  
* **Passo 3 — Conferir "pelo menos uma" (União $A \cup B$):**  
  - Do total de $90$, tiramos os $10$ que não conhecem nenhuma: $90 - 10 = \mathbf{80}$ (ou somando as regiões internas: $36 + 22 + 22 = 80$) $\implies$ **4ª assertiva é V**.  
* **Sequência final:** V – V – F – V.  
* **Gabarito:** Letra **D**.
</details>

---

### Questão 07
**Banca:** Modelada no Padrão Instituto ACCESS (2026 — Situação Prática de Repartição Pública) | **Assunto:** Eixo 2 — Diagrama de Venn com 3 Conjuntos ("Método da Cebola")

A Diretoria de Tecnologia da Prefeitura consultou $150$ servidores administrativos sobre a utilização rotineira de três sistemas internos: **Protocolo ($P$)**, **Compras ($C$)** e **Recursos Humanos ($H$)**. O relatório consolidou os seguintes números:
- $65$ utilizam o sistema $P$;
- $50$ utilizam o sistema $C$;
- $45$ utilizam o sistema $H$;
- $20$ utilizam os sistemas $P$ e $C$;
- $18$ utilizam os sistemas $P$ e $H$;
- $14$ utilizam os sistemas $C$ e $H$;
- $8$ utilizam os **três** sistemas simultaneamente.

Nessas condições, quantos dos servidores consultados utilizam **EXCLUSIVAMENTE UM** desses três sistemas?  
(A) 34 servidores.  
(B) 62 servidores.  
(C) 116 servidores.  
(D) 80 servidores.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Comentário Passo a Passo:**  
* **Passo 1 — Preencher o Diagrama de 3 Conjuntos de dentro para fora (Método da Cebola):**  
  1. **Miolo central ($P \cap C \cap H$):** $\mathbf{8}$.  
  2. **Interseções duplas exclusivas (subtrair sempre o $8$ central!):**  
     - Apenas $P$ e $C$: $20 - 8 = \mathbf{12}$.  
     - Apenas $P$ e $H$: $18 - 8 = \mathbf{10}$.  
     - Apenas $C$ e $H$: $14 - 8 = \mathbf{6}$.  
  3. **Regiões exclusivas de 1 único sistema (subtrair as 3 fatias internas de cada círculo!):**  
     - **Apenas $P$:** $65 - (12 + 10 + 8) = 65 - 30 = \mathbf{35}$.  
     - **Apenas $C$:** $50 - (12 + 6 + 8) = 50 - 26 = \mathbf{24}$.  
     - **Apenas $H$:** $45 - (10 + 6 + 8) = 45 - 24 = \mathbf{21}$.  
* **Passo 2 — Somar os que utilizam EXCLUSIVAMENTE UM sistema:**  
  $$\text{Apenas } 1 \text{ sistema} = 35 + 24 + 21 = \mathbf{80} \text{ servidores}$$  
* **Análise dos distratores:**  
  - (A) $34$ representa quem não utiliza nenhum dos três ($150 - 116 = 34$).  
  - (B) Erro ao não descontar o miolo $8$ nas interseções duplas.  
  - (C) $116$ representa a união ($P \cup C \cup H$), ou seja, "pelo menos um", e não "exclusivamente um".
* **Gabarito:** Letra **D**.
</details>

---

### Questão 08
**Banca:** OBJETIVA CONCURSOS (ELETROCAR — 2025 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 3 — Razão e Proporção Direta

Em um setor de impressão gráfica de documentos oficiais, duas máquinas, $A$ e $B$, trabalham simultaneamente na reprodução de formulários padronizados. Sabe-se que a razão entre a quantidade de formulários produzida pela máquina $A$ e pela máquina $B$ é de $3$ para $5$. Em determinado dia de expediente, a máquina $B$ registrou $250$ formulários produzidos. Considerando que ambas mantiveram exatamente a sua produtividade habitual, assinale a alternativa que corresponde à quantidade de formulários produzida pela máquina $A$ nesse mesmo dia:  
(A) 125.  
(B) 150.  
(C) 175.  
(D) 200.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Passo 1 — Respeitar a ordem rigorosa do texto na montagem da razão:**  
  *"Razão entre $A$ e $B$ é de $3$ para $5$"* significa que $A$ fica em cima (antecedente) e $B$ fica embaixo (consequente):  
  $$\frac{A}{B} = \frac{3}{5}$$  
* **Passo 2 — Substituir o dado conhecido ($B = 250$) e aplicar a multiplicação cruzada:**  
  $$\frac{A}{250} = \frac{3}{5} \implies 5 \cdot A = 3 \times 250 \implies 5A = 750 \implies A = \frac{750}{5} = \mathbf{150}$$  
  *(Pelo método das fichas: $B = 5k = 250 \implies k = 50 \implies A = 3 \times 50 = 150$ formulários).*  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 09
**Banca:** FAU-UNICENTRO (Câmara de São João do Triunfo/PR — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 3 — Razão entre Partes Associada à Soma Total

Duas servidoras concursadas da Câmara Municipal, Milena e Lívia, têm juntas $45$ anos de idade somados. Sabendo-se que a razão entre a idade de Milena e a idade de Lívia, nessa ordem, é de $\frac{2}{3}$, assinale a alternativa que indica CORRETAMENTE a idade de Milena:  
(A) 9 anos.  
(B) 15 anos.  
(C) 18 anos.  
(D) 27 anos.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Passo 1 — Traduzir a razão $\frac{M}{L} = \frac{2}{3}$ para fichas $k$:**  
  - Idade de Milena $= 2k$  
  - Idade de Lívia $= 3k$  
* **Passo 2 — Igualar a soma das fichas a $45$ anos:**  
  $$2k + 3k = 45 \implies 5k = 45 \implies k = \frac{45}{5} = \mathbf{9}$$  
* **Passo 3 — Responder o que foi perguntado (idade de Milena $= 2k$):**  
  $$\text{Milena} = 2 \times 9 = \mathbf{18} \text{ anos}$$  
* **Análise dos distratores:**  
  - (A) $9$ é apenas o valor da constante $k$ (armadilha de quem para na metade da conta!).  
  - (D) $27$ é a idade de Lívia ($3 \times 9 = 27$).
* **Gabarito:** Letra **C**.
</details>

---

### Questão 10
**Banca:** Instituto AVANÇA SP (Câmara de Itapecerica da Serra/SP — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 3 — Proporção (Manutenção de Razão em Reajuste)

Dois irmãos recebem mensalmente uma mesada. O irmão mais velho recebe R$ 80,00 e o mais novo recebe R$ 55,00. Após conversar com os pais, o irmão mais velho obteve um reajuste e passou a receber o valor de R$ 100,00. Sabendo que a mesada do irmão mais novo será aumentada exatamente na **mesma proporção**, qual será o novo valor recebido pelo irmão mais novo?  
(A) R$ 75,00.  
(B) R$ 68,75.  
(C) R$ 60,00.  
(D) R$ 72,50.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Comentário Passo a Passo:**  
* **Cuidado com a pegadinha da soma fixa!**  
  Quem vê que R$ 80,00 subiu para R$ 100,00 (+ R$ 20,00) e soma R$ 20,00 em R$ 55,00 acha R$ 75,00 (Letra A) e **erra**! Aumentar *na mesma proporção* significa manter a **razão (multiplicação)** igual, e não somar o mesmo valor em reais.  
* **Passo 1 — Montar a proporção:**  
  $$\frac{\text{Velho antes}}{\text{Velho depois}} = \frac{\text{Novo antes}}{\text{Novo depois}} \implies \frac{80}{100} = \frac{55}{x}$$  
* **Passo 2 — Simplificar a primeira fração e multiplicar cruzado:**  
  Simplificando $\frac{80}{100}$ por $20$: $\frac{4}{5} = \frac{55}{x}$  
  $$4x = 5 \times 55 \implies 4x = 275 \implies x = \frac{275}{4} = \mathbf{68{,}75} \text{ reais}$$  
  *(Conferência lógica: de $80$ para $100$, o aumento foi de $\frac{20}{80} = \frac{1}{4} = 25\%$. Logo, $25\%$ de R$ 55,00 é $55 \div 4 = 13{,}75$. Somando: $55 + 13{,}75 =$ R$ $68{,}75$).*
* **Gabarito:** Letra **B**.
</details>

---

### Questão 11
**Banca:** Instituto CONSULPLAN (Câmara de Caratinga/MG — 2024 | Adaptada para o Padrão Instituto ACCESS) | **Assunto:** Eixo 3 — Razão Composta Entre Grandezas (Velocidades Médias)

Em uma prova de avaliação física de um concurso, o candidato Gilberto completou um percurso dividido em apenas duas etapas: corrida e natação. Sabe-se que a distância percorrida a nado representa $\frac{1}{7}$ da distância percorrida na corrida. Além disso, o tempo que Gilberto gastou nadando representa $\frac{3}{7}$ do tempo total de todo o percurso. Com base nessas informações, a razão entre as velocidades médias desenvolvidas por Gilberto **correndo** e **nadando**, nessa ordem, é igual a:  
(A) 5,25.  
(B) 5,50.  
(C) 5,75.  
(D) 6,00.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: A**

**Comentário Passo a Passo:**  
* **Dica de Ouro (Atribuição de Valores Convenientes para Razões):**  
  Como a pergunta pede apenas a **razão** final e não deu medidas absolutas, podemos escolher números fáceis que obedeçam às frações do enunciado:  
  - **Distâncias:** *"Distância a nado é $\frac{1}{7}$ da distância da corrida"*:  
    Seja $d_{\text{corrida}} = 7\text{ m}$ e $d_{\text{nado}} = 1\text{ m}$.  
  - **Tempos:** *"Tempo nadando é $\frac{3}{7}$ do tempo total"*:  
    Seja $t_{\text{total}} = 7\text{ s}$. Então $t_{\text{nado}} = 3\text{ s}$ e o tempo restante na corrida é $t_{\text{corrida}} = 7 - 3 = 4\text{ s}$.  
* **Passo 2 — Calcular cada velocidade média ($v = \frac{\text{distância}}{\text{tempo}}$):**  
  $$v_{\text{corrida}} = \frac{7}{4} \qquad \text{e} \qquad v_{\text{nado}} = \frac{1}{3}$$  
* **Passo 3 — Calcular a razão $\frac{v_{\text{corrida}}}{v_{\text{nado}}}$ (divisão de frações: conserva a 1ª e multiplica pelo inverso da 2ª):**  
  $$\frac{v_{\text{corrida}}}{v_{\text{nado}}} = \frac{\frac{7}{4}}{\frac{1}{3}} = \frac{7}{4} \times \frac{3}{1} = \frac{21}{4} = \mathbf{5{,}25}$$  
* **Gabarito:** Letra **A**.
</details>

---

### Questão 12
**Banca:** Instituto ACCESS (Prefeitura Municipal de Tombos/MG — 2023 | Cargo: Agente de Administração Escolar, Q15) | **Assunto:** Eixo 4 — Divisão Diretamente Proporcional (Questão 100% Real da Banca)

Três apostadores de um site esportivo realizaram uma determinada aposta de R$ 45,00, contribuindo cada um deles com 12, 15 e 18 reais. Ao ganhar essa aposta, eles pretendem dividir o prêmio de R$ 450.000,00, de maneira que uma instituição beneficente ficaria com 50% desse valor, e o restante seria dividido, proporcionalmente à quantia que cada um apostou. Dessa forma, o apostador que contribuiu com R$ 15,00 recebeu a quantia de:  
(A) R$ 5.000,00.  
(B) R$ 10.000,00.  
(C) R$ 60.000,00.  
(D) R$ 75.000,00.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Comentário Passo a Passo:**  
* **Passo 1 — Calcular quanto efetivamente será dividido entre os três apostadores:**  
  - Prêmio total: R$ 450.000,00.  
  - $50\%$ vai para a instituição beneficente (metade $=$ R$ $225.000{,}00$).  
  - Valor restante a dividir entre os três: **R$ 225.000,00**.  
* **Passo 2 — Aplicar o Método das Fichas ($k$) com as apostas ($12$, $15$ e $18$):**  
  - Soma das fichas: $12k + 15k + 18k = 45k$.  
  - Igualando ao restante:  
    $$45k = 225.000 \implies k = \frac{225.000}{45} = \mathbf{5.000}$$  
* **Passo 3 — Calcular a parte de quem apostou R$ 15,00 ($15k$):**  
  $$\text{Parte} = 15 \times 5.000 = \mathbf{75.000{,}00} \text{ reais}$$  
  *(Visão rápida: quem apostou $15$ de um total de $45$ reais contribuiu com exatos $\frac{15}{45} = \frac{1}{3}$ da aposta! Logo, recebe $\frac{1}{3}$ de R$ 225.000,00 = R$ 75.000,00).*  
* **Análise dos distratores:**  
  - (A) $5.000$ é apenas o valor de $k$!  
  - (C) R$ 60.000,00 é o prêmio de quem apostou R$ 12,00 ($12 \times 5.000$).
* **Gabarito:** Letra **D**.
</details>

---

### Questão 13
**Banca:** Instituto AVANÇA SP (IPREVI Itu/SP — 2024 | Oficial Administrativo, Q11 | Adaptada para o Padrão ACCESS) | **Assunto:** Eixo 4 — Divisão Diretamente Proporcional (Rateio de Redução Orçamentária)

Uma mãe paga uma mesada para os seus 4 filhos de acordo com os valores atuais: Ana recebe R$ 500,00, Bruna recebe R$ 300,00, Carlos recebe R$ 200,00 e Davi ainda não recebe mesada. Suponha que Davi começará a receber R$ 100,00 e que a mãe irá subtrair essa quantia dos demais filhos para não alterar o total que ela atualmente já gasta com as mesadas. Sabe-se também que a redução que cada filho sofrerá será **diretamente proporcional** ao quanto eles atualmente ganham. Quanto Carlos passará a receber após os ajustes?  
(A) R$ 150,00.  
(B) R$ 190,00.  
(C) R$ 180,00.  
(D) R$ 130,00.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Passo 1 — Identificar qual valor está sendo dividido proporcionalmente:**  
  Não são os R$ 1.000,00 totais! O valor que será **reduzido (retirado)** dos três filhos mais velhos é a cota de Davi: **R$ 100,00**.  
* **Passo 2 — Simplificar os pesos ($500, 300, 200$) cortando dois zeros:**  
  - Redução de Ana: $5k$  
  - Redução de Bruna: $3k$  
  - Redução de Carlos: $2k$  
  $$5k + 3k + 2k = 100 \implies 10k = 100 \implies k = \mathbf{10}$$  
* **Passo 3 — Calcular o desconto de Carlos e seu novo saldo:**  
  - Desconto de Carlos: $2k = 2 \times 10 =$ R$ $20{,}00$.  
  - Novo valor de Carlos: $200{,}00 - 20{,}00 = \mathbf{180{,}00} \text{ reais}$.  
  *(Conferência rápida: R$ 100 sobre R$ 1.000 corresponde a exatos $10\%$ de corte para cada um; $10\%$ de R$ 200 = R$ 20 $\implies 200 - 20 = 180$).*
* **Gabarito:** Letra **C**.
</details>

---

### Questão 14
**Banca:** Instituto CONSULPLAN (Câmara de Caratinga/MG — 2024 | Oficial Administrativo, Q11 | Adaptada para o Padrão ACCESS) | **Assunto:** Eixo 4 — Divisão Diretamente Proporcional (Descoberta de Peso Desconhecido)

O último lucro de uma empresa, no valor de R$ 3.850,00, deve ser distribuído entre $5$ funcionários (Adelmo, Bento, Cássio, Douglas e Evaldo). Essa divisão será feita de forma **diretamente proporcional** ao tempo de trabalho de cada um deles na empresa, em anos completos. Os tempos de trabalho de Adelmo, Bento, Cássio e Douglas são $7$, $5$, $8$ e $2$ anos, respectivamente. Se Evaldo precisa de R$ 1.050,00 para quitar uma dívida, qual o tempo **mínimo** de trabalho, em anos completos, que ele deve possuir para que a sua parte no lucro seja suficiente para quitar essa dívida?  
(A) 7 anos.  
(B) 8 anos.  
(C) 9 anos.  
(D) 10 anos.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Comentário Passo a Passo:**  
* **Passo 1 — Somar os tempos dos 4 primeiros colegas:**  
  $$7 + 5 + 8 + 2 = \mathbf{22} \text{ anos}$$  
* **Passo 2 — Usar a lógica das fichas $k$ com o tempo desconhecido $x$ de Evaldo:**  
  Se Evaldo precisa receber pelo menos **R$ 1.050,00** do total de R$ 3.850,00, então aos outros quatro juntos caberá no máximo:  
  $$3.850 - 1.050 = \mathbf{2.800{,}00} \text{ reais}$$  
  Como os outros quatro somam $22k$:  
  $$22k \le 2.800 \quad \text{e} \quad x \cdot k \ge 1.050$$  
  Ou montando diretamente a proporção da fração do todo que cabe a Evaldo:  
  $$\frac{x}{22 + x} \times 3.850 \ge 1.050 \implies \frac{x}{22 + x} \ge \frac{1.050}{3.850}$$  
* **Passo 3 — Simplificar a fração $\frac{1.050}{3.850}$ e resolver:**  
  - Corta os zeros: $\frac{105}{385}$. Dividindo por $35$: $\frac{105 \div 35}{385 \div 35} = \frac{3}{11}$.  
  - Substituindo na inequação:  
    $$\frac{x}{22 + x} \ge \frac{3}{11} \implies 11x \ge 3(22 + x) \implies 11x \ge 66 + 3x \implies 8x \ge 66 \implies x \ge \frac{66}{8} = \mathbf{8{,}25}$$  
* **Passo 4 — Interpretar a exigência de "anos completos":**  
  Como $x$ precisa ser um número inteiro de anos completos maior ou igual a $8{,}25$, com $8$ anos Evaldo receberia $\frac{8}{30} \times 3.850 = \text{R\$ } 1.026{,}67$ (insuficiente!). Logo, o tempo **mínimo** em anos completos é **$9$ anos** ($\frac{9}{31} \times 3.850 \approx \text{R\$ } 1.117{,}74 \ge 1.050$).
* **Gabarito:** Letra **C**.
</details>

---

### Questão 15
**Banca:** Modelada no Padrão Instituto ACCESS (2026 — Situação Prática de Repartição Pública) | **Assunto:** Eixo 4 — Divisão Inversamente Proporcional (Método das Fichas + MMC)

A Secretaria Municipal de Administração destinou uma gratificação total de R$ 5.850,00 para ser dividida entre três servidores do setor de protocolo — Alberto, Beatriz e Caio — de forma **inversamente proporcional** ao número de erros de autuação registrados por cada um no trimestre, que foram $2$, $3$ e $4$ erros, respectivamente. Concluído o cálculo correto da divisão, qual foi o valor recebido por **Alberto** (que cometeu $2$ erros)?  
(A) R$ 1.300,00.  
(B) R$ 1.350,00.  
(C) R$ 1.800,00.  
(D) R$ 2.700,00.  

<details>
<summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Comentário Passo a Passo:**  
* **Teste Prévio de Bom Senso:** Como a divisão é **inversamente** proporcional aos erros, Alberto (que teve menos erros, $2$) deve obrigatoriamente receber a **maior** fatia do prêmio!  
* **Passo 1 — Inverter os pesos e eliminar as frações pelo MMC:**  
  - Pesos inversos: $\frac{1}{2}$, $\frac{1}{3}$ e $\frac{1}{4}$.  
  - $\text{MMC}(2, 3, 4) = \mathbf{12}$.  
  - Multiplicando por $12$ (ou dividindo $12$ por cada denominador):  
    - Alberto ($2$ erros): $12 \div 2 = \mathbf{6k}$  
    - Beatriz ($3$ erros): $12 \div 3 = \mathbf{4k}$  
    - Caio ($4$ erros): $12 \div 4 = \mathbf{3k}$  
* **Passo 2 — Somar as fichas e igualar a R$ 5.850,00:**  
  $$6k + 4k + 3k = 5.850 \implies 13k = 5.850 \implies k = \frac{5.850}{13} = \mathbf{450}$$  
* **Passo 3 — Calcular a parte de Alberto ($6k$):**  
  $$\text{Alberto} = 6 \times 450 = \mathbf{2.700{,}00} \text{ reais}$$  
  *(Conferência completa: Beatriz $= 4 \times 450 =$ R$ $1.800{,}00$; Caio $= 3 \times 450 =$ R$ $1.350{,}00$. Soma: $2.700 + 1.800 + 1.350 =$ R$ $5.850{,}00$!)*  
* **Análise dos distratores (para não cair em pegadinha):**  
  - (A) R$ 1.300,00 é o erro fatal de fazer divisão **direta** ($\frac{2}{2+3+4} \times 5.850 = 1.300$).  
  - (B) R$ 1.350,00 é a parte de Caio.  
  - (C) R$ 1.800,00 é a parte de Beatriz.
* **Gabarito:** Letra **D**.
</details>

---

## 🧭 Mapa de Revisão Rápida — Gatilhos da Semana 02

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🎯</span>
      <span>CHECKLIST DE RESOLUÇÃO RÁPIDA — O QUE CONFERIR ANTES DE MARCAR O GABARITO</span>
    </div>
    <span class="edu-comp-badge">Semana 02 • RLM</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">📦</span>
        <span class="card-badge">Eixo 1 • Conjuntos</span>
      </div>
      <h4 class="card-title">Símbolos &amp; Subconjuntos</h4>
      <p class="card-text">Use $\in / \notin$ apenas para <strong>elemento $\to$ conjunto</strong> e $\subset / \not\subset$ para <strong>conjunto $\to$ conjunto</strong>. Lembre-se: $\{\emptyset\}$ tem $1$ elemento (não é vazio!) e o número de subconjuntos é sempre $2^n$.</p>
    </div>

    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">⭕</span>
        <span class="card-badge">Eixo 2 • Diagrama de Venn</span>
      </div>
      <h4 class="card-title">Sempre de Dentro para Fora</h4>
      <p class="card-text">Comece pelo miolo central! Quando o enunciado esconder a interseção de 2 conjuntos, use a <strong>Regra do Excesso</strong>: some tudo (inclusive os de fora) e subtraia o Universo total.</p>
    </div>

    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">⚖️</span>
        <span class="card-badge">Eixo 3 • Razão e Proporção</span>
      </div>
      <h4 class="card-title">A Ordem do Texto Manda</h4>
      <p class="card-text">Leia sempre se a pergunta pede <strong>parte para parte</strong> ou <strong>parte para o total</strong>. Em aumentos proporcionais, multiplique pela mesma razão — nunca some o valor fixo em reais!</p>
    </div>

    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🪙</span>
        <span class="card-badge">Eixo 4 • Divisão Proporcional</span>
      </div>
      <h4 class="card-title">Fichas $k$ e Truque do MMC</h4>
      <p class="card-text">Na <strong>inversa</strong>, inverta os pesos ($\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$), ache o MMC dos denominadores e divida o MMC por cada um para ter fichas inteiras. Nunca pare a resposta no valor de $k$!</p>
    </div>
  </div>
</div>
