const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Address = sequelize.define('Address', {
  address1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Venue.hasOne(Address, { foreignKey: 'venue_id'});
Address.belongsTo(Venue, { foreignKey: 'venue_id'});
