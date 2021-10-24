'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 await queryInterface.bulkInsert('users', [{
  "id": 1,
  "name": "Hilarius",
  "surname": "De Roberto",
  "birthDate": "1999-09-09",
  "email": "hderoberto0@ezinearticles.com",
  "password": "F2lDyUpt",
  "categoryUserId": 1,
  "profileImage": "/images/default_and_logos/default_avatar.svg"
}, {
  "id": 2,
  "name": "Bea",
  "surname": "Krzysztof",
  "birthDate": "1982-06-01",
  "email": "bkrzysztof1@mysql.com",
  "password": "4oVgApc",
  "categoryUserId": 1,
  "profileImage": "/images/default_and_logos/default_avatar.svg"
}, {
  "id": 3,
  "name": "Hyatt",
  "surname": "Luisetti",
  "birthDate": "1979-05-14",
  "email": "hluisetti2@google.pl",
  "password": "xVKtxPeP",
  "categoryUserId": 2,
  "profileImage": "/images/default_and_logos/default_avatar.svg"
}, {
  "id": 4,
  "name": "Pat",
  "surname": "Treswell",
  "birthDate": "2004-11-15",
  "email": "ptreswell3@liveinternet.ru",
  "password": "dwli2DE7Y",
  "categoryUserId": 2,
  "profileImage": "/images/default_and_logos/default_avatar.svg"
}, {
  "id": 5,
  "name": "Vidovic",
  "surname": "MacGiffin",
  "birthDate": "1986-12-14",
  "email": "vmacgiffin4@xinhuanet.com",
  "password": "IBDJPUk",
  "categoryUserId": 2,
  "profileImage": "/images/default_and_logos/default_avatar.svg"
}]
, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
