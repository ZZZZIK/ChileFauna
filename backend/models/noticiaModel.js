const db = require('../config/db');

const NoticiaModel = {
  getAll: (callback) => {
    const query = 'SELECT * FROM noticia';
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM noticia WHERE IdNoticia = ?';
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = 'INSERT INTO noticia SET ?';
    db.query(query, data, callback);
  },

  update: (id, data, callback) => {
    const query = 'UPDATE noticia SET ? WHERE IdNoticia = ?';
    db.query(query, [data, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM noticia WHERE IdNoticia = ?';
    db.query(query, [id], callback);
  }
};

module.exports = NoticiaModel;
