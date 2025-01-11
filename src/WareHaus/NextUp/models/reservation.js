'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init({
    host: DataTypes.STRING,
    date: DataTypes.DATE,
    deposit_status: DataTypes.ENUM('PENDING', 'COMPLETED', 'FAILED'),
    status: DataTypes.ENUM('CONFIRMED', 'PENDING', 'CANCELED'),
    stripe_id: DataTypes.STRING,
    venue_id: DataTypes.STRING,
    deposit_amount: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    total_cost: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    special_requests: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};