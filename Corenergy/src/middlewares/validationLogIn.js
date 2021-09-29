const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/users");
module.exports = [
  body("email")
  .custom( async (value) => {
    let registered = await userModel.findByEmail(value);
    if (!registered) {
      return Promise.reject('E-mail not found');
    }
    return true
  }),
  body("password").custom(async(value, { req }) => {

    let registered = await userModel.findByEmail(req.body.email);

    if(registered === null){
         
    }else if (bcrypt.compareSync(value, registered.password) != true) {
      return Promise.reject('Incorrect Password')
    }
    return true;
  })
]