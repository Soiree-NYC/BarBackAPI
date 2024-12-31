'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConsumerUsers', {
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
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      verification: {
        type: Sequelize.JSON
      },
      role: {
        type: Sequelize.JSON
      },
      notification_preferences: {
        type: Sequelize.JSON
      },
      account_status: {
        type: Sequelize.STRING
      },
      favorites: {
        type: Sequelize.ARRAY
      },
      last_login: {
        type: Sequelize.DATE
      },
      profile_picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ConsumerUsers');
  }
};