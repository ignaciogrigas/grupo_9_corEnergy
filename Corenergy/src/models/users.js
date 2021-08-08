const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
module.exports = {
    directory: path.resolve(__dirname,"../data/users.json"),

    write: function(data){
        return fs.writeFileSync(this.directory,JSON.stringify(data,null,2))
      },

    all:function(){
        const file= fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },

    one:function(id){
        return this.all().find(element => element == id)
    },

    create: function(data,file){
        let users = this.all();
        let lastUser = users[users.length -1]
        let newUser = {
          id: users.length > 0 ? lastUser.id +1 : 1,
          name: data.name,
          surname: data.surname,
          birthDate : String(data.birthDate),
          email: String(data.email),
          category: String(data.email).includes("@corenergy") ? "admin": "user",
          password: bcrypt.hashSync(data.password,10),
          profileImage: file.profileImage
        };
        users.push(newUser);
        this.write(users)
    },

    findByEmail: function (email){
    return this.all().find(user => user.email == email)
    },
}