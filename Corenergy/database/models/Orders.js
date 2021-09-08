module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("Orders",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          cartId:{
            type:Sequelize.INTEGER,
            references: {
              model:"cart",
              key:"id"
            }
          },
          addressId:{
            type:Sequelize.INTEGER,
            references: {
              model:"addresses",
              key:"id"
            }
          },
          cardId:{
            type:Sequelize.INTEGER,
            references: {
              model:"cards",
              key:"id"
            }
          }
    },{        
        timestamps:false, 
        tableName:"orders"
    });
}