const db = require('../config/db');

const UserModel = {
  // Obtener todos los usuarios
  getAllPaged: (limit, offset, callback) => {
    const query = 'SELECT IdUsuario, correo, nomUsuario FROM usuario LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], callback);
  },

  // Crear un nuevo usuario
  create: (user, callback) => {
    const query = `INSERT INTO usuario (correo, contrasena, nomUsuario, id_perfil)
                   VALUES (?, ?, ?, ?)`;
    db.query(query, [user.correo, user.contrasena, user.nomUsuario, user.id_perfil], callback);
  },

  // Buscar usuario por correo (para login)
  findByCorreo: (correo, callback) => {
    const query = 'SELECT IdUsuario, correo, nomUsuario, id_perfil FROM usuario WHERE correo = ?';
    db.query(query, [correo], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM usuario WHERE IdUsuario = ?';
    db.query(query, [id], callback);
  }
};


module.exports = UserModel;
