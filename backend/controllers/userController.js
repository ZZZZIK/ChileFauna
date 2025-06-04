const jwt = require("jsonwebtoken");
const UserModel = require('../models/userModel');

const UserController = {
  // Obtener todos los usuarios
  index: (req, res) => {
    UserModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  // Registrar un nuevo usuario
  store: (req, res) => {
    const { correo, contrasena, nomUsuario, id_perfil } = req.body;

    if (!correo || !contrasena || !nomUsuario || !id_perfil) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    UserModel.findByCorreo(correo, (err, results) => {
      if (err) return res.status(500).json({ error: err });

      if (results.length > 0) {
        return res.status(409).json({ error: 'El correo ya está registrado' });
      }

      const newUser = { correo, contrasena, nomUsuario, id_perfil };

      UserModel.create(newUser, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Usuario registrado", userId: result.insertId, ...newUser });
      });
    });
  },

  // Iniciar sesión
  login: (req, res) => {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
      return res.status(400).json({ error: 'Correo y contraseña requeridos' });
    }

    UserModel.findByCorreo(correo, (err, results) => {
      if (err) return res.status(500).json({ error: err });

      if (results.length === 0) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }

      const user = results[0];

      if (user.contrasena !== contrasena) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }

      const JWT_SECRET = 'clave_super_secreta_123';
      const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

      res.json({ message: `Bienvenido ${user.nomUsuario}`, token });
    });
  },

  // Ver perfil
  profile: (req, res) => {
    res.json({
      message: 'Perfil del usuario',
      user: req.user
    });
  }
};

module.exports = UserController;
