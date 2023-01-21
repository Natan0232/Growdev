/* 
Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.
*/


let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual sua idade?')
let ano_de_nascimento = prompt('qual seu ano de nascimento?')

console.log(`
    Nome: ${nome}, ${nome.length} Letras.
    Idade: ${idade} anos,
    Nasceu em ${ano_de_nascimento}.
`)