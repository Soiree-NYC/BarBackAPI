'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClientUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING
      },
      verification: {
        type: Sequelize.JSON
      },
      venues: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      notification_preferences: {
        type: Sequelize.JSON,
        defaultValue: {
          push: true,
          email: true,
          sms: true,
        }
      },
      account_status: {
        type: Sequelize.STRING,
        defaultValue: 'active'
      },
      last_login: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      profile_picture: {
        type: Sequelize.STRING
      },
      roles: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ['user']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClientUsers');
  }
};