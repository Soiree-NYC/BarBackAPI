'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Parkings', {
      free_onsite_parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      free_street_parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      paid_onsite_parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      paid_street_parking: {
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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Parking');
  }
};
