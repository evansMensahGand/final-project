const cors = require("cors");
const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send("Product Not Found");
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    if (!name || !price || !category) {
      return res.status(400).send("Please provide all fields.");
    }
    const product = await Product.create({
      name,
      price,
      description,
      category,
    });
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(404).send("Product Not found.");
    }
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const productExists = await Product.findById(productId);
    if (!postExists) {
      return res.status(404).send("Product not found.");
    }
    await Product.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
