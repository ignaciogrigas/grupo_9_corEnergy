module.exports = (Sequelize,DataType)=>{
    const Address = Sequelize.define("Address",{

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
        tableName:"addresses",
        timestamps:false,
     })
}