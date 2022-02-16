const router = require("express").Router()
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes')

router.use('/',homeRoutes)
router.use('/dashboard', dashboardRoutes);
router.use('/api',apiRoutes)

router.use((req, res) => {
    console.log("==========================================")
    console.log("ERROR HANDLER")
    console.log("==========================================")
    res.status(404).end();
});

module.exports = router