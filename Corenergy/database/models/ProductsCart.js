module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("ProductsCarts",{
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
    }
