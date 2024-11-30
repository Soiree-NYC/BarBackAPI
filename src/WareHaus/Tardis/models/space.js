const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Space = sequelize.define('Space', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  min_capacity: {
    type: DataTypes.STRING
  },
  max_capacity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Venues',
      key: 'id',
    },
  },
});

Venue.hasMany(Space, { foreignKey: 'venue_id' });
Space.belongsTo(Venue, { foreignKey: 'venue_id' });

module.exports = {
  Space,
};
