const prompt = require("prompt-sync")();

let vasco = [123,63,134,34,7,4,2,4,6];
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