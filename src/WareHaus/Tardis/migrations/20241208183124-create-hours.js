'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Hours', {
      monday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tuesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      wednesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      thursday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      friday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      saturday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      sunday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      venue_id: {
        type: Sequelize.INTEGER,
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
