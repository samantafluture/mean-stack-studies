var http = require("http"); // Módulo para criar app que vai funcionar como servidor web
var fs = require("fs"); // Módulo de file system (permite ler e gravar arquivos)

// Função createServer() do módulo http que recebe uma função de callback 
// com 2 parâmetros: requisição e resposta
var server = http.createServer(function(request, response){
    // readFile() tem 2 parâmetros:
    // 1. arquivo a ser lido que iremos criar para que o navegador interprete
    // 2. é opcional, mas funciona como callback (é o que será executado conforme
    // o arquivo for lido e com o que faremos com o arquivo)
    // ao utilizar o segundo parâmetro, temos a possibilidade de uso de
    // 2 parâmetros para a tratativa do arquivo HTML
    // ---- 1. possível erro
    // ---- 2. conteúdo da página
    fs.readFile("index.html", function(){

    })
})
