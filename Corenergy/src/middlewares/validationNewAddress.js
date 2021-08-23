const { body } = require("express-validator");

module.exports = [
    body("city")
    .isEmpty().withMessage("Invalid city"),
    body("address")
    .isEmpty().withMessage("The address must be the street you live in").bail()
    .isString().withMessage("The address must be the street you live in").bail()
    .withMessage("The address must be the street you live in"),
    body("zipcode")
    .isEmpty().withMessage("Invalid zipcode").bail()
    .isNumeric().withMessage("Invalid zipcode").bail()
    .isLength({min:4}).withMessage("Invalid zipcode")
]