const router = require('express').Router()
const {Post, User, Comment} = require('../../models/')

//GET ALL POSTS
router.get('/',async (req,res)=>{
    try{
        const document = await Post.findAll(
            {
                order: [['created_at', 'DESC']],
                include:{
                    model:User,
                    attributes:['username']
                }
            }
        )

        if(!document){
            return res.status(404).json({message:"no posts found"})
        }

        return res.json(document)

    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }
})

//GET A POST BY ID
router.get('/:id',async (req,res)=>{
    try{
        const document = await Post.findOne(
            {
                order: [['created_at', 'DESC']],
                include:[{
                    model:User,
                    attributes:['username']
                },{
                    model:Comment,
                    include:{
                        model:User
                    },
                }]
            }
        )

        if(!document){
            return res.status(404).json({message:"no post found"})
        }

        return res.json(document)

    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }
})

//CREATE POST
router.post('/',async (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    try{
        const document = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id
        })


        return res.json(document)

    }catch (e) {
        return res.status(500).json({message:"error",error:e})
    }

});


module.exports = router