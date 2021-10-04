const { body, check } = require("express-validator");
const productModel = require("../models/products")


const checkImgFormat = ((value, {req})=>{
    let imgFormat = ["jpg","jpeg", "png", "gif"]
    let imgExt = []
    let loadedImages = req.files
    console.log("imagenes cargadas",loadedImages)
    let Ext = loadedImages.forEach(element => {
    imgExt.push(element.mimetype.split("/").pop())       
    });
   
    
    if(!imgFormat.includes(imgExt[0])){  
        console.log("extension de las imagenes",imgExt)       
    throw new Error("Image must be jpg, jpeg, png or gif")
}
return true
})

module.exports =  [
  body("productName")
    .notEmpty().withMessage('The product must have a title'),

 /* body("choice_weights")
  .notEmpty().withMessage('You have to pick a weight amount').bail(),

  body("choice_elasticBands")
  .notEmpty().withMessage('You have to pick a band color').bail(),

  body("choice_mats")
  .notEmpty().withMessage('You have to pick a mat color').bail(),*/
  body("description")
  .notEmpty().withMessage('you have to price your product')
  .isLength({min:20}).withMessage('minimum 20 characters'),

  body("price")
  .notEmpty().withMessage('You have to price your product'),

  body("productCode")
  .notEmpty().withMessage("Invalid product code")
  .isLength({ min: 6, max: 6 }).withMessage("The products's code must have 6 digits"),
  
  check("imgError").custom(checkImgFormat)
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
