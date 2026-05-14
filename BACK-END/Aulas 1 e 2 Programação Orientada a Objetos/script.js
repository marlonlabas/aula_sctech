class Carro {
    constructor(fabricante,modelo,ano,tipo,quantidadePortas){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
        this.quantidadePortas = quantidadePortas;
    }

    mostrarDadosDoCarro(){
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.quantidadePortas} portas`); // Método do objeto (classe)
    }
}

const meuCarro = new Carro("Ford", "Mustang", 2021, "Esportivo", 2); // Criando um objeto da classe Carro
const outroCarro = new Carro("Chevrolet", "Camaro", 2021, "Esportivo", 2); // Criando um objeto da classe Carro
meuCarro.mostrarDadosDoCarro(); // Chamando o método para mostrar os dados do carro
outroCarro.mostrarDadosDoCarro(); // Chamando o método para mostrar os dados do outro carro


