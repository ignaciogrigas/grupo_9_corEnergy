const express = require("express");
const router = express.Router();
const path = require("path");
const productsModel = require("../models/products");
const usersModel = require("../models/users");
const { validationResult } = require('express-validator');
const users = require("../models/users");

module.exports = {
    byId:async(req,res) => {
        try{
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
        }catch(err){
            res.send(err)
        }
    },
    category:async (req,res)=> {
        try{
            let listOfProducts = await productsModel.byCategory(req.params.nameCategory)
            res.render("./products/all_products",{
            style:"/css/all_products.css",
            title:productsModel.titleArrange(req.params.nameCategory),
            listOfProducts:listOfProducts })
        }catch(err){
            res.send(err)
        }
        
    },
    showCreateTemplate:(req,res)=> {
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
        })
    },
    save:async(req,res)=> {
        let newProduct = await productsModel.new(req.body,req.files,req.session.user)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("./products/create",{ 
                errors: errors.mapped(),
                title:"Add",
                style:"/css/create.css"
               });
          }else{
            return newProduct , res.render("./users/profile",{
                title:"Profile",
                style: "/css/profile.css"
            })
          }
    },
    modify:async(req,res)=> {
        const productToBeEdited = await productsModel.one(req.params.id)
        if (!productToBeEdited) {
            es.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })
        }
        return res.render("./products/create",{
            title:"Update",
            style:"/css/create.css",
            product: productToBeEdited,
        })
    },

    edit:async(req,res)=>{
        const productToBeEdited = await productsModel.one(req.params.id)
        let result = await productsModel.edit(req.body,req.files,req.params.id,req.session.user)
        return result ? res.redirect("/") : res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            errorMsg:"Try again,errors in your upload",
            product: productToBeEdited,
        }) 
    },

    delete:async(req,res)=>{
        let result = await productsModel.delete(req.params.id,req.session.user);
        return result ? res.redirect("/") : res.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    },
    newReview:async (req,res)=> {
        let newReview = await productsModel.newReview(req.body);
        return newReview ? res.redirect("back") : es.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    },
    cart:async (req,res)=> {
        try{
            let productsBought = await productsModel.cart(req.session.user)
            let addresses = await usersModel.getAddresses(req.session.user)
            let cards = await usersModel.getCards(req.session.user)
            res.render("./products/shopping_cart",{
            title:"Cart",
            style:"/css/shopping_cart.css",
            registeredCreditCards:cards,
            registeredAddress:addresses,
            ProductsBought:productsBought
        })
        }catch(err){
            console.log(err);
            res.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })
        }
       },
    buy:async(req,res) =>{
        let purchase = await productsModel.buy(req.body,req.session.user)
        return purchase ? res.redirect("/"): res.render("error_404",{
        title:"Error 404",
        style:"/css/error_404.css"
    })
    },
    deleteProductCart:async(req,res)=>{
        let deletedProduct = await productsModel.deleteProductCart(req.session.user,req.params.id)
        return deletedProduct ? res.redirect("back") : res.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    },
    order:async(req,res) => {
        let newOrder = await productsModel.order(req.body,req.session.user)
        return newOrder ? res.redirect("/") : res.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    }
}
