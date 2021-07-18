const express = require("express");
const router = express.Router();
const path = require("path");
const home = require ("../controllers/home")

router.get("/",home.show);

module.exports=router;