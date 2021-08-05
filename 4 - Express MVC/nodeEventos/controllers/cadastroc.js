module.exports = function (app) {
    var CadastroController = {
      cadastrar: function (request, response) {
        var params = { user: request.session.usuarioSession };
        response.render("eventos/cadastrar", params);
      },
    };
    return CadastroController;
  };
  