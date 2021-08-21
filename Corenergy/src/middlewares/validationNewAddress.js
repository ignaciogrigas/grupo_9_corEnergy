const { body } = require("express-validator");

module.exports = [
    body("city").isEmpty(),
    body("address").isEmpty().isString().withMessage("The address must be the street you live in"),
    body("zipcode").isEmpty().isNumeric().isLength({min:4}).withMessage("Invalid zipcode")
]