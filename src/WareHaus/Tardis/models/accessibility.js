const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Accessibility = sequelize.define('Accessibility', {
  client_music: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  client_band: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  client_dj: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  noise_restriction: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  wheelchair: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  toilets: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  step_free: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lift: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cargo_lift: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
