const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const usersController = require("../controllers/users")
const storage = require("../middlewares/users_multer");
const upload = multer({storage:storage});
/*const validationLogIn = require("../middlewares/validationLogIn");
const validationIsLogged = require("../middlewares/validationIsLogged");
const validationUser = require("../middlewares/validationUser");
const validationNewAddress = require("../middlewares/validationNewAddress");
const validationNewCard = require("../middlewares/validationNewCard");*/


router.get("/profile"/*,validationIsLogged*/, usersController.profile);

router.get("/log-in", usersController.logIn);

router.get("/sign-up", usersController.signUp);

router.get("/log-out", usersController.logOut);

router.post("/save",[/*validationUser,*/upload.single("profileImage")],usersController.create);

router.post("/access"/*,validationLogIn*/,usersController.access);

router.post("/save-new-card"/*,validationNewCard*/,usersController.newCard);

router.post("/save-new-address"/*,validationNewAddress*/,usersController.newAddress);

module.exports = router;