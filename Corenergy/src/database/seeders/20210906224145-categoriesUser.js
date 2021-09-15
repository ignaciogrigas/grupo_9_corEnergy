'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('categoriesUser', [
        {
            "id":1,
            "name":"admin"
        },
        {
            "id":2,
            "name":"user"
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categoriesUser', null, {});
  }
};
