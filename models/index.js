const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ha_ejercicio_21", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const Article = require("./Article");

Article.initModel(sequelize);

module.exports = {
  sequelize,
  Article,
};
