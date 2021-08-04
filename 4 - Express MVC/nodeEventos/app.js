/* Importações */

var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

/* Configurações */

// app -> objeto que será nossa instância do express importado acima
// essa variável executará o que significa o próprio módulo
app = express();

// o primeiro valor de "views" setado acima é uma constante do express
// significa que ao configurarmos, falamos para a app que nossas views não podem
// ficar em qualquer local, mas sim em um específico -> /.views
app.set("views", __dirname + "/views");
app.set("models", __dirname + "/models");
app.set("controllers", __dirname + "/controllers");

// ejs -> mecanismo de execução da views (extensão do arquivo)
// view engine -> mecanismo que a app usará para executar as telas
app.set("view engine", "ejs");

// config de caminho de pasta raiz para recursos estáticos
app.use(express.static(__dirname + "/public"));

app.use(cookieParser("nodeEventos"));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/* Carregar o app */

// ordem de carregamento para carregar o app
load("models").then("controllers").then("routes").into(app);

/* Rodar o servidor */

// listen -> para rodar servidor
// express encapsula módulo de http e usa direto na chamada
app.listen(3001, function () {
  console.log("Aplicação rodando!");
});
