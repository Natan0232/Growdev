/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/

    let alturas = [1.78, 1.94, 1.62, 1.38, 1.67, 1.96, 1.75, 1.78, 1.99, 1.85, 1.91, 1.55, 1.34, 1.77, 1.95];
    let maiorAltura = alturas[0];
    let menorAltura = alturas[0];

    for (contador = 0; contador <= 15; contador++){
        if (maiorAltura <= alturas[contador]) {
            maiorAltura = alturas[contador]
        }

        if (menorAltura >= alturas[contador]) {
            menorAltura = alturas[contador]
        }
    }

    console.log(`A maior altura do grupo é: ${maiorAltura}cm`)
    console.log(`A menor altura do grupo é: ${menorAltura}cm`)


/*
2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/


let AlturaPedro = 1.50;
let AlturaLucas = 1.10;
let anos;

for (anos = 0; AlturaPedro >= AlturaLucas; anos++) {

    AlturaPedro = AlturaPedro + 0.02;
    AlturaLucas = AlturaLucas + 0.03;
}
console.log(`Levara ${anos - 1} anos para que Lucas tenha a mesma altura que Pedro.`)
console.log(`Levara ${anos} anos para que Lucas seja mais alto que Pedro.`)



/*
3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
*/


let multi = Number(prompt('De qual numero deseja tabuada?'))
let inte = Number(prompt('Quantas interações deseja?'))

for(let x = 0 ; x <= inte; x++ ) {
    console.log(`${multi} x ${x} = ${multi * x}`)
}


/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/

for (i = 0 ; i <= 250 ; i++){
    if (i % 3 === 0) {
        console.log(`${i} é multiplo de 3.`)
    }

    if (i % 5 === 0) {
        console.log(`${i} é multiplo de 5.`)
    }
}

/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/

let valor = Number(prompt("Digite um Numero:"))

for ( valor; valor != 0; valor--) {
    console.log(valor)
}

/*
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/

let valorP = 30;

for(valorP; valorP != 0; valorP--){
    if (valorP % 5 != 0 && valorP % 3 != 0 && valorP % 2 != 0 || valorP === 2 || valorP === 5 || valorP === 3) {
        console.log(`[${valorP}]`)
    } else {
        console.log(`${valorP}`)
    }
}

/*
7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

let valores = [113,-201,1503,-501,250,180,-510,430,-150,103];
let media = 0;
let negativos = 0;
let positivos = 0;

for(i = 0; i <= 10; i++){

    if (valores[i] <= 0) {
        negativos++
    }

    if (valores[i] >= 0) {
        positivos++
    }

    media = valores[0] + valores[1] + valores[2] + valores[3] + valores[4] + valores[5] + valores[6] + valores[7] + valores[8] + valores[9]
    media = media / 10
    
}

console.log(`A media dos valores é ${media}`);
console.log(`A quantidade de valores negativos é ${negativos}`);
console.log(`A quantidade de valores positivos é ${positivos}`);
console.log(`O percentual de valores negativos é ${(negativos / 10) * 100}%`);
console.log(`O percentual de valores positivos é ${(positivos / 10) * 100}%`);

