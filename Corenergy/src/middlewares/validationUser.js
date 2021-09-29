const userModel = require("../models/users");
const { body, check } = require("express-validator");


const checkIfUserEmailAlreadyExist = async (value) => {
    let registered = await userModel.findByEmail(value);
    if (registered) {         
    return Promise.reject("Email already exists");}        
    }

const checkIfPasswordsMatch = (value, { req }) => {
    return value === req.body.password
}

const checkImgFormat = ((value, {req})=>{
    let imgFormat = ["jpg","jpeg", "png", "gif"]
    let imgExt = req.file.mimetype.split("/").pop();     
    
    if(!imgFormat.includes(imgExt)){        
    throw new Error("Image must be jpg, jpeg, pnp or gif")
}
return true
})

module.exports = [
    // Check name
    body("name")
    .notEmpty().isLength({min:2}).withMessage("Not a valid name"),
    // Check surname
    body("surname")
    .notEmpty().isLength({min:2}).withMessage("Not a valid surname"),
    //Check email
    body("email")
    .notEmpty().withMessage("You must sign up with an e-mail")
    .isEmail().not().withMessage("That's not a valid email")//ver esto
    .custom(checkIfUserEmailAlreadyExist),   
   // Check password
    body("password")
    .notEmpty().withMessage("Invalid password").bail()
    .isLength({ min: 8 }).not().withMessage("Password not strong enough"),
    // Check confirm password
    body("conf_password")
    .custom(checkIfPasswordsMatch).withMessage("Passwords should match"),
    // Check image extension
    check("imgError").custom(checkImgFormat)
]













 /*body("conf_password").custom((value, { req }) => {
        let firstPassword = req.body.password;
        if (value != firstPassword) {
          return Promise.reject('Passwords do not match');
        }
        return true;
      })*/

/*module.exports = function(req, res, next){
    if(usersModel.findByEmail(req.body.email)){
  return next();
    }else{
       return res.send("Not registered yet!")
    }
}

/*User.findAll()
.then(usuarios => {
    let usuarioExistente = usuarios.filter(function (usuario) {
        return usuario.email == value;
    })
    if (usuarioExistente) {
        return true
    } else {
        return false
    }
}).withMessage('El usuario no existe'),
// }),
body('password').custom((value, {
    req
}) => {
    /*   User.findAll()
       .then(usuarios => { 
    let claveCorrecta = usuarios.filter(function (usuario) {
        return bcrypt.compareSync(value, usuario.password)
    })
    if (usuarios.email == req.body.email) {
        if (claveCorrecta) {
            return true
        } else {
            return false
        }
    }
}).withMessage('La contraseña es incorrecta') 
// })
],
,

    updateUser: [

        check('name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),

        check('lastName').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),

        check('email').isEmail().withMessage('Agregar un email válido'),

    
            body('confirm_password').custom((value, {
                req
            }) => {
                if (req.body.password == value) {
                    return true // Si yo retorno un true  no se muestra el error     
                } else {
                    return false // Si retorno un false si se muestra el error
                }
            }).withMessage('Las contraseñas deben ser iguales'),

         
    ]*/