// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

// rota de clientes
router.get("/players", (req, res) => {
  const players = [
    {
      nickname: "Emperor",
      rank: "Grand Master",
      rankcolor: "purple",
      win: "512",
      loss: "499",
      drawn: "60",
      hours: "1200h",
    },
    {
      nickname: "RockRock",
      rank: "Master",
       rankcolor: "purple",
      win: "530",
      loss: "431",
      drawn: "122",
      hours: "1215h",
    },
    {
      nickname: "Shibuya",
      rank: "Master",
       rankcolor: "purple",
      win: "490",
      loss: "485",
      drawn: "208",
      hours: "1100h",
    },
    {
      nickname: "Bamboozle",
      rank: "Diamond",
    rankcolor: "blue",
      win: "492",
      loss: "491",
      drawn: "199",
      hours: "1982h",
    },
    {
      nickname: "Arthzzin",
      rank: "Diamond",
    rankcolor: "blue",
      win: "455",
      loss: "468",
      drawn: "80",
      hours: "2000h",
    },
    {
      nickname: "SDZera",
      rank: "Golden",
      rankcolor: "gold",
      win: "330",
      loss: "375",
      drawn: "78",
      hours: "860h",
    },
    {
      nickname: "Friendzone",
      rank: "Golden",
      rankcolor: "gold",
      win: "306",
      loss: "300",
      drawn: "54",
      hours: "805h",
    },
    {
      nickname: "Noob123",
      rank: "Golden",
      rankcolor: "gold",
      win: "309",
      loss: "380",
      drawn: "100",
      hours: "750h",
    },
    {
      nickname: "Sparrow",
      rank: "Golden",
      rankcolor: "gold",
      win: "277",
      loss: "215",
      drawn: "33",
      hours: "316h",
    },
    {
      nickname: "< @ - @ >",
      rank: "Golden",
      rankcolor: "gold",
      win: "283",
      loss: "290",
      drawn: "315",
      hours: "330h",
    },
    
  ];
  res.render("players", {
    players: players,
  });
});

//  exportando o objeto router
export default router;