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
  };
  return EventosController;
};
