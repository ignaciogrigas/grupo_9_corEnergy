module.exports = (Sequelize,DataTypes)=>{
    const CategoryUser =  Sequelize.define("CategoryUser",{
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
        }
         },{
            tableName:"categoriesUser",
            timestamps:false
        });
        CategoryUser.associate = function(models){
          CategoryUser.hasMany(models.User,{
            as:"user",
            foreignKey:"categoryUserId"
          })
        }
        return CategoryUser
    }