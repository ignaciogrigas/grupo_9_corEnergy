'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categoriesUser', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      }
       });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('categoriesUser');
  }
};
