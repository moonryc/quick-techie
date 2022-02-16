const router = require('express').Router()
const {Post,User} = require('../models')
const withAuth = require('../middleware/auth')

router.get('/',withAuth,async (req,res)=>{
    const document = await Post.findAll({
        where:{
            user_id: req.session.user_id
        },
        order: [['created_at', 'DESC']],
        include:{
            model:User,
        }
    })

    const posts = document.map(post => post.get({ plain: true }));

    res.render('dashboard',{posts,isLoggedIn:true,userName:req.session.username})
})

router.get('/new-post',withAuth,async (req,res)=>{
    res.render('new-post',{isLoggedIn:true,userName:req.session.username})
})

//TODO
router.get('/edit-post/:id',withAuth,async (req,res)=>{

    const document = await Post.findAll({
        where:{
            user_id: req.session.user_id
        },
        order: [['created_at', 'DESC']],
    })

    const posts = document.map(post => post.get({ plain: true }));

    res.render('dashboard',{posts,isLoggedIn:true,userName:req.session.username})
})

module.exports = router