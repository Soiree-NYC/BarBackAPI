'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pricings', {
      basic_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      premium_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      vip_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cleaning_fee: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      gratuity_fee: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      corking_fee: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cold_storage_fee: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      coat_check_fee: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('Pricing');
  }
};
