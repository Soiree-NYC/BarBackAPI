'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pricings', [
      {
        basic_price: 100.00,
        premium_price: 250.50,
        vip_price: 500.00,
        cleaning_fee: 20.00,
        gratuity_fee: 18,
        corking_fee: 20.00,
        cold_storage_fee: 5.00,
        coat_check_fee: 5.00,
        venue_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Parkings', null, {});
  }
};
