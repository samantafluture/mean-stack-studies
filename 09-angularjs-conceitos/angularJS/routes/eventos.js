module.exports = function (app) {
  var evento = app.controllers.eventosc;

  app.get("/", evento.index);
//   app.get("/eventos", evento.listar);
//   app.get("/eventos/novo", evento.novo);
};
