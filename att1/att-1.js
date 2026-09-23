const prompt = require("prompt-sync")();

let melhor = [1, 3, 5, 6, 0];

console.log();

function calcularMedia(lista) {
    let total = lista.reduce(somarCada, 0)
    total = total / lista.length;
    console.log(total)
}

function somarCada(total, numero) {
    return total + numero;
}

calcularMedia(melhor);