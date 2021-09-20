const express = require("express");
const router = express.Router();
const path = require("path");
const productsModel = require("../models/products");
const { validationResult } = require('express-validator');

module.exports = {
    byId:async(req,res) => {
        let singleProduct = await productsModel.one(req.params.id)
        let listOfReviews = await productsModel.getProductReviews(req.params.id)
        let otherProducts = await productsModel.customersWhoAlsoBought(req.params.id)
        res.render("./products/product_detail",{
            style:"/css/product_detail.css",
            title:singleProduct.name,
            singleProduct:singleProduct,
            listOfProducts: otherProducts,
            listOfReviews:listOfReviews,
            idProduct:req.params.id
        })
    },
    category:async (req,res)=> {
        let listOfProducts = await productsModel.byCategory(req.params.nameCategory)
            res.render("./products/all_products",{
            style:"/css/all_products.css",
            title:productsModel.titleArrange(req.params.nameCategory),
            listOfProducts:listOfProducts,
            listOfSubCategories:productsModel.allSubcategories(req.params.nameCategory) })
        
    },
    showCreateTemplate:(req,res)=> {
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
        })
    },
    save:async(req,res)=> {
        let newProduct = await productsModel.new(req.body,req.files)//(req.body,req.files,req.session.user);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("./products/create",{ 
                errors: errors.mapped(),
                title:"Add",
                style:"/css/create.css"
               });
          }else{
            return newProduct , res.redirect("back");
          }
    },
    modify:async(req,res)=> {
        //const id = req.params.id;
        //const productId = Number(id)
        const productToBeEdited = await productsModel.one(req.params.id)
        if (!productToBeEdited) {
            res.render("error_404")
        }
        return res.render("./products/create",{
            title:"Update",
            style:"/css/create.css",
            product: productToBeEdited,
        })
    },

    edit:async(req,res)=>{
        const productToBeEdited = await productsModel.one(req.params.id)
        let result = await productsModel.edit(req.body,req.files,req.params.id)
        return result ? res.redirect("/") : res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            errorMsg:"Try again,errors in your upload",
            product: productToBeEdited,
        }) 
    },

    delete:async(req,res)=>{
        let result = await productsModel.delete(req.params.id);
        return result ? res.redirect("/") : res.render("error_404")
    },
    newReview:async (req,res)=> {
        let newReview = await productsModel.newReview(req.body);
        return newReview ? res.redirect("back") : " "
    },
    cart: (req,res)=> {
        res.render("./products/shopping_cart",{
        title:"Add",
        style:"/css/shopping_cart.css",
        registeredCreditCards:2,
        registeredAddress:2,
        ProductsBought:3
    })},
    buy:async(req,res) =>{
        let prueba = await productsModel.buy(2)
        res.send(prueba)
    },
    customersWhoAlsoBought:async(req,res) =>{
        let otherProducts = await productsModel.customersWhoAlsoBought(req.params.id)
        res.send(otherProducts)
    },
}
