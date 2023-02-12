const { User } = require("../models");

async function getUsers(req, res) {
  const users = await User.findAll();
  console.log(users);
  return res.send({ users });
}

module.exports = { getUsers };
