const express = require("express");
const router = express.Router();
const { Article } = require("../models");
const { Sequelize } = require("sequelize");

router.get("/", async function (req, res) {
  const articles = await Article.findAll();
  return res.render("home", { articles });
});

router.get("/articulo/:id", async function (req, res) {
  // console.log("REQ: " + req.params.id);
  const article = await Article.findByPk(req.params.id);
  // console.log(article);
  return res.render("article", { article });
});

router.get("/admin", async function (req, res) {
  const articles = await Article.findAll();
  // console.log(articles);
  return res.render("admin", { articles });
});

router.get("/admin/crear", async function (req, res) {
  const articles = await Article.findAll();
  // console.log(articles);
  return res.render("crear");
});

router.post("/admin", async function (req, res) {
  const newArticle = await Article.create({
    title: `${req.body.title}`,
    content: `${req.body.content}`,
    date: {
      type: Sequelize.DATE,
      field: "created_at",
    },
    image: `${req.body.image}`,
    author: `${req.body.author}`,
  });
  return res.redirect("/admin");
});

router.get("/admin/editar/:id", async function (req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("edit", { article });
});

router.post("/admin/editar/:id", async function (req, res) {
  const newArticle = await Article.update(
    {
      title: `${req.body.title}`,
      content: `${req.body.content}`,
      date: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
      image: `${req.body.image}`,
      author: `${req.body.author}`,
    },
    { where: { id: req.params.id } },
  );
  return res.redirect("/admin");
});

router.get("/admin/eliminar/:id", async function (req, res) {
  const deleteArticle = await Article.destroy({
    where: { id: req.params.id },
  });
  return res.redirect("/admin");
});

module.exports = router;
