const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ha_ejercicio_21", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const Article = require("./Article");
const Comment = require("./Comment");
const User = require("./User");

Article.initModel(sequelize);
Comment.initModel(sequelize);
User.initModel(sequelize);

module.exports = {
  sequelize,
  Article,
  Comment,
  User,
};
