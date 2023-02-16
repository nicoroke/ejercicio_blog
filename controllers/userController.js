const { User, Article } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("../passport/passport");
const pass = require("passport");

async function getUsers(req, res) {
  const users = await User.findAll({ include: Article });
  console.log(users);
  return res.send({ users });
}
async function createForm(req, res) {
  res.render("user-register");
}
async function createUser(req, res) {
  await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: await bcrypt.hash(`${req.body.password}`, 8),
  });
  res.redirect("/");
}
async function loginForm(req, res) {
  const referer = req.headers.referer;
  res.render("login", { referer, title: "Home" });
}
// async function authenticate(req, res) {
//   const user = await User.findOne({ where: { email: req.body.email } });

//   if (user === null) {
//     req.flash("info", "Credenciales incorrectas");
//     return res.redirect("/login");
//   }
//   const isValidPassword = await bcrypt.compare(req.body.password, user.password);
//   if (isValidPassword) {
//     req.login(user, () => {
//       if (req.body.referer.substring(req.body.referer.length - 6) === "/login") {
//         req.body.referer = "/admin";
//       }
//       res.redirect(req.body.referer);
//     });
//   } else {
//     req.flash("info", "Credenciales incorrectas");
//     res.redirect("/login");
//   }
// }
const authenticate = pass.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/login",
});

async function logout(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = { getUsers, createForm, createUser, loginForm, authenticate, logout };
