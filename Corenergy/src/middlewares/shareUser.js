const usersModel = require("../models/users")
  module.exports = (req, res, next) => {
    let user=null
    if(req.cookie != undefined && req.cookie.user!= undefined){
        user= usersModel.findByEmail(req.cookie.user);
        req.session.user=user;
    }
    if (req.session != undefined && req.session.user != undefined){
        user=req.session.user;
    }
    res.locals.user=user;
    next();
  }