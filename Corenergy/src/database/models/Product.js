module.exports = (Sequelize,DataTypes)=>{
    const Product = Sequelize.define("Product",{
        id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement: true,
          unique:true,
          allowNull:false
        },
        name:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false
        },
        code:{
          type:DataTypes.BIGINT(5),
          unique:true,
          allowNull:false
        },
        categoryId:{
          type:DataTypes.INTEGER,
          references: {
            model:"categories",
            key:"id"
          }
        },
        description:{
          type:DataTypes.TEXT,
          allowNull:false,
        },
        price:{
          type:DataTypes.FLOAT(2),
          allowNull:false
        },
        createdAt:{
          type:DataTypes.DATE,
          allowNull:false
        },
        createdBy:{
          type:DataTypes.INTEGER,
          references: {
            model:"users",
            key:"id"
          }
        },
        updatedAt:{
          type:DataTypes.DATE,
          allowNull:false
        },
        updatedBy:{
          type:DataTypes.INTEGER,
          references: {
            model:"users",
            key:"id"
          },
          allowNull:false
        },
        deletedAt:{
          type:DataTypes.DATE,
          defaultValue:null
        },
        deletedBy:{
          type:DataTypes.INTEGER,
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
        Product.belongsTo(models.Category,{
          as:"category",
          foreignKey:"categoryId"
        })
        Product.belongsTo (models.User,{
          as: "created_by",
          foreignKey: "createdBy"
        })
        Product.belongsTo (models.User,{
          as: "deleted_by",
          foreignKey: "deletedBy"
        })
        Product.belongsTo (models.User,{
          as: "updated_by",
          foreignKey: "updatedBy"
        })
        Product.hasMany(models.Review,{
          as:"review",
          foreignKey:"productId"
        })
        Product.belongsToMany(models.ProductCart,{
          as:"cart",
          through:"productscarts",
          foreignKey:"productId",
          timestamps:false
      })
      Product.belongsToMany(models.SubCategory,{
        as:"subcategories",
        through:"productsSubCategories",
        foreignKey:"productId",
        timestamps:false
      })
      }
      return Product
    }