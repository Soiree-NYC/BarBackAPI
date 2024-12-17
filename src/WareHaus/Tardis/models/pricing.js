module.exports = (sequelize, DataTypes) => {
  const Pricing = sequelize.define('Pricing', {
    basic_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    premium_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    vip_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cleaning_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gratuity_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    corking_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cold_storage_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    coat_check__fee: {
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
    tableName: 'Pricings'
  });

  Pricing.associate = (models) => {
    Pricing.belongsTo(models.Pricing, { foreignKey: 'venue_id' });
  };

  return Pricing;
};
