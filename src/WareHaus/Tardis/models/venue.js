const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Venue = sequelize.define('Venue', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Venue;
