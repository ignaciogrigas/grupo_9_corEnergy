const express = require("express");
const router = express.Router();
const path = require("path");
const productsModel = require("../models/products")
module.exports = {
    byId:async(req,res) => {
        let singleProduct = await productsModel.one(req.params.id)
        let listOfReviews = await productsModel.getProductReviews(req.params.id)
        res.render("./products/product_detail",{
            style:"/css/product_detail.css",
            title:singleProduct.name,
            singleProduct:singleProduct,
            listOfProducts: [],
            listOfReviews:listOfReviews,
            idProduct:req.params.id
        })
    },
    category:async (req,res)=> {
        let listOfProducts = await productsModel.byCategory(req.params.nameCategory)
        console.log(listOfProducts)
        res.render("./products/all_products",{
        style:"/css/all_products.css",
        title:productsModel.titleArrange(req.params.nameCategory),
        listOfProducts:listOfProducts,
        listOfSubCategories:productsModel.allSubcategories(req.params.nameCategory)        

    })},
}
