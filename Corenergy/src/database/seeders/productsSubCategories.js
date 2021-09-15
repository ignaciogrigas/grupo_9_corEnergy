'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsSubCategories', [
        {"id":1,"productId":3,"subCategoryId":11},
        {"id":2,"productId":3,"subCategoryId":1},
        {"id":3,"productId":3,"subCategoryId":2},
        {"id":4,"productId":2,"subCategoryId":3},
        {"id":5,"productId":2,"subCategoryId":6},
        {"id":6,"productId":2,"subCategoryId":9},
        {"id":7,"productId":1,"subCategoryId":4},
        {"id":8,"productId":1,"subCategoryId":3},
        {"id":9,"productId":4,"subCategoryId":2},
        {"id":10,"productId":5,"subCategoryId":7},
        ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsSubCategories', null, {});
  }
};