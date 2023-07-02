const { Model } = require("sequelize");

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
      models.Bar.belongsTo(models.User, { foreignKey: "userId" });
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

  return Bar;
};
