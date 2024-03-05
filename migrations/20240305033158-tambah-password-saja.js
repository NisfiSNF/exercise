'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('users', 'password', {
      type: DataTypes.STRING,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('users', 'password')
  }
};
