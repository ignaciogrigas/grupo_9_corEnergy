const express = require("express");
const router = express.Router();
const path = require("path");
const apiModel = require("../models/api")
const homeModel = require ("../models/home")

module.exports={
    users:async(req,res)=> {
        let totalUsers = await apiModel.allUsers(req.params.page);
        let users= totalUsers.rows.map((user)=> Object.assign({},{...user.dataValues,link:`http://localhost:3001/api/users/detail/${user.id}`}))
        let foward = parseInt(req.params.page) + 1
        let backwards = parseInt(req.params.page) - 1
        let data = res.status(200).json({
            count:totalUsers.count,
            users:users,
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
        let products= totalProducts.rows.map((product)=> Object.assign({},{...product.dataValues,link:`http://localhost:3001/api/products/detail/${product.id}`}))
        let countByCategory = await apiModel.countByCategory();
        let foward = parseInt(req.params.page) + 1
        let backwards = parseInt(req.params.page) - 1
        let data = res.status(200).json({count:totalProducts.count,
            products:products,
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
    bestSeller: async(req,res)=>{
        let bestSellers = await homeModel.bestSellers();
        let data = res.status(200).json(bestSellers)
        return data
    },
    totalProductsSold:async (req,res)=>{
        let productsSold = await apiModel.totalProductsSold()
        let data = res.status(200).json(productsSold)
        return data
    },
    totalRevenue :async (req,res)=>{
        let productsSold = await apiModel.totalProductsSold()
        let totalRevenue = 0
        productsSold.rows.forEach(element => {
            let actualPrice = parseInt(element.productPrice);
            totalRevenue = totalRevenue + actualPrice            
        });
        let data = res.status(200).json(totalRevenue)
        return data;
    }
}