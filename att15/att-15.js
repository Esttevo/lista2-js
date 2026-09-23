let carro = {
    modelo: "carroJroge",
    marca: "jorgeCars",
    ano: "2077"
}

console.log(carro.marca);

carro.ano = "2025";

console.log(carro.ano);

carro.getIdade = function() {
    return 1;
};

console.log(carro.getIdade());

carro.descricao = function() {
    return this.modelo +" : "+this.marca+" : " + this.ano
}

console.log(carro.descricao());