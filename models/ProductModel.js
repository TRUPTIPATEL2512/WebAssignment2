const mongoose = require('mongoose');

// Define schema for ProductModel
const productSchema = new mongoose.Schema({
    description: String,
    image: String,
    pricing: Number,
    shippingCost: Number
});

module.exports = mongoose.model('ProductModel', productSchema);
