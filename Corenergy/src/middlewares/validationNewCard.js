const userModel = require("../models/users");
const { body } = require("express-validator");

module.exports = [
    body("creditcard")
    .notEmpty().withMessage("Invalid credit card number")
    .isLength({min:16, max:16}).not().withMessage("Invalid credit card number"),
    body("expireMM")
    .notEmpty().withMessage("Invalid date"),
    body("expireYY")
    .notEmpty().withMessage("Invalid date"),
    body("secode")
    .notEmpty().withMessage("Invalid security code").bail()
    .isLength({min:3 , max : 4}).withMessage("Invalid security code")
]