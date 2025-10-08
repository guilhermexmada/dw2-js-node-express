// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
//  Importando o Sequelize (arquivo de conexão)
import connection from "./config/sequelize-config.js";
// Importando os models
import Cliente from "./models/Cliente.js";

//  Realizando a conexão com o banco de dados
//  then() e catch() tratam a resolução da promessa gerada pelo método authenticate()
  // then() trata a promisse bem-sucedida, catch() captura e trata a promisse com erro -> promisses são funções executadas de forma não bloqueante, ou seja, não para o código na hora, leva um tempo
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados foi bem sucedida!");
}).catch(error => {
  console.log("Oops! A conexão com o banco de dados falhou..." + error);
})
//  Criando o banco de dados (se ele ainda não existir)
connection.query(`CREATE DATABASE IF NOT EXISTS nossaloja;`).then(()=>{
  console.log("O banco de dados foi criado.");
}).catch((error) => {
  console.log("O banco de dados não foi criado... " + error);
});

// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

//  Configurando o Express para permitir o recebimento de dados vindo de formulários
app.use(express.urlencoded({extended: false})) // método urlencoded permite capturar dados de formulário, extended false trabalha com os tipos de dados mais comuns

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8090;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});
