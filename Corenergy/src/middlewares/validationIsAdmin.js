module.exports = (req, res, next) => {
    if (res.locals.user && res.locals.user.category == "admin") {
      return next();
    } else{
      return res.redirect("/")
    }
  }