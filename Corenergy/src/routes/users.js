const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const usersController = require("../controllers/users")
const storage = require("../middlewares/users_multer");
const { Router } = require("express");
const upload = multer({storage:storage});
const validationLogIn = require("../middlewares/validationLogIn");

router.get("/profile", usersController.profile);

router.get("/log-in", usersController.logIn);

router.get("/sign-up", usersController.signUp);

router.post("/save",upload.single("profileImage"),usersController.create) //USER USER ???

router.post("/access",validationLogIn,usersController.access)

module.exports = router;