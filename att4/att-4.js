const prompt = require("prompt-sync")();

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numFornecido = 3;

function main() {
    console.log(criarArray(10));
    
}

function criarArray(num) {
    let array = [];
    for (let i =1; i<= num; i++) {
        array.push(i);
    }
    return array;
}

main();