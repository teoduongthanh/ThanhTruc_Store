const asyncHandler = require('express-async-handler')
const Plant = require('../models/Plant')
const express = require('express');

const router = express.Router();

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { plantId, qty } = req.body;
    const plant = await Plant.findById(plantId);

    if (plant) {
      res.json({
        plant: plant._id,
        name: plant.name,
        image: plant.image,
        price: plant.price,
        countInStock: plant.countInStock,
        qty,
      });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

module.exports = router;