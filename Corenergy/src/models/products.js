const path = require ("path");
const fs = require("fs");
const category = require ("./category.js");
const subCategoryMats = require ("./sub_category_mats.js");
const subCategoryElasticBands = require ("./sub_category_elastic_bands.js");
const subCategoryWeights = require ("./sub_category_weights.js");

 module.exports= {
    directory: path.resolve(__dirname,"../data/products.json"),

    all:function(){
        const file= fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },

    one:function(id){
        return this.all().find(element => element == id)
    },

    allWithExtra: function(){
        return this.all().map(element =>{
            if(element.category == 1){
                element.category=category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryWeights.one(element))
            } else if (element.category == 3){
                element.category=category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryElasticBands.one(element))
            } else if (element.category == 4) {
                element.category=category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryMats.one(element))
            }
            element.category=category.one(element.category).name
        })
    },

    oneWithExtra:function(id){
        return this.allWithExtra().find(element => element == id)
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

    title: function(category){
        if(category != "elastic-bands"){
            return UpperCase(category.charAt(0)) + category.slice(1) 
        } else {
            return UpperCase(category.charAt(0))+ category.slice(1,6) + " " + UpperCase(category.charAt(8))+ category.slice(8,12)
        }
    },//va aca o en el html?

    bySubcategories: function(cat){
        return this.byCategory.filter(element => element.subCategory.find(element=> element == cat))
    },

    new:function(data,files){
        let all = this.all();
        let newProduct = {
            id:all.lenght> 0 ? all[all.lenght-1].id + 1 : 1 ,
            name:data.productName,
            code:data.productCode,
            category:parseInt(data.category),//xq parseINT?
            subCategroy:[data.subCategory], //revisar//
            images:files.forEach(element => {
                element.url
            }),
            price:data.price
        };
        all.push(newProduct);
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },

    edit:function(data,files,id){
        let all= this.all();
        let updated = this.one(id)
        let imagesToDelete = path.resolve(__dirname,"../../public/uploads/products",updated.images)
        let exists= fs.existsSync(imagesToDelete) ? updated.images.forEach(image =>fs.unlinkSync(image)): "";
        all.map(product => {
            if(product.id == id){
                product.name=data.productName,
                product.code=data.productCode,
                product.category=parseInt(data.category),//xq parseINT?
                product.subCategroy=[data.subCategory], //revisar//
                product.images=files.forEach(element => {
                    element.url
                }),
                product.price=data.price
            }
        })
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },

    delete:function(id){
        let all= this.all();
        let deleted = this.one(id)
        let imagesToDelete = path.resolve(__dirname,"../../public/uploads/products",deleted.images)
        let exists= fs.existsSync(imagesToDelete) ? updated.images.forEach(image =>fs.unlinkSync(image)): "";
        all = all.filter(product => product.id != deleted.id );
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return true
    }
 }