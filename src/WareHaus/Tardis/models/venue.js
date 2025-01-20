module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
        model: 'CancellationPolicies',
        key: 'id',
      },
    },
    tags: {
      type: DataTypes.Array(DataTypes.STRING),
      allowNull: true,
    },
    menuOptions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }, {
    tableName: 'Venues'
  });

  Venue.associate = (models) => {
    Venue.belongsTo(models.CancellationPolicy, { foreignKey: 'cancellation_policy_id' });
  };

  return Venue;
};
