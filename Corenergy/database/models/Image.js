module.exports = (Sequelize,DataType)=>{
    const Image =  Sequelize.define("Image",{
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

    Image.associate = function (models){
      Image.belongsTo (models.Product,{
        as: "product",
        foreignKey: "productId"
      })
      Image.belongsTo (models.User,{
        as: "createdBy",
        foreignKey: "createdBy"
      })
      Image.belongsTo (models.User,{
        as: "deletedBy",
        foreignKey: "deletedBy"
      })
    }

    return Image
}