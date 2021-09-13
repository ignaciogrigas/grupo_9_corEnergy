module.exports = (Sequelize,DataTypes)=>{
    const ProductCart = Sequelize.define("ProductCart",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          productId:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:"products",
                key:"id"
              }
          },
          cartId:{
            type:DataTypes.INTEGER,
            references: {
              model:"carts",
              key:"id"
            }
          },
          deletedAt:{
            type:DataTypes.DATE,
            defaultValue:null
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