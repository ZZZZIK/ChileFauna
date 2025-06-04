const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`
    <h1>Chile Fauna API</h1>
    <p>✔ Servidor Express activo</p>
    <p>✔ Base de datos <code>chilefaunabd</code> conectada</p>
  `);
});

module.exports = app;
