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
          },
          deletedAt:{
            type:DataTypes.DATE,
            defaultValue:null
          },
          tableName:"usersCarts",
          timestamps:false
      });

      UserCart.associate=function(models){
          UserCart.belongsToMany(models.User,{
              as:"user",
              through:"usersCarts",
              foreignKey:"userId",
              timestamps:false
          }),
          UserCart.belongsToMany(models.Cart,{
            as:"cart",
            through:"usersCarts",
            foreignKey:"cartId",
            timestamps:false
        })
      }
      return UserCart
    }