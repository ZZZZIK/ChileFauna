const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const especieRoutes = require('./routes/especieRoute');
app.use('/api/especies', especieRoutes);

const noticiaRoutes = require('./routes/noticiaRoute');
app.use('/api/noticias', noticiaRoutes);

const categoriaRoutes = require('./routes/categoriaRoute');
app.use('/api/categorias', categoriaRoutes);

const userRoutes = require('./routes/userRoute');
app.use('/api/usuarios', userRoutes);



// Ruta raíz
app.get('/', (req, res) => {
  res.send(`
    <h1>Chile Fauna API</h1>
    <p>✔ Servidor Express activo</p>
    <p>✔ Base de datos <code>chilefaunabd</code> conectada</p>
  `);
});

module.exports = app;
