/*

1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/
function vetorPares() {
const myArray = [2, 25, 26, 32, 45, 85, 66, 44, 47, 78, 11, 69, 64, 14, 13]

for (i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        console.log(`${myArray[i]}`)   
    }
}
}

//vetorPares()

/*
2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.
*/
function percorreVetor() {
const myArray2 = [2, 25, 26, 32, 45, 85, 66, 44, 47, 78, 11, 69, 64, 14, 13, 17 ,18, 15, 16, 22]
let somar = 0;

for (i = 0; i < myArray2.length; i++) {
    somar += myArray2[i]
}
console.log(`A soma de todos os elementos é ${somar}`)
}

//percorreVetor()

/*
3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/
function preencheVetor() {
    let vetor = [];
    for (i = 1; vetor.length < 4; i++ ) {
        let soma = 0;
        for (cont = 1; cont < i; cont++) {
            if (i % cont === 0) {
                soma += cont
            }   
        }
        if (soma === i) {
            vetor.push(i)
        }
    };
    console.log(vetor)  
};

//preencheVetor()

/*
4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.
*/

function returnVetor() {
    let vetor1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    let vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let newVetor = []
    let newVetor2 = []

    for(i =0; i < 10; i++) {
        newVetor2.push(vetor1[i])
        newVetor2.unshift(vetor2[i])
    }
    
    for (i = 0; i < 10; i++) {
        newVetor.push(vetor1[i] += vetor2[i])
    }

    console.log(newVetor)
    console.log(newVetor2)
}

//returnVetor()

/*
5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.
*/

function verificaVetor() {
    let vtNew = [3, 6, 9, 12, 15, 21, 24, 27, 30, 33, 36, 39, 42]
    let recebeNum = Number(prompt('Digite um numero:'))
    let confirmVt = false

    for(i = 0; i < 10; i++){
        if (recebeNum === vtNew[i]) {
            confirmVt = true
        }
    }

    if (confirmVt) {
        console.log(`Verdadeiro: O numero ${recebeNum} existe no vetor.`)
    } else {
        console.log(`Falso: O numero ${recebeNum} não existe no vetor.`)
    }
    
}

//verificaVetor()

/*
6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson

*/

function listNames() {
    let listNomes = []
 for(i = 0; i < 5; i++){
    listNomes.push(prompt('Digite um Nome:'))
 }
 
 document.write(`<h2>Lista Crecente: ${listNomes}</h2></br>`)
 document.write(`<h2>Lista Decrecente: ${listNomes.reverse()}</h2></br>`)
}

//listNames()