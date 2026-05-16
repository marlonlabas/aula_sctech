function jsToJson() {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.9 },
    { id: 2, nome: "Calça", preco: 49.9 },
    { id: 3, nome: "Tênis", preco: 229.9 },
  ];

  const produtosJson = JSON.stringify(produtos);

  console.log(produtos);
  console.log(produtosJson);
}

function jsonToJS() {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.9 },
    { id: 2, nome: "Calça", preco: 49.9 },
    { id: 3, nome: "Tênis", preco: 229.9 },
  ];

  const produtosJson = JSON.stringify(produtos);

  const produtosJS = JSON.parse(produtosJson);
  console.log(produtosJS);
}
