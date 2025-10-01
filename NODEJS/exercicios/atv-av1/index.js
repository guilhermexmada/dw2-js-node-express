import express from "express"; //importando o Express de acordo com ES6 Modules (com import())

const app = express(); //Iniciando o Express na vaiavel 'app'

import PlayersController from "./controllers/PlayersController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'
import PedidosController from "./controllers/PedidosController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'
import GamesController from "./controllers/GamesController.js" //  importando os Controllers (onde estão as rotas e onde são tratadas as requisições) - precisa da extensão '.js'

// configurando o EJS:
app.set("view engine", "ejs");

// definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')));


// definindo o uso das rotas dentro de controllers
app.use("/", PlayersController);
app.use("/", GamesController);
app.use("/", PedidosController);


//criando a primeira rota do site (rota principal):
// REQ = trata a REQUISIÇÂO
// RES = trata a RESPOSTA
app.get("/", (req, res) => {
  function openAdvise(){
    return '<div class="alert alert-warning" role="alert"> ⚠️ Nossos serviços de log-in estão indisponíveis no momento! </div>';
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
