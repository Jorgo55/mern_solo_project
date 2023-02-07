const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "this field cant be blank"],
    },
    description: {
      type: String,
      required: [true, "this field cant be blank"],
    },
    price: {
      type: String,
      required: [true, "this field cant be blank"],
    },
    category: {
      type: String,
      required: [true, "this field cant be blank"],
    },
    images: {
      type: Array,
      required: [true],
    },
  },
  { minimise: false }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
