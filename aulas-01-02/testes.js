// Importar
var funcoes = require("./funcoes");

// Executar
var soma = funcoes.somar(10, 5);
var multiplicacao = funcoes.multiplicar(10, 5);
var listaAlunos = funcoes.alunos;

// Imprimir
console.log("Minha soma deu: " + soma);
console.log("Minha multiplicação deu: " + multiplicacao);
console.log("Minha lista de objetos: " + listaAlunos.length);

console.log("============================");

// Lendo a lista (array) de objetos
console.log("Lista: ", listaAlunos);
console.log("Segundo da lista: ", listaAlunos[1]);
console.log("Idade: ", listaAlunos[1].idade);
console.log("Nome: ", listaAlunos[1].nome);
console.log("Length: ", funcoes.verificarTamanho(listaAlunos[1].nome));

console.log("============================");

// ForEach - Acessando cada objeto
listaAlunos.forEach((aluno) => {
  console.log("nome: " + aluno.nome);
  console.log("idade: " + aluno.idade);
});

console.log("============================");

// Callback
let resposta = funcoes.executar(function (texto) {
  return texto.length;
});
console.log(resposta);
