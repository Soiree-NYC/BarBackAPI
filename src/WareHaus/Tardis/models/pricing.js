const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Pricing = sequelize.define('Pricing', {
  basic_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  premium_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vip_price: {
    type: DataTypes.FLOAT,
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

Venue.hasOne(Pricing, { foreignKey: 'venue_id' });
Pricing.belongsTo(Pricing, { foreignKey: 'venue_id' });
