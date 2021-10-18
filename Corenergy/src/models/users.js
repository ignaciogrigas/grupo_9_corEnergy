const db = require ("../database/models")
const bcrypt = require("bcrypt");
const {User,Card,Address} = db

module.exports={
    one: async function(id){
        let usertoBeFound = await User.findOne({where:{id}})
        return usertoBeFound
    },
    create:async function(data,file){
        const userData={
        name: data.name,
          surname: data.surname,
          birthDate : String(data.birthDate),
          email: String(data.email),
          categoryUserId: String(data.email).includes("@corenergy") ? 1: 2,
          password: bcrypt.hashSync(data.password,10),
          profileImage: file? `/images/uploads/users/${file.filename}` : "/default_and_logos/default_avatar.svg" 
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
        return selectedUser
    },
    newCard:async function(data,user){
        let id= user.id
        let userToChanged = await this.one(id)
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
    newAddress:async function(data,user){
        let id= user.id
        let userToChanged = await this.one(id)
        let addressData = {
            city:data.city,
            address:data.address,
            floor:data.floor,
            zipCode:data.zipcode,
            telephone:data.telephone
        }
        let newAddress = await Address.create(addressData)
        await userToChanged.setAddresses(newAddress)
        return newAddress
    },
    getAddresses :async function(user){
        let id= user.id
        let userInSession = await this.one(id)
        let selectedAddresses = await userInSession.getAddresses(Address)
        return selectedAddresses
    },
    getCards :async function(user){
        let id= user.id
        let userInSession = await this.one(id)
        let selectedCards = await userInSession.getCards(Card)
        return selectedCards
    }

}

