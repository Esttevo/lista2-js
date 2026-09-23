const prompt = require("prompt-sync")();

let array = [1,2,3];
let arrayNum = ["123", "123", "asd"];

function juntarArrays(array1, array2) {
    return array1.concat(array2);
}

let fullArray = juntarArrays(array, arrayNum);

console.log(fullArray);