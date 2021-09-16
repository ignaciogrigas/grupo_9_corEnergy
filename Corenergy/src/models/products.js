const db = require ("../database/models");
const {Product,Review } = db

module.exports= {
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
        try{
            /*let cat = await db.Category.findOne({
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
            })*/
            return listOfProducts//nos tira promise rejected del cat 1 y 2 de las otras no!
        } catch(error){
            console.log(error)
        }
        
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
    new:async function(data,files,user){
        let newProductData={
            name:data.productName,
            code:data.productCode,
            categoryId:parseInt(data.category),
            description:data.description,
            price:data.price,
            createdAt: Date.now(),
            createdBy: user.id,
            updatedAt: null,
            updatedBy:null,
            deletedAt:null,
            deletedBy:null
        }
        let newProduct = await Product.Create(newProductData)
        //newProduct.setSubcategories({}) asi va para pivotes!!
        return newProduct
    }
    /*new:function(data,files){
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
    },*/
}