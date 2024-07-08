const express = require('express');
const router = express.Router();
const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');
const User = require('../models/UserModel');

// Get user's cart by userId
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId }).populate('products');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product to cart
router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            // Create new cart if it doesn't exist
            cart = new Cart({ user: userId, products: [productId], quantities: [quantity] });
        } else {
            // Check if the product already exists in the cart
            const productIndex = cart.products.indexOf(productId);
            if (productIndex > -1) {
                // Update the quantity of the existing product
                cart.quantities[productIndex] += quantity;
            } else {
                // Add new product to the cart
                cart.products.push(productId);
                cart.quantities.push(quantity);
            }
        }

        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
