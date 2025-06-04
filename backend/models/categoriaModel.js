const db = require('../config/db'); // Asegúrate de que db.js tenga la conexión a MySQL

const CategoriaModel = {
  // Obtener todas las categorías
  getAll: (callback) => {
    const query = 'SELECT * FROM categoria';
    db.query(query, callback);
  },

  // Obtener una categoría por ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM categoria WHERE IdCategoria = ?';
    db.query(query, [id], callback);
  },

  // Crear una nueva categoría
  create: (data, callback) => {
    const query = 'INSERT INTO categoria SET ?';
    db.query(query, data, callback);
  },

  // Actualizar categoría por ID
  update: (id, data, callback) => {
    const query = 'UPDATE categoria SET ? WHERE IdCategoria = ?';
    db.query(query, [data, id], callback);
  },

  // Eliminar una categoría por ID
  delete: (id, callback) => {
    const query = 'DELETE FROM categoria WHERE IdCategoria = ?';
    db.query(query, [id], callback);
  }
};

module.exports = CategoriaModel;
