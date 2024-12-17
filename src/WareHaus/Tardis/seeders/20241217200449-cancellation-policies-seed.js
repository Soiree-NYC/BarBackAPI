'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CancellationPolicies', [
      {
        name: 'Very flexible',
        description: 'Cancellations up to 24 hours from event start time will receive a full refund. Cancellations for events starting within 24 hours are non-refundable.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flexible',
        description: 'Cancellations up to 7 days in advance will receive a full refund. Cancellations up to 7 days to 24 hours in advance will receive a 50% refund. Cancellations for events starting within 24 hours are non-refundable.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Standard 30 day',
        description: 'Cancellations 30 days in advance will receive a full refund. Cancellations up to 7 to 30 days in advance will receive a 50% refund. Cancellations for events starting within 7 days are non-refundable.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Standard 60 day',
        description: 'Cancellations 60 days in advance will receive a full refund. Cancellations up to 60 to 30 days in advance will receive a 50% refund. Cancellations for events starting within 30 days are non-refundable.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CancellationPolicies', null, {});
  }
};
