const router = require('express').Router()
const {User} = require('../../models/index')

//LOGIN route
router.post('/login', async (req, res) => {
    try {
        const document = await User.findOne({
            where: {
                username: req.body.username
            },
        })

        if (!document) {
            return res.status(400).json({message: "user does not exist"})
        }
        const isPasswordValid = await document.isPasswordValid(req.body.password)

        if(!isPasswordValid){
            return res.status(400).json({message: "incorrect password"})
        }

        req.session.save(()=>{
            req.session.user_id = document.id
            req.session.username = document.username
            req.session.isLoggedIn = true

            return res.json({
                user: document,
                message:"you are now logged in"
            })
        })

    } catch (e) {
        res.status(500).json({message: "Error", error: e})
    }
})

//LOGOUT route
router.post('/logout',(req,res)=>{

    if(req.session.isLoggedIn){
        req.session.destroy(()=>{
            return res.status(204).end();
        })
    }else{
        console.log("this ran")
        return res.status(404).end();
    }
})

//CREATE account route
router.post('/',async (req,res) =>{

    try{
        const document = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })

        if(!document){
            return res.status(500).json({message: "Error"})
        }

        return req.session.save(()=>{
            req.session.user_id = document.id
            req.session.username = document.username
            req.session.isLoggedIn = true;

            res.json(document)
        })

    }catch(e){
        res.status(500).json({message:"error", error:e})
    }

})


module.exports = router