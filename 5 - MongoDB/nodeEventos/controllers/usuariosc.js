module.exports = function (app) {
  var UsuarioController = {
    novo: function (request, response) {
      var params = { user: request.session.usuarioSession };
      response.render("usuarios/novo", params);
    },
    criar: function (request, response) {
      var nome = request.body.usuarioNovo.nome;
      var senha = request.body.usuarioNovo.senha;
      var confirmarSenha = request.body.usuarioNovo.confirmarSenha;
    },
  };
  return UsuarioController;
};
