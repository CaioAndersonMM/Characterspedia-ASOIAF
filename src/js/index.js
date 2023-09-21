document.addEventListener('DOMContentLoaded', function() {

const personagensLista = document.querySelectorAll('.personagem'); //seleciona todos com a classe personagem

personagensLista.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){ //Para celulares
           //Código
        }
        
        const selecionado = document.querySelector('.selecionado');
        selecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        //pegar o nome do personagem pelo id
        let idPersonagem = personagem.attributes.id.value;
        //console.log(idPersonagem);
        const imgSelecionado = document.querySelector('.imagem-personagem');
        imgSelecionado.src = `./src/imagens/${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        //remove caracteres nao alfanumeros e troca por espaço
        idPersonagem = idPersonagem.replace(/[^a-zA-Z0-9]/g, ' ');
        console.log(idPersonagem);
        nomePersonagem.innerText = `${idPersonagem}`

        //descrição
        const descricaoPersonagem = document.getElementById('descricao-personagem');

        //pega o campo data-descricao do personagem selecionado no evento da passada do mouse
        descricaoPersonagem.innerText = personagem.getAttribute('data-descricao');
    });
});

});