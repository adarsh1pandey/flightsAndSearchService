'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
    {
      name: "Kempegowda International Airport",
      cityId: 28,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Mysuru International Airport",
      cityId: 28,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      name: "Mengaluru International Airport",
      cityId: 28,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Indira Gandhi International Airport",
      cityId: 31,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ], {}
   ) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};