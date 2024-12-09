'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Catering', {
      in_house: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      external: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      venue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Venue,
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Catering');
  }
};
