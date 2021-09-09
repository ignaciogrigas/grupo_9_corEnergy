'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [

{"id":1,"cartId":1,"addressId":1,"cardId":1},
{"id":2,"cartId":2,"addressId":2,"cardId":2},
{"id":3,"cartId":3,"addressId":3,"cardId":3},
{"id":4,"cartId":4,"addressId":4,"cardId":4},
{"id":5,"cartId":5,"addressId":5,"cardId":5},
{"id":6,"cartId":6,"addressId":6,"cardId":6},
{"id":7,"cartId":7,"addressId":7,"cardId":7},
{"id":8,"cartId":8,"addressId":8,"cardId":8},
{"id":9,"cartId":9,"addressId":9,"cardId":9},
{"id":10,"cartId":10,"addressId":10,"cardId":10},
{"id":11,"cartId":11,"addressId":11,"cardId":11},
{"id":12,"cartId":12,"addressId":12,"cardId":12},
{"id":13,"cartId":13,"addressId":13,"cardId":13},
{"id":14,"cartId":14,"addressId":14,"cardId":14},
{"id":15,"cartId":15,"addressId":15,"cardId":15},
{"id":16,"cartId":16,"addressId":16,"cardId":16},
{"id":17,"cartId":17,"addressId":17,"cardId":17},
{"id":18,"cartId":18,"addressId":18,"cardId":18},
{"id":19,"cartId":19,"addressId":19,"cardId":19},
{"id":20,"cartId":20,"addressId":20,"cardId":20},
{"id":21,"cartId":21,"addressId":21,"cardId":21},
{"id":22,"cartId":22,"addressId":22,"cardId":22},
{"id":23,"cartId":23,"addressId":23,"cardId":23},
{"id":24,"cartId":24,"addressId":24,"cardId":24},
{"id":25,"cartId":25,"addressId":25,"cardId":25},
{"id":26,"cartId":26,"addressId":26,"cardId":26},
{"id":27,"cartId":27,"addressId":27,"cardId":27},
{"id":28,"cartId":28,"addressId":28,"cardId":28},
{"id":29,"cartId":29,"addressId":29,"cardId":29},
{"id":30,"cartId":30,"addressId":30,"cardId":30},
{"id":31,"cartId":31,"addressId":31,"cardId":31},
{"id":32,"cartId":32,"addressId":32,"cardId":32},
{"id":33,"cartId":33,"addressId":33,"cardId":33},
{"id":34,"cartId":34,"addressId":34,"cardId":34},
{"id":35,"cartId":35,"addressId":35,"cardId":35},
{"id":36,"cartId":36,"addressId":36,"cardId":36},
{"id":37,"cartId":37,"addressId":37,"cardId":37},
{"id":38,"cartId":38,"addressId":38,"cardId":38},
{"id":39,"cartId":39,"addressId":39,"cardId":39},
{"id":40,"cartId":40,"addressId":40,"cardId":40},
{"id":41,"cartId":41,"addressId":41,"cardId":41},
{"id":42,"cartId":42,"addressId":42,"cardId":42},
{"id":43,"cartId":43,"addressId":43,"cardId":43},
{"id":44,"cartId":44,"addressId":44,"cardId":44},
{"id":45,"cartId":45,"addressId":45,"cardId":45},
{"id":46,"cartId":46,"addressId":46,"cardId":46},
{"id":47,"cartId":47,"addressId":47,"cardId":47},
{"id":48,"cartId":48,"addressId":48,"cardId":48},
{"id":49,"cartId":49,"addressId":49,"cardId":49},
{"id":50,"cartId":50,"addressId":50,"cardId":50}
]);
  },
   

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('orders', null, {});
     
  }
};
