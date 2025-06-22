require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const claveJWT = process.env.JWT_SECRET;

// REGISTRO DE USUARIO
exports.registrar = (req, res) => {
  const { correo, contrasena, nomUsuario, id_perfil } = req.body;

  if (!correo || !contrasena || !nomUsuario || !id_perfil) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  db.query('SELECT * FROM usuario WHERE correo = ?', [correo], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al verificar el correo' });
    if (results.length > 0) return res.status(400).json({ error: 'Correo ya registrado' });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    db.query(
      'INSERT INTO usuario (correo, contrasena, nomUsuario, id_perfil) VALUES (?, ?, ?, ?)',
      [correo, hashedPassword, nomUsuario, id_perfil],
      (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al registrar usuario' });

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', id: result.insertId });
      }
    );
  });
};

// LOGIN DE USUARIO
exports.login = (req, res) => {
  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  db.query(
    'SELECT IdUsuario, nomUsuario, contrasena, id_perfil FROM usuario WHERE correo = ?',
    [correo],
    async (err, results) => {
      if (err) return res.status(500).json({ error: 'Error del servidor' });
      if (results.length === 0) return res.status(401).json({ error: 'Credenciales incorrectas' });

      const usuarioBD = results[0];
      const match = await bcrypt.compare(contrasena, usuarioBD.contrasena);
      if (!match) return res.status(401).json({ error: 'Credenciales incorrectas' });

      const payload = {
        id: usuarioBD.IdUsuario,
        nomUsuario: usuarioBD.nomUsuario,
        id_perfil: usuarioBD.id_perfil
      };

      const token = jwt.sign(payload, claveJWT, { expiresIn: '4h' });

      res.json({ token, usuario: payload });
    }
  );
};

// VALIDAR TOKEN
exports.validarToken = (req, res) => {
  res.json({ ok: true, usuario: req.usuario });
};
