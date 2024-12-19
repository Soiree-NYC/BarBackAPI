'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spaces', [
      {
        name: 'Main Dining',
        type: 'Main floor',
        min_capacity: 50,
        max_capacity: 130,
        size: '3000sqft',
        price: 200.00,
        description: 'Our main dining room situated in the front of our location adjacent to the main bar.',
        image: 'https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        venue_id: 1,
      },
      {
        name: 'The Mezz',
        type: 'Mezzainine',
        min_capacity: 10,
        max_capacity: 25,
        size: '450sqft',
        price: 100.00,
        description: 'The Mezz overlooks the maining room from a floor above at the rear of the location.',
        image: 'https://images.unsplash.com/photo-1700521653397-814b49dec005?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        venue_id: 1,
      },
      {
        name: 'The Veranda',
        type: 'Porch',
        min_capacity: 20,
        max_capacity: 45,
        size: '900sqft',
        price: 150.00,
        description: 'The Mezz overlooks the maining room from a floor above at the rear of the location.',
        image: 'https://images.unsplash.com/photo-1700521653397-814b49dec005?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        venue_id: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spaces', null, {});
  }
};
