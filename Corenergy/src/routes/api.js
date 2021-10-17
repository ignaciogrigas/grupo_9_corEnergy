const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require ("../controllers/api");
const { totalProductsSold } = require("../models/api");

router.get("/users/:page?",apiController.users);

router.get("/users/detail/:id",apiController.userId);

router.get("/products/:page?",apiController.products);

router.get("/products/detail/:id",apiController.productId);

router.get("/sales/best-sellers",apiController.bestSeller);

router.get("/sales/total-products-sold",apiController.totalProductsSold)

router.get("/sales/total-revenue",apiController.totalRevenue)

module.exports=router