
const URL = 'http://localhost:3000/';

async function carregarDados() {
    const resposta = await fetch(URL);
    const produtos = await resposta.json();

       const listaProdutos = document.getElementById('lista-produtos');

}

  
carregarDados();