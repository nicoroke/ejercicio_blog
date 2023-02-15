const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

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

module.exports = { createUser, createForm };
