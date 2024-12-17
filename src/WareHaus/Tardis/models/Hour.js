module.exports = (sequelize, DataTypes) => {
  const Hours = sequelize.define('Hour', {
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    friday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sunday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    min_hours: {
      type: DataTypes.STRING,
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
    tableName: 'Hours'
  });

  Hours.associate = (models) => {
    Hours.belongsTo(models.Hour, { foreignKey: 'venue_id' });
  };

  return Hours;
};
