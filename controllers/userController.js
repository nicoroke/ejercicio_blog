const { User, Article } = require("../models");

async function getUsers(req, res) {
  const users = await User.findAll({ include: Article });
  console.log(users);
  return res.send({ users });
}

module.exports = { getUsers };
