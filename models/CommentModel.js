const mongoose = require('mongoose');

// Define schema for CommentModel with references to ProductModel and UserModel
const commentSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel' }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    rating: Number,
    images: [String],
    text: String
});

module.exports = mongoose.model('CommentModel', commentSchema);
