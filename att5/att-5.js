const prompt = require("prompt-sync")();

let array = ["Frutas",  "banana", "Maça"];

array.push("manga");

array.shift();

console.log(array.length);

array.forEach(function(flutuaFruta){
    console.log(flutuaFruta);
});

let arrayNuevo = array.map(function(frutua)
{
    return frutua.length;
})

let newArray = array.filter(function(palabrota){
    return palabrota.length > 5;
});

console.log(arrayNuevo);
console.log(newArray);


let arrayNumber = [1,2,9,8,7,6,5,4,3,4,5,6,7,8,90];

let soma = arrayNumber.reduce(function(total, number){
    return total + number;
}, 0);

console.log(soma);