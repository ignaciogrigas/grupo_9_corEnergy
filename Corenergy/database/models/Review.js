module.exports = (Sequelize,DataType)=>{
    const Review = Sequelize.define("Review",{
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
    Review.associate = function(models){
      Review.belongsTo(models.Product,{
        as:"productId",
        foreignKey:"productId"
      })
    }
    return Review
}
