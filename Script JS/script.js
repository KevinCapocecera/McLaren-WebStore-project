// Função que alterna entre esconder e mostrar o conteúdo do dropdown
// quando o usuário clica no botão
function myFunction() {
    // Obtem o elemento com o id "myDropdown" e alterna a classe "show"
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Função que fecha o menu dropdown se o usuário clicar fora dele
  window.onclick = function (event) {
    // Verifica se o alvo do clique não é o botão do dropdown
    if (!event.target.matches('.dropbtn')) {
      // Obtem todos os elementos com a classe "dropdown-content"
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      // Percorre os elementos e remove a classe "show" se estiver presente
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Função que adiciona um produto ao carrinho
  function adicionarProduto() {
    // Obtem o texto do elemento com o id "descricao"
    let descricao = document.getElementById("descricao").textContent;
    console.log(descricao);
  
    // Obtem o array de produtos do localStorage ou cria um novo se não existir
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Adiciona o produto ao array
    produtos.push(descricao);
  
    // Salva o array no localStorage
    localStorage.setItem('carrinho', JSON.stringify(produtos));
  }
  
  // Função que carrega o carrinho
  function carregarCarrinho() {
    // Obtem o array de produtos do localStorage ou cria um novo se não existir
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    // Obtem o elemento com o id "lista-carrinho"
    let lista = document.getElementById('lista-carrinho');
    // Limpa o conteúdo da lista
    lista.innerHTML = "";
  
    // Percorre os produtos e adiciona-os à lista
    produtos.forEach(descricao => {
      let item = document.createElement('li');
      item.textContent = descricao;
      lista.appendChild(item);
    })
  }
  
  // Chama a função carregarCarrinho ao carregar a página
  carregarCarrinho();
  
  // Função que remove o último produto do carrinho
  function remover() {
    // Obtem o elemento com o id "lista-carrinho"
    var rem = document.getElementById("lista-carrinho");
    // Remove o último elemento da lista
    rem.removeChild(rem.lastElementChild);
  
    // Obtem o array de produtos do localStorage
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    // Remove o último produto do array
    produtos.pop();
  
    // Salva o array no localStorage
    localStorage.setItem('carrinho', JSON.stringify(produtos));
  
    // Chama a função carregarCarrinho para atualizar a lista
    carregarCarrinho();
  }