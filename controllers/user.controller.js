const { uuid } = require("uuidv4");
const { DataTypes } = require("sequelize");

const sequelize = require("../services/db");
const User = require("../models/user")(sequelize, DataTypes);

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send({ users });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const id = uuid();
    const user = await User.create({
      id,
      firstName,
      lastName,
      email,
    });
    res.send({ user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
