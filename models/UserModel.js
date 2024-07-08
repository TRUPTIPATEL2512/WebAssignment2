const mongoose = require('mongoose');

// Define schema for UserModel with references to OrderModel
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderModel' }],
    shippingAddress: String
});

module.exports = mongoose.model('UserModel', userSchema);
