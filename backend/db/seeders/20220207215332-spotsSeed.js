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
       userId: 1,
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
      address: "1 Lodge St",
      city: "Asheville",
      state: "North Carolina",
      country: "United States",
      lat: 35.540505,
      lng:  -82.551134,
      name: "Biltmore Estate",
      price: 5000
     }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return await queryInterface.bulkDelete('Spots');
  }
};
