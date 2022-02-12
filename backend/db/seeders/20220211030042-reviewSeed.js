'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
       userId:1,
       spotId:1,
       firstName:"Demo",
       review:"Loved the fountain.",
     },
     {
      userId:2,
      spotId:1,
      firstName:"Chad",
      review:"Great place to host company outing."
     },
     {
      userId:3,
      spotId:2,
      firstName:"Karen",
      review:"A magnificent piece of history."
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
