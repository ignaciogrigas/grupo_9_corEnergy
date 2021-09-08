module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("Reviews",{
        id:{
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      titleReview:{
        type:DataType.STRING,
        allowNull:false
      },
      comments:{
        type:DataType.STRING,
        allowNull:false
      },
      stars:{
        type:DataType.INTEGER
      },
      productId:{
        type:DataType.INTEGER,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
        }
    },
        tableName:"reviews",
        timestamps:false,
    });
}
