const db = require ("../database/models")
const {Product } = db

module.exports= {
    all:function(){
        // const file= fs.readFileSync(this.directory,"utf-8")
        // return JSON.parse(file)
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
    },

    byCategory: function(catName){
        return  this.allWithExtra(catName)
    },

    one: async function(id){
        return await Product.findOne({
            where: {id},
            include: [
                {model: db.Image, as: "image"}
            ]
        });
    },
}