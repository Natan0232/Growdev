
const card = document.querySelectorAll('.card');
card.forEach(function(card)  {
    card.setAttribute('style', 'background-color:#e16e0e')
});

const tituloCard = document.querySelectorAll('.titulo-card');
for (const h2 of tituloCard) {
    h2.style = 'color: #2b385b; padding: 30px 0px;';
    h2.innerText = 'Meu Card';
}

const listaPCards = document.querySelectorAll('.descricao-card');
for (const p of listaPCards) {
    p.style = 'color: white; margin-bottom: 30px; font-size: 0.95rem';
    p.innerHTML = 'Descrição modificada pelo JavaScript';
    
   
}


const listaBtnEditCards = document.querySelectorAll('.botao-editar');
for (const button of listaBtnEditCards) {
    button.style = 'color: white; background-color:green; padding: 10px; border-radius: 10px; border-style:none;';
    button.setAttribute("onclick", "editarCard()");
}
const listaBtnDelCards = document.querySelectorAll('.botao-apagar');
listaBtnDelCards.forEach((div, index) => {
    div.style = 'color: white; background-color:red; padding: 10px; border-radius: 10px; border-style:none;';
    div.setAttribute("onclick", `apagarCard(${ index })`);
});

function editarCard() {
    alert("Clicou em Editar!");
}
function apagarCard(id) {
    if (confirm("Tem certeza que deseja apagar o card?") == true) {
        card[id].remove();
    } else {
        alert('cancelado')
    }
}
