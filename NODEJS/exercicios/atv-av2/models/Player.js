import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// configuração da tabela
const Player = connection.define("players", {
  nickname: { // cada atributo recebe tipo e outras restrições 
    type: Sequelize.STRING,
    allowNull: false,
  },
  rank: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rankcolor:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  win: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  loss: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  draw: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  hours: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Player.sync({force : false }) // cria a tabela 

export default Player // exporta o model 
