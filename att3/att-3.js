const prompt = require("prompt-sync")();

let array = [11, 1, 1, 1, ,3 , 3,3 ,3 , 2, 2, 5, 5, ];
let num = 3;

function main(){
    console.log(contarOcorrencias(array, num));
}

function contarOcorrencias(array, num) {
    return array.filter(function(numeroArray){
        return numeroArray === num;
    }).length;
}

main();