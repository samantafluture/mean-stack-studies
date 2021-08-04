module.exports = function (app) {
  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
    login: function (request, response) {},
    logout: function (request, response) {},
  };
  return HomeController;
};
