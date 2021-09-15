const db = require ("../database/models")
const bcrypt = require("bcrypt");
const Address = require("../database/models/Address");
const {User,Card} = db

module.exports={
    create:async function(data,file){
        const userData={
        name: data.name,
          surname: data.surname,
          birthDate : String(data.birthDate),
          email: String(data.email),
          categoryUserId: String(data.email).includes("@corenergy") ? 1: 2,
          password: bcrypt.hashSync(data.password,10),
          profileImage: file && file.filename? file.url : "/images/default_and_logos/default_avatar.svg" //no pasa la imagen!
        }
        const user = await User.create(userData)
        return user
    },
    findByEmail: async function (email){
        return await User.findOne({
            where:{
                email:email
            }
        })
    },
    newCard:async function(data){
        let id = data.idUser
        let cardData = {
            creditcard:data.creditcard,
            expirationMM:data.expireMM,
            expirationYY:data.expireYY,
            secode:data.secode
        }
        let newCard = await Card.Create(cardData)
        //la relacion con la pivote?
        return newCard
    },
    newAddres:async function(data){
        let id = data.idUser
        let addressData = {
            city:data.city,
            address:data.address,
            floor:data.floor,
            zipcode:data.zipcode,
            telephone:data.telephone
        }
        let newAddress = await Address.Create(addressData)
        //la relacion con la pivote?
        return newAddress
    },
    
    /*one: async function(id){
        return await User.findOne({
            where: {id}
        });
    }*/

}

