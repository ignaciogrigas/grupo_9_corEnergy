'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('usersAddresses', [{
      "id": 1,
      "userId": 1,
      "addressId": 1
    }]
    , {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('usersAddresses', null, {});
    
  }
};
