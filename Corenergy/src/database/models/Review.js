module.exports = (Sequelize,DataTypes)=>{
    const Review = Sequelize.define("Review",{
        id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      titleReview:{
        type:DataTypes.STRING,
        allowNull:false
      },
      comments:{
        type:DataTypes.STRING,
        allowNull:false
      },
      stars:{
        type:DataTypes.INTEGER
      },
      productId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
        }
    }},{
      tableName:"reviews",
      timestamps:false
  });
    Review.associate = function(models){
      Review.belongsTo(models.Product,{
        as:"product_id",
        foreignKey:"productId"
      })
    }
    return Review
}
