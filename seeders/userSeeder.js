module.exports = async function userSeeder(User) {
  const users = [
    { firstname: "Pablo", lastname: "Picasso" },
    { firstname: "Claude", lastname: "Monet" },
    { firstname: "Tolouse", lastname: "Lautrec" },
  ];
  await User.bulkCreate(users);
};
