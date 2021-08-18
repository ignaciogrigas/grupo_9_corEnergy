const usersModel = require("../models/users")

module.exports = function(req, res, next){
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