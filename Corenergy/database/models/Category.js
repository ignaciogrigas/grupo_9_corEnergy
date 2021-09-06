module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("Category",{
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
            tableName:"categories",
            timestamps:false
        });
    }