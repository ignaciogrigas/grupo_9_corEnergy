'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productsSubCategory', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      productId:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
          }
      },
      subCategoryId:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        references: {
            model:"subCategories",
            key:"id"
          }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('productsSubCategory')
    
  }
};
