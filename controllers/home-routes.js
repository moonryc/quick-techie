const {Post, User} = require("../models");
const router = require('express').Router()


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
        console.log(postsData)
        return res.render('homepage',{postsData})


    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }


})

router.get('/login',(req,res)=>{
    res.render('login')
} )

router.get('/:id',async (req,res)=>{
    try{
        const posts = await Post.findOne(
            {
                where:{
                    id:req.params.id
                },
                include:{
                    model:User,
                    attributes:['username']
                }
            }
        )


        const postsData = posts.get({plain:true})
        console.log(postsData)
        return res.render('single-post',{postsData})


    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }


})

module.exports = router