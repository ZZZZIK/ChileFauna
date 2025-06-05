const mysql = require('mysql2');
const app = require('./app');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chilefaunabd'
});

db.connect(err => {
  if (err) {
    console.error('✖ Error al conectar a chilefaunabd:', err);
    process.exit(1);
  }

  console.log('✔ Base de datos lista, arrancando servidor…');

  // Consulta automática al iniciar
  db.query('SELECT nomComun FROM Especie', (err, results) => {
    if (err) {
      console.error('✖ Error al obtener nombres comunes:', err);
    } else {
      console.log('📌 Lista de nombres comunes de especies guardados:');
      results.forEach(row => console.log(`- ${row.nomComun}`));
    }
  });

  // Ruta para obtener todas las especies
  app.get('/api/especies', (req, res) => {
    db.query('SELECT * FROM Especie', (err, rows) => {
      if (err) return res.status(500).send(err);
      res.json(rows);
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
  
});
