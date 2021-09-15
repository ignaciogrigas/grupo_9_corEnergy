'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('addresses', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false
    },
    city:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    address:{
      type:Sequelize.STRING,
      allowNull:false,
    }, 
    floor:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
    zipcode:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
    telephone:{
        type: Sequelize.DECIMAL,
        allowNull:false,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};