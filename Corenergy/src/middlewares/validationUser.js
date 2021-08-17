const usersModel = require("../models/users")

module.exports = function(req, res, next){
    if(usersModel.findByEmail(req.body.email)){
  return next();
    }else{
       return res.send("Not registered yet!")
    }
}