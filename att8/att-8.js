const prompt = require("prompt-sync")();

let vasco = [4,2,5,6,6,6,3,7];

function main() {
    console.log(ordenarOmg(vasco));
}

function ordenarOmg(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}


main();