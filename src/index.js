require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importez-le ici

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(cors({
    origin: 'https://www.bana-rituals.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.send('API Bana Rituals en ligne');
});

const PORT = process.env.PORT || 3999;
app.listen(PORT, () => console.log(`Server launch on http://localhost:${PORT}`));