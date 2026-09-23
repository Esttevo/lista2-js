let lanche = {
    nome: "x-borgue",
    preco: "15",
    ingredientes: [
        "pao", "carne", "queijo", "alfécio"
    ]
}

console.log(`O lanche ${lanche.nome} custa ${lanche.preco}`);

lanche.vegano = false;

console.log(lanche);

lanche["preco"] = 17.50;

console.log(`O lanche ${lanche.nome} custa ${lanche.preco}`);

console.log(lanche);