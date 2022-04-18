'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    url1: DataTypes.STRING,
    url2: DataTypes.STRING,
    url3: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, {foreignKey: 'userId'});
    Spot.hasMany(models.Image, {foreignKey: 'spotId'})
    Spot.hasMany(models.Review, {foreignKey: 'spotId'})
    Spot.hasMany(models.Booking, {foreignKey: 'spotId'})
  };
  return Spot;
};
