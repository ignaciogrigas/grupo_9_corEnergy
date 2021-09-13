const express = require("express");
const router = express.Router();
const path = require("path");
const Sequelize = require("sequelize")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart} = db

module.exports={
    search:async(req,res) => {
        try{
             const results = await Product.findAll({
                where:{
                    title:{
                        [Op.like]:"%" + req.query.keywords + "%"
                    }
                }},{include:["image"]}
            )
            res.render("query_results",{
                title:"Results",
                style:"cual",
                queryResults : results
            })
        }catch (error){
            console.log(console.error)
            res.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })
        }
    },
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