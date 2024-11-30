const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CancellationPolicy = sequelize.define('CancellationPolicy', {
  policy_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Venue.belongsTo(CancellationPolicy, { foreignKey: 'cancellation_policy_id' });
CancellationPolicy.hasMany(Venue, { foreignKey: 'cancellation_policy_id' });

module.exports = {
  CancellationPolicy,
};
