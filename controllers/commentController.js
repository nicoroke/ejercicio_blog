const { Comment, Article, User } = require("../models");

async function getComments(req, res) {
  const comments = await Comment.findAll({ include: Article });
  console.log(comments);
  return res.send({ comments });
}

async function createComment(req, res) {
  /*  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  } */

  const user = await User.findOne({ where: { firstname: req.body.firstname } });
  let articleNumber = req.params.id;
  const newComment = await Comment.create({
    content: `${req.body.content}`,
    articleId: `${req.params.id}`,
    userId: `${user.id}`,
  });
  return res.redirect(`/articulo/${articleNumber}`);
}

module.exports = { getComments, createComment };
