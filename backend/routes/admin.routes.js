const { Router }  = require('express');
const catCtrl     = require('../controllers/categoriaController');
const espCtrl     = require('../controllers/especieController');
const notCtrl     = require('../controllers/noticiaController');

const authMiddleware = require('../middlewares/auth.middleware');
const onlyAdmin = require('../middlewares/onlyAdmin');

const router = Router();

// Aplica los middlewares a todas las rutas del router
router.use(authMiddleware);
router.use(onlyAdmin);

/* ---------- CATEGORÍAS ---------- */
router.get   ('/categorias',       catCtrl.index);      // listar
router.get   ('/categorias/:id',   catCtrl.show);       // detalle
router.post  ('/categorias',       catCtrl.store);      // crear
router.put   ('/categorias/:id',   catCtrl.update);     // actualizar
router.delete('/categorias/:id',   catCtrl.destroy);    // eliminar

/* ---------- ESPECIES ---------- */
router.get   ('/especies',         espCtrl.index);
router.get   ('/especies/:id',     espCtrl.show);
router.post  ('/especies',         espCtrl.store);
router.put   ('/especies/:id',     espCtrl.update);
router.delete('/especies/:id',     espCtrl.destroy);

/* ---------- NOTICIAS ---------- */
router.get   ('/noticias',         notCtrl.index);
router.get   ('/noticias/:id',     notCtrl.show);
router.post  ('/noticias',         notCtrl.store);
router.put   ('/noticias/:id',     notCtrl.update);
router.delete('/noticias/:id',     notCtrl.destroy);

module.exports = router;
