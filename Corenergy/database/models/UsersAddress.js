module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("UsersAddress",{

      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      city: {
        type: dataTypes.STRING
    },
      address: {
          type: dataTypes.STRING
      },
      floor: {
        type: dataTypes.INTEGER
    },
      zipCode: {
          type: dataTypes.INTEGER
      },
      telephone: {
        type: dataTypes.INTEGER,
    },
        tableName:"UsersAddresses",
        timestamps:false,
     })
}