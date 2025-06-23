const UserModel = require('../models/userModel');

const UserController = {
  // Obtener todos los usuarios
  index: (req, res) => {
    console.log("Se llamó GET /api/usuarios");

    const limit = parseInt(req.query.limit) || 2;
    const offset = parseInt(req.query.offset) || 0;

    UserModel.getAllPaged(limit, offset, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  // ⛔ Se elimina la función login de aquí.
  // La autenticación ahora es manejada de forma segura por auth.controller.js

  // Ver perfil del usuario autenticado
  profile: (req, res) => {
    // La información del usuario viene del token verificado por el middleware
    res.json({
      message: 'Perfil del usuario',
      user: req.usuario // Se usa req.usuario, que es lo que define auth.middleware.js
    });
  },

  // Eliminar un usuario por su ID
  destroy: (req, res) => {
    const id = req.params.id;
    UserModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado' });
    });
  }
};

module.exports = UserController;