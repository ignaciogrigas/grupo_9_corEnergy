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
          profileImage: file.filename
        };
        users.push(newUser);
        this.write(users)
    },

    findByEmail: function (email){
    return this.all().find(user => user.email == email)
    },

    newCard:function(data){
        let all= this.all();
        let id = data.idUser;
        all.map(user => {
            if(user.id == id && user.creditCard == undefined){
                user.creditCard=[
                    {
                        number:data.creditcard,
                        expirationMonth:data.expireMM,
                        expirationYear:data.expireYY,
                        securityCode:data.secode
                    }
                ]
                return user
            } else if (user.id == id && user.creditCard != undefined){
                user.creditCard.push({
                    number:data.creditcard,
                    expirationMonth:data.expireMM,
                    expirationYear:data.expireYY,
                    securityCode:data.secode
                })
                return user
            }
            return user
        })
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },

    newAddress:function(data){
        let all= this.all();
        let id = data.idUser;
        all.map(user => {
            if(user.id == id && user.creditCard == undefined){
                user.addresses=[
                    {
                        city:data.city,
                        address:data.address,
                        floor:data.floor,
                        zipcode:data.zipcode,
                        telephone:data.telephone
                    }
                ]
                return user
            } else if (user.id == id && user.addresses != undefined){
                user.creditCard.push({
                    city:data.city,
                    address:data.address,
                    floor:data.floor,
                    zipcode:data.zipcode,
                    telephone:data.telephone
                })
                return user
            }
            return user
        })
        fs.writeFileSync(this.directory,JSON.stringify(all,null,2));
        return true;
    },
}