const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async function userSeeder() {
  const passwordHashed = await bcrypt.hash("1234", 8);
  const users = [
    {
      firstname: "Pablo",
      lastname: "Picasso",
      email: "ppicasso@gmail.com",
      password: passwordHashed,
    },
    { firstname: "Claude", lastname: "Monet", email: "cmonet@gmail.com", password: passwordHashed },
    {
      firstname: "Tolouse",
      lastname: "Lautrec",
      email: "tlautrec@gmail.com",
      password: passwordHashed,
    },
    {
      firstname: "Pepe",
      lastname: "Botella",
      email: "pbotella@gmail.com",
      password: passwordHashed,
    },
    {
      firstname: "Pepe",
      lastname: "Botella",
      email: "admin@gmail.com",
      role: "admin",
      password: passwordHashed,
    },
  ];
  await User.bulkCreate(users);
};
