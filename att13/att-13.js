let frutas = ["maça", "banana", "laranjam"];

console.log(frutas[1]);

frutas.push("flutuafruta");

console.log(frutas);

let numeros = [1,45,56,234,56];

console.log(numeros);

numeros.push(6789);

console.log(numeros);

numeros.pop();

console.log(numeros);

numeros.unshift(123);

console.log(numeros);

numeros.shift(numeros);

let frutas2 = ["abacate", "acabace"];

let newArray = frutas.concat(frutas2)

console.log(newArray);

let doisPrimeiros = newArray.slice(0,2);

console.log(doisPrimeiros);

let splices = newArray.splice(1,1);

console.log(newArray);

console.log(newArray.findIndex(function(fruta){
    return fruta === "banana";
}))

let arrayComM = newArray.filter(function(fruta) {
    return fruta.includes("m")
})

console.log(arrayComM);

let arrayQuadrado = numeros.map(function(numeros) {
    return numeros * numeros;
});

console.log(arrayQuadrado);

frutas.forEach(function(frutu) {
    console.log(frutu);
});
