// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

// rota de clientes
router.get("/clientes", (req, res) => {
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

//  exportando o objeto router
export default router;