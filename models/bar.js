const { Model } = require("sequelize");
// const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Bar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line
    static associate(models) {
      // define association here
      // FIXME static association methods are not being called.
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Bar.init(
    {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Bar",
      tableName: "Bar",
      freezeTableName: true,
    }
  );

  Bar.belongsTo(sequelize.models.User, { foreignKey: "userId" });
  sequelize.models.User.hasOne(sequelize.models.Bar, { foreignKey: "userId" });
  return Bar;
};
