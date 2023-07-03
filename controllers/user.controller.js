const { uuid } = require("uuidv4");
const { User, Bar } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: { all: true } });
    res.send({ users });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    // Include all associations
    const user = await User.findByPk(req.params.id, { include: { all: true } });
    // Manually find association
    const barById = await Bar.findOne({ where: { userId: req.params.id } });
    // Use the association helper method
    // https://sequelize.org/docs/v6/core-concepts/assocs/#foohasonebar
    const barHelper = await user.getBar();
    res.send({ user, barById, barHelper });
  } catch (err) {
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

const createUserWithBarAssociation = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const id = uuid();

    const user = await User.create({
      id,
      firstName,
      lastName,
      email,
    });

    // create a new bar and associate it with the user
    const bar = await Bar.create({
      userId: id,
    });
    user.setBar(bar);

    res.send({ user, bar });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  createUser,
  createUserWithBarAssociation,
  getUserById,
  getUsers,
};
