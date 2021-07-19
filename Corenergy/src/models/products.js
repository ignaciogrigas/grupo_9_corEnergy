const path = require ("path");
const fs = require("fs");
const category = require ("./category.js");
const subCategoryMats = require ("./sub_category_mats.js");
const subCategoryElasticBands = require ("./sub_category_elastic_bands.js");
const subCategoryWeights = require ("./sub_category_weights.js");

 module.exports= {
    directory: path.resolve(__dirname,"../data/products.json"),

    all:function(){
        const file= fs.readFileSync(this.directory)
        return JSON.parse(file)
    },

    one:function(id){
        return this.all().find(element => element == id)
    },

    allWithExtra: function(){
        return this.all().map(element =>{
            if(element.category == 1){
                element.subCat =element.subCategory.map(element => subCategoryWeights.one(element))
            } else if (element.category == 3){
                element.subCat =element.subCategory.map(element => subCategoryElasticBands.one(element))
            } else if (element.category == 4) {
                element.subCat =element.subCategory.map(element => subCategoryMats.one(element))
            }
            element.category=category.one(element.category).name
        })
    },

    allSubcategories:function(cat){
        if(cat == "weights"){
            return subCategoryWeights.all()
        } else if(cat == "elastic-bands"){
            return subCategoryElasticBands.all()
        } else if(cat == "mats"){
            return subCategoryMats.all()
        } 
    },

    byCategory: function(cat){
        return this.allWithExtra().filter(element => element.category == cat)
    },
    bySubcategories: function(cat){
        return this.byCategory.filter(element => element.subCategory.find(element=> element == cat))
    },

    create:function(data,files){
        let all = this.all();
        all.push({
            id:all.lenght> 0 ? all[all.lenght-1].id + 1 : 1 ,
            name:data.productName,
            code:data.productCode,
            category:data.category,
            subCategroy:[data.subCategory], //revisar//
            description:data.description,
            images:files.forEach(element => {
                element.url
            }),
            price:data.price
        })
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2))
    }
 }