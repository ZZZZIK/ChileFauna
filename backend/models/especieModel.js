const db = require('../config/db');

const EspecieModel = {
  // Obtener todas las especies
  getAllPaged: (limit, offset, callback) => {
    const query = 'SELECT IdEspecie, nomCientifico, nomComun FROM especie LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  },

  // Obtener una especie por ID
  getById: (id, callback) => {
    const query = 'SELECT IdEspecie, nomCientifico, nomComun, descripcion, gradoExtincion, indicadorPeligro, ubicacion, IdCategoria FROM especie WHERE IdEspecie = ?';
    db.query(query, [id], callback);
  },

  // Crear una nueva especie
  create: (data, callback) => {
    const query = `INSERT INTO especie
      (nomCientifico, nomComun, descripcion, gradoExtincion, indicadorPeligro, ubicacion, IdCategoria)
      VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.nomCientifico,
      data.nomComun,
      data.descripcion,
      data.gradoExtincion,
      data.indicadorPeligro,
      data.ubicacion,
      data.IdCategoria
    ];
    db.query(query, values, callback);
  },

  // Actualizar una especie existente
  update: (id, data, callback) => {
    const query = `UPDATE especie SET
      nomCientifico = ?, nomComun = ?, descripcion = ?, gradoExtincion = ?,
      indicadorPeligro = ?, ubicacion = ?, IdCategoria = ?
      WHERE IdEspecie = ?`;
    const values = [
      data.nomCientifico,
      data.nomComun,
      data.descripcion,
      data.gradoExtincion,
      data.indicadorPeligro,
      data.ubicacion,
      data.IdCategoria,
      id
    ];
    db.query(query, values, callback);
  },

  // Eliminar una especie por ID
  delete: (id, callback) => {
    const query = 'DELETE FROM especie WHERE IdEspecie = ?';
    db.query(query, [id], callback);
  }
};

module.exports = EspecieModel;
