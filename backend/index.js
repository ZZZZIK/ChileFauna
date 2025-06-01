const express = require('express');
const mysql   = require('mysql2');
const cors    = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos existente
const db = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',
  database: 'chilefaunabd'
});

// Conexión a la BBDD
db.connect(err => {
  if (err) {
    console.error('✖ Error al conectar a chilefaunabd:', err);
    process.exit(1);
  }

  console.log('✔ Base de datos lista, arrancando servidor…');

  // --- CONSULTA AUTOMÁTICA AL INICIAR ---
  db.query(
    'SELECT nomComun FROM Especie',
    (err, results) => {
      if (err) {
        console.error('✖ Error al obtener nombres comunes:', err);
      } else {
        console.log('📌 Lista de nombres comunes de especies guardados:');
        results.forEach(row => console.log(`- ${row.nomComun}`));
      }
    }
  );

  // Ruta raíz
  app.get('/', (req, res) => {
    res.send(`
      <h1>Chile Fauna API</h1>
      <p>✔ Servidor Express activo</p>
      <p>✔ Base de datos <code>chilefaunabd</code> conectada</p>
    `);
  });

  // Ruta para obtener todas las especies
  app.get('/api/especies', (req, res) => {
    db.query('SELECT * FROM Especie', (err, rows) => {
      if (err) return res.status(500).send(err);
      res.json(rows);
    });
  });

  // Arrancar servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
