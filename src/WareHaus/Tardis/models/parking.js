module.exports = (sequelize, DataTypes) => {
  const Parking = sequelize.define('Parking', {
    free_onsite_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    free_street_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    paid_onsite_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    paid_street_parking: {
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
    tableName: 'Parkings'
  });

  Parking.associate = (models) => {
    Parking.belongsTo(models.Parking, { foreignKey: 'venue_id' });
  };

  return Parking;
};
