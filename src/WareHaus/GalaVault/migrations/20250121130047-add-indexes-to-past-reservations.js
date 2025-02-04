'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex('PastReservations', ['host']);
    await queryInterface.addIndex('PastReservations', ['nextup_id']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('PastReservations', ['host']);
    await queryInterface.removeIndex('PastReservations', ['nextup_id']);
  },
};
