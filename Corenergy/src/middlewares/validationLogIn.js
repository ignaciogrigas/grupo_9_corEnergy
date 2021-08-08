const { check } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/users");
module.exports = [
  check("email").isEmail().custom(value => {
    let registered = userModel.findByEmail(value);
    if (!registered) {
      return Promise.reject('E-mail not found');
    }
    return true
  }),
  check("password").custom((value, { req }) => {

    let registered = userModel.findByEmail(req.body.email);

    if (bcrypt.compareSync(value, registered.password) != true) {
      return Promise.reject('Password does not match');
    }

    return true;
  })
]