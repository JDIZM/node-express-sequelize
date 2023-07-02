/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bar", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // https://sequelize.org/docs/v6/other-topics/naming-strategies/#when-defining-a-reference-key-in-a-model
      userId: {
        type: Sequelize.UUID,
        references: {
          // Bar belongsTo User 1:1
          model: "User",
          key: "id",
        },
        notNull: true,
      },
    });
  },
  // eslint-disable-next-line
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bar");
  },
};
