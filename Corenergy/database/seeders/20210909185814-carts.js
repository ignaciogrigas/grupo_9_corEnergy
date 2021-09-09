'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('carts', [
       
        {"id":1,"totalPrice":"$339.41","deletedAt":"2020/12/15"},
        {"id":2,"totalPrice":"$143.30","deletedAt":"2021/03/23"},
        {"id":3,"totalPrice":"$177.43","deletedAt":"2021/05/06"},
        {"id":4,"totalPrice":"$178.75","deletedAt":"2021/04/03"},
        {"id":5,"totalPrice":"$215.98","deletedAt":"2020/11/20"},
        {"id":6,"totalPrice":"$442.37","deletedAt":"2021/02/25"},
        {"id":7,"totalPrice":"$73.25","deletedAt":"2021/02/25"},
        {"id":8,"totalPrice":"$352.85","deletedAt":"2021/08/09"},
        {"id":9,"totalPrice":"$449.00","deletedAt":"2020/10/13"},
        {"id":10,"totalPrice":"$460.28","deletedAt":"2020/10/20"},
        {"id":11,"totalPrice":"$127.09","deletedAt":"2021/04/19"},
        {"id":12,"totalPrice":"$436.77","deletedAt":"2020/09/12"},
        {"id":13,"totalPrice":"$415.79","deletedAt":"2021/06/27"},
        {"id":14,"totalPrice":"$337.08","deletedAt":"2021/08/14"},
        {"id":15,"totalPrice":"$162.00","deletedAt":"2021/01/05"},
        {"id":16,"totalPrice":"$292.29","deletedAt":"2021/06/26"},
        {"id":17,"totalPrice":"$497.49","deletedAt":"2021/03/13"},
        {"id":18,"totalPrice":"$62.35","deletedAt":"2021/04/25"},
        {"id":19,"totalPrice":"$117.66","deletedAt":"2021/08/01"},
        {"id":20,"totalPrice":"$373.32","deletedAt":"2020/09/28"},
        {"id":21,"totalPrice":"$446.46","deletedAt":"2021/01/22"},
        {"id":22,"totalPrice":"$491.53","deletedAt":"2021/01/12"},
        {"id":23,"totalPrice":"$441.89","deletedAt":"2021/01/31"},
        {"id":24,"totalPrice":"$185.20","deletedAt":"2020/12/24"},
        {"id":25,"totalPrice":"$467.22","deletedAt":"2021/03/26"},
        {"id":26,"totalPrice":"$55.01","deletedAt":"2021/06/22"},
        {"id":27,"totalPrice":"$414.27","deletedAt":"2020/09/17"},
        {"id":28,"totalPrice":"$111.67","deletedAt":"2021/02/20"},
        {"id":29,"totalPrice":"$63.62","deletedAt":"2021/06/11"},
        {"id":30,"totalPrice":"$364.95","deletedAt":"2021/08/06"},
        {"id":31,"totalPrice":"$166.61","deletedAt":"2020/12/18"},
        {"id":32,"totalPrice":"$393.76","deletedAt":"2021/07/02"},
        {"id":33,"totalPrice":"$284.08","deletedAt":"2021/06/08"},
        {"id":34,"totalPrice":"$129.90","deletedAt":"2021/03/19"},
        {"id":35,"totalPrice":"$339.73","deletedAt":"2021/03/29"},
        {"id":36,"totalPrice":"$423.41","deletedAt":"2021/04/09"},
        {"id":37,"totalPrice":"$233.03","deletedAt":"2021/07/30"},
        {"id":38,"totalPrice":"$259.35","deletedAt":"2020/12/16"},
        {"id":39,"totalPrice":"$137.35","deletedAt":"2021/06/22"},
        {"id":40,"totalPrice":"$20.05","deletedAt":"2021/07/20"},
        {"id":41,"totalPrice":"$402.25","deletedAt":"2021/08/21"},
        {"id":42,"totalPrice":"$362.28","deletedAt":"2020/09/17"},
        {"id":43,"totalPrice":"$227.03","deletedAt":"2021/02/11"},
        {"id":44,"totalPrice":"$254.26","deletedAt":"2021/06/21"},
        {"id":45,"totalPrice":"$381.35","deletedAt":"2021/08/07"},
        {"id":46,"totalPrice":"$302.88","deletedAt":"2021/04/21"},
        {"id":47,"totalPrice":"$107.34","deletedAt":"2021/05/20"},
        {"id":48,"totalPrice":"$54.34","deletedAt":"2020/11/04"},
        {"id":49,"totalPrice":"$278.01","deletedAt":"2021/06/22"},
        {"id":50,"totalPrice":"$169.92","deletedAt":"2021/03/22"}      
       ]);
    
  },

  down: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkDelete('carts', null, {});
    
  }
};
