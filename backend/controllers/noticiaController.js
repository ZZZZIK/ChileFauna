const NoticiaModel = require('../models/noticiaModel');

const NoticiaController = {
  // Obtener todas las noticias
  index: (req, res) => {
    console.log("Se llamó GET /api/noticias");
    NoticiaModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  // Obtener una noticia por ID
  show: (req, res) => {
    const id = req.params.id;
    NoticiaModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0) return res.status(404).json({ message: 'Noticia no encontrada' });
      res.json(result[0]);
    });
  },

  // Crear una nueva noticia
  store: (req, res) => {
    const { titulo, resumen, urlOrigen, fechaPublicacion } = req.body;

    if (!titulo || !resumen || !urlOrigen || !fechaPublicacion) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevaNoticia = { titulo, resumen, urlOrigen, fechaPublicacion };

    NoticiaModel.create(nuevaNoticia, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Noticia creada', noticiaId: result.insertId, ...nuevaNoticia });
    });
  },

  // Actualizar noticia existente
  update: (req, res) => {
    const id = req.params.id;
    const { titulo, resumen, urlOrigen, fechaPublicacion } = req.body;

    const noticiaActualizada = { titulo, resumen, urlOrigen, fechaPublicacion };

    NoticiaModel.update(id, noticiaActualizada, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Noticia no encontrada' });
      }
      res.json({ message: 'Noticia actualizada', noticiaId: id, ...noticiaActualizada });
    });
  },

  // Eliminar noticia
  destroy: (req, res) => {
    const id = req.params.id;
    NoticiaModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Noticia no encontrada' });
      }
      res.json({ message: 'Noticia eliminada' });
    });
  }
};

module.exports = NoticiaController;
