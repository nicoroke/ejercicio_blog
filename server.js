require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const app = express();
const port = 3000;
const routes = require("./routes/articleRoutes");
const dbInitialSetup = require("./dbInitialSetup");

app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
// app.use(new LocalStrategy(authenticator))
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);
dbInitialSetup();

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
