module.exports = (Sequelize,DataTypes)=>{
    const Image =  Sequelize.define("Image",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            unique:true,
            allowNull:false
          },
          name:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
          },
          url:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
          },
          productId:{
            type:DataTypes.INTEGER,
            references: {
              model:"products",
              key:"id"
            }
          },
          createdBy:{
            type:DataTypes.INTEGER,
            references: {
              model:"users",
              key:"id"
            },
          },
          deletedBy:{
            type:DataTypes.INTEGER,
            references: {
              model:"users",
              key:"id"
            },
            defaultValue:null
          }
    },{        
        timestamps:true, 
        tableName:"images",
        updatedAt:false,
        deletedAt:"deletedAt",
        paranoid:true
    });

    Image.associate = function (models){
      Image.belongsTo (models.Product,{
        as: "product",
        foreignKey: "productId"
      })
      Image.belongsTo (models.User,{
        as: "created_by",
        foreignKey: "createdBy"
      })
      Image.belongsTo (models.User,{
        as: "deleted_by",
        foreignKey: "deletedBy"
      })
    }

    return Image
}