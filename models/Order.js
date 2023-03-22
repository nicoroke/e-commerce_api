const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          set() {
            throw new Error("Do not try to set the id value!");
          },
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "status is required" },
            notEmpty: true,
          },
        },
        address: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: { msg: "address is required" },
            notEmpty: true,
          },
        },
        products: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: { msg: "products is required" },
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
