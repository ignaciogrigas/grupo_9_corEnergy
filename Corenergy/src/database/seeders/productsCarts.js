'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsCarts', [
      {"id":1,"productId":23,"cartId":12},
      {"id":2,"productId":12,"cartId":34},
      {"id":3,"productId":32,"cartId":8},
      {"id":4,"productId":34,"cartId":39},
      {"id":5,"productId":34,"cartId":16},
      {"id":6,"productId":13,"cartId":41},
      {"id":7,"productId":10,"cartId":5},
      {"id":8,"productId":23,"cartId":25},
      {"id":9,"productId":4,"cartId":14},
      {"id":10,"productId":1,"cartId":49}], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsCarts', null, {});
  }
};