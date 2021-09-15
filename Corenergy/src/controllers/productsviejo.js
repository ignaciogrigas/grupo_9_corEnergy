const express = require("express");
const router = express.Router();
const path = require("path");
const Sequelize = require("sequelize")
const {Op} = Sequelize
const db = require ("../database/models")
const {Product,Review,ProductCart,Cart,UserCart} = db
module.exports = {
    byId:async(req,res) => {
        try{
        const singleProduct = await Product.findByPk(req.params.id,{include:["image","subcategories","review"]});
        console.log(singleProduct)}
        /*const productId =req.params.id
        const usersWhoBought = []
        const carts = await ProductCart.findAll({
            where:{
                productId : productId
            }
        },{include:["cart"]})
        const usersWhoBoughtWithExtra = await carts.forEach(cart => {
            return usersWhoBought.append(cart.cartId.userId)            
        });
        const newCarts = await usersWhoBought.map(user =>{
            UserCart.findAll({
                where:{
                    userId:user
                }
            }).cartId
        })*/
        
        /*res.render("./products/product_detail",{
        style:"/css/product_detail.css",
        title:singleProduct.name,
        singleProduct:singleProduct,
        listOfProducts: [],
        listOfReviews: productsModel.getProductReviews(req.params.id),
        idProduct:req.params.id})
   }*/catch (error){
       console.log(console.error)
       res.render("error_404",{
           title:"Error 404",
           style:"/css/error_404.css"
       })
   }}/*
    
    
    (req,res)=> res.render("./products/product_detail",{
        style:"/css/product_detail.css",
        title:productsModel.oneWithExtra(req.params.id).name,
        singleProduct:productsModel.oneWithExtra(req.params.id),
        listOfProducts: [],
        listOfReviews: productsModel.getProductReviews(req.params.id),
        idProduct:req.params.id
    })
    category:(req,res)=> res.render("./products/all_products",{
        style:"/css/all_products.css",
        title:productsModel.titleArrange(req.params.nameCategory),
        listOfProducts:productsModel.byCategory(req.params.nameCategory),
        listOfSubCategories:productsModel.allSubcategories(req.params.nameCategory)        

    }),

    showCreateTemplate:(req,res)=> {
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
        })
    },
    save:(req,res)=> {
        let newProduct = productsModel.new(req.body,req.files);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("./products/create",{ 
                errors: errors.mapped(),
                title:"Add",
                style:"/css/create.css"
               });
          }else{
            return newProduct , res.redirect("back");
          }
    },
    modify:(req,res)=> {
        //const id = req.params.id;
        //const productId = Number(id)
        const productToBeEdited = productsModel.oneWithExtra(req.params.id)
        if (!productToBeEdited) {
            res.render("error_404")
        }
        return res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            product: productToBeEdited,
        })
    },

    edit:(req,res)=>{
        const productToBeEdited = productsModel.oneWithExtra(req.params.id)
        let result = productsModel.edit(req.body,req.files,req.params.id)
        return result == true ? res.redirect("/") : res.render("./products/create",{
            title:"Add",
            style:"/css/create.css",
            errorMsg:"Try again,errors in your upload",
            product: productToBeEdited,
        }) 
    },

    delete:(req,res)=>{
        let result = productsModel.delete(req.params.id);
        return result == true ? res.redirect("/") : res.render("error_404")
    },

    newReview:(req,res)=> {
        let newReview = productsModel.newReview(req.body);
        return newReview == true ? res.redirect("back") : " "
    },

    cart:(req,res)=> res.render("./products/shopping_cart")*/
}

