const express = require('express');
const router = express.Router();
const NoticiaController = require('../controllers/noticiaController');

router.get('/', NoticiaController.index);
router.get('/:id', NoticiaController.show);
router.post('/', NoticiaController.store);
router.put('/:id', NoticiaController.update);
router.delete('/:id', NoticiaController.destroy);

module.exports = router;
