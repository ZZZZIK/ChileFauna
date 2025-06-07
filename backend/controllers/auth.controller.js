const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chilefaunabd'
});

const claveJWT = 'clave_secreta_segura'; // Idealmente usar .env

exports.login = (req, res) => {
  const { correo, contrasena } = req.body;

  db.query(
    `SELECT u.IdUsuario, u.nomUsuario, u.id_perfil, p.tipo_perfil 
     FROM usuario u 
     JOIN perfil p ON u.id_perfil = p.id_perfil 
     WHERE u.correo = ? AND u.contrasena = ?`,
    [correo, contrasena],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Error en el servidor' });
      if (results.length === 0) return res.status(401).json({ error: 'Credenciales incorrectas' });

      const usuario = results[0];
      const token = jwt.sign(usuario, claveJWT, { expiresIn: '4h' });

      res.json({ token, usuario });
    }
  );
};

exports.registrar = (req, res) => {
  const { correo, contrasena, nomUsuario, id_perfil } = req.body;

  db.query('SELECT * FROM usuario WHERE correo = ?', [correo], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en el servidor' });
    if (results.length > 0) return res.status(400).json({ error: 'Correo ya registrado' });

    db.query(
      'INSERT INTO usuario (correo, contrasena, nomUsuario, id_perfil) VALUES (?, ?, ?, ?)',
      [correo, contrasena, nomUsuario, id_perfil],
      (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al registrar usuario' });

        res.json({ mensaje: 'Usuario registrado exitosamente', id: result.insertId });
      }
    );
  });
};

exports.validarToken = (req, res) => {
  res.json({ ok: true, usuario: req.usuario });
};
