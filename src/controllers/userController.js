const userService = require('../services/userService');

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function getAdmins(req, res) {
    try {
        const users = await userService.getAdmins();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function getUser(req, res) {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function updateUser(req, res) {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

async function deleteUser(req, res) {
    try {
        await userService.deleteUser(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getUsers,getAdmins, getUser, createUser, updateUser, deleteUser };
