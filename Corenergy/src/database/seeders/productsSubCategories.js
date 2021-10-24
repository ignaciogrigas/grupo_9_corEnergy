'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsSubCategories', [
        {"id":1,"productId":1,"subCategoryId":11}
        ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsSubCategories', null, {});
  }
};