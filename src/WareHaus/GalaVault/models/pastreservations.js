'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PastReservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PastReservations.init({
    host: DataTypes.STRING,
    nextup_id: DataTypes.STRING,
    stripe_id: DataTypes.STRING,
    completion_date: DataTypes.DATE,
    feedback: DataTypes.TEXT,
    confirmed_guests: DataTypes.INTEGER,
    final_cost: DataTypes.INTEGER,
    invoice: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'PastReservations',
  });
  return PastReservations;
};
