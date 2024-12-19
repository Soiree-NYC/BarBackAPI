'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Parkings', [
      {
        free_onsite_parking: false,
        free_street_parking: true,
        paid_onsite_parking: false,
        paid_street_parking: true,
        venue_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Parkings', null, {});
  }
};
