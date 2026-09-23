let contato = {
    nome: "Ana Silva",
    telefone: "98765-4321",
    cidade: "São paulo"
}

contato.telefone = "12345-6789";

console.log(contato.telefone);


contato["telefone"] = "123";

console.log(contato['telefone']);

contato.email = "exemlo@exemplo.com.br://localhost"

console.log(contato);

