# Aula 01

## Plugins
- EditorConfig
    - file > preferences > settings
- Color Highlight
- Color Picker
- GitLens
- GitHistory

## Programas
- [Git Fork: Git visual](https://git-fork.com/)

## Instalaçã MongoDB via Brew
[Como instalar MongoDB para Mac OS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
[Instalar via terminal sem Brew](https://gist.github.com/Sydney-o9/9a6d4a017539cb8610a5695ae505bb61)

- acessar mongo no terminal: mongo

## Github do curso

https://github.com/marianalino/impacta-turma-30

## Javascript

**var**: variável de contexto global (depreciada)
**let**: variável de contexto local
**const**: variável de valor constante

## Funções

3 formas de utilizar funções:
1. diretamente por ela: `var soma = nomeDaFuncao(x, y);``
2. usando variável para referenciar: `var funcao = funcao;`
3. funcao anônima: `var calculo = function(x,y) (return x+y)`

---

# Aula 02

## Callback

- Retorno de uma função

```javascript
function funcao (callback) {
    // faca algo
    callback();
}
```

## Servidor em Node.js

1. Fazer as importações:

```javascript
var http = require("http");
var fs = require("fs");
```

- `http` é um módulo para criar app que vai funcionar como servidor web
- `fs` é um módulo de file system que permite ler e gravar arquivos

2. Criar uma função `createServer()` do módulo http que recebe uma função de callback com 2 parâmetros: **requisição** e **resposta**. Dentro haverá um método `readFile()` com 2 parâmetros: 

- arquivo a ser lido que iremos criar para que o navegador interprete
- opcional, mas funciona como callback (é o que será executado conforme o arquivo for lido e com o que faremos com o arquivo)

Ao utilizar o segundo parâmetro, temos a possibilidade de uso de 2 parâmetros para a tratativa do arquivo html: possível erro e conteúdo da página.

Por fim, o `.end()` finaliza a tratativa de resposta. 

```javascript
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
```

3. Vamos agora setar uma porta e escutar ela com a variável `server`.

```javascript
var port = 3000;

server.listen(port, function () {
  console.log(`servidor rodando na porta ${port}`);
});
```

### Usando parâmetros de URL

1. Usar o request para pegar infos da url: `var url_params = url.parse(request.url);`

2. Pegar o nome do caminho do arquivo (pathname) e salvar na variável caminho: `var caminho = url_params.pathname;`

3. Na função readFile(), passar como parâmetro no lugar do "index.html" uma constante do nome. No caso, `__dirname` retorna aonde está sendo executado: `fs.readFile(__dirname + caminho, function (erro, conteudo)`

---

# Aula 03

## npm

- node package manager
- exemplos: [Owl Carousel](https://www.npmjs.com/package/owl.carousel), [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers)
- npm: método de instalação para dependência
- o arquivo package.json tem em sua estrutura uma propriedade chamada `dependencies`
- `dependencies`: ficam declarados os módulos de terceiros utilizados

## Comandos Básicos

`$ node`: usamos para executar arquivos .js para rodar scripts gerados

`$ npm`: usamos para lidar com projetos node

`$ npm update`: atualização dos módulos disponíveis no projeto

## Versionamento Semântico

Ler mais sobre [aqui](https://semver.org/lang/pt-BR/).

A ideia é ter um controle sobre as versões, para que se saiba o que está acontecendo em cada versão. Cada número significa uma coisa. 

## Iniciar um projeto Node

1. Crie uma pasta para o projeto

2. Vá até ela no terminal: `cd pasta-proejto/`

3. Inicie o node: `npm init`

* este comando inicializa um projeto node
* criará um package.json com configurações

4. Preencha as informações do projeto de acordo com o que o npm irá apresentar, tal como nome do projeto, instalação de dependências, etc

* ao dar `enter` você concorda com as sugestões 

## Instalar módulos e dependências de desenvolvimento

- Instalar lib no projeto: `npm instal <nome-do-modulo> --save`
- Instalar lib apenas para desenvolvimento: `npm instal <nome-do-modulo> --save-dev`
- Instalar de forma global: `npm instal <nome-do-modulo> --g`

## Outros arquivos de config

.gitigonore
- Incluir aqui, por exemplo, a pasta `node_modules/`

## Criar projeto express

Comando para gerar projeto Node.js com boilerplate para formato MVC, usando como View o .ejs: `express node nodeEventos --view=ejs`.

- Rodar com `nodemon app`

---

# Aula 04

## Fluxo da aplicação "Formulário de login"

1. Ler arquivo de rotas: `routes/home.js`
2. Interpreta e se prepara para ler e realizar as ações baseadas nas actions dos controllers
3. Ao colocar a rota "/" (vazia), ele entende a declaração abaixo:

```javascript
var home = app.controller.home;
app.get("/", homec.index);
```

4. Vai buscar onde temos controllers (definidos no `app.js` que setamos a pasta controllers para onde temos os arquivos)
5. O `homec` é o nome do arquivo .js (ele interpreta sem precisar da extensão)
6. Ao entrar no controller `homec.js`, vemos o export do módulo com a declaração do `HomeController` abaixo:

```javascript
module.exports = function(app){
  var HomeController = {};
  return HomeController;
}
```

7. Dentro da variável do HomeController, declaramos nossas actions que serão as ações a serem tomadas pela aplicação quando rotas forem acionadas
8. A rota "/" está definida para ler a action `homec.index` que está abaixo:

```javascript
index: function(request, response){
  response.render("home/inicio");
}
```

9. A action de index por reagit a uma rota acionada, tem por definição a request e a response, aonde é possível compreender entradas e saídas para a tela
10. Como response é definido o comando de render que por sua vez chamará uma view para ser literalmente renderizada na tela
11. A tela de inicio tem um formulario com o método POST e com a action de '/login', o arquivo de rotas já tem pré-definido para entender o que deve fazer se receber essa rota: `app.post('/login', homec.login);`