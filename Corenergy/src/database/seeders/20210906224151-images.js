'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('images', [
      {"id":1,"name":"In.tiff","url":"http://dummyimage.com/215x100.png/5fa2dd/ffffff","productId":1,"createdAt":"2021-09-26 15:14:00","createdBy":1,"deletedAt":null,"deletedBy":null},
      {"id":2,"name":"IpsumAcTellus.tiff","url":"http://dummyimage.com/145x100.png/ff4444/ffffff","productId":1,"createdAt":"2021-09-26 15:14:00","createdBy":2,"deletedAt":null,"deletedBy":null},
      {"id":3,"name":"VariusUtBlandit.ppt","url":"http://dummyimage.com/225x100.png/ff4444/fffff","productId":1,"createdAt":"2021-09-26 15:14:00","createdBy":3,"deletedAt":null,"deletedBy":null},
      {"id":4,"name":"Pellentesque.mov","url":"http://dummyimage.com/127x100.png/cc0000/ffffff","productId":2,"createdAt":"2021-09-26 15:14:00","createdBy":4,"deletedAt":null,"deletedBy":null},
      {"id":5,"name":"Potenti.avi","url":"http://dummyimage.com/204x100.png/ff4444/ffffff","productId":2,"createdAt":"2021-09-26 15:14:00","createdBy":5,"deletedAt":null,"deletedBy":null},
      {"id":6,"name":"Sit.xls","url":"http://dummyimage.com/105x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-09-26 15:14:00","createdBy":6,"deletedAt":null,"deletedBy":null},
      {"id":7,"name":"NonQuam.png","url":"http://dummyimage.com/101x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-09-26 15:14:00","createdBy":7,"deletedAt":null,"deletedBy":null},
      {"id":8,"name":"DuisConsequat.txt","url":"http://dummyimage.com/114x100.png/cc0000/ffffff","productId":3,"createdAt":"2021-09-26 15:14:00","createdBy":8,"deletedAt":null,"deletedBy":null},
      {"id":9,"name":"Mattis.tiff","url":"http://dummyimage.com/225x100.png/ff4444/ffffff","productId":3,"createdAt":"2021-09-26 15:14:00","createdBy":9,"deletedAt":null,"deletedBy":null},
      {"id":10,"name":"ArcuLiberoRutrum.xls","url":"http://dummyimage.com/102x100.png/5fa2dd/fffff","productId":3,"createdAt":"2021-09-26 15:14:00","createdBy":10,"deletedAt":null,"deletedBy":null},
      
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('images', null, {});
     
  }
};
