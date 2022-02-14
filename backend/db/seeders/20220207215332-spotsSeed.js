'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
       userId: 2,
       url1: "https://s.wsj.net/public/resources/images/B3-BX392_PEREIR_M_20180928181344.jpg",
       url2: "https://i.insider.com/5bbfa7f38053835ba218cae8?width=1136&format=jpeg",
       url3: "https://s.wsj.net/public/resources/images/B3-BX393_PEREIR_M_20180928181344.jpg",
       address: "6121 Kirkstone Lane",
       city: "Windermere",
       state: "Florida",
       country: "United States",
       lat: 28.526848,
       lng: -81.542986,
       name: "Versailles",
       price: 3500,
     },
     {
      userId: 2,
      url1: "https://prod1.rezstudio.com/asheville2/wp-content/uploads/sites/24/2020/10/activities-biltmore.jpg",
      url2: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Banquet_Hall%2C_Biltmore_House%2C_Biltmore_Estate%2C_Asheville%2C_NC_%2846727921901%29.jpg",
      url3: "https://theyearofhalloween.files.wordpress.com/2014/04/biltmore-estate-library-via-gdfalksen.jpg",
      address: "1 Lodge St",
      city: "Asheville",
      state: "North Carolina",
      country: "United States",
      lat: 35.540505,
      lng:  -82.551134,
      name: "Biltmore Estate",
      price: 5000
     },
     {
      userId: 2,
      url1: "https://www.superyachtfan.com/wp-content/uploads/2020/09/yacht-Musashi-88m-Feadship-5.jpg",
      url2: "http://www.hautetime.com/wp-content/uploads/2013/08/Upper-deck-Lounge.jpg",
      url3: "https://www.yachtinglifestyle365.com/wp-content/uploads/2014/02/Musashi-Guest-Cabin.jpg",
      address: "1 Lodge St",
      city: "Kewalo Basin Harbor",
      state: "Hawaii",
      country: "United States",
      lat: 21.292123,
      lng:  -157.858112,
      name: "Musashi",
      price: 3000
     }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return await queryInterface.bulkDelete('Spots', null, {});
  }
};
