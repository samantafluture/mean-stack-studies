module.exports = function (app) {
  var EventosController = {
      index: function(request, response){
          response.render("eventos/index");
      }
  };

  return EventosController;
};
