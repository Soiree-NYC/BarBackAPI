const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Licence = sequelize.define('Licences', {
  liquor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  byob: {
    type: DataTypes.BOOLEAN,
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

Venue.hasOne(Licence, { foreignKeys: 'venue_id' });
Licence.belongsTo(Licence, { foreignKeys: 'venue_id' });

module.exports = {
  Licence
};
