const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require ("../controllers/api")

router.get("/users/:page?",apiController.users);

router.get("/users/detail/:id",apiController.userId);

router.get("/products/:page?",apiController.products);

router.get("/products/detail/:id",apiController.productId);

module.exports=router