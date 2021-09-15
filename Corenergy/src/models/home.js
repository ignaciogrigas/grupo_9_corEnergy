const Sequelize = require("sequelize")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart} = db

 module.exports = {
     search:function(keywords){
         Product.findAll({
             where:{
                 title:{[Op.like]:"%" + keywords + "%"}
             },
             include: [
                {model: db.Image, as: "image"},
                {model: db.Category, as: "category"},
                {model: db.SubCategory, as: "subCategory" }
            ]
         })
     },
     bestReviews: async function(){
         return await Review.findAll({
            where:{stars:{
                    [Op.gte]:3
                }
            },
            limit:3
        })
    },

     bestSellers:function (){
        ProductCart.findAll({
            group: "product",
            limit: 8,
            include : [
                {model: Product, as: "product"},
                {model: db.Image, as: "image"}
            ]
        })
     }
 } 