const express = require("express");
const router = express.Router();
const path = require("path");
const homeModel = require("../models/home")
const productModel = require("../models/products")


module.exports={
    show:async(req,res)=> {
        let bestReviews=await homeModel.bestReviews();
        //let bestSellers = await homeModel.bestSellers()
        res.render("home",{
            title:"Home",
            style:"/css/home.css",
            listOfProducts:4,
            listOfReviews:bestReviews
        })
        
    },
    search: async (req,res)=>{
        let queryResults = await homeModel.search(req.query.keywords)
        console.log(queryResults[0].category)
        res.render("./products/search",{
            title:"Results",
            style:"/css/all_products.css",
            listOfProducts:queryResults
        })
    },//body/ver ruta

    prueba: async(req,res)=>{
        res.send(await homeModel.bestSellers())
    },
    error:(req,res)=>res.render("error_404",{
        title:"Error 404",
        style:"/css/error_404.css"
    })
}