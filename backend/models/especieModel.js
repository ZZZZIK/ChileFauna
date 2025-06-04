const db = require('../config/db');

const EspecieModel = {
  // Obtener todas las especies
  getAll: (callback) => {
    const sql = 'SELECT * FROM especie';
    db.query(sql, callback);
  },

  // Obtener una especie por ID
  getById: (id, callback) => {
    const sql = 'SELECT * FROM especie WHERE IdEspecie = ?';
    db.query(sql, [id], callback);
  },

  // Crear una nueva especie
  create: (especie, callback) => {
    const sql = `
      INSERT INTO especie (nomCientifico, nomComun, descripcion, gradoExtincion, indicadorPeligro, ubicacion)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
      especie.nomCientifico,
      especie.nomComun,
      especie.descripcion,
      especie.gradoExtincion,
      especie.indicadorPeligro,
      especie.ubicacion
    ];
    db.query(sql, values, callback);
  },

  // Actualizar una especie existente
  update: (id, especie, callback) => {
    const sql = `
      UPDATE especie SET
        nomCientifico = ?,
        nomComun = ?,
        descripcion = ?,
        gradoExtincion = ?,
        indicadorPeligro = ?,
        ubicacion = ?
      WHERE IdEspecie = ?
    `;
    const values = [
      especie.nomCientifico,
      especie.nomComun,
      especie.descripcion,
      especie.gradoExtincion,
      especie.indicadorPeligro,
      especie.ubicacion,
      id
    ];
    db.query(sql, values, callback);
  },

  // Eliminar una especie por ID
  delete: (id, callback) => {
    const sql = 'DELETE FROM especie WHERE IdEspecie = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = EspecieModel;
