module.exports = function (app) {
  // vamos criar uma variável para referenciar nosso controller
  var homec = app.controllers.homec;

  // get -> requisição feita no browser para a app saber o que fazer ao receber
  app.get("/", homec.index);
};
