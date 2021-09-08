const path = require ("path");
const fs = require("fs")
 module.exports= {
    directory: path.resolve(__dirname,"../data/sub_categories.json"),

    all:function(){
        const file= fs.readFileSync(this.directory)
        return JSON.parse(file)
    },

    one:function(id){
        return this.all().find(element => element.id == id)
    }

 }