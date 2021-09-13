module.exports = (Sequelize,DataTypes)=>{
    const SubCategory = Sequelize.define("SubCategory",{
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
            tableName:"subCategories",
            timestamps:false
        });
        SubCategory.associate= function(models){
          SubCategory.belongsToMany(models.Product,{
            as:"product",
            through:"productsSubCategories",
            foreignKey:"subCategoryId"
          })
        }
        return SubCategory
    }