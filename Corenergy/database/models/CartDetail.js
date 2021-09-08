module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("CartDetail",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
        },
          orderId:{
            type:DataType.INTEGER,
            references: {
              model:"orders",
              key:"id"
            }
          },
          productID:{
            type:DataType.INTEGER,
            references: {
              model:"products",
              key:"id"
            }
          },
          price:{
            type:DataType.FLOAT(6,2),
            allowNull:false
          }
    },{        
        timestamps:false, 
        tableName:"cartDetail"
    });
}