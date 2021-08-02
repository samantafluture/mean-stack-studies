// Importar
var funcoes = require("./funcoes");

// Executar
var soma = funcoes.somar(10, 5);
var multiplicacao = funcoes.multiplicar(10, 5);
var listaAlunos = funcoes.alunos;

// Mostrar
console.log("Minha soma deu: " + soma);
console.log("Minha multiplicação deu: " + multiplicacao);
console.log("Minha lista de objetos: " + listaAlunos.length);

// Lendo a lista (array) de objetos
console.log(listaAlunos); // ler a lista
console.log(listaAlunos[1]); // ler item 2
console.log(listaAlunos[1].idade); // ler idade do item 2
console.log(listaAlunos[1].nome); // ler nome do item 2

// ForEach - Acessando cada objeto
listaAlunos.forEach(aluno => {
    console.log("nome: " + aluno.nome);
    console.log("nome: " + aluno.idade);
});