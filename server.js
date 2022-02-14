require('dotenv')
//3rd party imports
const express = require('express')
const path = require('path')
const expressHandleBars = require('express-handlebars')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.store)

//my imports
const sequelize = require("./config/connection")
const routes = require('./controllers')
const helpers = require('./utils/helpers')

//extra setups
const handlebars = expressHandleBars.create({helpers})
const sessionSetup = {
    secret:process.env.SESSION_SECRET,
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store: new SequelizeStore({
        db:sequelize
    })
}


const PORT = process.env.PORT || 3001
const app = express()

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>console.log(`NOW LISTENING ON PORT: ${PORT}`))
})



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')
app.use(session(sessionSetup))

app.use(routes)