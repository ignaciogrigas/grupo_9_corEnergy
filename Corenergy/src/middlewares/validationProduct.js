const productModel = require("../models/products");

module.exports = function(req, res, next){
    if(productModel.oneWithExtra(req.params.id)){
  return next();
    }else{
       return res.send("Error 404")
    }
}
                  
