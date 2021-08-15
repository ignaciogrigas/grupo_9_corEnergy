const usersModel = require("../models/users")

module.exports = function(req, res, next){
    if(usersModel.findByEmail(req.body.id)){
  return next();
    }else{
       return res.send("Error 404")
    }
}