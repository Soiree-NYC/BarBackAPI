'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accessibilities', [
      {
        client_music: true,
        client_band: true,
        client_dj: true,
        noise_restriction: false,
        wheelchair: true,
        toilets: true,
        step_free: true,
        parking: false,
        lift: true,
        cargo_lift: false,
        venue_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accessibilities', null, {});
  },
};
