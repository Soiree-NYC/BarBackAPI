'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConsumerUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConsumerUser.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    verification: DataTypes.JSON,
    role: DataTypes.JSON,
    notification_preferences: DataTypes.JSON,
    account_status: DataTypes.STRING,
    favorites: DataTypes.ARRAY,
    last_login: DataTypes.DATE,
    profile_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ConsumerUser',
  });
  return ConsumerUser;
};