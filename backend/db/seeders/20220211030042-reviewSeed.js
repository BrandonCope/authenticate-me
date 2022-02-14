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
       username:"Demo-User",
       review:"Loved the fountain.",
     },
     {
      userId:2,
      spotId:1,
      username:"Chad",
      review:"Great place to host company outing."
     },
     {
      userId:3,
      spotId:2,
      username:"Karen",
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
