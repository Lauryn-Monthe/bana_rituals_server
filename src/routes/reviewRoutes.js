const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// La route sera : GET /api/reviews/1
router.get('/:itemId', reviewController.getReviews);
router.post('/', reviewController.postReview);
router.put('/:id', reviewController.postReview);

module.exports = router;