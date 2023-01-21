/*

Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

*/

let anoAtual = 2023;

let idade = Number(prompt('Qual a sua idade?'));

let diferenca = anoAtual - idade

if ( diferenca <= 2007) {
    alert('Você podera votar esse ano!')
} else {
    alert('Você não tem idade o suficiente para votar esse ano!')    
}