'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('usersCarts', [{
        "id": 1,
        "userId": 1,
        "cartId": 1,
        
      }]
      , {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('usersCarts', null, {});
     
  }
};
