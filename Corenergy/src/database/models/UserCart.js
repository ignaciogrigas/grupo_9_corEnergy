module.exports = (Sequelize,DataTypes)=>{
    const UserCart = Sequelize.define("UserCart",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          userId:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:"users",
                key:"id"
              }
          },
          cartId:{
            type:DataTypes.INTEGER,
            references: {
              model:"carts",
              key:"id"
            }
          }
      },{
        tableName:"usersCarts",
          timestamps:false
      });

      UserCart.associate=function(models){
          UserCart.belongsTo(models.User,{
              as:"user",
              foreignKey:"userId"
          }),
          UserCart.belongsTo(models.Cart,{
            as:"cart",
            foreignKey:"cartId"
        })
      }
      return UserCart
    }