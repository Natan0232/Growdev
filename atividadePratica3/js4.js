/*
Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

let velocidade = Number(prompt('Qual a velocidade?'));
let limit = 80;
let multaValor = 5;

if (velocidade > 80) {
    alert('Vacilou e levou multa!')
    let valorDaMulta = velocidade - limit;
    alert(`
        Sua multa é no valor de: R$${valorDaMulta * multaValor}
    `)    
} else {
    alert('Boa minino! sem multa para você!')
}