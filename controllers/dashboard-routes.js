const router = require('express').Router()
const {Post, User, Comment} = require('../models')
const withAuth = require('../middleware/auth')

router.get('/', withAuth, async (req, res) => {
    const document = await Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        order: [['created_at', 'DESC']],
        include: {
            model: User,
        }
    })

    const posts = document.map(post => post.get({plain: true}));

    res.render('dashboard', {posts, isLoggedIn: true, userName: req.session.username})
})

router.get('/new-post', withAuth, async (req, res) => {
    res.render('new-post', {isLoggedIn: true, userName: req.session.username})
})


router.get('/edit/:id', withAuth, async (req, res) => {
try{


    const document = await Post.findOne({
        where: {
            user_id: req.session.user_id,
            id: req.params.id
        },
        include: [
            {
                model: Comment,
                include: {
                    model: User
                }
            },
            {
                model: User
            }
        ]
    })

    if(!document){
        return res.redirect('/dashboard')
    }

    const posts = document.get({plain: true});

    res.render('edit-post', {posts, isLoggedIn: true, userName: req.session.username})
}catch (e) {
    alert(e)
    return res.status(500)
}
})

module.exports = router