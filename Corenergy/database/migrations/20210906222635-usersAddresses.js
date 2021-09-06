'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('usersAddresses', {
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
    addressId:{
      type:Sequelize.INTEGER,
      references: {
        model:"addresses",
        key:"id"
      }
    }, 
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usersAddresses');
  }
};
