'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
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
      code:{
        type:Sequelize.BIGINT(5),
        unique:true,
        allowNull:false
      },
      categoryId:{
        type:Sequelize.INTEGER,
        references: {
          model:"categories",
          key:"id"
        }
      },
      description:{
        type:Sequelize.TEXT,
        allowNull:false,
      },
      price:{
        type:Sequelize.FLOAT(2),
        allowNull:false
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
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedBy:{
        type:Sequelize.INTEGER,
        references: {
          model:"users",
          key:"id"
        },
        allowNull:false
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
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('products')
    
  }
};
