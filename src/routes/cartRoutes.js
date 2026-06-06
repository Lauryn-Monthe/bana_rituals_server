const express = require('express');
const cartController = require('../controllers/cartController');
const { authenticateTokenOptional } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/authorizeRole');
const router = express.Router();

router.use(authenticateTokenOptional);

router.get('/', authorizeRole('ADMIN'), cartController.getAllCartItems);
router.get('/:orderId', cartController.getCart);
router.post('/', cartController.addToCart);
router.put('/:id', cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;
