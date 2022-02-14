const Sequelize = require('sequelize')


let sequelize;

//create connection to the db

if(process.env.JWSDB_URL){
    sequelize = new Sequelize(process.env.JWSDB_URL)
}else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
        host:"localhost",
        dialect:"mysql",
        port:3006
    })
}