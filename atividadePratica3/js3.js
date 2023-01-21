/*
Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano
*/

let idade = Number(prompt('Qual a sua idade?'));
let peso = Number(prompt('Qual o seu peso?'));

if (idade <= 12) {
    alert('Voce esta na categoria Infantil!');
} else if (idade > 12 && idade <= 16 && peso <=40) {
    alert('Voce esta na categoria Juvenil leve!');
} else if (idade > 12 && idade <= 16 && peso > 40) {
    alert('Voce esta na categoria Juvenil pesado!');
} else if (idade > 17 && idade <=24 && peso <= 45) {
    alert('Voce esta na categoria Sênior leve!');
} else if (idade > 17 && idade <=24 && peso > 45 <60) {
    alert('Voce esta na categoria Sênior médio!');
} else if (idade > 17 && idade <=24 && peso > 60) {
    alert('Voce esta na categoria Sênior pesado!');
} else if (idade > 24) {
    alert('Voce esta na categoria Veterano!');
}