module.exports = (Sequelize,DataType)=>{
    const Product = Sequelize.define("Product",{
        id:{
          type:DataType.INTEGER,
          primaryKey:true,
          autoIncrement: true,
          unique:true,
          allowNull:false
        },
        name:{
          type:DataType.STRING,
          unique:true,
          allowNull:false
        },
        code:{
          type:DataType.BIGINT(5),
          unique:true,
          allowNull:false
        },
        categoryId:{
          type:DataType.INTEGER,
          references: {
            model:"categories",
            key:"id"
          }
        },
        description:{
          type:DataType.TEXT,
          allowNull:false,
        },
        price:{
          type:DataType.FLOAT(2),
          allowNull:false
        },
        createdAt:{
          type:DataType.DATE,
          allowNull:false
        },
        createdBy:{
          type:DataType.INTEGER,
          references: {
            model:"users",
            key:"id"
          }
        },
        updatedAt:{
          type:DataType.DATE,
          allowNull:false
        },
        updatedBy:{
          type:DataType.INTEGER,
          references: {
            model:"users",
            key:"id"
          },
          allowNull:false
        },
        deletedAt:{
          type:DataType.DATE,
          defaultValue:null
        },
        deletedBy:{
          type:DataType.INTEGER,
          references: {
            model:"users",
            key:"id"
          },
          defaultValue:null
        }
      },{
          tableName:"products",
          timestamps:false
      });
      Product.associate = function (models){
        Product.hasMany (models.Image,{
          as: "image",
          foreignKey: "productId"
        })
        Product.belongsTo (models.User,{
          as: "createdBy",
          foreignKey: "createdBy"
        })
        Product.belongsTo (models.User,{
          as: "deletedBy",
          foreignKey: "deletedBy"
        })
        Product.belongsTo (models.User,{
          as: "updatedBy",
          foreignKey: "updatedBy"
        })
        Product.hasMany(models.Review,{
          as:"review",
          foreignKey:"productId"
        })
      }
      return Product
    }