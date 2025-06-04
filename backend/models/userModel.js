const db = require('../config/db');

const UserModel = {
  // Obtener todos los usuarios
  getAll: (callback) => {
    db.query('SELECT * FROM usuario', callback);
  },

  // Crear un nuevo usuario
  create: (user, callback) => {
    db.query('INSERT INTO usuario SET ?', user, callback);
  },

  // Buscar usuario por correo (para login)
  findByCorreo: (correo, callback) => {
    db.query('SELECT * FROM usuario WHERE correo = ?', [correo], callback);
  }
};

module.exports = UserModel;
