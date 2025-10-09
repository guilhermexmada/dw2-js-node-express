import express from "express";
const router = express.Router();
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // SELECT * FROM CLIENTES -> essa promessa vai retornar um pacote de dados
  Cliente.findAll().then((clientes) => { // then : promessa bem sucedida
      res.render("clientes", { 
        clientes : clientes,  //  envia a lista de clientes do banco de dados para a view
      });
  }).catch(error => { //  catch : falha na resolução da promessa
    console.log(error); //  printa o erro no console 
  });

});

//  ROTA CADASTRO CLIENTES : método POST
router.post("/clientes/new", (req,res) =>{
  // COLETANDO OS DADOS NO FORMULÁRIO
  const nome = req.body.nome; //  variável = req.body.inputName
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  //  CADASTRANDO OS CLIENTES
  Cliente.create({
    nome : nome, // coluna : variavel
    cpf : cpf,
    endereco : endereco 
  }).then(()=>{
    res.redirect("/clientes"); // redireciona para a rota clientes
  }).catch(error => {
    console.log(error);
  });
});

//  ROTA DE EXCLUSÃO DE CLIENTES : recebe o parâmetro obrigatório ID
router.get("/clientes/delete/:id", (req,res) => {
  const id = req.params.id; // variavel = req.params.nomeParametro
  Cliente.destroy({ // .destroy() exclui um registro no banco de dados
    where: { 
      id: id,  // where { id banco = id variavel }
    }
  }).then(()=>{
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  }) 
});

//  ROTA DE EDIÇÃO DE CLIENTES : recebe o parâmetro obrigatório ID
router.get("/clientes/edit/:id", (req,res) => {
  //  Buscando o cliente pela ID
  const id = req.params.id;
  Cliente.findByPk(id).then( cliente =>{  // .findByPk() busca um registro pela chave primária | Se achar o ID, envia os dados que retornaram no findByPk para a página clientesEdit
    res.render("clientesEdit", {
      cliente : cliente,
    })
  }) 
});

//  ROTA DE ALTERAÇÃO DE CLIENTES : post pois recebe dados de formulário
router.post("/clientes/update", (req,res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update({ // método update atualiza os dados de um registro a partir de um objeto 
    nome : nome,
    cpf : cpf,
    endereco : endereco
  },{
    where : {id : id} //  where da consulta
  }).then(()=>{
    res.redirect("/clientes");
}).catch(error =>{
    console.log(error);
});
});

export default router;

/*
    const clientes = [
    {
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
    },
    {
      nome: "Pedro Almeida",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Marina Oliveira",
      cpf: "456.789.123-00",
      endereco:
        "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Rafael Santos",
      cpf: "321.654.987-00",
      endereco:
        "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
  ];
*/