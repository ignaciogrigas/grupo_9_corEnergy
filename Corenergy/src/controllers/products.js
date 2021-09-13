const express = require("express");
const router = express.Router();
const path = require("path");
const Sequelize = require("sequelize")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart,Cart,UserCart} = db
module.exports = {
    byId:async(req,res) => {
        try{
        const singleProduct = await Product.findByPk(req.params.id,{include:["image","subcategories","review"]});
        res.send(singleProduct)
        }catch(error){
            cres.send(error)
            /*res.render("error_404",{
                title:"Error 404",
                style:"/css/error_404.css"
            })*/
        }
    }
}
