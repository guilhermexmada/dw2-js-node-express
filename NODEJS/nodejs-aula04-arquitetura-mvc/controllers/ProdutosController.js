// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

// ROTA de produtos
router.get("/produtos", (req, res) => {
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

//  exportando o objeto router
export default router;