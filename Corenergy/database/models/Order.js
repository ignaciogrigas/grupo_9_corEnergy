module.exports = (Sequelize,DataType)=>{
    const Order = Sequelize.define("Order",{
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
    Order.associate = function(models){
      Order.belongsTo(models.Address,{
        as:"address",
        foreignKey: "addressId"
      });
      Order.belongsTo(models.Card,{
        as:"card",
        foreignKey: "cardId"
      })
      Order.belongsTo(models.Cart,{
        as:"cart",
        foreignKey: "cartId"
      })
    }
    return Order
}