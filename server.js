const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoUri = 'mongodb+srv://pateltrupti0712:trupti%400712@truptipatel.muxmz89.mongodb.net/?retryWrites=true&w=majority&appName=TruptiPatel';

// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(bodyParser.json());

// Register routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
