module.exports = (Sequelize,DataTypes)=>{
    const Order = Sequelize.define("Order",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          cartId:{
            type:DataTypes.INTEGER,
            references: {
              model:"cart",
              key:"id"
            }
          },
          addressId:{
            type:DataTypes.INTEGER,
            references: {
              model:"addresses",
              key:"id"
            }
          },
          cardId:{
            type:DataTypes.INTEGER,
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