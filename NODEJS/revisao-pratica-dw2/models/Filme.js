import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// configuração da tabela
const Filme = connection.define("filmes", {
  titulo: { // cada atributo recebe tipo e outras restrições 
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duracao: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Filme.sync({force : false }) // cria a tabela 

export default Filme // exporta o model 
