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
        unique:true,
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
      },
      deletedAt:{
        type:Sequelize.DATE,
        defaultValue:null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('usersCarts')
    
  }
};
