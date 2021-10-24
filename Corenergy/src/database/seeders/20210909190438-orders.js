'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [

{"id":1,"cartId":1,"addressId":1,"cardId":1}
]);
  },
   

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('orders', null, {});
     
  }
};
