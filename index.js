const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/articleRoutes");

const { Article } = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);

app.get("/articulo/:id", async function (req, res) {
  // console.log("REQ: " + req.params.id);
  const article = await Article.findByPk(req.params.id);
  // console.log(article);
  return res.render("article", { article });
});

app.get("/admin", async function (req, res) {
  const articles = await Article.findAll();
  // console.log(articles);
  return res.render("admin", { articles });
});

app.get("/admin/crear", async function (req, res) {
  const articles = await Article.findAll();
  // console.log(articles);
  return res.render("crear");
});

app.post("/admin", async function (req, res) {
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

app.get("/admin/editar/:id", async function (req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("edit", { article });
});

app.post("/admin/editar/:id", async function (req, res) {
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

app.get("/admin/eliminar/:id", async function (req, res) {
  const deleteArticle = await Article.destroy({
    where: { id: req.params.id },
  });
  return res.redirect("/admin");
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
