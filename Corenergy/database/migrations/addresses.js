'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('addresses', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false,
      references: {
        model:"usersAddresses",
        key:"addressId"
      }
    },
    city:{
      type:Sequelize.STRING,
      unique:true,
      allowNull:false,
    },
    address:{
      type:Sequelize.STRING,
      unique:true,
      allowNull:false,
    }, 
    floor:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
      },
    zipcode:{
        type: dataTypes.INTEGER,
        unique:true,
        allowNull:false,
      },
    telephone:{
        type: dataTypes.DECIMAL,
        unique:true,
        allowNull:false,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};