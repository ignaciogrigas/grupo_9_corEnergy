const express = require("express");
const router = express.Router();
const path = require("path");
const {Op} = require("sequelize")
const db = require ("../database/models")
const {Product,Review,ProductCart} = db

//Que hacer con los campos de auditoria//
module.exports={
index: async(req, res) => {

},



create: async(req, res) => {

    try {
        const porductInfo = {
            name: req.body.name,
            code: req.body.code,
            categoryId: req.body.categoryId,
            description: req.body.description,
            price: req.body.price         
        }
        const productNew = await Products.create(porductInfo)
        res.render("./products/create",{ 
            title:"Add",
            style:"/css/create.css"
           });
    }
    catch (error){
        console.log(console.error)
        res.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    }
},
update: async (req, res) => {
    try {
        const product = await Products.update(req.body, {where:{id: req.params.id}})
    }
    catch (error){
        console.log(console.error)
        res.render("error_404",{
            title:"Error 404",
            style:"/css/error_404.css"
        })
    }
}
}

