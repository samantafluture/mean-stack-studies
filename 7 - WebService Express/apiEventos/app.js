/* Importações */

var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

/* Configurações */

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.db = mongoose.connect("mongodb://localhost:27017/turma30", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

load("models").into(app);

var Evento = app.models.eventosm;

/* Rotas */

app.get("/", function (request, response) {
  response.send("WebService no ar :)");
});

app.get("/eventos", function (request, response) {
  Evento.find(function (erro, retorno) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(retorno);
    }
  });
});

app.get("/evento/:id", function (request, response) {});

app.post("/evento", function (request, response) {});

app.put("/evento/:id", function (request, response) {});

app.delete("/evento/:id", function (request, response) {});

/* Rodar servidor */

app.listen(3200, function () {
  console.log("API rodando :)");
});
