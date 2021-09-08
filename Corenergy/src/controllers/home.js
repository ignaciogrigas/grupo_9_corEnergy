const express = require("express");
const router = express.Router();
const path = require("path");
const {Op} = require("sequelize")
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
                }},{include:[{association:"image"}]}
            )
            res.render("query_results",{
                title:"Results",
                style:"cual",
                queryResults = results
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
            const groupsProducts = await ProductCart.findAll({group:"product"},{include:[{association:"product"}]})
            const groupCounts = await groupsProducts.forEachcount()
            res.render("home",{
                title:"Home",
                style:"/css/home.css",
                listOfProducts:4
            })
        }catch (error){
            console.log(console.error)
            res.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })
        }
    }
}