// importando o Express (framework)
const express = require("express");
// iniciando o Express na variável "app"
const app = express();
// configurando EJS
app.set("view engine", "ejs");

// criando a rota principal do site
app.get("/", (req, res) => {
    res.send("<h1>Hello, world! Bem-vindo ao meu primeiro site com Node.js e Express!</h1>");
}); // ao usar apenas / estamos definindo uma rota raíz | parâmetros : "endereço", função com parâmetros requisição e resposta

// criando rota de produtos
app.get("/produtos", (req,res)=>{
    res.send("<h1>Bem-vindo à página de produtos!</h1>");
})

// criando rota de clientes
app.get("/clientes", (req,res)=>{
    res.send("<h1>Bem-vindo à página de clientes!</h1>");
})




// iniciando o servidor HTTP
// escolhendo uma porta para alocar o servidor (local de acesso para escuta do server)
const port = 8080;

// método que inicia o servidor | parâmetros : porta, função para tratar erro
app.listen(port, (error) => {
    if(error){
        console.log(`Oops! Algo deu errado e não foi possível iniciar o servidor: ${error}`);
    } else{
        console.log(`O servidor foi iniciado com sucesso em: http://localhost:${port}`);
    }
});
