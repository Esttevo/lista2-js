
let contaBancaria = {
    "saldo" : 1000,
    "titular": "jorge",

    depositar: function(numero) {
        this.saldo += numero;
        console.log(`Depositado com sucesso, novo saldo : ${this.saldo}`)
    } ,

    sacar: function(numero) {
        if (numero > this.saldo) {
            return console.log(`impossivel sacar, valor ${numero} é maior do que saldo: ${this.saldo}`);
        }

        this.saldo = this.saldo - numero;
        console.log(`saque feito com suceeso!, noov saldo ${this.saldo}`);
    },

    verSaldo: function(){
        console.log(`${this.saldo}`)
    },

    verTudo: function() {
        console.log(this.saldo+" : "+ this.titular);
    }

}

contaBancaria.verTudo();

contaBancaria.depositar(100);

contaBancaria.verTudo();

contaBancaria.sacar(130);

contaBancaria.verSaldo();
