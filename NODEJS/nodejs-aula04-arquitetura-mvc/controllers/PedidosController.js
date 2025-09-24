// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();



//  exportando o objeto router
export default router;