const express = require('express');
const router = express.Router();
const Fish = require('../models/Fish');

// Get all users
router.get('/', async (req, res) => {
  try {
    const fishs = await Fish.find();
    res.json(fishs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  const fish = new Fish({
    id: req.body.id,
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const newFish = await fish.save();
    res.status(201).json(newFish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;