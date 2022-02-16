const {Post, User,Comment} = require("../models");
const router = require('express').Router()
const withAuth = require('../middleware/auth')

//HOMEPAGE
router.get('/',async (req,res)=>{

    try{
        const posts = await Post.findAll(
            {
                order: [['created_at', 'DESC']],
                include:{
                    model:User,
                    attributes:['username']
                }
            }
        )
        const postsData = posts.map(post=> post.get({plain:true}))
        return res.render('homepage',{postsData, isLoggedIn:req.session.isLoggedIn, userName:req.session.username})
    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }


})

//LOGIN SIGNUP PAGE
router.get('/login',(req,res)=>{
    res.render('login')
} )

//SINGLE POST PAGE
router.get('/post/:id',async (req,res)=>{
    try{
        const posts = await Post.findOne(
            {
                where:{
                    id:req.params.id
                },
                include:[{
                    model:User,
                    attributes:['username'],
                },{
                    model:Comment,
                    include:{
                        model:User
                    },
                }]
            }
        )
        const postsData = posts.get({plain:true})
        return res.render('single-post',{postsData, isLoggedIn:req.session.isLoggedIn,userName:req.session.username})
    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }


})

module.exports = router