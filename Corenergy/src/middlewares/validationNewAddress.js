const userModel = require("../models/users");
const { body } = require("express-validator");

module.exports = [
    body("city")
    .notEmpty().withMessage("Invalid city"),
    body("address")
    .notEmpty().withMessage("The address must be the street you live in").bail()
    .isString().not().withMessage("The address must be the street you live in").bail(),
    body("zipcode")
    .notEmpty().withMessage("Invalid zipcode").bail()
    .isNumeric().withMessage("Invalid zipcode").bail()
    .isLength({min:4}).withMessage("Invalid zipcode")
]