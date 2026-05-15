
var pessoa = require("./commons/Pessoa");
var soma = require("./commons/Soma");
var imposto = require("./commons/CalculoImposto");

marlon = pessoa();

// console.log(JSON.stringify(marlon));
//console.log(soma(14,64));
console.log('Valor do produto com imposto: ' + imposto.adicionar(10));
console.log('Valor do produto: '+ imposto.valor(10));
console.log('Taxa de imposto: '+ imposto.taxa);
