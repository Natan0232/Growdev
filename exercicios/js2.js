/*
Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.
*/

let totalDeEleitores = prompt('Qual o total de Eleitores?')
let votosEmBranco = prompt('Quantos votos foram em Branco?')
let votosNulos = prompt('Quantos votos foram nulos?')
let votosValidos = prompt('Quantos votos foram validos')

let Resultado = document.write(`
<h2> Total de votos: ${totalDeEleitores} <br>
Percentual de votos em Branco: ${(votosEmBranco / totalDeEleitores) * 100}% <br>
Percentual de votos Nulos: ${(votosNulos / totalDeEleitores) *100}% <br>
Percentual de votos Validos: ${(votosValidos / totalDeEleitores) *100}%
</h2>`)