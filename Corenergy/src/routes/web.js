const express = require("express");
const app = express.Router();
const path = require("path");



app.get("/home",(req, res) => res.sendFile(path.resolve(__dirname,"../views/home.html")))
app.get("/product_detail",(req, res) => res.sendFile(path.resolve(__dirname,"../views/product_detail.html")))
app.get("/log_in",(req, res) => res.sendFile(path.resolve(__dirname,"../views/log_in.html")))
app.get("/profile",(req, res) => res.sendFile(path.resolve(__dirname,"../views/profile.html")))
app.get("/shopping_cart",(req, res) => res.sendFile(path.resolve(__dirname,"../views/shopping_cart.html")))
app.get("/sing up",(req, res) => res.sendFile(path.resolve(__dirname,"../views/sing_up.html")))
app.get("/Weights",(req, res) => res.sendFile(path.resolve(__dirname,"../views/Weights.html")))
app.get("/Elastic_Bands",(req, res) => res.sendFile(path.resolve(__dirname,"../views/Elastic_Bands.html")))
app.get("/Mats",(req, res) => res.sendFile(path.resolve(__dirname,"../views/Mats.html")))
app.get("/Bars",(req, res) => res.sendFile(path.resolve(__dirname,"../views/Bars.html")))


module.exports = app;