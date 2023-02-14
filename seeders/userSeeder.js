const { User } = require("../models");

module.exports = async function userSeeder() {
  const users = [
    { firstname: "Pablo", lastname: "Picasso", email: "ppicasso@gmail.com", password: "1234" },
    { firstname: "Claude", lastname: "Monet", email: "cmonet@gmail.com", password: "1234" },
    { firstname: "Tolouse", lastname: "Lautrec", email: "tlautrec@gmail.com", password: "1234" },
    { firstname: "Pepe", lastname: "Botella", email: "pbotella@gmail.com", password: "1234" },
  ];
  await User.bulkCreate(users);
};
