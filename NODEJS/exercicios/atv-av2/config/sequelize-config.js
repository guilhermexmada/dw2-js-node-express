import Sequelize from "sequelize" // importa a biblioteca que opera com banco

// configurações do banco de dados
const connection = new Sequelize({ 
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "thunderbolt",
    timezone: "-03:00",
})

export default connection // exporta as configurações do banco

