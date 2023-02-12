const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

module.exports = async () => {
  const articles = [];
  for (let i = 0; i < 3; i++) {
    articles.push({
      title: faker.lorem.sentence(1),
      content: faker.lorem.paragraphs(5),
    });
  }
  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};

// Random for paragraph has to be lower than 255

// FUNCIONA::::

// const { Article } = require("../models");

// module.exports = async () => {
//   await Article.create({ title: "TEST", content: "TEST2" });
// };
