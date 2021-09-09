'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsCart', [
      {"id":1,"productId":"659","cartId":"12"},
      {"id":2,"productId":"5","cartId":"118"},
      {"id":3,"productId":"33108","cartId":"8687"},
      {"id":4,"productId":"19353","cartId":"4051"},
      {"id":5,"productId":"1","cartId":"6"},
      {"id":6,"productId":"066","cartId":"417"},
      {"id":7,"productId":"66","cartId":"415"},
      {"id":8,"productId":"96","cartId":"407"},
      {"id":9,"productId":"95","cartId":"8"},
      {"id":10,"productId":"0","cartId":"183"},
      {"id":11,"productId":"0956","cartId":"3"},
      {"id":12,"productId":"73906","cartId":"21"},
      {"id":13,"productId":"876","cartId":"3077"},
      {"id":14,"productId":"10738","cartId":"354"},
      {"id":15,"productId":"8","cartId":"747"},
      {"id":16,"productId":"77","cartId":"18768"},
      {"id":17,"productId":"2","cartId":"4179"},
      {"id":18,"productId":"7981","cartId":"90"},
      {"id":19,"productId":"415","cartId":"64262"},
      {"id":20,"productId":"7","cartId":"8626"},
      {"id":21,"productId":"47","cartId":"4742"},
      {"id":22,"productId":"802","cartId":"46395"},
      {"id":23,"productId":"54562","cartId":"9"},
      {"id":24,"productId":"10447","cartId":"265"},
      {"id":25,"productId":"975","cartId":"70"},
      {"id":26,"productId":"3","cartId":"797"},
      {"id":27,"productId":"421","cartId":"3860"},
      {"id":28,"productId":"9","cartId":"864"},
      {"id":29,"productId":"40515","cartId":"6"},
      {"id":30,"productId":"5173","cartId":"2"},
      {"id":31,"productId":"000","cartId":"77090"},
      {"id":32,"productId":"60","cartId":"1946"},
      {"id":33,"productId":"77","cartId":"4"},
      {"id":34,"productId":"26","cartId":"90714"},
      {"id":35,"productId":"297","cartId":"53"},
      {"id":36,"productId":"18952","cartId":"38227"},
      {"id":37,"productId":"3154","cartId":"09104"},
      {"id":38,"productId":"37928","cartId":"4"},
      {"id":39,"productId":"11731","cartId":"3114"},
      {"id":40,"productId":"689","cartId":"1979"},
      {"id":41,"productId":"07","cartId":"4932"},
      {"id":42,"productId":"3","cartId":"79"},
      {"id":43,"productId":"81130","cartId":"1040"},
      {"id":44,"productId":"67","cartId":"9"},
      {"id":45,"productId":"1801","cartId":"5627"},
      {"id":46,"productId":"08","cartId":"26381"},
      {"id":47,"productId":"951","cartId":"229"},
      {"id":48,"productId":"54","cartId":"51"},
      {"id":49,"productId":"8","cartId":"99545"},
      {"id":50,"productId":"657","cartId":"49"}], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsCart', null, {});
  }
};