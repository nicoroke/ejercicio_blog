const { faker } = require("@faker-js/faker");

module.exports = async function (Article) {
  const articles = [];
  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
    });
  }

  await Article.bulkCreate(articles);
};
