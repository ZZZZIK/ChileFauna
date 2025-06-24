const db = require('../config/db');

const NoticiaModel = {
  // Obtener todas las noticias paginadas (incluye imagen)
  getAllPaged: (limit, offset, callback) => {
    const query = 'SELECT IdNoticia, titulo, resumen, urlOrigen, imgNoticia, fuente FROM noticia LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  },

  // Obtener una noticia por ID (incluye imagen)
  getById: (id, callback) => {
    const query = `
      SELECT IdNoticia, titulo, resumen, urlOrigen, fechaPublicacion, imgNoticia, fuente
      FROM noticia 
      WHERE IdNoticia = ?`;
    db.query(query, [id], callback);
  },

  // Crear una nueva noticia (incluye imagen)
  create: (data, callback) => {
    const query = `
      INSERT INTO noticia (titulo, resumen, urlOrigen, fechaPublicacion, imgNoticia, fuente)
      VALUES (?, ?, ?, ?, ?)`;
    db.query(
      [data.titulo, data.resumen, data.urlOrigen, data.fechaPublicacion, data.imgNoticia],
      callback
    );
  },

  // Actualizar una noticia existente (incluye imagen)
  update: (id, data, callback) => {
    const query = `
      UPDATE noticia 
      SET titulo = ?, resumen = ?, urlOrigen = ?, fechaPublicacion = ?, imgNoticia = ?, fuente = ?
      WHERE IdNoticia = ?`;
    db.query(
      [data.titulo, data.resumen, data.urlOrigen, data.fechaPublicacion, data.imgNoticia, id],
      callback
    );
  },

  // Eliminar noticia por ID
  delete: (id, callback) => {
    const query = 'DELETE FROM noticia WHERE IdNoticia = ?';
    db.query(query, [id], callback);
  }
};

module.exports = NoticiaModel;
