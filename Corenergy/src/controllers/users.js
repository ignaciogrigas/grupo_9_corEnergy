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

    create:async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("./users/sign_up",{ 
                errors: errors.mapped(),
                title:"Sign Up", 
                old:req.body,
                style:"/css/sign_up.css"
               });
          }else{
            let newUser = await usersModel.create(req.body,req.file)
            req.session.user = newUser; 
          return res.redirect("/")
          }
    },

    access:async(req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render("./users/log_in",{ 
              errors: errors.mapped(),
              title:"Log In", 
              old:req.body,
              style:"/css/log_in.css"
             });
        }else{
          let user = await usersModel.findByEmail(req.body.email);
          if(req.body.remember){
            res.cookie("user",req.body.email,{maxAge:300000})
          }
          req.session.user = user; 
          return res.redirect("/")
        }
    },

    logOut:(req,res) => {
        req.session.destroy();
        res.cookie("user",null,{maxAge:-1});
        res.redirect("/")
    },
    newCard:(req,res) => {        
        const errors = validationResult(req);
        

        if (errors.errors.length > 0) {
            return res.render("./users/profile",{
                title:"Profile",
                style: "/css/profile.css",
                errors: errors.mapped()
            })
        }

        usersModel.newCard(req.body,req.session.user)

        return res.redirect("/")
    },
    newAddress:(req,res) => {        
        const errors = validationResult(req);
        

        if (errors.errors.length > 0) {
            return res.render("./users/profile",{
                title:"Profile",
                style: "/css/profile.css",
                errors: errors.mapped()
            })
        }

        usersModel.newAddress(req.body,req.session.user)

        return res.redirect("/")
    },
}