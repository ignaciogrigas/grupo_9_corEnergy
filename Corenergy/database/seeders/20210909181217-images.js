'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('images', [
      {"id":1,"name":"In.tiff","url":"http://dummyimage.com/215x100.png/5fa2dd/ffffff","productId":1,"createdAt":"2021-04-18","createdBy":1,"deletedAt":"2021/01/05","deletedBy":1},
      {"id":2,"name":"IpsumAcTellus.tiff","url":"http://dummyimage.com/145x100.png/ff4444/ffffff","productId":1,"createdAt":"2020-11-06","createdBy":2,"deletedAt":"2021/08/03","deletedBy":2},
      {"id":3,"name":"VariusUtBlandit.ppt","url":"http://dummyimage.com/225x100.png/ff4444/ffffff","productId":1,"createdAt":"2021-06-01","createdBy":3,"deletedAt":"2021/05/09","deletedBy":3},
      {"id":4,"name":"Pellentesque.mov","url":"http://dummyimage.com/127x100.png/cc0000/ffffff","productId":2,"createdAt":"2020-11-23","createdBy":4,"deletedAt":"2021/01/18","deletedBy":4},
      {"id":5,"name":"Potenti.avi","url":"http://dummyimage.com/204x100.png/ff4444/ffffff","productId":2,"createdAt":"2020-12-07","createdBy":5,"deletedAt":"2021/07/23","deletedBy":5},
      {"id":6,"name":"Sit.xls","url":"http://dummyimage.com/105x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-07-31","createdBy":6,"deletedAt":"2021/02/22","deletedBy":6},
      {"id":7,"name":"NonQuam.png","url":"http://dummyimage.com/101x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-06-01","createdBy":7,"deletedAt":"2021/03/15","deletedBy":7},
      {"id":8,"name":"DuisConsequat.txt","url":"http://dummyimage.com/114x100.png/cc0000/ffffff","productId":3,"createdAt":"2021-09-01","createdBy":8,"deletedAt":"2021/01/29","deletedBy":8},
      {"id":9,"name":"Mattis.tiff","url":"http://dummyimage.com/225x100.png/ff4444/ffffff","productId":3,"createdAt":"2021-08-01","createdBy":9,"deletedAt":"2021/04/01","deletedBy":9},
      {"id":10,"name":"ArcuLiberoRutrum.xls","url":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","productId":3,"createdAt":"2021-04-14","createdBy":10,"deletedAt":"2021/02/14","deletedBy":10},
      {"id":11,"name":"LobortisConvallisTortor.jpeg","url":"http://dummyimage.com/244x100.png/ff4444/ffffff","productId":11,"createdAt":"2021-04-28","createdBy":11,"deletedAt":null,"deletedBy":11},
      {"id":12,"name":"EtUltrices.jpeg","url":"http://dummyimage.com/122x100.png/5fa2dd/ffffff","productId":12,"createdAt":"2021-06-26","createdBy":12,"deletedAt":null,"deletedBy":12},
      {"id":13,"name":"NuncProinAt.ppt","url":"http://dummyimage.com/194x100.png/cc0000/ffffff","productId":13,"createdAt":"2021-04-10","createdBy":13,"deletedAt":"2021/03/23","deletedBy":13},
      {"id":14,"name":"SuscipitAFeugiat.gif","url":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","productId":14,"createdAt":"2021-03-09","createdBy":14,"deletedAt":"2020/11/01","deletedBy":14},
      {"id":15,"name":"Nibh.gif","url":"http://dummyimage.com/182x100.png/5fa2dd/ffffff","productId":15,"createdAt":"2021-07-15","createdBy":15,"deletedAt":"2021/01/08","deletedBy":15},
      {"id":16,"name":"Lorem.png","url":"http://dummyimage.com/229x100.png/dddddd/000000","productId":16,"createdAt":"2020-11-28","createdBy":16,"deletedAt":"2021/03/10","deletedBy":16},
      {"id":17,"name":"PosuereCubiliaCurae.mp3","url":"http://dummyimage.com/132x100.png/ff4444/ffffff","productId":17,"createdAt":"2020-09-18","createdBy":17,"deletedAt":"2021/02/02","deletedBy":17},
      {"id":18,"name":"TortorRisus.png","url":"http://dummyimage.com/204x100.png/5fa2dd/ffffff","productId":18,"createdAt":"2021-09-02","createdBy":18,"deletedAt":"2021/02/23","deletedBy":18},
      {"id":19,"name":"Nulla.ppt","url":"http://dummyimage.com/201x100.png/cc0000/ffffff","productId":19,"createdAt":"2021-04-08","createdBy":19,"deletedAt":"2020/10/25","deletedBy":19},
      {"id":20,"name":"Nulla.mp3","url":"http://dummyimage.com/188x100.png/dddddd/000000","productId":20,"createdAt":"2020-11-19","createdBy":20,"deletedAt":"2020/10/22","deletedBy":20},
      {"id":21,"name":"NullaUltricesAliquet.ppt","url":"http://dummyimage.com/206x100.png/cc0000/ffffff","productId":21,"createdAt":"2020-10-05","createdBy":21,"deletedAt":"2021/03/28","deletedBy":21},
      {"id":22,"name":"Mi.jpeg","url":"http://dummyimage.com/200x100.png/ff4444/ffffff","productId":22,"createdAt":"2021-02-02","createdBy":22,"deletedAt":"2021/05/28","deletedBy":22},
      {"id":23,"name":"PulvinarNulla.ppt","url":"http://dummyimage.com/104x100.png/5fa2dd/ffffff","productId":23,"createdAt":"2021-04-25","createdBy":23,"deletedAt":"2021/08/09","deletedBy":23},
      {"id":24,"name":"PotentiCrasIn.txt","url":"http://dummyimage.com/192x100.png/dddddd/000000","productId":24,"createdAt":"2020-11-08","createdBy":24,"deletedAt":"2021/02/02","deletedBy":24},
      {"id":25,"name":"PrimisIn.ppt","url":"http://dummyimage.com/161x100.png/ff4444/ffffff","productId":25,"createdAt":"2020-11-02","createdBy":25,"deletedAt":"2021/02/22","deletedBy":25},
      {"id":26,"name":"SitAmet.xls","url":"http://dummyimage.com/146x100.png/cc0000/ffffff","productId":26,"createdAt":"2021-01-02","createdBy":26,"deletedAt":"2021/08/07","deletedBy":26},
      {"id":27,"name":"VelitNecNisi.tiff","url":"http://dummyimage.com/186x100.png/cc0000/ffffff","productId":27,"createdAt":"2020-12-25","createdBy":27,"deletedAt":"2021/07/12","deletedBy":27},
      {"id":28,"name":"LacusCurabitur.mp3","url":"http://dummyimage.com/170x100.png/ff4444/ffffff","productId":28,"createdAt":"2021-04-05","createdBy":28,"deletedAt":"2020/11/15","deletedBy":28},
      {"id":29,"name":"ConsequatMetus.avi","url":"http://dummyimage.com/211x100.png/dddddd/000000","productId":29,"createdAt":"2021-04-13","createdBy":29,"deletedAt":"2020/10/05","deletedBy":29},
      {"id":30,"name":"Felis.mp3","url":"http://dummyimage.com/205x100.png/ff4444/ffffff","productId":30,"createdAt":"2021-05-16","createdBy":30,"deletedAt":"2021/05/06","deletedBy":30},
      {"id":31,"name":"VelAugue.xls","url":"http://dummyimage.com/229x100.png/dddddd/000000","productId":31,"createdAt":"2021-08-12","createdBy":31,"deletedAt":"2021/01/25","deletedBy":31},
      {"id":32,"name":"QuisqueArcu.pdf","url":"http://dummyimage.com/172x100.png/cc0000/ffffff","productId":32,"createdAt":"2020-11-12","createdBy":32,"deletedAt":"2020/09/17","deletedBy":32},
      {"id":33,"name":"EleifendQuam.xls","url":"http://dummyimage.com/162x100.png/dddddd/000000","productId":33,"createdAt":"2021-01-18","createdBy":33,"deletedAt":"2021/01/29","deletedBy":33},
      {"id":34,"name":"Natoque.png","url":"http://dummyimage.com/241x100.png/cc0000/ffffff","productId":34,"createdAt":"2021-03-30","createdBy":34,"deletedAt":"2020/09/14","deletedBy":34},
      {"id":35,"name":"VestibulumSitAmet.txt","url":"http://dummyimage.com/159x100.png/5fa2dd/ffffff","productId":35,"createdAt":"2021-05-06","createdBy":35,"deletedAt":"2021/02/14","deletedBy":35},
      {"id":36,"name":"RutrumNulla.avi","url":"http://dummyimage.com/157x100.png/dddddd/000000","productId":36,"createdAt":"2020-10-23","createdBy":36,"deletedAt":"2021/04/20","deletedBy":36},
      {"id":37,"name":"SedAugue.avi","url":"http://dummyimage.com/126x100.png/ff4444/ffffff","productId":37,"createdAt":"2020-10-25","createdBy":37,"deletedAt":"2021/03/10","deletedBy":37},
      {"id":38,"name":"TellusNullaUt.gif","url":"http://dummyimage.com/246x100.png/cc0000/ffffff","productId":38,"createdAt":"2020-12-14","createdBy":38,"deletedAt":"2020/09/09","deletedBy":38},
      {"id":39,"name":"ConsequatVariusInteger.mp3","url":"http://dummyimage.com/102x100.png/ff4444/ffffff","productId":39,"createdAt":"2021-04-11","createdBy":39,"deletedAt":"2021/07/18","deletedBy":39},
      {"id":40,"name":"AugueASuscipit.avi","url":"http://dummyimage.com/139x100.png/5fa2dd/ffffff","productId":40,"createdAt":"2021-08-17","createdBy":40,"deletedAt":"2021/05/21","deletedBy":40},
      {"id":41,"name":"LoremVitae.doc","url":"http://dummyimage.com/135x100.png/5fa2dd/ffffff","productId":41,"createdAt":"2021-03-07","createdBy":41,"deletedAt":"2021/01/22","deletedBy":41},
      {"id":42,"name":"AtNulla.avi","url":"http://dummyimage.com/209x100.png/ff4444/ffffff","productId":42,"createdAt":"2021-07-20","createdBy":42,"deletedAt":"2020/12/01","deletedBy":42},
      {"id":43,"name":"Dolor.ppt","url":"http://dummyimage.com/107x100.png/5fa2dd/ffffff","productId":43,"createdAt":"2020-11-11","createdBy":43,"deletedAt":"2020/12/30","deletedBy":43},
      {"id":44,"name":"DonecOdioJusto.ppt","url":"http://dummyimage.com/180x100.png/dddddd/000000","productId":44,"createdAt":"2021-06-04","createdBy":44,"deletedAt":"2021/08/05","deletedBy":44},
      {"id":45,"name":"IdLuctusNec.ppt","url":"http://dummyimage.com/225x100.png/dddddd/000000","productId":45,"createdAt":"2021-03-11","createdBy":45,"deletedAt":"2021/08/13","deletedBy":45},
      {"id":46,"name":"Sapien.mov","url":"http://dummyimage.com/174x100.png/dddddd/000000","productId":46,"createdAt":"2021-03-13","createdBy":46,"deletedAt":"2020/09/15","deletedBy":46},
      {"id":47,"name":"ArcuAdipiscing.xls","url":"http://dummyimage.com/147x100.png/5fa2dd/ffffff","productId":47,"createdAt":"2021-07-04","createdBy":47,"deletedAt":"2021/03/31","deletedBy":47},
      {"id":48,"name":"EgetErosElementum.ppt","url":"http://dummyimage.com/191x100.png/dddddd/000000","productId":48,"createdAt":"2021-02-02","createdBy":48,"deletedAt":"2020/10/07","deletedBy":48},
      {"id":49,"name":"JustoSollicitudin.doc","url":"http://dummyimage.com/165x100.png/dddddd/000000","productId":49,"createdAt":"2021-07-23","createdBy":49,"deletedAt":"2020/11/27","deletedBy":49},
      {"id":50,"name":"NequeVestibulum.jpeg","url":"http://dummyimage.com/139x100.png/ff4444/ffffff","productId":50,"createdAt":"2021-09-05","createdBy":50,"deletedAt":"2020/12/20","deletedBy":50}
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('images', null, {});
     
  }
};
