'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientUser.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    verification: DataTypes.JSON,
    venues: DataTypes.ARRAY(DataTypes.STRING),
    notification_preferences: DataTypes.JSON,
    account_status: DataTypes.STRING,
    last_login: DataTypes.DATE,
    profile_picture: DataTypes.STRING,
    roles: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'ClientUser',
  });
  return ClientUser;
};