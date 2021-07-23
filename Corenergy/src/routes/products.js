const express = require("express");
const router = express.Router();
const path = require("path");
const products = require("../controllers/products");
const multer = require("multer");
const storage = require("../middlewares/products_multer");
const upload = multer({storage:storage});

router.get("/create", products.showCreateTemplate);

router.get("/all/:category", products.category);

router.get("/:id", products.byId);

router.post("/save",upload.array("productImage"[6]),products.save);

router.get("/:id/edit", products.modify);

router.put("/update/:id" ,upload.array("productImage"[6]),products.edit);

router.delete ("/delete/:id",products.delete);

router.get("/cart" , products.cart);

module.exports = router;
