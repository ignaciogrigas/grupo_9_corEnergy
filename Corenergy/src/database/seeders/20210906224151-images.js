'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('images', [
      {"id":1,"name":"In.tiff","url":"http://dummyimage.com/215x100.png/5fa2dd/ffffff","productId":1,"createdAt":"2021-09-26 15:14:00","createdBy":1,"deletedAt":null,"deletedBy":null},
      ]);
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('images', null, {});
     
  }
};
