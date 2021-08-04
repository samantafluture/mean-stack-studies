module.exports = function (app) {
  var EventosController = {
    listar: function (request, response) {
      response.render("eventos/listar");
    },
  };
  return EventosController;
};
