module.exports = function (app) {
  var valida = require("./../middlewares/valida")
  var homec = app.controllers.homec;
  var eventosc = app.controllers.eventosc;
  var cadastroc = app.controllers.cadastroc;

  // rotas home
  app.get("/", homec.index);
  app.post("/login", homec.login);
  app.get("/logout", homec.logout);

  // rotas eventos
  app.get("/eventos", valida, eventosc.listar);
  app.get("/usuarios/novo", cadastroc.cadastrar);
};
