const express = require("express");
const router = express.Router();
const path = require("path");
const usersModel = require("../models/users");
const { validationResult } = require('express-validator');

module.exports={
    logIn:(req,res)=>res.render("./users/log_in",{
        title:"Log in",
        style: "/css/log_in.css"
    }),

    signUp:(req,res)=>res.render("./users/sign_up",{
        title:"Sign up",
        style: "/css/sign_up.css"
    }),

    profile:(req,res)=>res.render("./users/profile",{
        title:"Profile",
        style: "/css/profile.css"
    }),

    create:(req,res)=>{
        let newUser = usersModel.create(req.body,req.file)
        return newUser == true ? res.redirect("/") : res.render("./users/sign_up",{
            title:"Sign Up",
            style:"/css/sign_up.css",
        }) 
    },

    access:(req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render("./users/log_in",{ 
              errors: errors.mapped(),
              title:"Log In", 
              old:req.body,
              style:"/css/log_in.css"
             });
        }else{
          let user = userModel.findByEmail(req.body.email);
          if(req.body.remember){
            res.cookie("email",req.body.email,{maxAge:300000})
          }
          req.session.user = user;
          return res.redirect("/")
        }
      },
}