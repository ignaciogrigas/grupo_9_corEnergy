const { body } = require("express-validator");
const productModel = require("../models/products")

module.exports =  [
  body("productName")
.notEmpty().withMessage('Name may not be empty').bail()
.isLength({ min: 4, max: undefined }).withMessage('The name of the product has to be longer'),

  body("choice_weights")
  .notEmpty().withMessage('You have to choose a weight amount').bail(),

  body("choice_elasticBands")
  .notEmpty().withMessage('You have to pick a band color').bail(),

  body("choice_mats")
  .notEmpty().withMessage('You have to pick a mat color').bail(),

  body("price")
  .notEmpty().withMessage('You have to pick a price').bail()
  .isCurrency()
]


//la idea era validarlos tmb con precio > 0 

//validar tmb para q todos los campos sean requeridos aunque en el form ya se puede pedir eso

