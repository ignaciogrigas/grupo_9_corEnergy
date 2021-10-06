const express = require("express");
const router = express.Router();
const path = require("path");
const apiModel = require("../models/api")

module.exports={
    users:async(req,res)=> {
        let totalUsers = await apiModel.allUsers(req.params.page);
        let foward = parseInt(req.params.page) + 1
        let backwards = parseInt(req.params.page) - 1
        let data = res.status(200).json({
            count:totalUsers.count,
            users:totalUsers.rows,
            next:req.params.page != undefined && req.params.page >= 1 ? "http://localhost:3001/api/users/" + foward : undefined,
            back:req.params.page != undefined && req.params.page > 1 ? "http://localhost:3001/api/users/" + backwards : undefined
        })
        return data
    },
    userId:async(req,res)=> {
        let user = await apiModel.userId(req.params.id);
        let data = res.status(200).json(user)
        return data
    },
    products:async(req,res)=> {
        let totalProducts = await apiModel.allProducts(req.params.page);
        let countByCategory = await apiModel.countByCategory();
        let foward = parseInt(req.params.page) + 1
        let backwards = parseInt(req.params.page) - 1
        let data = res.status(200).json({count:totalProducts.count,
            products:totalProducts.rows,
            countByCategory:countByCategory,
            next:req.params.page != undefined && req.params.page >= 1 ? "http://localhost:3001/api/users/" + foward : undefined,
            back:req.params.page != undefined && req.params.page > 1 ? "http://localhost:3001/api/users/" + backwards : undefined})
        return data
    },
    productId:async(req,res)=> {
        let product = await apiModel.productId(req.params.id);
        let data = res.status(200).json(product)
        return data
    },
}