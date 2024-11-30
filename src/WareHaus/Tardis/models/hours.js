const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Hours = sequelize.define('Hours', {
  monday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tuesday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  wednesday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  thursday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  friday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  saturday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  sunday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  min_hours: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Venues',
      key: 'id',
    },
    allowNull: false,
  },
});

Venue.hasOne(Hours, { foreignKey: 'venue_id' });
Hours.belongsTo(Hours, { foreignKey: 'venue_id' });

module.exports = {
  Hours,
};
