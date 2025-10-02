//  no Model cria-se a estrutura da tabela no banco de dados
import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

//  Definindo estrutura da tabela
const Cliente = connection.define('clientes',{
    nome: { // coluna nome
        type: Sequelize.STRING, // tipo de dados
        allowNull: false, // permite nulo ou não
    },
    cpf: { // coluna cpf
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Sincronizando a tabela com o banco de dados
    // {force} indica se força ou não a criação da tabela -> false não cria se a tabela já existe, evitando sobrescrever dados
Cliente.sync({force:false});

export default Cliente;