const express = require("express");
const app = express();
const port = 3000;

app.get("/", async function (req, res) {
  return res.send("Home");
});

app.get("/admin", async function (req, res) {
  return res.send("Admin");
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
