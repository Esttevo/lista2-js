const prompt = require("prompt-sync")();

let listaNumber = [];

function main() {
    for( let i = 0; i < 3; i++) {
    listaNumber.push(Number(prompt("mds")));
    }

    console.log(listaNumber);

    let arrayViredo = listaNumber.reverse();

    console.log(arrayViredo.join(": "))
}




main();