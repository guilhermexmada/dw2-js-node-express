import express from 'express' // importa o framework do projeto
import FilmesController from "./controllers/FilmesController.js" // importa controller (lembre-se da extensão .js)
import connection from "./config/sequelize-config.js" // importa o banco de dados

const app = express() // armazena o framework numa variável

// configurações do express
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended : false}))

app.use("/", FilmesController) // usa as rotas presentes no controller

// método que conecta ao banco (retorna promessa)
connection.authenticate().then(() => {
    console.log("Conexão com banco de dados bem sucedida!")
}).catch((error) =>{
console.log(`Oops... O banco não abriu... Erro: ${error}`)
})

// método que cria o banco de dados (retorna promessa)
connection.query("CREATE DATABASE IF NOT EXISTS filmes").then(() => {
    console.log("O banco de dados foi criado")
}).catch((error) => {
    console.log(`Oops... O banco não foi criado... Erro: ${error}`)
})

const port = 8080 // define porta para o servidor

app.listen(port, (error) => { // método que inicia servidor
    if(error){
        console.log(`Oops... Ocorreu o erro ${error}`)
    } else{
        console.log(`Servidor iniciado em http://localhost:${port}`)
    }
})



