module.exports = function (app) {
    var UsuarioController = {
      novo: function (request, response) {
        var params = { user: request.session.usuarioSession };
        response.render("usuarios/novo", params);
      },
    };
    return UsuarioController;
  };
  