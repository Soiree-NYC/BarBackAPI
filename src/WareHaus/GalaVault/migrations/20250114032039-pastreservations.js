'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PastReservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      host: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nextup_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stripe_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completion_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      feedback: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      confirmed_guests: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      final_cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      invoice: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PastReservations');
  }
};
