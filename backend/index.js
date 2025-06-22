// index.js

require('dotenv').config();
const mysql = require('mysql2');
const app = require('./server'); // Esto carga server.js y todas sus rutas

// ---- INICIA EL SERVIDOR INMEDIATAMENTE ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log('✔ Servidor arrancó. Ahora intentando conectar a la base de datos...');

  // ---- CONECTA A LA BASE DE DATOS DESPUÉS DE ARRANCAR ----
  const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'chilefaunabd'
  });

  db.connect(err => {
    if (err) {
      console.error('✖ Error al conectar a chilefaunabd:', err);
      // El servidor ya está corriendo, así que no usamos process.exit(1)
      return;
    }
    console.log('✔ Conexión con la base de datos establecida correctamente.');
  });
});