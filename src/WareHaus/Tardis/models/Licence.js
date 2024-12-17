module.exports = (sequelize, DataTypes) => {
  const Licence = sequelize.define('Licence', {
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
  }, {
    tableName: 'Licences'
  });

  Licence.associate = (models) => {
    Licence.belongsTo(models.Licence, { foreignKeys: 'venue_id' });
  };

  return Licence;
};
