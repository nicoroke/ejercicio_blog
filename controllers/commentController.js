const { Comment, Article } = require("../models");

async function getComments(req, res) {
  const comments = await Comment.findAll({ include: Article });
  console.log(comments);
  return res.send({ comments });
}

async function createComment(req, res) {
  let articleNumber = req.params.id;
  const newComment = await Comment.create({
    content: `${req.body.content}`,
    articleId: `${req.params.id}`,
    userId: `${req.params.id}`,
  });
  return res.redirect(`/articulo/${articleNumber}`);
}

module.exports = { getComments, createComment };
