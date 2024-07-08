const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('products').populate('user');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
