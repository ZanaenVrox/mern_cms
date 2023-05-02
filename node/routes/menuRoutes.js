const express = require("express");
const router = express.Router();
const {
  createMenu,
  getAllMenus,
  getMenuByName,
  updateMenuByName,
  deleteMenuByName,
} = require("../controller/menuController");

// Create a new menu
router.post("/", createMenu);

// Get all menus
router.get("/", getAllMenus);

// Get a specific menu by name
router.get("/:name", getMenuByName);

// Update a specific menu by name
router.patch("/:name", updateMenuByName);

// Delete a specific menu by name
router.delete("/:name", deleteMenuByName);

module.exports = router;
