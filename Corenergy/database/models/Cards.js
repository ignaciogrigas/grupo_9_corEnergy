module.exports = (Sequelize,DataType)=>{
    const Card = Sequelize.define("Card",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
        },
        creditcard:{
            type:Sequelize.BIGINT,
            allowNull:false
        },
        expirationMM:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        expirationYY:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        secode:{
            type:Sequelize.INTEGER,
            allowNull:false, 
        }
    },{
            tableName:"cards",
            timestamps:false
        });
    return Card
    }