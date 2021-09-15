const db = require ("../database/models");
const {Product,Review } = db

module.exports= {
    /*all:function(){
         const file= fs.readFileSync(this.directory,"utf-8")
         return JSON.parse(file)
    },

    allWithExtra: function(catName){//no esta al pedo si el extra son los includes //el name entiende q es de ctegory el name
        return Product.findAll({
            where: { name: catName },
            include: [
                {model: db.Image, as: "image"},
                {model: db.Category, as: "category"},
                {model: db.SubCategory, as: "subCategory" }
            ]
        });

        // const productsInDB = this.all()
        // return productsInDB.map(product =>{
        //     const enrichedProduct = Object.assign({}, product)
        //     enrichedProduct.category = category.one(product.category).name
        //     if(product.subCategory != undefined && product.subCategory.length > 0){
        //         enrichedProduct.subCategory = product.subCategory.map(element => subCategories.one(element).name)
        //     }
        //     return enrichedProduct
        // })
    

    byCategory: function(catName){
        return  this.allWithExtra(catName)
    },*/

    one: async function(id){
        return await Product.findOne({
            where: {id},
            include: [
                {model: db.Image, as: "image"},
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
                {model: db.Image, as: "image"},
                {model: db.SubCategory, as: "subcategories" },
                {model: db.Category, as: "category"}
            ]
        })
        return listOfProducts
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
}