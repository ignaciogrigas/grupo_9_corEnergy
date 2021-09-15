module.exports = (Sequelize,DataTypes)=>{
    const Card = Sequelize.define("Card",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
        },
        creditcard:{
            type:DataTypes.BIGINT,
            allowNull:false
        },
        expirationMM:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        expirationYY:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        secode:{
            type:DataTypes.INTEGER,
            allowNull:false, 
        }
    },{
            tableName:"cards",
            timestamps:false
        });
    Card.associate = function(models){
        Card.belongsToMany(models.User,{
            as:"users",
            through:"usersCards",
            foreignKey:"cardId",
            timestamps:false
        })
        Card.hasMany(models.Order,{
            as:"order",
            foreignKey: "cardId"
          })
    }
    return Card
}