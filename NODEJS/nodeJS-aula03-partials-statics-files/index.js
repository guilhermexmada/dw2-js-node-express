const express = require("express"); //importando o Express (framework):

const app = express(); //Iniciando o Express na vaiavel "APP":

// configurando o EJS:
app.set("view engine", "ejs");

// definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

//criando a primeira rota do site (rota principal):
// REQ = trata a REQUISIÇÂO
// RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA de produtos
app.get("/produtos", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  //array de objetos com os produtos:
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 5000 },
    { nome: "Tablet", preco: 2500 },
    { nome: "Notebook", preco: 3000 },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

// criando a rota de clientes
app.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Shimada",
      CPF: "123.456.789-22",
      endereco: "Rua Dona Gertrudes, 190",
    },
    {
      nome: "Myrella",
      CPF: "125.456.134-45",
      endereco: "Rua Marcelo Gomes, 231",
    },
    {
      nome: "Mattew",
      CPF: "879.768.435-87",
      endereco: "Rua Pindamonhngaba, 600",
    },
    { nome: "Raviel", CPF: "132.542.645-11", endereco: "Rua Lero Covas, 32" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

//rota de perfil
app.get("/perfil", (req, res) => {
  //criando a variavel que sera enviada para a pagina
  const user = "Tutuzinho";
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
