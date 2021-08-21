const userModel = require("../models/users");
const { body } = require("express-validator");

module.exports = [
    body("creditcard").isEmpty().isLength({min:16, max:16}).withMessage("Invalid credit card number"),
    body("expireMM").isEmpty(),
    body("expireYY").isEmpty(),
    body("secode").isEmpty().isLength({min:3 , max : 4}).withMessage("Invalid security code")
]