var http = require("http"); 
var fs = require("fs"); 

var server = http.createServer(function (request, response) {
  fs.readFile("index.html", function (erro, conteudo) {
    if (erro) {
      response.writeHead(404, {
        "Content-Type": "text/html",
      });
      response.write("<h2>Página não encontrada</h2>");
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.write(conteudo);
    }
    response.end(); 
  });
});

var port = 3000;

server.listen(port, function () {
  console.log(`servidor rodando na porta ${port}`);
});
