// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

// ROTA de produtos
router.get("/games", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  //array de objetos com os produtos:
  const games = [
    { 
      teamA: "Draconautas", 
      teamB: "SteamUP", 
      date: "01/10/25", 
      hour: "21:30", 
      league: "Major", 
    },
    { 
      teamA: "Yang Gang", 
      teamB: "BLASTOISE", 
      date: "09/10/25", 
      hour: "19:00", 
      league: "Major", 
    },
    { 
      teamA: "Sharpness", 
      teamB: "MRG", 
      date: "15/10/25", 
      hour: "23:00", 
      league: "Challanger", 
    },
  ];



  res.render("games", {
    games: games,
  });
});

//  exportando o objeto router
export default router;