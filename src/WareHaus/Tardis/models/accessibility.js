module.exports = (sequelize, DataTypes) => {
  const Accessibility = sequelize.define('Accessibility', {
    client_music: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    client_band: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    client_dj: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    noise_restriction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wheelchair: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    toilets: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    step_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cargo_lift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Venues',
        key: 'id',
      },
    },
  }, {
    tableName: 'Accessiblities'
  });

  Accessibility.associate = (models) => {
    Accessibility.belongsTo(models.Venue, { foreignKey: 'venue_id' });
  };

  return Accessibility;
};
