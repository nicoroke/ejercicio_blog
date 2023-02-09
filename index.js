const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  return res.render("home");
});

app.get("/articulos", async function (req, res) {
  return res.send("Admin");
});

app.get("/admin", async function (req, res) {
  return res.send("Admin");
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
