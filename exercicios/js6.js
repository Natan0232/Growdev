/*
Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/


let valor1 = Number((prompt('Digite um numero:')));
let valor2 = Number((prompt('Digite mais um numero:')));

if (valor1 > valor2) {
    alert('Primeiro é maior!')
} else if ( valor1 === valor2) {
    alert('Numeros iguais!')
} else if (valor2> valor1) {
    alert('Segundo é maior!')
} else {
    alert('Digite um valor valido!')
}