const Menu = require("../models/Menu");

// Create a new menu
const createMenu = async (req, res) => {
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all menus
const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific menu by name
const getMenuByName = async (req, res) => {
  try {
    const menu = await Menu.findOne({ name: req.params.name });
    if (menu === null) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a specific menu by name
const updateMenuByName = async (req, res) => {
  try {
    const menu = await Menu.findOne({ name: req.params.name });
    if (menu === null) {
      return res.status(404).json({ message: "Menu not found" });
    }
    Object.assign(menu, req.body);
    await menu.save();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific menu by name
const deleteMenuByName = async (req, res) => {
  try {
    const menu = await Menu.findOne({ name: req.params.name });
    if (menu === null) {
      return res.status(404).json({ message: "Menu not found" });
    }
    await menu.remove();
    res.json({ message: "Menu deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMenu,
  getAllMenus,
  getMenuByName,
  updateMenuByName,
  deleteMenuByName,
};
