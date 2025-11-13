import express from "express"
import Filme from "../models/Filme.js" // importa model

const router = express.Router() // armazena método de rotas em uma variável

router.get("/", (req,res) => { // cria uma rota com parâmetros de requisição e resposta
    /* res.send("Bem-vindo à página de Filmes!") // envia um conteúdo para a rota */
    
    // método equivalente ao SELECT * 
    Filme.findAll().then((filmes)=>{
        res.render("filmes",{ // renderiza uma página (sem extensão)
            filmes: filmes,  // envia os dados da tabela para a página
        })
    }).catch((error)=>{
        console.log(`Oops... A tabela não foi criada... Erro: ${error}`)
    })
    
})

// rota de cadastro (post) 
router.post("/filmes/new",(req,res)=>{
    // capturando valores dos inputs : req.body.inputName
    const titulo = req.body.titulo
    const genero = req.body.genero
    const duracao = req.body.duracao
    Filme.create({ // método de INSERT
        titulo: titulo,
        genero: genero,
        duracao: duracao,
    }).then(()=>{
        res.redirect("/") // redireciona usuário para outra rota
    }).catch((error)=>{
        console.log(`Oops... Não foi possível cadastrar... Erro: ${error}`)
    })
})

// rota de exclusão (get) com parâmetro obrigatório (:param)
router.get("/filmes/delete/:id", (req,res) => {
    const id = req.params.id // capturando parâmetro da URL usando req.params.param
    Filme.destroy({ // método de DELETE
        where : { // condição de exclusão
            id: id 
        }
    }).then(() => {
        res.redirect("/")
    }).catch((error) => {
        console.log(`Oops... Não foi possível excluir... Erro: ${error}`)
    })
})

export default router // exporta as rotas do controller, permitindo import no index.js

