const CategoriaModel = require('../models/categoriaModel');

const CategoriaController = {
  // Obtener todas las categorías
  index: (req, res) => {
    CategoriaModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  // Obtener una categoría por ID
  show: (req, res) => {
    const id = req.params.id;
    CategoriaModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
      res.json(result[0]);
    });
  },

  // Crear una nueva categoría
  store: (req, res) => {
    const { nombre, descripcion, imagen } = req.body;

    if (!nombre || !descripcion) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newCategoria = { nombre, descripcion, imagen };

    CategoriaModel.create(newCategoria, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Categoría creada', categoriaId: result.insertId, ...newCategoria });
    });
  },

  // Eliminar una categoría por ID
  destroy: (req, res) => {
    const id = req.params.id;
    CategoriaModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
      }
      res.json({ message: 'Categoría eliminada' });
    });
  }
};

module.exports = CategoriaController;


update: (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, imagen } = req.body;

  if (!nombre || !descripcion) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const updatedCategoria = { nombre, descripcion, imagen };

  CategoriaModel.update(id, updatedCategoria, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json({ message: 'Categoría actualizada', categoriaId: id, ...updatedCategoria });
  });
}
