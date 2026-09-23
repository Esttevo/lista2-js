function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.detalhes = function() {
    console.log(`${this.nome} custa ${this.preco}`);
}

let carro = new Produto("GR Yaris", 300.000);

carro.detalhes();