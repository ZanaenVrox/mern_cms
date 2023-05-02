require("dotenv").config();
const connectDB = require("./config/db");

const adminData = require("./utils/admin");
const Admin = require("./models/Admin");
const postCategoriesData = require("./utils/postCategories");
const PostCategories = require("./models/PostCategories");
const postsData = require("./utils/posts");
const Post = require("./models/Post");

connectDB();
const importData = async () => {
  try {
    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    await PostCategories.deleteMany();
    await PostCategories.insertMany(postCategoriesData);

    await Post.deleteMany();
    await Post.insertMany(postsData);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
