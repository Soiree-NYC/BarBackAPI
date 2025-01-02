'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClientUsers', [
      {
        name: 'Soiree User',
        email: 'jon.wolf.narine@gmail.com',
        phone: '000-000-0000',
        verification: JSON.stringify({
          push: true,
          email: true,
          phone: true,
          sms: true,
        }),
        venues: ['Soirée Hall'],
        notification_preferences: JSON.stringify({
          push: true,
          email: true,
          phone: true,
          sms: true,
        }),
        account_status: 'active',
        last_login: new Date(),
        profile_picture:
          'https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        roles: ['admin'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientUsers', null, {})
  }
};
