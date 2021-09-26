const usersModel = require("../models/users")
  module.exports =async (req, res, next) => {
    let user=null
    if(req.cookies != undefined && req.cookies.user!= undefined){
        user=await usersModel.findByEmail(req.cookies.user);
        
        req.session.user=user;
    }
    if (req.session != undefined && req.session.user != undefined){
        user=req.session.user;
    }
    res.locals.user=user;
    next();
  }