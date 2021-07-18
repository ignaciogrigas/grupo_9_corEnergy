const express = require("express");
const router = express.Router();
const path = require("path");

module.exports={
    show:(req,res)=>res.render("home",{
    title:"Home",
    style:"/css/home.css",
    listOfProducts:4
})
}