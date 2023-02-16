require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("express-flash");
const app = express();
const port = 3000;
const routes = require("./routes/articleRoutes");
const passport = require("./passport/passport");
const dbInitialSetup = require("./dbInitialSetup");
const makeUserAvailableInViews = require("./middlewares/makeUserAvailableInViews");

app.use(cookieParser("keyboard cat"));
app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(flash());

passport(app);
app.use(makeUserAvailableInViews);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);
// dbInitialSetup();

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
