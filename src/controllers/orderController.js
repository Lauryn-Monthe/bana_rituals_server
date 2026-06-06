const orderService = require('../services/orderService');

async function getOrders(req, res) {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function getMyOrders(req, res) {
    try {
        const orders = await orderService.getUserOrders(req.user.id);
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}


async function createOrder(req, res) {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function updateOrder(req, res) {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function deleteOrder(req, res) {
    try {
        await orderService.deleteOrder(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getOrders, getMyOrders, createOrder, updateOrder, deleteOrder };
