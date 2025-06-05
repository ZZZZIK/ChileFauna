const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// importar todas las rutas
const categoriaRoute = require('./routes/categoriaRoute');
const especieRoute = require('./routes/especieRoute');
const noticiaRoute = require('./routes/noticiaRoute');
const userRoute = require('./routes/userRoute');

// asociar cada endpoint con su ruta
app.use('/api/categorias', categoriaRoute);
app.use('/api/especies', especieRoute);
app.use('/api/noticias', noticiaRoute);
app.use('/api/usuarios', userRoute);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});