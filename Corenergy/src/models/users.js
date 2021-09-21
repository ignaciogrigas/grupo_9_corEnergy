const db = require ("../database/models")
const bcrypt = require("bcrypt");
const {User,Card,Address} = db

module.exports={
    create:async function(data,file){
        const userData={
        name: data.name,
          surname: data.surname,
          birthDate : String(data.birthDate),
          email: String(data.email),
          categoryUserId: String(data.email).includes("@corenergy") ? 1: 2,
          password: bcrypt.hashSync(data.password,10),
          profileImage: file? `/uploads/users/${file.filename}` : "/default_and_logos/default_avatar.svg" 
        }
        const user = await User.create(userData)
        return user
    },
    findByEmail: async function (email){
        let selectedUser = await User.findOne({
            where:{
                email:email
            }
        })
        console.log(email)
        return selectedUser
    },
    newCard:async function(data,user){
        let id= user.id
        let userToChanged = await User.findOne({
            where:{id}
        })
        let cardData = {
            creditcard:data.creditcard,
            expirationMM:data.expireMM,
            expirationYY:data.expireYY,
            secode:data.secode
        }
        let newCard = await Card.create(cardData)
        await userToChanged.setCards(newCard)
        return newCard
    },
    newAddress:async function(data){
        //const User = Address.belongstoMany(usersAddresses)
        let id = data.idUser
        let addressData = {
            city:data.city,
            address:data.address,
            floor:data.floor,
            zipcode:data.zipcode,
            telephone:data.telephone
        }
        let newAddress = await Address.create(addressData)
            await result.setNewAddress(newAddresss)
        return newAddress,addressPivote
    },
    
    /*one: async function(id){
        return await User.findOne({
            where: {id}
        });
    }*/

}

