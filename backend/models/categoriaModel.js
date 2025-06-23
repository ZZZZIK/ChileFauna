const db = require('../config/db');

const CategoriaModel = {
  // Obtener todas las categorías paginado y optimizado
  getAllPaged: (limit, offset, callback) => {
    const query = 'SELECT IdCategoria, nombre FROM categoria LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  },

  // Obtener una categoría por ID
  getById: (id, callback) => {
    const query = 'SELECT IdCategoria, nombre, descripcion FROM categoria WHERE IdCategoria = ?';
    db.query(query, [id], callback);
  },

  // Crear una nueva categoría
  create: (data, callback) => {
    const query = 'INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)';
    db.query(query, [data.nombre, data.descripcion], callback);
  },

  // Actualizar categoría por ID
  update: (id, data, callback) => {
    const query = 'UPDATE categoria SET nombre = ?, descripcion = ? WHERE IdCategoria = ?';
    db.query(query, [data.nombre, data.descripcion, id], callback);
  },

  // Eliminar una categoría por ID
  delete: (id, callback) => {
    const query = 'DELETE FROM categoria WHERE IdCategoria = ?';
    db.query(query, [id], callback);
  }
};

module.exports = CategoriaModel;
