require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const multer = require("multer");
const helmet = require("helmet");

const adminRoutes = require("./routes/adminRoutes");

connectDB();
const app = express();

app.set("trust proxy", 1);

app.use(express.json({ limit: "4mb" }));
app.use(helmet());
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use("/a", express.static("/b"));

// app.use(express.static(__dirname + "images"));
app.use("/api/images", express.static("images"));

app.post("/api/upload", upload.single("file"), function (req, res, next) {
  return res.status(200).send("Image uploaded Succesfully");
});
app.post("/api/upload/multiple", upload.array("images", 5), (req, res) => {
  const files = req.files;
  const filePaths = files.map((file) => file.path);
  res.send({
    status: true,
    message: "Images uploaded successfully",
    data: {
      filePaths,
    },
  });
});

app.use("/api/admin/", adminRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//root route
app.get("/", (req, res) => {
  res.send("App works properly!");
});

app.listen(PORT, () =>
  console.log(`server running on port http://localhost:${PORT}`)
);
