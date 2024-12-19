'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Venues', [
      {
        name: 'Soirée Hall',
        description: `Nestled in the heart of Manhattan's vibrant theater district, Soirée Hall is an intimate jazz bar offering a cozy atmosphere for music lovers. With its rich wood paneling, dim lighting, and an array of vintage jazz vinyls adorning the walls, it's the perfect spot to enjoy smooth cocktails while listening to live performances by local jazz musicians. Whether you're here for a quiet evening or an impromptu jam session, Soirée Hall provides an unforgettable experience for both seasoned jazz enthusiasts and newcomers alike.`,
        address1: '2345 West 45th Street',
        address2: 'Suite 1B',
        city: 'New York City',
        state: 'NY',
        zip: '10036',
        neighborhood: 'Broadway District',
        phone: '2121234567',
        email: 'mikeoxlong@soiréehall.com',
        age_policy: true,
        photos: [
          'https://plus.unsplash.com/premium_photo-1675857966676-30fc01198536?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1540224769541-7e6e20a42330?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1723924878055-37ba67a1f11d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        cancellation_policy_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Venues', null, {});
  }
};
