'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('usersCards', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false
    },
    userId:{
      type:Sequelize.INTEGER,
      references: {
        model:"users",
        key:"id"
      }
    },
    cardsId:{
      type:Sequelize.INTEGER,
      references: {
        model:"cards",
        key:"id"
      }
    }, 
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usersCards');
  }
};
