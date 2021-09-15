const express = require("express");
const router = express.Router();
const path = require("path");
const homeModel = require("../models/home")
const productModel = require("../models/products")


module.exports={
    search:(req,res)=> {
        console.log(homeModel.bestReviews())
        
    },
    /*search:(req,res) => 
            res.render("query_results",{
                title:"Results",
                style:"cual",
                queryResults: homeModel.bestReviews(),
                //listOfProducts:homeModel.bestSellers()
            }),*/
    show:async(req,res)=>{
        try{
            /*const groupsProducts = await ProductCart.findAll(
                {group:"product",
                limit:8},
                {include:["product","image"]})
            const show= await console.log(groupsProducts)*/
            const bestReviews = await Review.findAll({
                where:{
                    stars:{
                        [Op.gte]:3
                    }
                },
                limit:3
            })
            console.log(bestReviews)
            res.render("home",{
                title:"Home",
                style:"/css/home.css",
                listOfProducts:groupsProducts,
                listOfReviews:bestReviews
            })
        }catch (error){
            console.log(console.error)
            res.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })
        }
    },
    error:(req,res)=>res.render("error_404",{
        title:"Error 404",
        style:"/css/error_404.css"
    })
}