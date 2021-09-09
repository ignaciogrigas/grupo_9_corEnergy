'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('productsSubCategories', [
        {"id":1,"productId":"023","subCategoryId":"11"},
        {"id":2,"productId":"1441","subCategoryId":"1"},
        {"id":3,"productId":"497","subCategoryId":"2"},
        {"id":4,"productId":"701","subCategoryId":"3"},
        {"id":5,"productId":"9","subCategoryId":"6"},
        {"id":6,"productId":"64387","subCategoryId":"9"},
        {"id":7,"productId":"0078","subCategoryId":"4"},
        {"id":8,"productId":"4","subCategoryId":"3"},
        {"id":9,"productId":"06","subCategoryId":"2"},
        {"id":10,"productId":"82","subCategoryId":"7"},
        {"id":11,"productId":"1765","subCategoryId":"5"},
        {"id":12,"productId":"613","subCategoryId":"2"},
        {"id":13,"productId":"906","subCategoryId":"6"},
        {"id":14,"productId":"6483","subCategoryId":"2"},
        {"id":15,"productId":"26064","subCategoryId":"9"},
        {"id":16,"productId":"39006","subCategoryId":"3"},
        {"id":17,"productId":"920","subCategoryId":"8"},
        {"id":18,"productId":"55","subCategoryId":"9"},
        {"id":19,"productId":"642","subCategoryId":"3"},
        {"id":20,"productId":"0","subCategoryId":"1"},
        {"id":21,"productId":"430","subCategoryId":"3"},
        {"id":22,"productId":"97","subCategoryId":"7"},
        {"id":23,"productId":"0","subCategoryId":"5"},
        {"id":24,"productId":"43785","subCategoryId":"9"},
        {"id":25,"productId":"182","subCategoryId":"1"},
        {"id":26,"productId":"378","subCategoryId":"9"},
        {"id":27,"productId":"74","subCategoryId":"5"},
        {"id":28,"productId":"577","subCategoryId":"6"},
        {"id":29,"productId":"774","subCategoryId":"6"},
        {"id":30,"productId":"0","subCategoryId":"9"},
        {"id":31,"productId":"9544","subCategoryId":"2"},
        {"id":32,"productId":"55","subCategoryId":"6"},
        {"id":33,"productId":"5","subCategoryId":"4"},
        {"id":34,"productId":"6559","subCategoryId":"5"},
        {"id":35,"productId":"916","subCategoryId":"10"},
        {"id":36,"productId":"53737","subCategoryId":"11"},
        {"id":37,"productId":"1610","subCategoryId":"4"},
        {"id":38,"productId":"16026","subCategoryId":"5"},
        {"id":39,"productId":"6","subCategoryId":"2"},
        {"id":40,"productId":"91291","subCategoryId":"5"},
        {"id":41,"productId":"0222","subCategoryId":"6"},
        {"id":42,"productId":"277","subCategoryId":"6"},
        {"id":43,"productId":"18611","subCategoryId":"9"},
        {"id":44,"productId":"33","subCategoryId":"5"},
        {"id":45,"productId":"4","subCategoryId":"11"},
        {"id":46,"productId":"61","subCategoryId":"6"},
        {"id":47,"productId":"6621","subCategoryId":"8"},
        {"id":48,"productId":"5069","subCategoryId":"7"},
        {"id":49,"productId":"30635","subCategoryId":"2"},
        {"id":50,"productId":"836","subCategoryId":"1"}], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productsSubCategories', null, {});
  }
};