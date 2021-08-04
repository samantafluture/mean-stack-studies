module.exports = function (app) {
  var EventosController = {
    listar: function (request, response) {
        // render procura views na pasta views
        // eventos é a pasta
        // listar é o arquivo HTML com extensão .ejs
      response.render("eventos/listar");
    },
  };
  return EventosController;
};
