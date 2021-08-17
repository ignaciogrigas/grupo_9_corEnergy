const express = require("express");
const router = express.Router();
const path = require("path");

module.exports={
    show:(req,res)=>res.render("home",{
    title:"Home",
    style:"/css/home.css",
    listOfProducts:4
}),
    error:(req,res)=>res.render("error_404",{
        title:"Error 404",
        style:"/css/error_404.css"
    })
}