'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false
  },
    userId:{
      type:DataType.INTEGER,
      references: {
        model:"user",
        key:"id"
      }
    },
    totalPrice:{
      type:DataType.FLOAT(6,2),
      allowNull:false
    }
  });
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('cart')
 
}
};