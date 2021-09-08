const path = require ("path");
const fs = require("fs");
const category = require ("./category");
const subCategories = require ("./sub_categories");

 module.exports= {
    directory: path.resolve(__dirname,"../data/products.json"),

    all:function(){
        const file= fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },

    one:function(id){
        return this.all().find(element => element.id == id)
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
            enrichedProduct.category = category.one(product.category).name
            if(product.subCategory != undefined && product.subCategory.length > 0){
                enrichedProduct.subCategory = product.subCategory.map(element => subCategories.one(element).name)
            }
            return enrichedProduct
        })
    },

    oneWithExtra:function(id){
        const allProductsWithExtra = this.allWithExtra()

        const productWithExtra = allProductsWithExtra.find(element => element.id == id)

        return productWithExtra
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

    byCategory: function(cat){
        let all = this.allWithExtra()
        return all.filter(element => element.category.includes(cat))
    },

    titleArrange: function(category){
        if(category != "elastic-bands"){
            return category.charAt(0).toUpperCase() + category.slice(1) 
        } else {
            return category.charAt(0).toUpperCase()+ category.slice(1,7) + " " + category.charAt(8).toUpperCase()+ category.slice(9,13)
        }
    },

    bySubcategories: function(cat){
        return this.byCategory.filter(element => element.subCategory.find(element=> element == cat))
    },//VER

    new:function(data,files){
        let all = this.all();
        let newProduct = {
            id: all.length > 0 ? all[all.length-1].id + 1 : 1 ,
            name:data.productName,
            code:data.productCode,
            category:parseInt(data.category),
            subCategroy:[data.subCategory],
            images:files.map(element => element.filename),
            price:data.price
        };
        all.push(newProduct);
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },

    edit:function(data,files,id){
        let all= this.all();
        let updated = this.one(id)
        let imagesToDelete = updated.images.map(image=>path.resolve(__dirname,"../../public/images/uploads/products",image))
        if(imagesToDelete.length>0){
            imagesToDelete.forEach(image =>fs.existsSync(image) ? fs.unlinkSync(image): null)
        }
        all.map(product => {
            if(product.id == id){
                product.name=data.productName,
                product.code=data.productCode,
                product.description= data.description
                product.category=parseInt(data.category),
                product.subCategroy=[data.subCategory], 
                product.images=files.map(element => element.filename),
                product.price=data.price
                return product
            }
            return product
        })
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },

    delete:function(id){
        let all= this.all();
        let deleted = this.one(id)
        let imagesToDelete = deleted.images.map(image=>path.resolve(__dirname,"../../public/images/uploads/products",image))
        if(imagesToDelete.length>0){
            imagesToDelete.forEach(image =>fs.existsSync(image) ? fs.unlinkSync(image): null)
        }
        all = all.filter(product => product.id != deleted.id );
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
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