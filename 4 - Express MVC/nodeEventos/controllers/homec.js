module.exports = function (app) {
  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
    login: function (request, response) {
      // obter infos dos campos do form
      // request para utilizar o bodyParser
      var nome = request.body.usuario.nome;
      var senha = request.body.usuario.senha;

      // simulação de login
      if (nome == "admin" && senha == "admin") {
        // vamos armazenar as infos para a sessão
        var user = request.body.usuario;
        // criar a sessão
        request.session.usuarioSession = user;
        response.redirect("eventos");
      } else {
        // vamos redirecionar para a tela inicial
        response.redirect("/");
      }
    },
    logout: function (request, response) {},
  };
  return HomeController;
};
