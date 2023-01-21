/*
Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável.
*/

let idade = 26;

document.write(`<h1>Minha idade é ${idade} anos</h1><hr>`)

/*
Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável
*/

let numero1 = 355;
let numero2 = 355;
let resultado = numero1 + numero2;

document.write(`<h2> A resultado da soma de ${numero1} e ${numero2} é ${resultado} </h2> <hr>`)

/*
Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
*/

let valor = 150.90;
let parcelas = 3
let valor_parcelas = valor / parcelas;

document.write(`<h2>
O valor total da compra foi R$${valor.toFixed(2)} <br>
Forma de pagamento: ${parcelas}x de R$${valor_parcelas.toFixed(2)}
</h2><hr>`)

/*
Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda
coloque o total em segundos destes minutos armazenados na

primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"
*/

let minutos = 500;
let segundos = minutos * 60;

document.write(`<h2>${minutos} minutos equivale a ${segundos} segundos. </h2> <hr>`)

/*
Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/

let aluno = 'Antonio';
let nota1 = 8.5;
let nota2 = 9.2;
let nota3 = 6.3;
let media = (nota1 + nota2 + nota3) / 3 ;

document.write(`<h2>O aluno ${aluno} ficou com média ${media.toFixed(2)} </h2> <hr>`)