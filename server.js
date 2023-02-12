const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/articleRoutes");
const dbInitialSetup = require("./dbInitialSetup");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);
dbInitialSetup();

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
