/*
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1

GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2
*/


let retirada = true;
let valorSaque = Number(
  prompt(
    "Digite o Valor Desejado, O numero deve ser um valor Positivo e Inteiro."
  )
);
let nota50 = 0,
  nota10 = 0,
  nota5 = 0,
  nota1 = 0;

if (valorSaque <= 0) {
    alert('Digite um valor valido!')
} else {


for (let contador = 1; valorSaque >= 50; contador++) {
  valorSaque -= 50;
  nota50 = contador;
}

for (let contador = 1; valorSaque >= 10; contador++) {
  valorSaque -= 10;
  nota10 = contador;
}

for (let contador = 1; valorSaque >= 5; contador++) {
  valorSaque -= 5;
  nota5 = contador;
}

for (let contador = 1; valorSaque >= 1; contador++) {
  valorSaque -= 1;
  nota1 = contador;
}
}
document.write(
  `<ul>
  <li>Notas de 50: ${nota50} </li> 
  <li>Notas de 10: ${nota10} </li> 
  <li>Notas de 5: ${nota5} </li>
  <li>Notas de 1: ${nota1} </li>
   </ul>`
);