/*
1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.
*/
let produto = {
        preco: 90,
        descricao: 'Mouse'
    }

console.log(`
    Preço: ${produto.preco}
    Descrição: ${produto.descricao}
    `)

/*
2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.
*/

let eletro = {
    nome: 'Notebook',
    processador: 'i7',
    memória: '16GB',
    preço: 5000,
    hD: '1TB',
    sSD: '256GB'

}
console.log(
        `Produto: ${eletro.nome}
    Processador: ${eletro.processador}
    Memória: ${eletro.memória}
    Preço: ${eletro.preço}
    HD: ${eletro.hD}
    SSD: ${eletro.sSD}
            `)

/*
3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/
let aluno = [{
            nome: 'Pedro',
            nota_1: 8,
            nota_2: 7,
            },
            {
            nome: 'Antonio',
            nota_1: 9,
            nota_2: 5,
            }]
console.log(`
    Nome: ${aluno[0].nome} 
    Nota 01: ${aluno[0].nota_1} 
    Nota 02: ${aluno[0].nota_2}
    Média: ${(aluno[0].nota_1 + aluno[0].nota_2) / 2}`)
console.log(`
    Nome: ${aluno[1].nome} 
    Nota 01: ${aluno[1].nota_1} 
    Nota 02: ${aluno[1].nota_2}
    Média: ${(aluno[1].nota_1 + aluno[1].nota_2) / 2}`)

let media0 = (aluno[0].nota_1 + aluno[0].nota_2) / 2
let media1 = (aluno[1].nota_1 + aluno[1].nota_2) / 2

console.log(`Média da Turma: ${(media0 + media1) / 2}`)

/*
4. Crie cinco objetos JavaScript dentro de um Array contendo
nome(texto), idade(número), skills (array), ou seja um total de cinco

alunos. Agora crie uma função que receba estes cinco objetos e
mais um parâmetro skill. Dependendo da skill enviada mostrar no
console.log(), quais alunos têm a skill enviada por parâmetro,
mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
Pedro e qual mais se encaixa nessa skill.
*/
let alunos = [
    {nome: 'Pedro', idade: 28, skills: ['JavaScript', 'TypeScript', 'React']},
    {nome: 'Thiago', idade: 25, skills: ['Java', 'Node', 'Python']},
    {nome: 'Lucas', idade: 23, skills: ['HTML', 'CSS','JavaScript']},
    {nome: 'Carlos', idade: 35, skills: ['C', 'C++', 'C#']},
    {nome: 'Eduardo', idade: 33, skills: ['BootStrap', 'Angular', 'TypeScript']}];

    let skill = prompt('Qual Skill procura?')

function filtroSkill() {

    let filtro = alunos.filter(item => item.skills.includes(skill))

    console.log(filtro)
}


filtroSkill(skill)
  
/*
5. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

function cadastropessoas() {
let cadastro = [];
let continuar = true;

do{

let nome = prompt('Digite o nome do usuario:')
let idade = Number(prompt('Digite a idade do usuario:'))
let trabalho = confirm('O usuario trabalha?')
const salario = trabalho ? Number(prompt('Qual o salario do usuario:')) : 0

const user = {
    nome: nome,
    idade: idade,
    trabalho: trabalho,
    salario: salario 
} 

cadastro.push(user)
continuar = confirm('Deseja adicionar mais um usuario?')

} while (continuar)

console.log(cadastro)

const desempregadas = cadastro.filter((usuario) => usuario.salario === 0)
const salarioMaior = cadastro.filter((usuario) => usuario.salario >= 2500)
const salarioBaixo = cadastro.filter((usuario) => usuario.salario < 2500)

console.log('==> Pessoas desempregadas:')
desempregadas.forEach(usuarios => {
    console.log(`Nome: ${usuarios.nome}, Idade: ${usuarios.idade}\n`);
})


console.log('==> Pessoas empregadas com salários menores que 2500:')
salarioBaixo.forEach(usuario => {
    if (usuario.salario != 0) {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Salario: ${usuario.salario}\n`);   
    }
})

console.log('==> Pessoas empregadas com salários maiores que 2500:')

salarioMaior.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Salario: ${usuario.salario}`);
})

}

cadastropessoas()