module.exports = (Sequelize,DataTypes)=>{
    const Address = Sequelize.define("Address",{
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull:false
    },
      address: {
          type: DataTypes.STRING,
          allowNull:false
      },
      floor: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
      zipCode: {
          type: DataTypes.INTEGER,
          allowNull:false
      },
      telephone: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
     },{
    tableName:"addresses",
     timestamps:false
    })
     Address.associate = function(models){
      Address.belongsToMany(models.User,{
        as:"users",
        through:"usersAddresses",
        foreignKey:"addressId",
        timestamps:false
      })
      Address.hasMany(models.Order,{
        as:"order",
        foreignKey: "addressId"
      })
     }
     return Address
}