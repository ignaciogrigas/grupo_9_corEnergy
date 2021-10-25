const Sequelize = require("sequelize")
const { sequelize } = require("../database/models")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart,Image,SubCategory,Category} = db

 module.exports = {
     search:async function(keywords){
         try{
            return await Product.findAll({
                where:{
                    name:{[Op.like]:`%${keywords}%`},
                    deletedAt :{[Op.eq]:null}
                },
                include: [
                   {model: Image, as: "image"},
                   {model: Category, as: "category"},
                   {model: SubCategory, as: "subcategories" }
               ]
            })
         }catch(err){console.log(err)}
     },
     bestReviews: async function(){
         try{
            return await Review.findAll({
                where:{stars:{
                        [Op.gte]:3
                    }
                },
                limit:3
            })
         }catch(err){console.log(err)}
    },

     bestSellers:async function (){
         try{
            let bestSellers = await ProductCart.findAll({
                group: "productId",
                attributes: ["productId",[sequelize.fn("COUNT",sequelize.col("ProductCart.productId")),"count"]],
                order : [[sequelize.col("count"),"DESC"]],
                include :[
                    {model: Product, as: "product", include:[
                        {model: Image, as: "image"},
                        {model: Category, as: "category"},
                        {model: SubCategory, as: "subcategories" }
                    ], where:{
                        deletedAt :{[Op.eq]:null}
                    }},
                ],
                limit: 4
            });
            return bestSellers
         }catch(err){console.log(err);}
     }
     
 } 