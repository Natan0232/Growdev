/*
Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.
*/

let saldo = 1550.32;
let retirada = Number(prompt(`Você tem ${saldo.toFixed(2)} em sua conta. Qual o valor que deseja sacar?`));
let taxa = 4.50;
if (retirada <= (saldo - 4.50) && retirada != 0) {
    let taxa = 4.50;
let yesNot = confirm(`Você confirma a retirada no valor de R$${retirada}? será cobrado uma taxa de R$4.50 pelo serviço.`) 

if (yesNot == true) {
    let novoSaldo = (saldo - retirada - taxa);
    alert(`Retirada feita com Sucesso!`)
    alert(`O saldo de sua conta é de R$${novoSaldo.toFixed(2)}.`)
} else {
    alert('Operação encerrada!')
}
} else {
    if (retirada == 0) {
        alert('Valor zero é invalido!')
    } else {
    alert('Você não tem saldo o suficiente!')
    }
}
