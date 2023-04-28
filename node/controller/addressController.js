const Address = require("../models/Address");

const addAddress = async (req, res) => {
  try {
    const address = new Address({
      customerId: req.body.customerId,
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country,
    });
    await address.save();
    res.send("Symptoms created successfully");
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {};
