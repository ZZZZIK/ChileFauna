const EspecieModel = require('../models/especieModel');

const EspecieController = {
  // Obtener todas las especies
  index: (req, res) => {
    console.log("Se llamó GET /api/especies");

    const limit = parseInt(req.query.limit) || 5;
    const offset = parseInt(req.query.offset) || 0;

    EspecieModel.getAllPaged(limit, offset, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  // Obtener una especie por ID
  show: (req, res) => {
    const id = req.params.id;
    EspecieModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0) return res.status(404).json({ message: 'Especie no encontrada' });
      res.json(result[0]);
    });
  },

  // Crear una nueva especie
  store: (req, res) => {
  const {
      nomComun,
      nomCientifico,
      descripcion,
      gradoExtincion,
      indicadorPeligro,
      ubicacion,
      categoria,
      imgEspecie // ← nuevo
    } = req.body;

    if (!nomCientifico) {
      return res.status(400).json({ error: 'El nombre científico es obligatorio' });
    }

    const nuevaEspecie = {
        nomComun,
        nomCientifico,
        descripcion,
        gradoExtincion,
        indicadorPeligro,
        ubicacion,
        categoria,
        imgEspecie // ← nuevo
      };

      EspecieModel.create(nuevaEspecie, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({
          message: 'Especie creada',
          especieId: result.insertId,
          ...nuevaEspecie
        });
      });
    },

  update: (req, res) => {
    const id = req.params.id;
    const {
      nomComun,
      nomCientifico,
      descripcion,
      gradoExtincion,
      indicadorPeligro,
      ubicacion,
      categoria,
      imgEspecie // ← nuevo
    } = req.body;

    const especieActualizada = {
      nomComun,
      nomCientifico,
      descripcion,
      gradoExtincion,
      indicadorPeligro,
      ubicacion,
      categoria,
      imgEspecie // ← nuevo
    };

    EspecieModel.update(id, especieActualizada, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Especie no encontrada' });
      }
      res.json({
        message: 'Especie actualizada',
        especieId: id,
        ...especieActualizada
      });
    });
  },
  // Eliminar especie por ID
  destroy: (req, res) => {
    const id = req.params.id;
    EspecieModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Especie no encontrada' });
      }
      res.json({ message: 'Especie eliminada' });
    });
  }
};

module.exports = EspecieController;
