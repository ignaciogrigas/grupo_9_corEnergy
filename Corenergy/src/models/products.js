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

    getProductReviews: function(id) {
        return [
            'review 1',
            'review 2',
            'review 3',
            'review 4',
            'review 5',
        ]
     },

    allWithExtra: function(){
        const productsInDB = this.all()

        return productsInDB.map(product =>{
            const enrichedProduct = Object.assign({}, product)
            if(product.category == 1){

                enrichedProduct.category = category.one(product.category).name
                enrichedProduct.subCat = product.subCategory.map(element => subCategoryWeights.one(element))

                return enrichedProduct
            } else if (product.category == 3){

                enrichedProduct.category = category.one(product.category).name
                enrichedProduct.subCat = product.subCategory.map(element => subCategoryElasticBands.one(element))

                return enrichedProduct
            } else if (product.category == 4) {
                enrichedProduct.category = category.one(product.category).name
                enrichedProduct.subCat = product.subCategory.map(element => subCategoryMats.one(element))
                return enrichedProduct
            } else {
                enrichedProduct.category = category.one(product.category).name

                return enrichedProduct
            }
        })
    },

    oneWithExtra:function(id){
        const allProductsWithExtra = this.allWithExtra()

        const productWithExtra = allProductsWithExtra.find(element => element.id == id)

        return productWithExtra
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

    titleArrange: function(category){
        if(category != "elastic-bands"){
            return category.charAt(0).toUpperCase() + category.slice(1) 
        } else {
            return category.charAt(0).toUpperCase()+ category.slice(1,7) + " " + category.charAt(8).toUpperCase()+ category.slice(9,13)
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
    },

    directoryReviews: path.resolve(__dirname,"../data/reviews.json"),

    allReviews:function(){
        const file= fs.readFileSync(this.directoryReviews,"utf-8")
        return JSON.parse(file)
    },

    newReview:function(data){
        let allReviews = this.allReviews();
        let newReview = {
            id: allReviews.length > 0 ? allReviews[allReviews.length-1].id + 1 : 1 ,
            idProduct:parseInt(data.idProduct),
            titleReview : data.newReviewTitle,
            comments: data.comments,
            stars:[]
        };
        allReviews.push(newReview);
        fs.writeFileSync(this.directoryReviews,JSON.stringify(allReviews,null,2));
        return true;
    }
 }