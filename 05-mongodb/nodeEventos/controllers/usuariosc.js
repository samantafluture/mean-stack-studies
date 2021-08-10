module.exports = function (app) {
  var Usuario = app.models.usuariosm;

  var UsuarioController = {
    novo: function (request, response) {
      var params = { user: request.session.usuarioSession };
      response.render("usuarios/novo", params);
    },
    criar: function (request, response) {
      var nome = request.body.usuarioNovo.nome;
      var senha = request.body.usuarioNovo.senha;
      var confirmarSenha = request.body.usuarioNovo.confirmarSenha;

      if (
        senha !== confirmarSenha ||
        senha.trim().length == 0 ||
        nome.trim().length == 0
      ) {
        console.log("dados incorretos!");
        response.redirect("/usuarios/novo");
      } else {
        var usuarioNovo = {
          nome: nome,
          senha: senha,
        };

        Usuario.create(usuarioNovo, function (erro, item) {
          if (erro) {
            console.log("Erro: " + erro);
            response.redirect("/usuarios/novo");
          } else {
            console.log("Usuário adicionado: " + item);
            response.redirect("/eventos");
          }
        });
      }
    },
  };

  return UsuarioController;
};
