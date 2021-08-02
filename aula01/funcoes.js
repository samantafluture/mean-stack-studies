// Variáveis

let nome = "Samanta";
const idade = 32;
let curso = "Node e Angular";

// Tipos

var n = 10;
var string = "uma linha escrita";
var arrayVazio = [];
var arrayNum = [1, 2, 3];

exports.alunos = [
  {
    nome: "joao",
    idade: "20",
  },
  {
    nome: "samanta",
    idade: "32",
  },
  {
    nome: "jose",
    idade: "40",
  },
];

// Funções + Módulos

exports.somar = function (x, y) {
  return x + y;
};

exports.multiplicar = function (x, y) {
  return x * y;
};
