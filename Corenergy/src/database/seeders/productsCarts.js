'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsCarts', [
        {"id":1,"productId":2,"cartId":1,"productPrice":94,"productQuantity":2,"productSubCategoryId":2},
        {"id":2,"productId":3,"cartId":1,"productPrice":11305,"productQuantity":8,"productSubCategoryId":4},
        {"id":3,"productId":1,"cartId":2,"productPrice":39646,"productQuantity":1,"productSubCategoryId":6},
        {"id":4,"productId":3,"cartId":2,"productPrice":378,"productQuantity":155,"productSubCategoryId":7}
        ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsCarts', null, {});
  }
};