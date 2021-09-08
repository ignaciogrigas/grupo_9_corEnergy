'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartDetail', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      unique:true,
      allowNull:false
  },
    orderId:{
      type:DataType.INTEGER,
      references: {
        model:"orders",
        key:"id"
      }
    },
    oporductID:{
      type:DataType.INTEGER,
      references: {
        model:"products",
        key:"id"
      }
    },
    price:{
      type:DataType.FLOAT(6,2),
      allowNull:false
    }
  });
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('cartDetail')
 
}
};