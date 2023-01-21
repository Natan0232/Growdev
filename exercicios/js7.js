/*
As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

let macas = Number(prompt('Quantas maçãs dezeja comprar?'));

if (macas < 12) {
    let macas_preco = 0.30;
    alert(`O valor total de suas maçãs é de: R$${macas * macas_preco} (Reais).`)
} else if (macas >= 12) {
    let macas_preco = 0.25;
    alert(`O valor total de suas maçãs é de: R$${macas * macas_preco} (Reais.)`)
} else {
    alert(`Digite um valor valido!`)
}