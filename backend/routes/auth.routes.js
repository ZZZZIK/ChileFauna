const express = require('express');
const router = express.Router();
const { login, registrar, validarToken } = require('../controllers/auth.controller');
const verificarToken = require('../middlewares/auth.middleware');

router.post('/login', login);
router.post('/registro', registrar);
router.get('/validar', verificarToken, validarToken); // Ruta protegida

module.exports = router;