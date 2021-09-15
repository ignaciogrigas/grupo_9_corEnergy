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
      deletedAt:{
        type:DataTypes.DATE,
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
        foreignKey:"cartId",
        timestamps:false
    })
    Cart.belongsToMany(models.UserCart,{
      as:"users",
      through:"userscarts",
      foreignKey:"cartId",
      timestamps:false
  })
    }
    return Cart
}
