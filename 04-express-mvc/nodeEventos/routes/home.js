module.exports = function (app) {
  var valida = require("../middlewares/valida")
  var homec = app.controllers.homec;
  var eventosc = app.controllers.eventosc;
  var usuariosc = app.controllers.usuariosc;

  // rotas home
  app.get("/", homec.index);
  app.post("/login", homec.login);
  app.get("/logout", homec.logout);

  // rotas eventos
  app.get("/eventos", valida, eventosc.listar);
  app.get("/eventos/novo", valida, eventosc.novo);

  // rotas usuário
  app.get("/usuarios/novo", valida, usuariosc.novo);
  app.post("/usuarios/criar", valida, usuariosc.criar);
};
