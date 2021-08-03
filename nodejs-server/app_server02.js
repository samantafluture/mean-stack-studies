var http = require("http"); 
var fs = require("fs"); 
var url = require("url");

var server = http.createServer(function (request, response) {
  var url_params = url.parse(request.url);
  var caminho = url_params.pathname;

  fs.readFile(__dirname + caminho, function (erro, conteudo) {
    if (erro) {
      response.writeHead(404, {
        "Content-Type": "text/html",
      });
      response.write("<h2>Page Not Found</h2>");
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
