module.exports = function (app) {
  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
  };
  return HomeController;
};
