const URL = 'https://super-computing-machine-xrv7pgppwv9wc6rxv-3000.app.github.dev/';

async function carregarDados() {
    const resposta = await fetch(URL);
    const produtos = await resposta.json();

    const listaProdutos = document.getElementById('lista-produtos');

    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        listaProdutos.innerHTML += `
        <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}" class="card-img">
            <h2>${produto.nome}</h2>
            <p>${produto.categoria}</p>
            <p class="preco">R$ ${produto.preco.toLocaleString('pt-BR')}</p>
        </div>
    `;
    });
}

carregarDados();