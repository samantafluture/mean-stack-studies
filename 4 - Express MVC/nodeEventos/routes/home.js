module.exports = function (app) {
  // variável para referenciar nosso controller
  var homec = app.controllers.homec;

  app.get("/", homec.index);
  app.post("/login", homec.login);
  app.get("/logout", homec.logout);
};
