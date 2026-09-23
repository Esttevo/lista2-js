const prompt = require("prompt-sync")();

let arrayNumeros = [12,23,34,45,56,67,78];

console.log(arrayNumeros.join(": "));

console.log(arrayNumeros.reverse());

let arrayNovo = arrayNumeros.slice(0,2);

let arrayNomes = ["nicolas", "ele deu risadas", "a", "A", "BC", "omg"];

console.log(arrayNomes.sort());

let arrayPar = arrayNomes.filter(function(numero){return numero % 2 === 0});

console.log(arrayPar);

let arrayQuadrado = arrayNumeros.map(function(numero){return numero * numero});

let somaTotal = arrayNumeros.reduce(function(numero, total){
    return total + numero;
}, 0);

arrayNomes.forEach(function(numero){
    console.log(numero);
});

