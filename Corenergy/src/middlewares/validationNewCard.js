const userModel = require("../models/users");
const { body } = require("express-validator");

module.exports = [
    body("creditcard")
    .isEmpty().withMessage("Invalid credit card number").bail()
    .isLength({min:16, max:16}).withMessage("Invalid credit card number"),
    body("expireMM")
    .isEmpty().withMessage("Invalid date"),
    body("expireYY")
    .isEmpty().withMessage("Invalid date"),
    body("secode")
    .isEmpty().withMessage("Invalid security code").bail()
    .isLength({min:3 , max : 4}).withMessage("Invalid security code")
]