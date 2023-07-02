const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DB}`
); // Example for postgres

module.exports = sequelize;
