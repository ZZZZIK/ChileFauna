const jwt = require('jsonwebtoken');
const claveJWT = 'clave_secreta_segura'; // misma clave usada en el controlador

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, claveJWT, (err, usuario) => {
    if (err) return res.status(403).json({ error: 'Token inválido o expirado' });
    req.usuario = usuario;
    next();
  });
};
