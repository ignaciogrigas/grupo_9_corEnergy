const Sequelize = require("sequelize")
const { sequelize } = require("../database/models")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart,Image,SubCategory,Category,User} = db
 module.exports={
    allUsers: async function(offsetNumber) {
        let totalUsers = await User.findAndCountAll({
            attributes: ["id","name","email"],
            limit:offsetNumber != undefined ? 10 : undefined,
            offset:offsetNumber != undefined ? offsetNumber * 10 : 0
        })//cerrar como agregar la columna
        return totalUsers
    },
    userId: async function(id){
        let user = await User.findOne({
            where:{id},
            attributes:["id","name","surname","email","birthDate","profileImage"]
        })
        return user
    },
    allProducts: async function(offsetNumber) {
        let totalProducts= await Product.findAndCountAll({
            include:[
                {model: Category, as: "category",attributes: ["name"]},
                {model: SubCategory, as: "subcategories",attributes: ["name"],through: {
                attributes: []}}
            ],
            attributes: ["id","name","description"],
            limit:offsetNumber != undefined ? 10 : undefined,
            offset:offsetNumber != undefined ? offsetNumber * 10 : 0
        })
        return totalProducts
    },
    countByCategory:async function () {
        let countByCategory=await Product.findAll({
            group:"categoryId",
            attributes: ["categoryId",[sequelize.fn("COUNT",sequelize.col("Product.categoryId")),"countByCategory"]],
            include:[
                {model: Category, as: "category",attributes: ["name"]},
            ],
        })//falta la url
        return countByCategory
    },
    productId: async function(id){
        let product = await Product.findOne({
            where:{id},
            attributes:["id","name","description","price","code"],
            include:[
                {model: Category, as: "category",attributes: ["name"]},
                {model: SubCategory, as: "subcategories",attributes: ["name"],through: {
                attributes: []}},
                {model: Image, as: "image",attributes: ["url"]},
            ],
        })
        return product
    },
 }