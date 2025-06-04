const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoriaController');

// Obtener todas las categorías
router.get('/', CategoriaController.index);

// Obtener una categoría por ID
router.get('/:id', CategoriaController.show);

// Crear una nueva categoría
router.post('/', CategoriaController.store);

// Actualizar una categoría por ID
router.put('/:id', CategoriaController.update);

// Eliminar una categoría por ID
router.delete('/:id', CategoriaController.destroy);

module.exports = router;
