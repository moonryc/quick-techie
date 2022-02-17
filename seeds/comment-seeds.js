const {Comment} = require('../models')

const commentData=[
    {
        comment_text:'Personally I really enjoy working with Next.JS, there are a few things to learn during the shift but overall it is a good experience',
        user_id:2,
        post_id:1,
    },
    {
        comment_text:'You are correct to say that hydration happens on the clientside, with Next.Js hydration happens serverside for better SEO, plus the bonus of NExt.js is that you dont need an express app to server the index.html',
        user_id:3,
        post_id:1,
    },
    {
        comment_text: 'Please do not ask question without providing code (haha stack overflow joke)',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'have you included app.use(express.json()) and \n app.use(express.urlencoded({ extended: true }));',
        user_id: 5,
        post_id: 2,
    },
    {
        comment_text: 'Yes typescript is 100% worth it, rather than throwing the error during application run and wonder wht threw the error in the first place you will find out what through the error more often before the application even runs',
        user_id: 4,
        post_id: 3,
    },
    {
        comment_text: 'Typescript is my favorite, it does have a bit of a learning curve but if javascript is your first language it will help you understand other languages where you HAVE to declare your types no matter what, and it makes it easier to read your code after a few weeks and coming back',
        user_id: 1,
        post_id: 3,
    },
    {
        comment_text: '+1 for Sequelize, I have been using it recently and I love how much time it has saved me',
        user_id: 1,
        post_id: 4,
    },
    {
        comment_text: 'for those who didnt know you can install it using npm sequelize',
        user_id: 2,
        post_id: 4,
    },
    {
        comment_text: 'VSCode is fine what are you talking about?',
        user_id: 1,
        post_id: 5,
    },
    {
        comment_text: ' Jetbrains makes the best IDEs personally I use Webstorm for all my javascript/react/express/html',
        user_id: 4,
        post_id: 5,
    },
    {
        comment_text: 'Atom is nice imo but might not be the best for everyone',
        user_id: 2,
        post_id: 5,
    },
    {
        comment_text: 'your not a real programmer unless you use vim',
        user_id: 3,
        post_id: 5,
    }
]

const seedComments =()=> Comment.bulkCreate(commentData)

module.exports = seedComments
