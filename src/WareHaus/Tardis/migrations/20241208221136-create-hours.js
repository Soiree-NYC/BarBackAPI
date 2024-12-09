'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface('Hours', {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Hours');
  }
};
