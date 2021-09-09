const express = require("express");
const router = express.Router();
const path = require("path");
const home = require ("../controllers/home")

router.get("/",home.show);

router.get("/error-404",home.error);

router.get("/search/keywords",home.search);

module.exports=router;