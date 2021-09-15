'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productsSubCategories', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      productId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
          }
      },
      subCategoryId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
            model:"subCategories",
            key:"id"
          }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('productsSubCategories')
    
  }
};
