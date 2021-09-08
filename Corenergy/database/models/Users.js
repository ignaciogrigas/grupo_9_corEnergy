module.exports = (Sequelize,DataType)=>{
    const User = Sequelize.define("User",{
        id:{
          type:DataType.INTEGER,
          primaryKey:true,
          autoIncrement: true,
          unique:true,
          allowNull:false
        },
        name:{
          type:DataType.STRING,
          allowNull:false
        },
        surname:{
          type:DataType.STRING,
          allowNull:false
        },
        birthDate:{
          type:DataType.DATE
        },
        email:{
          type:DataType.STRING,
          allowNull:false
        },
        password:{
          type:DataType.STRING,
          allowNull:false
        },
        surname:{
          type:DataType.STRING,
          allowNull:false
        },
        categoryUserId:{
          type:DataType.INTEGER,
          references: {
            model:"categoriesUser",
            key:"id"
          },
          allowNull:false
        },
        profileImage:{
          type:DataType.STRING,
          defaultValeu:"/images/default_and_logos/default_avatar.svg"
        }
        },
        {
            tableName:"users",
            timestamps:false
        });
        User.associate = function(models){
          User.hasMany (models.Image,{
            as: "imageCreator",
            foreignKey: "createdBy"
          })
          User.hasMany (models.Image,{
            as: "whoDeletedImage",
            foreignKey: "deletedBy"
          })
          User.hasMany (models.Product,{
            as: "imageCreator",
            foreignKey: "createdBy"
          })
          User.hasMany(models.Product,{
            as: "whoDeletedProduct",
            foreignKey: "deletedBy"
          })
          User.hasMany (models.Product,{
            as: "whoUpdatedProduct",
            foreignKey: "updatedBy"
          })
        }
        return User
    }
