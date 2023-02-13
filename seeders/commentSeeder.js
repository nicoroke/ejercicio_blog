const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

module.exports = async () => {
  const comments = [];
  for (let i = 0; i < 20; i++) {
    comments.push({
      content: faker.lorem.paragraphs(5),
      articleId: faker.datatype.number({ min: 1, max: 3 }),
      userId: faker.datatype.number({ min: 1, max: 4 }),
    });
  }
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
