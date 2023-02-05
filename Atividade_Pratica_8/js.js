// Atividade 08 - 01

/* 

    Crie uma função que recebe 3 notas de um aluno por parâmetro e
    uma letra. Se a letra for A a função deve calcular a média aritmética,
    se for P, a média ponderada (peso: 5, 3 e 2).

*/


function mediaCalc(nota1, nota2, nota3, letra) {

    nota1 = Number(prompt('Informe a primeira nota:'));
    nota2 = Number(prompt('Informe a segunda nota:'));
    nota3 = Number(prompt('Informe a terceira nota:'));
    letra = prompt('Informe a letra "A" para média aritimetica e "P" para média ponderada:');

    let media;
    if(letra === 'A' || letra === 'a') {
        media = (nota1 + nota2 + nota3) / 3;
        console.log(media);
    } else {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
        console.log(media);
    };

};

// mediaCalc();



// Atividade 08 - 02

/* 

    Crie uma função que recebe um valor inteiro e retorne verdadeiro se
    for ímpar ou falso se for par.

*/



function valor(inteiro) {
    inteiro = Number (prompt('Informe um número inteiro.'));
    if (inteiro % 2 === 0) {
        console.log('O número é par.');
    } else {
        console.log('O número é impar');
    }
}

// valor();



// Atividade 08 - 03

/* 

    Crie uma função que recebe por parâmetro um valor inteiro e
    positivo e retorne verdadeiro se o número for primo ou falso se não
    for.

*/

function primo(valorP) {
    valorP = Number(prompt('Informe um número inteiro positivo.'));
    if (valorP % 5 != 0 && valorP % 3 != 0 && valorP % 2 != 0 && valorP != 1 || valorP === 2 || valorP === 5 || valorP === 3) {
        console.log('O número é primo.');
    } else {
        console.log('O número não é primo.');
    }
}

// primo();



// Atividade 08 - 04

/* 

    Crie uma função que recebe por parâmetro o tempo de duração de
    uma fábrica expressa em segundos e retorna esse tempo em horas,
    minutos e segundos.

    Ex:
    Entrada: 3672
    Saída: 1:1:12

*/

function tempoFabrica(horas, min, segundos) {
    const entrada = Number(prompt('Insira o tempo em segundos:'));

    horas = (Math.round((entrada / 3600)));
    min = (Math.round((entrada % 3600) / 60));
    segundos = ((entrada % 3600) % 60);
    
    alert(`Horas: ${horas}, Minutos: ${min}, Segundos: ${segundos}`);
    
}

//tempoFabrica()

/* 
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

function perfectNumber() {
const int_numero = Number(prompt('Digite um numero inteiro:'));
let soma = 0;

for (let i = 0; i < int_numero; i++) {
    if (int_numero % i === 0) {
        soma = i + soma;
    }
}

if (soma === int_numero) {
    console.log(`Verdadeiro: ${int_numero} é um numero perfeito.`)
} else {
    console.log(`Falso: ${int_numero} não é um numero perfeito.`)
}
}

//perfectNumber()

/* 
6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.
*/

function acessoAoSite() {
    alert('Bem vindo ao Site!')
}

//acessoAoSite()

/*
7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.
*/

function mostrarMensagem() {
    let nomeAplicação = 'AGaP'
    console.log(`Acesso à aplicação ${nomeAplicação}`)
    alert(`Bem vindo a aplicação ${nomeAplicação}`)
}

//mostrarMensagem()

/*
8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”
*/

function mostrarDobro(num) {
    num = Number(prompt('Digite um numero inteiro:'))
    alert(`O dobro do numero ${num} é ${num * 2}`)
}

//mostrarDobro()


/*
9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.
*/

function calcularMedia(nota1, nota2, nota3, nome) {
    nome = prompt('Digite o Nome do Aluno:')
    nota1 = Number(prompt('Digite a primeira nota:'))
    nota2 = Number(prompt('Digite a segunda nota:'))
    nota3 = Number(prompt('Digite a terceira nota:'))

    alert(`${nome}, sua média é ${(nota1 + nota2 + nota3) / 3}.`)
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`)
}

//calcularMedia()