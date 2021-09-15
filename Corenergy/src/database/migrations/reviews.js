'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      titleReview:{
        type:Sequelize.STRING,
        allowNull:false
      },
      comments:{
        type:Sequelize.STRING,
        allowNull:false
      },
      stars:{
        type:Sequelize.INTEGER
      },
      productId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
            model:"products",
            key:"id"
          },
      }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};
