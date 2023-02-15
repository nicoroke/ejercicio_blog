require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const app = express();
const port = 3000;
const routes = require("./routes/articleRoutes");
const dbInitialSetup = require("./dbInitialSetup");
const makeUserAvailableInViews = require("./middlewares/makeUserAvailableInViews");
const { User } = require("./models");

app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
passport.use(
  new LocalStrategy(async (email, password, cb) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log("Nombre de usuario no existe.");
        return cb(null, false, { message: "Credenciales incorrectas." });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("La contraseña es inválida.");
        return cb(null, false, { message: "Credenciales incorrectas." });
      }
      console.log("Credenciales verificadas correctamente");
      return cb(null, user);
    } catch (error) {
      cb(error);
    }
  }),
);
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findByPk(id);
    cb(null, user); // Usuario queda disponible en req.user.
  } catch (err) {
    cb(err, user);
  }
});

app.use(makeUserAvailableInViews);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);
// dbInitialSetup();

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
