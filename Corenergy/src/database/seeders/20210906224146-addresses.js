'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('addresses', [
        {"id":1,"city":"Bobojong","address":"50 Nobel Street","floor":1,"zipcode":4567,"telephone":"917-921-7434"},
        {"id":2,"city":"Makrochóri","address":"47687 Cordelia Alley","floor":2,"zipcode":79,"telephone":"836-379-8503"},
      ], {});
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};