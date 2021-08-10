/* Importações */

var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");
var mongoose = require("mongoose");

/* Conexão com bando de dados */

global.db = mongoose.connect("mongodb://localhost:27017/turma30");

/* Eventos de monitoramento do banco de dados */

mongoose.connection.on("connected", function () {
  console.log("conexão estabelecida");
});

mongoose.connection.on("error", function (error) {
  console.log("erro ao conectar: " + error);
});

mongoose.connection.on("disconnected", function () {
  console.log("conexão finalizada");
});

/* Configurações */

app = express();

app.set("views", __dirname + "/views");
app.set("models", __dirname + "/models");
app.set("controllers", __dirname + "/controllers");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(cookieParser("nodeEventos"));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/favicon.ico", express.static("public/images/favicon.ico"));

/* Carregar o app */

load("models").then("controllers").then("routes").into(app);

/* Rodar o servidor */

app.listen(3001, function () {
  console.log("Aplicação rodando!");
});
