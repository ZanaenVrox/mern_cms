require("dotenv").config();
const connectDB = require("./config/db");

const adminData = require("./utils/admin");
const Admin = require("./models/Admin");

connectDB();
const importData = async () => {
  try {
    await Admin.deleteMany();
    await Admin.insertMany(adminData);
    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
