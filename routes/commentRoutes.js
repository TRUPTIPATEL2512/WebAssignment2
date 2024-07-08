const express = require('express');
const router = express.Router();
const Comment = require('../models/CommentModel');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('product').populate('user');
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new comment
router.post('/', async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
