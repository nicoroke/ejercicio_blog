module.exports = async function commentSeeder(Comment) {
  await Comment.create({ content: "ESTE ES UN COMMENT DE PRUEBA" });
};
