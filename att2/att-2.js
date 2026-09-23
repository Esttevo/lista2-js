const prompt = require("prompt-sync")();

let array = [10, 20 ,30, 40, 59]
let numComparativo = 33;

function main() {
    console.log(ehMaior(array, numComparativo));
}

function ehMaior(array, num) {
    return array.filter(function(valorArray)
    {
        return valorArray > num;
    });
}

main();
