// importando o Express (framework)
const express = require("express");
// iniciando o Express na variável "app"
const app = express();
// configurando EJS
app.set("view engine", "ejs");

// criando a rota principal do site
app.get("/", (req, res) => {
    res.render("index"); // apenas o nome do arquivo ejs
}); // ao usar apenas / estamos definindo uma rota raíz | parâmetros : "endereço", função com parâmetros requisição e resposta

// rota de produtos
app.get("/produtos", (req,res)=>{
    const produtos = ["Computador","Celular","Tablet","Notebook"];
    res.render("produtos",{
        produtos : produtos
    })
    //res.send("<h1>Bem-vindo à página de produtos!</h1>");
})

// rota de clientes
app.get("/clientes", (req,res)=>{
    const clientes = [
        {
            nome: "Gustavo",
            email: "gusta@gmail.com",
            cpf: "123.456.789-10",
            endereco: "rua 01",
        },{
            nome: "Matheus",
            email: "matt@gmail.com",
            cpf: "123.456.789-20",
            endereco: "rua 02",
        },{
            nome: "Guilherme",
            email: "gspx@gmail.com",
            cpf: "123.456.789-30",
            endereco: "rua 03",
        },{
            nome: "João",
            email: "jhon@gmail.com",
            cpf: "123.456.789-40",
            endereco: "rua 04",
        },{
            nome: "Arthur",
            email: "thuti@gmail.com",
            cpf: "123.456.789-50",
            endereco: "rua 06",
        }
    ];
    res.render("clientes",{
        clientes : clientes
    });
    //res.send("<h1>Bem-vindo à página de clientes!</h1>");
})

// rota de perfil
app.get("/perfil", (req,res) => {
    // variável que será enviada para a página
    const user = "Diego Max";
    res.render("perfil",{
        user : user // enviando variáveis para a página EJS (HTML) -> nomeVarDestino : nomeVarOrigem
    })
})

app.get("/pedidos", (req,res)=>{
    const pedidos = [
        {
            numero: 461426,
            servico: "entrega",
            valor: 25.50,
        },
        {
            numero: 978863,
            servico: "manutenção",
            valor: 150,
        },
        {
            numero: 143656,
            servico: "limpeza",
            valor: 40.25,
        },
    ];
    res.render("pedidos",{
        pedidos : pedidos
    })
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
