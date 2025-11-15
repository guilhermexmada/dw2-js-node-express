// importando Express com import() - que é mais moderno - ao invés de require() -> será necessário mudar o package.json
import express from "express";
import Player from "../models/Player.js";

// variável responsável por criar as rotas, recebendo apenas o método para gerenciamento de rotas
const router = express.Router();

// rota de clientes
router.get("/players", (req, res) => {
  Player.findAll().then((players)=>{
    res.render("players", {
      players: players,
  });
  }).catch((error)=>{
    console.log(`A tabela não foi criada | Erro : ${error}`)
  })  
});


router.get("/players/new", (req,res)=>{
  res.render("newplayer");
})

router.post("/players/insert", (req,res)=>{
  const nickname = req.body.nickname;
  const rank = req.body.rank;
  const win = req.body.win;
  const loss = req.body.loss;
  const draw = req.body.draw;
  const hours = req.body.hours;
  let rankcolor = "";

  switch(rank){
    case "Grand Master" :
      rankcolor = "gold";
      break;
    case "Master" :
      rankcolor = "purple";
      break;
    case "Diamond" :
      rankcolor = "blue";
      break;
    default :
      rankcolor = "blue";
      break;
  }

  Player.create({
    nickname: nickname,
    rank: rank,
    rankcolor: rankcolor,
    win: win,
    loss: loss,
    draw: draw,
    hours: hours
  }).then(()=>{
    res.redirect("/players");
  }).catch((error)=>{
    console.log(`Não foi possível cadastrar | Erro : ${error}`)
  })
})

router.get("/players/delete/:id", (req,res)=>{
  const id = req.params.id;
  Player.destroy({
    where: {
      id: id
    }
  }).then(()=>{
    res.redirect("/players");
  }).catch((error)=>{
    console.log(`Não foi possível deletar | Erro : ${error}`)
  })
})

router.get("/players/edit/:id", (req,res)=>{
  const id = req.params.id
  Player.findByPk(id).then( player =>{
    res.render("editplayer",{
      player : player,
    })
  }).catch((error)=>{
    console.log(`Não foi possível editar | Erro : ${error}`)
  })
})

router.post("/players/update/:id", (req,res)=>{
  const id = req.params.id;
  const nickname = req.body.nickname;
  const rank = req.body.rank;
  const win = req.body.win;
  const loss = req.body.loss;
  const draw = req.body.draw;
  const hours = req.body.hours;
  let rankcolor = "";

  switch(rank){
    case "Grand Master" :
      rankcolor = "gold";
      break;
    case "Master" :
      rankcolor = "purple";
      break;
    case "Diamond" :
      rankcolor = "blue";
      break;
    default :
      rankcolor = "blue";
      break;
  }
  Player.update({
    nickname: nickname,
    rank: rank,
    rankcolor: rankcolor,
    win: win,
    loss: loss,
    draw: draw,
    hours: hours
  },{
    where : {id : id}
  }).then(()=>{
    res.redirect("/players")
  }).catch((error)=>{
    console.log(`Não foi possível salvar as alterações | Erro : ${error}`)
  })
})

//  exportando o objeto router
export default router;