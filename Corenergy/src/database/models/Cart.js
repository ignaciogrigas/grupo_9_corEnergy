module.exports = (Sequelize,DataTypes)=>{
    const Cart = Sequelize.define("Cart",{
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
    },
    totalPrice:{
      type:DataTypes.FLOAT(6,2),
      allowNull:false
    },
    },{        
        timestamps:false, 
        tableName:"carts",
        deletedAt:"deletedAt",
        paranoid:true
    });
    Cart.associate = function(models){
      Cart.hasOne(models.Order,{
        as:"order",
        foreignKey:"cartId"
      })
      Cart.hasMany(models.ProductCart,{
        as:"products",
        foreignKey:"cartId"
    })
    Cart.hasMany(models.UserCart,{
      as:"users",
      foreignKey:"cartId"
  })
    }
    return Cart
}
