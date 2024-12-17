module.exports = (sequelize, DataTypes) => {
  const CancellationPolicy = sequelize.define('CancellationPolicy', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'CancellationPolicies'
  });

  CancellationPolicy.associate = (models) => {
    CancellationPolicy.hasMany(models.Venue, { foreignKey: 'cancellation_policy_id' });
  };

  return CancellationPolicy;
};
