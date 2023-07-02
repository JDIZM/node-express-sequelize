const { Model } = require("sequelize");
// const Bar = require("./bar");

// https://stackoverflow.com/questions/33313569/sequelize-create-is-not-a-function-error
// const User = require('../models/user')(sequelize, Sequelize.DataTypes, Sequelize);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // FIXME static association methods are not being called.
      this.hasOne(models.Bar, { foreignKey: "userId" });
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
      freezeTableName: true,
    }
  );

  return User;
};
