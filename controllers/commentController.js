const { Comment, Article } = require("../models");

async function getComments(req, res) {
  const comments = await Comment.findAll({ include: Article });
  console.log(comments);
  return res.send({ comments });
}

module.exports = { getComments };
