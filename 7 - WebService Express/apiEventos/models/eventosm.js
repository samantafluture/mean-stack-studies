module.exports = function (app) {
  var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var evento = Schema({
    descricao: {
      type: String,
      required: true,
    },
    data: {
      type: Date,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
  });

  // eventos = collections no db; evento = objeto do modelo
  return mongoose.model("eventos", evento);
};
