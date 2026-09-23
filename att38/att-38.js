let livro = {
 titulo: "1984",
 autor: "George Orwell",
 paginas: 328
};

let arrayChaves = Object.keys(livro);
let arrayValues = Object.values(livro);
let arraySubarray = [Object.entries(livro)];

console.log(arrayChaves);
console.log(arrayValues);
console.log(arraySubarray);