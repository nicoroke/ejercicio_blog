const { Comment, Article, User } = require("../models");

async function getComments(req, res) {
  const comments = await Comment.findAll({ include: Article });
  console.log(comments);
  return res.send({ comments });
}

async function createComment(req, res) {
  if (req.isAuthenticated()) {
    let articleNumber = req.params.id;
    const newComment = await Comment.create({
      content: `${req.body.content}`,
      articleId: `${req.params.id}`,
      userId: req.user.id,
    });
    return res.redirect(`/articulo/${articleNumber}`);
  } else {
    return res.redirect("/login");
  }
}

module.exports = { getComments, createComment };
