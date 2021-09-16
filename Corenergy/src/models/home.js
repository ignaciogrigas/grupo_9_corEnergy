const Sequelize = require("sequelize")
const { sequelize } = require("../database/models")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart} = db

 module.exports = {
     search:async function(keywords){
         return await Product.findAll({
             where:{
                 name:{[Op.like]:`%${keywords}%`}
             },
             include: [
                {model: db.Image, as: "image"},
                {model: db.Category, as: "category"},
                {model: db.SubCategory, as: "subcategories" }
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

     bestSellers:async function (){
        let bestSellers = await ProductCart.findAll({
            group: "productId",
            //attribute: [sequelize.fn("COUNT",sequelize.col("ProductCart.productId")),"COUNT"],
            limit: 8,
            order : [["productId","DESC"]],
            /*include : [
                {model: Product, as: "product"}
            ]*/
        })
        return bestSellers
     }//no sabemos
     
 } 