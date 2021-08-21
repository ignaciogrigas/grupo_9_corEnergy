const { body } = require("express-validator");
const productModel = require("../models/products")

module.exports =  [
  body("productName")
.notEmpty().withMessage('The product must have a title'),
//.isLength({ min: 4, max: undefined }).withMessage('The name of the product has to be longer'),

 /* body("choice_weights")
  .notEmpty().withMessage('You have to pick a weight amount').bail(),

  body("choice_elasticBands")
  .notEmpty().withMessage('You have to pick a band color').bail(),

  body("choice_mats")
  .notEmpty().withMessage('You have to pick a mat color').bail(),*/

  body("price")
  .notEmpty().withMessage('You have to price your product'),

  body("productCode")
  .isLength({ min: 6, max: 6 }).withMessage('The products´s code must have 6 digits')
]

/*addProduct: [

  check('name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),

  check('price').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

  check('stock').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

  check('description').isLength({min: 1}).withMessage('El campo descripción no puede estar vacío'),
  
  check('measurements').isLength({min: 1}).withMessage('El campo medidas no puede estar vacío'),
 
  check('weigth').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

  body('collection').custom((value, {
      req
  }) => {
      if (!req.body.collection) {
          return false
      }
      return true
  }).withMessage('El campo colección no puede estar vacío'),

  body('category').custom((value, {
      req
  }) => {
      if (!req.body.category) {
          return false
      }
      return true
  }).withMessage('El campo categoría no puede estar vacío'),


  body('discount').custom((value, {
      req
  }) => {
      //console.log("validando!" + req.body.discount)

      if (!req.body.discount) {
          return false
      }
      return true
  }).withMessage('El campo descuento no puede estar vacío'),


  body('image').custom((value, {
      req
  }) => {
      //console.log("validando!" + req.body.discount)

      if (!req.file) {
          return false
      }
      return true
  }).withMessage('El campo imagen no puede estar vacío'),


     //Aquí obligo a que el usuario seleccione su avatar
body('image').custom(function (value, { req }) {
  let ext;
  //console.log('Foto'+req.file.filename);
  if(req.file.filename == ''){
      return false
  }else{
      ext = path.extname(req.file.filename).toLowerCase();
  }
  //console.log(ext);
  if (
      ext == ".jpg" ||
      ext == ".jpeg" ||
      ext == ".png" ||
      ext == ".gif"){
          return true;
      }
      return false;
}).withMessage('Solo archivos JPG, JPEG, PNG o GIF')

]*/
