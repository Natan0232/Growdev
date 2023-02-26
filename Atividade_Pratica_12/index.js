const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];
// 1. Imprima no console a quantidade de pessoas Total.

console.log(`Quantidade total de pessoa: ${data.length}`);

//2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

console.log(`Quantidade de pessoas do sexo feminino: ${data.filter(pessoa => pessoa.sexo === 'F').length}`);

//3. Imprima no console a soma do salário de todas as pessoas.

let soma = 0
data.forEach(function (funcionario) {
    soma += funcionario.salario
})

console.log(`A soma de todos os salarios é: ${soma} `)

//4. Imprima no console a média do salário de todas as pessoas.

console.log(`A média do salário de todos so funcionários é de ${(soma / (data.length)).toFixed(2)}`)

//5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino

let somaSalarioMasc = 0;
data.forEach(function (elemento) {
    if (elemento.sexo == "M") {
        somaSalarioMasc += elemento.salario;
    }
})

console.log(`A soma do salário de todas as pessoas do sexo Masculino é R$ ${somaSalarioMasc}`);

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino

let funcMasc = 0

data.forEach(function (pessoa) {
    if (pessoa.sexo === 'M') {
        funcMasc++
    }
})

console.log(`A média do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasc / funcMasc).toFixed(2)}`)

// const funcMasc = data.filter(function (pessoa) {
//    return pessoa.sexo === 'M'
// })
// console.log(funcMasc.length);
// console.log(`A média do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasc/funcMasc.length).toFixed(2)}`)

const salarioSuperior = data.some(function (pessoa) {
    return pessoa.salario > 7000
})

console.log(`Existe salário maior que R$ 7000 ? ${salarioSuperior}`);



const posicaoEvaTrindade = data.findIndex(function (acharEva){
    return acharEva.nome == "Eva Trindade"

})
console.log (` posição de Eva e: ${posicaoEvaTrindade}`)


const pessoasSilva = data.filter(function (pessoa) {
    return pessoa.nome.includes('Silva');
})
console.log(pessoasSilva);
// 10. Imprima os nomes utilizando o MAP

console.log(data.map(function(pessoa){
    return pessoa.salario
}))