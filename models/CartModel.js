const mongoose = require('mongoose');

// Define schema for CartModel with references to ProductModel and UserModel
const cartSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel' }], 
    quantities: [Number],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', unique: true }
});

module.exports = mongoose.model('CartModel', cartSchema);
