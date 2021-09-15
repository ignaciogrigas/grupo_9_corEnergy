'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('images', [
      {"id":1,"name":"In.tiff","url":"http://dummyimage.com/215x100.png/5fa2dd/ffffff","productId":1,"createdAt":"2021-04-18","createdBy":1,"deletedAt":"2021/01/05","deletedBy":1},
      {"id":2,"name":"IpsumAcTellus.tiff","url":"http://dummyimage.com/145x100.png/ff4444/ffffff","productId":1,"createdAt":"2020-11-06","createdBy":2,"deletedAt":"2021/08/03","deletedBy":2},
      {"id":3,"name":"VariusUtBlandit.ppt","url":"http://dummyimage.com/225x100.png/ff4444/fffff","productId":1,"createdAt":"2021-06-01","createdBy":3,"deletedAt":"2021/05/09","deletedBy":3},
      {"id":4,"name":"Pellentesque.mov","url":"http://dummyimage.com/127x100.png/cc0000/ffffff","productId":2,"createdAt":"2020-11-23","createdBy":4,"deletedAt":"2021/01/18","deletedBy":4},
      {"id":5,"name":"Potenti.avi","url":"http://dummyimage.com/204x100.png/ff4444/ffffff","productId":2,"createdAt":"2020-12-07","createdBy":5,"deletedAt":"2021/07/23","deletedBy":5},
      {"id":6,"name":"Sit.xls","url":"http://dummyimage.com/105x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-07-31","createdBy":6,"deletedAt":"2021/02/22","deletedBy":6},
      {"id":7,"name":"NonQuam.png","url":"http://dummyimage.com/101x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-06-01","createdBy":7,"deletedAt":"2021/03/15","deletedBy":7},
      {"id":8,"name":"DuisConsequat.txt","url":"http://dummyimage.com/114x100.png/cc0000/ffffff","productId":3,"createdAt":"2021-09-01","createdBy":8,"deletedAt":"2021/01/29","deletedBy":8},
      {"id":9,"name":"Mattis.tiff","url":"http://dummyimage.com/225x100.png/ff4444/ffffff","productId":3,"createdAt":"2021-08-01","createdBy":9,"deletedAt":"2021/04/01","deletedBy":9},
      {"id":10,"name":"ArcuLiberoRutrum.xls","url":"http://dummyimage.com/102x100.png/5fa2dd/fffff","productId":3,"createdAt":"2021-04-14","createdBy":10,"deletedAt":"2021/02/14","deletedBy":10},
      
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('images', null, {});
     
  }
};
