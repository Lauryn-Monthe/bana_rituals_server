const cartService = require('../services/cartService');

async function getAllCartItems(req, res) {
    try {
        const items = await cartService.getAllCartItems();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function getCart(req, res) {
    try {
        const items = await cartService.getCart(req.params.orderId);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function addToCart(req, res) {
    try {
        const { orderId, itemId, quantity, price } = req.body;
        const item = await cartService.addToCart(orderId, itemId, quantity, price);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function updateCartItem(req, res) {
    try {
        const item = await cartService.updateCartItem(req.params.id, req.body);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function deleteCartItem(req, res) {
    try {
        await cartService.deleteCartItem(req.params.id);
        res.json({ message: 'Cart item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getAllCartItems,
    getCart,
    addToCart,
    updateCartItem,
    deleteCartItem
};
