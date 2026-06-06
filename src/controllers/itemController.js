const itemService = require('../services/itemService');

async function getItems(req, res) {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function getItemsForOrder(req, res) {
    try {
        const items = await itemService.getItemsByOrder(req.params.order_id);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function createItem(req, res) {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function updateItem(req, res) {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function deleteItem(req, res) {
    try {
        await itemService.deleteItem(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getItems,
    getItemsForOrder,
    createItem,
    updateItem,
    deleteItem
};
