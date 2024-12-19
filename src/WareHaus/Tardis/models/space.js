module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define('Space', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_capacity: {
      type: DataTypes.INTEGER,
    },
    max_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: 'Spaces'
  });

  Space.associate = (models) => {
    Space.belongsTo(models.Venue, { foreignKey: 'venue_id' });
  };

  return Space;
};
