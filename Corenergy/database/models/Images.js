module.exports = (Sequelize,DataType)=>{
    return Sequelize.define("Images",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          name:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
          },
          url:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
          },
          productId:{
            type:Sequelize.INTEGER,
            references: {
              model:"products",
              key:"id"
            }
          },
          createdAt:{
            type:Sequelize.DATE,
            allowNull:false
          },
          createdBy:{
            type:Sequelize.INTEGER,
            references: {
              model:"users",
              key:"id"
            }
          },      
          deletedAt:{
            type:Sequelize.DATE,
            defaultValue:null
          },
          deletedBy:{
            type:Sequelize.INTEGER,
            references: {
              model:"users",
              key:"id"
            },
            defaultValue:null
          }
    },{        
        timestamps:false, 
        tableName:"images"
    });
}