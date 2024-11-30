const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Catering = sequelize.define('Catering', {
  in_house: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  external: {
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

Venue.hasOne(Catering, { foreignKey: 'venue_id' });
Catering.belongsTo(Catering, { foreignKey: 'venue_id' });

module.exports = {
  Catering
};
