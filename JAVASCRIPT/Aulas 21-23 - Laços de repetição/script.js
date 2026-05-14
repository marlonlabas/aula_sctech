const carros = ['Ford', 'Fiat', 'Honda', 'Chevrolet', 'Volkswagen', 'Renault', 'Peugeot', 'Citroen', 'Hyundai', 'Kia'];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

function criarSecao(titulo, dadosFuncao) {
    let secao = document.createElement("div");
    secao.className = "card";
    secao.innerHTML = "<h3>"+ titulo +"</h3>"+dadosFuncao;
    conteudo.appendChild(secao);
}

dados = "";
i = 0;
while (i < carros.length) {
    dados += `<p>${carros[i]}</p>`;
    i++;
}
criarSecao("Lista de carros", dados);

dados = "";
i = 0;
while (i < carros.length) {
    dados += `<p>${carros[i]}</p>`;
    i++;
}
criarSecao("Lista de carros - While", dados);

dados = "";
i = 0;
do{
    dados += `<p>${carros[i]}</p>`;
    i++;
} while (i < carros.length);
criarSecao("Lista de carros - Do-While", dados);

dados = "";
for (i = 0; i < carros.length; i++) {
    dados += "<p>"+carros[i]+"</p>";
}
criarSecao("Lista de carros - For", dados);

dados = "";
for (let carro of carros) {
    dados += "<p>"+carro+"<p>";
}
criarSecao("Lista de carros - For Of", dados);


let carro1 = {marca: "Ford", modelo: "Mondeo", ano: 1996};
let carro2 = {marca: "Fiat", modelo: "Punto", ano: 2000};
let carro3 = {marca: "Honda", modelo: "Civic", ano: 2005};
let carrosObj = [carro1, carro2, carro3];

dados = "";
for (let carro of carrosObj) 
    {
        let propriedades = "";
        for (let prop in carro) {
            propriedades += carro[prop] + " - ";
        }

    dados += "<p>"+propriedades+"</p>";
}
criarSecao("Lista de carros - For in", dados);

dados = "";
for (let carro of carrosObj){
    dados += "<p>"+carro.marca+" - "+carro.modelo+" - "+carro.ano+"</p>";
}
criarSecao("Lista de carros - For in (acesso direto)", dados);

dados = "";

carros.forEach((carro) => {
    dados += "<p>"+carro+"</p>";
});
criarSecao("Lista de carros - For Each", dados);

dados = "";