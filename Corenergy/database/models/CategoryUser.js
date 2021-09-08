module.exports = (Sequelize,DataType)=>{
    const CategoryUser =  Sequelize.define("CategoryUser",{
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
        }
         },{
            tableName:"categoriesUser",
            timestamps:false
        });
        return CategoryUser
    }