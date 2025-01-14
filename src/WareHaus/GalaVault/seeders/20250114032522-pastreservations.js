'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PastReservations', [
      {
        host: '1',
        nextup_id: '1',
        stripe_id: '1a',
        completion_date: new Date(),
        feedback: 'Foo',
        confirmed_guests: 11,
        final_cost: 20000,
        invoice: JSON.stringify({
          drinks: [
            {
              name: "Espresso",
              price: 300,
            },
            {
              name: "Iced Latte",
              price: 450,
            },
            {
              name: "Mango Smoothie",
              price: 550,
            },
            {
              name: "Green Tea",
              price: 250,
            }
          ],
          food: [
            {
              name: "Margherita Pizza",
              price: 1200,
            },
            {
              name: "Caesar Salad",
              price: 800,
            },
            {
              name: "Vegetable Wrap",
              price: 750,
            },
            {
              name: "Chocolate Chip Cookie",
              price: 200,
            }
          ]
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PastReservations');
  }
};
