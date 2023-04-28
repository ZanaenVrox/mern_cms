const bcrypt = require("bcryptjs");
const admins = [
  {
    name: "M.Zanaen Ullah",
    image: "Zanaen.png",
    email: "admin@gm.com",
    password: bcrypt.hashSync("12345678"),
    phone: "123456789",
    role: "Admin",
    joiningData: new Date(),
  },
];

module.exports = admins;
