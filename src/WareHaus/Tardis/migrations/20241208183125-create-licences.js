'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Licences', {
      liquor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      byob: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      venue_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Venues',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Licences');
  }
};
