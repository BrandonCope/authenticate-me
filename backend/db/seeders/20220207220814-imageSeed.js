'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
       spotId: 1,
       url: "https://s.wsj.net/public/resources/images/B3-BX392_PEREIR_M_20180928181344.jpg"
     },
     {
       spotId: 1,
       url: "https://i.insider.com/5bbfa7f38053835ba218cae8?width=1136&format=jpeg"
     },
     {
       spotId: 1,
       url: "https://s.wsj.net/public/resources/images/B3-BX393_PEREIR_M_20180928181344.jpg"
     },
     {
       spotId: 2,
       url: "https://prod1.rezstudio.com/asheville2/wp-content/uploads/sites/24/2020/10/activities-biltmore.jpg"
     },
     {
       spotId: 2,
       url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Banquet_Hall%2C_Biltmore_House%2C_Biltmore_Estate%2C_Asheville%2C_NC_%2846727921901%29.jpg"
     },
     {
       spotId: 2,
       url: "https://theyearofhalloween.files.wordpress.com/2014/04/biltmore-estate-library-via-gdfalksen.jpg"
     }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return await queryInterface.bulkDelete('Images');
  }
};
