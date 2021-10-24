'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('usersCards', [{
      "id": 1,
      "userId": 1,
      "cardId": 1
    }]
    , {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('usersCards', null, {});
     
  }
};
