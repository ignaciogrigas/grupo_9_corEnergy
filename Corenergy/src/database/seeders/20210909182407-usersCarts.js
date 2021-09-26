'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('usersCarts', [{
        "id": 1,
        "userId": 1,
        "cartId": 2,
        
      }, {
        "id": 2,
        "userId": 2,
        "cartId": 1,
        
      }, {
        "id": 3,
        "userId": 6,
        "cartId": 1,
        
      }, {
        "id": 4,
        "userId": 34,
        "cartId": 49,
        
      }, {
        "id": 5,
        "userId": 44,
        "cartId": 43,
        
      }, {
        "id": 6,
        "userId": 21,
        "cartId": 44,
        
      }, {
        "id": 7,
        "userId": 36,
        "cartId": 13,
        
      }, {
        "id": 8,
        "userId": 31,
        "cartId": 32,
        
      }, {
        "id": 9,
        "userId": 39,
        "cartId": 42,
        
      }, {
        "id": 10,
        "userId": 45,
        "cartId": 47,
        
      }, {
        "id": 11,
        "userId": 14,
        "cartId": 28,
        
      }, {
        "id": 12,
        "userId": 4,
        "cartId": 2,
        
      }, {
        "id": 13,
        "userId": 1,
        "cartId": 25,
        
      }, {
        "id": 14,
        "userId": 41,
        "cartId": 23,
        
      }, {
        "id": 15,
        "userId": 7,
        "cartId": 30,
        
      }, {
        "id": 16,
        "userId": 5,
        "cartId": 42,
        
      }, {
        "id": 17,
        "userId": 7,
        "cartId": 22,
        
      }, {
        "id": 18,
        "userId": 5,
        "cartId": 23,
        
      }, {
        "id": 19,
        "userId": 37,
        "cartId": 5,
        
      }, {
        "id": 20,
        "userId": 3,
        "cartId": 37,
        
      }]
      , {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('usersCarts', null, {});
     
  }
};
