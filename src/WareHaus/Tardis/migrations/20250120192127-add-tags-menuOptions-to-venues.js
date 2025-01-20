'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Venues', 'tags', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    });

    await queryInterface.addColumn('Venues', 'menuOptions', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removecolumn('Venues', 'tags');
    await queryInterface.removecolumn('Venues', 'menuOptions');
  }
};
