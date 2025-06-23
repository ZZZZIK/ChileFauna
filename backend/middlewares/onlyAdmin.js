module.exports = (req, res, next) => {
  if (req.usuario?.id_perfil !== 1) {
    return res.status(403).json({ error: 'Acceso solo para administradores' });
  }
  next();
};
