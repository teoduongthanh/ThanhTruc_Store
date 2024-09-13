const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModels')

const Fish = require('../models/Fish');

// Get all users
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  const product = new Product({
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
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;