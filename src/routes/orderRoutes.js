const express = require('express');
const { PrismaClient } = require('@prisma/client');
const orderController = require('../controllers/orderController');
const router = express.Router();
const { authenticateTokenOptional } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/authorizeRole');

const prisma = new PrismaClient();

router.get('/', authorizeRole('ADMIN'), orderController.getOrders);
router.post('/', orderController.createOrder);
router.get('/my-orders', authenticateTokenOptional, orderController.getMyOrders);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
