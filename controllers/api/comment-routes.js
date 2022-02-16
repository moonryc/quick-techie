const router = require('express').Router()
const {Comment} = require('../../models')
const withAuth = require('../../middleware/auth')

router.post('/', withAuth,async (req, res) => {
    console.log(req.session)
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

module.exports = router