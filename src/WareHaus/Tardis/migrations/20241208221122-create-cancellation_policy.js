'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Accessibility', {
      policy_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Venue,
          key: 'id'
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CancellationPolicy');
  }
};
