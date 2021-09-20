'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usersCarts', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model:"users",
            key:"id"
          }
      },
      cartId:{
        type:Sequelize.INTEGER,
        references: {
          model:"carts",
          key:"id"
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('usersCarts')
    
  }
};
