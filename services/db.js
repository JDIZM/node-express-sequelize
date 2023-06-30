const { Sequelize } = require('sequelize');

// const connectionString =
//   process.env.DATABASE_URL ||
//   "postgres://postgres:postgres@localhost:5432/postgres";

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/test`,
); // Example for postgres

module.exports = sequelize;
