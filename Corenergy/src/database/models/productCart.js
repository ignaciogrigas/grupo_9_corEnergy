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
          productPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
          },
          productQuantity:{
            type:DataTypes.INTEGER,
            allowNull:false
          },
          productSubCategoryId:{
            type:DataTypes.INTEGER,
            references: {
              model:"subCategories",
              key:"id"
            }}
        },{
        tableName:"productsCarts",
          timestamps:false
      });

      ProductCart.associate=function(models){
          ProductCart.belongsTo(models.Product,{
              as:"product",
              foreignKey:"productId",
          }),
          ProductCart.belongsTo(models.Cart,{
            as:"cart",
            foreignKey:"cartId"
        }),
        ProductCart.belongsTo(models.SubCategory,{
          as:"subCategory",
          foreignKey:"productSubCategoryId"
      })
      }
      return ProductCart
    }