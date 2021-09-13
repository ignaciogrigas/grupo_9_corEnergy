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
      deletedAt:{
        type:Sequelize.DATE,
        defaultValue:null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('productsCarts')
    
  }
};
