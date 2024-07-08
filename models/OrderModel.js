const mongoose = require('mongoose');

// Define schema for OrderModel with references to ProductModel and UserModel
const orderSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel' }],
    quantities: [Number],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OrderModel', orderSchema);
