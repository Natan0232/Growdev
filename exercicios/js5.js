/*
Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

let celsius = Number(prompt('Qual a temperatura em Celsius?'));

document.write(`<h1> ${celsius}º Celsius em Fahrenheit é ${((celsius * 1.8) + 32) }º </h1>`)