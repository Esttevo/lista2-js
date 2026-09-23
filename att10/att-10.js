const prompt = require("prompt-sync")();

let arrayNames = ["heitor", "nicolas", "Kristian"];

console.log(arrayNames.join(": "));

arrayNames.push("Jorge");

console.log(arrayNames.join(": "));

arrayNames.pop();

console.log(arrayNames.join(": "));

arrayNames.unshift("Carambeiçola");

console.log(arrayNames.join(": "));

arrayNames.shift();

console.log(arrayNames.join(": "));