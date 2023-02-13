const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const Article = require("./Article");
const Comment = require("./Comment");
const User = require("./User");

Article.initModel(sequelize);
Comment.initModel(sequelize);
User.initModel(sequelize);

User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
  sequelize,
  Article,
  Comment,
  User,
};
