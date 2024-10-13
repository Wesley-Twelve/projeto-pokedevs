/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);


//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev =>{
   pokedev.addEventListener("click", () => {
    //PASSO 3 - remover a classe aberto só do cartão que tá aberto
    esconderCartaoPokedev();

    //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);
    
    //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
    esconderPokedevNaListagem();

    //PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
    exibirPokedevNaListagem(idPokedevSelecionado);
})
})

function exibirPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function esconderPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedeveParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedeveParaAbrir = document.getElementById(idDoCartaoPokedeveParaAbrir);
    CartaoPokedeveParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
