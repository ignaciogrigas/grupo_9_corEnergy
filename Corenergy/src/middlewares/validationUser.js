const userModel = require("../models/users");
const { body } = require("express-validator");

module.exports = [
    body("name")
    .isEmpty().withMessage("You must sign up with a name"),
    body("email")
    .isEmpty().withMessage("You must sign up with an e-mail").bail()
    .isEmail().withMessage("Invalid e-mail").bail()
    .custom(value => {
        let registered = userModel.findByEmail(value);
        if (registered) {
          return Promise.reject('E-mail already registered');
        }
        return true
      }),
    body("password")
    .isEmpty().withMessage("Invalid password").bail()
    .isLength({ min: 8 }).withMessage("Password not strong enough"),
    body("conf_password")
    .isEmpty().bail()
    .equals("password").withMessage('Passwords do not match')
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