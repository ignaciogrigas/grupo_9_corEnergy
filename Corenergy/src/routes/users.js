const express = require("express");
const router = express.Router();
const path = require("path");
const users = require("../controllers/users")
const upload = require("../middlewares/users_multer")

router.get("/profile", users.profile);

router.get("/log-in", users.logIn);

router.get("/sign-up", users.singUp);

module.exports = router;