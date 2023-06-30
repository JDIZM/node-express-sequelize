const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/test`,
); // Example for postgres

module.exports = sequelize;
