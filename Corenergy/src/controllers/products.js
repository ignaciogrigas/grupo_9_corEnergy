const express = require("express");
const router = express.Router();
const path = require("path");
const products = require("../data/products.json")
const productsModel = require ("../models/products.js")
module.exports = {
    byId:(req,res)=> res.render("./products/product_detail",{
        style:"/css/product_detail.css",
        title:req.params.id,
        singleProduct:productsModel.oneWithExtra(req.params.id)
    }),
    category:(req,res)=> res.render("./products/all_products",{
        style:"/css/all_products.css",
        title:productsModel.title(req.params.category),
        listOfProducts:productsModel.byCategory(req.params.category),
        listOfSubCategories:productsModel.allSubcategories(req.params.category)
    }),

    showCreateTemplate:(req,res)=> {
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
        })
    },
    save:(req,res)=> {
        let newProduct = productsModel.new(req.body,req.files)
        return newProduct == true ? res.redirect("/") : res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            errorMsg:"Try again,errors in your upload"
        })
    },
    modify:(req,res)=> {
        //const id = req.params.id;
        //const productId = Number(id)
        const productToBeEdited = productsModel.oneWithExtra(req.params.id)
        if (!productToBeEdited) {
              // mandar a 404
        }

        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            product: productToBeEdited,
        })
    },

    edit:(req,res)=>{
        const productToBeEdited = productsModel.oneWithExtra(req.params.id)
        let result = productsModel.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/") : res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            errorMsg:"Try again,errors in your upload",
            product: productToBeEdited,
        }) 
    },

    delete:(req,res)=>{
        let result = productsModel.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error 404") // mandar a 404
    },

    cart:(req,res)=> res.render("./products/shopping_cart")
}
