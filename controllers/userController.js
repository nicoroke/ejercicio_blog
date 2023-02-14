const { User, Article } = require("../models");

async function getUsers(req, res) {
  const users = await User.findAll({ include: Article });
  console.log(users);
  return res.send({ users });
}
async function createForm(req, res) {}
async function storeUser(req, res) {}
async function loginForm(req, res) {}
async function authenticate(req, res) {}
async function logout(req, res) {}

module.exports = { getUsers, createForm, storeUser, loginForm, authenticate, logout };
