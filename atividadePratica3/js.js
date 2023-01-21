/*
Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.
*/

let peso = Number(prompt('Qual o seu peso?'));
let altura = Number(prompt('Qual a sua altura?'));

let imc = peso / (altura * altura)

if (imc < 18.5) {
    alert('Você está abaixo da faixa de peso ideal')
} else if (imc > 24.99) {
    alert('Você está acima da faixa de peso ideal')
} else if (imc >= 18.5 && imc <= 24.99) {
    alert('Você está dentro da faixa de peso ideal')
} 

/*
Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
*/