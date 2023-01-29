/*
1. Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.
*/

let idade = Number(prompt('Qual a sua idade?'));

if (idade >= 18) {
    console.log('Pode dirigir!')
} else {
    console.log('Não pode dirigir!')
}

/*
2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”.
*/

let idade2 = Number(prompt('Qual a sua idade?'));
let habilitado;
if (idade2 >=18 ) {

    habilitado = confirm('Confirma ter habilitação?');
}

if (idade2 >= 18 && habilitado) {
    document.write(`<h1> É habilitado e pode dirigir! </h1>`)
} else {
    document.write(`<h1>Sem habilitação ou idade insuficiente para dirigir! </h1>`)
}


/*
3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.
*/

let dia = Number(prompt('Ensira um numero de 1 á 7:'))
let diaDaSemana = ['','Domingo', 'Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado'];

if (dia === 1) {
    document.write(`<h1> ${diaDaSemana[1]}</h1>`)
} else if (dia === 2) {
    document.write(`<h1> ${diaDaSemana[2]}</h1>`)
}else if (dia === 3) {
    document.write(`<h1> ${diaDaSemana[3]}</h1>`)
}else if (dia === 4) {
    document.write(`<h1> ${diaDaSemana[4]}</h1>`)
}else if (dia === 5) {
    document.write(`<h1> ${diaDaSemana[5]}</h1>`)
}else if (dia === 6) {
    document.write(`<h1> ${diaDaSemana[6]}</h1>`)
}else if (dia === 7) {
    document.write(`<h1> ${diaDaSemana[7]}</h1>`)
} else {
    alert('Ensira um numero valido!')
}

/*
4. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

switch (dia) {
    case 1:
        document.write(`<h1> ${diaDaSemana[1]}</h1>`)
        break;
    case 2:
        document.write(`<h1> ${diaDaSemana[2]}</h1>`)
        break;
    case 3:
        document.write(`<h1> ${diaDaSemana[3]}</h1>`)
        break;
    case 4:
        document.write(`<h1> ${diaDaSemana[4]}</h1>`)
        break;
    case 5:
        document.write(`<h1> ${diaDaSemana[5]}</h1>`)
        break;
    case 6:
        document.write(`<h1> ${diaDaSemana[6]}</h1>`)
        break;
    case 7:
        document.write(`<h1> ${diaDaSemana[7]}</h1>`)
        break;
    default:
        alert('Ensira um numero valido!')
        break;
}

/*
5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares.
*/

for (i = 1; i <=10; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}

/*
6. Insira no html 30 ( trinta ) números ímpares.
*/

for (i = 1; i <=30; i++) {
    if(i % 2 != 0){
        document.write(`<ul><li> ${i} </li></ul>`)
    }
}

/*
7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.
*/

let numeroSoma = 0;
let soma = 0;
let contador = 10;
numeroSoma = contador;
do {
    contador++
    soma = numeroSoma += contador;
    
} while (contador < 100);

document.write(`<h1> Resultado da soma dos numeros de 10 a 100 é: ${soma} </h1>`);

/*
8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR".
*/

let salarioIR = Number(prompt('Digite o salario:'));
const irBase = 1903.98;

if (salarioIR < irBase ) {
    document.write(`<h1> ISENTO DE IR </h1>`);
} else {
    document.write(`<h1> TRIBUTADO NO IR </h1>`);
}



/*
9. Informe um valor a uma variável e imprima no console se o número
é primo.
*/

var primoValor = Number(prompt('Digite um numero a ser verificado:'));

if (primoValor % 5 != 0 && primoValor % 3 != 0 && primoValor % 2 != 0 || primoValor === 2 || primoValor === 3 || primoValor === 5) {
    console.log(`O numero ${primoValor} é primo!`)
} else {

    console.log(`O numero ${primoValor} não é Primo!`)
}

/*
10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
*/

let sexo = Number(prompt('Digite 1 para Feminino e 2 para Masculino.'));
let altura = Number(prompt('Qual a sua altura?'));
let pesoIdeal = 0;

if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    document.write(`<h2> O seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg </h2>`)
} else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
    document.write(`<h2> O seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg </h2>`)
} else {
    alert('Entre com um valor valido!')
} 

/*
11. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.
*/

let turno = prompt('Qual turno você estuda? (“M” para matutino ou “V” para vespertino ou “N” para noturno.)');

