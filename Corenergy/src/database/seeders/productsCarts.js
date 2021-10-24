'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsCarts', [
        {"id":1,"productId":1,"cartId":1,"productPrice":94,"productQuantity":2,"productSubCategoryId":2}
        ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsCarts', null, {});
  }
};