const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Get all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/plant/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
      const plant = await Plant.findOne({ _id: _id });
      if (plant) {
        res.json(plant);
      } else {
        res.status(404).json({ message: 'Plant not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});


// Create a new user
router.post('/', async (req, res) => {
  const plant = new Plant({
    id: req.body.id,
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
    countInStock: req.body.countInStock,
    color: req.body.color,
  });

  try {
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;