switch (turno) {
    case 'M':
        alert('Bom dia!')
        break;

    case 'V':
        alert('Boa tarde!')
        break;

    case 'N':
        alert('Boa noite!')
        break;

    default:
        alert('Digite um valor valido!')
        break;
}

/*
12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&).
*/

let idadeDoador = Number(prompt('Qual a sua idade?'));

if (idadeDoador >= 18 && idadeDoador <= 67) {
    alert('Pode doar Sangue!')
} else {
    alert('Não pode doar Sangue!')
}


/*
13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.
*/

let armNumero = Number(prompt('Digite um numero:'));

for (i = 0; armNumero >= 1;){
    armNumero = armNumero -= 1
    if (armNumero % 2 != 0) {

        console.log(armNumero)
        
    }
}

/*
14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor
*/

let lerNumber = Number(prompt('Digite um numero:'));
let soma1 = 0;
while (lerNumber * 3 <= 500) {
  soma1 = lerNumber * 3;
  lerNumber = soma1
}

console.log(soma);

/*
15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

let ladoA = Number(prompt('Digite um lado do triangulo: '));
let ladoB = Number(prompt('Digite um lado do triangulo: '));
let ladoC = Number(prompt('Digite um lado do triangulo: '));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA - ladoB === 0 && ladoA != ladoC || ladoA - ladoC === 0 && ladoB != ladoC || ladoB - ladoC === 0 && ladoC != ladoA ) {
        console.log('Triângulo isósceles');
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        console.log('Triângulo escaleno');
    } else if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo equilátero');
    }
} else {
    console.log('Valores invalidos!')
}


/*
16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

let idadeVotar = Number(prompt('Qual a sua idade?'));
const anoAtual = 2023;
if ((anoAtual - idadeVotar) >  2007) {
    console.log('Ainda não tem idade para votar!')
} else {
    console.log('Poderá votar esse ano!')
}

/*
17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/

const totalDeEleitores = 10000;
const votosValidos = 9000;
const votosEmBranco = 300;
const votosNulos = 700;

if (votosValidos + votosEmBranco + votosNulos === totalDeEleitores) {
    
    let percentualValidos = (votosValidos / totalDeEleitores) * 100
    console.log(`O percentual de votos validos é de ${percentualValidos.toFixed(1)}%`)
   
    let percentualBranco = (votosEmBranco / totalDeEleitores) * 100
    console.log(`O percentual de votos em Branco é de ${percentualBranco.toFixed(1)}%`)
   
    let percentualNulos = (votosNulos / totalDeEleitores) * 100
    console.log(`O percentual de votos nulos é de ${percentualNulos.toFixed(1)}%`)
   
} else {
    console.log('Conflito com os numeros de Eleitores.')
}

/*
18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.
*/

let valorDaCompra = Number(prompt('Digite o valor da compra:'));
let quantidadeDeParcelas = Number(prompt('Digite a quantidade de parcelas:'));
const aVista = 2.5;
const duasAcinco = 0;
const seisAdez = 6;
const onzeAquinze = 13;
let calculo = 0;

if (quantidadeDeParcelas === 0) {
    calculo = (valorDaCompra / 100) * 97.5 ;
    console.log(`O valor da compra é de R$${valorDaCompra} com desconto fica: R$${calculo.toFixed(2)}`)
} else if(quantidadeDeParcelas >= 2 && quantidadeDeParcelas <= 5) {
    calculo = (valorDaCompra / 100) * 100 ;
    console.log(`Não há descontos ou acrecimos, O valor da compra é de R$${valorDaCompra}`)
} else if(quantidadeDeParcelas >= 6 && quantidadeDeParcelas <= 10) {
    calculo = (valorDaCompra / 100) * 106 ;
    let valorParcela = calculo / quantidadeDeParcelas;
    console.log(`O valor da compra é de R$${valorDaCompra}, o valor da parcela é de R$${valorParcela.toFixed(2)}. O valor total com acrecimo fica em R$${calculo.toFixed(2)}`)
}else if(quantidadeDeParcelas >= 11 && quantidadeDeParcelas <= 15) {
    calculo = (valorDaCompra / 100) * 113 ;
    let valorParcela = calculo / quantidadeDeParcelas;
    console.log(`O valor da compra é de R$${valorDaCompra}, o valor da parcela é de R$${valorParcela.toFixed(2)}. O valor total com o acrecimo fica em R$${calculo.toFixed(2)}`)
} else {
    alert('Valores invalidos!')
}