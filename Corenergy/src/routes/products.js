const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/products");
const multer = require("multer");
const storage = require("../middlewares/products_multer");
const upload = multer({storage:storage});
const validationIsLogged = require("../middlewares/validationIsLogged");
const validationProduct = require("../middlewares/validationProduct");

router.get("/create", productsController.showCreateTemplate);

router.get("/cart" ,validationIsLogged, productsController.cart);

router.get("/:id", productsController.byId);

router.get("/edit/:id", productsController.modify);

router.get("/category/:nameCategory", productsController.category);

router.post("/save",[upload.array("productImages",[6]),validationProduct],productsController.save);

router.post("/save-new-review",productsController.newReview)

router.post("/buy/:id",productsController.buy);

router.put("/update/:id" ,upload.array("productImages",[6]),productsController.edit);

router.put ("/delete/:id",productsController.delete);

router.put("/order-successful",productsController.order)

module.exports = router;
