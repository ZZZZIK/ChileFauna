const db = require('../config/db');

const NoticiaModel = {
  getAllPaged: (limit, offset, callback) => {
    const query = 'SELECT IdNoticia, titulo FROM noticia LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT IdNoticia, titulo, resumen, urlOrigen, fechaPublicacion FROM noticia WHERE IdNoticia = ?';
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = `INSERT INTO noticia (titulo, resumen, urlOrigen, fechaPublicacion)
                   VALUES (?, ?, ?, ?)`;
    db.query(query, [data.titulo, data.resumen, data.urlOrigen, data.fechaPublicacion], callback);
  },

  update: (id, data, callback) => {
    const query = `UPDATE noticia SET titulo = ?, resumen = ?, urlOrigen = ?, fechaPublicacion = ?
                   WHERE IdNoticia = ?`;
    db.query(query, [data.titulo, data.resumen, data.urlOrigen, data.fechaPublicacion, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM noticia WHERE IdNoticia = ?';
    db.query(query, [id], callback);
  }
};

module.exports = NoticiaModel;
