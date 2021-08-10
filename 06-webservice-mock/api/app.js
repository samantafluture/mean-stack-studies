var fetch = require("node-fetch");

var url = "http://viacep.com.br/ws/09541250/json";
var urlMock = "http://localhost:3000/produtos";

var endereco = {};
var produtos = {};

fetch(url)
  .then((resposta) => {
    console.log(resposta);
    return resposta.json();
  })
  .then((saida) => {
    endereco = saida;
    console.log(endereco);
  });

 