const express = require("express");
const app = express();
const port = 3000;

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("ha_ejercicio_21", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

class Article extends Model {}

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

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  const articles = await Article.findAll();
  console.log(articles);
  return res.render("home", { articles });
});

app.get("/articulo/:id", async function (req, res) {
  console.log("REQ: " + req.params.id);
  const article = await Article.findByPk(req.params.id);
  // console.log(article);
  return res.render("article", { article });
});

app.get("/admin", async function (req, res) {
  const articles = await Article.findAll();
  console.log(articles);
  return res.render("admin", { articles });
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
