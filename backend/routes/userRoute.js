const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const verifyToken = require('../middlewares/auth.middleware');

router.get('/', UserController.index);
//router.post('/', UserController.store);
//router.post('/auth/', UserController.login);

router.get('/profile', verifyToken, UserController.profile);

router.delete('/:id', UserController.destroy);

module.exports = router;