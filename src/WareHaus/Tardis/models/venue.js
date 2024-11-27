const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Venue = sequelize.define('Venue', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
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
  city: DataTypes.STRING,
  state: {
    type: DataTypes.STRING,
    defaultValue: 'NY',
  },
  zip: DataTypes.STRING,
  pricing: DataTypes.STRING,
  cancellation_policy_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CancellationPolicies',
      key: 'policy_id',
    },
  },
});

const VibeTag = sequelize.define('VibeTag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const VenueVibeTag = sequelize.define('VenueVibeTag', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  venue_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Venues',
      key: 'id'
    }
  },
  vibe_tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'VibeTags',
      key: 'id'
    }
  }
});

Venue.hasMany(Space, { foreignKey: 'venue_id'});
Space.belongsTo(Venue, { foreignKey: 'venue_id'});

Venue.belongsToMany(VibeTag, { through: VenueVibeTag, foreignKey: 'venue_id' });
VibeTag.belongsToMany(Venue, { through: VenueVibeTag, foreignKey: 'venue_tag_id' });

module.exports = { Venue, VibeTag, VenueVibeTag, };
