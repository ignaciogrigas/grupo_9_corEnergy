const Sequelize = require("sequelize")
const { Op } = Sequelize;
const db = require ("../database/models");
const {Product,Review,Image,UserCart } = db

module.exports= {
    one: async function(id){
        return await Product.findOne({
            where: {id},
            include: [
                {model: Image, as: "image"},
                {model: db.Category, as: "category"},
                {model: db.SubCategory, as: "subcategories" }
            ]
        });
    },
    getProductReviews: async function(id){
        return await Review.findAll({
            where:{
                productId:id
            },
            limit:3
        })
    },
    byCategory: async function(catName){
        let cat = await db.Category.findOne({
                where:{
                    name:catName
                }
            })
            let listOfProducts= await Product.findAll({
                where:{
                    categoryId:cat.id
                },
                include:[
                    {model: Image, as: "image"},
                    {model: db.SubCategory, as: "subcategories" },
                    {model: db.Category, as: "category"}
                ]
            })
            return listOfProducts//nos tira promise rejected del cat 1 y 2 de las otras no!       
    },
    allSubcategories:function(cat){
        if(cat.includes("weights")){
            return ["2KG","5KG","10KG","15KG","20KG"]
        } else if(cat.includes("elastic-bands") ){
            return ["Red","Blue","Green","Yellow","Black"]
        } else if(cat.includes("mats")){
            return ["Red","Blue","Green","Purple","Pink"]
        } 
    },
    titleArrange: function(category){
        if(category != "elastic-bands"){
            return category.charAt(0).toUpperCase() + category.slice(1) 
        } else {
            return category.charAt(0).toUpperCase()+ category.slice(1,7) + " " + category.charAt(8).toUpperCase()+ category.slice(9,13)
        }
    },
    new:async function(data,files){//(data,files,user){
        let newProductData={
            name:data.productName,
            code:data.productCode,
            categoryId:parseInt(data.category),
            description:data.description,
            price:data.price,
            createdAt: Date.now(),
            createdBy: 25,//user.id, poner tmb arriba quien esta en seession fslta
            updatedAt: null,
            updatedBy:null,
            deletedAt:null,
            deletedBy:null
        }
        let newProduct = await Product.create(newProductData)

        //await newProduct.setSubcategories(Array.from(subcategories))

        const images = await Promise.all(
            files.map(async (file) => {
                return await Image.create({
                    name:file.filename,
                    url:file.path,
                    productId:newProduct.id,
                    createdAt: Date.now(),
                    createdBy: 30,//user.id, poner tmb arriba quien esta en seession fslta
                    deletedAt:null,
                    deletedBy:null
                })
            })
        )

        return newProduct,images
    },
    edit: async function(data,files,id){
        let productToBeEdited = await Product.findOne({
            where: {id},
            include: [
                {model: Image, as: "image"},
                {model: db.Category, as: "category"},
                {model: db.SubCategory, as: "subcategories" }
            ]
        });
        let updatedData={
                name:data.productName,
                code:data.productCode,
                categoryId:parseInt(data.category),
                description:data.description,
                price:data.price,
                updatedAt: Date.now(),
                updatedBy:35,//user.id poner tmb arriba quien esta en seession fslta
        }
        let updatedProduct = await Product.update(updatedData,{
            where:{id:id}
        })
        //await result.setSubcategories(Array.from(subcategories))
        if (files){
            const images = await productToBeEdited.getImage();
            const deletedImages = await Promise.all(
                images.map(async (image) => {
                    let imageId = image.id
                    return await Image.update({
                        deletedAt:Date.now(),
                        deletedBy:35,//user.id poner tmb arriba quien esta en seession fslta
                    },{
                        where:{id:imageId}
                    })
                })
            )
            const newImages = await Promise.all(
            files.map(async (file) => {
                return await Image.create({
                    name:file.filename,
                    url:file.path,
                    productId:id,
                    createdAt: Date.now(),
                    createdBy: 30,//user.id, poner tmb arriba quien esta en seession fslta
                    deletedAt:null,
                    deletedBy:null
                })
            })
        )
        return newImages,deletedImages
        }
        return updatedProduct
    },
    delete:async function(id){
        let productToBeEdited = await Product.findOne({
            where: {id}
        });
        let deletedData={
                deletedAt: Date.now(),
                deletedBy:35,//user.id poner tmb arriba quien esta en seession fslta
        }
        let deletedProduct = await Product.update(deletedData,{
            where:{id:id}})
            const images = await productToBeEdited.getImage();
            const deletedImages = await Promise.all(
                images.map(async (image) => {
                    let imageId = image.id
                    return await Image.update({
                        deletedAt:Date.now(),
                        deletedBy:35,//user.id poner tmb arriba quien esta en seession fslta
                    },{
                        where:{id:imageId}
                    })
                })
            )
        return deletedProduct,deletedImages
    },
    newReview:async function(data){
        let ReviewData = {
            titleReview:data.titleReview,
            comments:data.comments,
            stars:5,
            productId:parseInt(data.idProduct)

        }
        let newReview = await Review.create(ReviewData)
        return newReview
    },
    customersWhoAlsoBought: async function(id){
        let carts = await db.ProductCart.findAll({
            where:{
                productId:id
            }
        })
        let products=[]
        let otherProducts = await Promise.all(
                carts.map(async (cart)=>{
                let cartId= cart.cartId
                let productsInCarts = await db.ProductCart.findAll({
                    where:{id:cartId},
                    include:[ {model: Product, as:"product"}]
                })
                productsInCarts.forEach((product)=> products.push(product.product))
                return products
            })
            )
        return products
    },
    buy:async function(user){
        let userSessionId =  user //user.id
        let userActiveCart = await UserCart.findOne({
            where:{
                    userId:userSessionId
            }
            ,include: [
                {model: db.Cart, as: "cart"},
                {model: db.User, as: "user"}
            ]
        })
        return userActiveCart
    }
    }