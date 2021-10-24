'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',[{
      "id": 1,
      "name": "Mix - Cocktail Ice Cream",
      "code": 22546,
      "categoryId": 3,
      "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "price": 28,
      "createdAt": "2021-09-26 15:14:00",
      "createdBy": 1,
      "updatedAt": "2021-09-26 15:14:00",
      "updatedBy": 2,
      "deletedAt": null,
      "deletedBy": null
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('products', null, {});
     
  }
};
