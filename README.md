
### Introdução

Esse repositório contém meus primeiros códigos de lógica de progrmação.

### Linguagem, framework e/ou tecnologias usadas

- Javascript

## Questões a resolvidas

### 1 - Idosos

Num banco (assim como em vários outros lugares) os idosos têm preferência e, por isso, pegam sempre uma fila especial. Você ficou responsável por fazer a atualização do software que identifica, a partir da idade da pessoa, se ela faz parte do grupo de idosos.

Input Format

A entrada do problema será sempre uma variável idade do tipo number. Essa idade é sempre um número inteiro e positivo.

Output Format

Você deve imprimir na tela IDOSOS caso a pessoa seja idosa, ou seja, tenha 60 anos ou mais. Caso contrário, imprima na tela PEGUE A FILA NORMAL

### 2 - Tamanho das camisas

Um amigo seu vai viajar para os Estados Unidos e vai aproveitar para comprar roupas por lá. Ele ficou sabendo que lá as letras utilizadas para cada tamanho de roupas são diferentes. Ele estava com uma looonga lista de roupas que queria comprar e estava fazendo a equivalência dos tamanhos no brasil com os tamanhos americanos, de acordo com a tabela abaixo.

Brasil	EUA
PP	    XS
P       S
M	      M
G	      L
GG	    XL
Para ajudá-lo, você resolveu fazer um programa que faz essa conversão automaticamente.

Input Format

A entrada do problema será sempre uma variável tamanhoBr do tipo string. Essa é o tamanho da roupa no padrão brasileiro.

Output Format

Você deve imprimir na tela o tamanho equivalente desta roupa nos EUA

### 3 - Cores

Na escola, seu irmão mais novo estava estudando as cores primárias e suas combinações. Para ajudá-lo a estudar, você resolveu fazer um programa que, dadas duas cores primárias, o programa informa qual a cor resultante das combinações dela. Para fazer o programa, você se baseou na tabela abaixo:

Cor 1	    Cor 2	      Resultado
azul	    amarelo	    verde
azul	    vermelho	  roxo
amarelo	  vermelho	  laranja

Input Format

A entrada do problema será sempre composta por duas variáveis cor1 e cor2 do tipo string. Cada uma delas pode assumir o valor de azul, amarelo ou vermelho.

Output Format

Você deve imprimir na tela a cor resultante da mistura de cor1 e cor2. Caso sejam iguais, imprima o nome da própria cor. Imprima sempre com todas as letras minusculas, uma das opcoes abaixo:

azul
amarelo
vermelho
verde
roxo
laranja

### 4 - Esconde-Esconde

Numa brincadeira de esconde-esconde sempre sorteia-se um número aleatório, que indica até quanto o jogador que vai procurar os outros deverá contar antes de começar a busca. Contudo, seu irmão mais novo só sabe contar até 20 com segurança. Para números maiores, as vezes ele se atrapalha.

Para permitir que ele possa jogar, você fez um programa que, caso o número sorteado seja maior que 20, imprime na tela todos os números de 21 até o número sorteado, cada um em uma linha, para auxiliar seu irmãozinho.

Input Format

A entrada será sempre uma única variável numero que guarda sempre o número que foi sorteado até o qual se deve contar.

Output Format

Caso o número sorteado seja maior do que 20, imprima na tela todos os números entre 21 (incluindo o 21) e o número sorteado (incluindo o numero sorteado).

Caso o número sorteado seja 20 ou menor, imprima a mensagem VOCE CONSEGUE, MANINHO, sem acento mesmo.

### 5 - Vacinação

Você trabalha no setor de TI no Ministério da Saúde e ficou responsável por fazer um programa que, baseado nos dados pessoais de um cidadão, deve dizer se a pessoa está apta a tomar uma vacina ou não, e porque.

Para que uma pessoa possa ser vacinada ela não pode já ter tomado a vacina anteriormente. Além disso, para poder tomar, ela deverá ter 60 anos ou mais ou ter alguma comorbidade. Caso contrário, a pessoa não poderá tomar a vacina.

Input Format

A entrada do problema será sempre um objeto chamado obj com as seguintes propriedades:

jaTomouVacina: do tipo booleano (true ou false), que indica se a pessoa já tomou vacina ou não.
temComorbidade: do tipo booleano (true ou false), que indica se a pessoa tem alguma comorbidade ou não.
idade: do tipo number, que indica a idade da pessoa
Output Format

Você deverá imprimir na tela apenas uma das opções abaixo:

JA TOMOU VACINA: caso a pessoa já tenha tomado a vacina
INAPTA: caso a pessoa não tenha tomado a vacina, mas não esteja apta a tomá-la ainda, por qualquer outro motivo que seja.
APTA POR IDADE: caso a pessoa esteja apta a tomar a vacina por conta de sua idade, independentemente de ter alguma comorbidade ou não.
APTA POR COMORBIDADE: caso a pessoa esteja apta a tomar a vacina pelo fato de ter alguma comorbidade, mesmo que não tenha a idade mínima necessária.

### 6 - Clientes Premium

