const db = require('../config/db'); // Asegúrate de tener una conexión en config/db.js

const CategoriaModel = {
  // Obtener todas las categorías
  getAll: (callback) => {
    const query = 'SELECT * FROM Categoria';
    db.query(query, callback);
  },

  // Obtener una categoría por ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM Categoria WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Crear una nueva categoría
  create: (data, callback) => {
    const query = 'INSERT INTO Categoria SET ?';
    db.query(query, data, callback);
  },

  // Actualizar categoría por ID
  update: (id, data, callback) => {
    const query = 'UPDATE Categoria SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Eliminar una categoría por ID
  delete: (id, callback) => {
    const query = 'DELETE FROM Categoria WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = CategoriaModel;
