const express = require("express");
const router = express.Router();
const path = require("path");
const products = require("../controllers/products");
const upload = require("../middlewares/products_multer");

router.get("/create", products.create);

router.get("/all/:category", products.category)

router.get("/:id", products.byId)

router.post("/save",upload.any("productImage"),products.save)

router.get("/edit/:id", products.create) //ver//

router.get("/cart" , products.cart)

module.exports = router;