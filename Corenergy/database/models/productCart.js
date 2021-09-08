module.exports = (Sequelize,DataType)=>{
    const ProductCart = Sequelize.define("ProductCart",{
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          productId:{
            type: dataTypes.INTEGER,
            unique:true,
            allowNull:false,
            references: {
                model:"products",
                key:"id"
              }
          },
          cartId:{
            type:dataTypes.INTEGER,
            references: {
              model:"carts",
              key:"id"
            }
          },
          tableName:"productsCarts",
          timestamps:false
      });

      ProductCart.associate=function(models){
          ProductCart.belongsToMany(models.Product,{
              as:"product",
              through:"productscarts",
              foreignKey:"productId"
          }),
          ProductCart.belongsToMany(models.Cart,{
            as:"cart",
            through:"productscarts",
            foreignKey:"cartId"
        })
      }
      return ProductCart
    }