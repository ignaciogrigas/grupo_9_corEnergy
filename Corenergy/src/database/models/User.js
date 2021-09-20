module.exports = (Sequelize,DataTypes)=>{
    const User = Sequelize.define("User",{
        id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement: true,
          unique:true,
          allowNull:false
        },
        name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        surname:{
          type:DataTypes.STRING,
          allowNull:false
        },
        birthDate:{
          type:DataTypes.DATE
        },
        email:{
          type:DataTypes.STRING,
          allowNull:false
        },
        password:{
          type:DataTypes.STRING,
          allowNull:false
        },
        categoryUserId:{
          type:DataTypes.INTEGER,
          references: {
            model:"categoriesUser",
            key:"id"
          },
          allowNull:false
        },
        profileImage:{
          type:DataTypes.STRING,
          defaultValue:"/images/default_and_logos/default_avatar.svg"
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
            as: "productCreator",
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
          User.belongsTo(models.CategoryUser,{
            as:"category",
            foreignKey:"categoryUserId"
          })
          User.belongsToMany(models.Card,{
            as:"cards",
            through:"usersCards",
            foreignKey:"UserId",
            timestamps:false
          })
          User.belongsToMany(models.Address,{
            as:"addresses",
            through:"usersAddresses",
            foreignKey:"UserId",
            timestamps:false
          })
          User.belongsToMany(models.UserCart,{
            as:"carts",
            through:"usersCarts",
            foreignKey:"userId",
            timestamps:false
        })
        }
        return User
    }
