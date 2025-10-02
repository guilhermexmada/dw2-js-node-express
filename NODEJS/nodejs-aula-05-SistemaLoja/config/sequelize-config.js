// sequelize permite transferir objetos JS para objetos de banco de dados, e vice-versa

//importando sequelize
import Sequelize from "sequelize";
//criando os dados de conexão com o banco de dados
const connection = new Sequelize({ //connection será uma instância do sequelize
    dialect: 'mysql', //tipo do banco
    host: 'localhost', //local de hospedagem do banco
    username: 'root', //nome de usuário do banco
    password: '', //senha do banco de dados
    database: "nossaloja", //recomenda-se comentar o database ou só adicionar essa propriedade após criar o banco de dados
    timezone: '-03:00', //fuso-horário do banco
});

export default connection;