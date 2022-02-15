const Sequelize = require('sequelize')

require('dotenv').config()

let sequelize;

//create connection to the db

if(process.env.JWSDB_URL){
    sequelize = new Sequelize(process.env.JWSDB_URL)
}else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
        host: "localhost",
        dialect: "mysql",
        port: 3306
    })
}

module.exports = sequelize