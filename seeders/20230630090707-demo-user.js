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
    await queryInterface.bulkInsert("User", [
      {
        id: "1f63b2ad-4273-4fdd-b6a7-dcadf45a2cbe",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // eslint-disable-next-line
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
