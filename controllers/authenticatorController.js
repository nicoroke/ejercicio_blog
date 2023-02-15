const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

async function index(req, res) {
  res.render("login");
}

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  const isValidPassword = await bcrypt.compare(req.body.password, user.password);
  if (isValidPassword)
    req.login(user, () => {
      res.redirect("/");
    });
  else res.redirect("/login");
}

module.exports = { index, login };
