let dadosPessoais = {
    nome: "Vitor hugo retke marguerina",
    idade: 12
}

let dadosProfissionais = {
    cargo: "dev",
    empresa: "WEG"
}

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais}

console.log(funcionarioCompleto);