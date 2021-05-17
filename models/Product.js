const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    image: {
      type: Object,
      required: [false, "Image of the product may be uploaded"],
    },
    name: {
      type: String,
      required: [true, "Product title is required."],
    },
    price: {
      type: String,
      required: [true, "Price is required."],
    },
    brandName: {
      type: String,
      required: [false, "Brand name of the product can provided"],
    },

    description: {
      type: String,
      required: [true, "Kindly provide description for the product"],
    },

    category: {
      type: String,
      enum: ["Shoes", "Bags", "Clothes"],
      required: [true, "Product category is required."],
    },

    checked: {
      type: Boolean,
      default: false,
    },

    sold: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
