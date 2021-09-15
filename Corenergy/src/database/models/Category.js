module.exports = (Sequelize,DataTypes)=>{
    const Category = Sequelize.define("Category",{
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
            tableName:"categories",
            timestamps:false
        });
        Category.associate = function (models){
          Category.hasMany(models.Product,{
            as:"product",
            foreignKey:"categoryId"
          })
        }
        return Category
    }