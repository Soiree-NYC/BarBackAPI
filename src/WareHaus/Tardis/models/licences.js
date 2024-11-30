const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Licences = sequelize.define('Licences', {
  liquor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  byob: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});