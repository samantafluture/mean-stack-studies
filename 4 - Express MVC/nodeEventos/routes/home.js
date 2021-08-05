module.exports = function (app) {
  var valida = require("./../middlewares/valida")
  var homec = app.controllers.homec;
  var eventosc = app.controllers.eventosc;

  // rotas home
  app.get("/", homec.index);
  app.post("/login", homec.login);
  app.get("/logout", homec.logout);

  // rotas eventos
  app.get("/eventos", valida, eventosc.listar);
};
