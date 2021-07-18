const express = require("express");
const router = express.Router();
const path = require("path");

module.exports={
    logIn:(req,res)=>res.render("./users/log_in",{
        title:"Log in",
        style: "/css/log_in.css"
    }),
    singUp:(req,res)=>res.render("./users/sing_up",{
        title:"Sing up",
        style: "/css/sing_up.css"
    }),
    profile:(req,res)=>res.render("./users/profile",{
        title:"Profile",
        style: "/css/profile.css"
    })
}