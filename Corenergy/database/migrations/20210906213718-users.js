'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      surname:{
        type:Sequelize.STRING,
        allowNull:false
      },
      birthDate:{
        type:Sequelize.DATE
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      surname:{
        type:Sequelize.STRING,
        allowNull:false
      },
      categoryUserId:{
        type:Sequelize.INTEGER,
        references: {
          model:"categoriesUser",
          key:"id"
        },
        allowNull:false
      },
      profileImage:{
        type:Sequelize.STRING,
        defaultValeu:"/images/default_and_logos/default_avatar.svg"
      }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
