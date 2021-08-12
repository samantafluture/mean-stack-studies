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
function funcao(callback) {
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

- este comando inicializa um projeto node
- criará um package.json com configurações

4. Preencha as informações do projeto de acordo com o que o npm irá apresentar, tal como nome do projeto, instalação de dependências, etc

- ao dar `enter` você concorda com as sugestões

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

- Ler arquivo de rotas: `routes/home.js`

- Interpreta e se prepara para ler e realizar as ações baseadas nas actions dos controllers

- Ao colocar a rota "/" (vazia), ele entende a declaração abaixo:

```javascript
var home = app.controller.home;
app.get("/", homec.index);
```

- Vai buscar onde temos controllers (definidos no `app.js` que setamos a pasta controllers para onde temos os arquivos)

- O `homec` é o nome do arquivo .js (ele interpreta sem precisar da extensão)

- Ao entrar no controller `homec.js`, vemos o export do módulo com a declaração do `HomeController` abaixo:

```javascript
module.exports = function (app) {
  var HomeController = {};
  return HomeController;
};
```

7. Dentro da variável do HomeController, declaramos nossas actions que serão as ações a serem tomadas pela aplicação quando rotas forem acionadas
8. A rota "/" está definida para ler a action `homec.index` que está abaixo:

```javascript
index: function(request, response){
  response.render("home/inicio");
}
```

- A action de index por reagit a uma rota acionada, tem por definição a request e a response, aonde é possível compreender entradas e saídas para a tela

- Como response é definido o comando de render que por sua vez chamará uma view para ser literalmente renderizada na tela

- A tela de inicio tem um formulario com o método POST e com a action de '/login', o arquivo de rotas já tem pré-definido para entender o que deve fazer se receber essa rota: `app.post('/login', homec.login);`

- Ao carregar a requisição do tipo POST '/login', será acionado a action do HomeController que irá realizar:

  - Obtenção de dados do corpo da requisição por meio do `'request.body.usuario.[attr]'`(nome e senha são propriedades do objeto usuario - usuario é o name do input)
  - É validado os dados inseridos
  - É armazenado em uma sessão os dados do usuario por meio de 'request.session.usuarioSession = user' (usuarioSession é o nome que demos a sessão, pode ser qualquer um - user é a variável que criamos com o conteudo do corpo da requisição com os dados enviados do usuário pelo formulario)
  - Redirecionamento (chamada de rota por meio da aplicação) para a rota '/eventos'
  - Se os dados não baterem, ele redireciona pra tela inicial, e voltamos ao inicio da explicação do FLUXO

- Ao ser acionada a rota de eventos, será executada a validação da rota abaixo que acionará a ação de listar no controller de eventos:
  `app.get('/eventos', eventosc.listar);`

- A action de listar irá renderizar a view listar dentro da pasta eventos que está dentro da pasta principal de views pela linha abaixo:
  `response.render('eventos/listar');`

---

# Aula 05

## MongoDB

- Como instalar o MongoDB no macOs sem Homebrew: [passo a passo via terminal](https://gist.github.com/Sydney-o9/9a6d4a017539cb8610a5695ae505bb61)

### Primeiros comandos

- Para executar, digite `mongo` no terminal
- Mostrar as bases de dados existentes: `show databases` ou `show dbs`
- Mostrar a database atual: `db`
- Para mudar para outra database: `use`
- Para criar uma database, já passe o nome na hora de usar `use meuDB`
- Criar uma nova collection (clientes) e inserir um registro:

```bash
db.clientes.insert({ nome: "Samanta Fluture", idade: 32 })
```

- Mostra as collections criadas: `show collections`
- Visualizar o que tem dentro: `db.clientes.find().pretty`
- Para sair, basta escrever `exit` ou dar `control+C`

### Conceitos NoSQL

- Banco de dados não-relacional
- Estrutura:
  - Collection -> coleção de dados, de documentos, como uma tabela
  - Document -> como se fosse uma linha, um registro
  - Schema -> conjunto de definição de como esse dado funciona, quais dados temos
  - Path -> definições, nível mais baixo, definição de tipos, propriedades, chave, valor
- Documentos não necessitam da mesma estrutura
- Todos os registros tem um \_id únicos

## Mongoose

### Instalar

- Rodar o `npm i` para instalar o restante das dependências (node_modules)
- No terminal, dentro da pasta `nodeEventos` (ou do projeto em questão): `npm i mongoose --save`

### Conectar app.js com banco de dados

- Usar variável global para declarar `db` e ser acessível por todo o projeto
- Setamos conexão do mongosse e passamos uma url de conexão
- `mongodb://` -> tipo de conexão; `27017` -> porta; `turma30` -> nome da base de dados

```javascript
global.db = mongoose.connect("mongodb://localhost:27017/turma30");
```

- Testar eventos de bancos de dados de conexão
- Validar se ele está conectado com o código abaixo

```javascript
mongoose.connection.on("connected", function () {
  console.log("conexão estabelecida");
});
```

### Criar database no MongoDB

- Criar database `turma` e inserir um primeiro registro na collection `usuarios`:

`use turma30`

`db.usuarios.insert({ nome: 'Samanta', senha: '123' })`

---

# Aula 06

## Webservice

- bater numa url que traz um registro
- vamos usar o json-server para simular um backend
- instalar o `json-server` via: `npm i json-server --save`
- criar um arquivo `db.json` com um objeto json
- em seguida, rodar `json-server db.json` na pasta do projeto
- então visite `localhost:3000` para ver seu json no ar

## Fazendo CRUD via Postman

**CRUD**

- get
- post
- patch / put
- delete

**Promises**

- você cria uma solicitação para o backend esperando uma promessa
- mas nem sempre terá um retorno
- chamada assíncrona, vai "tocando sua vida enquanto espera um resultado"

**Fetch**

- instar `npm i node-fetch --save`
- vamos usar o [viaCep](https://viacep.com.br/) neste projeto (API aberto)
- fetch faz uma requisição e quando ela estiver pronta
- ela passará para o then a resposta do retorno
- digamos que isso leve 5s, então depois de 5s a resposta terá esse retorno

**Primeiro .then(): resposta pendente**

```javascript
fetch(url).then((resposta) => {
  console.log(resposta);
  return resposta.json();
});
```

- depois temos que fazer outro `then` tratando a saída deste retorno
- pois o primeiro apenas fala "se deu certo ou não"
- a promise aqui neste momento tá ok, porém pendente (os headers da requisição)
- já o segundo `then` carrega de fato a saída de dados
- pois finalmente está pronto (o body da requisição)
- nesta saída, vamos trabalhar com as infos que queremos

**Primeiro .then(): resposta oficial => saída de dados**

```javascript
fetch(url)
  .then((resposta) => {
    console.log(resposta);
    return resposta.json();
  })
  .then((saida) => {
    endereco = saida;
    console.log(endereco);
  });
```

De forma simplificada e elegante:

```javascript
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    endereco = data;
    console.log(endereco);
  });
```

- o console.log precisa sempre estar dentro do segundo .then()
- pois é assíncrona e poderia via vazio se estive fora

---

# Aula 07

## Angular JS

- angular (de angular.module) é uma palavra reservada do Angular para descrevermos o módulo
- o primeiro parâmetro usado é o 'appAngular' (que é o que declaramos no ng-app na tag HTML) pois é o nome da aplicação que colocamos na declaração do código HTML
- o segundo parâmetro é usado para declaração de dependencias da aplicação
- Nossa aplicação não tem nenhuma, portanto deixaremos uma lista vazia

`var app = angular.module("appAngular", []);`

- a partir da declaração do módulo angular, vamos utilizar a var 'app' como nossa aplicação e então executaremos a função de controller
- declaramos o nome do controller como 'CTLprincipal' e o seu apelido como 'ctl'
- o primeiro parâmetro é o nome do controller
- o segundo parâmetro são as dependências que utilizaremos no controller
- utilizaremos a dependência do HTTP similar a que usamos no NODE
- por padrão no AngularJS todo os módulos tem o $ na frente
- se declararmos mais de uma dependência, é necessário utilizar na 'function' a mesma ordem pois é a forma que o angularJS interpreta suas dependências

`app.controller("CTLprincipal", ['$http', '$url', '$location', function($http, $url, $location)]){`

- caso a declaração na function mude, os nomes seguem o padrão colocado nas dependencias antes de function - o nome dentro de 'function' é apenas um ALIAS, o que de fato importa é a ordem das dependencias antes de function - NÃO É OBRIGATÓRIO TER O MESMO NOME DA DEPENDENCIA, APENAS É UMA BOA PRÁTICA
- agora criaremos uma variável baseada no this (referencia própria)
- armazenaremos nela a lista de eventos que será importada para nós

- é necessário salvar o 'this' em uma variável pois a instância de um this é referente aonde ele existe, logo se criarmos uma function abaixo desse this, o this dentro da function não será o mesmo externo, então se armazenamos o this em uma variavel, conseguimos salvar a referencia e usar em outro local/function
- crio uma lista vazia de eventos para poder ser populada e posteriormente lida no HTML para exibir na tela

`var self = this;`
`self.listaEventos = [];`

- criaremos a função para acessar o webservice
- utilizamos o HTTP para criar uma requisição de GET que acessa a nossa WEBSERVICE e então processa 2 possibilidades: sucesso e erro 
- aqui utilizamos uma promise implícita, similar ao fetch que usamos anteriormente
- a diferença é que não usamos 2 then, usamos apenas 1 que se sucesso, vem todas as informações da promise e o 'data' com os dados de retorno
- quando o get finalizar, usaremos o then que processa as informações que foram retornadas e então o primeiro valor do then é o SUCESSO, o segundo é o ERRO
- exibição de teste do retorno no console do navegador
- aqui no sucesso pegamos a resposta do webservice e usamos o 'data' que são os dados retornados, e atribuimo o valor no self.listaEventos, que é a lista criada fora da função
- chamamos a função para executar após processar o código existente, que carregará ops eventos para então colocarmos no código HTML

```javascript
    var app = angular.module("appAngular", []);

    app.controller("CTLprincipal", ['$http', function($http) {
        
        var self = this;        
        self.listaEventos = [];
        var listarEventos = function() {
            return $http.get('http://localhost:3200/eventos')
                .then(function(resposta) {                    
                    console.log(resposta.data);
                    self.listaEventos = resposta.data;
                }, function(erro) {
                    console.log(erro)
                    alert('Acontece um erro');
                })
        }
        listarEventos();
    }])
```
- evento é o item individual da lista retornada pelo webservice que será executado e lido para montar cada linha de retorno

```html
<tr ng-repeat="evento in ctl.listaEventos">
<td>{{ evento.descricao }}</td>
<td>{{ evento.data | date:'MM/dd/yyyy' }}</td>
<td>{{ evento.preco | currency: 'R$'}}</td>
```

### Pipe

- filtragem de informação
- pode formatar visualmente um dado para exibir na tela

```html
<td>{{ evento.descricao }}</td>
<td>{{ evento.data | date:'dd/MM/yyyy' }}</td>
<td>{{ evento.preco | currency: 'R$'}}</td>
```

---

# Aula 08

## Angular 8 (atual)

Fluxo:

### 1. angular.json

- tudo nasce pelo `angular.json`:
- qual o arquivo de index (`index.html`)
- qual arquivo main (`main.ts`)
- qual arquivo de estilo
- qual a pasta final de build

### 2. main.ts

- carrega o módulo da app
- inicializa o módulo da app
- se der erro, mostra no console

### 3. app.module.ts

- todo novo componente deve ser declarado
- fala quais módulos são declaros
- qual componente tem que inicializar
- toda aplicação tem um módulo principal
- todos os elementos devem estar registrados em um módulo
- é um elemento que reúno os demais elementos da app

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- `declaritions`: referenciamos todos os componentes que são relacionados à esse módulo
- `imports`: módulos do projeto ou terceiros que usamos para funcionalidade daquele módulo (ex: `moment`)
- `providers`: aquificam os services `services` da aplicação (serve a aplicação sendo um serviço para manipular / tratar dado, fazer acesso a api, webservice, etc)
- `bootstrap`: componente inicial 9normalmente `AppComponent`
- `exports`: posso exporta este módulo para fazer uso em outro local (quando tem mais de 1 módulo na app -> pasta shared, pasta compartilhada da aplicação)

### 4. app.component.ts

- o componente inicializa primeiro
- selectior é a tag a ser carregada no index.html
- este pode ser o nome que quisermos
- responsável para renderizar uma view ao usuário (seja uma página, tela completa, ou uma parte)

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Conceitos';
}
```

- `selector`: 
  - todo seletor começa com o prefixo declarado no `angular.json` -> boa prática (aqui o prefixo declaro é `app`, logo um exemplo de componente é `app-root`)
  - este prefixo não precisa ser usado no nome do arquivo ou do componente, apenas no seletor
  - cria-se uma tag html que carrega o componente criado
- `template` ou `templateURL`:
  - um ou outro
  - template: mais simples; coloca a tag do html direto neste arquivo
  - templateURL: carrega o arquivo de html, mais completo
- `styles` ou `styleUrls: []`:
  - mesma coisa, porém referente à css
  - styles: css direto
  - styleUrls: é um array, então poderia carregar mais de um arquivo css

### 5. html & css do componente

- aqui é o html e o css do componente que irá aparecer na tela

### @ Decorator

- define o que são os arquivos
- `@Component` usa para definir um componente

### Interpolação simples

`<h1>{{titulo}}</h1>``

### Interpolação complexa

- diretiva estrutural
- forma de alterar e controlar a estrutura do código que estamos 
- manipulando, controla visualmente o elemento
- queremos fazer uma lista dinâmica
- sempre vamos utilizar um asterísco
- fazemos uso de um atributo na tag html com uso de * na frente do atributo
- exemplo: *ngFor -> nosso laço de repetição 

``html
<ul>
    <li *ngFor="let topico of topicos">
        {{topico}}
    </li>
</ul>

- esse `topicos` veio do `.ts``

```typescript
export class AppExemplo1Component {
  titulo = 'Tópicos das aulas';
  exibe:  boolean = true;
  topicos: string[] = [
    'Conceitos do NodeJS',
    'MVC com Express.js',
    'WebService - criação e consumo',
    'MongoDB',
    'AngularJS',
    'Angular',
  ];
}
```

### Criar um componente na mão

1. Criar pasta `/components`
2. Criar pasta `/app-exemplo1`
3. Criar arquivo `component.ts` (decorator e classe)
4. Criar arquivo `component.html`
5. Criar arquivo `component.css`
6. Registrar/declarar/importar o componente no arquivom `app.module.ts`

### Links

[Documentação](https://angular.io/guide/component-overview)
[Material Angular UI](https://material.angular.io/components/autocomplete/overview)

# Aula 09

## ng generate

- comando `ng generate` para criar coisas automáticas no Angular
- abreviação `ng g`
- fonte: https://angular.io/cli/generate
- posso passar outras coisas, como a pasta etc

`ng generate component <nome_componente> <pasta>`
`ng generate component components/app-exemplo3`

## Property Binding

- tipo de binding unidirecional
- de um para o outro (do componente para a view ou da view para o componente)
- enviar um valor pra view por meio de propriedade
- usar estes elementos em um componente html

- colocar o atributo entre [] quando a propriedade dele está vindo de fora
- o html entende que o valor dinâmico que ele vai ter vai receber por meio de `[]` 
- assim o html consegue preencher de forma dinâmica a informação

`<input type="text" id="random" [value]="random">`

- já se o valor deve ficar fora da tag (não como atributo), então colocar {{}}

`<h1>{{h1}}</h1>`

## Event Binding

- da view para o componente
- unidirecional
- recebe algo vindo do html
- tem que passar o evento entre `()` e uma função entre `""`

`<button (click)="alterarTexto()">Alterar texto</button>``

## ngOnIt e constructor()

- OnInit -> interface, ao inicializar o Angular, processadas todas as infos na inicialização
- constructor -> executado quando o componente é criado, carregando tudo o que o componente precisa ter para existir

## Service

- é um repositório de informações ou configurações que declaramos e definimos no constructor() do componente
- literalmente servirá para o componente para algo: por exemplo tratar informação, trazer dados, etc
- a ideia é padronizar comportamentos
- padrõs para chamada de web service etc e tal
- é declarada no constructor() para que quando o componente esteja criado ele esteja pronto e apto para interagir com os serviços que auxiliarão para ligar (seja de qual forma for) com os dados e configurações / funções vindas da service
- não interage com o usuário
- é um controle totalmente para o sistema

- criar uma service
`ng generate service services/topicos`

## Criando nova aplicação

- o comando `ng new <nome do app> --routing=true --style=scss --skip-tests=true` gera uma app com configuração de rotas, scss paara estilos e sem arquivos de testes

exemplo: `ng new app-eventos --routing=true --style=scss --skip-tests=true`

