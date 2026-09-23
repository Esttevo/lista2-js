function Guerreiro(nome) {
    this.nome = nome;
    this.vida = 100;
}

Guerreiro.prototype.atacar = function() {
    console.log(`${this.nome} está atacando`);
}

let guerreiro1 = new Guerreiro("Gustavo");
let guerreiro2 = new Guerreiro("Eduardo");

guerreiro1.atacar();
guerreiro2.atacar();