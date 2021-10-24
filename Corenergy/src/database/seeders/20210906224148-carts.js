'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('carts', [
       
      {"id":1,"totalPrice":"339.41","deletedAt":null}
     ]);      
    
  },

  down: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkDelete('carts', null, {});
    
  }
};
