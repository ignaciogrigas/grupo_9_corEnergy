const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/products");
const multer = require("multer");
const storage = require("../middlewares/products_multer");
const validationIsLogged = require("../middlewares/validationIsLogged");
const upload = multer({storage:storage});

router.get("/create", productsController.showCreateTemplate);

router.get("/cart" ,validationIsLogged, productsController.cart);

router.get("/:id", productsController.byId);

router.get("/edit/:id", productsController.modify);

router.get("/category/:nameCategory", productsController.category);

router.post("/save",upload.array("productImage"[6]),productsController.save);

router.post("/save-new-review",productsController.newReview)

router.put("/update/:id" ,upload.array("productImage"[6]),productsController.edit);

router.delete ("/delete/:id",productsController.delete);

module.exports = router;
