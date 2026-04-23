// index.js
const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB(); // Connect to MongoDB

// Step 1: Define Basic Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Step 2: Add Data Validation
const validatedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String
});

// Step 3: Add Default Values
const defaultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  category: { type: String, default: 'General' }
});

// Step 4: Use Schema Types and Options with timestamps
const timestampSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  category: { type: String, default: 'General' },
  createdAt: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

// Step 5: Subdocuments (Embedded Documents)
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: { type: String, default: 'cm' }
});

const productWithSubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  category: { type: String, default: 'General' },
  createdAt: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  dimensions: dimensionSchema
}, { timestamps: true });

const ProductWithSub = mongoose.model('ProductWithSub', productWithSubSchema);

// Function to test schema creation
const createProduct = async () => {
  try {
    // Example: Creating a product with subdocument
    const product = new ProductWithSub({
      name: 'Laptop',
      price: 1200,
      description: 'A high-performance laptop',
      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });
    await product.save();
    console.log('Product saved successfully:', product);
  } catch (error) {
    console.error('Error saving product:', error);
    if (error.errors) {
      console.error('Validation Error:', error.errors);
    }
  }
};

// Run the createProduct function
createProduct();