var studentsList = new Array();
const insertCard = document.querySelector('.cards');
const hideCard = document.querySelector('.card');


function criaPessoa(nome, patente, imagem, curso){
    const pessoa = {
        nome:nome,
        patente: patente,
        imagem: "./assets/imagens/"+imagem+".jpg",
        curso:curso
    }
    studentsList.push(pessoa);
    return pessoa;
}

function criaCardPessoa(pessoa){
    card = criaCard(pessoa);
    insertCard.appendChild(card);
}

function criaCard(pessoa){
    const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute("nome",pessoa.nome);
        card.setAttribute("patente",pessoa.patente);
        card.setAttribute("curso",pessoa.curso);

    const imagem = document.createElement('img');
        imagem.src= pessoa.imagem;
        card.appendChild(imagem);
    const nome = document.createElement('H5');
        nome.innerText = pessoa.patente+" "+pessoa.nome;
        card.appendChild(nome);
    const curso = document.createElement('H4');
        curso.innerText = pessoa.curso;
        card.appendChild(curso);
    return card;

}

insertCard.addEventListener('click', function(e){
    const el = e.target;
    if(el.parentElement.classList.contains('card')){
        //$(".card").css({"background":"#FDB603"})
        const card = el.parentElement;
        if(!card.style.background || card.style.background == 'white'){
            el.parentElement.style.background = '#FDB603';
        }
        else{
            card.style.background = 'white';
        }             
    }   
})


p1 = criaPessoa("Bretherick", "Alu", "bretherick", "CFG Ativa");
p2 = criaPessoa("Damitz", "Ten", "damitz", "CG");
p3 = criaPessoa("Mateus Lima", "Alu", "mateusLima", "CFG Reserva");
criaCardPessoa(p1);
criaCardPessoa(p2);
criaCardPessoa(p3);
console.log(studentsList);