module.exports = (sequelize, DataTypes) => {
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
        model: 'Venues',
        key: 'id',
      },
    },
  }, {
    tableName: 'Caterings'
  });

  Catering.associate = (models) => {
    Catering.belongsTo(models.Catering, { foreignKey: 'venue_id' });
  };

  return Catering;
};
