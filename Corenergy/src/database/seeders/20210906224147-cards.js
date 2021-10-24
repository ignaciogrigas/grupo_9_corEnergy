'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('cards', [{
        "id": 1,
        "creditcard": "3573768018992456",
        "expirationMM": 2,
        "expirationYY": 2028,
        "secode": 8813
      }, {
        "id": 2,
        "creditcard": "5602253944846749639",
        "expirationMM": 6,
        "expirationYY": 2024,
        "secode": 1637
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('cards', null, {});
     
  }
};
