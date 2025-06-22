require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Seguridad
app.use(helmet());

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:8100',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.options('/*', cors());

app.use(express.json());

// IMPORTACIÓN SEGURA DE RUTAS
try {
  const categoriaRoute = require('./routes/categoriaRoute');
  const especieRoute = require('./routes/especieRoute');
  const noticiaRoute = require('./routes/noticiaRoute');
  const userRoute = require('./routes/userRoute');
  const authRoute = require('./routes/auth.routes');

  // VERIFICAR que no son undefined
  if (!categoriaRoute || !especieRoute || !noticiaRoute || !userRoute || !authRoute) {
    throw new Error('❌ Uno de los archivos de rutas no se pudo cargar correctamente');
  }

  app.use('/api/categorias', categoriaRoute);
  app.use('/api/especies', especieRoute);
  app.use('/api/noticias', noticiaRoute);
  app.use('/api/usuarios', userRoute);
  app.use('/api/auth', authRoute);

} catch (err) {
  console.error('❌ Error al cargar rutas:', err.message);
  process.exit(1);
}

module.exports = app;
