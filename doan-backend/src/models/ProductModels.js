
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    id: {
    type: Number,
    required: true,
    unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    category:{
        type:Array,
        require:true
    }
    ,
    color: {
      type: Array,
      required: true
    }
}
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
