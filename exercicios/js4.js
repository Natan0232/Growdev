/*
Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/

let salario = Number(prompt('Qual o salario fixo do vendedor?'))

let Total_de_carros = Number(prompt('Quantos veiculos foram vendidos?'))

let valorTotal = Number(prompt('Qual o valor total das vendas?'))

let valorPorCarro = Number(prompt('Quanto % de comissao o vendedor ganha por carro vendido?'))

let valorMedio = valorTotal / Total_de_carros

let valor_da_comissao = (valorTotal / 100) * 5

let comissao_por_carro = (valorMedio / 100) * Total_de_carros

let resultado = salario + valor_da_comissao + comissao_por_carro

document.write(`<h1> O salario final deste mês é de: R$ ${(resultado) } </h1>`)




