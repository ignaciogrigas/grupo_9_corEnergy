const express = require("express");
const router = express.Router();
const path = require("path");
const products = require("../data/products.json")
const productsModel = require ("../models/products.js")
module.exports = {
    byId:(req,res)=> res.render("./products/product_detail",{
        style:"/css/product_detail.css",
        title:req.params.id,
        singleProduct:productsModel.one(req.params.id)
    }),
    category:(req,res)=> res.render("./products/all_products",{
        style:"/css/all_products.css",
        title:req.params.category,
        listOfProducts:productsModel.byCategory(req.params.category),
        listOfSubCategories:productsModel.allSubcategories(req.params.category)
    }),

    create:(req,res)=> {
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            product: {}
        })
    },

    modify:(req,res)=> {
        const id = req.params.id;

        const productId = Number(id)

        const productToBeEdited = products.find(product => product.id === productId);

        if (!productToBeEdited) {
            
            // mandar a 404
        }

        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            product: productToBeEdited,
        })
    },

    save:(req,res)=>res.redirect("home",{
        save:productsModel.create(req.body,req.files),
        //falta data de home //

    }),
    cart:(req,res)=> res.render("./products/shopping_cart")
}
