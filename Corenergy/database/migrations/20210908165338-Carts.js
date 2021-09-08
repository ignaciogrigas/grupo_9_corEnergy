'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carts', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false
  },
    totalPrice:{
      type:Sequelize.FLOAT(6,2),
      allowNull:false
    },
    deletedAt:{
      type:Sequelize.DATE,
      defaultValue:null
    }
  });
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('carts')
 
}
};