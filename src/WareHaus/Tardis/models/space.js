const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Space = sequelize.define('Space', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Venues',
      key: 'id',
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Venue.hasMany(Space, { foreignKey: 'venue_id' });
Space.belongsTo(Venue, { foreignKey: 'venue_id' });

module.exports = {
  Space,
};
