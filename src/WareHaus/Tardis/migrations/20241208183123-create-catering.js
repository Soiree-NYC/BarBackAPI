'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Catering', {
      in_house: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      external: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Venues',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Catering');
  }
};
