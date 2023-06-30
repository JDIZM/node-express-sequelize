/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Bar', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    }]);
  },

  // eslint-disable-next-line
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bar', null, {});
  },
};
