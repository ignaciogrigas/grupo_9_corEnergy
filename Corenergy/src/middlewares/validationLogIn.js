const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/users");
module.exports = [
  body("email").isEmail().custom(value => {
    let registered = userModel.findByEmail(value);
    if (!registered) {
      return Promise.reject('E-mail not found');
    }
    return true
  }),
  body("password").custom((value, { req }) => {

    let registered = userModel.findByEmail(req.body.email);

    if (bcrypt.compareSync(value, registered.password) != true) {
      return Promise.reject('Password does not match');
    }

    return true;
  })
]