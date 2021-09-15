'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('subCategories', [
        {
            "id":1,
            "name":"2kg"
        },
        {
            "id":2,
            "name":"5kg"
        },
        {
            "id":3,
            "name":"10kg"
        },
        {
            "id":4,
            "name":"20kg"
        },
        {
            "id":5,
            "name":"Red"
        },
        {
            "id":6,
            "name":"Blue"
        },
        {
            "id":7,
            "name":"Green"
        },
        {
            "id":8,
            "name":"Yellow"
        },
        {
            "id":9,
            "name":"Black"
        },
        {
            "id":10,
            "name":"Purple"
        },
        {
            "id":11,
            "name":"Pink"
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subCategories', null, {});
  }
};
