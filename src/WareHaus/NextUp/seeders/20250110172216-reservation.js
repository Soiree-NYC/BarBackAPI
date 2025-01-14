'use strict';
//next up = upcomingRez
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        host: '1',
        date: new Date(),
        deposit_status: 'PENDING',
        status: 'PENDING',
        stripe_id: '1a',
        venue_id: '1',
        deposit_amount: 100,
        balance: 100,
        total_cost: 200,
        guests: 10,
        special_requests: 'TEST',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};
