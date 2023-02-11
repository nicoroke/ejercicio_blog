const { Sequelize, Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.BIGINT.UNSIGNED,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        content: { allowNull: false, type: DataTypes.STRING },
        date: {
          type: DataTypes.DATEONLY,
        },
        author: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        comments: {
          allowNull: true,
          type: DataTypes.STRING,
        },
      },
      { sequelize, modelName: "article", timestamps: false },
    );
    return Article;
  }
}

module.exports = Article;
