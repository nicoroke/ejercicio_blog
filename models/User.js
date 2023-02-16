const { Sequelize, Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        role: {
          type: DataTypes.INTEGER,
          defaultValue: 10, // 10 => "lector", 20 => escritor, 30 => editor, 40 => administrador
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
        timestamps: false,
      },
    );
    return User;
  }
}

module.exports = User;
