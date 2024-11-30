const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { CancellationPolicy } = require('./cancellationPolicy');

const Venue = sequelize.define('Venue', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
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
  zip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age_policy: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  cancellation_policy_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CancellationPolicy',
      key: 'policy_id',
    },
  },
});

Venue.belongsTo(CancellationsPolicy, { foreignKey: 'cancellation_policy_id' });
CancellationPolicy.hasMany(Venue, { foreignKey: 'cancellation_policy_id' });

module.exports = {
  Venue,
};
