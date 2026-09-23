function Pessoa(nome, anoNascimento) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
}

Pessoa.prototype.apresentar = function() {
    let idade = 2025 - this.anoNascimento;
    console.log(`${this.nome} tem ${idade} anos`)
}

let pessoa = new Pessoa("carlos", 1989)

pessoa.apresentar();