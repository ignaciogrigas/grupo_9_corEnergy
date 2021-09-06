'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
          "id":1,
          "name":"weights"
      },
      {
          "id":2,
          "name":"bars"
      },
      {
          "id":3,
          "name":"elastic-bands"
      },
      {
          "id":4,
          "name":"mats"
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('categories', null, {});
  }
};
