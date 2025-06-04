const express = require('express');
const router = express.Router();
const EspecieController = require('../controllers/especieController');

router.get('/', EspecieController.index);
router.get('/:id', EspecieController.show);
router.post('/', EspecieController.store);
router.put('/:id', EspecieController.update);
router.delete('/:id', EspecieController.destroy);

module.exports = router;
