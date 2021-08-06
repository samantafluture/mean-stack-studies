module.exports = function (app) {
  var EventosController = {
    listar: function (request, response) {
      var params = { user: request.session.usuarioSession };
      // render procura views na pasta views
      // eventos é a pasta
      // listar é o arquivo HTML com extensão .ejs
      response.render("eventos/listar", params);
    },
    novo: function (request, response) {
      var params = { user: request.session.usuarioSession };
      response.render("eventos/novo", params);
    },
    criar: function (request, response) {
      var evento = request.body.evento;

      if (evento.descricao.trim().length === 0) {
        console.log("dados incorretos!");
        response.redirect("/eventos/novo");
      } else {
        Evento.create(evento, function (erro, item) {
          if (erro) {
            console.log("Erro: " + erro);
            response.redirect("/eventos/novo");
          } else {
            console.log("Evento adicionado: " + item);
            response.redirect("/eventos");
          }
        });
      }
    },
  };
  return EventosController;
};
