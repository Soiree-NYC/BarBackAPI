const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Parking = sequelize.define('Parking', {
  free_onsite_parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  free_street_parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  paid_onsite_parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  paid_street_parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Venue,
      key: 'id',
    },
  },
});

Venue.hasOne(Parking, { foreignKey: 'venue_id' });
Parking.belongsTo(Parking, { foreignKey: 'venue_id' });
