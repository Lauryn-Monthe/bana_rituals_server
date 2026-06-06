const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const { authorizeRole } = require('../middleware/authorizeRole');

router.get('/', authorizeRole('ADMIN'), userController.getUsers);
router.get('/admin', authorizeRole('ADMIN'), userController.getAdmins);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
