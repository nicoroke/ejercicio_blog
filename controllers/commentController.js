const { Comment } = require("../models");

async function getComments(req, res) {
  const comments = await Comment.findAll();
  console.log(comments);
  return res.send({ comments });
}

module.exports = { getComments };
