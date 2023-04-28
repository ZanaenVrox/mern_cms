const Notification = require("../models/Notification");

const createNotification = async (req, res) => {
  try {
    const newNotification = new Notification({
      user_id: req.body.user_id,
      message: req.body.message,
    });

    const notification = await newNotification.save();
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getNotification = async (req, res) => {
  try {
    const notification = await Notification.find({
      user_id: req.params.userId,
    });
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createNotification,
  getNotification,
};
