var express = require("express");

// app -> objeto que será nossa inst6ancia do express importado acima
// essa variável executará o que significa o próprio módulo
app = express;

// o primeiro valor de "views" setado acima é uma constante do express
// significa que ao configurarmos, falamos para a app que nossas views não podem
// ficar em qualquer local, mas sim em um específico -> /.views
app.set("views", __dirname + "/views");

// ejs -> mecanismo de execução da views (extensão do arquivo)
// view engine -> mecanismo que a app usará para executar as telas
app.set("view engine", "ejs");

// config de caminho de pasta raiz para recursos estáticos
app.use(express.static(__dirname + "/public"));

// listen -> para rodar servidor
// express encapsula módulo de http e usa direto na chamada
app.listen(3001, function () {
  console.log("Aplicação rodando!");
});


