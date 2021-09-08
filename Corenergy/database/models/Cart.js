module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("Cart",{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
    },
      userId:{
        type:DataType.INTEGER,
        references: {
          model:"user",
          key:"id"
        }
      },
      totalPrice:{
        type:DataType.FLOAT(6,2),
        allowNull:false
      }
    },{        
        timestamps:false, 
        tableName:"cart"
    });
}