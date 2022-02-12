'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Spot, {foreignKey: 'spotId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};
