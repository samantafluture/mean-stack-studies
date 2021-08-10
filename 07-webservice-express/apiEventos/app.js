/* Importações */

var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

/* Configurações */

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header("Access-Control-Allow-Methods", "GET, POST");

  next();
});

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

// primeira forma
app.put("/evento/:id", function (request, response) {
  var id = request.params.id;

  // fazemos a atualização no sucesso
  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      evento.descricao = request.body.descricao;
      evento.data = request.body.data;
      evento.preco = request.body.preco;

      evento.save(function (erro, eventoAtualizado) {
        if (erro) {
          response.json(erro);
        } else {
          response.json(eventoAtualizado);
        }
      });
    }
  });
});

// segunda forma
// app.put("/evento/:id", function (request, response) {
//   var id = request.params.id;
//   var evento = {
//     descricao: request.body.descricao,
//     data: request.body.data,
//     preco: request.body.preco,
//   };

//   Evento.findByIdAndUpdate(id, evento, function (erro, retorno) {
//     if (erro) {
//       response.json(erro);
//     } else {
//       response.json(retorno);
//     }
//   });
// });

// app.delete("/evento/:id", function (request, response) {
//   var id = request.params.id;

//   Evento.findById(id, function (erro, evento) {
//     if (erro) {
//       response.json(erro);
//     } else {
//       if (evento) {
//         var descricao = evento.descricao;
//         Evento.deleteOne(evento, function (erro, eventoDeletado) {
//           if (erro) {
//             response.json(erro);
//           } else {
//             response.send("Evento " + descricao + " removido");
//           }
//         });
//       } else {
//         response.json(erro);
//       }
//     }
//   });
// });

// segunda forma
// app.delete("/evento/:id", function (request, response) {
//   var id = request.params.id;
//   var evento = {
//     descricao: request.body.descricao,
//     data: request.body.data,
//     preco: request.body.preco,
//   };

//   Evento.findOneAndDelete(id, evento, function (erro, retorno) {
//     if (erro) {
//       response.json(erro);
//     } else {
//       response.json(retorno);
//     }
//   });
// });

app.delete("/evento/:id", function (request, response) {
  var id = request.params.id;

  Evento.deleteOne(id, function (erro, retorno) {
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
