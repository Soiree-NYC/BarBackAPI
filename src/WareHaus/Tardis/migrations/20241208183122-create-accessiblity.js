'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Accessibility', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_music: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      client_band: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      client_dj: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      noise_restriction: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      wheelchair: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      toilets: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      step_free: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      lift: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      cargo_lift: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      venue_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Venues',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Accessibility');
  }
};
