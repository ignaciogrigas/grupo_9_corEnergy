'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productsCarts', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      productId:{
        type: Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
          }
      },
      cartId:{
        type:Sequelize.INTEGER,
        references: {
          model:"carts",
          key:"id"
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('productsCarts')
    
  }
};
