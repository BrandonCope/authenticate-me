'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.com',
        username: 'Demo-User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'robot1@user.com',
        username: 'RobotUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'robot2@user.com',
        username: 'RobotUser2',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-User', 'RobotUser1', 'RobotUser2'] }
    }, {});
  }
};
