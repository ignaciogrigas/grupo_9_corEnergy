const path = require ("path");
const fs = require("fs");
const category = require ("./category");
const subCategoryMats = require ("./sub_category_mats");
const subCategoryElasticBands = require ("./sub_category_elastic_bands");
const subCategoryWeights = require ("./sub_category_weights");

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
                element.category = category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryWeights.one(element))
            } else if (element.category == 3){
                element.category = category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryElasticBands.one(element))
            } else if (element.category == 4) {
                element.category = category.one(element.category).name
                element.subCat =element.subCategory.map(element => subCategoryMats.one(element))
            } else {
                element.category = category.one(element.category).name
            }
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
        let all = this.allWithExtra()
        return all.filter(element => element.category == cat)
    }, //no nos lee category

    title: function(category){
        if(category != "elastic-bands"){
            return category.charAt(0).toUpperCase() + category.slice(1) 
        } else {
            return category.charAt(0).toUpperCase()+ category.slice(1,6) + " " + category.charAt(8).toUpperCase()+ category.slice(8,12)
        }
    },//va aca o en el html?

    bySubcategories: function(cat){
        return this.byCategory.filter(element => element.subCategory.find(element=> element == cat))
    },

    new:function(data,files){
        let all = this.all();
        let newProduct = {
            id: all.length > 0 ? all[all.length-1].id + 1 : 1 ,
            name:data.productName,
            code:data.productCode,
            category:parseInt(data.category),
            subCategroy:[data.subCategory],
            images:files.forEach(element => {
                element.filename
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
                product.category=parseInt(data.category),
                product.subCategroy=[data.subCategory], 
                product.images=files.forEach(element => {
                    element.filename
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