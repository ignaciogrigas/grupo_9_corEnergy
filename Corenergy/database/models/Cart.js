module.exports = (Sequelize,DataType)=>{
    const Cart = Sequelize.define("Cart",{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
    },
      totalPrice:{
        type:DataType.FLOAT(6,2),
        allowNull:false
      },
      deletedAt:{
        type:DataType.DATE,
        defaultValue:null
      }
    },{        
        timestamps:false, 
        tableName:"cart"
    });
    Cart.associate = function(models){
      Cart.hasOne(models.Order,{
        as:"order",
        foreignKey:"cartId"
      })
      Cart.belongsToMany(models.ProductCart,{
        as:"products",
        through:"productscarts",
        foreignKey:"cartId"
    })
    }
    return Cart
}
