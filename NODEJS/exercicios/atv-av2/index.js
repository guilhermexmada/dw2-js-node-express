import express from "express"; //importando o Express de acordo com ES6 Modules (com import())
import connection from "./config/sequelize-config.js";
import PlayersController from "./controllers/PlayersController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'
import CharactersController from "./controllers/CharactersController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'
import GamesController from "./controllers/GamesController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'

const app = express(); //Iniciando o Express na vaiavel 'app'

// configurações do express
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended : false}))

// definindo o uso das rotas dentro de controllers
app.use("/", PlayersController);
app.use("/", GamesController);
app.use("/", CharactersController);

// método que conecta ao banco (retorna promessa)
connection.authenticate().then(() => {
    console.log("Conexão com banco de dados bem sucedida!")
}).catch((error) =>{
console.log(`Oops... O banco não abriu... Erro: ${error}`)
})

// método que cria o banco de dados (retorna promessa)
connection.query("CREATE DATABASE IF NOT EXISTS thunderbolt").then(() => {
    console.log("O banco de dados foi criado")
}).catch((error) => {
    console.log(`Oops... O banco não foi criado... Erro: ${error}`)
})


//criando a primeira rota do site (rota principal):
// REQ = trata a REQUISIÇÂO
// RES = trata a RESPOSTA
app.get("/", (req, res) => {
  function openAdvise(){
    return '<div class="alert alert-warning" role="alert"> ⚠️ Log-in services are out for a moment! </div>';
  }
  res.render("index", {
    openAdvise: openAdvise,
  });
});


//rota de perfil
// rota/: -> indica que rota receberá parâmetro obrigatório
// rota/? -> indica que rota receberá parâmetro opcional
app.get("/perfil/:user", (req, res) => {

  //coletando parâmetro da URL
  const user = req.params.user;

  res.render("perfil", {
    //enviando variavei para a pagina:
    user: user,
  });
});

//Iniciando o servidor HTTP
const port = 8080; //O servidor escutará na porta 8080

app.listen(
  port,
  (
    error //o "error" ira capturar o erro que acontecer
  ) => {
    if (error) {
      console.log(
        `Não foi possivel iniciar o servidor. Ocorreu um ERRO! ${error}`
      );
    } else {
      console.log(`Servidor iniciado com sucesso em:
            http://localhost:${port}`);
    }
  }
);
