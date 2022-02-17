/**
 * Checks to make sure user is logged in, if the user is logged in the route is accessable, if not redirect the user to the login page
 * @param req
 * @param res
 * @param next
 */
const withAuth = (req,res,next) => {
  if(!req.session.user_id){
      res.redirect('/login')
  }else{
      next()
  }
}

module.exports = withAuth