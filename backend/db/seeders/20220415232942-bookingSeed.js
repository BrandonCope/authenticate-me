'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
    {
      userId:1,
      spotId:2,
      startDate:"April 20 2022",
      endDate:"April 25 2022",
    },
    {
      userId:2,
      spotId:1,
      startDate:"April 25 2022",
      endDate:"April 30 2022",
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
