/*
1. Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00];

a. Imprima no console o índice do primeiro salário maior que
7.500 utilizando o findIndex

b. Imprima no console a lista de salários em ordem crescente
utilizando o sort

c. Imprima no console a lista de salários em ordem decrescente
utilizando o sort

d. Utilize a função Some, para descobrir se existe algum salário
superior a 10.000, imprima verdadeiro no console caso exista,
caso contrário falso.

e. Crie uma nova lista filtrada com os salários que são maior que
8.000 utilizando o filter
*/
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00];

const maiorSalario = (elemento) => elemento > 7500;
const ordemCres = (a, b) => a - b;
const ordemDecre = (a, b) => b - a;
const maiorQ = (elemento) => elemento > 10000;
const newList = elemento => elemento > 8000;
let maisq = [];

maisq.push(salarios.filter(newList));

console.log(salarios.findIndex(maiorSalario));
console.log(salarios.sort(ordemCres));
console.log(salarios.sort(ordemDecre));
console.log(salarios.some(maiorQ));
console.log(maisq);

/*
2. James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];

mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
*/

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbow.splice(2,1, 'Amarelo', 'Verde');

rainbow.splice(5, 0, 'Roxo');

console.log(rainbow);