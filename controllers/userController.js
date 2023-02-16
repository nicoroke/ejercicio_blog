const { User, Article } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

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
const passportAuth = passport.authenticate("local", {
  failureRedirect: "/login",
  failureMessage: true,
});
async function authenticate(req, res) {
  res.redirect("/admin");
}

async function logout(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = {
  getUsers,
  createForm,
  createUser,
  loginForm,
  passportAuth,
  authenticate,
  logout,
};
