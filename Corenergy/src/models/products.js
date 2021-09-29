const Sequelize = require("sequelize")
const { Op } = Sequelize;
const db = require ("../database/models");
const {Product,Review,Image,UserCart,ProductCart,Cart,Category,SubCategory,User,Order } = db

module.exports= {
    one: async function(id){
        try{
            return await Product.findOne({
                where: {id},
                include: [
                    {model: Image, as: "image"},
                    {model: Category, as: "category"},
                    {model: SubCategory, as: "subcategories" }
                ]
            });
        } catch(err){console.log(err);}
    },
    getProductReviews: async function(id){
        try{
            return await Review.findAll({
                where:{
                    productId:id
                },
                limit:3
            })
        }catch(err){console.log(err);}
    },
    byCategory: async function(catName){
        try{
            let cat = await Category.findOne({
            where:{
                name:catName
            }
        })
        let listOfProducts= await Product.findAll({
            where:{
                categoryId:cat.id,
                deletedAt :{[Op.eq]:null}
            },
            include:[
                {model: Image, as: "image"},
                {model: SubCategory, as: "subcategories" },
                {model: Category, as: "category"}
            ]
        })
        return listOfProducts}catch(err){console.log(err);}       
    },
    titleArrange: function(category){
        if(category != "elastic-bands"){
            return category.charAt(0).toUpperCase() + category.slice(1) 
        } else {
            return category.charAt(0).toUpperCase()+ category.slice(1,7) + " " + category.charAt(8).toUpperCase()+ category.slice(9,13)
        }
    },
    new:async function(data,files,user){
        try{let newProductData={
            name:data.productName,
            code:data.productCode,
            categoryId:parseInt(data.category),
            description:data.description,
            price:data.price,
            createdBy:user.id,
            updatedBy:null,
            deletedBy:null
        }
        let newProduct = await Product.create(newProductData)

        await newProduct.setSubcategories(data.choice)

        const images = await Promise.all(
            files.map(async (file) => {
                return await Image.create({
                    name:file.filename,
                    url:file.path,
                    productId:newProduct.id,
                    createdBy: user.id,
                    deletedBy:null
                })
            })
        )

        return newProduct,images}catch(err){console.log(err);}
    },
    edit: async function(data,files,id,user){
        try{
            let productToBeEdited = await this.one(id)
            let updatedData={
                    name:data.productName,
                    code:data.productCode,
                    categoryId:parseInt(data.category),
                    description:data.description,
                    price:data.price,
                    updatedBy:user.id,
            }
            let updatedProduct = await Product.update(updatedData,{
                where:{id:id}
            })
            await updatedProduct.setSubcategories(data.choice)
            if (files){
                const images = await productToBeEdited.getImage();
                const deletedImages = await Promise.all(
                    images.map(async (image) => {
                        let imageId = image.id
                        let deletedBy = await Image.update({
                            deletedBy:user.id,
                        },{
                            where:{id:imageId}
                        })
                        let destroyedImage = await Image.destroy({
                            where:{id:imageId}
                        })
                        return deletedBy,destroyedImage
                    })
                )
                const newImages = await Promise.all(
                files.map(async (file) => {
                    return await Image.create({
                        name:file.filename,
                        url:file.path,
                        productId:id,
                        createdBy: user.id,
                        deletedBy:null
                    })
                })
            )
            return newImages,deletedImages
            }
            return updatedProduct
        }catch(err){console.log(err);}
    },
    delete:async function(id,user){
        try{
        let productToBeDeleted = await this.one(id)
        let whoDeleted = await Product.update({deletedBy:user.id},{
            where:{id}})
        const images = await productToBeDeleted.getImage()
        const deletedImages = await Promise.all(
        images.map(async (image) => {
            let imageId = image.id
            let deletedBy = await Image.update({
                deletedBy:user.id,
            },{
                where:{id:imageId}
            })
            let destroyedImage = await Image.destroy({
                where:{id:imageId}
            })
            return deletedBy,destroyedImage
        }))
        let deletedProduct = await Product.destroy({where:{id}})
        return whoDeleted,deletedImages,deletedProduct
        }catch(err){console.log(err);}
    },
    newReview:async function(data){
        let ReviewData = {
            titleReview:data.titleReview,
            comments:data.comments,
            stars:parseInt(data.star.pop()),
            productId:parseInt(data.idProduct)

        }
        let newReview = await Review.create(ReviewData)
        return newReview
    },
    customersWhoAlsoBought: async function(id){
        let carts = await ProductCart.findAll({
            where:{
                productId:id
            },
            include :[
                {model: Product, as: "product", include:[
                    {model: Image, as: "image"},
                    {model: Category, as: "category"},
                    {model: SubCategory, as: "subcategories" }
                ],where:{
                    deletedAt :{[Op.eq]:null}
                }},
            ]
        })
        let products=[]
        let otherProducts = await Promise.all(
                carts.map(async (cart)=>{
                let cartId= cart.cartId
                let productsInCarts = await ProductCart.findAll({
                    where:{id:cartId},
                    include:[ {model: Product, as:"product",include:[
                        {model: Image, as: "image"}]}]
                })
                productsInCarts.forEach((product)=> products.push(product.product))
                return products
            })
            )
        return products
    },
    userActiveCart:async function (id){
        let userActiveCart = await UserCart.findOne({
            where:{
                    userId:id
            }
            ,include: [
                {model: Cart, as: "cart"},
                {model: User, as: "user"}
            ]
        })
        return userActiveCart
    },
    buy:async function(data,user){
        try{
            let userSessionId = user.id
        let productId = data.idProduct
        let productData = await Product.findOne({where:{id:productId}})
        let userActiveCart = await this.userActiveCart(userSessionId)
        if(!userActiveCart || userActiveCart.cart.deletedAt != null){
            let cartData={
                totalPrice:0,
                deletedAt:null
            }
            let newCart = await Cart.create(cartData);
            let UserCartData = {
                userId:userSessionId,
                cartId:newCart.id
            }
            let userCartInsert = await UserCart.create (UserCartData)
            let productBoughtData ={
                productId:productId,
                cartId:newCart.id,
                productPrice:productData.price,
                productQuantity:1,
                productSubCategoryId:data.choice
            }
            let productInCart = await ProductCart.create(productBoughtData)
            return newCart,productInCart,userCartInsert

        } else {
            let productBoughtData ={
                productId:productId,
                cartId:userActiveCart.cartId,
                productPrice:productData.price,
                productQuantity:1,
                productSubCategoryId:data.choice
            }
            let productInCart = await ProductCart.create(productBoughtData)
            return productInCart
        }
        }catch(err){console.log(err);}
    },
    cart:async function(user){
        let userSessionId = user.id
        let userActiveCart = await this.userActiveCart(userSessionId)
        if(userActiveCart || userActiveCart.cart.deletedAt == null){
            let productsToBePurchased = await db.ProductCart.findAll({
                where: {cartId:userActiveCart.cartId},
                include :[
                    {model: Product, as: "product", include:[
                        {model: Image, as: "image"},
                        {model: Category, as: "category"},
                        {model: SubCategory, as: "subcategories" }
                    ]},
                ]
            })
            return productsToBePurchased
        }
    },
    deleteProductCart: async function (user,id){
        try{
            let userSessionId = user.id
            let userActiveCart = await this.userActiveCart(userSessionId)
            let deletedProduct = await ProductCart.destroy({where:{productId:id,cartId:userActiveCart.cartId}})
            return deletedProduct
        }catch(err){console.log(err);}
    },
    order:async function(data,user){
        try{
            let userSessionId = user.id
        let userActiveCart = await this.userActiveCart(userSessionId)
        let userCartId = userActiveCart.cartId
        let totalPriceData=parseInt(data.totalPrice.slice(1))
        let totalPrice  = await Cart.update({
            totalPrice:totalPriceData 
        },{
            where: {id:userCartId}
        })
        let orderData ={
            cartId:userCartId,
            addressId:data.selectedAddress,
            cartId:data.selectedCard
        }
        let newOrder = await Order.create(orderData)
        let deletedCart = await Cart.destroy({where:{id:userCartId}})
        return totalPrice,newOrder,deletedCart //canitdades de producto?//no podemos crear la orden de un cart borrado
        }catch(err){console.log(err)}
    }
    }