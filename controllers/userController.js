const { User, Article } = require("../models");
const bcrypt = require("bcryptjs");

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
async function loginForm(req, res) {}
async function authenticate(req, res) {}
async function logout(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = { getUsers, createForm, createUser, loginForm, authenticate, logout };
