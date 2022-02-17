require('dotenv').config()
const Sequelize = require('sequelize')


let sequelize;

//create connection to the db
if(process.env.JAWSDB_URL){
    console.log('using jaws')
    sequelize = new Sequelize(process.env.JAWSDB_URL)
}else{
    console.log('using local')
    console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW)
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        // logging:false
    })
}

module.exports = sequelize