const listaDeCompras = ["Leite", "Ovos", "Pão", "Manteiga"];
console.log(listaDeCompras);

listaDeCompras[listaDeCompras.length] = "Café";
console.log(listaDeCompras);

listaDeCompras.push("Frutas");
console.log(listaDeCompras);

function imprimirListaDeCompras(lista) {
    const elemento = document.getElementById("imprimirListaDeCompras");
    elemento.innerHTML = "";
        for (let i = 0; i < lista.length; i++) {
            console.log(lista[i]);
            elemento.innerHTML += `<br>${i + 1} - ${lista[i]}`;
        }
}

function limparListaDeCompras() {
    console.clear();
    document.getElementById("imprimirListaDeCompras").innerHTML = "A lista de compras aparecerá aqui:" + "<br>";
}

function adicionarItem() {
    const item = document.getElementById("itemInput").value;
    if (item) {
        listaDeCompras.push(item);
        document.getElementById("itemInput").value = "";
    }
}

function removerItem() {
    const input = document.getElementById("itemRemove");
    const numero = parseInt(input.value);   // Converte o que foi digitado para número

    // Validações
    if (isNaN(numero) || numero < 1 || numero > listaDeCompras.length) {
        alert(`Digite um número válido entre 1 e ${listaDeCompras.length}`);
        input.value = "";
        return;
    }

    // Remove o item (lembre: o array começa em 0)
    const itemRemovido = listaDeCompras[numero - 1];
    listaDeCompras.splice(numero - 1, 1);

    alert(`Item "${itemRemovido}" removido com sucesso!`);
    
    input.value = "";                    // Limpa o campo
    imprimirListaDeCompras(listaDeCompras);  // Atualiza a tela
}