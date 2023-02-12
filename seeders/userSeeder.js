const { User } = require("../models");

module.exports = async function userSeeder() {
  const users = [
    { firstname: "Pablo", lastname: "Picasso" },
    { firstname: "Claude", lastname: "Monet" },
    { firstname: "Tolouse", lastname: "Lautrec" },
    { firstname: "Pepe", lastname: "Botella" },
  ];
  await User.bulkCreate(users);
};
