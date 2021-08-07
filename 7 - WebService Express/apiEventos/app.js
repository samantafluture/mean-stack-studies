/* Importações */

var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

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

app.get("/evento/:id", function (request, response) {
  var id = request.params.id;
  Evento.findById(id, function (erro, retorno) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(retorno);
    }
  });
});

app.post("/evento", function (request, response) {
  var evento = {
    descricao: request.body.descricao,
    data: request.body.data,
    preco: request.body.preco,
  };

  Evento.create(evento, function (erro, retorno) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(retorno);
    }
  });
});

app.put("/evento/:id", function (request, response) {
  var id = request.params.id;
  var evento = {
    descricao: request.body.descricao,
    data: request.body.data,
    preco: request.body.preco,
  };
  
  Evento.findByIdAndUpdate(id, evento, function (erro, retorno) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(retorno);
    }
  });
});

app.delete("/evento/:id", function (request, response) {
  var id = request.params.id;
  var evento = {
    descricao: request.body.descricao,
    data: request.body.data,
    preco: request.body.preco,
  };
  
  Evento.findOneAndDelete(id, evento, function (erro, retorno) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(retorno);
    }
  });
});

/* Rodar servidor */

app.listen(3200, function () {
  console.log("API rodando :)");
});
