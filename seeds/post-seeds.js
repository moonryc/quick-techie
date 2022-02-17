const {Post} = require('../models')


const postData=[
    {
        title:"What do You guys think of Next.js?",
        body:" React is great but the fact that page hydrates clientside makes it feel like create-react-app is bad for search-engine-optimization, what do you guys think? Is it worth learning?",
        user_id:1,
    },
    {
        title:"I keep getting undefined in my req.body, please help!",
        body:"I keep getting undefined in my req.body in my express app, just like the title says, does anybody know why this might be?",
        user_id:2,
    },
    {
        title:"Do you guys think typescript is worth it?",
        body:"Whats the point of typescript? errors are thrown whether you use typescript or not, can someone please explain the advantages of using a type checker?",
        user_id:3,
    },
    {
        title:"Sequelize is a godsend! Use it if you arnt already!",
        body:"If you are writing your backend in javascript and using mysql2 and not using Sequelize you are missing out. It is a great package that makes it so that you can create, fetch, and manipulate data using classes and it takes alot of the guesswork and redundant typing out of SQL.",
        user_id:4,
    },
    {
        title:"What IDE to use?",
        body:"what IDE do you guys use and what do you think is the best one to use for javascript specifically? I am looking to switch from VSCode.",
        user_id:5,
    }
]

const seedPost =()=> Post.bulkCreate(postData)

module.exports = seedPost