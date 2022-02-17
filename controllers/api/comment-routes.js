const router = require('express').Router()
const {Comment} = require('../../models')
const withAuth = require('../../middleware/auth')

//CREATE comment route
router.post('/', withAuth,async (req, res) => {

    try {
        const document = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })

        return res.json(document)

    } catch (e) {
        res.status(400).json(e);
    }
});

//DELETE comment route
router.delete('/:id',withAuth,async (req, res) => {
    try {
        const document = await Comment.destroy({
            where:{
                id: req.params.id
            }
        })

        if(!document){
            return res.status(400).json({message:"comment id not found"})
        }

        return res.json(document)

    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router