Numa joalheria, os clientes são categorizados diferentemente a depender do quanto gastem na loja e a depender também do valor unitário dos itens que compram.

Você foi contratado(a) para automatizar essa categorização.

As categorias são:

CLIENTES PREMIUM: são clientes que gastaram mais de 1000 reais em compras, sendo que pelo menos algum dos itens custou mais de 200 reais.
CLIENTES VIP: são clientes que gastaram mais de 1000 reais, mas não compraram nenhum item acima de 200 reais.
CLIENTE NORMAL: são todos os outros clientes, que não se enquadram em nenhuma das outras categorias
Input Format

A entrada será sempre apenas um array de números inteiros chamado precos que guarda os preços de cada um dos itens que um determinado cliente comprou na loja, em reais.

Output Format

Você deve imprimir na tela:

PREMIUM: caso o dado cliente seja PREMIUM
VIP: caso o dado cliente seja VIP
NORMAL: caso seja um cliente normal

### 7 - Brasil com P

Brasil com "P" é uma música bastante famosa, em que todas as palavras da música inteira começam com a letra "P".

GOG, o compositor desta música, decidiu dar um próximo passo nesse estilo e fazer músicas em que todas as palavras comecem sempre com as mesmas duas primeiras letras. Contudo ele ainda não decidiu quais duas primeiras letras serão essas. Como está com um pequeno bloqueio no seu processo criativo ele decidiu analisar várias combinações e analisar as palavras que surgem para cada par de letras, e escolher o par a depender das palavras que surjam.

Como apenas olhar no dicionário estava sendo bastante lento e entediante, ele te contratou para fazer um programa que, dado um par de letras qualquer, imprima na tela as palavras que começam com essas duas primeiras letras.

Input Format

A entrada será sempre composta por três variáveis:

palavras: que será sempre um array de strings, contendo palavras que servem como base para a sua busca. As palavras sao sempre com todas as letras minusculas e sem acentos
primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras
segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras
Output Format

Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a primeiraLetra fornecida na entrada e a segunda letra a segundaLetra fornecida na entrada. Imprima uma palavra em cada linha.

Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.

### 8 - Veri, o Valdo

Veri, o Valdo, é um grande artista e também um grande colecionador de obras de artes. Por isso, ele catalogou todas suas obras de artes, guardando as informações principais, como nome, artista e valor.

Como Veri, o Valdo é também muito ocupado, ele têm vários agentes pelo mundo que buscam obras de artes perdidas ou esquecidas por aí e tentam comprá-las. Por isso, para manter seu acertvo sempre atualizado, verivaldo tem um sistema apenas para armazenar as informações de todas as suas obras.

Você foi contratado para fazer uma atualização nesse sistema. Apesar dele funcionar bem, ele não dispõe de uma informação simples, que é a informação de qual é a obra de arte mais valiosa. Toda vez que ele precisa dela, ele tem que analisar todo seu catálogo para descbri-la. Como essa é uma informação que muito lhe interessa, você foi contratado justamente para fazer um programa que, dada a lista de obras de arte que Veri, o Valdo possui, imprima na tela o nome da obra mais valiosa de seu acervo.

Input Format

A entrada será sempre uma única variável obras que é um array de objetos, em que cada um dos objetos é uma das obras do acervo de verivaldo. Cada item deste array tem sempre o formato abaixo:

    {
        nome: "Monalisa",
        autor: "Lenardo Da Vinci",
        valor: 1250000000000
    }
Output Format

Você deve imprimir na tela apenas o nome da obra mais valiosa do acervo.

### 9 - Carrossel

Em tecnologia, um carrossel é uma sequência de imagens num site que pode mudar conforme o usuário aperta botões para a direita (>) ou para a esquerda (<), 

No time de desenvolvimento que você está trabalhando, você ficou responsável por programar este carrossel, que, neste caso, não passa automaticamente. Ou seja, a imagem só muda se o usuário clicar nos botões para a direita (>) ou para a esquerda (<).

Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

Você deverá calcular qual é o índice da imagem que deve ser exibida a depender da quantidade de cliques que tenham sido dados nos botões da direita ou da esquerda.

Naturalmente, cada clique no botão da direita avança uma imagem, enquanto cada clique no da esquerda volta uma imagem.

Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.

Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.

A sequência de cliques feitos pelo usuário é uma informação que lhe é passada através de uma string que pode conter apenas os caracteres > e <.

Por exemplo, o string >>><> indica que o usuário apertou 3 vezes para a direita, depois uma vez para a esquerda, depois mais uma vez para a direita. Como o carrossel sempre começa na imagem primeira imagem, que é a de índice 0, isso significa que ele foi do índice 0 até o índice 3, voltou para o 2 e foi novamente para o 3. Por isso, neste exemplo o seu programa deveria imprimir o número 3 na tela.

Input Format

A entrada será sempre uma única variável sequencia que guarda sempre uma sequencia de caracteres > ou < indicando os cliques do usuário.

Output Format

A saída deverá ser sempre um número inteiro positivo entre 0 e 6 que indica o índice da imagem que estará sendo exibida na tela após o usuário fazer todos os cliques descritos na sequência.


